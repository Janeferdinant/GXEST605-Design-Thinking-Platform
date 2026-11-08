import React, { useState } from 'react';
import { HelpCircle, ArrowDown, CheckCircle2, RefreshCw, AlertTriangle } from 'lucide-react';

interface WhyStep {
  level: number;
  question: string;
  answer: string;
  insight: string;
}

const defaultFiveWhys: WhyStep[] = [
  {
    level: 1,
    question: "Why did the infant phototherapy unit stop working during night shift?",
    answer: "The LED array power supply board overheated and tripped its thermal fuse.",
    insight: "Symptom: Power cutoff due to thermal tripping."
  },
  {
    level: 2,
    question: "Why did the power supply board overheat?",
    answer: "The cooling vents on the top of the canopy were covered with a thick woolen baby blanket.",
    insight: "Mechanism: Airflow occlusion by external object."
  },
  {
    level: 3,
    question: "Why did the nurse place a blanket over the equipment cooling vents?",
    answer: "The cooling fan had noisy bearings, and the nurse placed the blanket over the canopy to muffle the clicking sound so the premature baby could sleep.",
    insight: "Human factor: Acoustic noise muffle workaround."
  },
  {
    level: 4,
    question: "Why was the cooling fan making clicking bearing noise?",
    answer: "The engineering team specified a cheap commercial sleeve-bearing PC fan that clogged with cotton dust inside the hospital ward within 3 months.",
    insight: "Engineering specification error: Inadequate bearing durability."
  },
  {
    level: 5,
    question: "Why was a cheap sleeve-bearing fan specified instead of a sealed fluid-dynamic bearing or passive heatsink?",
    answer: "The product team did not conduct field failure research in humid, lint-heavy rural hospital wards and prioritized minimizing initial BOM cost by Rs. 80.",
    insight: "ROOT CAUSE: Lack of contextual environment testing and failure to design passive convective cooling."
  }
];

export const FiveWhysLab: React.FC = () => {
  const [steps, setSteps] = useState<WhyStep[]>(defaultFiveWhys);
  const [countermeasure, setCountermeasure] = useState(
    "Eliminate the motorized fan entirely. Redesign the canopy with an aluminum convective chimney heatsink that dissipates heat silently with zero moving parts."
  );

  const updateAnswer = (index: number, val: string) => {
    const updated = [...steps];
    updated[index].answer = val;
    setSteps(updated);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-burgundy-900/60 border border-gold-500/30 text-gold-300">
            EXPERIMENT 5 INTERACTIVE SIMULATOR
          </span>
          <h3 className="text-xl font-bold font-cinzel text-ivory-50 mt-1">
            5 Whys Root-Cause Analysis Engine
          </h3>
          <p className="text-xs text-ivory-400">
            Peel back superficial symptoms to reveal systemic engineering root flaws.
          </p>
        </div>

        <button
          onClick={() => setSteps(defaultFiveWhys)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-navy-900 border border-gold-500/20 text-ivory-300 hover:text-gold-400"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset Default Case
        </button>
      </div>

      {/* Sequential Whys Tree */}
      <div className="space-y-4">
        {steps.map((step, idx) => (
          <div key={step.level} className="relative">
            <div className={`p-4 rounded-xl border ${idx === 4
              ? 'border-gold-500 bg-burgundy-950/50 shadow-gold-glow'
              : 'glass-card'
              }`}>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${idx === 4 ? 'bg-gold-500 text-navy-950' : 'bg-burgundy-800 text-gold-300'
                    }`}>
                    {step.level}
                  </span>
                  <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                    {idx === 4 ? 'LEVEL 5 - ROOT CAUSE IDENTIFICATION' : `INTERROGATION STEP ${step.level}`}
                  </span>
                </div>
                <span className="text-[11px] text-ivory-400 italic bg-navy-950/60 px-2 py-0.5 rounded">
                  {step.insight}
                </span>
              </div>

              <div className="space-y-2 pl-8">
                <p className="text-sm font-semibold text-ivory-100 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-gold-400 shrink-0" />
                  {step.question}
                </p>
                <textarea
                  value={step.answer}
                  onChange={(e) => updateAnswer(idx, e.target.value)}
                  rows={2}
                  className="w-full bg-navy-950/80 border border-gold-500/20 rounded-lg p-2.5 text-xs text-ivory-200 focus:outline-none focus:border-gold-500 resize-none"
                />
              </div>
            </div>

            {idx < 4 && (
              <div className="flex justify-center my-1">
                <ArrowDown className="w-5 h-5 text-gold-500/50" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Countermeasure Box */}
      <div className="glass-panel-burgundy p-6 rounded-2xl border border-gold-500/50 shadow-luxury">
        <div className="flex items-center gap-2 text-gold-300 font-bold font-cinzel text-base mb-2">
          <CheckCircle2 className="w-5 h-5 text-gold-400" />
          SYSTEMIC ENGINEERING COUNTERMEASURE
        </div>
        <p className="text-xs text-ivory-300 mb-3">
          A countermeasure eliminates the root cause permanently, preventing the symptom from ever recurring.
        </p>
        <textarea
          value={countermeasure}
          onChange={(e) => setCountermeasure(e.target.value)}
          rows={3}
          className="w-full bg-navy-950/90 border border-gold-500/40 rounded-xl p-3 text-xs text-ivory-100 font-medium focus:outline-none focus:border-gold-400"
        />
      </div>
    </div>
  );
};

