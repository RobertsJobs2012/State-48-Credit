export type QuizStepId = "aspiration" | "problem" | "readiness" | "loss" | "timeline" | "contact";

export type QuizCard = {
  id: string;
  emoji: string;
  title: string;
  detail: string;
};

export type QuizCardStep = {
  id: Exclude<QuizStepId, "contact">;
  index: number;
  header: string;
  question: string;
  cards: QuizCard[];
  indicator: string;
  note?: string;
};

export const cardSteps: QuizCardStep[] = [
  {
    id: "aspiration",
    index: 1,
    header: "Let's start with what matters most to you.",
    question: "What are you working toward?",
    indicator: "Step 1 of 6",
    cards: [
      { id: "home",      emoji: "🏠", title: "Buying my first home",                 detail: "A mortgage approval that makes it real" },
      { id: "car",       emoji: "🚗", title: "Getting approved for a car loan",      detail: "Reliable transportation without sky-high rates" },
      { id: "rates",     emoji: "💳", title: "Qualifying for better rates and credit", detail: "Lower interest, better cards, more options" },
      { id: "cleanup",   emoji: "🔓", title: "Cleaning up my credit completely",     detail: "A fresh start — whatever comes next" },
    ],
  },
  {
    id: "problem",
    index: 2,
    header: "Got it. Now let's look at what's in the way.",
    question: "What's on your credit report that's holding you back?",
    indicator: "Step 2 of 6",
    cards: [
      { id: "collections", emoji: "📋", title: "Collections and charge-offs",                  detail: "Old debts showing up and dragging my score" },
      { id: "fraud",       emoji: "🔒", title: "Identity theft or fraudulent accounts",        detail: "Accounts I never opened — someone else's damage" },
      { id: "late",        emoji: "⏰", title: "Late payments or missed payments",             detail: "A history that doesn't reflect who I am now" },
      { id: "major",       emoji: "📉", title: "Bankruptcy, repossession, or foreclosure",     detail: "A major life event that's still showing on my report" },
      { id: "mix",         emoji: "🔀", title: "A mix of several things",                      detail: "Multiple types of negative items" },
    ],
  },
  {
    id: "readiness",
    index: 3,
    header: "This helps us know exactly where to start when we talk.",
    question: "Have you seen your credit reports recently?",
    indicator: "Step 3 of 6",
    note: "Every answer is a valid starting point. Clients who haven't seen their reports yet get just as much out of the consultation — Robert pulls and reviews them during the call.",
    cards: [
      { id: "know",    emoji: "✅", title: "Yes — I know what's on them",                        detail: "I've reviewed all three bureaus" },
      { id: "unclear", emoji: "📋", title: "I've seen them but I'm not sure what everything means", detail: "I have the reports but need help understanding them" },
      { id: "denied",  emoji: "🔍", title: "I've been denied and I suspect what's there",        detail: "A lender or landlord rejected me — I haven't pulled the full report" },
      { id: "no",      emoji: "❌", title: "No — I haven't pulled them yet",                     detail: "I know something's wrong but haven't looked" },
    ],
  },
  {
    id: "loss",
    index: 4,
    header: "You're more than halfway there. One more thing we want to understand.",
    question: "What worries you most if your credit situation stays exactly the same?",
    indicator: "Step 4 of 6 — You're past the halfway point.",
    cards: [
      { id: "window",  emoji: "🏠", title: "Missing my window to buy a home",        detail: "Prices keep rising. Rates keep shifting. Every month I wait costs me." },
      { id: "paymore", emoji: "💸", title: "Paying more than I should — on everything", detail: "Higher interest rates on every loan, every card, every purchase" },
      { id: "stuck",   emoji: "🚗", title: "Being stuck without the transportation I need", detail: "Denied again. Paying cash for something I can't afford to replace." },
      { id: "limited", emoji: "😔", title: "Feeling limited and stuck",              detail: "The credit report controlling what I can and can't do with my life" },
    ],
  },
  {
    id: "timeline",
    index: 5,
    header: "Last question before your personalized plan. Almost there.",
    question: "How soon are you hoping to see results?",
    indicator: "Step 5 of 6 — One step from your personalized plan.",
    cards: [
      { id: "asap",     emoji: "🔥", title: "As soon as possible — I'm ready to start", detail: "I want to move forward now" },
      { id: "1to3",     emoji: "📅", title: "Within the next 1 to 3 months",            detail: "I have a goal coming up and I need to be ready" },
      { id: "3to6",     emoji: "🗓️", title: "Sometime in the next 3 to 6 months",       detail: "I'm planning ahead and want to understand my options" },
      { id: "exploring", emoji: "👀", title: "I'm still exploring — not ready to commit", detail: "Just researching right now" },
    ],
  },
];

export type TimelineId = "asap" | "1to3" | "3to6" | "exploring";

export const routingPriority: Record<TimelineId, {
  priority: "urgent" | "standard" | "nurture" | "explorer";
  internalLabel: string;
  followUp: string;
}> = {
  asap: {
    priority: "urgent",
    internalLabel: "PRIORITY · 2hr callback",
    followUp: "Robert calls within 2 business hours. First contact by phone.",
  },
  "1to3": {
    priority: "standard",
    internalLabel: "STANDARD · same-day",
    followUp: "Same-day contact. Consultation scheduled within 24–48 hours.",
  },
  "3to6": {
    priority: "nurture",
    internalLabel: "NURTURE · consultation + email sequence",
    followUp: "Consultation offer + enrollment in email nurture sequence.",
  },
  exploring: {
    priority: "explorer",
    internalLabel: "EXPLORER · lead magnet + nurture",
    followUp: "Arizona Credit Repair Guide + nurture sequence. Soft consultation offer.",
  },
};
