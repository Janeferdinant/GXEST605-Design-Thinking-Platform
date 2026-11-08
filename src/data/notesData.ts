import { NoteItem } from "../types";

export const notesData: NoteItem[] = [
  // ==========================================
  // MODULE 1 NOTES
  // ==========================================
  {
    id: "note-m1-pdcl",
    topicNumber: 1,
    title: "Product Development Lifecycle (PDCL) & Design Thinking",
    moduleNumber: 1,
    definition: "The Product Development Lifecycle (PDCL) is the structured, end-to-end framework encompassing all systematic stages a product undergoes from initial market opportunity discovery and ideation to research, detailed engineering design, prototyping, pilot manufacturing, commercial release, and eventual end-of-life obsolescence.",
    detailedExplanation: "Traditional engineering lifecycles followed rigid linear models (such as the classic Waterfall model). In contrast, modern engineering incorporates Design Thinking into the front-end of the PDCL (the 'fuzzy front end'). This embeds deep user empathy, rapid divergent and convergent ideation, and low-cost tangible prototyping before committing capital to tooling and volume production. The integration ensures that product development does not merely solve a technical problem in isolation, but delivers a solution that is simultaneously humanly Desirable, technologically Feasible, and economically Viable.",
    importantConcepts: [
      "Front-End of Innovation (Fuzzy Front End): Opportunity discovery, problem framing, and ideation.",
      "Engineered Execution: Translating validated proof of concept into formal schematics, CAD, and firmware.",
      "Three Lenses of Human-Centered Innovation: Desirability (Users), Feasibility (Technology), Viability (Business).",
      "Stage-Gate Governance: Rigorous gate reviews between stages ensuring risk reduction before capital expenditure."
    ],
    diagramDescription: "PDCL Stage-Gate Flow with Integrated Design Thinking Iteration Loops",
    asciiDiagram: `
+---------------------------------------------------------------------------------------------------+
|                        INTEGRATED DESIGN THINKING & PDCL LIFECYCLE                                |
+---------------------------------------------------------------------------------------------------+
  [ Stage 0: Discover ] ----> Empathize & Immersion (User Observations, Interviews)
           |
           v
  [ Stage 1: Define ]   ----> Problem Statement Framing (Point of View & How Might We)
           |
           v
  [ Stage 2: Ideate ]   ----> Divergent Thinking (SCAMPER, Brainstorming) -> Convergence
           |
           v (Gate 1: Conceptual Approval)
  [ Stage 3: PoC ]      ----> Proof of Concept Validation (Benchtop Breadboard / Sensor Tests)
           |
           v (Gate 2: Technical & Economic Feasibility Review)
  [ Stage 4: Detailed ] ----> Hardware Schematics, Firmware Architecture, DFM, DFMEA
           |
           v
  [ Stage 5: Prototype] ----> Alpha (Lab Functional) -> Beta (Production-Intent Field Trial)
           |
           v (Gate 3: Pre-Compliance & Tooling Sign-off)
  [ Stage 6: Pilot ]    ----> Pre-Production Batch (50-500 units) Line Yield Optimization
           |
           v (Gate 4: Commercial Launch Review)
  [ Stage 7: Scale ]    ----> Full-Scale Production, Distribution & Post-Market Surveillance
+---------------------------------------------------------------------------------------------------+`,
    realWorldApplication: "Medical device engineering (e.g., portable infant phototherapy units), where early patient-caregiver empathy ensures non-intimidating form factors while rigorous gatekeeping guarantees ISO 13485 and IEC 60601 regulatory compliance.",
    caseStudy: "Embrace Innovations Infant Warmer: Instead of engineering a cheaper traditional $20,000 electric incubator requiring steady hospital grid power, the team used design thinking to discover that rural mothers needed an intuitive, portable, phase-change baby sleeping bag costing under $200 that functioned without continuous grid electricity.",
    advantages: [
      "Mitigates market failure risk by validating customer desirability early.",
      "Prevents expensive re-tooling by addressing manufacturability during design.",
      "Fosters cross-disciplinary collaboration across hardware, software, UX, and business teams."
    ],
    limitations: [
      "Iterative loops can extend time-to-market if stage-gate exit criteria are loosely defined.",
      "High initial ambiguity during the empathy and divergent ideation stages."
    ],
    formulas: [
      {
        name: "Stage-Gate Project Risk Reduction Factor (RRF)",
        formula: "RRF = 1 - (P_failure_post_gate / P_failure_pre_gate)",
        explanation: "Quantifies the mathematical reduction in commercial or technical failure probability achieved after passing a formal gate."
      }
    ],
    keywords: ["PDCL", "Desirability", "Feasibility", "Viability", "Stage-Gate", "Fuzzy Front End", "Embrace Warmer"],
    threeMarkAnswer: {
      question: "Define Product Development Lifecycle (PDCL) and state the three lenses of innovation.",
      answer: "The Product Development Lifecycle (PDCL) is the structured sequence of stages a product progresses through from initial concept exploration and design to prototyping, manufacturing, market launch, and retirement. The three essential lenses of innovation are: (1) Desirability (What do people desire?), (2) Feasibility (What is technologically possible?), and (3) Viability (What is financially and commercially sustainable?).",
      keyPoints: [
        "Structured sequence from concept to retirement",
        "Desirability: human/user needs",
        "Feasibility: engineering/technological capability",
        "Viability: economic sustainability"
      ]
    },
    nineMarkAnswer: {
      question: "Explain the comprehensive stages of the modern Product Development Lifecycle integrated with Design Thinking. Illustrate with a neat flowchart and provide a suitable real-world case study.",
      answer: "Modern product development bridges empathetic human inquiry with rigorous engineering execution...",
      breakdown: [
        { section: "Introduction & Philosophy", content: "Contrast traditional linear models with iterative Design Thinking embedded lifecycles. Emphasize early risk mitigation." },
        { section: "Detailed Stage Breakdown", content: "Stage 0: Empathize & User Need Discovery; Stage 1: Problem Definition (POV & HMW); Stage 2: Divergent & Convergent Ideation; Stage 3: PoC & Feasibility Studies; Stage 4: Detailed Engineering Design (SRD, SRS, DFM, DFMEA); Stage 5: Prototyping (Alpha & Beta); Stage 6: Pilot Build; Stage 7: Scale & Lifecycle Management." },
        { section: "Flowchart Representation", content: "Visual representation of feedback loops between Prototype and Define, and Pilot Build to Detailed Design." },
        { section: "Industrial Case Study", content: "Embrace Infant Warmer case study analysis: problem identification in rural Nepal, iteration on wax-based phase-change pouch, clinical testing, and global deployment." },
        { section: "Summary of Governance", content: "Role of stage-gate reviews in managing capital expenditure and time-to-market trade-offs." }
      ]
    },
    vivaQnA: [
      { question: "What is the primary difference between Waterfall and Design Thinking in PDCL?", answer: "Waterfall assumes requirements are known upfront and executes linearly, whereas Design Thinking assumes problem spaces are ambiguous and uses iterative empathy and prototyping loops to discover true requirements." },
      { question: "At what point in PDCL does the highest financial commitment occur?", answer: "During tooling, pilot build, and mass manufacturing ramp-up (Stages 5 to 7); hence Design Thinking aims to resolve uncertainties in Stages 0 to 3." },
      { question: "What is the 'Fuzzy Front End'?", answer: "The messy, ambiguous early phase of product development where ideas, user pain points, and concepts are explored before formal engineering specifications are drafted." }
    ]
  },
  {
    id: "note-m1-trl-patents",
    topicNumber: 14,
    title: "Technology Readiness Levels (TRL) & Patentability Framework",
    moduleNumber: 1,
    definition: "Technology Readiness Level (TRL) is a standardized 9-level measurement system developed by NASA to assess the maturity level of a specific technology from basic conceptual principles (TRL 1) to proven operational mission deployment (TRL 9). Patentability refers to the substantive statutory legal criteria—Novelty, Inventive Step (Non-Obviousness), and Industrial Applicability—that an invention must satisfy to be granted patent protection.",
    detailedExplanation: "In product innovation, aligning TRL progression with patent filings is critical. Commercializing an unproven TRL 2 concept carries catastrophic financial risk; conversely, delaying patent filing until TRL 8 risks public disclosure and forfeiture of intellectual property rights (under first-to-file patent regimes). Engineering teams must evaluate TRL gates: TRL 1-3 represents laboratory proof-of-concept; TRL 4-6 represents subsystem validation in relevant operational environments; and TRL 7-9 represents full-scale commercial manufacturing and field deployment.",
    importantConcepts: [
      "TRL 1: Basic principles observed and reported.",
      "TRL 3: Analytical and experimental critical function and/or characteristic proof of concept.",
      "TRL 6: System/subsystem model or prototype demonstration in a relevant environment (Alpha prototype).",
      "TRL 9: Actual system proven through successful mission operations (Full commercial production).",
      "Patentability Triad (Indian Patent Act 1970 / Global Patent Laws): Novelty (Absolute novelty worldwide), Inventive Step (Non-obvious to a person skilled in the art), Industrial Applicability (Capable of industrial manufacture/use)."
    ],
    diagramDescription: "NASA 9-Level TRL Hierarchy mapped to Product Development Phases",
    asciiDiagram: `
+---------------------------------------------------------------------------------------------------+
|                         TECHNOLOGY READINESS LEVEL (TRL 1 TO 9)                                  |
+---------------------------------------------------------------------------------------------------+
  TRL 9 | [ACTUAL SYSTEM PROVEN IN FULL OPERATION] --------> Mass Market Production / Field Operations
  TRL 8 | [SYSTEM COMPLETE AND QUALIFIED] -----------------> Pilot Build / Regulatory Certification
  TRL 7 | [PROTOTYPE DEMONSTRATION IN OPERATIONAL ENV] ----> Beta Prototype Field Trials
  TRL 6 | [PROTOTYPE DEMO IN RELEVANT ENVIRONMENT] --------> Alpha Prototype Engineering Lab Unit
  TRL 5 | [COMPONENT VALIDATION IN RELEVANT ENV] ----------> Integrated Benchtop Enclosure
  TRL 4 | [COMPONENT VALIDATION IN LABORATORY ENV] --------> Breadboard Integrated Subsystems
  TRL 3 | [PROOF OF CONCEPT (ANALYTICAL & LAB)] -----------> Benchtop Sensor/Actuator Validation
  TRL 2 | [TECHNOLOGY CONCEPT FORMULATED] -----------------> Practical Application Outlined
  TRL 1 | [BASIC PRINCIPLES OBSERVED & REPORTED] ----------> Scientific Literature / Fundamental Laws
+---------------------------------------------------------------------------------------------------+`,
    realWorldApplication: "Electric Vehicle Battery Management Systems (BMS): Transitioning from cell chemistry formulation in universities (TRL 1-2) to benchtop testing (TRL 3-4), automotive climatic chamber testing (TRL 6), vehicle homologation (TRL 8), and mass fleet rollout (TRL 9).",
    caseStudy: "Ather Energy S340 Touchscreen & Battery Pack: Filed patents on their algorithm-driven battery pack thermal dissipation and smart dashboard UI at TRL 4-5 prior to public unveiling, securing defensible IP before scaling to TRL 9 in their Hosur manufacturing plant.",
    advantages: [
      "Provides uniform metric for inter-departmental technical risk assessment.",
      "Enables strategic patent filing timing before public exposure or trade show demonstrations.",
      "Safeguards venture capital and R&D allocation through clear milestone validation."
    ],
    limitations: [
      "Software TRL definitions often blur due to rapid continuous integration / continuous deployment (CI/CD) cycles.",
      "Does not measure market readiness or customer adoption velocity directly (requires complementary CRL - Commercial Readiness Level)."
    ],
    formulas: [
      {
        name: "Technology Maturity Index (TMI)",
        formula: "TMI = (Current TRL / Target TRL) * 100",
        explanation: "Percentage completion of technology maturation towards target deployment."
      }
    ],
    keywords: ["TRL", "NASA", "Novelty", "Inventive Step", "Industrial Applicability", "Patent Act", "IP Strategy"],
    threeMarkAnswer: {
      question: "State the three statutory criteria of patentability.",
      answer: "Under the Patent Act, an invention is patentable only if it satisfies three criteria: (1) Novelty: The invention must be new and not published, disclosed, or publicly known anywhere in the world prior to the filing date. (2) Inventive Step (Non-obviousness): The technical advancement must not be obvious to a person normally skilled in the relevant art. (3) Industrial Applicability: The invention must be capable of being made or used in an industry.",
      keyPoints: [
        "Novelty: absolute worldwide newness",
        "Inventive Step: non-obvious to skilled technician",
        "Industrial Applicability: capable of industrial manufacture"
      ]
    },
    nineMarkAnswer: {
      question: "Deconstruct the 9 Technology Readiness Levels (TRLs) developed by NASA and explain their strategic mapping to product development gates and intellectual property protection.",
      answer: "Technology Readiness Levels provide an objective, data-driven framework...",
      breakdown: [
        { section: "Origins & Definition", content: "Historical background from NASA space flight development to modern engineering adoption." },
        { section: "Detailed TRL 1 to 9 Breakdown", content: "Grouped into Research (TRL 1-3), Development & Subsystem Demonstration (TRL 4-6), and Deployment & Operational Scalability (TRL 7-9)." },
        { section: "Gate Alignment with PDCL", content: "How TRL 3 correlates with PoC sign-off, TRL 6 with Alpha Prototype freeze, TRL 8 with Pilot Build, and TRL 9 with commercial ramp-up." },
        { section: "IP & Patent Filing Strategy", content: "Risks of premature filing (insufficient enablement under Section 10) vs late filing (loss of novelty due to demonstrations). Why TRL 4-5 is the sweet spot for provisional patent applications." }
      ]
    },
    vivaQnA: [
      { question: "At what TRL is an Alpha prototype typically situated?", answer: "TRL 6 (System/subsystem model or prototype demonstration in a relevant environment)." },
      { question: "What is 'Prior Art' in patent law?", answer: "Any evidence worldwide—including publications, existing products, patents, or public demonstrations—proving that the invention was already known before the patent application filing date." },
      { question: "Can a software algorithm alone be patented in India?", answer: "Under Section 3(k) of the Indian Patent Act 1970, a mathematical or business method or a computer programme per se or algorithms are not patentable, unless integrated with novel hardware or resulting in a technical effect/technical contribution." }
    ]
  },

  // ==========================================
  // MODULE 2 NOTES
  // ==========================================
  {
    id: "note-m2-empathy-mapping",
    topicNumber: 6,
    title: "Empathy Mapping, 5 Whys & Customer Journey Mapping",
    moduleNumber: 2,
    definition: "An Empathy Map is a collaborative visual tool used to synthesize empirical qualitative insights from user research by categorizing what a specific user segment Says, Thinks, Does, and Feels, along with their core Pains and Gains. The 5 Whys is an iterative root-cause interrogation technique to dig past superficial symptoms to core psychological or systemic causes. A Customer Journey Map chronologically traces user experience across touchpoints, illustrating emotional highs and lows.",
    detailedExplanation: "True empathy in engineering requires moving beyond self-referential assumptions. When engineers design without structured empathy mapping, they fall prey to 'the developer bias'—assuming the user thinks and behaves like an engineer. Empathy maps capture discrepancies between explicit statements (Says) and implicit thoughts/emotions (Thinks/Feels), revealing unmet latent needs. Customer Journey Mapping takes these personas and plots their experiential timeline: Pre-service, Service, and Post-service, pinpointing moments of frustration (valleys) that represent prime opportunities for innovative product interventions.",
    importantConcepts: [
      "Quadrant Canvas: Says (direct quotes), Thinks (inner beliefs/assumptions), Does (observable actions), Feels (emotional states).",
      "Pains & Gains: Explicit frustrations, risks, and obstacles vs aspirational desires and success metrics.",
      "5 Whys Root-Cause Logic: Progressively asking 'Why?' at least five times to transition from symptom to root flaw.",
      "Customer Journey Touchpoints: Digital, physical, and interpersonal interfaces encountered during product interaction."
    ],
    diagramDescription: "6-Sector Empathy Map Canvas Layout",
    asciiDiagram: `
+---------------------------------------------------------------------------------------------------+
|                                 KTU EMPATHY MAP CANVAS FORMAT                                     |
+---------------------------------------------------------------------------------------------------+
|  USER PERSONA / SEGMENT: [ Rural Smallholder Farmer (Age 45, Rainfed Agriculture) ]              |
+-------------------------------------------------+-------------------------------------------------+
|                      SAYS                       |                     THINKS                      |
|  - "The fertilizer cost keeps climbing."        |  - "Am I using too much or too little water?"   |
|  - "I cannot understand this English app."      |  - "If this pump fails, my family will starve." |
|  - "The local shopkeeper told me to buy this."  |  - "Tech gadgets break easily and cannot be fixed."
+-------------------------------------------------+-------------------------------------------------+
|                      DOES                       |                     FEELS                       |
|  - Touches topsoil with fingers at 6:00 AM.     |  - Anxious during monsoon delay periods.        |
|  - Manually switches grid pump on at night.     |  - Humiliated when apps crash or require PINs.  |
|  - Carries heavy diesel pump on motorbike.      |  - Proud when harvest yields fill the tractor.  |
+-------------------------------------------------+-------------------------------------------------+
|                     PAINS                       |                     GAINS                       |
|  - Erratic electricity causes burnt pump motors |  - Guaranteed yield without waking at 2:00 AM.  |
|  - High initial cost of automated drip kits.    |  - Local language audio alerts on simple phone. |
|  - Lack of nearby repair technicians.           |  - Reduced electricity and diesel bills.        |
+---------------------------------------------------------------------------------------------------+`,
    realWorldApplication: "Designing an IoT-enabled smart irrigation controller for semi-literate farmers in Kerala: empathy mapping revealed that screen-based smartphone apps were rejected because farmers handled mud with wet hands; the product was redesigned with an audio-haptic physical dial and vernacular voice feedback.",
    caseStudy: "Piramal Sarvajal Water ATMs: Observing rural Indian village women fetching water revealed that walking distances and water container weight were primary pain points. The solution developed solar-powered, RFID-card-operated village water dispensing ATMs paired with local franchised distribution.",
    advantages: [
      "Bridges the cognitive gap between engineering teams and non-technical end-users.",
      "Exposes contradictions between what users say in surveys and what they actually do in practice.",
      "Creates an easily accessible single source of user truth for cross-functional teams."
    ],
    limitations: [
      "Can result in superficial caricatures if based on shallow desk research rather than genuine user immersion.",
      "Static snapshot that must be updated as user behaviors evolve."
    ],
    formulas: [
      {
        name: "Net Emotional Valence Score (NEVS)",
        formula: "NEVS = (Sum of Positive Journey Touchpoint Ratings - Sum of Negative Ratings) / Total Touchpoints",
        explanation: "Quantifies the overall emotional curve of a user journey from -1.0 (pure distress) to +1.0 (pure delight)."
      }
    ],
    keywords: ["Empathy Map", "Says-Thinks-Does-Feels", "5 Whys", "Root Cause", "Customer Journey Map", "Touchpoints", "Latent Needs"],
    threeMarkAnswer: {
      question: "What are the four primary quadrants of an Empathy Map and what do they capture?",
      answer: "The four primary quadrants of an Empathy Map are: (1) Says: Contains direct, verbatim quotes and statements spoken by the user during interviews. (2) Thinks: Captures what the user is thinking, including inner beliefs, doubts, and unspoken concerns. (3) Does: Records observable physical behaviors, routines, and actions. (4) Feels: Identifies the emotional states, moods, and feelings experienced by the user.",
      keyPoints: [
        "Says: verbatim quotes spoken by user",
        "Thinks: unspoken beliefs, assumptions, worries",
        "Does: physical actions, observable behaviors",
        "Feels: emotional states, joys, frustrations"
      ]
    },
    nineMarkAnswer: {
      question: "Explain the methodology of the Empathize phase in Design Thinking. Illustrate how an Empathy Map, the 5 Whys technique, and a Customer Journey Map combine to formulate an actionable Problem Statement.",
      answer: "The Empathize phase forms the indispensable foundation of human-centered product development...",
      breakdown: [
        { section: "Empathy as an Engineering Competency", content: "Moving from subjective assumption to objective observation. Immersion, observation, and contextual inquiry methods." },
        { section: "Empathy Map Construction", content: "Structure: Says, Thinks, Does, Feels, Pains, Gains. Analysis of contradictions between Says and Does." },
        { section: "5 Whys Root Cause Analysis", content: "Detailed step-by-step example: Car battery discharge -> Alternator belt snapped -> Preventive maintenance missed -> Lack of fleet tracking software." },
        { section: "Customer Journey Mapping", content: "Chronological stages (Awareness, Onboarding, Usage, Troubleshooting, Renewal), Touchpoint identification, Emotional dips and peaks." },
        { section: "Synthesis into Problem Definition", content: "Deriving Point-of-View (POV) statements: [User] needs [Need] because [Surprising Insight]." }
      ]
    },
    vivaQnA: [
      { question: "Why do we separate 'Says' and 'Thinks' in an Empathy Map?", answer: "Because social desirability bias or politeness often prevents users from stating their real thoughts or frustrations aloud; contrasting both reveals vital latent insights." },
      { question: "Who originally invented the 5 Whys technique?", answer: "Sakichi Toyoda, the founder of Toyota Industries, as a cornerstone of the Toyota Production System (TPS)." },
      { question: "What is a 'Moments of Truth' in a Customer Journey Map?", answer: "Critical touchpoints where the user forms an enduring positive or negative impression of the product (e.g., initial setup, system error, or warranty claim)." }
    ]
  },

  // ==========================================
  // MODULE 3 NOTES
  // ==========================================
  {
    id: "note-m3-scamper-feasibility",
    topicNumber: 2,
    title: "SCAMPER, Divergent Thinking & 6-Dimensional Feasibility",
    moduleNumber: 3,
    definition: "SCAMPER is an acronym-based divergent thinking prompt tool—Substitute, Combine, Adapt, Modify/Magnify, Put to another use, Eliminate, Reverse/Rearrange—designed to systematically generate disruptive product variants. Feasibility analysis in product development is the rigorous, multi-criteria evaluation of a candidate concept across six dimensions: Technical, Economic, Market, Operational, Legal, and Ethical feasibility.",
    detailedExplanation: "Ideation must never be a chaotic free-for-all; effective innovation alternates between high-volume uninhibited divergence and ruthless analytical convergence. SCAMPER provides disciplined cognitive triggers that force designers out of mental ruts. Once hundreds of candidate ideas are collected, they must survive the 6-Dimensional Feasibility Gauntlet before entering costly prototyping. A concept that is technically brilliant but legally hazardous (e.g., infringing active patents or violating privacy laws) or ethically unacceptable will result in catastrophic commercial failure.",
    importantConcepts: [
      "SCAMPER Prompts: S-Substitute materials/components, C-Combine functions, A-Adapt from nature/other sectors, M-Modify scale/color, P-Put to alternate use, E-Eliminate superfluous parts, R-Reverse workflows.",
      "Divergent vs Convergent Thinking: Divergence creates choices (quantity breeds quality); convergence makes choices (selection matrices, dot voting).",
      "Six Feasibility Pillars: (1) Technical (physics, compute, components), (2) Economic (CapEx, OpEx, BOM margins), (3) Market (willingness to pay, CAC), (4) Operational (supply chain, servicing), (5) Legal (IP clearance, FTO, safety standards), (6) Ethical (sustainability, data privacy, bias).",
      "Weighted Decision Matrix: Mathematical concept screening scoring criteria with normalized weights."
    ],
    diagramDescription: "Divergent-Convergent Double Diamond Ideation and 6-Pillar Feasibility Filter",
    asciiDiagram: `
+---------------------------------------------------------------------------------------------------+
|                        IDEATION & FEASIBILITY CONVERGENCE FUNNEL                                  |
+---------------------------------------------------------------------------------------------------+
   [ Defined Problem: How Might We...? ]
                  \\
                   \\   DIVERGENT PHASE (Generate 100+ Ideas)
                    \\  - SCAMPER Prompts
                     \\ - Six Thinking Hats (Green Hat)
                      \\- Crazy 8s & Brainwriting
                       +---------------------------------------+
                       |       RAW IDEA REPOSITORY             |
                       +---------------------------------------+
                      /
                     /  CONVERGENT FILTERING & SCREENING
                    /   - Dot Voting & 2x2 Impact-Effort Matrix
                   /    - Six-Dimensional Feasibility Gauntlet:
                  /       * Technical Feasibility   (Score /10)
                          * Economic Feasibility    (Score /10)
                          * Market Feasibility      (Score /10)
                          * Operational Feasibility (Score /10)
                          * Legal Feasibility       (Score /10)
                          * Ethical Feasibility     (Score /10)
                 v
   [ 1-2 WINNING CONCEPTS SELECTED FOR PROOF OF CONCEPT (PoC) ]
+---------------------------------------------------------------------------------------------------+`,
    realWorldApplication: "Automotive engineering applying SCAMPER: (S) Substitute steel with lightweight carbon fiber composites; (C) Combine daytime running lights with turn indicators; (E) Eliminate mechanical side mirrors and substitute with aerodynamic digital cameras.",
    caseStudy: "Dyson Bladeless Fan (Air Multiplier): Sir James Dyson applied SCAMPER's 'Eliminate' prompt to remove fast-spinning buffeting fan blades. He applied 'Adapt' by taking air induction principles from jet turbochargers and fluid mechanics, creating an ultra-safe, whisper-quiet, premium consumer product.",
    advantages: [
      "SCAMPER systematically forces teams to explore non-obvious design pathways.",
      "Multi-dimensional feasibility prevents expensive engineering pet projects from advancing into prototypes without market or legal viability.",
      "Ensures transparent, quantifiable consensus among engineering, design, and management stakeholders."
    ],
    limitations: [
      "Can generate unrealistic concepts if divergent thinking is not bounded by physical first principles.",
      "Feasibility estimates at the concept stage carry uncertainty until physical bench testing occurs."
    ],
    formulas: [
      {
        name: "Overall Feasibility Index (OFI)",
        formula: "OFI = SUM(Weight_i * Score_i) for i in [Tech, Econ, Mkt, Ops, Leg, Eth]",
        explanation: "Composite feasibility score where weights sum to 1.0 (concepts with OFI < 7.0 or any single score < 5.0 are rejected)."
      }
    ],
    keywords: ["SCAMPER", "Divergence", "Convergence", "Feasibility Study", "Decision Matrix", "Air Multiplier", "OFI"],
    threeMarkAnswer: {
      question: "Expand SCAMPER and explain any two of its prompts with examples.",
      answer: "SCAMPER stands for Substitute, Combine, Adapt, Modify/Magnify, Put to another use, Eliminate, and Reverse/Rearrange. Two prompts: (1) Eliminate: Removing unnecessary elements to simplify the design (e.g., Apple removing the 3.5mm headphone jack to improve water resistance and battery volume). (2) Combine: Merging two separate capabilities into one synergistic product (e.g., combining a smartphone camera with an optical character recognition algorithm to scan receipts).",
      keyPoints: [
        "Full expansion of SCAMPER acronym",
        "Eliminate explained with clean real example",
        "Combine explained with synergistic example"
      ]
    },
    nineMarkAnswer: {
      question: "Discuss the role of divergent and convergent thinking in product ideation. Detail the SCAMPER technique and explain the six dimensions of feasibility assessment required before developing a Proof of Concept.",
      answer: "Innovation is born through disciplined creative alternation...",
      breakdown: [
        { section: "Divergent vs Convergent Dynamics", content: "Explaining the cognitive mechanics of generating variety versus selecting value. Psychological safety and deferred judgment." },
        { section: "SCAMPER in Engineering Design", content: "Exhaustive breakdown of S, C, A, M, P, E, R with engineering examples from automotive, consumer tech, and medical devices." },
        { section: "The Six Dimensions of Feasibility", content: "Technical (TRL, power, thermal), Economic (Target BOM, unit margins, tooling CapEx), Market (TAM/SAM/SOM, competition), Operational (supply chain, assembly skills), Legal (FTO, patents, compliance), Ethical (bias, e-waste, user safety)." },
        { section: "Weighted Decision Matrix Implementation", content: "Scoring rubrics, normalization of weights, threshold setting, and risk gating." }
      ]
    },
    vivaQnA: [
      { question: "What is 'Freedom to Operate' (FTO) in legal feasibility?", answer: "An FTO analysis assesses whether commercializing a proposed product will infringe any valid, active patents owned by third parties in the target jurisdictions." },
      { question: "How does 'Crazy 8s' work during ideation?", answer: "A fast-paced sketching exercise where each participant must sketch 8 distinct ideas in 8 minutes (1 minute per sketch) to move past early, cliché concepts." },
      { question: "What is the primary danger of evaluating economic feasibility only after detailed design?", answer: "Sunk costs and engineering lock-in; if the BOM cost exceeds market willingness to pay, the product must be completely redesigned from scratch." }
    ]
  },

  // ==========================================
  // MODULE 4 NOTES
  // ==========================================
  {
    id: "note-m4-dfmea-prototyping",
    topicNumber: 10,
    title: "DFMEA, Alpha/Beta Prototyping & Pilot Build",
    moduleNumber: 4,
    definition: "Design Failure Mode and Effects Analysis (DFMEA) is a systematic, proactive analytical methodology used by engineering teams to identify potential design vulnerabilities, evaluate their failure effects, and prioritize risk reduction using the Risk Priority Number (RPN = Severity × Occurrence × Detection). An Alpha Prototype is an early 'works-like' functional unit tested in laboratory conditions. A Beta Prototype is a production-intent 'works-like and looks-like' unit tested by end-users in real operating environments. A Pilot Build is a controlled pre-production manufacturing run (typically 50-500 units) to validate manufacturing lines, assembly fixtures, and quality control yields.",
    detailedExplanation: "Designing a product that functions once on a clean laboratory bench is fundamentally different from mass-producing 50,000 units with 99.5% yield. DFMEA enforces preventive engineering: engineers analyze every sub-assembly, assign Severity (1-10) of consequence, estimate Occurrence frequency (1-10), and evaluate Detection capability (1-10). High RPN items must undergo design remediation. Simultaneously, prototyping must advance strictly through graduated stages: Proof of Concept -> Alpha Prototype (validating engineering specs and thermal/electrical loads) -> Beta Prototype (validating tooling, ergonomic enclosures, and field durability) -> Pilot Build (validating tact time, automated optical inspection, and vendor tolerances).",
    importantConcepts: [
      "RPN Calculation: Severity (S) × Occurrence (O) × Detection (D), ranging from 1 to 1000.",
      "Severity (S): Seriousness of the failure effect on customer safety or system integrity (10 = catastrophic hazard without warning).",
      "Occurrence (O): Likelihood that a specific root cause will manifest during operating life.",
      "Detection (D): Capability of current design controls/tests to detect the defect before release (10 = no detection mechanism; 1 = foolproof automated test).",
      "Alpha vs Beta Distinction: Alpha = Internal lab verification of specs; Beta = External end-user validation of real-world durability and usability.",
      "Pilot Build Objectives: Verifying Line Yield (%), First Pass Yield (FPY), cycle times, and establishing Work Instruction Sheets (WIS)."
    ],
    diagramDescription: "DFMEA Process Flow and Prototype Progression Pipeline",
    asciiDiagram: `
+---------------------------------------------------------------------------------------------------+
|                        DFMEA & PROTOTYPE MATURATION PIPELINE                                      |
+---------------------------------------------------------------------------------------------------+
  [ SYSTEM CAD / SCHEMATICS ] ---> DFMEA Risk Identification
                                          |
                                          v
                   +---------------------------------------------+
                   | Assign: Severity (S), Occurrence (O),       |
                   |         Detection (D) -> RPN = S x O x D    |
                   +---------------------------------------------+
                                          |
                   [ High RPN? (> 100 or S >= 8) ]
                                          |-- YES --> Redesign (Poka-Yoke, Fail-Safe, New Materials)
                                          v
                                          NO
                                          |
  [ PROTOTYPING GATES ] ------------------+
    * ALPHA PROTOTYPE : 3D printed / CNC lab unit -> Verify Electrical, Thermal & Mechanical Limits
    * BETA PROTOTYPE  : Tooling-intent PCBA & Moldings -> Field Testing with Alpha Customers
    * PILOT BUILD     : 50-250 units on actual factory line -> First Pass Yield & AOI Optimization
                                          |
                                          v
  [ FULL PRODUCTION RAMP ] --------------> Commercial Distribution & ISO 9001 Compliance
+---------------------------------------------------------------------------------------------------+`,
    realWorldApplication: "Smart wearable fitness band: DFMEA revealed a critical failure mode where moisture ingress through the micro-USB charging port caused board corrosion (S=8, O=7, D=6 -> RPN=336). The design team replaced the USB port with magnetic pogo pins and ultrasonically welded the enclosure, reducing Occurrence to 1 and Detection to 2 (New RPN = 8 x 1 x 2 = 16).",
    caseStudy: "Samsung Galaxy Note 7 Battery Thermal Runaway: A tragic omission in design tolerance and internal casing margin allowed pouch battery expansion during normal fast charging, causing separator punctures and explosive fires. The resulting global recall cost over $5.3 billion and necessitated the establishment of Samsung's rigorous 8-point battery safety check protocol.",
    advantages: [
      "Prevents catastrophic product recalls, legal liability, and brand degradation.",
      "Directs engineering resources towards the highest real-world failure vulnerabilities.",
      "Validates mass manufacturability before spending hundreds of thousands of dollars on steel injection molds."
    ],
    limitations: [
      "Subjective scoring of S, O, and D if historical failure databases are absent.",
      "High-mix low-volume products may find pilot tooling costs economically burdensome."
    ],
    formulas: [
      {
        name: "Risk Priority Number (RPN)",
        formula: "RPN = S * O * D",
        explanation: "Product of Severity (1-10), Occurrence (1-10), and Detection (1-10)."
      },
      {
        name: "First Pass Yield (FPY)",
        formula: "FPY = (Units Passed Initial Inspection without Rework / Total Units Started) * 100%",
        explanation: "Core efficiency metric evaluated during Pilot Build."
      }
    ],
    keywords: ["DFMEA", "RPN", "Severity", "Occurrence", "Detection", "Alpha Prototype", "Beta Prototype", "Pilot Build", "FPY"],
    threeMarkAnswer: {
      question: "Define DFMEA and state the formula for calculating Risk Priority Number (RPN).",
      answer: "Design Failure Mode and Effects Analysis (DFMEA) is a structured, proactive analytical method utilized during product design to identify potential failure modes, evaluate their causes and consequences, and implement preventative design controls. The Risk Priority Number is calculated as: RPN = Severity (S) × Occurrence (O) × Detection (D), where each parameter is scored on an integer scale from 1 to 10.",
      keyPoints: [
        "Structured proactive engineering risk analysis",
        "Identifies potential failure modes and causes",
        "RPN = Severity × Occurrence × Detection",
        "Scores range from 1 to 1000"
      ]
    },
    nineMarkAnswer: {
      question: "Explain the principles and execution methodology of Design Failure Mode and Effects Analysis (DFMEA). Differentiate between Alpha prototypes, Beta prototypes, and Pilot builds in the product development pipeline.",
      answer: "Reliability and manufacturability must be designed into a product...",
      breakdown: [
        { section: "Principles of DFMEA", content: "Proactive defect prevention. Definition of Failure Mode, Failure Cause, and Failure Effect." },
        { section: "Scoring Criteria for S, O, and D", content: "Detailed 1-10 rubrics for Severity (hazards, degradation), Occurrence (Ppk, historical rates), and Detection (automated testing, human inspection)." },
        { section: "RPN Thresholds & Corrective Actions", content: "Handling RPN > 100 or Severity >= 9. Re-evaluating revised RPN after design mitigation (Poka-Yoke, material change)." },
        { section: "Alpha vs Beta vs Pilot Build Comparison", content: "Comprehensive table comparing Purpose, Environment, Fidelity, Quantities, and Target Audience across Alpha, Beta, and Pilot Build." }
      ]
    },
    vivaQnA: [
      { question: "What should an engineer do if a failure mode has a Severity of 10 but an Occurrence of 1?", answer: "Regardless of low Occurrence or low RPN, any failure mode with Severity 9 or 10 involves critical safety or regulatory compliance and demands immediate mandatory fail-safe design controls." },
      { question: "What is the difference between Verification and Validation in prototyping?", answer: "Verification asks 'Did we build the product right?' (testing against technical SRD specifications); Validation asks 'Did we build the right product?' (testing whether it satisfies customer needs in field use)." },
      { question: "What is Poka-Yoke in Design for Manufacturability?", answer: "A Japanese term meaning 'mistake-proofing'; designing physical geometries (like asymmetric connectors or alignment pins) that make incorrect assembly physically impossible." }
    ]
  }
];

