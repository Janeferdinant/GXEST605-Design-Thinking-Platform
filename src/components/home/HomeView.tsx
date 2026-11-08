import React from 'react';
import { 
  BookOpen, 
  Compass, 
  Cpu, 
  Calculator, 
  FileCheck, 
  Award, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  BarChart3, 
  GraduationCap, 
  CheckCircle2, 
  ShieldCheck, 
  Target,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { 
  courseMetadata,
  courseOutcomes, 
  coPoMappingTable, 
  officialTextbooks, 
  syllabusModules 
} from '../../data/syllabusData';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden shadow-2xl border border-gold-primary/30 bg-gradient-to-br from-burgundy-900 via-navy-950 to-burgundy-950 p-8 sm:p-12 text-white">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-gold-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-burgundy-600/20 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-primary/20 border border-gold-primary/40 text-gold-secondary text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <Sparkles className="w-4 h-4 text-gold-accent" />
            <span>APJ Abdul Kalam Technological University • S6 B.Tech Curriculum</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3 text-gold-secondary/90 font-mono text-sm sm:text-base">
              <span className="font-bold tracking-wider px-2 py-0.5 rounded bg-black/40 border border-gold-primary/30">GXEST605</span>
              <span>• 3 Credits • Category: Engineering Science Course</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              Design Thinking & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-secondary via-gold-accent to-gold-primary">Product Development</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 font-light max-w-3xl leading-relaxed">
              Official KTU Teaching, Innovation Laboratory, Real-World Product Engineering, Solved Examination Papers and Academic Audit Management System.
            </p>
          </div>

          {/* Quick Access Action Badges */}
          <div className="flex flex-wrap gap-3 pt-4">
            <button
              onClick={() => onNavigate('notes')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold-gradient text-burgundy-950 font-bold hover:shadow-lg hover:shadow-gold-primary/30 transition-all transform hover:-translate-y-0.5 text-sm"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Notes & Syllabus</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('labs')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-semibold transition-all text-sm"
            >
              <Compass className="w-4 h-4 text-gold-secondary" />
              <span>20 Practical Experiments</span>
            </button>
            <button
              onClick={() => onNavigate('audit')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-burgundy-800/80 hover:bg-burgundy-700 border border-gold-primary/30 text-gold-secondary font-semibold transition-all text-sm"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Audit Course File (11 Parts)</span>
            </button>
          </div>

          {/* Course Metadata Pill Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15">
            <div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Continuous Internal (CIE)</div>
              <div className="text-2xl font-bold font-serif text-gold-secondary">40 Marks</div>
              <div className="text-[11px] text-neutral-400">Min. eligibility: 18/40</div>
            </div>
            <div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">End Semester Exam (ESE)</div>
              <div className="text-2xl font-bold font-serif text-gold-secondary">60 Marks</div>
              <div className="text-[11px] text-neutral-400">Duration: 2.5 Hours</div>
            </div>
            <div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Syllabus Scope</div>
              <div className="text-2xl font-bold font-serif text-gold-secondary">4 Modules</div>
              <div className="text-[11px] text-neutral-400">88 Exact Subtopics</div>
            </div>
            <div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Course In-Charge</div>
              <div className="text-sm font-bold text-white mt-1">Jane Rose</div>
              <div className="text-[11px] text-gold-secondary/80">Dept. of Computer Science & Engg.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Navigation Cards Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100">
              Integrated Innovation & Academic Modules
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Complete KTU engineering suite covering all pedagogical, experimental, and audit requirements
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: KTU Notes */}
          <div 
            onClick={() => onNavigate('notes')}
            className="group p-6 rounded-2xl bg-white dark:bg-navy-900 border border-neutral-200 dark:border-neutral-800 hover:border-gold-primary/50 shadow-sm hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-burgundy-900/10 dark:bg-burgundy-900/40 text-burgundy-800 dark:text-gold-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-burgundy-800 dark:group-hover:text-gold-secondary transition-colors">
              KTU Notes & Syllabus
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-3">
              Modules 1 to 4 with all 88 topics, ASCII architectural diagrams, 3-mark & 9-mark answers, and viva bank.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-burgundy-800 dark:text-gold-secondary group-hover:translate-x-1 transition-transform">
              <span>Read Notes</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 2: Practical Experiments */}
          <div 
            onClick={() => onNavigate('labs')}
            className="group p-6 rounded-2xl bg-white dark:bg-navy-900 border border-neutral-200 dark:border-neutral-800 hover:border-gold-primary/50 shadow-sm hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-primary/10 text-gold-accent dark:text-gold-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-burgundy-800 dark:group-hover:text-gold-secondary transition-colors">
              20 Practical Experiments
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-3">
              Empathy mapping, 5 Whys, SCAMPER, Decision Matrix, DFMEA with 300+ viva questions (15/lab).
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-burgundy-800 dark:text-gold-secondary group-hover:translate-x-1 transition-transform">
              <span>Open Simulators</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 3: 3D Product Case Studies */}
          <div 
            onClick={() => onNavigate('casestudies')}
            className="group p-6 rounded-2xl bg-white dark:bg-navy-900 border border-neutral-200 dark:border-neutral-800 hover:border-gold-primary/50 shadow-sm hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-burgundy-800 dark:group-hover:text-gold-secondary transition-colors">
              10 Product Case Studies
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-3">
              Full 12-stage engineering lifecycle from societal need to pilot build with interactive 3D WebGL models and BOM.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-burgundy-800 dark:text-gold-secondary group-hover:translate-x-1 transition-transform">
              <span>View 3D Products</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 4: Solved Numericals */}
          <div 
            onClick={() => onNavigate('numericals')}
            className="group p-6 rounded-2xl bg-white dark:bg-navy-900 border border-neutral-200 dark:border-neutral-800 hover:border-gold-primary/50 shadow-sm hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Calculator className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-burgundy-800 dark:group-hover:text-gold-secondary transition-colors">
              15 Solved Numericals
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-3">
              Break-Even, RPN, TRL, Cost-Benefit, Scaling, Unit Cost with step-by-step math and interactive calculators.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-burgundy-800 dark:text-gold-secondary group-hover:translate-x-1 transition-transform">
              <span>Run Calculations</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 5: ML Research Lab */}
          <div 
            onClick={() => onNavigate('ml')}
            className="group p-6 rounded-2xl bg-white dark:bg-navy-900 border border-neutral-200 dark:border-neutral-800 hover:border-gold-primary/50 shadow-sm hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-burgundy-800 dark:group-hover:text-gold-secondary transition-colors">
              ML & Research Lab
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-3">
              6 Scikit-learn pipelines: Sentiment analysis, K-Means clustering, Cosine recommender, Defect classifier, Demand prediction.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-burgundy-800 dark:text-gold-secondary group-hover:translate-x-1 transition-transform">
              <span>Run Models</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 6: Model Exam Paper */}
          <div 
            onClick={() => onNavigate('exam')}
            className="group p-6 rounded-2xl bg-white dark:bg-navy-900 border border-neutral-200 dark:border-neutral-800 hover:border-gold-primary/50 shadow-sm hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-burgundy-800 dark:group-hover:text-gold-secondary transition-colors">
              KTU Model Exam (60M)
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-3">
              Full End-Semester exam: Part A (8×3 = 24M) and Part B (4×9 = 36M) with solutions and faculty evaluation rubrics.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-burgundy-800 dark:text-gold-secondary group-hover:translate-x-1 transition-transform">
              <span>Practice Exam</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 7: Academic Audit Hub */}
          <div 
            onClick={() => onNavigate('audit')}
            className="group p-6 rounded-2xl bg-white dark:bg-navy-900 border border-neutral-200 dark:border-neutral-800 hover:border-gold-primary/50 shadow-sm hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-burgundy-900/10 dark:bg-burgundy-900/40 text-burgundy-800 dark:text-gold-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-burgundy-800 dark:group-hover:text-gold-secondary transition-colors">
              Academic Audit (11 Parts)
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-3">
              Matches Index Course file LAB.docx: Scheme of eval, internal questions, sample student record, and live Excel generator.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-burgundy-800 dark:text-gold-secondary group-hover:translate-x-1 transition-transform">
              <span>View Audit File</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 8: Innovation Dashboard */}
          <div 
            onClick={() => onNavigate('dashboard')}
            className="group p-6 rounded-2xl bg-white dark:bg-navy-900 border border-neutral-200 dark:border-neutral-800 hover:border-gold-primary/50 shadow-sm hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-primary/10 text-gold-accent dark:text-gold-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-burgundy-800 dark:group-hover:text-gold-secondary transition-colors">
              Innovation Dashboard
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-3">
              Stage-Gate tracker, Idea Repository, TRL progression gauges, and real-time student batch statistics.
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-burgundy-800 dark:text-gold-secondary group-hover:translate-x-1 transition-transform">
              <span>Open Dashboard</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Course Outcomes & Bloom's Taxonomy Matrix */}
      <section className="bg-white dark:bg-navy-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <div>
            <div className="text-xs font-bold text-gold-accent dark:text-gold-secondary uppercase tracking-wider">Academic Quality Standard</div>
            <h2 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100">
              Course Outcomes (COs) & Bloom's Taxonomy Levels
            </h2>
          </div>
          <span className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono">
            KTU Regulation 2024 / GXEST605
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courseOutcomes.map((co) => (
            <div key={co.coNumber} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-navy-950/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-burgundy-900 text-gold-secondary">
                  {co.coNumber}
                </span>
                <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 px-2 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800">
                  {co.bloomsLevel}
                </span>
              </div>
              <p className="text-sm text-neutral-800 dark:text-neutral-200 font-medium leading-snug">
                {co.statement}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Official Syllabus 4-Module Structure */}
      <section className="bg-white dark:bg-navy-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <div className="text-xs font-bold text-gold-accent dark:text-gold-secondary uppercase tracking-wider">Curricular Sequence</div>
          <h2 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100">
            Four-Module Comprehensive Syllabus (88 Topics)
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Strictly ordered as prescribed by APJ Abdul Kalam Technological University
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {syllabusModules.map((mod) => (
            <div key={mod.moduleNumber} className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-navy-950/50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-burgundy-800 dark:text-gold-secondary">
                  Module {mod.moduleNumber}
                </span>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {mod.topics.length} Subtopics
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-neutral-900 dark:text-neutral-100">
                {mod.title}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {mod.description}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('notes')}
                  className="text-xs font-semibold text-burgundy-800 dark:text-gold-secondary inline-flex items-center gap-1 hover:underline"
                >
                  <span>Explore Module {mod.moduleNumber} Topics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prescribed Textbooks & Reference Literature */}
      <section className="bg-white dark:bg-navy-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <div className="text-xs font-bold text-gold-accent dark:text-gold-secondary uppercase tracking-wider">Academic Bibliography</div>
          <h2 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100">
            Prescribed Textbooks & Authoritative References
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {officialTextbooks.map((tb, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-navy-950/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  Reference {idx + 1}
                </span>
                <h4 className="font-serif font-bold text-sm text-neutral-900 dark:text-neutral-100 mt-2">
                  {tb.title}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                  By {tb.authors}
                </p>
              </div>
              <div className="text-[11px] text-neutral-500 font-mono mt-3 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                {tb.publisher} ({tb.year})
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CIE & ESE Examination Schema Information Card */}
      <section className="rounded-2xl border border-gold-primary/30 bg-gradient-to-r from-burgundy-950 via-navy-950 to-burgundy-950 p-6 sm:p-8 text-white space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-serif font-bold text-gold-secondary">
              KTU Assessment & Evaluation Blueprint
            </h3>
            <p className="text-xs text-neutral-300 mt-1">
              Strictly configured to the official 40-mark CIE and 60-mark ESE scheme
            </p>
          </div>
          <button
            onClick={() => onNavigate('exam')}
            className="px-4 py-2 rounded-xl bg-gold-gradient text-burgundy-950 text-xs font-bold hover:shadow-lg transition-all"
          >
            Review Model Exam Paper
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* CIE Box */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-bold text-sm text-gold-secondary">Continuous Internal Evaluation (CIE)</span>
              <span className="font-mono text-sm font-bold">40 Marks</span>
            </div>
            <ul className="text-xs space-y-2 text-neutral-300">
              <li className="flex justify-between items-center">
                <span>• Continuous Attendance</span>
                <span className="font-mono text-gold-accent">5 Marks</span>
              </li>
              <li className="flex justify-between items-center">
                <span>• Course Assignments / Case Study Analysis</span>
                <span className="font-mono text-gold-accent">20 Marks</span>
              </li>
              <li className="flex justify-between items-center">
                <span>• Internal Examination (Practical / Written)</span>
                <span className="font-mono text-gold-accent">10 Marks</span>
              </li>
              <li className="flex justify-between items-center">
                <span>• Reflective Journal & Design Portfolio</span>
                <span className="font-mono text-gold-accent">5 Marks</span>
              </li>
            </ul>
            <div className="text-[11px] text-neutral-400 italic pt-1">
              * Minimum eligibility required for appearing in End Semester Examination: 18 / 40.
            </div>
          </div>

          {/* ESE Box */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-bold text-sm text-gold-secondary">End Semester Examination (ESE)</span>
              <span className="font-mono text-sm font-bold">60 Marks</span>
            </div>
            <ul className="text-xs space-y-2 text-neutral-300">
              <li className="flex justify-between items-center">
                <span>• Part A: 8 Compulsory Questions (2 per module)</span>
                <span className="font-mono text-gold-accent">8 × 3 = 24 Marks</span>
              </li>
              <li className="flex justify-between items-center">
                <span>• Part B: 4 Questions to answer (1 per module, choice of 2)</span>
                <span className="font-mono text-gold-accent">4 × 9 = 36 Marks</span>
              </li>
              <li className="flex justify-between items-center">
                <span>• Examination Duration</span>
                <span className="font-mono text-gold-accent">2.5 Hours (150 mins)</span>
              </li>
              <li className="flex justify-between items-center">
                <span>• Total Examination Marks</span>
                <span className="font-mono text-gold-accent">100 Marks (40 + 60)</span>
              </li>
            </ul>
            <div className="text-[11px] text-neutral-400 italic pt-1">
              * Comprehensive coverage of all 4 modules with numerical problems, case studies, and engineering diagrams.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
