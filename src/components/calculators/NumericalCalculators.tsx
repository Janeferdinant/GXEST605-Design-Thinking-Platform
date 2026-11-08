import React, { useState } from 'react';
import { Calculator, DollarSign, AlertTriangle, Gauge, TrendingUp, Layers } from 'lucide-react';

export const NumericalCalculators: React.FC = () => {
  const [activeCalc, setActiveCalc] = useState<'bep' | 'rpn' | 'trl' | 'cba'>('bep');

  // BEP State
  const [fixedCost, setFixedCost] = useState<number>(1800000);
  const [variableCost, setVariableCost] = useState<number>(1400);
  const [sellingPrice, setSellingPrice] = useState<number>(3800);
  const [targetVolume, setTargetVolume] = useState<number>(1200);

  const cm = sellingPrice - variableCost;
  const cmRatio = sellingPrice > 0 ? (cm / sellingPrice) * 100 : 0;
  const bepUnits = cm > 0 ? Math.ceil(fixedCost / cm) : 0;
  const bepRevenue = bepUnits * sellingPrice;
  const projectedProfit = (targetVolume * cm) - fixedCost;

  // RPN State
  const [sev, setSev] = useState<number>(9);
  const [occ, setOcc] = useState<number>(5);
  const [det, setDet] = useState<number>(4);
  const rpn = sev * occ * det;

  // TRL State
  const [trlSubsystems, setTrlSubsystems] = useState([
    { name: 'Sensor Array Hardware', weight: 0.35, trl: 5 },
    { name: 'Edge ML Inference Engine', weight: 0.25, trl: 4 },
    { name: 'Battery Power Management', weight: 0.20, trl: 7 },
    { name: 'Mechanical Chassis Enclosure', weight: 0.20, trl: 6 }
  ]);

  const compositeTrl = Math.round(
    trlSubsystems.reduce((acc, sub) => acc + (sub.weight * sub.trl), 0) * 100
  ) / 100;
  const tmiPercent = Math.round((compositeTrl / 9.0) * 1000) / 10;

  // CBA State
  const [initialCapEx, setInitialCapEx] = useState<number>(1500000);
  const [annualBenefit, setAnnualBenefit] = useState<number>(750000);
  const [annualOpEx, setAnnualOpEx] = useState<number>(200000);
  const [lifespan, setLifespan] = useState<number>(4);
  const [discountRate, setDiscountRate] = useState<number>(10);

  // PV Calculation
  let pvBenefits = 0;
  let pvOpEx = 0;
  for (let t = 1; t <= lifespan; t++) {
    const factor = 1 / Math.pow(1 + discountRate / 100, t);
    pvBenefits += annualBenefit * factor;
    pvOpEx += annualOpEx * factor;
  }
  const totalPvCost = initialCapEx + pvOpEx;
  const npv = Math.round(pvBenefits - totalPvCost);
  const bcr = totalPvCost > 0 ? Math.round((pvBenefits / totalPvCost) * 1000) / 1000 : 0;

  return (
    <div className="space-y-6">
      {/* Calculator Mode Switcher */}
      <div className="glass-panel p-2 rounded-2xl border border-gold-500/20 flex overflow-x-auto gap-2">
        <button
          onClick={() => setActiveCalc('bep')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeCalc === 'bep'
              ? 'bg-burgundy-800 text-gold-300 border border-gold-500/40 shadow-gold-glow'
              : 'text-ivory-300 hover:text-gold-400'
          }`}
        >
          <DollarSign className="w-4 h-4 text-gold-400" /> Break-Even Point (BEP)
        </button>

        <button
          onClick={() => setActiveCalc('rpn')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeCalc === 'rpn'
              ? 'bg-burgundy-800 text-gold-300 border border-gold-500/40 shadow-gold-glow'
              : 'text-ivory-300 hover:text-gold-400'
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-red-400" /> DFMEA RPN Calculator
        </button>

        <button
          onClick={() => setActiveCalc('trl')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeCalc === 'trl'
              ? 'bg-burgundy-800 text-gold-300 border border-gold-500/40 shadow-gold-glow'
              : 'text-ivory-300 hover:text-gold-400'
          }`}
        >
          <Gauge className="w-4 h-4 text-blue-400" /> TRL Maturity Index
        </button>

        <button
          onClick={() => setActiveCalc('cba')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeCalc === 'cba'
              ? 'bg-burgundy-800 text-gold-300 border border-gold-500/40 shadow-gold-glow'
              : 'text-ivory-300 hover:text-gold-400'
          }`}
        >
          <TrendingUp className="w-4 h-4 text-emerald-400" /> Cost-Benefit & NPV
        </button>
      </div>

      {/* CALCULATOR 1: BEP */}
      {activeCalc === 'bep' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6 glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-4 text-xs">
            <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm">
              Break-Even Parameter Inputs
            </h4>
            
            <div className="space-y-1">
              <label className="text-ivory-300 block">Total Fixed Costs (CapEx, Tooling, Overheads): Rs. {fixedCost.toLocaleString()}</label>
              <input
                type="range" min="100000" max="5000000" step="50000"
                value={fixedCost} onChange={(e) => setFixedCost(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Variable Cost per Unit (BOM + Labor): Rs. {variableCost.toLocaleString()}</label>
              <input
                type="range" min="200" max="10000" step="50"
                value={variableCost} onChange={(e) => setVariableCost(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Target Selling Price per Unit: Rs. {sellingPrice.toLocaleString()}</label>
              <input
                type="range" min="500" max="25000" step="100"
                value={sellingPrice} onChange={(e) => setSellingPrice(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Projected Annual Sales Volume: {targetVolume.toLocaleString()} units</label>
              <input
                type="range" min="100" max="5000" step="50"
                value={targetVolume} onChange={(e) => setTargetVolume(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>
          </div>

          <div className="md:col-span-6 glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-4">
            <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm">
              Break-Even Mathematical Output
            </h4>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-navy-950/70 border border-gold-500/20">
                <span className="text-[10px] text-ivory-400 block">Contribution Margin (P - V)</span>
                <span className="text-lg font-bold font-cinzel text-gold-300">Rs. {cm.toLocaleString()}</span>
                <span className="text-[10px] text-ivory-400 block mt-0.5">{cmRatio.toFixed(1)}% CM Ratio</span>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-950/70 border border-gold-500/20">
                <span className="text-[10px] text-ivory-400 block">Break-Even Units</span>
                <span className="text-lg font-bold font-cinzel text-emerald-400">{bepUnits.toLocaleString()} units</span>
                <span className="text-[10px] text-ivory-400 block mt-0.5">Zero-profit threshold</span>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-950/70 border border-gold-500/20">
                <span className="text-[10px] text-ivory-400 block">Break-Even Revenue</span>
                <span className="text-lg font-bold font-cinzel text-gold-300">Rs. {(bepRevenue / 100000).toFixed(2)} Lakhs</span>
              </div>

              <div className={`p-3.5 rounded-xl border ${
                projectedProfit >= 0 ? 'bg-emerald-950/40 border-emerald-500/30' : 'bg-red-950/40 border-red-500/30'
              }`}>
                <span className="text-[10px] text-ivory-400 block">Profit at {targetVolume} units</span>
                <span className={`text-lg font-bold font-cinzel ${
                  projectedProfit >= 0 ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  Rs. {(projectedProfit / 100000).toFixed(2)} Lakhs
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-burgundy-950/50 border border-gold-500/20 text-xs text-ivory-300">
              <span className="text-[10px] text-gold-400 font-bold block mb-0.5">KTU Exam Formula:</span>
              <p className="font-mono text-gold-300">BEP (Units) = Fixed Cost / (Selling Price - Variable Cost)</p>
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 2: RPN */}
      {activeCalc === 'rpn' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6 glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-4 text-xs">
            <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm">
              DFMEA Risk Severity, Occurrence & Detection
            </h4>

            <div className="space-y-1">
              <label className="text-ivory-300 block flex items-center justify-between">
                <span>Severity (S: 1 to 10):</span>
                <span className="font-bold text-red-400 font-cinzel">{sev}</span>
              </label>
              <input
                type="range" min="1" max="10" value={sev} onChange={(e) => setSev(Number(e.target.value))}
                className="w-full accent-red-500"
              />
              <span className="text-[10px] text-ivory-500">1 = Negligible, 8 = Loss of primary function, 10 = Hazardous injury</span>
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block flex items-center justify-between">
                <span>Occurrence (O: 1 to 10):</span>
                <span className="font-bold text-amber-400 font-cinzel">{occ}</span>
              </label>
              <input
                type="range" min="1" max="10" value={occ} onChange={(e) => setOcc(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
              <span className="text-[10px] text-ivory-500">1 = Extremely remote, 5 = Moderate (1 in 2k), 10 = Inevitable failure</span>
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block flex items-center justify-between">
                <span>Detection (D: 1 to 10):</span>
                <span className="font-bold text-blue-400 font-cinzel">{det}</span>
              </label>
              <input
                type="range" min="1" max="10" value={det} onChange={(e) => setDet(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
              <span className="text-[10px] text-ivory-500">1 = Automated foolproof check, 5 = Lab test, 10 = Unchecked flaw</span>
            </div>
          </div>

          <div className="md:col-span-6 glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm mb-3">
                Risk Priority Number (RPN) Output
              </h4>

              <div className="p-6 rounded-2xl bg-navy-950/80 border border-gold-500/20 text-center space-y-2">
                <span className="text-xs text-ivory-400 uppercase tracking-wider font-semibold">Calculated RPN</span>
                <div className="text-5xl font-bold font-cinzel gold-gradient-text">{rpn}</div>
                <span className="text-xs text-ivory-400">Scale: 1 to 1,000</span>
              </div>
            </div>

            <div className="space-y-2">
              {sev >= 9 && (
                <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-xs text-red-300 font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-red-400" />
                  CRITICAL: Severity &ge; 9 mandates immediate design fail-safe redesign!
                </div>
              )}

              <div className={`p-3 rounded-xl border text-xs font-semibold ${
                rpn >= 100 
                  ? 'bg-red-950/40 border-red-500/30 text-red-300' 
                  : 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
              }`}>
                {rpn >= 100 
                  ? 'Action Required: RPN &ge; 100 exceeds acceptable threshold. Engineer corrective controls.' 
                  : 'Acceptable Margin: RPN is within normal continuous improvement threshold.'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 3: TRL */}
      {activeCalc === 'trl' && (
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-4 text-xs">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm">
              Subsystem Technology Readiness Levels (TRL 1 to 9)
            </h4>
            <div className="text-right">
              <span className="text-xs text-ivory-400 block">Composite System TRL</span>
              <span className="text-2xl font-bold font-cinzel text-gold-300">{compositeTrl} / 9</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trlSubsystems.map((sub, idx) => (
              <div key={idx} className="p-4 rounded-xl glass-card space-y-2">
                <div className="flex items-center justify-between font-bold">
                  <span className="text-ivory-100">{sub.name}</span>
                  <span className="text-gold-400">TRL {sub.trl}</span>
                </div>
                <input
                  type="range" min="1" max="9" value={sub.trl}
                  onChange={(e) => {
                    const updated = [...trlSubsystems];
                    updated[idx].trl = Number(e.target.value);
                    setTrlSubsystems(updated);
                  }}
                  className="w-full accent-gold-500"
                />
                <span className="text-[10px] text-ivory-500 block">
                  Weight: {Math.round(sub.weight * 100)}% of total system maturity
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-navy-950/80 border border-gold-500/20 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-gold-400">Technology Maturity Index (TMI):</span>
              <p className="text-ivory-300 mt-0.5">System is {tmiPercent}% ready toward target mass commercialization (TRL 9).</p>
            </div>
            <div className="w-24 bg-navy-900 rounded-full h-3 border border-gold-500/30 overflow-hidden">
              <div className="gold-gradient h-full" style={{ width: `${tmiPercent}%` }} />
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 4: CBA & NPV */}
      {activeCalc === 'cba' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6 glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-4 text-xs">
            <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm">
              Cost-Benefit Cash Flow Parameters
            </h4>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Initial CapEx: Rs. {initialCapEx.toLocaleString()}</label>
              <input
                type="range" min="500000" max="5000000" step="100000"
                value={initialCapEx} onChange={(e) => setInitialCapEx(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Annual Quantifiable Benefits: Rs. {annualBenefit.toLocaleString()} / year</label>
              <input
                type="range" min="100000" max="2500000" step="50000"
                value={annualBenefit} onChange={(e) => setAnnualBenefit(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Annual OpEx (Cloud, Maintenance): Rs. {annualOpEx.toLocaleString()} / year</label>
              <input
                type="range" min="50000" max="1000000" step="25000"
                value={annualOpEx} onChange={(e) => setAnnualOpEx(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-ivory-400 block">Lifespan: {lifespan} years</label>
                <input
                  type="number" min="1" max="10" value={lifespan}
                  onChange={(e) => setLifespan(Number(e.target.value))}
                  className="w-full bg-navy-950 border border-gold-500/20 rounded p-1.5 text-xs text-ivory-100"
                />
              </div>
              <div>
                <label className="text-ivory-400 block">Discount Rate: {discountRate}%</label>
                <input
                  type="number" min="1" max="25" value={discountRate}
                  onChange={(e) => setDiscountRate(Number(e.target.value))}
                  className="w-full bg-navy-950 border border-gold-500/20 rounded p-1.5 text-xs text-ivory-100"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-6 glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-4">
            <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm">
              Discounted Financial Feasibility Output
            </h4>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-navy-950/70 border border-gold-500/20">
                <span className="text-[10px] text-ivory-400 block">PV of Total Benefits</span>
                <span className="text-base font-bold font-cinzel text-emerald-400">Rs. {Math.round(pvBenefits).toLocaleString()}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-950/70 border border-gold-500/20">
                <span className="text-[10px] text-ivory-400 block">PV of Total Costs</span>
                <span className="text-base font-bold font-cinzel text-red-400">Rs. {Math.round(totalPvCost).toLocaleString()}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-burgundy-950/50 border border-gold-500/40">
                <span className="text-[10px] text-gold-400 block font-semibold">Net Present Value (NPV)</span>
                <span className={`text-lg font-bold font-cinzel ${npv >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {npv >= 0 ? '+' : ''}Rs. {npv.toLocaleString()}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-950/70 border border-gold-500/20">
                <span className="text-[10px] text-gold-400 block font-semibold">Benefit-Cost Ratio (BCR)</span>
                <span className="text-lg font-bold font-cinzel text-gold-300">{bcr}</span>
              </div>
            </div>

            <div className={`p-3 rounded-xl border text-xs font-semibold ${
              npv >= 0 && bcr > 1.0 
                ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300' 
                : 'bg-red-950/40 border-red-500/30 text-red-300'
            }`}>
              {npv >= 0 && bcr > 1.0
                ? 'Financially Viable: NPV is positive and BCR > 1.0. Project generates net economic surplus.'
                : 'Not Recommended: Total discounted costs exceed benefits over the evaluated period.'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
