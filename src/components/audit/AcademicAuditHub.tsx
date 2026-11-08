import React, { useState } from 'react';
import { academicAuditSections } from '../../data/academicAuditData';
import { 
  FolderArchive, 
  Download, 
  Printer, 
  FileCheck2, 
  ShieldCheck, 
  Award, 
  FileSpreadsheet, 
  BookOpen, 
  Layers,
  Search,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const AcademicAuditHub: React.FC = () => {
  const [selectedSectionSl, setSelectedSectionSl] = useState<number>(1);
  const [isExportingExcel, setIsExportingExcel] = useState(false);

  const currentSection = academicAuditSections.find(s => s.slNo === selectedSectionSl) || academicAuditSections[0];

  const handleDownloadExcel = async () => {
    setIsExportingExcel(true);
    try {
      // Direct browser download of pre-generated Excel file
      const link = document.createElement('a');
      link.href = '/GXEST605_Internal_Marks_Audit.xlsx';
      link.setAttribute('download', 'GXEST605_Internal_Marks_Audit.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error(e);
    } finally {
      setIsExportingExcel(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl border border-gold-500/30 shadow-luxury relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-burgundy-900/40 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-burgundy-900/80 border border-gold-500/40 text-gold-300">
              PART H: MANDATORY ACADEMIC AUDIT DOCUMENTATION
            </span>
            <h2 className="text-3xl font-bold font-cinzel text-ivory-50 mt-2">
              KTU Lab Index & <span className="gold-gradient-text">Academic Course File</span>
            </h2>
            <p className="text-sm text-ivory-300 max-w-2xl mt-2 leading-relaxed">
              Official 11-section KTU Course File strictly adhering to the mandatory sequence in <code>Index Course file LAB.docx</code>. Ready for Internal and External University Academic Audits.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleDownloadExcel}
              disabled={isExportingExcel}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-lg"
            >
              <FileSpreadsheet className="w-4 h-4" />
              {isExportingExcel ? 'Generating...' : 'Download CIE Excel (.xlsx)'}
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold burgundy-gradient border border-gold-500/40 text-gold-300 shadow-gold-glow hover:brightness-110"
            >
              <Printer className="w-4 h-4" /> Print Course File
            </button>
          </div>
        </div>
      </div>

      {/* 11 Mandatory Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: 11 Mandatory Sections Table of Contents */}
        <div className="lg:col-span-4 space-y-4">
          <div className="glass-panel p-4 rounded-2xl border border-gold-500/20">
            <div className="flex items-center justify-between pb-3 border-b border-gold-500/15 mb-2 px-1">
              <span className="text-xs font-bold text-gold-400 font-cinzel uppercase tracking-wider">
                11 Mandatory Index Sections
              </span>
              <span className="text-[10px] text-ivory-400">Exact LAB.docx order</span>
            </div>

            <div className="space-y-1.5 max-h-[640px] overflow-y-auto pr-1">
              {academicAuditSections.map((sec) => {
                const isSelected = sec.slNo === selectedSectionSl;
                return (
                  <button
                    key={sec.slNo}
                    onClick={() => setSelectedSectionSl(sec.slNo)}
                    className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-start gap-3 ${
                      isSelected
                        ? 'bg-burgundy-900/90 text-gold-300 border-gold-500 shadow-gold-glow'
                        : 'glass-card text-ivory-300 hover:border-gold-500/40'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-[11px] shrink-0 ${
                      isSelected ? 'bg-gold-500 text-navy-950' : 'bg-navy-900 text-gold-400'
                    }`}>
                      {sec.slNo}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-ivory-100 line-clamp-1">{sec.title}</p>
                      <span className="text-[10px] text-gold-400 font-medium block mt-0.5">{sec.pageRef}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Section Detailed Viewport */}
        <div className="lg:col-span-8 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gold-500/20 space-y-6 text-xs text-ivory-200">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gold-500/20">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-gold-500 text-navy-950">
                    SECTION {currentSection.slNo} OF 11
                  </span>
                  <span className="text-xs text-gold-400 font-medium">
                    {currentSection.pageRef}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-cinzel text-ivory-50 mt-1">
                  {currentSection.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 flex items-center gap-1 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Audit Ready
                </span>
              </div>
            </div>

            {/* Summary Banner */}
            <div className="p-3.5 rounded-xl bg-navy-900/60 border border-gold-500/15">
              <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider block mb-1">
                Section Summary & Purpose:
              </span>
              <p className="text-ivory-200 leading-relaxed text-xs">
                {currentSection.summary}
              </p>
            </div>

            {/* Section Formatted Content */}
            <div className="prose prose-invert max-w-none text-xs leading-relaxed space-y-4">
              <div 
                className="whitespace-pre-line font-sans text-ivory-200"
                dangerouslySetInnerHTML={{ __html: currentSection.contentHtmlOrMarkdown
                  .replace(/### (.*?)\n/g, '<h3 class="text-base font-bold text-gold-300 font-cinzel mt-4 mb-2">$1</h3>')
                  .replace(/#### (.*?)\n/g, '<h4 class="text-xs font-bold text-gold-400 uppercase tracking-wider mt-3 mb-1.5">$1</h4>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-ivory-50 font-bold">$1</strong>')
                  .replace(/\| (.*?) \|/g, (match) => `<span class="font-mono text-[11px]">${match}</span>`)
                }}
              />
            </div>

            {/* If Section 8, show embedded live Excel preview */}
            {currentSection.slNo === 8 && (
              <div className="pt-4 border-t border-gold-500/20 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                    Continuous Internal Evaluation (CIE) Live Formula Preview
                  </h4>
                  <button
                    onClick={handleDownloadExcel}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-emerald-600 text-white font-medium hover:bg-emerald-500"
                  >
                    <Download className="w-3.5 h-3.5" /> Download .XLSX
                  </button>
                </div>
                <div className="p-3 rounded-xl bg-navy-950 border border-gold-500/10 font-mono text-[11px] text-gold-300">
                  Total CIE Formula: =SUM(D{'{row}'}:G{'{row}'}) | Max Marks: 40 (Att: 5 + Ass: 20 + Exam: 10 + Refl: 5)
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

