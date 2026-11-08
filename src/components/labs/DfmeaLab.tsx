import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, RefreshCw, Plus, Trash2, ArrowRight } from 'lucide-react';

interface DfmeaRow {
  id: string;
  itemFunction: string;
  failureMode: string;
  failureEffect: string;
  severity: number; // 1-10
  failureCause: string;
  occurrence: number; // 1-10
  currentControls: string;
  detection: number; // 1-10
  recommendedAction: string;
  revisedS: number;
  revisedO: number;
  revisedD: number;
}

const defaultDfmeaData: DfmeaRow[] = [
  {
    id: '1',
    itemFunction: '18650 Li-ion Battery Pack',
    failureMode: 'Thermal runaway leading to fire/explosion',
    failureEffect: 'Catastrophic patient injury and device destruction',
    severity: 10,
    failureCause: 'Internal separator micro-puncture or overcharge voltage spike',
    occurrence: 4,
    currentControls: 'Software MCU battery over-voltage cutoff polling',
    detection: 5,
    recommendedAction: 'Add secondary hardware bimetallic thermal fuse directly on battery terminals + Poka-Yoke cell separator bracket',
    revisedS: 10,
    revisedO: 1,
    revisedD: 2
  },
  {
    id: '2',
    itemFunction: 'Buck-Boost Power Converter',
    failureMode: 'MOSFET thermal breakdown / latch-up',
    failureEffect: 'Sudden unexpected device shutdown during operation',
    severity: 8,
    failureCause: 'Inadequate PCB copper thermal plane area under full solar load',
    occurrence: 6,
    currentControls: 'Standard bench test at 25°C ambient temperature',
    detection: 4,
    recommendedAction: 'Enlarge copper pour to 2oz, add thermal vias and dedicated aluminum clip-on heatsink',
    revisedS: 8,
    revisedO: 2,
    revisedD: 2
  },
  {
    id: '3',
    itemFunction: 'Ultrasonic Housing Weld',
    failureMode: 'Moisture ingress through seam fracture',
    failureEffect: 'Internal PCBA corrosion and sensor drift',
    severity: 7,
    failureCause: 'Uneven ultrasonic horn clamping pressure during pilot assembly',
    occurrence: 5,
    currentControls: 'Visual operator inspection with magnifying glass',
    detection: 6,
    recommendedAction: 'Implement automated pneumatic clamp with force-displacement monitoring + 100% vacuum leak test jig',
    revisedS: 7,
    revisedO: 1,
    revisedD: 2
  }
];

