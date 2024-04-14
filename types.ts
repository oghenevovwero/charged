export type FAQ = {
  question: string;
  answer: string;
};

export type PricingPlan = {
  plan: string;
  duration: string;
  features: string[];
  recommended: boolean;
  cost: string;
};

export type UniqueTrait = { name: string; summary: string };

export type Role = { name: string; role: string };
