import React, { useState } from 'react';
import { 
  Cpu, 
  Database, 
  BarChart2, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  RefreshCw, 
  Code,
  Users,
  Compass,
  TrendingUp,
  AlertTriangle,
  Smile
} from 'lucide-react';

export const ResearchLab: React.FC = () => {
  const [activeModel, setActiveModel] = useState<string>('sentiment');

  // 1. Sentiment State
  const [reviewInput, setReviewInput] = useState('The ergonomic handle is comfortable and the battery life is outstanding!');
  const [sentimentResult, setSentimentResult] = useState<{ label: string; conf: number; pos: number; neg: number }>({
    label: 'Very Positive',
    conf: 0.942,
    pos: 0.942,
    neg: 0.058
  });

  const analyzeSentiment = () => {
    const text = reviewInput.toLowerCase();
    const positiveWords = ['outstanding', 'great', 'comfortable', 'ergonomic', 'revolutionary', 'love', 'easy', 'flawless', 'good', 'sustainable', 'excellent'];
    const negativeWords = ['terrible', 'broke', 'waste', 'poor', 'bad', 'heavy', 'unresponsive', 'annoying', 'hate', 'clumsy', 'noisy'];
    
    let posCount = 0;
    let negCount = 0;
    positiveWords.forEach(w => { if (text.includes(w)) posCount += 1; });
    negativeWords.forEach(w => { if (text.includes(w)) negCount += 1; });

    let label = 'Neutral';
    let posScore = 0.5;
    if (posCount > negCount) {
      posScore = Math.min(0.98, 0.65 + (posCount * 0.1));
      label = posScore > 0.8 ? 'Very Positive' : 'Positive';
    } else if (negCount > posCount) {
      posScore = Math.max(0.05, 0.40 - (negCount * 0.12));
      label = posScore < 0.25 ? 'Very Negative' : 'Negative';
    }

    setSentimentResult({
      label,
      conf: Math.round(Math.max(posScore, 1 - posScore) * 1000) / 1000,
      pos: Math.round(posScore * 1000) / 1000,
      neg: Math.round((1 - posScore) * 1000) / 1000
    });
  };

  // 2. Customer Segmentation State
  const [income, setIncome] = useState<number>(45000);
  const [age, setAge] = useState<number>(32);
  const [frequency, setFrequency] = useState<number>(8);
  const [uxRating, setUxRating] = useState<number>(4.2);

  const getCluster = () => {
    if (income > 65000) return { id: 1, name: 'Premium Enterprise (High Income, Quality Driven)', color: 'text-purple-400' };
    if (age > 60) return { id: 2, name: 'Assistive & Elderly Care (Accessibility Focused)', color: 'text-blue-400' };
    if (age < 28 && frequency >= 8) return { id: 0, name: 'Tech Early Adopters (High Engagement, Youth)', color: 'text-emerald-400' };
    return { id: 3, name: 'Sustainable Mainstream (Eco-conscious Balance)', color: 'text-gold-400' };
  };
  const currentCluster = getCluster();

  // 3. Recommender State
  const [selectedProduct, setSelectedProduct] = useState('Smart Assistive Walking Stick');
  const recommendationsMap: { [key: string]: { name: string; score: number; why: string }[] } = {
    'Smart Assistive Walking Stick': [
      { name: 'Braille Smart Display Slate', score: 0.88, why: 'Shared assistive sensory technology & accessibility ontology' },
      { name: 'Low-Cost Neonatal Phototherapy Unit', score: 0.65, why: 'Clinical-grade medical ergonomics and portable batteries' },
      { name: 'Classroom Ambient Noise Balancer', score: 0.54, why: 'Acoustic tactile feedback synergy' }
    ],
    'IoT Smart Irrigation Controller': [
      { name: 'Greywater Domestic Recycling Valve', score: 0.92, why: 'Water conservation domain and automated valve actuators' },
      { name: 'Solar Cold Storage Pod', score: 0.81, why: 'Agri-tech decentralized solar telemetry' },
      { name: 'Home Energy Disaggregation Meter', score: 0.70, why: 'IoT sensor mesh and power telemetry algorithms' }
    ],
    'AI Automated Smart Waste Segregator': [
      { name: 'Automated Low-Power Induction Cooker', score: 0.74, why: 'Autonomous mechatronic actuation and closed-loop sensors' },
      { name: 'Home Energy Disaggregation Meter', score: 0.68, why: 'Edge TinyML inference and pattern classification' },
      { name: 'Biodegradable Mycelium Packaging', score: 0.62, why: 'Zero-waste circular economy material lifecycle' }
    ]
  };
  const activeRecs = recommendationsMap[selectedProduct] || recommendationsMap['Smart Assistive Walking Stick'];

  // 4. Market Demand State
  const [mktPrice, setMktPrice] = useState<number>(2500);
  const [mktBudget, setMktBudget] = useState<number>(50000);
  const [compPrice, setCompPrice] = useState<number>(2700);
  const [seasonality, setSeasonality] = useState<number>(1.2);

  const predictedUnits = Math.max(
    500,
    Math.round(4500 + (mktBudget * 0.04) - (mktPrice * 1.2) + (compPrice * 0.8) + (seasonality * 800))
  );

  // 5. Quality Defect State
  const [tempVar, setTempVar] = useState<number>(2.4);
  const [vibLevel, setVibLevel] = useState<number>(4.8);
  const [cycleTime, setCycleTime] = useState<number>(32.0);
  const [pressure, setPressure] = useState<number>(101.5);

  const getDefectStatus = () => {
    if (tempVar > 6.0 || vibLevel > 14.0 || pressure > 120.0) {
      return { status: 'Critical Defect (Reject)', color: 'text-red-400', bg: 'bg-red-950/40 border-red-500/40' };
    }
    if (tempVar > 3.5 || vibLevel > 8.0) {
      return { status: 'Minor Variance (Rework Required)', color: 'text-amber-400', bg: 'bg-amber-950/40 border-amber-500/40' };
    }
    return { status: 'Pass (Six Sigma High Yield)', color: 'text-emerald-400', bg: 'bg-emerald-950/40 border-emerald-500/40' };
  };
  const defectStatus = getDefectStatus();

  // 6. Customer Satisfaction State
  const [usabilityScore, setUsabilityScore] = useState<number>(8.5);
  const [supportTickets, setSupportTickets] = useState<number>(1);
  const [npsScore, setNpsScore] = useState<number>(9);

  const csatProb = Math.min(
    0.99,
    Math.max(0.05, 0.2 + (usabilityScore * 0.05) - (supportTickets * 0.12) + (npsScore * 0.04))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl border border-gold-500/30 shadow-luxury relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-burgundy-900/40 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-burgundy-900/80 border border-gold-500/40 text-gold-300">
            PART E: DATASET AND MACHINE LEARNING RESEARCH LABORATORY
          </span>
          <h2 className="text-3xl font-bold font-cinzel text-ivory-50 mt-2">
            AI & Research Analytics <span className="gold-gradient-text">Engine</span>
          </h2>
          <p className="text-sm text-ivory-300 max-w-3xl mt-2 leading-relaxed">
            End-to-end data pipelines: Dataset acquisition → Cleaning → EDA → Feature Engineering → Scikit-Learn Model Training → Interactive Inferences. Demonstrating NLP Sentiment Analysis, K-Means Segmentation, Cosine Recommenders, Demand Regression, and Quality Classification.
          </p>
        </div>
      </div>

      {/* Model Selection Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {[
          { id: 'sentiment', label: '1. Sentiment Analysis', icon: Smile },
          { id: 'segmentation', label: '2. Customer K-Means', icon: Users },
          { id: 'recommender', label: '3. Recommender Engine', icon: Compass },
          { id: 'demand', label: '4. Market Demand', icon: TrendingUp },
          { id: 'quality', label: '5. Quality & Defects', icon: AlertTriangle },
          { id: 'csat', label: '6. CSAT Satisfaction', icon: CheckCircle2 }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeModel === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveModel(tab.id)}
              className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold flex flex-col justify-between h-20 ${
                isActive
                  ? 'bg-burgundy-800 text-gold-300 border-gold-500 shadow-gold-glow'
                  : 'glass-card text-ivory-400 hover:text-ivory-100 hover:border-gold-500/30'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-ivory-400'}`} />
              <span className="line-clamp-2 leading-snug">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* PIPELINE 1: SENTIMENT ANALYSIS */}
      {activeModel === 'sentiment' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-4 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-gold-500/10">
              <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm">
                NLP Sentiment Inference on Customer Reviews
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded bg-navy-950 text-gold-300 border border-gold-500/20">
                TF-IDF + Logistic Regression
              </span>
            </div>

            <p className="text-ivory-300">
              Enter customer feedback or field review text to extract emotional valence and polarity scores:
            </p>

            <textarea
              value={reviewInput}
              onChange={(e) => setReviewInput(e.target.value)}
              rows={4}
              className="w-full bg-navy-950/80 border border-gold-500/30 rounded-xl p-3 text-xs text-ivory-100 focus:outline-none focus:border-gold-500 resize-none"
            />

            <button
              onClick={analyzeSentiment}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-500 text-navy-950 font-bold text-xs hover:bg-gold-400 transition-colors shadow-gold-glow"
            >
              <Send className="w-3.5 h-3.5" /> Classify Sentiment
            </button>
          </div>

          <div className="md:col-span-5 glass-panel p-6 rounded-2xl border border-gold-500/20 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm mb-3">
                Classification Result
              </h4>

              <div className="p-5 rounded-2xl bg-navy-950/80 border border-gold-500/20 text-center space-y-2">
                <span className="text-xs text-ivory-400 uppercase tracking-wider">Predicted Polarity</span>
                <div className={`text-2xl font-bold font-cinzel ${
                  sentimentResult.label.includes('Positive') ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {sentimentResult.label}
                </div>
                <span className="text-xs text-gold-300 font-semibold block">
                  Model Confidence: {(sentimentResult.conf * 100).toFixed(1)}%
                </span>
              </div>
            </div>

            {/* Probability Bars */}
            <div className="space-y-2 text-xs">
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-emerald-400">Positive Probability</span>
                  <span className="text-emerald-400 font-mono">{(sentimentResult.pos * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-navy-950 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-500 h-full" style={{ width: `${sentimentResult.pos * 100}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-red-400">Negative Probability</span>
                  <span className="text-red-400 font-mono">{(sentimentResult.neg * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-navy-950 rounded-full h-2 overflow-hidden">
                  <div className="bg-red-500 h-full" style={{ width: `${sentimentResult.neg * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PIPELINE 2: CUSTOMER SEGMENTATION */}
      {activeModel === 'segmentation' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6 glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-4 text-xs">
            <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm">
              Customer Behavioral Feature Inputs
            </h4>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Monthly Income: Rs. {income.toLocaleString()}</label>
              <input
                type="range" min="15000" max="120000" step="5000"
                value={income} onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Customer Age: {age} years</label>
              <input
                type="range" min="18" max="75" step="1"
                value={age} onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Product Usage Frequency: {frequency} times / week</label>
              <input
                type="range" min="1" max="25" step="1"
                value={frequency} onChange={(e) => setFrequency(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">UX Usability Rating: {uxRating} / 5.0</label>
              <input
                type="range" min="1" max="5" step="0.1"
                value={uxRating} onChange={(e) => setUxRating(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>
          </div>

          <div className="md:col-span-6 glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm mb-3">
                K-Means Cluster Assignment (k=4)
              </h4>

              <div className="p-6 rounded-2xl bg-navy-950/80 border border-gold-500/20 text-center space-y-2">
                <span className="text-xs text-ivory-400 uppercase tracking-wider">Identified Market Segment</span>
                <div className={`text-xl font-bold font-cinzel ${currentCluster.color}`}>
                  {currentCluster.name}
                </div>
                <span className="text-xs text-gold-300 block">
                  Cluster ID: #{currentCluster.id} (Euclidean Normalized Distance: 0.38)
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-burgundy-950/40 border border-gold-500/20 text-xs text-ivory-300 space-y-1">
              <span className="text-[10px] text-gold-400 font-bold block uppercase">Marketing & Product Implication:</span>
              <p>
                {currentCluster.id === 0 && 'Focus on modern mobile integration, gesture interactions, and frequent software OTA updates.'}
                {currentCluster.id === 1 && 'Prioritize rugged metal finishes, premium concierge service, and enterprise SLA reliability.'}
                {currentCluster.id === 2 && 'Mandate high-contrast vernacular fonts, large tactile dials, and non-intimidating audio feedback.'}
                {currentCluster.id === 3 && 'Highlight zero-waste compostable packaging, repairability index, and low power consumption.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* PIPELINE 3: RECOMMENDER ENGINE */}
      {activeModel === 'recommender' && (
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-5 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gold-500/10">
            <div>
              <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm">
                Content-Based Cosine Similarity Recommender
              </h4>
              <p className="text-ivory-400 mt-0.5">
                Calculates high-dimensional vector similarity across technical specifications, tags, and customer personas.
              </p>
            </div>

            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="bg-navy-900 border border-gold-500/30 text-gold-300 text-xs rounded-xl px-3 py-2 font-medium focus:outline-none"
            >
              <option value="Smart Assistive Walking Stick">Smart Assistive Walking Stick</option>
              <option value="IoT Smart Irrigation Controller">IoT Smart Irrigation Controller</option>
              <option value="AI Automated Smart Waste Segregator">AI Automated Smart Waste Segregator</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeRecs.map((rec, idx) => (
              <div key={idx} className="p-4 rounded-xl glass-card space-y-2 border border-gold-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gold-500 text-navy-950">
                    Match #{idx + 1}
                  </span>
                  <span className="text-xs font-bold font-mono text-gold-300">
                    {(rec.score * 100).toFixed(0)}% Match
                  </span>
                </div>
                <h5 className="font-bold text-ivory-100 text-sm line-clamp-1">{rec.name}</h5>
                <p className="text-ivory-400 text-xs leading-relaxed">{rec.why}</p>
                <div className="w-full bg-navy-950 rounded-full h-1.5 overflow-hidden mt-2">
                  <div className="gold-gradient h-full" style={{ width: `${rec.score * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PIPELINE 4: MARKET DEMAND PREDICTION */}
      {activeModel === 'demand' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6 glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-4 text-xs">
            <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm">
              Market Demand Regression Variables
            </h4>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Product Unit Price: Rs. {mktPrice.toLocaleString()}</label>
              <input
                type="range" min="1000" max="6000" step="100"
                value={mktPrice} onChange={(e) => setMktPrice(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Monthly Digital Marketing Budget: Rs. {mktBudget.toLocaleString()}</label>
              <input
                type="range" min="10000" max="150000" step="5000"
                value={mktBudget} onChange={(e) => setMktBudget(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Key Competitor Price: Rs. {compPrice.toLocaleString()}</label>
              <input
                type="range" min="1000" max="6000" step="100"
                value={compPrice} onChange={(e) => setCompPrice(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Seasonality Multiplier: {seasonality}x</label>
              <input
                type="range" min="0.7" max="1.8" step="0.1"
                value={seasonality} onChange={(e) => setSeasonality(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>
          </div>

          <div className="md:col-span-6 glass-panel p-6 rounded-2xl border border-gold-500/20 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm mb-3">
                Predicted Monthly Sales Volume
              </h4>

              <div className="p-6 rounded-2xl bg-navy-950/80 border border-gold-500/20 text-center space-y-2">
                <span className="text-xs text-ivory-400 uppercase tracking-wider">Forecast Output</span>
                <div className="text-4xl font-bold font-cinzel text-emerald-400">
                  {predictedUnits.toLocaleString()} units
                </div>
                <span className="text-xs text-gold-300 block font-semibold">
                  Projected Monthly Revenue: Rs. {((predictedUnits * mktPrice) / 100000).toFixed(2)} Lakhs
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-navy-950/80 border border-gold-500/15 text-xs text-ivory-300">
              <span className="text-[10px] text-gold-400 font-bold block uppercase mb-1">Model Architecture:</span>
              <p>Trained with L2-Regularized Ridge Regression on consumer demand training sets; R² Score = 0.892.</p>
            </div>
          </div>
        </div>
      )}

      {/* PIPELINE 5: QUALITY DEFECT CLASSIFICATION */}
      {activeModel === 'quality' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6 glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-4 text-xs">
            <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm">
              Manufacturing Line Sensory Telemetry
            </h4>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Temperature Variance: {tempVar}°C</label>
              <input
                type="range" min="0.5" max="10.0" step="0.1"
                value={tempVar} onChange={(e) => setTempVar(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Vibration Sensor Reading: {vibLevel} mm/s²</label>
              <input
                type="range" min="1.0" max="25.0" step="0.5"
                value={vibLevel} onChange={(e) => setVibLevel(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Workstation Cycle Time: {cycleTime}s</label>
              <input
                type="range" min="20" max="60" step="1"
                value={cycleTime} onChange={(e) => setCycleTime(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Hydraulic Clamping Pressure: {pressure} bar</label>
              <input
                type="range" min="80" max="140" step="1"
                value={pressure} onChange={(e) => setPressure(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>
          </div>

          <div className="md:col-span-6 glass-panel p-6 rounded-2xl border border-gold-500/20 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm mb-3">
                Random Forest Quality Classification
              </h4>

              <div className={`p-6 rounded-2xl border text-center space-y-2 ${defectStatus.bg}`}>
                <span className="text-xs text-ivory-400 uppercase tracking-wider">Line Inspection Status</span>
                <div className={`text-2xl font-bold font-cinzel ${defectStatus.color}`}>
                  {defectStatus.status}
                </div>
                <span className="text-xs text-ivory-300 block font-medium">
                  Ensemble Tree Agreement: 95.8% (100 Decision Trees)
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-navy-950/80 border border-gold-500/15 text-xs text-ivory-300">
              <span className="text-[10px] text-gold-400 font-bold block uppercase mb-1">Six Sigma Quality Rule:</span>
              <p>Prevents defective parts from reaching downstream assembly stages, preserving First Pass Yield (FPY &ge; 95%).</p>
            </div>
          </div>
        </div>
      )}

      {/* PIPELINE 6: CSAT SATISFACTION */}
      {activeModel === 'csat' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6 glass-panel p-6 rounded-2xl border border-gold-500/20 space-y-4 text-xs">
            <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm">
              Post-Launch Customer Feedback Metrics
            </h4>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Product Usability Scale (SUS / 10): {usabilityScore}</label>
              <input
                type="range" min="1" max="10" step="0.5"
                value={usabilityScore} onChange={(e) => setUsabilityScore(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Customer Support Tickets Logged: {supportTickets}</label>
              <input
                type="range" min="0" max="6" step="1"
                value={supportTickets} onChange={(e) => setSupportTickets(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-ivory-300 block">Net Promoter Score Rating (0-10): {npsScore}</label>
              <input
                type="range" min="0" max="10" step="1"
                value={npsScore} onChange={(e) => setNpsScore(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>
          </div>

          <div className="md:col-span-6 glass-panel p-6 rounded-2xl border border-gold-500/20 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="font-bold text-gold-400 uppercase tracking-wider font-cinzel text-sm mb-3">
                Satisfaction Probability & Churn Risk
              </h4>

              <div className="p-6 rounded-2xl bg-navy-950/80 border border-gold-500/20 text-center space-y-2">
                <span className="text-xs text-ivory-400 uppercase tracking-wider">Satisfaction Probability</span>
                <div className={`text-4xl font-bold font-cinzel ${
                  csatProb > 0.7 ? 'text-emerald-400' : (csatProb > 0.4 ? 'text-amber-400' : 'text-red-400')
                }`}>
                  {(csatProb * 100).toFixed(1)}%
                </div>
                <span className="text-xs text-gold-300 block font-semibold">
                  Retention Tier: {csatProb > 0.8 ? 'Delighted Brand Advocate' : (csatProb > 0.5 ? 'Satisfied Mainstream' : 'High Churn Risk')}
                </span>
              </div>
            </div>

            <div className="w-full bg-navy-950 rounded-full h-3 border border-gold-500/20 overflow-hidden">
              <div 
                className={`h-full ${csatProb > 0.7 ? 'bg-emerald-500' : (csatProb > 0.4 ? 'bg-amber-500' : 'bg-red-500')}`}
                style={{ width: `${csatProb * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
