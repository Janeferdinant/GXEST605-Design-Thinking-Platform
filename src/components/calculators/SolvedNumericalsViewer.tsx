import React, { useState } from 'react';
import { numericalProblemsData } from '../../data/numericalProblemsData';
import { NumericalCalculators } from './NumericalCalculators';
import { 
  Calculator, 
  Search, 
  CheckCircle2, 
  FileText, 
  BookOpen, 
  Sparkles,
  TrendingUp,
  Percent,
  Layers
} from 'lucide-react';

export const SolvedNumericalsViewer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNumId, setSelectedNumId] = useState<string>(numericalProblemsData[0].id);
  const [viewMode, setViewMode] = useState<'problems' | 'calculators'>('problems');

  const filteredProblems = numericalProblemsData.filter(num => 
    num.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    num.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    num.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentNum = numericalProblemsData.find(n => n.id === selectedNumId) || numericalProblemsData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl border border-gold-500/30 shadow-luxury relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-burgundy-900/40 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-burgundy-900/80 border border-gold-500/40 text-gold-300">
              PART F: SOLVED NUMERICAL PROBLEMS & INTERACTIVE CALCULATORS
            </span>
            <h2 className="text-3xl font-bold font-cinzel text-ivory-50 mt-2">
              15 Solved Numerical Problems & <span className="gold-gradient-text">Calculators</span>
            </h2>
            <p className="text-sm text-ivory-300 max-w-2xl mt-2 leading-relaxed">
              Step-by-step mathematical solutions with Question, Given Data, Formula, Substitution, Step-by-Step Breakdown, Final Answer, and Practical Engineering Interpretation.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-navy-950 p-1.5 rounded-2xl border border-gold-500/20 shrink-0">
            <button
              onClick={() => setViewMode('problems')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'problems'
                  ? 'bg-burgundy-800 text-gold-300 border border-gold-500/40 shadow-gold-glow'
                  : 'text-ivory-400 hover:text-ivory-200'
              }`}
            >
              <FileText className="w-4 h-4" /> 15 Solved Problems
            </button>
            <button
              onClick={() => setViewMode('calculators')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'calculators'
                  ? 'bg-burgundy-800 text-gold-300 border border-gold-500/40 shadow-gold-glow'
                  : 'text-ivory-400 hover:text-ivory-200'
              }`}
            >
              <Calculator className="w-4 h-4 text-gold-400" /> Interactive Calculators
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'calculators' ? (
        <NumericalCalculators />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Problems List Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <div className="glass-panel p-4 rounded-2xl border border-gold-500/20">
              <div className="relative mb-3">
                <Search className="w-4 h-4 text-gold-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search numericals by topic..."
                  className="w-full bg-navy-950/80 border border-gold-500/20 rounded-xl pl-9 pr-3 py-2 text-xs text-ivory-100 placeholder:text-ivory-500 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="space-y-1.5 max-h-[640px] overflow-y-auto pr-1">
                {filteredProblems.map((num) => {
                  const isSelected = num.id === selectedNumId;
                  return (
                    <button
                      key={num.id}
                      onClick={() => setSelectedNumId(num.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-start gap-3 ${
                        isSelected
                          ? 'bg-burgundy-900/90 text-gold-300 border-gold-500 shadow-gold-glow'
                          : 'glass-card text-ivory-300 hover:border-gold-500/40'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-[11px] shrink-0 ${
                        isSelected ? 'bg-gold-500 text-navy-950' : 'bg-navy-900 text-gold-400'
                      }`}>
                        #{num.number}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-ivory-100 line-clamp-1">{num.title}</p>
                        <span className="text-[10px] text-gold-400 font-medium block mt-0.5">{num.category}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Solved Numerical Solution Viewport */}
          <div className="lg:col-span-8 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-6 text-xs">
              {/* Question Header */}
              <div className="pb-4 border-b border-gold-500/20">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-gold-500 text-navy-950">
                    PROBLEM #{currentNum.number}
                  </span>
                  <span className="text-xs text-gold-400 font-medium">
                    Category: {currentNum.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-cinzel text-ivory-50 mt-1">
                  {currentNum.title}
                </h3>
              </div>

              {/* Question Text */}
              <div className="p-4 rounded-xl bg-navy-900/60 border border-gold-500/15">
                <h4 className="font-bold text-gold-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-gold-500" /> Question Statement
                </h4>
                <p className="text-ivory-100 leading-relaxed whitespace-pre-line text-xs font-medium">
                  {currentNum.question}
                </p>
              </div>

              {/* Given Data Grid */}
              <div className="p-4 rounded-xl glass-card space-y-2">
                <h4 className="font-bold text-gold-400 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-gold-500" /> Given Data
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {Object.entries(currentNum.givenData).map(([key, val], idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-navy-950/80 border border-gold-500/10 flex items-center justify-between">
                      <span className="text-ivory-400 font-medium">{key.replace(/_/g, ' ')}:</span>
                      <span className="font-mono text-gold-300 font-semibold">{String(val)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formula & Substitution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl glass-card space-y-2">
                  <h4 className="font-bold text-gold-400 uppercase tracking-wider">Applicable Formula(s)</h4>
                  <pre className="p-3 rounded-lg bg-navy-950 font-mono text-[11px] text-gold-300 overflow-x-auto whitespace-pre-wrap border border-gold-500/10">
                    {currentNum.formula}
                  </pre>
                </div>

                <div className="p-4 rounded-xl glass-card space-y-2">
                  <h4 className="font-bold text-gold-400 uppercase tracking-wider">Numerical Substitution</h4>
                  <pre className="p-3 rounded-lg bg-navy-950 font-mono text-[11px] text-ivory-200 overflow-x-auto whitespace-pre-wrap border border-gold-500/10">
                    {currentNum.substitution}
                  </pre>
                </div>
              </div>

              {/* Step-by-Step Calculation */}
              <div className="p-5 rounded-xl glass-card space-y-3">
                <h4 className="font-bold text-gold-400 uppercase tracking-wider flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-gold-500" /> Step-by-Step Solution & Working
                </h4>
                <div className="space-y-2.5">
                  {currentNum.stepByStepSolution.map((step: string, idx: number) => (
                    <div key={idx} className="p-3 rounded-lg bg-navy-950/80 border border-gold-500/10 space-y-1">
                      <p className="text-ivory-200 leading-relaxed font-mono whitespace-pre-line text-[11px]">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final Answer Banner */}
              <div className="glass-panel-burgundy p-5 rounded-2xl border border-gold-500/40 shadow-gold-glow flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider block">Final Answer:</span>
                  <p className="text-sm font-bold text-ivory-50 mt-0.5 font-cinzel leading-relaxed">
                    {currentNum.finalAnswer}
                  </p>
                </div>
              </div>

              {/* Practical Engineering Interpretation */}
              <div className="p-4 rounded-xl bg-navy-950/90 border border-gold-500/20">
                <h4 className="font-bold text-gold-400 uppercase tracking-wider mb-1 flex items-center gap-1.5 text-xs">
                  <Sparkles className="w-4 h-4 text-gold-400" /> Practical Engineering Interpretation
                </h4>
                <p className="text-ivory-200 leading-relaxed text-xs">
                  {currentNum.practicalInterpretation}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
