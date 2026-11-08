import React, { useState } from 'react';
import { Plus, Trash2, Download, Sparkles, RefreshCw } from 'lucide-react';

interface StickyNote {
  id: string;
  quadrant: 'says' | 'thinks' | 'does' | 'feels' | 'pains' | 'gains';
  text: string;
  tag?: string;
}

const defaultNotes: StickyNote[] = [
  { id: '1', quadrant: 'says', text: '"I always forget if I took my morning dosage."', tag: 'Observation' },
  { id: '2', quadrant: 'says', text: '"The buttons on these gadgets are too small to read without reading glasses."', tag: 'Quote' },
  { id: '3', quadrant: 'thinks', text: 'Wonders if the machine is actually accurate or giving random readings.', tag: 'Doubt' },
  { id: '4', quadrant: 'thinks', text: 'Worries about being a burden to family members.', tag: 'Emotion' },
  { id: '5', quadrant: 'does', text: 'Tapes handwritten paper reminder notes onto the refrigerator door.', tag: 'Workaround' },
  { id: '6', quadrant: 'does', text: 'Hesitates for 10 seconds before pressing the start button.', tag: 'Behavior' },
  { id: '7', quadrant: 'feels', text: 'Anxious when unfamiliar alarm sounds chime.', tag: 'Pain' },
  { id: '8', quadrant: 'feels', text: 'Dignified when managing health independently.', tag: 'Gain' },
  { id: '9', quadrant: 'pains', text: 'Complex English-only user manual with microscopic 8pt fonts.', tag: 'Friction' },
  { id: '10', quadrant: 'pains', text: 'Frequent false alarm beeps disturb sleep.', tag: 'Risk' },
  { id: '11', quadrant: 'gains', text: 'Clear audio confirmations in Malayalam with tactile clicks.', tag: 'Delight' },
  { id: '12', quadrant: 'gains', text: 'Automatic SMS updates to son/daughter living abroad.', tag: 'Peace of Mind' },
];

