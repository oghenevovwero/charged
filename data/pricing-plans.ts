import { PricingPlan } from "@/types";

export const pricingPlans: Array<PricingPlan> = [
  {
    plan: "Basic",
    cost: "10",
    duration: "Month",
    features: [
      "$0.62 per kWh up to 80% charge",
      "Unlimited deliveries within the subscription period",
    ],
    recommended: false,
  },
  {
    plan: "Premium",
    cost: "15",
    duration: "Month",
    features: [
      "$0.58 per kWh up to 80% charge",
      "Unlimited deliveries within the subscription period",
    ],
    recommended: true,
  },
  {
    plan: "Explorer",
    cost: "30",
    duration: "Month",
    features: [
      "$0.50 per kWh up to 80% charge",
      "Unlimited deliveries within the subscription period",
    ],
    recommended: false,
  },
];
