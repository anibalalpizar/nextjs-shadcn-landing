"use client";

import type { AnimatedProps } from "@/types/motion";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  icon: React.ReactNode;
}

const plans: PricingPlan[] = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "For personal projects and experimentation.",
    features: [
      "Up to 3 projects",
      "Basic components",
      "Community support",
      "Dark mode included",
    ],
    cta: "Get started",
    highlighted: false,
    icon: <Zap className="w-5 h-5" />,
  },
  {
    name: "Pro",
    monthlyPrice: 19,
    annualPrice: 15,
    description: "For professionals who ship products fast.",
    features: [
      "Unlimited projects",
      "All components",
      "Priority support",
      "Custom themes",
      "Analytics dashboard",
      "Remove branding",
    ],
    cta: "Start free trial",
    highlighted: true,
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    name: "Enterprise",
    monthlyPrice: 49,
    annualPrice: 39,
    description: "For teams that need control and flexibility.",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "SLA guarantee",
      "Dedicated support",
      "Custom integrations",
      "Audit logs",
    ],
    cta: "Contact sales",
    highlighted: false,
    icon: <Check className="w-5 h-5" />,
  },
];

export function Pricing({ id }: AnimatedProps) {
  const [annual, setAnnual] = useState(false);

  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-cyan-800/30 mx-auto mb-4"
            initial={{ rotate: -15, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4"
          >
            Simple,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-pink-600 dark:from-cyan-600 dark:to-cyan-700">
              transparent pricing
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 mb-8"
          >
            No hidden fees. Cancel anytime.
          </motion.p>

          {/* Toggle mensual/anual */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-slate-100 dark:bg-slate-800 rounded-full px-2 py-1.5"
          >
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                !annual
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-500 dark:text-slate-400"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2",
                annual
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-500 dark:text-slate-400"
              )}
            >
              Annual
              <span className="text-xs bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-400 px-1.5 py-0.5 rounded-full font-semibold">
                -20%
              </span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative group flex flex-col rounded-2xl border p-8 transition-all duration-300",
                plan.highlighted
                  ? "border-cyan-500 bg-slate-100 dark:bg-slate-900 shadow-xl shadow-cyan-500/10"
                  : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:shadow-lg"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-600 to-pink-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
                    Most popular
                  </span>
                </div>
              )}

              {/* Glow igual que BenefitCard */}
              <div className="absolute inset-0 z-0 hidden rounded-2xl bg-gradient-to-r from-cyan-500/20 via-slate-500/20 to-cyan-500/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-60 dark:from-cyan-200/20 dark:via-slate-200/20 dark:to-cyan-200/20 sm:block pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center",
                      plan.highlighted
                        ? "bg-cyan-600/20 text-cyan-600 dark:text-cyan-400"
                        : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    )}
                  >
                    {plan.icon}
                  </div>
                  <h3
                    className={cn(
                      "text-lg font-semibold",
                      plan.highlighted
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-900 dark:text-slate-100"
                    )}
                  >
                    {plan.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <motion.span
                    key={annual ? "annual" : "monthly"}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={cn(
                      "text-4xl font-bold",
                      plan.highlighted
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-900 dark:text-slate-100"
                    )}
                  >
                    {annual ? plan.annualPrice : plan.monthlyPrice === 0
                      ? "Free"
                      : `$${annual ? plan.annualPrice : plan.monthlyPrice}`}
                  </motion.span>
                  {(annual ? plan.annualPrice : plan.monthlyPrice) > 0 && (
                    <span
                      className={cn(
                        "text-sm ml-1",
                        plan.highlighted
                          ? "text-slate-500 dark:text-slate-400"
                          : "text-slate-500 dark:text-slate-400"
                      )}
                    >
                      / mo
                    </span>
                  )}
                </div>

                <p
                  className={cn(
                    "text-sm mb-6",
                    plan.highlighted
                      ? "text-slate-600 dark:text-slate-400"
                      : "text-slate-500 dark:text-slate-400"
                  )}
                >
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <div
                        className={cn(
                          "w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0",
                          plan.highlighted
                            ? "bg-cyan-600/30 text-cyan-600 dark:text-cyan-400"
                            : "bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                        )}
                      >
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span
                        className={cn(
                          "text-sm",
                          plan.highlighted
                            ? "text-slate-700 dark:text-slate-300"
                            : "text-slate-600 dark:text-slate-400"
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={cn(
                    "w-full rounded-xl font-medium transition-all duration-200",
                    plan.highlighted
                      ? "bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white border-0 shadow-lg shadow-cyan-500/20"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600 border-0"
                  )}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}