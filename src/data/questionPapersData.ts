import { ModelQuestionPaper } from "../types";

export const modelQuestionPaper: ModelQuestionPaper = {
  examTitle: "APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY - MODEL QUESTION PAPER",
  courseCode: "GXEST605",
  courseName: "DESIGN THINKING AND PRODUCT DEVELOPMENT",
  semester: "SIXTH SEMESTER B.TECH DEGREE EXAMINATION (2024 SCHEME)",
  maxMarks: 60,
  duration: "2 Hours 30 Minutes",
  partA: {
    partName: "Part A",
    totalMarks: 24,
    instructions: "Answer all questions. Each question carries 3 marks.",
    questions: [
      {
        qNo: 1,
        moduleNo: 1,
        coMapping: "CO1",
        bloomsLevel: "K2 (Understand)",
        marks: 3,
        questionText: "Define Design Thinking and state how it integrates the three lenses of innovation (Desirability, Feasibility, Viability).",
        solutionText: "Design Thinking is an iterative, human-centered problem-solving methodology that seeks to understand user needs, challenge assumptions, and redefine problems to create innovative solutions. It operates at the intersection of three innovation lenses:\n1. Desirability (People): What is humanly desirable and emotionally meaningful to users?\n2. Feasibility (Technology): What is technologically possible and buildable using available engineering science?\n3. Viability (Business): What is economically sustainable and profitable over the product lifecycle?",
        markingScheme: [
          { criterion: "Definition of Design Thinking", marks: 1 },
          { criterion: "Explanation of 3 lenses (Desirability, Feasibility, Viability)", marks: 2 }
        ]
      },
      {
        qNo: 2,
        moduleNo: 1,
        coMapping: "CO1",
        bloomsLevel: "K2 (Understand)",
        marks: 3,
        questionText: "What are the three statutory criteria of patentability under the Patent Act? Explain briefly.",
        solutionText: "To be granted patent protection, an invention must satisfy three criteria:\n1. Novelty: The invention must be entirely new and must not have been published, disclosed, or publicly known anywhere in the world prior to the filing date.\n2. Inventive Step (Non-Obviousness): The technical advancement must not be obvious to a person normally skilled in the relevant art at the time of the invention.\n3. Industrial Applicability: The invention must be capable of being made, replicated, or utilized in any industry or commercial process.",
        markingScheme: [
          { criterion: "Listing the 3 criteria (Novelty, Inventive Step, Industrial Applicability)", marks: 1.5 },
          { criterion: "Brief technical explanation of each", marks: 1.5 }
        ]
      },
      {
        qNo: 3,
        moduleNo: 2,
        coMapping: "CO1",
        bloomsLevel: "K3 (Apply)",
        marks: 3,
        questionText: "State the four primary quadrants of an Empathy Map and explain why 'Says' and 'Thinks' are separated.",
        solutionText: "The four primary quadrants of an Empathy Map are:\n1. SAYS: Verbatim statements spoken aloud by the user during interviews.\n2. THINKS: The user's internal beliefs, worries, hesitations, and unexpressed thoughts.\n3. DOES: Observable physical behaviors, actions, routines, and workarounds.\n4. FEELS: Emotional states, joys, frustrations, anxieties, and moods.\n'Says' and 'Thinks' are separated because social pressure, politeness, and fear of judgment frequently prevent users from stating their genuine worries aloud. Contrasting what users say with what they think reveals critical latent needs.",
        markingScheme: [
          { criterion: "Listing the 4 quadrants", marks: 1.5 },
          { criterion: "Explanation of the divergence between Says and Thinks", marks: 1.5 }
        ]
      },
      {
        qNo: 4,
        moduleNo: 2,
        coMapping: "CO1",
        bloomsLevel: "K2 (Understand)",
        marks: 3,
        questionText: "Explain the formula of a Point of View (POV) statement with a suitable engineering example.",
        solutionText: "The standard formula for a Point of View (POV) problem statement is:\n[User] needs [User's Need] because [Surprising Insight].\nEngineering Example:\n'A rural smallholder vegetable farmer (User) needs an automated soil moisture irrigation valve requiring zero smartphone operation (Need) because handling muddy farm soil with wet hands prevents screen navigation and erratic power outages burn electric pump motors when left unattended (Surprising Insight).'",
        markingScheme: [
          { criterion: "POV Formula structure", marks: 1.5 },
          { criterion: "Realistic engineering context example", marks: 1.5 }
        ]
      },
      {
        qNo: 5,
        moduleNo: 3,
        coMapping: "CO2",
        bloomsLevel: "K2 (Understand)",
        marks: 3,
        questionText: "Expand the acronym SCAMPER and explain how 'Substitute' and 'Eliminate' drive product simplification.",
        solutionText: "SCAMPER stands for Substitute, Combine, Adapt, Modify/Magnify, Put to another use, Eliminate, and Reverse/Rearrange.\n- Substitute: Replaces materials, power sources, or components with superior alternatives (e.g., substituting heavy steel chassis with lightweight recyclable composites to increase EV driving range).\n- Eliminate: Systematically strips away redundant, superfluous components to lower BOM cost and failure points (e.g., eliminating physical audio jacks or mechanical buttons to improve water resistance and simplify assembly).",
        markingScheme: [
          { criterion: "Full expansion of SCAMPER", marks: 1 },
          { criterion: "Substitute with example", marks: 1 },
          { criterion: "Eliminate with example", marks: 1 }
        ]
      },
      {
        qNo: 6,
        moduleNo: 3,
        coMapping: "CO2",
        bloomsLevel: "K3 (Apply)",
        marks: 3,
        questionText: "What are the six dimensions of feasibility evaluated prior to developing a Proof of Concept (PoC)?",
        solutionText: "The six dimensions of feasibility are:\n1. Technical Feasibility: Can it be built within known laws of physics, component limits, and compute power?\n2. Economic Feasibility: Are BOM costs, tooling CapEx, and profit margins financially sustainable?\n3. Market Feasibility: Is there verified customer demand, market size (TAM/SAM), and willingness to pay?\n4. Operational Feasibility: Can the device be manufactured, distributed, and maintained using existing supply chains?\n5. Legal Feasibility: Does the product have Freedom to Operate (FTO) without infringing third-party patents or safety laws?\n6. Ethical Feasibility: Does the product protect privacy, avoid discriminatory bias, and prevent electronic waste?",
        markingScheme: [
          { criterion: "Listing all 6 dimensions", marks: 1.5 },
          { criterion: "Brief explanation of each", marks: 1.5 }
        ]
      },
      {
        qNo: 7,
        moduleNo: 4,
        coMapping: "CO4",
        bloomsLevel: "K2 (Understand)",
        marks: 3,
        questionText: "Differentiate between an Alpha Prototype and a Beta Prototype in product development.",
        solutionText: "Key Differences between Alpha and Beta Prototypes:\n1. Purpose: Alpha verifies engineering functionality ('works-like') in controlled laboratory settings; Beta validates real-world usability and ergonomics ('looks-like and works-like') with actual end-users in field conditions.\n2. Fabrication: Alpha uses rapid prototyping (3D printing, milled PCBs, development boards); Beta uses production-intent tooling (injection molding, SMT production PCBs).\n3. Testing Environment: Alpha is tested internally by engineers; Beta is tested externally by target customers and field trial partners.",
        markingScheme: [
          { criterion: "Purpose comparison", marks: 1 },
          { criterion: "Fabrication comparison", marks: 1 },
          { criterion: "Testing environment comparison", marks: 1 }
        ]
      },
      {
        qNo: 8,
        moduleNo: 4,
        coMapping: "CO4",
        bloomsLevel: "K3 (Apply)",
        marks: 3,
        questionText: "State the formula for calculating Risk Priority Number (RPN) in DFMEA. What action is required if Severity is 10?",
        solutionText: "Risk Priority Number (RPN) is calculated as:\nRPN = Severity (S) × Occurrence (O) × Detection (D)\nwhere S, O, and D are scored on an integer scale from 1 to 10.\nAction for Severity = 10:\nA Severity score of 10 indicates a catastrophic failure mode involving customer death, severe injury, or non-compliance with statutory safety regulations without warning. Under international engineering standards (AIAG-VDA), any failure mode with Severity 9 or 10 mandates immediate, compulsory engineering redesign (such as hardware fail-safe interlocks or physical isolation), regardless of whether its Occurrence or overall RPN is low.",
        markingScheme: [
          { criterion: "RPN formula and parameter range", marks: 1.5 },
          { criterion: "Mandatory redesign rule for Severity 10", marks: 1.5 }
        ]
      }
    ]
  },
  partB: {
    partName: "Part B",
    totalMarks: 36,
    instructions: "Answer one full question from each module. Each question carries 9 marks.",
    questions: [
      // ---------------- MODULE 1 ----------------
      {
        qNo: 9,
        moduleNo: 1,
        coMapping: "CO1",
        bloomsLevel: "K5 (Evaluate)",
        marks: 9,
        questionText: "Deconstruct the 9 Technology Readiness Levels (TRL) developed by NASA. Explain how TRL progression aligns with Stage-Gate governance and strategic patent filing timing.",
        subDivisions: [
          {
            subLabel: "a",
            marks: 4.5,
            text: "Explain the 9 TRL levels and group them into Research, Development, and Deployment phases.",
            answerText: "NASA 9-Level TRL Hierarchy:\n- Research Phase (TRL 1-3): TRL 1 (Basic principles observed), TRL 2 (Technology concept formulated), TRL 3 (Analytical and experimental proof of concept).\n- Development Phase (TRL 4-6): TRL 4 (Component validation in lab environment), TRL 5 (Component validation in relevant environment), TRL 6 (System/subsystem model or prototype demonstration in a relevant environment - Alpha Prototype).\n- Deployment Phase (TRL 7-9): TRL 7 (Integrated prototype demonstration in operational environment - Beta Prototype), TRL 8 (Actual system completed and qualified through test and demonstration - Pilot Build), TRL 9 (Actual system proven through successful mission/market operations - Mass Production)."
          },
          {
            subLabel: "b",
            marks: 4.5,
            text: "Analyze the strategic timing of patent filing across TRL progression and discuss the risks of premature vs delayed filing.",
            answerText: "Strategic Patent Timing across TRLs:\n- Premature Filing (TRL 1-2): Filing at theoretical conceptualization risks rejection under Section 10 of the Patent Act for lack of enablement (insufficient practical instructions for replication), and requires costly revisions if engineering architecture changes.\n- Optimal Filing Sweet Spot (TRL 4-5): At TRL 4-5, benchtop proof exists, experimental data proves non-obviousness, and exact technical claims can be supported. A provisional patent should be filed before field trials begin.\n- Delayed Filing (TRL 7-9): Delaying past TRL 6 introduces fatal risk of loss of novelty: public field testing or exhibitions without NDAs constitute prior art against the inventor's own application under the first-to-file rule."
          }
        ],
        solutionText: "Detailed answer covering all 9 TRL levels and patent timing analysis.",
        markingScheme: [
          { criterion: "Accurate explanation of TRL 1 to 9 levels", marks: 4.5 },
          { criterion: "Analysis of patent filing timing and risks", marks: 4.5 }
        ]
      },
      {
        qNo: 10,
        moduleNo: 1,
        coMapping: "CO1",
        bloomsLevel: "K5 (Evaluate)",
        marks: 9,
        questionText: "Discuss the three dimensions of sustainability (Environmental, Economic, Social) in product development. Illustrate how Human-Centered Design bridges social divides using an appropriate industrial case study.",
        subDivisions: [
          {
            subLabel: "a",
            marks: 4.5,
            text: "Explain the Triple Bottom Line framework (People, Planet, Profit) with specific engineering design strategies for each dimension.",
            answerText: "Triple Bottom Line in Product Design:\n1. Environmental Sustainability (Planet): Designing for Circular Economy, reducing carbon footprint, using biodegradable or recycled polymers, eliminating hazardous substances (RoHS compliance), and designing modular disassembly for e-waste recycling.\n2. Economic Sustainability (Profit): Designing to cost, ensuring fair supplier contracts, achieving positive unit economics, ensuring affordable total cost of ownership (TCO), and creating viable commercial business models.\n3. Social Sustainability (People): Universal accessibility, designing for diverse physical and cognitive abilities, respecting labor safety on production lines, and bringing social equity to marginalized communities."
          },
          {
            subLabel: "b",
            marks: 4.5,
            text: "Explain how Human-Centered Design bridges social divides using the Embrace Infant Warmer or Piramal Sarvajal Water ATM case study.",
            answerText: "Case Study Analysis - Embrace Infant Warmer:\n- The Divide: Traditional neonatal incubators cost $20,000, require continuous electricity, and are located in urban tertiary hospitals, leaving rural hypothermic babies stranded.\n- HCD Immersion: Stanford design team lived in rural Nepal clinics. Discovered that rural mothers could not travel to hospitals and villages had 14-hour daily blackouts.\n- Solution: Redesigned the product as an intuitive sleeping bag containing a wax-like phase-change material pouch that melts in boiling water and keeps an infant at safe 37°C for 6 hours without electricity.\n- Impact: Saved over 350,000 low-birth-weight infants across 22 countries, costing less than $200 (1% of incubator cost), perfectly bridging the socio-economic and rural-urban healthcare divide."
          }
        ],
        solutionText: "Comprehensive evaluation of sustainability dimensions and HCD case study.",
        markingScheme: [
          { criterion: "Triple Bottom Line explanation with design strategies", marks: 4.5 },
          { criterion: "HCD case study deconstruction and social impact analysis", marks: 4.5 }
        ]
      },

      // ---------------- MODULE 2 ----------------
      {
        qNo: 11,
        moduleNo: 2,
        coMapping: "CO1",
        bloomsLevel: "K5 (Evaluate)",
        marks: 9,
        questionText: "Explain the complete methodology of the Empathize phase in Design Thinking. Illustrate how an Empathy Map, Customer Journey Map, and 5 Whys analysis synthesize into a validated Problem Statement.",
        subDivisions: [
          {
            subLabel: "a",
            marks: 5,
            text: "Describe the construction of an Empathy Map and a Customer Journey Map, highlighting how emotional valleys identify design opportunities.",
            answerText: "Empathy Mapping and Customer Journey Mapping:\n- Empathy Map: A 6-section quadrant tool capturing Says, Thinks, Does, Feels, Pains, and Gains. The design team identifies cognitive dissonance between what the user says and what they actually do, exposing unspoken frustrations.\n- Customer Journey Map (CJM): A chronological timeline plotting user interaction stages (Pre-service, Service, Post-service). At each stage, the team maps touchpoints, user thoughts, and an emotional valence curve (-5 to +5).\n- Identifying Opportunities: Moments where the emotional curve drops into deep negative valleys (e.g., waiting 45 minutes in line or failing to read unlabelled medicine bottles) represent peak user pain and pinpoint the highest-leverage opportunities for innovative product disruption."
          },
          {
            subLabel: "b",
            marks: 4,
            text: "Demonstrate a complete 5 Whys root-cause interrogation on an engineering problem, leading to a Point of View (POV) statement.",
            answerText: "5 Whys and POV Synthesis on an Electric Vehicle Breakdown:\n- Symptom: EV scooter suddenly shuts down while climbing an incline.\n- Why 1: Battery thermal protection relay tripped.\n- Why 2: Battery pack temperature exceeded 60°C.\n- Why 3: Internal cooling air vents were blocked by mud.\n- Why 4: The air intake vents were placed directly behind the front wheel splash zone.\n- Why 5 (Root Cause): The CAD team placed the air intake based on aerodynamic wind tunnel data without conducting real-world unpaved muddy road field testing.\n- Synthesized POV Statement: 'Urban and semi-urban commuter riders need an enclosed, sealed thermal dissipation architecture that operates without exposed air intakes because monsoon mud splashes completely clog exposed air vents, causing dangerous mid-climb motor shutdowns.'"
          }
        ],
        solutionText: "Complete deconstruction of empathy tools and synthesis into problem statements.",
        markingScheme: [
          { criterion: "Empathy Map and Customer Journey Map methodology", marks: 5 },
          { criterion: "5 Whys analysis and synthesized POV statement", marks: 4 }
        ]
      },
      {
        qNo: 12,
        moduleNo: 2,
        coMapping: "CO1",
        bloomsLevel: "K5 (Evaluate)",
        marks: 9,
        questionText: "Discuss the methods of the Define phase. Explain the role of Personas, Storytelling, Critical Items Diagrams, and defining quantitative success metrics in engineering design.",
        subDivisions: [
          {
            subLabel: "a",
            marks: 4.5,
            text: "Explain the development and structure of a user Persona, and how Storytelling communicates complex user struggles to technical teams.",
            answerText: "Personas and Storytelling in Product Definition:\n- User Persona: A semi-fictional archetype based on qualitative field data representing a target segment. Contains Demographics, Archetype Title, Quote, Core Goals, Frustrations, and Technology Savviness. Personas prevent 'developer bias' and prevent the 'elastic user' syndrome during engineering debates.\n- Storytelling: Human brains are wired for narrative. Storytelling frames an engineering problem as a hero's journey: introducing the persona (hero), the obstacle/villain (pain point/inefficiency), the crisis (moment of failure), the magical enabler (the proposed product), and the transformed future state. This unites hardware, software, and management stakeholders behind a shared human mission."
          },
          {
            subLabel: "b",
            marks: 4.5,
            text: "Explain Critical Items Diagrams and how engineering teams define quantitative success metrics (KPIs / OKRs).",
            answerText: "Critical Items Diagrams and Success Metrics:\n- Critical Items Diagram: A visual hierarchy diagram that separates non-negotiable mission-critical constraints (must-haves) from secondary desirable features (nice-to-haves). It establishes dependency trees, showing which component failures will paralyze the product.\n- Defining Success Metrics: Converting ambiguous user desires into objective engineering acceptance criteria using SMART parameters:\n  * E.g., User need 'Fast charging' -> Engineering KPI: 'Charge battery from 10% to 80% in <= 28 minutes at 35°C ambient temperature without cell temperature exceeding 45°C'.\n  * E.g., User need 'Easy to carry' -> Engineering KPI: 'Total system mass <= 1.85 kg and folded dimensions <= 30cm x 15cm x 8cm'."
          }
        ],
        solutionText: "Detailed explanation of Define phase tools, personas, storytelling, and quantitative KPIs.",
        markingScheme: [
          { criterion: "Persona structure and narrative storytelling role", marks: 4.5 },
          { criterion: "Critical items diagrams and SMART engineering success metrics", marks: 4.5 }
        ]
      },

      // ---------------- MODULE 3 ----------------
      {
        qNo: 13,
        moduleNo: 3,
        coMapping: "CO2",
        bloomsLevel: "K6 (Create)",
        marks: 9,
        questionText: "Discuss the mechanics of divergent and convergent thinking in product ideation. Detail the SCAMPER technique and explain the Six Thinking Hats method for concept evaluation.",
        subDivisions: [
          {
            subLabel: "a",
            marks: 4.5,
            text: "Explain the divergent-convergent thinking cycle and demonstrate all 7 prompts of SCAMPER on an everyday product.",
            answerText: "Divergent vs Convergent Thinking and SCAMPER:\n- Divergence generates a wide, wild quantity of options without judgment; Convergence filters and selects the most viable options using analytical criteria.\n- SCAMPER demonstrated on an Electric Two-Wheeler Commuter:\n  * S (Substitute): Substitute steel chassis with recycled aluminum composite.\n  * C (Combine): Combine helmet storage box with inductive helmet-charging coils.\n  * A (Adapt): Adapt regenerative braking energy capture from electric trains for urban stop-and-go traffic.\n  * M (Modify/Magnify): Magnify digital instrument cluster to heads-up display projection on helmet visor.\n  * P (Put to another use): Use parked vehicle as a home emergency power backup during grid power blackouts.\n  * E (Eliminate): Eliminate mechanical key and ignition barrel; operate via smartphone BLE proximity.\n  * R (Reverse/Rearrange): Rearrange battery to be hot-swappable from the side rather than fixed under the seat."
          },
          {
            subLabel: "b",
            marks: 4.5,
            text: "Explain Edward de Bono's Six Thinking Hats method and how it eliminates confrontational debate during concept convergence.",
            answerText: "Edward de Bono's Six Thinking Hats:\n- White Hat: Neutral objective facts, sensor data, and test numbers.\n- Red Hat: Emotional gut reactions, intuition, and feelings without justification.\n- Black Hat: Critical judgment, caution, safety risks, legal hazards, and potential failure points.\n- Yellow Hat: Optimism, logical benefits, value creation, and economic upside.\n- Green Hat: Creative out-of-the-box thinking, alternatives, and innovative workarounds to Black Hat risks.\n- Blue Hat: Metacognitive process control, agenda setting, and synthesis.\n- Eliminating Adversarial Debate: Rather than Engineer A defending an idea while Engineer B attacks it, the entire multidisciplinary team wears the same hat simultaneously (Parallel Thinking), channeling cognitive power constructively."
          }
        ],
        solutionText: "Comprehensive treatment of divergent-convergent dynamics, SCAMPER, and Six Thinking Hats.",
        markingScheme: [
          { criterion: "Divergence/convergence cycle and SCAMPER demonstration", marks: 4.5 },
          { criterion: "Six Thinking Hats role breakdown and parallel thinking benefits", marks: 4.5 }
        ]
      },
      {
        qNo: 14,
        moduleNo: 3,
        coMapping: "CO4",
        bloomsLevel: "K4 (Analyse)",
        marks: 9,
        questionText: "Explain the objectives, risk assessment, and validation procedures required in developing a Proof of Concept (PoC). How does storytelling enhance the final PoC presentation?",
        subDivisions: [
          {
            subLabel: "a",
            marks: 5,
            text: "Detail the step-by-step methodology of designing, building, and validating a Proof of Concept (PoC), including risk management.",
            answerText: "PoC Development and Validation Methodology:\n1. Setting Objectives: Formulate narrow, testable technical hypotheses (e.g., 'Can an optical pulse sensor measure heart rate through a wet silicone membrane?').\n2. Technology Scouting: Identifying and sourcing commercial off-the-shelf (COTS) dev boards (ESP32, Arduino), breakout sensors, and open-source libraries to avoid premature custom fabrication.\n3. Risk Assessment Matrix: Mapping potential failure modes on a Likelihood vs Consequence grid, establishing proactive engineering mitigations for high-risk hazards.\n4. Document and Change Management: Version-controlling all schematics, breadboard wiring photos, and firmware repositories; documenting Engineering Change Orders (ECO) when hypotheses fail.\n5. Validating PoC: Executing quantitative pass/fail bench tests against target SRD criteria (e.g. measuring signal-to-noise ratio, power consumption, latency)."
          },
          {
            subLabel: "b",
            marks: 4,
            text: "Explain the role of narrative storytelling in pitching and presenting a technical PoC to non-technical stakeholders and investors.",
            answerText: "Storytelling in PoC Presentation:\n- The Technical Pitfall: Engineers often bore stakeholders by opening with circuit schematics, pinout tables, and lines of code, failing to communicate why the technology matters.\n- Narrative Arc: Effective PoC storytelling frames the presentation around the human user: (1) Hook: Empathy story of a real user suffering a crisis; (2) The Villain: The technical bottleneck that stopped existing solutions; (3) The Demonstration: The physical working PoC in action, proving that the barrier is conquered; (4) The Transformation: The quantifiable metric improvement (e.g., 'Reduces patient wait time from 4 hours to 8 minutes'); (5) The Call to Action: The roadmap to detailed design and pilot manufacturing."
          }
        ],
        solutionText: "Exhaustive analysis of PoC methodology, risk matrices, and stakeholder presentation storytelling.",
        markingScheme: [
          { criterion: "PoC methodology, technology scouting, and validation gates", marks: 5 },
          { criterion: "Storytelling structure and stakeholder communication", marks: 4 }
        ]
      },

      // ---------------- MODULE 4 ----------------
      {
        qNo: 15,
        moduleNo: 4,
        coMapping: "CO4",
        bloomsLevel: "K4 (Analyse)",
        marks: 9,
        questionText: "Explain the structure and principles of Design Failure Mode and Effects Analysis (DFMEA). Formulate a complete DFMEA table for an IoT medical device and calculate baseline and revised RPN values.",
        subDivisions: [
          {
            subLabel: "a",
            marks: 4.5,
            text: "Explain the definitions and 1-10 scoring rubrics for Severity (S), Occurrence (O), and Detection (D) in DFMEA.",
            answerText: "DFMEA Parameters and Scoring Rubrics:\n- Severity (S: 1-10): Assesses the impact of the failure on customer safety and system integrity. S=1 (No effect); S=5 (Moderate customer annoyance, partial degradation); S=8 (Primary function inoperable); S=9/10 (Hazardous safety risk or regulatory violation without/with warning).\n- Occurrence (O: 1-10): Estimates the probability that the specific failure cause will occur during operational life. O=1 (Extremely remote, failure rate < 1 in 1,000,000); O=5 (Moderate, ~1 in 2,000); O=10 (Very high, failure almost inevitable, > 1 in 10).\n- Detection (D: 1-10): Assesses the ability of design verification controls to detect the weakness before release. D=1 (Certain detection via automated foolproof inspection); D=5 (Moderate chance via laboratory testing); D=10 (No inspection mechanism, defect cannot be detected before release)."
          },
          {
            subLabel: "b",
            marks: 4.5,
            text: "Construct a DFMEA table with 2 distinct failure modes, calculate initial RPN, define engineering countermeasures, and compute revised RPN.",
            answerText: "DFMEA Table Example (Smart Portable Infusion Pump):\n1. Failure Mode 1: Motor driver MOSFET thermal latch-up causing continuous drug infusion.\n   - Cause: Inadequate thermal dissipation heatsink area under high ambient room temperature.\n   - Effect: Fatal drug overdose administered to patient.\n   - Initial Scores: S = 10, O = 4, D = 5 -> Initial RPN = 10 * 4 * 5 = 200 (UNACCEPTABLE).\n   - Countermeasure: Added a secondary independent hardware over-temperature cutoff switch + dual redundant current-limiting fuse.\n   - Revised Scores: S = 10, O = 1, D = 2 -> Revised RPN = 10 * 1 * 2 = 20 (90% risk reduction).\n2. Failure Mode 2: Peristaltic silicone tube pinches, reducing flow rate.\n   - Cause: Operator misaligns tubing inside pump door latch.\n   - Effect: Inadequate medicine dosage delivered.\n   - Initial Scores: S = 7, O = 6, D = 4 -> Initial RPN = 7 * 6 * 4 = 168 (UNACCEPTABLE).\n   - Countermeasure: Poka-Yoke asymmetric channel geometry making incorrect tubing insertion physically impossible + optical bubble sensor.\n   - Revised Scores: S = 7, O = 1, D = 2 -> Revised RPN = 7 * 1 * 2 = 14 (91.7% risk reduction)."
          }
        ],
        solutionText: "Detailed explanation of DFMEA rubrics, formulas, and real medical device table with RPN recalculations.",
        markingScheme: [
          { criterion: "S, O, D definitions and 1-10 scoring scales", marks: 4.5 },
          { criterion: "DFMEA table with 2 failure modes, mitigations, and RPN calculations", marks: 4.5 }
        ]
      },
      {
        qNo: 16,
        moduleNo: 4,
        coMapping: "CO4",
        bloomsLevel: "K4 (Analyse)",
        marks: 9,
        questionText: "Discuss the execution and testing procedures in a Pilot Build. Explain the criteria for selecting manufacturing partners and the strategies for scaling from pilot build to full-scale production.",
        subDivisions: [
          {
            subLabel: "a",
            marks: 4.5,
            text: "Define Pilot Build, state its primary objectives, and explain the testing procedures (AOI, ICT, Burn-in) conducted during the build.",
            answerText: "Pilot Build Definition, Objectives, and Testing:\n- Definition: A pre-production manufacturing run of 50 to 500 units executed on the actual commercial production line by regular factory operators.\n- Primary Objectives: (1) Validate production tooling and fixtures; (2) Verify assembly tact time and identify assembly bottlenecks; (3) Measure and optimize First Pass Yield (FPY >= 95%); (4) Finalize operator Work Instruction Sheets (WIS).\n- Testing Procedures Conducted:\n  * Automated Optical Inspection (AOI): High-speed automated camera inspection checking SMT component placement, polarity, missing parts, and solder bridges.\n  * In-Circuit Testing (ICT): Bed-of-nails fixture probing individual test pads to verify component values, shorts, and opens before applying main power.\n  * Burn-In & Thermal Cycling: Operating units under elevated voltage and temperature (50°C) for 48 to 168 hours to trigger and purge component infant mortality."
          },
          {
            subLabel: "b",
            marks: 4.5,
            text: "Explain the partner selection criteria for manufacturing vendors and the strategies required for scaling to full volume production.",
            answerText: "Manufacturing Partner Selection and Scaling Strategies:\n- Vendor Selection Criteria:\n  * Quality Management Certifications (ISO 9001 for general, ISO 13485 for medical, IATF 16949 for automotive).\n  * Technical Capabilities: SMT line precision, 0201 component placement capability, automated testing facilities.\n  * Scalability & Capacity: Ability to ramp from 100 pilot units to 10,000 monthly units without sub-contracting.\n  * Intellectual Property Protection: Proven security controls, strict non-disclosure agreements (NDAs), and ethical reputation.\n- Scaling Strategies:\n  * Establishing multiple qualified component sources (second-sourcing) for all active ICs to prevent supply chain disruption.\n  * Implementing statistical process control (SPC) tracking Cpk and Ppk indices on critical assembly tolerances.\n  * Transitioning from soft rapid tooling to hardened multi-cavity steel injection molds to minimize per-part unit cost."
          }
        ],
        solutionText: "Complete deconstruction of pilot build objectives, testing regimes, vendor evaluation, and volume scaling.",
        markingScheme: [
          { criterion: "Pilot build definition, objectives, and test regimes (AOI/ICT/Burn-in)", marks: 4.5 },
          { criterion: "Partner selection criteria and mass scaling strategies", marks: 4.5 }
        ]
      }
    ]
  }
};

