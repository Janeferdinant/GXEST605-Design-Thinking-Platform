import React, { useState } from 'react';
import { caseStudiesData } from '../../data/caseStudiesData';
import { ProductViewer3D } from './ProductViewer3D';
import { 
  Lightbulb, 
  Layers, 
  Target, 
  Wrench, 
  FileSpreadsheet, 
  Compass, 
  DollarSign, 
  Cpu, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const CaseStudiesExplorer: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(caseStudiesData[0].id);
  const [activeStage, setActiveStage] = useState<string>('overview');

  const selectedCase = caseStudiesData.find(c => c.id === selectedCaseId) || caseStudiesData[0];

  const stages = [
    { id: 'overview', label: '1. Problem & Context' },
    { id: 'empathy', label: '2. Empathize & Define' },
    { id: 'ideate', label: '3. Ideate & Feasibility' },
    { id: 'poc', label: '4. PoC & Testing' },
    { id: 'design', label: '5. Detailed Design & DFM' },
    { id: 'prototype', label: '6. Alpha & Beta Build' },
    { id: 'pilot', label: '7. Pilot Build & Scaling' },
    { id: 'bom', label: '8. BOM & Commercialization' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl border border-gold-500/30 shadow-luxury relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-burgundy-900/40 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-burgundy-900/80 border border-gold-500/40 text-gold-300">
            PART D: REAL-LIFE PRODUCT DEVELOPMENT CASE STUDIES
          </span>
          <h2 className="text-3xl font-bold font-cinzel text-ivory-50 mt-2">
            10 Real-World Product <span className="gold-gradient-text">Innovation Case Studies</span>
          </h2>
          <p className="text-sm text-ivory-300 max-w-3xl mt-2 leading-relaxed">
            Complete end-to-end engineered lifecycles: Societal problem → User research → Empathize → Define → Ideate → Feasibility → PoC → Detailed design → Prototype → Testing → Pilot build → Commercialization.
          </p>
        </div>
      </div>

      {/* Product Selection Shelf */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {caseStudiesData.map((cs) => {
          const isSelected = cs.id === selectedCaseId;
          return (
            <button
              key={cs.id}
              onClick={() => setSelectedCaseId(cs.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between h-28 ${
                isSelected
                  ? 'bg-burgundy-900 text-gold-300 border-gold-500 shadow-gold-glow'
                  : 'glass-card text-ivory-300 hover:border-gold-500/40'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${
                  isSelected ? 'bg-gold-500 text-navy-950' : 'bg-navy-950 text-gold-400'
                }`}>
                  #{cs.number}
                </span>
                <span className="text-[10px] text-gold-400/80 font-medium truncate max-w-[80px]">
                  {cs.category}
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-ivory-100 line-clamp-1">{cs.title.split(':')[0]}</h4>
                <p className="text-[10px] text-ivory-400 mt-0.5 truncate">{cs.category}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Studio Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: 3D Visualization and Core Metadata */}
        <div className="lg:col-span-5 space-y-6">
          <ProductViewer3D 
            productNumber={selectedCase.number}
            productName={selectedCase.title}
          />

          {/* Quick Engineering Summary Card */}
          <div className="glass-panel p-5 rounded-2xl space-y-3 border border-gold-500/20 text-xs">
            <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel">
              Product Overview & Specifications
            </h4>
            <p className="text-ivory-200 leading-relaxed">
              {selectedCase.summary}
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gold-500/10">
              <div className="p-2.5 rounded-xl bg-navy-950/70">
                <span className="text-[10px] text-ivory-400 block">Estimated Unit BOM</span>
                <span className="text-sm font-bold text-gold-300 font-cinzel">{selectedCase.totalEstimatedCost.split(' ')[0]} {selectedCase.totalEstimatedCost.split(' ')[1]}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-navy-950/70">
                <span className="text-[10px] text-ivory-400 block">Target Retail Price</span>
                <span className="text-sm font-bold text-emerald-400 font-cinzel">{selectedCase.commercialization.targetPrice.split(' ')[0]} {selectedCase.commercialization.targetPrice.split(' ')[1]}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] text-ivory-400 block mb-1 font-semibold">Key Industrial Standards:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedCase.detailedDesign.industrialStandards.map((std, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-burgundy-950/60 border border-gold-500/30 text-gold-300 font-medium">
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: 12-Stage Lifecycle Tabs & Deep-Dive Content */}
        <div className="lg:col-span-7 space-y-6">
          {/* Stage Progress Tabs */}
          <div className="glass-panel p-2 rounded-2xl border border-gold-500/20 flex overflow-x-auto gap-1">
            {stages.map((stg) => {
              const isActive = activeStage === stg.id;
              return (
                <button
                  key={stg.id}
                  onClick={() => setActiveStage(stg.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-burgundy-800 text-gold-300 border border-gold-500/40 shadow-gold-glow'
                      : 'text-ivory-400 hover:text-ivory-100 hover:bg-navy-900/60'
                  }`}
                >
                  {stg.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic Stage Content */}
          <div className="glass-panel p-6 rounded-2xl border border-gold-500/20 text-xs space-y-5">
            {/* STAGE 1: Problem & User Research */}
            {activeStage === 'overview' && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-gold-400 uppercase tracking-wider flex items-center gap-2 mb-1.5">
                    <Target className="w-4 h-4 text-gold-500" /> Societal Problem & Context
                  </h4>
                  <p className="text-ivory-200 leading-relaxed bg-navy-950/60 p-3 rounded-xl border border-gold-500/10">
                    {selectedCase.societalProblem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gold-400 uppercase tracking-wider flex items-center gap-2 mb-1.5">
                    <Compass className="w-4 h-4 text-gold-500" /> Contextual User Research Findings
                  </h4>
                  <p className="text-ivory-200 leading-relaxed bg-navy-950/60 p-3 rounded-xl border border-gold-500/10">
                    {selectedCase.userResearch}
                  </p>
                </div>
              </div>
            )}

            {/* STAGE 2: Empathize & Define */}
            {activeStage === 'empathize' && (
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-navy-950/60 border border-gold-500/15">
                  <span className="text-[10px] text-gold-400 font-bold block mb-1">Empathy Insights</span>
                  <p className="text-ivory-200">{selectedCase.empathizePhase.empathyFindings}</p>
                </div>

                <div className="p-3 rounded-xl bg-navy-950/60 border border-gold-500/15">
                  <span className="text-[10px] text-gold-400 font-bold block mb-1">Target Persona Summary</span>
                  <p className="text-ivory-200 font-medium">{selectedCase.empathizePhase.personaSummary}</p>
                </div>

                <div className="p-3 rounded-xl bg-navy-950/60 border border-gold-500/15">
                  <span className="text-[10px] text-gold-400 font-bold block mb-1">Journey Touchpoint Breakdown</span>
                  <p className="text-ivory-200">{selectedCase.empathizePhase.journeyTouchpoint}</p>
                </div>

                <div className="p-4 rounded-xl bg-burgundy-950/50 border border-gold-500/40">
                  <span className="text-xs font-bold text-gold-300 font-cinzel block mb-1">Defined Problem Statement (POV)</span>
                  <p className="text-sm text-ivory-100 font-medium italic">
                    "{selectedCase.definePhase.problemStatement}"
                  </p>
                </div>
              </div>
            )}

            {/* STAGE 3: Ideation & Feasibility */}
            {activeStage === 'ideate' && (
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-gold-400 uppercase tracking-wider mb-2">Divergent Ideation Spectrum:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCase.ideatePhase.divergentIdeas.map((idea, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-navy-950/70 border border-gold-500/10 text-ivory-200 flex items-start gap-2">
                        <span className="text-gold-400">💡</span>
                        <span>{idea}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-navy-950/60 border border-gold-500/15">
                  <span className="text-[10px] text-gold-400 font-bold block mb-1">SCAMPER Application</span>
                  <p className="text-ivory-200">{selectedCase.ideatePhase.scamperApplication}</p>
                </div>

                <div className="p-3 rounded-xl bg-navy-950/60 border border-gold-500/15">
                  <span className="text-[10px] text-gold-400 font-bold block mb-1">Convergent Architecture Selection</span>
                  <p className="text-ivory-200 font-semibold text-emerald-300">{selectedCase.ideatePhase.convergentSelection}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="p-2.5 rounded-lg bg-navy-950/80 border border-gold-500/10">
                    <span className="text-[10px] text-gold-400 block font-semibold">Technical Feasibility</span>
                    <p className="text-ivory-300 text-[11px] mt-0.5">{selectedCase.feasibilityStudy.technical}</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-navy-950/80 border border-gold-500/10">
                    <span className="text-[10px] text-gold-400 block font-semibold">Economic Feasibility</span>
                    <p className="text-ivory-300 text-[11px] mt-0.5">{selectedCase.feasibilityStudy.economic}</p>
                  </div>
                </div>
              </div>
            )}

            {/* STAGE 4: PoC Validation */}
            {activeStage === 'poc' && (
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-navy-950/70 border border-gold-500/20">
                  <span className="text-[10px] text-gold-400 font-bold block mb-1">Proof of Concept Objective</span>
                  <p className="text-sm font-medium text-ivory-100">{selectedCase.proofOfConcept.objectives}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-navy-950/70 border border-gold-500/20">
                  <span className="text-[10px] text-gold-400 font-bold block mb-1.5">Key Identified Engineering Risks</span>
                  <ul className="space-y-1 text-ivory-300">
                    {selectedCase.proofOfConcept.keyRisks.map((risk, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-red-400">⚠️</span>
                        <span>{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                  <span className="text-[10px] text-emerald-400 font-bold block mb-1">PoC Validation Outcome</span>
                  <p className="text-ivory-200">{selectedCase.proofOfConcept.validationResult}</p>
                </div>
              </div>
            )}

            {/* STAGE 5: Detailed Design & DFM */}
            {activeStage === 'design' && (
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-gold-400 uppercase tracking-wider mb-2">
                    Specification Requirement Document (SRD) Parameters:
                  </h5>
                  <div className="space-y-1.5">
                    {selectedCase.detailedDesign.srdSpecs.map((spec, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-navy-950/70 border border-gold-500/10 flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center font-bold text-[9px]">
                          {idx + 1}
                        </span>
                        <span className="text-ivory-200">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-navy-950/70 border border-gold-500/20">
                  <span className="text-[10px] text-gold-400 font-bold block mb-1">Design for Manufacturability (DFM) Focus</span>
                  <p className="text-ivory-200">{selectedCase.detailedDesign.dfmConsiderations}</p>
                </div>
              </div>
            )}

            {/* STAGE 6: Alpha & Beta Prototyping */}
            {activeStage === 'prototype' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-navy-950/70 border border-blue-500/30">
                    <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider block mb-1">
                      Alpha Prototype ('Works-Like')
                    </span>
                    <p className="text-ivory-200 leading-relaxed">{selectedCase.prototyping.alphaPrototype}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-navy-950/70 border border-purple-500/30">
                    <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider block mb-1">
                      Beta Prototype ('Looks & Works Like')
                    </span>
                    <p className="text-ivory-200 leading-relaxed">{selectedCase.prototyping.betaPrototype}</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-navy-950/60 border border-gold-500/15">
                  <span className="text-[10px] text-gold-400 font-bold block mb-1">Prototyping Timeline Control Strategy</span>
                  <p className="text-ivory-200">{selectedCase.prototyping.timelineStrategy}</p>
                </div>
              </div>
            )}

            {/* STAGE 7: Pilot Build & Scaling */}
            {activeStage === 'pilot' && (
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-navy-950/70 border border-gold-500/20">
                  <span className="text-[10px] text-gold-400 font-bold block mb-1">Pilot Build Objectives & Tact Time</span>
                  <p className="text-ivory-200">{selectedCase.pilotBuild.pilotObjectives}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-navy-950/70 border border-gold-500/10">
                    <span className="text-[10px] text-gold-400 font-bold block mb-1">Manufacturing Partner</span>
                    <p className="text-ivory-200 font-medium">{selectedCase.pilotBuild.manufacturingPartner}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-navy-950/70 border border-gold-500/10">
                    <span className="text-[10px] text-gold-400 font-bold block mb-1">Testing Protocols (AOI/ICT)</span>
                    <p className="text-ivory-200">{selectedCase.pilotBuild.testingProcedures}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                  <span className="text-[10px] text-emerald-400 font-bold block mb-1">Volume Scaling Strategy</span>
                  <p className="text-ivory-200">{selectedCase.pilotBuild.scaleStrategy}</p>
                </div>
              </div>
            )}

            {/* STAGE 8: BOM & Commercialization */}
            {activeStage === 'bom' && (
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-gold-400 uppercase tracking-wider mb-2">
                    Engineered Bill of Materials (BOM) Breakdown:
                  </h5>
                  <div className="overflow-x-auto rounded-xl border border-gold-500/20">
                    <table className="w-full text-left">
                      <thead className="bg-navy-950/90 text-[10px] text-gold-400 uppercase border-b border-gold-500/20">
                        <tr>
                          <th className="p-2.5">Component / Item Description</th>
                          <th className="p-2.5 text-center">Qty</th>
                          <th className="p-2.5 text-right">Unit Cost</th>
                          <th className="p-2.5 text-right">Subtotal</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gold-500/10 text-ivory-200 text-xs">
                        {selectedCase.billOfMaterials.map((bom, idx) => (
                          <tr key={idx} className="hover:bg-navy-900/40">
                            <td className="p-2.5 font-medium text-ivory-100">{bom.item}</td>
                            <td className="p-2.5 text-center">{bom.qty}</td>
                            <td className="p-2.5 text-right text-ivory-400">{bom.unitCost}</td>
                            <td className="p-2.5 text-right font-semibold text-gold-300">{bom.subtotal}</td>
                          </tr>
                        ))}
                        <tr className="bg-burgundy-950/50 font-bold text-gold-300 border-t-2 border-gold-500/30">
                          <td colSpan={3} className="p-2.5 font-cinzel">Total Estimated Unit BOM Cost</td>
                          <td className="p-2.5 text-right font-cinzel text-sm">{selectedCase.totalEstimatedCost.split(' ')[0]} {selectedCase.totalEstimatedCost.split(' ')[1]}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-navy-950/70 border border-gold-500/10">
                    <span className="text-[10px] text-gold-400 font-bold block mb-1">Break-Even Point Estimate</span>
                    <p className="text-ivory-200 font-medium">{selectedCase.commercialization.bepEstimate}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-navy-950/70 border border-gold-500/10">
                    <span className="text-[10px] text-gold-400 font-bold block mb-1">Commercial Go-To-Market Plan</span>
                    <p className="text-ivory-200">{selectedCase.commercialization.marketStrategy}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

