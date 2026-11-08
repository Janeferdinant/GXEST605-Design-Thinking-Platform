import React, { useState } from 'react';
import { syllabusModules, officialTextbooks, courseOutcomes, coPoMappingTable } from '../../data/syllabusData';
import { notesData } from '../../data/notesData';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  HelpCircle, 
  FileText, 
  CheckCircle2, 
  Bookmark, 
  ChevronRight,
  Award,
  Layers
} from 'lucide-react';

export const NotesExplorer: React.FC = () => {
  const [selectedModuleNo, setSelectedModuleNo] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNoteId, setSelectedNoteId] = useState<string>(notesData[0].id);

  const currentModule = syllabusModules.find(m => m.moduleNumber === selectedModuleNo) || syllabusModules[0];
  const currentNote = notesData.find(n => n.id === selectedNoteId) || notesData[0];

  const filteredTopics = currentModule.topics.filter(t => 
    t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl border border-gold-500/30 shadow-luxury relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-burgundy-900/40 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-burgundy-900/80 border border-gold-500/40 text-gold-300">
            PART A & PART B: OFFICIAL KTU SYLLABUS & COMPREHENSIVE NOTES
          </span>
          <h2 className="text-3xl font-bold font-cinzel text-ivory-50 mt-2">
            Complete KTU Notes & <span className="gold-gradient-text">Curriculum Syllabus</span>
          </h2>
          <p className="text-sm text-ivory-300 max-w-3xl mt-2 leading-relaxed">
            All 88 syllabus topics across Modules 1 to 4 strictly preserved in official KTU sequence. Features detailed definitions, engineering diagrams, 3-mark answers, 9-mark essay breakdowns, and viva questions.
          </p>
        </div>
      </div>

      {/* Module Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {syllabusModules.map((mod) => {
          const isSelected = mod.moduleNumber === selectedModuleNo;
          return (
            <button
              key={mod.moduleNumber}
              onClick={() => setSelectedModuleNo(mod.moduleNumber)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                isSelected
                  ? 'bg-burgundy-900 text-gold-300 border-gold-500 shadow-gold-glow'
                  : 'glass-card text-ivory-300 hover:border-gold-500/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                  isSelected ? 'bg-gold-500 text-navy-950' : 'bg-navy-950 text-gold-400'
                }`}>
                  MODULE {mod.moduleNumber}
                </span>
                <span className="text-[10px] text-ivory-400">{mod.contactHours} Hours</span>
              </div>
              <h4 className="text-xs font-bold text-ivory-100 mt-2 line-clamp-1">{mod.title}</h4>
              <p className="text-[10px] text-ivory-400 mt-1 line-clamp-1">{mod.topics.length} Syllabus Topics</p>
            </button>
          );
        })}
      </div>

      {/* Main Two-Column View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Syllabus Topic Outline for the Module */}
        <div className="lg:col-span-4 space-y-4">
          <div className="glass-panel p-4 rounded-2xl border border-gold-500/20">
            <div className="relative mb-3">
              <Search className="w-4 h-4 text-gold-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search topics in Module..."
                className="w-full bg-navy-950/80 border border-gold-500/20 rounded-xl pl-9 pr-3 py-2 text-xs text-ivory-100 placeholder:text-ivory-500 focus:outline-none focus:border-gold-500"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-ivory-400 pb-2 border-b border-gold-500/10 mb-2 px-1">
              <span>Module {selectedModuleNo} Topics</span>
              <span>{filteredTopics.length} topics</span>
            </div>

            <div className="space-y-1.5 max-h-[640px] overflow-y-auto pr-1">
              {filteredTopics.map((top) => (
                <div
                  key={top.id}
                  className="p-3 rounded-xl glass-card border border-gold-500/10 text-xs space-y-1"
                >
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded bg-navy-950 text-gold-400 border border-gold-500/20 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {top.topicNumber}
                    </span>
                    <p className="font-semibold text-ivory-100 leading-snug">{top.title}</p>
                  </div>
                  <p className="text-[11px] text-ivory-400 pl-7 leading-relaxed">{top.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Comprehensive Academic Notes Viewport */}
        <div className="lg:col-span-8 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gold-500/20 space-y-6 text-xs text-ivory-200">
            {/* Note Header */}
            <div className="pb-4 border-b border-gold-500/20">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-gold-500 text-navy-950">
                  DEEP-DIVE NOTES
                </span>
                <span className="text-xs text-gold-400 font-medium">
                  Module {currentNote.moduleNumber} | Topic #{currentNote.topicNumber}
                </span>
              </div>
              <h3 className="text-xl font-bold font-cinzel text-ivory-50 mt-1">
                {currentNote.title}
              </h3>
            </div>

            {/* Definition Card */}
            <div className="p-4 rounded-xl bg-navy-900/70 border border-gold-500/20 space-y-1">
              <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider block">
                Official KTU Academic Definition:
              </span>
              <p className="text-sm font-medium text-ivory-100 leading-relaxed">
                {currentNote.definition}
              </p>
            </div>

            {/* Detailed Explanation */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-gold-400 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gold-500" /> Detailed Theoretical & Engineering Explanation
              </h4>
              <p className="text-ivory-300 leading-relaxed text-xs">
                {currentNote.detailedExplanation}
              </p>
            </div>

            {/* Core Concepts */}
            <div className="p-4 rounded-xl glass-card space-y-2">
              <h4 className="text-xs font-bold text-gold-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-gold-500" /> Key Concepts & Takeaways
              </h4>
              <ul className="space-y-1.5 text-ivory-300">
                {currentNote.importantConcepts.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gold-400 font-bold">✓</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ASCII Engineering Diagram */}
            {currentNote.asciiDiagram && (
              <div className="space-y-2">
                <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider block">
                  Engineering Schematic & Lifecycle Flowchart:
                </span>
                <pre className="p-4 rounded-xl bg-navy-950 font-mono text-[11px] text-gold-300 overflow-x-auto border border-gold-500/20 shadow-inner">
                  {currentNote.asciiDiagram}
                </pre>
              </div>
            )}

            {/* Real-World Application & Case Study */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl glass-card space-y-1.5">
                <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider block">
                  Industrial Product Application
                </span>
                <p className="text-ivory-200 leading-relaxed text-xs">{currentNote.realWorldApplication}</p>
              </div>

              <div className="p-4 rounded-xl glass-card space-y-1.5">
                <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider block">
                  Benchmark Case Study
                </span>
                <p className="text-ivory-200 leading-relaxed text-xs">{currentNote.caseStudy}</p>
              </div>
            </div>

            {/* Solved 3-Mark & 9-Mark Answers */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-navy-950/80 border border-gold-500/20 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-burgundy-900 text-gold-300">
                    EXAMINATION 3-MARK QUESTION & MODEL ANSWER
                  </span>
                  <span className="text-[10px] text-gold-400">Part A Model</span>
                </div>
                <h5 className="font-bold text-ivory-100 text-xs">{currentNote.threeMarkAnswer.question}</h5>
                <p className="text-ivory-300 text-xs leading-relaxed border-t border-gold-500/10 pt-2">
                  {currentNote.threeMarkAnswer.answer}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-navy-950/80 border border-gold-500/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-burgundy-900 text-gold-300">
                    EXAMINATION 9-MARK ESSAY QUESTION & STRUCTURAL BREAKDOWN
                  </span>
                  <span className="text-[10px] text-gold-400">Part B Model</span>
                </div>
                <h5 className="font-bold text-ivory-100 text-xs">{currentNote.nineMarkAnswer.question}</h5>
                <div className="space-y-2 border-t border-gold-500/10 pt-2">
                  {currentNote.nineMarkAnswer.breakdown.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-navy-900/70 border border-gold-500/10 space-y-1">
                      <span className="text-gold-400 font-semibold block text-[11px]">{idx + 1}. {item.section}</span>
                      <p className="text-ivory-300 text-[11px] leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Viva Questions */}
            <div className="p-4 rounded-xl bg-navy-950/90 border border-gold-500/20 space-y-2">
              <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider block">
                Oral Viva Defense Questions:
              </span>
              <div className="space-y-2">
                {currentNote.vivaQnA.map((vq, idx) => (
                  <div key={idx} className="text-xs space-y-0.5">
                    <p className="text-ivory-100 font-semibold"><span className="text-gold-400">Q:</span> {vq.question}</p>
                    <p className="text-gold-300/90 pl-3"><span className="text-ivory-500">A:</span> {vq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

