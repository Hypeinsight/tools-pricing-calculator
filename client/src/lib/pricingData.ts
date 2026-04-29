/**
 * Private Workspace Enterprise Pricing 2026
 * Source: Google Sheets - Tables tab
 * Design: Clean Data Dashboard (Stripe/Linear-inspired)
 */

export interface PricingPlan {
  name: string;
  maxUsers: number;
  maxUsersLabel: string;
  // Implementation & Discovery Fee (Months 1-3)
  monthly3Months: number;
  total3MonthCommitment: number;
  savingsMonthlyRRP3mo: number;
  // Ongoing - Monthly 12 months
  monthly12Months: number;
  savingsMonthlyRRP12mo: number;
  // Ongoing - Annual 12 months
  annual12Months: number;
  savingsAnnualRRP: number;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Foundation",
    maxUsers: 100,
    maxUsersLabel: "Up to 100",
    monthly3Months: 1424,
    total3MonthCommitment: 4272,
    savingsMonthlyRRP3mo: 1256,
    monthly12Months: 2421,
    savingsMonthlyRRP12mo: 677,
    annual12Months: 24462,
    savingsAnnualRRP: 6716,
  },
  {
    name: "Growth",
    maxUsers: 175,
    maxUsersLabel: "Up to 175",
    monthly3Months: 2274,
    total3MonthCommitment: 6822,
    savingsMonthlyRRP3mo: 2024,
    monthly12Months: 3729,
    savingsMonthlyRRP12mo: 1243,
    annual12Months: 36976,
    savingsAnnualRRP: 12195,
  },
  {
    name: "Momentum",
    maxUsers: 250,
    maxUsersLabel: "Up to 250",
    monthly3Months: 3111,
    total3MonthCommitment: 9333,
    savingsMonthlyRRP3mo: 2802,
    monthly12Months: 4853,
    savingsMonthlyRRP12mo: 1994,
    annual12Months: 47709,
    savingsAnnualRRP: 19454,
  },
  {
    name: "Scale",
    maxUsers: 350,
    maxUsersLabel: "Up to 350",
    monthly3Months: 4235,
    total3MonthCommitment: 12705,
    savingsMonthlyRRP3mo: 3833,
    monthly12Months: 6353,
    savingsMonthlyRRP12mo: 2992,
    annual12Months: 62067,
    savingsAnnualRRP: 29086,
  },
  {
    name: "Enterprise 500",
    maxUsers: 500,
    maxUsersLabel: "Up to 500",
    monthly3Months: 5038,
    total3MonthCommitment: 15114,
    savingsMonthlyRRP3mo: 6042,
    monthly12Months: 9068,
    savingsMonthlyRRP12mo: 4026,
    annual12Months: 88085,
    savingsAnnualRRP: 39053,
  },
  {
    name: "Enterprise 750",
    maxUsers: 750,
    maxUsersLabel: "Up to 750",
    monthly3Months: 7237,
    total3MonthCommitment: 21711,
    savingsMonthlyRRP3mo: 9079,
    monthly12Months: 12303,
    savingsMonthlyRRP12mo: 7039,
    annual12Months: 119080,
    savingsAnnualRRP: 68033,
  },
  {
    name: "Enterprise 1000",
    maxUsers: 1000,
    maxUsersLabel: "Up to 1000",
    monthly3Months: 9236,
    total3MonthCommitment: 27708,
    savingsMonthlyRRP3mo: 12265,
    monthly12Months: 15009,
    savingsMonthlyRRP12mo: 10581,
    annual12Months: 145014,
    savingsAnnualRRP: 102074,
  },
];

export function getPlanForUsers(userCount: number): PricingPlan | null {
  if (!userCount || userCount <= 0) return null;
  const plan = PRICING_PLANS.find((p) => userCount <= p.maxUsers);
  return plan || null;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export const ACTIVE_USER_NOTE =
  "*An Active User is an account that has been verified at Tools™ sign up";