export const EmpathyMapLab: React.FC = () => {
  const [notes, setNotes] = useState<StickyNote[]>(defaultNotes);
  const [selectedQuadrant, setSelectedQuadrant] = useState<'says' | 'thinks' | 'does' | 'feels' | 'pains' | 'gains'>('says');
  const [newNoteText, setNewNoteText] = useState('');
  const [personaName, setPersonaName] = useState('Radha Amma (72, Senior Citizen managing Hypertension)');

  const addNote = () => {
    if (!newNoteText.trim()) return;
    const newNote: StickyNote = {
      id: Date.now().toString(),
      quadrant: selectedQuadrant,
      text: newNoteText.trim(),
      tag: 'User Input'
    };
    setNotes([...notes, newNote]);
    setNewNoteText('');
  };

  const removeNote = (id: string) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const resetToDefault = () => {
    setNotes(defaultNotes);
  };

  const quadrantColors = {
    says: 'border-blue-500/30 bg-blue-950/20 text-blue-300',
    thinks: 'border-purple-500/30 bg-purple-950/20 text-purple-300',
    does: 'border-emerald-500/30 bg-emerald-950/20 text-emerald-300',
    feels: 'border-amber-500/30 bg-amber-950/20 text-amber-300',
    pains: 'border-red-500/30 bg-red-950/20 text-red-300',
    gains: 'border-gold-500/30 bg-gold-950/20 text-gold-300',
  };

  return (
    <div className="space-y-6">
      {/* Header and Controls */}
      <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-burgundy-900/60 border border-gold-500/30 text-gold-300">
            EXPERIMENT 2 INTERACTIVE SIMULATOR
          </span>
          <h3 className="text-xl font-bold font-cinzel text-ivory-50 mt-1">
            Dynamic Empathy Map Canvas
          </h3>
          <p className="text-xs text-ivory-400">
            Synthesize user qualitative research to reveal latent engineering requirements.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={resetToDefault}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-navy-900 border border-gold-500/20 text-ivory-300 hover:text-gold-400"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset Template
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs burgundy-gradient border border-gold-500/40 text-gold-300 font-medium shadow-gold-glow hover:brightness-110"
          >
            <Download className="w-3.5 h-3.5" /> Export for Portfolio
          </button>
        </div>
      </div>

      {/* Target User Info */}
      <div className="glass-card p-4 rounded-xl flex items-center gap-4">
        <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">Target Persona:</span>
        <input
          type="text"
          value={personaName}
          onChange={(e) => setPersonaName(e.target.value)}
          className="flex-1 bg-navy-900/80 border border-gold-500/30 rounded-lg px-3 py-1.5 text-xs text-ivory-100 focus:outline-none focus:border-gold-500"
        />
      </div>

      {/* Input Form */}
      <div className="glass-panel p-4 rounded-xl flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <select
          value={selectedQuadrant}
          onChange={(e) => setSelectedQuadrant(e.target.value as any)}
          className="bg-navy-900 border border-gold-500/40 text-gold-300 text-xs rounded-lg px-3 py-2 font-medium focus:outline-none"
        >
          <option value="says">SAYS (Direct Quotes)</option>
          <option value="thinks">THINKS (Beliefs & Doubts)</option>
          <option value="does">DOES (Behaviors)</option>
          <option value="feels">FEELS (Emotional States)</option>
          <option value="pains">PAINS (Obstacles & Frustrations)</option>
          <option value="gains">GAINS (Hopes & Success)</option>
        </select>

        <input
          type="text"
          value={newNoteText}
          onChange={(e) => setNewNoteText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addNote()}
          placeholder={`Enter an observation for ${selectedQuadrant.toUpperCase()}...`}
          className="flex-1 bg-navy-900/80 border border-gold-500/20 rounded-lg px-3 py-2 text-xs text-ivory-100 focus:outline-none focus:border-gold-500"
        />

        <button
          onClick={addNote}
          className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Sticky
        </button>
      </div>

      {/* The 6-Quadrant Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* SAYS */}
        <div className={`p-4 rounded-xl border ${quadrantColors.says}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-blue-500/20">
            <h4 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" /> SAYS (Verbatim Quotes)
            </h4>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300">
              {notes.filter(n => n.quadrant === 'says').length} entries
            </span>
          </div>
          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {notes.filter(n => n.quadrant === 'says').map(note => (
              <div key={note.id} className="p-2.5 rounded-lg bg-navy-950/80 border border-blue-500/20 flex items-start justify-between gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-blue-400 font-semibold block mb-0.5">{note.tag}</span>
                  <p className="text-ivory-200">{note.text}</p>
                </div>
                <button onClick={() => removeNote(note.id)} className="text-ivory-500 hover:text-red-400 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* THINKS */}
        <div className={`p-4 rounded-xl border ${quadrantColors.thinks}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-purple-500/20">
            <h4 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" /> THINKS (Beliefs & Doubts)
            </h4>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
              {notes.filter(n => n.quadrant === 'thinks').length} entries
            </span>
          </div>
          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {notes.filter(n => n.quadrant === 'thinks').map(note => (
              <div key={note.id} className="p-2.5 rounded-lg bg-navy-950/80 border border-purple-500/20 flex items-start justify-between gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-purple-400 font-semibold block mb-0.5">{note.tag}</span>
                  <p className="text-ivory-200">{note.text}</p>
                </div>
                <button onClick={() => removeNote(note.id)} className="text-ivory-500 hover:text-red-400 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* DOES */}
        <div className={`p-4 rounded-xl border ${quadrantColors.does}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-emerald-500/20">
            <h4 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" /> DOES (Observable Actions)
            </h4>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
              {notes.filter(n => n.quadrant === 'does').length} entries
            </span>
          </div>
          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {notes.filter(n => n.quadrant === 'does').map(note => (
              <div key={note.id} className="p-2.5 rounded-lg bg-navy-950/80 border border-emerald-500/20 flex items-start justify-between gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-emerald-400 font-semibold block mb-0.5">{note.tag}</span>
                  <p className="text-ivory-200">{note.text}</p>
                </div>
                <button onClick={() => removeNote(note.id)} className="text-ivory-500 hover:text-red-400 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FEELS */}
        <div className={`p-4 rounded-xl border ${quadrantColors.feels}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-amber-500/20">
            <h4 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" /> FEELS (Emotions & Moods)
            </h4>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
              {notes.filter(n => n.quadrant === 'feels').length} entries
            </span>
          </div>
          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {notes.filter(n => n.quadrant === 'feels').map(note => (
              <div key={note.id} className="p-2.5 rounded-lg bg-navy-950/80 border border-amber-500/20 flex items-start justify-between gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-amber-400 font-semibold block mb-0.5">{note.tag}</span>
                  <p className="text-ivory-200">{note.text}</p>
                </div>
                <button onClick={() => removeNote(note.id)} className="text-ivory-500 hover:text-red-400 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* PAINS */}
        <div className={`p-4 rounded-xl border ${quadrantColors.pains}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-red-500/20">
            <h4 className="text-sm font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
              PAINS (Frustrations & Obstacles)
            </h4>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-300">
              {notes.filter(n => n.quadrant === 'pains').length} entries
            </span>
          </div>
          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {notes.filter(n => n.quadrant === 'pains').map(note => (
              <div key={note.id} className="p-2.5 rounded-lg bg-navy-950/80 border border-red-500/20 flex items-start justify-between gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-red-400 font-semibold block mb-0.5">{note.tag}</span>
                  <p className="text-ivory-200">{note.text}</p>
                </div>
                <button onClick={() => removeNote(note.id)} className="text-ivory-500 hover:text-red-400 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* GAINS */}
        <div className={`p-4 rounded-xl border ${quadrantColors.gains}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-gold-500/20">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 flex items-center gap-2">
              GAINS (Hopes & Desired Outcomes)
            </h4>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300">
              {notes.filter(n => n.quadrant === 'gains').length} entries
            </span>
          </div>
          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {notes.filter(n => n.quadrant === 'gains').map(note => (
              <div key={note.id} className="p-2.5 rounded-lg bg-navy-950/80 border border-gold-500/20 flex items-start justify-between gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-gold-400 font-semibold block mb-0.5">{note.tag}</span>
                  <p className="text-ivory-200">{note.text}</p>
                </div>
                <button onClick={() => removeNote(note.id)} className="text-ivory-500 hover:text-red-400 transition-colors">
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

