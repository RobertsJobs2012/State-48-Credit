"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { cardSteps, type QuizCardStep, type TimelineId } from "./quizData";
import { submitQuiz, type QuizPayload } from "@/app/get-started/actions";
import { cn } from "@/lib/utils";

type Answers = {
  aspiration: string;
  problem: string;
  readiness: string;
  loss: string;
  timeline: TimelineId | "";
};

const TOTAL_STEPS = 6;
const ADVANCE_DELAY = 400;

export function Quiz() {
  const [stepIndex, setStepIndex] = useState(1); // 1..6
  const [answers, setAnswers] = useState<Answers>({
    aspiration: "",
    problem: "",
    readiness: "",
    loss: "",
    timeline: "",
  });
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const topRef = useRef<HTMLDivElement>(null);

  // Scroll-into-view + focus management on step change
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const firstFocusable = topRef.current?.querySelector<HTMLElement>(
      "[data-quiz-first-focus]"
    );
    firstFocusable?.focus({ preventScroll: true });
  }, [stepIndex]);

  const currentCardStep: QuizCardStep | undefined = cardSteps.find(
    (s) => s.index === stepIndex
  );

  function advance() {
    setStepIndex((i) => Math.min(i + 1, TOTAL_STEPS));
  }

  function back() {
    setError(null);
    setStepIndex((i) => Math.max(i - 1, 1));
  }

  function selectCard(
    step: QuizCardStep,
    cardId: string,
    cardTitle: string
  ) {
    // Store the human-readable title for the email — not just the id.
    setAnswers((prev) => ({
      ...prev,
      [step.id]: step.id === "timeline" ? (cardId as TimelineId) : cardTitle,
    } as Answers));

    window.setTimeout(() => {
      advance();
    }, ADVANCE_DELAY);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const payload: QuizPayload = {
      aspiration: answers.aspiration,
      problem: answers.problem,
      readiness: answers.readiness,
      loss: answers.loss,
      timeline: answers.timeline,
      firstName: firstName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      consent,
    };

    startTransition(async () => {
      const result = await submitQuiz(payload);
      if ("ok" in result && !result.ok) {
        setError(result.error);
      }
      // On success, the Server Action redirects to /thank-you — no client handling needed.
    });
  }

  const pctComplete = ((stepIndex - 1) / (TOTAL_STEPS - 1)) * 100;

  return (
    <div ref={topRef} className="scroll-mt-32">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-copper-hover)]">
            Step {stepIndex} of {TOTAL_STEPS}
          </p>
          {stepIndex > 1 && (
            <button
              type="button"
              onClick={back}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-turquoise-hover)]"
            >
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          )}
        </div>
        <div
          className="relative mt-3 h-2 overflow-hidden rounded-full bg-[var(--color-surface-sunken)]"
          role="progressbar"
          aria-label="Quiz progress"
          aria-valuenow={stepIndex}
          aria-valuemin={1}
          aria-valuemax={TOTAL_STEPS}
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(to_right,var(--color-copper),var(--color-copper-hover),var(--color-warning),var(--color-turquoise))] shadow-[0_0_16px_var(--color-copper-hover),0_0_4px_var(--color-turquoise)] transition-[width] duration-500 ease-out"
            style={{ width: `${pctComplete}%` }}
          />
        </div>
      </div>

      {/* Step body — animated mount on step change */}
      <div key={stepIndex} className="anim-fade-in">
        {currentCardStep && (
          <CardStepView step={currentCardStep} onSelect={selectCard} selected={getSelectedCardId(currentCardStep, answers)} />
        )}
        {stepIndex === 6 && (
          <ContactStepView
            firstName={firstName}
            email={email}
            phone={phone}
            consent={consent}
            isPending={isPending}
            error={error}
            onChangeFirstName={setFirstName}
            onChangeEmail={setEmail}
            onChangePhone={setPhone}
            onChangeConsent={setConsent}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}

function getSelectedCardId(step: QuizCardStep, answers: Answers): string | null {
  const raw = answers[step.id];
  if (!raw) return null;
  if (step.id === "timeline") {
    return raw as string; // stored as TimelineId
  }
  const match = step.cards.find((c) => c.title === raw);
  return match?.id ?? null;
}

// ─── Card step ────────────────────────────────────────────────────────────────

function CardStepView({
  step,
  onSelect,
  selected,
}: {
  step: QuizCardStep;
  onSelect: (step: QuizCardStep, cardId: string, cardTitle: string) => void;
  selected: string | null;
}) {
  return (
    <section aria-label={`Step ${step.index}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-turquoise-hover)]">
        {step.header}
      </p>
      <h2 className="mt-3 text-2xl md:text-3xl">{step.question}</h2>

      <ul className="mt-8 space-y-3">
        {step.cards.map((card, i) => {
          const isSelected = selected === card.id;
          return (
            <li key={card.id}>
              <button
                type="button"
                data-quiz-first-focus={i === 0 ? true : undefined}
                onClick={() => onSelect(step, card.id, card.title)}
                aria-pressed={isSelected}
                className={cn(
                  "group flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-200 focus-visible:outline-none",
                  isSelected
                    ? "border-[var(--color-copper)] bg-[var(--color-copper-glow)] shadow-[0_0_0_4px_var(--color-copper-glow),var(--shadow-lg)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)] hover:-translate-y-0.5 hover:border-[var(--color-turquoise)] hover:bg-[var(--color-surface-elevated)] hover:shadow-[var(--shadow-md)]"
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl transition-colors",
                    isSelected
                      ? "bg-[var(--color-copper)] text-white"
                      : "bg-[var(--color-surface-sunken)] group-hover:bg-[var(--color-turquoise-glow)]"
                  )}
                  aria-hidden="true"
                >
                  {card.emoji}
                </span>
                <span className="flex-1">
                  <span className="block text-[16.5px] font-semibold leading-snug text-[var(--color-text-headline)]">
                    {card.title}
                  </span>
                  <span className="mt-1 block text-sm text-[var(--color-text-secondary)]">
                    {card.detail}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all",
                    isSelected
                      ? "border-transparent bg-[var(--color-copper)] text-white"
                      : "border-[var(--color-border-strong)] text-transparent group-hover:border-[var(--color-turquoise)]"
                  )}
                >
                  <Icon name="check" size={14} />
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {step.note && (
        <p className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-sunken)] p-4 text-sm text-[var(--color-text-secondary)]">
          <span className="font-semibold text-[var(--color-text-lifted)]">Note:</span>{" "}
          {step.note}
        </p>
      )}
    </section>
  );
}

// ─── Contact step ─────────────────────────────────────────────────────────────

function ContactStepView({
  firstName,
  email,
  phone,
  consent,
  isPending,
  error,
  onChangeFirstName,
  onChangeEmail,
  onChangePhone,
  onChangeConsent,
  onSubmit,
}: {
  firstName: string;
  email: string;
  phone: string;
  consent: boolean;
  isPending: boolean;
  error: string | null;
  onChangeFirstName: (v: string) => void;
  onChangeEmail: (v: string) => void;
  onChangePhone: (v: string) => void;
  onChangeConsent: (v: boolean) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section aria-label="Step 6">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-turquoise-hover)]">
        You&apos;re done. Here&apos;s where we send your personalized next steps.
      </p>
      <h2 className="mt-3 text-2xl md:text-3xl">
        Where should Robert send your consultation details?
      </h2>
      <p className="mt-3 text-[15.5px] text-[var(--color-text-secondary)]">
        He&apos;ll review your answers and reach out within 2 business hours to schedule your free 15-minute call.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
        <Field label="First Name" required htmlFor="q-fname">
          <input
            id="q-fname"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            data-quiz-first-focus
            value={firstName}
            onChange={(e) => onChangeFirstName(e.target.value)}
            className="input"
          />
        </Field>

        <Field label="Email Address" required htmlFor="q-email">
          <input
            id="q-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => onChangeEmail(e.target.value)}
            className="input"
          />
        </Field>

        <Field
          label="Phone Number"
          htmlFor="q-phone"
          hint="Best number to reach you (optional)"
        >
          <input
            id="q-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => onChangePhone(e.target.value)}
            className="input"
          />
        </Field>

        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-sunken)] p-4 text-[14px] leading-relaxed text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-strong)]">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => onChangeConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-copper)]"
            required
          />
          <span>
            I agree to be contacted by State 48 Credit by phone or email regarding my credit repair consultation. I understand this is not a commitment to purchase.
          </span>
        </label>

        {error && (
          <p
            role="alert"
            className="rounded-xl border border-[rgba(212,106,94,0.40)] bg-[rgba(212,106,94,0.12)] px-4 py-3 text-sm text-[var(--color-error)]"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="btn btn-copper w-full text-base disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Sending to Robert…" : "Get My Free Consultation →"}
        </button>

        <p className="text-center text-[13.5px] leading-relaxed text-[var(--color-text-muted)]">
          No payment today. No commitment required. Robert reviews your answers personally and reaches out within 2 business hours.
        </p>

        <p className="text-center text-xs text-[var(--color-text-muted)]">
          Prefer to talk now?{" "}
          <Link href="tel:+16023776626" className="font-semibold text-[var(--color-turquoise)]">
            Call 602-377-6626
          </Link>
        </p>
      </form>
    </section>
  );
}

function Field({
  label,
  required,
  hint,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="label">
        {label}
        {required && <span className="ml-1 text-[var(--color-copper-hover)]">*</span>}
        {hint && (
          <span className="ml-2 text-xs font-normal text-[var(--color-text-muted)]">
            {hint}
          </span>
        )}
      </label>
      {children}
    </div>
  );
}
