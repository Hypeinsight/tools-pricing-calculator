/**
 * Home Page - Tools™ Enterprise Pricing Calculator
 * Design: Building Tools™ Brand (buildingtools.co)
 * Colors: White base, #1a1a1a text, #1482ff brand blue, green for savings
 * Typography: Roboto (all text), JetBrains Mono (price numbers)
 * Style: Clean, professional, rounded corners, blue gradient accents
 */

import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import {
  getPlanForUsers,
  formatCurrency,
  ACTIVE_USER_NOTE,
  type PricingPlan,
} from "@/lib/pricingData";
import { TrendingDown, Users, Info, CheckCircle2 } from "lucide-react";

// Building Tools brand blue
const BRAND_BLUE = "#1482ff";
const BRAND_BLUE_DARK = "#0068df";
const BRAND_GRADIENT = `linear-gradient(258.2deg, ${BRAND_BLUE} -24.08%, ${BRAND_BLUE_DARK} 110.8%)`;

// Tools™ logo CDN URL
const TOOLS_LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/98544406/chok685E7WvtMm3xAumjda/tools-logo_01b0460b.png";

function PricingCard({ plan, userCount }: { plan: PricingPlan; userCount: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {/* Plan Header */}
      <div className="mb-6 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold tracking-wide text-white"
              style={{ background: BRAND_GRADIENT }}
            >
              {plan.name}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-slate-500">
              <Users size={14} />
              {plan.maxUsersLabel} active users
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            Your organisation with{" "}
            <strong className="text-slate-800">{userCount.toLocaleString()} users</strong> qualifies
            for this plan.
          </p>
        </div>
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white"
          style={{ background: BRAND_GRADIENT }}
        >
          <CheckCircle2 size={14} />
          Eligible Plan
        </div>
      </div>

      {/* Pricing Sections */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* 4-Month Pilot */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Pilot Phase
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium text-white"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              Months 1–4
            </span>
          </div>

          <div>
            <div className="text-xs text-slate-500 mb-0.5">Monthly</div>
            <div
              className="text-2xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {formatCurrency(plan.monthly4Months)}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">per month</div>
          </div>

          <div className="border-t border-slate-200 pt-3">
            <div className="text-xs text-slate-500 mb-0.5">Total 4-month commitment</div>
            <div
              className="text-lg font-bold text-slate-800"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {formatCurrency(plan.total4MonthCommitment)}
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 rounded-lg px-3 py-2 mt-auto">
            <TrendingDown size={13} />
            <span className="text-xs font-medium">
              Save {formatCurrency(plan.savingsMonthlyRRP4mo)} vs monthly RRP
            </span>
          </div>
        </div>

        {/* 12-Month Monthly */}
        <div className="rounded-xl border-2 bg-white p-5 flex flex-col gap-3 shadow-sm relative overflow-hidden" style={{ borderColor: BRAND_BLUE }}>
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: BRAND_GRADIENT }}
          />
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Monthly
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium text-white"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              12 months
            </span>
          </div>

          <div>
            <div className="text-xs text-slate-500 mb-0.5">Monthly</div>
            <div
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-mono)", color: BRAND_BLUE }}
            >
              {formatCurrency(plan.monthly12Months)}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">per month</div>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <div className="text-xs text-slate-500 mb-0.5">Annual total</div>
            <div
              className="text-lg font-bold text-slate-800"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {formatCurrency(plan.monthly12Months * 12)}
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 rounded-lg px-3 py-2 mt-auto">
            <TrendingDown size={13} />
            <span className="text-xs font-medium">
              Save {formatCurrency(plan.savingsMonthlyRRP12mo)}/mo vs RRP
            </span>
          </div>
        </div>

        {/* Annual Best Value */}
        <div
          className="rounded-xl p-5 flex flex-col gap-3 relative overflow-hidden text-white"
          style={{ background: BRAND_GRADIENT }}
        >
          <div className="absolute top-3 right-3">
            <span className="text-xs bg-white font-bold px-2 py-0.5 rounded-full" style={{ color: BRAND_BLUE }}>
              Best Value
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-100">
              Annual
            </span>
            <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-medium">
              12 months
            </span>
          </div>

          <div>
            <div className="text-xs text-blue-100 mb-0.5">Paid annually</div>
            <div
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {formatCurrency(plan.annual12Months)}
            </div>
            <div className="text-xs text-blue-100 mt-0.5">
              {formatCurrency(Math.round(plan.annual12Months / 12))}/mo equivalent
            </div>
          </div>

          <div className="border-t border-white/20 pt-3">
            <div className="text-xs text-blue-100 mb-0.5">vs monthly RRP</div>
            <div
              className="text-lg font-bold text-white"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Save {formatCurrency(plan.savingsAnnualRRP)}
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-white/20 rounded-lg px-3 py-2 mt-auto">
            <TrendingDown size={13} />
            <span className="text-xs font-medium">Maximum savings on annual plan</span>
          </div>
        </div>
      </div>

      {/* Footnote */}
      <div className="mt-4 flex items-start gap-2 text-xs text-slate-400">
        <Info size={12} className="mt-0.5 shrink-0" />
        <span>{ACTIVE_USER_NOTE}</span>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [plan, setPlan] = useState<PricingPlan | null>(null);
  const [showOverLimit, setShowOverLimit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    setInputValue(raw);
    const num = parseInt(raw, 10);
    if (!raw || isNaN(num)) {
      setUserCount(0);
      setPlan(null);
      setShowOverLimit(false);
      return;
    }
    setUserCount(num);
    const found = getPlanForUsers(num);
    setPlan(found);
    setShowOverLimit(num > 1000);
  }, []);

  const isEmpty = inputValue === "";
  const hasResult = !isEmpty && (plan !== null || showOverLimit);

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="border-b border-slate-100 bg-white sticky top-0 z-10">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Tools™ Logo */}
            <img
              src={TOOLS_LOGO_URL}
              alt="Tools™"
              className="h-8 w-auto"
            />
            <span className="text-xs text-slate-400 font-medium">Enterprise Pricing 2026</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container py-12 md:py-16">
        {/* Hero */}
        <div className="mb-10 max-w-xl">
          <h1
            className="text-3xl md:text-4xl font-black text-slate-900 mb-3 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Find your{" "}
            <span
              className="relative inline-block"
              style={{ color: BRAND_BLUE }}
            >
              pricing plan
              {/* Blue underline accent matching buildingtools.co style */}
              <span
                className="absolute left-0 bottom-0 w-full h-1 rounded-full"
                style={{ background: BRAND_GRADIENT, bottom: "-4px" }}
              />
            </span>
            .
          </h1>
          <p className="text-slate-500 text-base leading-relaxed mt-3">
            Enter the number of active users in your organisation to instantly see the plan and
            pricing that applies to you.
          </p>
        </div>

        {/* Input */}
        <div className="mb-8">
          <label
            htmlFor="user-count"
            className="block text-sm font-bold text-slate-700 mb-2"
          >
            Number of Active Users
          </label>
          <div className="flex items-center gap-3 max-w-xs">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Users size={16} className="text-slate-400" />
              </div>
              <input
                ref={inputRef}
                id="user-count"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="e.g. 120"
                className="w-full pl-9 pr-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 text-base font-medium bg-white focus:outline-none transition-all placeholder:text-slate-300"
                style={{
                  fontFamily: "var(--font-mono)",
                  // @ts-ignore
                  "--tw-ring-color": BRAND_BLUE,
                }}
                onFocus={(e) => { e.target.style.borderColor = BRAND_BLUE; }}
                onBlur={(e) => { e.target.style.borderColor = ""; }}
                autoFocus
              />
            </div>
            {plan && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-sm font-medium flex items-center gap-1.5 whitespace-nowrap"
                style={{ color: BRAND_BLUE }}
              >
                <CheckCircle2 size={15} />
                Plan found
              </motion.div>
            )}
          </div>
          <p className="mt-2 text-xs text-slate-400">{ACTIVE_USER_NOTE}</p>
        </div>

        {/* Results area */}
        <div className="min-h-[280px]">
          {isEmpty && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-10 flex flex-col items-center justify-center text-center"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${BRAND_BLUE}15` }}
              >
                <Users size={22} style={{ color: BRAND_BLUE }} />
              </div>
              <p className="text-slate-600 font-bold mb-1">
                Enter your user count above
              </p>
              <p className="text-slate-400 text-sm">
                Your applicable plan and pricing will appear here instantly.
              </p>
            </motion.div>
          )}

          {showOverLimit && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-amber-200 bg-amber-50 p-6"
            >
              <div className="flex items-start gap-3">
                <Info size={18} className="text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-amber-900 mb-1">
                    Over 1,000 users
                  </p>
                  <p className="text-amber-700 text-sm">
                    Your organisation has more than 1,000 active users. Please contact the
                    Tools™ team directly for a custom enterprise quote tailored to your needs.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {plan && !showOverLimit && (
            <PricingCard key={plan.name} plan={plan} userCount={userCount} />
          )}

          {!isEmpty && !hasResult && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-10 flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                <Info size={22} className="text-slate-400" />
              </div>
              <p className="text-slate-600 font-bold mb-1">No plan found</p>
              <p className="text-slate-400 text-sm">
                Please enter a valid number of users between 1 and 1,000.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-100 mt-16">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <img src={TOOLS_LOGO_URL} alt="Tools™" className="h-6 w-auto opacity-60" />
          <p className="text-xs text-slate-400 text-center">
            Tools™ Enterprise Pricing 2026. All prices in AUD. Pricing subject to change.
          </p>
        </div>
      </footer>
    </div>
  );
}
