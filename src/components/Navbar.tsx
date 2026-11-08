import React from 'react';
import {
    BookOpen,
    FlaskConical,
    Lightbulb,
    Cpu,
    Calculator,
    FileCheck2,
    FolderArchive,
    Home,
    Gauge
} from 'lucide-react';

interface NavbarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'notes', label: 'KTU Notes & Syllabus', icon: BookOpen },
        { id: 'labs', label: '20 Practical Labs', icon: FlaskConical },
        { id: 'casestudies', label: '10 Case Studies', icon: Lightbulb },
        { id: 'numericals', label: 'Solved Numericals', icon: Calculator },
        { id: 'ml', label: 'ML Research Lab', icon: Cpu },
        { id: 'exam', label: 'Solved Question Papers', icon: FileCheck2 },
        { id: 'audit', label: 'Academic Audit (11 Parts)', icon: FolderArchive },
        { id: 'dashboard', label: 'Innovation Dashboard', icon: Gauge },
    ];

    return (
        <header className="sticky top-0 z-50 glass-panel border-b border-gold-500/20 shadow-luxury">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo and Brand */}
                    <div
                        onClick={() => setActiveTab('home')}
                        className="flex items-center gap-3 cursor-pointer group"
                    >
                        <div className="w-12 h-12 rounded-xl burgundy-gradient border border-gold-500/40 flex items-center justify-center shadow-gold-glow group-hover:scale-105 transition-transform">
                            <span className="font-cinzel text-xl font-bold gold-gradient-text">GX</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-burgundy-900/80 border border-gold-500/30 text-gold-400">
                                    KTU 2024 SCHEME
                                </span>
                                <span className="text-xs text-ivory-400">S6 B.Tech CSE</span>
                            </div>
                            <h1 className="text-lg font-bold font-cinzel text-ivory-50 tracking-wider">
                                GXEST605: <span className="gold-gradient-text font-normal">DESIGN THINKING</span>
                            </h1>
                        </div>
                    </div>

                    {/* Navigation Items */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${isActive
                                        ? 'bg-burgundy-800 text-gold-300 border border-gold-500/40 shadow-gold-glow'
                                        : 'text-ivory-300 hover:text-gold-400 hover:bg-navy-900/80'
                                        }`}
                                >
                                    <Icon className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-ivory-400'}`} />
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Academic Badge */}
                    <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-gold-500/20">
                        <div className="text-right">
                            <p className="text-xs font-semibold text-ivory-200">Jane Rose</p>
                            <p className="text-[10px] text-gold-400">Assistant Professor, CSE</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/40 flex items-center justify-center text-xs font-bold text-gold-300">
                            JR
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Scrollable Navigation */}
            <div className="lg:hidden flex overflow-x-auto py-2 px-4 gap-2 border-t border-gold-500/10 bg-navy-950/90 no-scrollbar">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap ${isActive
                                ? 'bg-burgundy-800 text-gold-300 border border-gold-500/40'
                                : 'text-ivory-300 bg-navy-900/60'
                                }`}
                        >
                            <Icon className="w-3.5 h-3.5" />
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </header>
    );
};

