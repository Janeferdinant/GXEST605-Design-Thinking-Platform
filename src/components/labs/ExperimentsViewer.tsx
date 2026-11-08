import React, { useState } from 'react';
import { experimentsData } from '../../data/experimentsData';
import { PracticalExperiment } from '../../types';
import { EmpathyMapLab } from './EmpathyMapLab';
import { FiveWhysLab } from './FiveWhysLab';
import { ScamperLab } from './ScamperLab';
import { DecisionMatrixLab } from './DecisionMatrixLab';
import { DfmeaLab } from './DfmeaLab';
import { 
  Search, 
  FlaskConical, 
  HelpCircle, 
  FileText, 
  Layers, 
  Play, 
  CheckCircle2, 
  Target, 
  ListOrdered, 
  Lightbulb, 
  Cpu,
  BookOpen
} from 'lucide-react';

export const ExperimentsViewer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpNumber, setSelectedExpNumber] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'manual' | 'simulator' | 'viva'>('manual');

  const filteredExperiments = experimentsData.filter(exp => 
    exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.experimentNumber.toString().includes(searchTerm) ||
    exp.aim.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedExp = experimentsData.find(e => e.experimentNumber === selectedExpNumber) || experimentsData[0];

  const hasSimulator = [2, 5, 7, 11, 16].includes(selectedExp.experimentNumber);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="glass-panel p-8 rounded-3xl border border-gold-500/30 shadow-luxury relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-burgundy-900/40 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-burgundy-900/80 border border-gold-500/40 text-gold-300">
            PART C: PRACTICAL EXPERIMENTS & INTERACTIVE LABORATORY
          </span>
          <h2 className="text-3xl font-bold font-cinzel text-ivory-50 mt-2">
            20 Practical Experiments & <span className="gold-gradient-text">Laboratory Manual</span>
          </h2>
          <p className="text-sm text-ivory-300 max-w-3xl mt-2 leading-relaxed">
            Exhaustive KTU activity syllabus covering Design Thinking lifecycles, user empathy immersion, divergent/convergent ideation, engineering feasibility, DFMEA risk mitigation, alpha/beta prototyping, and pilot build planning. Includes 300+ curated technical viva questions.
          </p>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Experiments Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="glass-panel p-4 rounded-2xl border border-gold-500/20">
            {/* Search Input */}
            <div className="relative mb-3">
              <Search className="w-4 h-4 text-gold-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search experiments by title or aim..."
                className="w-full bg-navy-950/80 border border-gold-500/20 rounded-xl pl-9 pr-3 py-2 text-xs text-ivory-100 placeholder:text-ivory-500 focus:outline-none focus:border-gold-500"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-ivory-400 pb-2 border-b border-gold-500/10 mb-2 px-1">
              <span>All 20 KTU Practicals</span>
              <span>{filteredExperiments.length} visible</span>
            </div>

            {/* List of 20 Experiments */}
            <div className="space-y-1.5 max-h-[620px] overflow-y-auto pr-1">
              {filteredExperiments.map((exp) => {
                const isSelected = exp.experimentNumber === selectedExpNumber;
                return (
                  <button
                    key={exp.experimentNumber}
                    onClick={() => {
                      setSelectedExpNumber(exp.experimentNumber);
                      if (activeTab === 'simulator' && ![2, 5, 7, 11, 16].includes(exp.experimentNumber)) {
                        setActiveTab('manual');
                      }
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-start gap-3 ${
                      isSelected
                        ? 'bg-burgundy-900/90 text-gold-300 border-gold-500 shadow-gold-glow'
                        : 'glass-card text-ivory-300 hover:border-gold-500/40'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-[11px] shrink-0 ${
                      isSelected ? 'bg-gold-500 text-navy-950' : 'bg-navy-900 border border-gold-500/20 text-gold-400'
                    }`}>
                      {exp.experimentNumber}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-ivory-100 line-clamp-1">{exp.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-gold-400 font-medium">Mod {exp.moduleLink}</span>
                        <span className="text-[10px] text-ivory-500">•</span>
                        <span className="text-[10px] text-ivory-400">{exp.coMapping.join(', ')}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Experiment Details / Simulators / Viva Bank */}
        <div className="lg:col-span-8 space-y-6">
          {/* Header Card with Navigation Tabs */}
          <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gold-500/20">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-gold-500 text-navy-950">
                    EXPERIMENT #{selectedExp.experimentNumber}
                  </span>
                  <span className="text-xs text-gold-400 font-medium">
                    Module {selectedExp.moduleLink} | CO: {selectedExp.coMapping.join(', ')}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-cinzel text-ivory-50 mt-1">
                  {selectedExp.title}
                </h3>
              </div>

              {/* View Mode Switcher */}
              <div className="flex items-center gap-1 bg-navy-950 p-1 rounded-xl border border-gold-500/20">
                <button
                  onClick={() => setActiveTab('manual')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'manual'
                      ? 'bg-burgundy-800 text-gold-300 border border-gold-500/30'
                      : 'text-ivory-400 hover:text-ivory-200'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" /> Manual
                </button>

                {hasSimulator && (
                  <button
                    onClick={() => setActiveTab('simulator')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === 'simulator'
                        ? 'bg-burgundy-800 text-gold-300 border border-gold-500/30'
                        : 'text-ivory-400 hover:text-ivory-200'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 text-gold-400" /> Interactive Lab
                  </button>
                )}

                <button
                  onClick={() => setActiveTab('viva')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'viva'
                      ? 'bg-burgundy-800 text-gold-300 border border-gold-500/30'
                      : 'text-ivory-400 hover:text-ivory-200'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5 text-gold-400" /> Viva Bank (15 Qs)
                </button>
              </div>
            </div>

            {/* TAB CONTENT 1: FULL MANUAL VIEW */}
            {activeTab === 'manual' && (
              <div className="pt-6 space-y-6 text-xs text-ivory-300">
                {/* Aim */}
                <div className="p-4 rounded-xl bg-navy-900/60 border border-gold-500/15">
                  <h4 className="font-bold text-gold-400 uppercase tracking-wider flex items-center gap-2 mb-1.5 text-xs">
                    <Target className="w-4 h-4 text-gold-500" /> Aim of the Experiment
                  </h4>
                  <p className="text-sm font-medium text-ivory-100 leading-relaxed">
                    {selectedExp.aim}
                  </p>
                </div>

                {/* Requirements & Input Data */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl glass-card">
                    <h4 className="font-bold text-gold-400 uppercase tracking-wider flex items-center gap-2 mb-2 text-xs">
                      <Layers className="w-4 h-4 text-gold-500" /> Apparatus & Requirements
                    </h4>
                    <ul className="space-y-1 text-ivory-200">
                      {selectedExp.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-gold-400">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl glass-card">
                    <h4 className="font-bold text-gold-400 uppercase tracking-wider flex items-center gap-2 mb-2 text-xs">
                      <FileText className="w-4 h-4 text-gold-500" /> Input Data & Case Context
                    </h4>
                    <p className="text-ivory-200 leading-relaxed">
                      {selectedExp.inputData}
                    </p>
                  </div>
                </div>

                {/* Theory */}
                <div className="p-4 rounded-xl glass-card space-y-2">
                  <h4 className="font-bold text-gold-400 uppercase tracking-wider flex items-center gap-2 text-xs">
                    <BookOpen className="w-4 h-4 text-gold-500" /> Theoretical Principles
                  </h4>
                  <p className="text-ivory-200 leading-relaxed text-xs">
                    {selectedExp.theory}
                  </p>
                </div>

                {/* Step-by-Step Procedure */}
                <div className="p-4 rounded-xl glass-card space-y-3">
                  <h4 className="font-bold text-gold-400 uppercase tracking-wider flex items-center gap-2 text-xs">
                    <ListOrdered className="w-4 h-4 text-gold-500" /> Step-by-Step Practical Procedure
                  </h4>
                  <div className="space-y-2">
                    {selectedExp.procedure.map((step, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-navy-950/80 border border-gold-500/10 flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-burgundy-900 border border-gold-500/30 text-gold-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-ivory-200 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Output, Result & Applications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-navy-950/80 border border-emerald-500/20">
                    <h4 className="font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2 mb-1.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Expected Output & Result
                    </h4>
                    <p className="text-ivory-200 mb-2">{selectedExp.expectedOutput}</p>
                    <p className="text-xs text-emerald-300 font-semibold border-t border-emerald-500/20 pt-2">
                      Result: {selectedExp.result}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-navy-950/80 border border-gold-500/20">
                    <h4 className="font-bold text-gold-400 uppercase tracking-wider flex items-center gap-2 mb-1.5 text-xs">
                      <Lightbulb className="w-4 h-4 text-gold-400" /> Real-World Applications
                    </h4>
                    <ul className="space-y-1 text-ivory-200">
                      {selectedExp.realWorldApplications.map((app, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-gold-400">✓</span>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: INTERACTIVE SIMULATOR */}
            {activeTab === 'simulator' && hasSimulator && (
              <div className="pt-6">
                {selectedExp.experimentNumber === 2 && <EmpathyMapLab />}
                {selectedExp.experimentNumber === 5 && <FiveWhysLab />}
                {selectedExp.experimentNumber === 7 && <ScamperLab />}
                {selectedExp.experimentNumber === 11 && <DecisionMatrixLab />}
                {selectedExp.experimentNumber === 16 && <DfmeaLab />}
              </div>
            )}

            {/* TAB CONTENT 3: VIVA QUESTION BANK (15+ QUESTIONS) */}
            {activeTab === 'viva' && (
              <div className="pt-6 space-y-4">
                <div className="p-3 rounded-xl bg-navy-900/60 border border-gold-500/20 flex items-center justify-between text-xs">
                  <span className="font-bold text-gold-300">
                    Audited Viva Questions Bank: Experiment #{selectedExp.experimentNumber}
                  </span>
                  <span className="text-gold-400 font-semibold">{selectedExp.vivaQuestions.length} Questions</span>
                </div>

                <div className="space-y-3">
                  {selectedExp.vivaQuestions.map((viva, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl glass-card space-y-1.5 border border-gold-500/15"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-burgundy-900 border border-gold-500/30 text-gold-300 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          Q{idx + 1}
                        </span>
                        <p className="text-xs font-bold text-ivory-100 leading-snug">
                          {viva.q}
                        </p>
                      </div>
                      <div className="pl-7 pt-1 border-t border-gold-500/10 mt-1">
                        <p className="text-xs text-gold-300/90 leading-relaxed">
                          <span className="font-semibold text-gold-400">Answer: </span>
                          {viva.a}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
