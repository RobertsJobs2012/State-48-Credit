"use server";

import { redirect } from "next/navigation";
import { routingPriority, type TimelineId } from "@/components/quiz/quizData";

export type QuizPayload = {
  aspiration: string;
  problem: string;
  readiness: string;
  loss: string;
  timeline: TimelineId | "";
  firstName: string;
  email: string;
  phone: string;
  consent: boolean;
};

export type SubmitResult = { ok: true } | { ok: false; error: string };

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitQuiz(payload: QuizPayload): Promise<SubmitResult> {
  // --- Validation -----------------------------------------------------------
  if (!payload.firstName?.trim()) return { ok: false, error: "First name is required." };
  if (!isValidEmail(payload.email)) return { ok: false, error: "Please enter a valid email." };
  if (!payload.consent) return { ok: false, error: "Please acknowledge the contact consent checkbox." };
  if (!payload.aspiration || !payload.problem || !payload.readiness || !payload.loss || !payload.timeline) {
    return { ok: false, error: "Please complete all quiz steps." };
  }

  const routing = routingPriority[payload.timeline as TimelineId];

  // --- Delivery -------------------------------------------------------------
  // Delivery priority:
  //   1. Resend API if RESEND_API_KEY is set (set in Vercel env)
  //   2. Generic webhook if LEAD_WEBHOOK_URL is set (Zapier / Make)
  //   3. Console fallback (server logs — recoverable from Vercel)
  //
  // We never block the user on delivery failure — the lead is logged server-side
  // so Robert can recover it from Vercel logs if an outbound call fails.

  const body = buildLeadEmail(payload, routing.internalLabel);

  try {
    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL ?? "leads@state48credit.com",
          to: [process.env.LEAD_TO_EMAIL ?? "State48Credit@gmail.com"],
          reply_to: payload.email,
          subject: `[${routing.internalLabel}] New quiz lead — ${payload.firstName}`,
          text: body,
        }),
      });
    } else if (process.env.LEAD_WEBHOOK_URL) {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, routing, receivedAt: new Date().toISOString() }),
      });
    } else {
      console.log("[STATE48 LEAD — no delivery configured]\n" + body);
    }
  } catch (e) {
    console.error("[STATE48 LEAD — delivery failed, review server logs]", e, payload);
  }

  redirect(`/thank-you?p=${routing.priority}`);
}

function buildLeadEmail(p: QuizPayload, label: string): string {
  return [
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `STATE 48 CREDIT — NEW LEAD`,
    `Routing:  ${label}`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `Name:     ${p.firstName}`,
    `Email:    ${p.email}`,
    `Phone:    ${p.phone || "(not provided)"}`,
    ``,
    `── Quiz answers ──────────────────`,
    `Goal:     ${p.aspiration}`,
    `Problem:  ${p.problem}`,
    `Report:   ${p.readiness}`,
    `Fear:     ${p.loss}`,
    `Timeline: ${p.timeline}`,
    ``,
    `Received: ${new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" })} (MST)`,
  ].join("\n");
}
