import React, { useState } from 'react';
import { Lightbulb, Sparkles, Plus, Trash2, CheckCircle } from 'lucide-react';

interface ScamperPrompt {
  letter: string;
  word: string;
  prompt: string;
  example: string;
  ideas: string[];
}

const initialScamper: ScamperPrompt[] = [
  {
    letter: 'S',
    word: 'Substitute',
    prompt: 'What materials, components, power sources, or steps can be swapped out?',
    example: 'Substitute heavy steel frame with recycled aluminum / bamboo composite.',
    ideas: [
      'Substitute lead-acid battery with high-cycle LiFePO4 cells',
      'Substitute mechanical micro-switches with solid-state capacitive touch sensors'
    ]
  },
  {
    letter: 'C',
    word: 'Combine',
    prompt: 'What separate functions, technologies, or services can be fused together?',
    example: 'Combine smart helmet lock with integrated wireless charging and breathalyzer.',
    ideas: [
      'Combine USB-C charging port with data flashing port to save waterproof seals',
      'Combine LED battery status indicator into the main power toggle ring'
    ]
  },
  {
    letter: 'A',
    word: 'Adapt',
    prompt: 'What concepts can be adapted from nature (biomimicry) or other industries?',
    example: 'Adapt regenerative braking energy capture from electric trains.',
    ideas: [
      'Adapt water-shedding lotus leaf nanocoating for optical camera glass',
      'Adapt vibration dampening rubber mounts from drone gimbals'
    ]
  },
  {
    letter: 'M',
    word: 'Modify / Magnify',
    prompt: 'What can be enlarged, strengthened, scaled up, or given greater emphasis?',
    example: 'Magnify digital instrument cluster to a heads-up windshield projection.',
    ideas: [
      'Magnify emergency stop button size by 200% for blind panic operation',
      'Modify firmware sleep cycles to poll sensors every 5 mins instead of 10s'
    ]
  },
  {
    letter: 'P',
    word: 'Put to another use',
    prompt: 'How can the product or byproducts be repurposed for an entirely new context?',
    example: 'Use the parked EV battery as an emergency home power bank (V2H) during floods.',
    ideas: [
      'Repurpose decommissioned batteries as stationary solar street-light storage',
      'Use ultrasonic water meter acoustic signals to detect micro-leaks in city pipes'
    ]
  },
  {
    letter: 'E',
    word: 'Eliminate',
    prompt: 'What parts, steps, buttons, or complexity can be stripped away completely?',
    example: 'Eliminate physical ignition keys; unlock entirely via smartphone BLE proximity.',
    ideas: [
      'Eliminate physical paper manual; emboss laser QR code directly on plastic body',
      'Eliminate internal cooling fan by engineering convective aluminum chimney heatsinks'
    ]
  },
  {
    letter: 'R',
    word: 'Reverse / Rearrange',
    prompt: 'What order, layout, orientation, or sequence can be reversed or inverted?',
    example: 'Rearrange battery pack to be swappable from the side rather than fixed under the seat.',
    ideas: [
      'Reverse assembly order so fragile sensors are installed last after high-heat soldering',
      'Rearrange user interface so critical emergency telemetry is always front-and-center'
    ]
  }
];

export const ScamperLab: React.FC = () => {
  const [prompts, setPrompts] = useState<ScamperPrompt[]>(initialScamper);
  const [activeLetter, setActiveLetter] = useState('S');
  const [newIdeaText, setNewIdeaText] = useState('');

  const currentPrompt = prompts.find(p => p.letter === activeLetter) || prompts[0];

  const addIdea = () => {
    if (!newIdeaText.trim()) return;
    setPrompts(prompts.map(p => {
      if (p.letter === activeLetter) {
        return { ...p, ideas: [...p.ideas, newIdeaText.trim()] };
      }
      return p;
    }));
    setNewIdeaText('');
  };

  const removeIdea = (letter: string, index: number) => {
    setPrompts(prompts.map(p => {
      if (p.letter === letter) {
        const updated = [...p.ideas];
        updated.splice(index, 1);
        return { ...p, ideas: updated };
      }
      return p;
    }));
  };

  const totalIdeas = prompts.reduce((acc, p) => acc + p.ideas.length, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-burgundy-900/60 border border-gold-500/30 text-gold-300">
            EXPERIMENT 7 INTERACTIVE SIMULATOR
          </span>
          <h3 className="text-xl font-bold font-cinzel text-ivory-50 mt-1">
            SCAMPER Divergent Ideation Workshop
          </h3>
          <p className="text-xs text-ivory-400">
            Systematically disrupt engineering assumptions across 7 structured cognitive prompts.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-[10px] text-ivory-400 uppercase tracking-widest block">Total Ideas Generated</span>
            <span className="text-2xl font-bold font-cinzel text-gold-400">{totalIdeas}</span>
          </div>
        </div>
      </div>

      {/* SCAMPER Letter Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2">
        {prompts.map((p) => {
          const isActive = activeLetter === p.letter;
          return (
            <button
              key={p.letter}
              onClick={() => setActiveLetter(p.letter)}
              className={`flex-1 min-w-[120px] p-3 rounded-xl border transition-all text-left ${
                isActive
                  ? 'bg-burgundy-900 text-gold-300 border-gold-500 shadow-gold-glow'
                  : 'glass-card hover:border-gold-500/40 text-ivory-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold font-cinzel text-gold-400">{p.letter}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-navy-950/80 text-ivory-400">
                  {p.ideas.length}
                </span>
              </div>
              <p className="text-xs font-semibold mt-1 truncate">{p.word}</p>
            </button>
          );
        })}
      </div>

      {/* Active Prompt Workshop Card */}
      <div className="glass-panel p-6 rounded-2xl space-y-4">
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-gold-500/20">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg burgundy-gradient border border-gold-500/40 flex items-center justify-center font-cinzel font-bold text-gold-300">
                {currentPrompt.letter}
              </span>
              <h4 className="text-lg font-bold text-ivory-100 font-cinzel">
                {currentPrompt.word}
              </h4>
            </div>
            <p className="text-xs text-gold-400/90 mt-1 font-medium">
              {currentPrompt.prompt}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-navy-900/80 border border-gold-500/20 text-xs text-ivory-300 max-w-sm hidden sm:block">
            <span className="text-[10px] text-gold-400 font-semibold block mb-0.5">Classic Precedent:</span>
            {currentPrompt.example}
          </div>
        </div>

        {/* Input New Idea */}
        <div className="flex gap-2">
          <input
            type="text"
            value={newIdeaText}
            onChange={(e) => setNewIdeaText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addIdea()}
            placeholder={`Propose an innovative idea using '${currentPrompt.word}'...`}
            className="flex-1 bg-navy-900/80 border border-gold-500/30 rounded-xl px-4 py-2.5 text-xs text-ivory-100 focus:outline-none focus:border-gold-500"
          />
          <button
            onClick={addIdea}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors shadow-gold-glow"
          >
            <Plus className="w-4 h-4" /> Add Idea
          </button>
        </div>

        {/* List of Ideas */}
        <div className="space-y-2 pt-2">
          <h5 className="text-xs font-bold text-gold-400 uppercase tracking-wider">
            Generated Concepts for {currentPrompt.word} ({currentPrompt.ideas.length}):
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentPrompt.ideas.map((idea, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-navy-950/70 border border-gold-500/20 flex items-start justify-between gap-3 text-xs group hover:border-gold-500/50 transition-colors"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-ivory-200 leading-relaxed">{idea}</p>
                </div>
                <button
                  onClick={() => removeIdea(currentPrompt.letter, idx)}
                  className="text-ivory-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