export const DfmeaLab: React.FC = () => {
  const [rows, setRows] = useState<DfmeaRow[]>(defaultDfmeaData);

  const calculateRpn = (s: number, o: number, d: number) => s * o * d;

  const totalBaselineRpn = rows.reduce((sum, r) => sum + calculateRpn(r.severity, r.occurrence, r.detection), 0);
  const totalRevisedRpn = rows.reduce((sum, r) => sum + calculateRpn(r.revisedS, r.revisedO, r.revisedD), 0);
  const totalRiskReduction = totalBaselineRpn > 0 
    ? Math.round(((totalBaselineRpn - totalRevisedRpn) / totalBaselineRpn) * 1000) / 10 
    : 0;

  const updateField = (id: string, field: keyof DfmeaRow, val: any) => {
    setRows(rows.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-burgundy-900/60 border border-gold-500/30 text-gold-300">
            EXPERIMENT 16 INTERACTIVE SIMULATOR
          </span>
          <h3 className="text-xl font-bold font-cinzel text-ivory-50 mt-1">
            Design Failure Mode and Effects Analysis (DFMEA)
          </h3>
          <p className="text-xs text-ivory-400">
            Proactively identify component failure modes, calculate Risk Priority Numbers, and engineer fail-safe countermeasures.
          </p>
        </div>

        <button
          onClick={() => setRows(defaultDfmeaData)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-navy-900 border border-gold-500/20 text-ivory-300 hover:text-gold-400"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset Template
        </button>
      </div>

      {/* RPN Risk Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card p-4 rounded-xl border border-red-500/30">
          <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider block">Total Baseline RPN</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-cinzel text-red-400">{totalBaselineRpn}</span>
            <span className="text-xs text-ivory-400">Pre-Mitigation</span>
          </div>
        </div>

        <div className="glass-card p-4 rounded-xl border border-emerald-500/30">
          <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">Total Revised RPN</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-cinzel text-emerald-400">{totalRevisedRpn}</span>
            <span className="text-xs text-ivory-400">Post-Countermeasures</span>
          </div>
        </div>

        <div className="glass-panel-burgundy p-4 rounded-xl border border-gold-500/40 shadow-gold-glow">
          <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider block">Risk Reduction Factor</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-cinzel text-gold-300">{totalRiskReduction}%</span>
            <span className="text-xs text-emerald-400 font-medium">Safe Margin Achieved</span>
          </div>
        </div>
      </div>

      {/* DFMEA Interactive Table */}
      <div className="space-y-4">
        {rows.map((row, idx) => {
          const baselineRpn = calculateRpn(row.severity, row.occurrence, row.detection);
          const revisedRpn = calculateRpn(row.revisedS, row.revisedO, row.revisedD);
          const isCritical = baselineRpn >= 100 || row.severity >= 9;

          return (
            <div 
              key={row.id} 
              className={`p-5 rounded-2xl border transition-all ${
                isCritical ? 'glass-card border-red-500/40 bg-navy-950/70' : 'glass-card'
              }`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-3 border-b border-gold-500/10 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-burgundy-900 border border-gold-500/30 text-gold-300 text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <input
                    type="text"
                    value={row.itemFunction}
                    onChange={(e) => updateField(row.id, 'itemFunction', e.target.value)}
                    className="bg-navy-900/80 border border-gold-500/20 rounded px-2.5 py-1 text-xs font-bold text-ivory-100 focus:outline-none focus:border-gold-400"
                  />
                  {row.severity >= 9 && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-500/40 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> SAFETY CRITICAL (S={row.severity})
                    </span>
                  )}
                </div>

                {/* Live RPN Badges */}
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[10px] text-ivory-400 block">Baseline RPN</span>
                    <span className={`text-sm font-bold font-cinzel px-2 py-0.5 rounded ${
                      baselineRpn >= 100 ? 'bg-red-950 text-red-300 border border-red-500/30' : 'bg-navy-900 text-ivory-200'
                    }`}>
                      {baselineRpn}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold-500" />
                  <div className="text-right">
                    <span className="text-[10px] text-ivory-400 block">Revised RPN</span>
                    <span className="text-sm font-bold font-cinzel px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                      {revisedRpn}
                    </span>
                  </div>
                </div>
              </div>

              {/* Grid of Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-3">
                <div className="p-3 rounded-xl bg-navy-900/60 border border-gold-500/10">
                  <span className="text-[10px] text-gold-400 font-bold block mb-1">Potential Failure Mode</span>
                  <textarea
                    value={row.failureMode}
                    onChange={(e) => updateField(row.id, 'failureMode', e.target.value)}
                    rows={2}
                    className="w-full bg-navy-950 border border-gold-500/20 rounded p-2 text-ivory-200 resize-none focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div className="p-3 rounded-xl bg-navy-900/60 border border-gold-500/10">
                  <span className="text-[10px] text-gold-400 font-bold block mb-1">Failure Effect (Customer Consequence)</span>
                  <textarea
                    value={row.failureEffect}
                    onChange={(e) => updateField(row.id, 'failureEffect', e.target.value)}
                    rows={2}
                    className="w-full bg-navy-950 border border-gold-500/20 rounded p-2 text-ivory-200 resize-none focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div className="p-3 rounded-xl bg-navy-900/60 border border-gold-500/10">
                  <span className="text-[10px] text-gold-400 font-bold block mb-1">Root Cause Mechanism</span>
                  <textarea
                    value={row.failureCause}
                    onChange={(e) => updateField(row.id, 'failureCause', e.target.value)}
                    rows={2}
                    className="w-full bg-navy-950 border border-gold-500/20 rounded p-2 text-ivory-200 resize-none focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Scoring and Countermeasures */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {/* Baseline S, O, D Sliders */}
                <div className="p-3 rounded-xl bg-navy-950/80 border border-gold-500/15 space-y-2">
                  <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider block">
                    Baseline Risk Scores (1-10)
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[10px] text-ivory-400 block">Severity: {row.severity}</label>
                      <input
                        type="range" min="1" max="10" value={row.severity}
                        onChange={(e) => updateField(row.id, 'severity', Number(e.target.value))}
                        className="w-full accent-red-500"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-ivory-400 block">Occurrence: {row.occurrence}</label>
                      <input
                        type="range" min="1" max="10" value={row.occurrence}
                        onChange={(e) => updateField(row.id, 'occurrence', Number(e.target.value))}
                        className="w-full accent-amber-500"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-ivory-400 block">Detection: {row.detection}</label>
                      <input
                        type="range" min="1" max="10" value={row.detection}
                        onChange={(e) => updateField(row.id, 'detection', Number(e.target.value))}
                        className="w-full accent-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Countermeasures & Revised S, O, D */}
                <div className="p-3 rounded-xl bg-navy-950/80 border border-gold-500/15 space-y-2">
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Engineering Countermeasure
                  </span>
                  <input
                    type="text"
                    value={row.recommendedAction}
                    onChange={(e) => updateField(row.id, 'recommendedAction', e.target.value)}
                    placeholder="Describe design countermeasure / Poka-Yoke..."
                    className="w-full bg-navy-900 border border-emerald-500/30 rounded px-2.5 py-1 text-ivory-100 focus:outline-none focus:border-emerald-500"
                  />
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <div>
                      <label className="text-[10px] text-ivory-400 block">Rev. S: {row.revisedS}</label>
                      <input
                        type="range" min="1" max="10" value={row.revisedS}
                        onChange={(e) => updateField(row.id, 'revisedS', Number(e.target.value))}
                        className="w-full accent-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-ivory-400 block">Rev. O: {row.revisedO}</label>
                      <input
                        type="range" min="1" max="10" value={row.revisedO}
                        onChange={(e) => updateField(row.id, 'revisedO', Number(e.target.value))}
                        className="w-full accent-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-ivory-400 block">Rev. D: {row.revisedD}</label>
                      <input
                        type="range" min="1" max="10" value={row.revisedD}
                        onChange={(e) => updateField(row.id, 'revisedD', Number(e.target.value))}
                        className="w-full accent-emerald-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

