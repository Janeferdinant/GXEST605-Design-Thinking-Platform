import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/home/HomeView';
import { NotesExplorer } from './components/notes/NotesExplorer';
import { ExperimentsViewer } from './components/labs/ExperimentsViewer';
import { CaseStudiesExplorer } from './components/caseStudies/CaseStudiesExplorer';
import { SolvedNumericalsViewer } from './components/calculators/SolvedNumericalsViewer';
import { ResearchLab } from './components/ml/ResearchLab';
import { ModelExamViewer } from './components/exam/ModelExamViewer';
import { AcademicAuditHub } from './components/audit/AcademicAuditHub';
import { InnovationDashboard } from './components/dashboard/InnovationDashboard';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Scroll to top upon tab transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView onNavigate={setActiveTab} />;
      case 'notes':
        return <NotesExplorer />;
      case 'labs':
        return <ExperimentsViewer />;
      case 'casestudies':
        return <CaseStudiesExplorer />;
      case 'numericals':
        return <SolvedNumericalsViewer />;
      case 'ml':
        return <ResearchLab />;
      case 'exam':
        return <ModelExamViewer />;
      case 'audit':
        return <AcademicAuditHub />;
      case 'dashboard':
        return <InnovationDashboard />;
      default:
        return <HomeView onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-ivory-100 flex flex-col font-sans selection:bg-burgundy-800 selection:text-gold-300">
      {/* Sticky Top Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Primary Dynamic Content Region */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {renderActiveView()}
      </main>

      {/* Mandatory Academic Audit Footer */}
      <Footer />
    </div>
  );
};

export default App;

