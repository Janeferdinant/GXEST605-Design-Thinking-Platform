import React, { useState } from 'react';
import { modelQuestionPaper } from '../../data/questionPapersData';
import { 
  FileCheck2, 
  Printer, 
  Eye, 
  EyeOff, 
  Award, 
  HelpCircle, 
  CheckCircle2, 
  BookOpen,
  Layers,
  Sparkles
} from 'lucide-react';

export const ModelExamViewer: React.FC = () => {
  const [showSolutions, setShowSolutions] = useState(true);
  const [activePart, setActivePart] = useState<'both' | 'partA' | 'partB'>('both');

  const { partA, partB } = modelQuestionPaper;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl border border-gold-500/30 shadow-luxury relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-burgundy-900/40 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-burgundy-900/80 border border-gold-500/40 text-gold-300">
              PART G: SOLVED KTU QUESTION PAPERS & MODEL EXAMS
            </span>
            <h2 className="text-3xl font-bold font-cinzel text-ivory-50 mt-2">
              Official KTU 60-Mark <span className="gold-gradient-text">Model Examination</span>
            </h2>
            <p className="text-sm text-ivory-300 max-w-2xl mt-2 leading-relaxed">
              Complete university End Semester Examination (ESE) question paper strictly structured according to the KTU assessment schema: Part A (8 × 3 = 24 Marks) and Part B (4 × 9 = 36 Marks) with step-by-step solutions, marking rubrics, and CO-PO alignments.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowSolutions(!showSolutions)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                showSolutions
                  ? 'bg-gold-500 text-navy-950 shadow-gold-glow'
                  : 'bg-navy-900 border border-gold-500/30 text-gold-300'
              }`}
            >
              {showSolutions ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showSolutions ? 'Hide Answer Keys' : 'Reveal Answer Keys'}
            </button>

            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold burgundy-gradient border border-gold-500/40 text-gold-300 shadow-gold-glow hover:brightness-110"
            >
              <Printer className="w-4 h-4" /> Print QP with Solutions
            </button>
          </div>
        </div>
      </div>

      {/* Exam Header Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-gold-500/20 text-center space-y-2">
        <h3 className="font-cinzel text-lg font-bold text-gold-300 tracking-wider">
          {modelQuestionPaper.examTitle}
        </h3>
        <p className="text-xs font-bold text-ivory-200">
          Course Code: {modelQuestionPaper.courseCode} | Course: {modelQuestionPaper.courseName}
        </p>
        <p className="text-xs text-ivory-400">
          {modelQuestionPaper.semester}
        </p>
        <div className="flex items-center justify-center gap-6 pt-2 text-xs font-semibold text-gold-400 border-t border-gold-500/10 mt-3">
          <span>Max. Marks: 60</span>
          <span>•</span>
          <span>Duration: 2 Hours 30 Minutes</span>
          <span>•</span>
          <span>CIE Component: 40 Marks</span>
        </div>
      </div>

      {/* Filter Part A / Part B Tabs */}
      <div className="flex justify-center gap-2">
        {[
          { id: 'both', label: 'Full Examination Paper (Parts A & B)' },
          { id: 'partA', label: 'Part A (8 × 3 = 24 Marks)' },
          { id: 'partB', label: 'Part B (4 × 9 = 36 Marks)' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActivePart(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activePart === tab.id
                ? 'bg-burgundy-800 text-gold-300 border border-gold-500/40 shadow-gold-glow'
                : 'glass-card text-ivory-400 hover:text-ivory-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* PART A SECTION */}
      {(activePart === 'both' || activePart === 'partA') && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold-500/20 space-y-6">
          <div className="pb-4 border-b border-gold-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-burgundy-900 text-gold-300 border border-gold-500/30">
                PART A (COMPULSORY)
              </span>
              <h4 className="text-lg font-bold font-cinzel text-ivory-50 mt-1">
                Answer all questions. (8 Questions × 3 Marks = 24 Marks)
              </h4>
            </div>
            <span className="text-xs text-gold-400 font-semibold">2 Questions from each Module</span>
          </div>

          <div className="space-y-6">
            {partA.questions.map((q) => (
              <div 
                key={q.qNo} 
                className="p-5 rounded-2xl glass-card border border-gold-500/15 space-y-3 text-xs"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-gold-500 text-navy-950 font-bold font-cinzel flex items-center justify-center shrink-0 mt-0.5 text-xs">
                      Q{q.qNo}
                    </span>
                    <div>
                      <p className="font-bold text-sm text-ivory-100 leading-snug">
                        {q.questionText}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5 text-[10px]">
                        <span className="text-gold-400 font-semibold">Module {q.moduleNo}</span>
                        <span className="text-ivory-500">•</span>
                        <span className="text-ivory-300 font-medium">{q.coMapping}</span>
                        <span className="text-ivory-500">•</span>
                        <span className="text-ivory-400 font-mono">{q.bloomsLevel}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold font-cinzel text-gold-400 bg-navy-950 px-2 py-1 rounded border border-gold-500/20 shrink-0">
                    {q.marks} Marks
                  </span>
                </div>

                {/* Solution View */}
                {showSolutions && (
                  <div className="mt-4 pt-3 border-t border-gold-500/15 space-y-3">
                    <div className="p-3.5 rounded-xl bg-navy-950/80 border border-emerald-500/20 space-y-1">
                      <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> University Model Solution:
                      </span>
                      <p className="text-ivory-200 leading-relaxed whitespace-pre-line text-xs font-sans">
                        {q.solutionText}
                      </p>
                    </div>

                    {/* Marking Scheme */}
                    <div className="p-2.5 rounded-lg bg-navy-900/60 border border-gold-500/10 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                      <span className="text-gold-400 font-semibold">Mark Allocation Rubric:</span>
                      <div className="flex flex-wrap gap-3 text-ivory-300">
                        {q.markingScheme.map((item, idx) => (
                          <span key={idx}>
                            {item.criterion}: <strong className="text-gold-300">({item.marks}M)</strong>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PART B SECTION */}
      {(activePart === 'both' || activePart === 'partB') && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold-500/20 space-y-6">
          <div className="pb-4 border-b border-gold-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-burgundy-900 text-gold-300 border border-gold-500/30">
                PART B (MODULE-WISE CHOICE)
              </span>
              <h4 className="text-lg font-bold font-cinzel text-ivory-50 mt-1">
                Answer any ONE full question from each module. (4 Questions × 9 Marks = 36 Marks)
              </h4>
            </div>
            <span className="text-xs text-gold-400 font-semibold">Each question carries 9 Marks</span>
          </div>

          <div className="space-y-8">
            {[1, 2, 3, 4].map((modNo) => {
              const modQuestions = partB.questions.filter(q => q.moduleNo === modNo);
              return (
                <div key={modNo} className="space-y-4 p-5 rounded-2xl bg-navy-950/60 border border-gold-500/20">
                  <div className="flex items-center justify-between border-b border-gold-500/15 pb-2">
                    <span className="font-cinzel text-sm font-bold text-gold-300">
                      MODULE {modNo} (Choose either Q{modQuestions[0]?.qNo} OR Q{modQuestions[1]?.qNo})
                    </span>
                    <span className="text-[10px] text-ivory-400">9 Marks Total</span>
                  </div>

                  <div className="space-y-4">
                    {modQuestions.map((q, qIndex) => (
                      <div key={q.qNo} className="p-4 rounded-xl glass-card space-y-3 text-xs">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-2.5">
                            <span className="w-6 h-6 rounded-md bg-burgundy-800 text-gold-300 font-bold font-cinzel flex items-center justify-center shrink-0 mt-0.5 text-xs">
                              Q{q.qNo}
                            </span>
                            <div>
                              <p className="font-bold text-sm text-ivory-100 leading-snug">
                                {q.questionText}
                              </p>
                              <div className="flex items-center gap-2 mt-1.5 text-[10px]">
                                <span className="text-gold-400 font-semibold">Module {q.moduleNo}</span>
                                <span className="text-ivory-500">•</span>
                                <span className="text-ivory-300 font-medium">{q.coMapping}</span>
                                <span className="text-ivory-500">•</span>
                                <span className="text-ivory-400 font-mono">{q.bloomsLevel}</span>
                              </div>
                            </div>
                          </div>
                          <span className="text-xs font-bold font-cinzel text-gold-400 bg-navy-950 px-2.5 py-1 rounded border border-gold-500/20 shrink-0">
                            9 Marks
                          </span>
                        </div>

                        {/* Subdivisions if present */}
                        {q.subDivisions && (
                          <div className="space-y-3 pt-2 pl-8">
                            {q.subDivisions.map((sub, sIdx) => (
                              <div key={sIdx} className="p-3 rounded-lg bg-navy-950/80 border border-gold-500/10 space-y-1.5">
                                <div className="flex items-center justify-between">
                                  <span className="font-bold text-gold-300">
                                    ({sub.subLabel}) {sub.text}
                                  </span>
                                  <span className="text-[10px] font-bold text-gold-400 bg-navy-900 px-2 py-0.5 rounded">
                                    {sub.marks} Marks
                                  </span>
                                </div>
                                {showSolutions && (
                                  <p className="text-ivory-200 text-xs leading-relaxed whitespace-pre-line pt-1 border-t border-gold-500/10">
                                    {sub.answerText}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Marking Scheme */}
                        {showSolutions && (
                          <div className="p-2.5 rounded-lg bg-navy-900/60 border border-gold-500/10 flex flex-wrap items-center justify-between gap-2 text-[11px] mt-2">
                            <span className="text-gold-400 font-semibold">Mark Allocation Rubric:</span>
                            <div className="flex flex-wrap gap-3 text-ivory-300">
                              {q.markingScheme.map((item, idx) => (
                                <span key={idx}>
                                  {item.criterion}: <strong className="text-gold-300">({item.marks}M)</strong>
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

