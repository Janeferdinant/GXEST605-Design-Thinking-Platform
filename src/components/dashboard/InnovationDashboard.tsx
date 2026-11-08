import React, { useState } from 'react';
import { 
  Award, 
  Lightbulb, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  Download, 
  Filter, 
  Compass, 
  Gauge, 
  Layers, 
  Sparkles, 
  Cpu, 
  Leaf, 
  DollarSign, 
  Users, 
  Wrench, 
  Check, 
  X,
  ChevronRight,
  Clock
} from 'lucide-react';

interface InnovationProject {
  id: string;
  name: string;
  category: string;
  trlLevel: number;
  stageGate: 'Gate 1: Empathy & Ideation' | 'Gate 2: PoC & Feasibility' | 'Gate 3: Alpha Prototype' | 'Gate 4: Beta Validation' | 'Gate 5: Pilot & Scale';
  feasibilityScore: number; // 0-100
  riskScore: 'Low' | 'Medium' | 'High';
  sustainabilityScore: number; // 0-100
  leadStudent: string;
  mentor: string;
  summary: string;
  manufacturingReadiness: number; // 0-100
  status: 'Active' | 'Review' | 'Approved' | 'Pilot Stage';
}

const INITIAL_PROJECTS: InnovationProject[] = [
  {
    id: 'PRJ-2024-001',
    name: 'Smart IoT Bio-Medical Waste Segregator',
    category: 'Healthcare / IoT',
    trlLevel: 7,
    stageGate: 'Gate 4: Beta Validation',
    feasibilityScore: 92,
    riskScore: 'Low',
    sustainabilityScore: 95,
    leadStudent: 'Aditya V. & Team Alpha',
    mentor: 'Jane Rose',
    summary: 'Automated hospital segregation bin utilizing capacitive spectroscopy and near-infrared sensors to prevent needle-stick injuries and cross-contamination.',
    manufacturingReadiness: 85,
    status: 'Approved'
  },
  {
    id: 'PRJ-2024-002',
    name: 'Smart Cane with LiDAR & Tactile Haptic Array',
    category: 'Assistive Tech',
    trlLevel: 6,
    stageGate: 'Gate 3: Alpha Prototype',
    feasibilityScore: 88,
    riskScore: 'Medium',
    sustainabilityScore: 82,
    leadStudent: 'Sneha Mohan & Team Beta',
    mentor: 'Jane Rose',
    summary: 'Navigational cane for visually impaired individuals offering 360-degree head-height and knee-level obstacle detection with emergency buzzer and GPS locator.',
    manufacturingReadiness: 72,
    status: 'Active'
  },
  {
    id: 'PRJ-2024-003',
    name: 'LoRaWAN Precision Drip & NPK Soil Sensor',
    category: 'AgriTech',
    trlLevel: 8,
    stageGate: 'Gate 5: Pilot & Scale',
    feasibilityScore: 94,
    riskScore: 'Low',
    sustainabilityScore: 98,
    leadStudent: 'Rahul K. & Team Gamma',
    mentor: 'Jane Rose',
    summary: 'Solar-powered agricultural node monitoring volumetric soil moisture and NPK ionic conductance with automated valve control, saving 42% irrigation water.',
    manufacturingReadiness: 90,
    status: 'Pilot Stage'
  },
  {
    id: 'PRJ-2024-004',
    name: 'Mycelium Mushroom Composite Packaging',
    category: 'Green Tech',
    trlLevel: 5,
    stageGate: 'Gate 3: Alpha Prototype',
    feasibilityScore: 86,
    riskScore: 'Low',
    sustainabilityScore: 100,
    leadStudent: 'Kavya S. & Team Delta',
    mentor: 'Jane Rose',
    summary: '100% biodegradable packaging material cultivated from agricultural paddy straw and oyster mushroom mycelium replacing expanded polystyrene foam.',
    manufacturingReadiness: 65,
    status: 'Review'
  },
  {
    id: 'PRJ-2024-005',
    name: 'Automated Solar Cold-Storage for Coastal Fishermen',
    category: 'Marine & Food',
    trlLevel: 4,
    stageGate: 'Gate 2: PoC & Feasibility',
    feasibilityScore: 81,
    riskScore: 'Medium',
    sustainabilityScore: 91,
    leadStudent: 'Arjun Das & Team Epsilon',
    mentor: 'Jane Rose',
    summary: 'Peltier and phase-change thermal storage cooler maintaining 2-4°C for artisanal fishing boats without diesel generation or ice-melting losses.',
    manufacturingReadiness: 50,
    status: 'Active'
  }
];

