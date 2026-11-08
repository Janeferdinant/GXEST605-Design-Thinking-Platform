import React from 'react';
import { Award, BookCheck, ShieldCheck, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-gold-500/20 bg-navy-950/90 text-ivory-300 relative overflow-hidden">
      {/* Subtle top gold accent line */}
      <div className="h-[2px] w-full gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Course Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-xl font-bold gold-gradient-text tracking-wide">
                GXEST605: DESIGN THINKING & PRODUCT DEVELOPMENT
              </span>
            </div>
            <p className="text-xs text-ivory-400 leading-relaxed max-w-md">
              Comprehensive KTU Teaching, Innovation Laboratory, Product Development and Academic Documentation Platform. Fully aligned with the APJ Abdul Kalam Technological University (KTU) 2024 Scheme B.Tech Curriculum.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded bg-burgundy-900/60 border border-gold-500/30 text-gold-300">
                <Award className="w-3.5 h-3.5 text-gold-400" /> KTU S6 B.Tech CSE
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded bg-navy-900 border border-gold-500/30 text-gold-300">
                <BookCheck className="w-3.5 h-3.5 text-gold-400" /> CIE: 40 | ESE: 60 Marks
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded bg-navy-900 border border-gold-500/30 text-gold-300">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" /> 11-Part Audit Compliant
              </span>
            </div>
          </div>

          {/* Column 2: Academic Governance */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest font-cinzel">
              Course Structure
            </h4>
            <ul className="text-xs space-y-1.5 text-ivory-400">
              <li>Module 1: Fundamentals & PDCL</li>
              <li>Module 2: Empathize & Define</li>
              <li>Module 3: Ideate & Proof of Concept</li>
              <li>Module 4: Design, Prototyping & Pilot</li>
              <li>20 Laboratory Practical Experiments</li>
              <li>10 Real-World Case Studies</li>
            </ul>
          </div>

          {/* Column 3: Department Details */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest font-cinzel">
              Faculty & Department
            </h4>
            <div className="text-xs space-y-1.5 text-ivory-300">
              <p className="font-semibold text-ivory-100">Jane Rose</p>
              <p className="text-gold-400/90">Assistant Professor</p>
              <p className="flex items-center gap-1.5 text-ivory-400">
                <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                Department of Computer Science & Engineering
              </p>
              <p className="flex items-center gap-1.5 text-ivory-400">
                <Mail className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                APJ Abdul Kalam Technological University
              </p>
            </div>
          </div>
        </div>

        {/* Primary Mandatory Footer Banner */}
        <div className="pt-8 mt-8 border-t border-gold-500/20 text-center">
          <div className="glass-panel-burgundy inline-block px-8 py-3 rounded-xl border border-gold-500/40 shadow-gold-glow mb-4">
            <p className="text-sm sm:text-base font-bold text-gold-300 font-cinzel tracking-wider">
              Jane Rose | Department of Computer Science & Engineering
            </p>
          </div>
          <p className="text-[11px] text-ivory-400">
            © {new Date().getFullYear()} APJ Abdul Kalam Technological University (KTU). All Academic Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

