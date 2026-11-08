import React, { useState } from 'react';
import { Award, RefreshCw, BarChart2, Plus, Trash2 } from 'lucide-react';

interface Criterion {
  id: string;
  name: string;
  weight: number; // percentage (summing to 100)
}

interface Concept {
  id: string;
  name: string;
  scores: { [criterionId: string]: number }; // 1 to 10
}

const defaultCriteria: Criterion[] = [
  { id: 'c1', name: 'Manufacturing BOM Cost', weight: 30 },
  { id: 'c2', name: 'Filtration Efficiency', weight: 25 },
  { id: 'c3', name: 'Battery Autonomy (Run Time)', weight: 15 },
  { id: 'c4', name: 'Compactness & Ergonomics', weight: 15 },
  { id: 'c5', name: 'Maintenance & Serviceability', weight: 15 },
];

const defaultConcepts: Concept[] = [
  {
    id: 'A',
    name: 'Concept A: Active UV-C Optical Purifier',
    scores: { c1: 8, c2: 7, c3: 6, c4: 9, c5: 8 }
  },
  {
    id: 'B',
    name: 'Concept B: Hollow-Fiber Ultrafiltration Membrane',
    scores: { c1: 6, c2: 9, c3: 8, c4: 6, c5: 7 }
  },
  {
    id: 'C',
    name: 'Concept C: Gravity Multi-Stage Biochar Bed',
    scores: { c1: 9, c2: 6, c3: 7, c4: 7, c5: 9 }
  }
];

export const DecisionMatrixLab: React.FC = () => {
  const [criteria, setCriteria] = useState<Criterion[]>(defaultCriteria);
  const [concepts, setConcepts] = useState<Concept[]>(defaultConcepts);

  const totalWeight = criteria.reduce((sum, c) => sum + c.weight, 0);

  const updateWeight = (id: string, val: number) => {
    setCriteria(criteria.map(c => c.id === id ? { ...c, weight: val } : c));
  };

  const updateScore = (conceptId: string, criterionId: string, score: number) => {
    setConcepts(concepts.map(con => {
      if (con.id === conceptId) {
        return {
          ...con,
          scores: { ...con.scores, [criterionId]: Math.min(10, Math.max(1, score)) }
        };
      }
      return con;
    }));
  };

  // Compute Weighted Scores
  const calculateScore = (concept: Concept) => {
    if (totalWeight === 0) return 0;
    const weightedSum = criteria.reduce((sum, crit) => {
      const s = concept.scores[crit.id] || 0;
      return sum + (crit.weight / totalWeight) * s;
    }, 0);
    return Math.round(weightedSum * 100) / 100;
  };

  const rankedConcepts = [...concepts].sort((a, b) => calculateScore(b) - calculateScore(a));
  const winner = rankedConcepts[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-burgundy-900/60 border border-gold-500/30 text-gold-300">
            EXPERIMENT 11 INTERACTIVE SIMULATOR
          </span>
          <h3 className="text-xl font-bold font-cinzel text-ivory-50 mt-1">
            Weighted Decision Matrix (Pugh Matrix)
          </h3>
          <p className="text-xs text-ivory-400">
            Mathematically evaluate and rank competing engineering architectures without subjective bias.
          </p>
        </div>

        <button
          onClick={() => { setCriteria(defaultCriteria); setConcepts(defaultConcepts); }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-navy-900 border border-gold-500/20 text-ivory-300 hover:text-gold-400"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset Default Matrix
        </button>
      </div>

      {/* Winning Badge Banner */}
      <div className="glass-panel-burgundy p-4 rounded-xl border border-gold-500/40 flex items-center justify-between shadow-gold-glow">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center font-bold font-cinzel shadow-lg">
            #1
          </div>
          <div>
            <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider block">Recommended Optimal Concept:</span>
            <h4 className="text-sm font-bold text-ivory-100">{winner.name}</h4>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-ivory-400 block">Weighted Score</span>
          <span className="text-xl font-bold font-cinzel text-gold-300">{calculateScore(winner)} / 10</span>
        </div>
      </div>

      {/* Decision Table */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-gold-500/20">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-navy-950/80 border-b border-gold-500/30 text-gold-400 font-cinzel">
                <th className="p-3 w-1/3">Evaluation Criteria</th>
                <th className="p-3 text-center w-28">Weight (%)</th>
                {concepts.map(con => (
                  <th key={con.id} className="p-3 text-center">
                    <span className="block font-bold text-ivory-100">{con.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-500/10 text-ivory-200">
              {criteria.map((crit) => (
                <tr key={crit.id} className="hover:bg-navy-900/40 transition-colors">
                  <td className="p-3 font-medium text-ivory-100">{crit.name}</td>
                  <td className="p-3 text-center">
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={crit.weight}
                      onChange={(e) => updateWeight(crit.id, Number(e.target.value))}
                      className="w-16 bg-navy-950 border border-gold-500/30 text-gold-300 text-center rounded px-2 py-1 text-xs focus:outline-none focus:border-gold-500"
                    />
                  </td>
                  {concepts.map(con => (
                    <td key={con.id} className="p-3 text-center">
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={con.scores[crit.id] || 0}
                        onChange={(e) => updateScore(con.id, crit.id, Number(e.target.value))}
                        className="w-14 bg-navy-950 border border-gold-500/30 text-ivory-100 text-center rounded px-2 py-1 text-xs focus:outline-none focus:border-gold-500"
                      />
                    </td>
                  ))}
                </tr>
              ))}

              {/* Total Summary Row */}
              <tr className="bg-burgundy-950/40 border-t-2 border-gold-500/40 font-bold">
                <td className="p-4 text-gold-300 font-cinzel uppercase tracking-wider">
                  Total Weighted Score (1-10)
                </td>
                <td className="p-4 text-center">
                  <span className={`text-xs px-2 py-0.5 rounded ${totalWeight === 100 ? 'bg-emerald-950 text-emerald-400' : 'bg-red-950 text-red-400'
                    }`}>
                    {totalWeight}%
                  </span>
                </td>
                {concepts.map(con => {
                  const score = calculateScore(con);
                  const isWin = con.id === winner.id;
                  return (
                    <td key={con.id} className="p-4 text-center">
                      <span className={`text-base font-cinzel font-bold px-3 py-1 rounded-lg ${isWin
                        ? 'bg-gold-500 text-navy-950 shadow-gold-glow'
                        : 'bg-navy-900 text-ivory-200'
                        }`}>
                        {score}
                      </span>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Sensitivity & Ranking Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {rankedConcepts.map((con, rank) => {
          const score = calculateScore(con);
          return (
            <div key={con.id} className={`p-4 rounded-xl border ${rank === 0 ? 'border-gold-500 bg-burgundy-950/40' : 'glass-card'
              }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                  Rank #{rank + 1}
                </span>
                <span className="text-sm font-bold font-cinzel text-ivory-100">
                  {score} / 10
                </span>
              </div>
              <h5 className="text-xs font-semibold text-ivory-200 line-clamp-2">{con.name}</h5>
              <div className="mt-3 w-full bg-navy-950 rounded-full h-1.5 overflow-hidden">
                <div
                  className={`h-full ${rank === 0 ? 'gold-gradient' : 'bg-ivory-400/50'}`}
                  style={{ width: `${score * 10}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