export const InnovationDashboard: React.FC = () => {
  const [projects, setProjects] = useState<InnovationProject[]>(INITIAL_PROJECTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedGate, setSelectedGate] = useState<string>('All');
  const [showNewModal, setShowNewModal] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<InnovationProject>(INITIAL_PROJECTS[0]);

  // Form State
  const [newProject, setNewProject] = useState({
    name: '',
    category: 'Healthcare / IoT',
    trlLevel: 3,
    stageGate: 'Gate 1: Empathy & Ideation' as const,
    feasibilityScore: 85,
    riskScore: 'Low' as const,
    sustainabilityScore: 90,
    leadStudent: '',
    summary: '',
    manufacturingReadiness: 40
  });

  const categories = ['All', 'Healthcare / IoT', 'Assistive Tech', 'AgriTech', 'Green Tech', 'Marine & Food'];
  const gates = [
    'All',
    'Gate 1: Empathy & Ideation',
    'Gate 2: PoC & Feasibility',
    'Gate 3: Alpha Prototype',
    'Gate 4: Beta Validation',
    'Gate 5: Pilot & Scale'
  ];

  const filteredProjects = projects.filter(p => {
    const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchGate = selectedGate === 'All' || p.stageGate === selectedGate;
    return matchCat && matchGate;
  });

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.name || !newProject.leadStudent) return;
    const projectToAdd: InnovationProject = {
      id: `PRJ-2024-00${projects.length + 1}`,
      name: newProject.name,
      category: newProject.category,
      trlLevel: Number(newProject.trlLevel),
      stageGate: newProject.stageGate,
      feasibilityScore: Number(newProject.feasibilityScore),
      riskScore: newProject.riskScore,
      sustainabilityScore: Number(newProject.sustainabilityScore),
      leadStudent: newProject.leadStudent,
      mentor: 'Jane Rose',
      summary: newProject.summary || 'Student innovation project incubated under GXEST605 Design Thinking Course.',
      manufacturingReadiness: Number(newProject.manufacturingReadiness),
      status: 'Active'
    };
    setProjects([projectToAdd, ...projects]);
    setActiveProject(projectToAdd);
    setShowNewModal(false);
    setNewProject({
      name: '',
      category: 'Healthcare / IoT',
      trlLevel: 3,
      stageGate: 'Gate 1: Empathy & Ideation',
      feasibilityScore: 85,
      riskScore: 'Low',
      sustainabilityScore: 90,
      leadStudent: '',
      summary: '',
      manufacturingReadiness: 40
    });
  };

  return (
    <div className="space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Header Banner */}
      <section className="rounded-3xl p-8 bg-gradient-to-r from-burgundy-950 via-navy-950 to-burgundy-900 border border-gold-primary/30 shadow-2xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-primary/20 border border-gold-primary/30 text-gold-secondary text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
              <span>KTU GXEST605 Innovation Incubation & Product Pipeline</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
              Product Innovation & Stage-Gate Dashboard
            </h1>
            <p className="text-sm sm:text-base text-neutral-300">
              Real-time portfolio management of student engineering ventures from societal empathy mapping to pilot manufacturing and commercial deployment.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowNewModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gold-gradient text-burgundy-950 font-bold hover:shadow-lg transition-all text-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Submit New Innovation</span>
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Export Portfolio</span>
            </button>
          </div>
        </div>

        {/* Aggregate KPI Counter Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
          <div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Active Incubations</div>
            <div className="text-2xl font-bold font-serif text-gold-secondary">{projects.length} Projects</div>
            <div className="text-[11px] text-neutral-400">TRL Range: 4 – 8</div>
          </div>
          <div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Stage-Gate Velocity</div>
            <div className="text-2xl font-bold font-serif text-gold-secondary">100%</div>
            <div className="text-[11px] text-neutral-400">All 5 Gates Active</div>
          </div>
          <div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Mean Feasibility</div>
            <div className="text-2xl font-bold font-serif text-gold-secondary">
              {(projects.reduce((acc, p) => acc + p.feasibilityScore, 0) / projects.length).toFixed(1)}%
            </div>
            <div className="text-[11px] text-neutral-400">Technical & Economic</div>
          </div>
          <div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Sustainability Index</div>
            <div className="text-2xl font-bold font-serif text-gold-secondary">
              {(projects.reduce((acc, p) => acc + p.sustainabilityScore, 0) / projects.length).toFixed(1)}/100
            </div>
            <div className="text-[11px] text-neutral-400">Circular Design Aligned</div>
          </div>
        </div>
      </section>

      {/* Main Grid: Pipeline Filters & Project Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Projects Repository & Filter */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white dark:bg-navy-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-base text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <Filter className="w-4 h-4 text-gold-accent" />
                <span>Filter Projects</span>
              </h3>
              <span className="text-xs text-neutral-500 font-mono">{filteredProjects.length} found</span>
            </div>

            {/* Category Select */}
            <div>
              <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1 block">Domain Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-navy-950 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-gold-primary"
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Stage Gate Select */}
            <div>
              <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1 block">Stage-Gate Phase</label>
              <select
                value={selectedGate}
                onChange={(e) => setSelectedGate(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-navy-950 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-gold-primary"
              >
                {gates.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
          </div>

          {/* Project List Cards */}
          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
            {filteredProjects.map((p) => {
              const isSelected = activeProject.id === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setActiveProject(p)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-burgundy-950/10 dark:bg-burgundy-950/40 border-gold-primary/60 shadow-md ring-1 ring-gold-primary/30'
                      : 'bg-white dark:bg-navy-900 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      {p.id}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      p.status === 'Approved' ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' :
                      p.status === 'Pilot Stage' ? 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300' :
                      'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                    }`}>
                      {p.status}
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-sm text-neutral-900 dark:text-neutral-100 mt-2 line-clamp-1">
                    {p.name}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2">
                    {p.summary}
                  </p>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-100 dark:border-neutral-800 text-[11px]">
                    <span className="font-mono text-gold-accent dark:text-gold-secondary font-bold">
                      TRL {p.trlLevel}/9
                    </span>
                    <span className="text-neutral-500 truncate max-w-[140px]">
                      {p.leadStudent}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Columns: Active Project Deep Dive & Stage-Gate Audit */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Project Inspection Card */}
          <div className="bg-white dark:bg-navy-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-burgundy-900 text-gold-secondary">
                    {activeProject.id}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gold-primary/20 text-gold-accent dark:text-gold-secondary border border-gold-primary/40">
                    {activeProject.category}
                  </span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mt-2">
                  {activeProject.name}
                </h2>
              </div>
              <div className="text-right">
                <div className="text-xs text-neutral-500">Lead Investigator</div>
                <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200">{activeProject.leadStudent}</div>
                <div className="text-xs text-gold-accent dark:text-gold-secondary">Mentor: {activeProject.mentor}</div>
              </div>
            </div>

            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed bg-neutral-50 dark:bg-navy-950 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
              {activeProject.summary}
            </p>

            {/* Stage-Gate Visual Progress Tracker */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-burgundy-800 dark:text-gold-secondary" />
                  <span>Stage-Gate Pipeline Status</span>
                </span>
                <span className="text-xs font-semibold font-mono text-gold-accent dark:text-gold-secondary">
                  {activeProject.stageGate}
                </span>
              </div>

              {/* Step indicator bar */}
              <div className="grid grid-cols-5 gap-2 pt-1">
                {[
                  { gate: 'Gate 1', label: 'Empathy & Ideate', level: 1 },
                  { gate: 'Gate 2', label: 'PoC & Feasibility', level: 2 },
                  { gate: 'Gate 3', label: 'Alpha Prototype', level: 3 },
                  { gate: 'Gate 4', label: 'Beta Validation', level: 4 },
                  { gate: 'Gate 5', label: 'Pilot & Scale', level: 5 }
                ].map((st) => {
                  const currentGateIndex = [
                    'Gate 1: Empathy & Ideation',
                    'Gate 2: PoC & Feasibility',
                    'Gate 3: Alpha Prototype',
                    'Gate 4: Beta Validation',
                    'Gate 5: Pilot & Scale'
                  ].indexOf(activeProject.stageGate) + 1;

                  const isPassed = st.level <= currentGateIndex;
                  const isCurrent = st.level === currentGateIndex;

                  return (
                    <div 
                      key={st.gate} 
                      className={`p-2.5 rounded-lg border text-center transition-all ${
                        isPassed 
                          ? 'bg-burgundy-900 text-gold-secondary border-gold-primary/50 shadow-sm' 
                          : 'bg-neutral-100 dark:bg-navy-950 text-neutral-400 border-neutral-200 dark:border-neutral-800'
                      }`}
                    >
                      <div className="text-[10px] font-bold uppercase">{st.gate}</div>
                      <div className="text-[10px] font-medium truncate mt-0.5">{st.label}</div>
                      <div className="mt-1.5 flex justify-center">
                        {isPassed ? (
                          <Check className="w-3.5 h-3.5 text-gold-accent" />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 mt-1" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Metrics Radar Gauges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {/* TRL Gauge */}
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-navy-950/40 text-center space-y-1">
                <Gauge className="w-5 h-5 mx-auto text-gold-accent" />
                <div className="text-xs text-neutral-500 font-semibold uppercase">TRL Level</div>
                <div className="text-2xl font-bold font-serif text-burgundy-900 dark:text-gold-secondary">
                  TRL {activeProject.trlLevel}
                </div>
                <div className="text-[10px] text-neutral-400">Out of 9 NASA TRLs</div>
              </div>

              {/* Feasibility Gauge */}
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-navy-950/40 text-center space-y-1">
                <TrendingUp className="w-5 h-5 mx-auto text-emerald-600 dark:text-emerald-400" />
                <div className="text-xs text-neutral-500 font-semibold uppercase">Feasibility</div>
                <div className="text-2xl font-bold font-serif text-emerald-600 dark:text-emerald-400">
                  {activeProject.feasibilityScore}%
                </div>
                <div className="text-[10px] text-neutral-400">Multi-criteria Pugh</div>
              </div>

              {/* Sustainability Gauge */}
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-navy-950/40 text-center space-y-1">
                <Leaf className="w-5 h-5 mx-auto text-teal-600 dark:text-teal-400" />
                <div className="text-xs text-neutral-500 font-semibold uppercase">Sustainability</div>
                <div className="text-2xl font-bold font-serif text-teal-600 dark:text-teal-400">
                  {activeProject.sustainabilityScore}/100
                </div>
                <div className="text-[10px] text-neutral-400">Eco, Social & Econ</div>
              </div>

              {/* Manufacturing Readiness Gauge */}
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-navy-950/40 text-center space-y-1">
                <Wrench className="w-5 h-5 mx-auto text-indigo-600 dark:text-indigo-400" />
                <div className="text-xs text-neutral-500 font-semibold uppercase">DFM Readiness</div>
                <div className="text-2xl font-bold font-serif text-indigo-600 dark:text-indigo-400">
                  {activeProject.manufacturingReadiness}%
                </div>
                <div className="text-[10px] text-neutral-400">BOM & Tooling ready</div>
              </div>
            </div>

            {/* Manufacturing & Commercialization Readiness Checklist */}
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 bg-neutral-50/60 dark:bg-navy-950/50 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-accent" />
                <span>Manufacturing & Pilot Build Gate Review</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Specification Requirement Document (SRD) Frozen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Design Failure Mode & Effects Analysis (DFMEA &lt; 100 RPN)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Pre-compliance EMC & Safety Standards Inspected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Bill of Materials (BOM) & Target Unit Cost Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Manufacturing Partner & Tooling Quote Validated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Intellectual Property & Patent Prior-Art Clearance Conducted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Project Submission Modal */}
      {showNewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-navy-900 border border-gold-primary/40 rounded-2xl max-w-xl w-full p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-gold-accent" />
                <h3 className="font-serif font-bold text-lg text-neutral-900 dark:text-neutral-100">
                  Submit New Innovation Project
                </h3>
              </div>
              <button 
                onClick={() => setShowNewModal(false)}
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                  Product / Venture Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Autonomous Quadcopter for Precision Pollination"
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-navy-950 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-gold-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                    Domain Category
                  </label>
                  <select
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-navy-950 text-neutral-900 dark:text-neutral-100 focus:outline-none"
                  >
                    {categories.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                    Lead Student & Team
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Harikrishnan & Team"
                    value={newProject.leadStudent}
                    onChange={(e) => setNewProject({ ...newProject, leadStudent: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-navy-950 text-neutral-900 dark:text-neutral-100 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                    TRL Level (1-9)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="9"
                    value={newProject.trlLevel}
                    onChange={(e) => setNewProject({ ...newProject, trlLevel: Number(e.target.value) })}
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-navy-950 text-neutral-900 dark:text-neutral-100 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                    Feasibility (0-100)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={newProject.feasibilityScore}
                    onChange={(e) => setNewProject({ ...newProject, feasibilityScore: Number(e.target.value) })}
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-navy-950 text-neutral-900 dark:text-neutral-100 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                    Sustainability (0-100)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={newProject.sustainabilityScore}
                    onChange={(e) => setNewProject({ ...newProject, sustainabilityScore: Number(e.target.value) })}
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-navy-950 text-neutral-900 dark:text-neutral-100 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                  Problem & Value Proposition Summary
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the societal problem, target user persona, and innovative technical solution..."
                  value={newProject.summary}
                  onChange={(e) => setNewProject({ ...newProject, summary: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-navy-950 text-neutral-900 dark:text-neutral-100 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewModal(false)}
                  className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-gold-gradient text-burgundy-950 text-xs font-bold hover:shadow-lg transition-all"
                >
                  Register Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

