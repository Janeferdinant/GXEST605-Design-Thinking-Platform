import { PracticalExperiment } from "../types";

export const experimentsData: PracticalExperiment[] = [
  {
    experimentNumber: 1,
    title: "Design Thinking Lifecycle Demonstration & Exploration",
    moduleLink: 1,
    coMapping: ["CO1", "CO2", "CO3"],
    aim: "To demonstrate and simulate the complete 5-stage iterative Design Thinking lifecycle (Empathize, Define, Ideate, Prototype, Test) on a real-world municipal solid waste segregation challenge.",
    requirements: [
      "Whiteboard / Digital Canvas (Miro / FigJam)",
      "Design Thinking Lifecycle simulation tool / Platform workbench",
      "Stakeholder persona templates",
      "Timer for stage-gate iterations"
    ],
    theory: "Design Thinking is an iterative, non-linear methodology developed at Stanford d.school that integrates human desirability, technological feasibility, and economic viability. Unlike traditional linear models, it encourages continuous feedback loops between testing and empathy.",
    procedure: [
      "Step 1: Conduct immersion observation of municipal waste workers and household sorters.",
      "Step 2: Synthesize findings to define a core problem statement: 'How Might We automate source-segregation for wet and dry waste?'",
      "Step 3: Execute divergent ideation generating at least 25 concepts across optical, robotic, and incentive-based solutions.",
      "Step 4: Build a low-fidelity cardboard/sensor proof-of-concept prototype.",
      "Step 5: Run user testing with 5 urban apartment residents, gather feedback, and loop back to Define."
    ],
    inputData: "Field interview transcript from 10 Kochi apartment residents, 3 sanitation workers, and Kochi Municipal Corporation bylaws.",
    implementationDetails: "Simulated within the GXEST605 Platform Workbench with interactive stage progression, timer, and artifact generator.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 1. Walk through the 5 circular node gates. Observe how test failure triggers an automated backward loop to redefine the problem statement.",
    expectedOutput: "Completed Design Thinking Canvas containing: 1 Empathy summary, 1 POV statement, 3 selected concepts, 1 prototype sketch, and 1 user feedback grid.",
    result: "Successfully modeled the non-linear iterative Design Thinking lifecycle and verified that early feedback prevents costly manufacturing misalignment.",
    realWorldApplications: [
      "Smart municipal waste sorting appliances",
      "Urban sanitation equipment",
      "Civic technology applications"
    ],
    vivaQuestions: [
      { q: "What are the five official stages of the Stanford d.school Design Thinking model?", a: "Empathize, Define, Ideate, Prototype, and Test." },
      { q: "Is Design Thinking a linear sequential process?", a: "No, it is inherently non-linear and iterative, frequently looping back from testing to empathy or ideation." },
      { q: "What is the primary objective of the Empathize stage?", a: "To gain an empathetic, bias-free understanding of user needs, emotions, and motivations within their natural context." },
      { q: "What is the three-part intersection of innovation in Design Thinking?", a: "Desirability (People), Feasibility (Technology), and Viability (Business)." },
      { q: "What is a 'Point of View' (POV) in the Define stage?", a: "A meaningful, actionable problem statement formulated as: [User] needs [Need] because [Surprising Insight]." },
      { q: "What is the rule regarding judgment during the Ideate stage?", a: "Judgment must be strictly deferred to encourage wild ideas and maximize divergent idea volume." },
      { q: "What is the difference between a low-fidelity and high-fidelity prototype?", a: "Low-fidelity prototypes (e.g. paper, cardboard) are cheap and rapid for concept testing; high-fidelity prototypes (e.g. 3D prints, functional PCBA) test realistic functionality." },
      { q: "Why is failure celebrated in Design Thinking?", a: "Early failure during prototyping is cheap, rapid, and generates vital learning that prevents catastrophic post-launch failure." },
      { q: "What does the Double Diamond design model represent?", a: "Two consecutive phases of Divergence and Convergence: Discover/Define (Problem space) and Develop/Deliver (Solution space)." },
      { q: "What is an extreme user?", a: "Users on the far ends of the adoption spectrum (e.g., severe motor impairment or ultra-expert power users) whose distinct challenges inspire universal solutions." },
      { q: "Who popularized Design Thinking in global business and education?", a: "David Kelley (Stanford d.school / IDEO) and Tim Brown (author of Change by Design)." },
      { q: "What is the role of integrative thinking in Design Thinking?", a: "The ability to hold two opposing models in tension to construct a superior creative alternative." },
      { q: "How does Design Thinking differ from the scientific method?", a: "The scientific method tests existing hypotheses about what is; Design Thinking creates novel generative artifacts about what could be." },
      { q: "What is participatory co-design?", a: "Actively involving end-users and stakeholders as equal partners throughout the design and ideation process." },
      { q: "How does Design Thinking contribute to Sustainable Development Goals (SDGs)?", a: "By explicitly incorporating social equity, circular lifecycle analysis, and environmental impact into early problem definition." }
    ]
  },
  {
    experimentNumber: 2,
    title: "Empathy Mapping Exercise for Target User Segment",
    moduleLink: 2,
    coMapping: ["CO1"],
    aim: "To construct a comprehensive Empathy Map (Says, Thinks, Does, Feels, Pains, Gains) for an elderly diabetic patient managing daily insulin dosages.",
    requirements: [
      "Empathy Map Canvas template (Digital / Print)",
      "Transcripts of 4 contextual patient interviews",
      "Color-coded sticky notes for the 6 quadrants",
      "Audio playback device for interview audio logs"
    ],
    theory: "An Empathy Map synthesizes qualitative field observations into four primary quadrants (Says, Thinks, Does, Feels) anchored by user Pains and Gains. It helps cross-functional engineering teams overcome internal developer biases.",
    procedure: [
      "Step 1: Review interview logs and video recordings of diabetic patients administering daily insulin.",
      "Step 2: Extract direct quotes and place onto the 'SAYS' quadrant.",
      "Step 3: Deduce inner beliefs, doubts, and unspoken concerns; place onto 'THINKS'.",
      "Step 4: Record observed physical movements and workarounds; place onto 'DOES'.",
      "Step 5: Identify emotional states (anxiety, frustration, pride); place onto 'FEELS'.",
      "Step 6: Map out Pains (e.g. needle phobia, dosage calculation errors) and Gains (e.g. painless lifestyle, peace of mind for children)."
    ],
    inputData: "Contextual inquiry of Patient Mr. Jacob (Age 68, Type-2 diabetic, mild tremor, lives alone in Ernakulam).",
    implementationDetails: "Integrated interactive Empathy Map Canvas in the GXEST605 Platform with auto-clustering and sentiment scoring.",
    demonstrationGuide: "Open Platform -> Lab Simulator -> Exp 2. Drag user sticky cards into quadrants. Verify that contradictory sticky notes (Says 'I am fine' vs Does 'Trembles while dialing needle') trigger latent need highlights.",
    expectedOutput: "Completed 6-quadrant Empathy Map with at least 5 verified sticky items per quadrant and 3 extracted latent design insights.",
    result: "Successfully mapped user empathy and identified that manual syringe dialing under tremors is the primary root risk, pointing to an automated haptic-click pen injector design.",
    realWorldApplications: [
      "Assistive medical drug delivery systems",
      "Geriatric consumer electronics",
      "Inclusive mobile healthcare software"
    ],
    vivaQuestions: [
      { q: "What are the six standard sections of a modern Empathy Map?", a: "Says, Thinks, Does, Feels, Pains, and Gains." },
      { q: "Why is it important to capture what the user 'Thinks' separately from what they 'Say'?", a: "Because users often withhold vulnerabilities, embarrassment, or doubts due to social pressure or politeness." },
      { q: "What constitutes a 'Pain' on an Empathy Map?", a: "Fears, frustrations, obstacles, risks, and energy expenditures experienced by the user." },
      { q: "What constitutes a 'Gain' on an Empathy Map?", a: "Hopes, aspirations, definitions of success, and positive emotional payoffs sought by the user." },
      { q: "What is an 'Affinity Diagram' in relation to Empathy Mapping?", a: "A method of clustering individual observational sticky notes into thematic groups based on natural relationships." },
      { q: "How do you prepare for an Empathy Mapping session?", a: "Define clear learning objectives, recruit representative users, prepare open-ended question guides, and secure informed consent." },
      { q: "What activities should take place immediately after an Empathy Mapping session?", a: "Debriefing the team, extracting unexpected contradictions, and formulating actionable How Might We statements." },
      { q: "What is 'Developer Bias' in engineering design?", a: "The false assumption by engineers that end-users possess the same technical skills, eyesight, mental models, and patience as the developers." },
      { q: "Can an Empathy Map be created for a non-human entity?", a: "In environmental design, empathy maps are sometimes adapted for ecosystems or wildlife (e.g., stray cattle or marine life affected by plastic)." },
      { q: "How many users should ideally be interviewed to build a reliable Empathy Map for a segment?", a: "Typically 5 to 10 in-depth qualitative interviews reveal over 80% of major behavioral patterns and pain points." },
      { q: "What is an observational workaround?", a: "A temporary hack or jerry-rigged method improvised by the user because existing products fail to meet their needs." },
      { q: "What is latent need?", a: "A subconscious need that the user experiences but cannot articulate verbally until shown a viable solution." },
      { q: "How does empathy differ from sympathy in product development?", a: "Sympathy is feeling sorry for someone from an external perspective; empathy is actively experiencing and understanding the world from their cognitive shoes." },
      { q: "What role does body language play in filling the 'Feels' quadrant?", a: "Micro-expressions, hesitations, slumped posture, and tone shifts offer authentic cues to emotional distress or satisfaction." },
      { q: "How often should an Empathy Map be updated during product development?", a: "At every major stage-gate review whenever fresh usability testing data is gathered." }
    ]
  },
  {
    experimentNumber: 3,
    title: "User Persona Development & Behavioral Profiling",
    moduleLink: 2,
    coMapping: ["CO1", "CO3"],
    aim: "To construct a high-fidelity, actionable User Persona representing a primary customer segment for a solar-powered agricultural cold storage unit.",
    requirements: [
      "User Persona Canvas template",
      "Demographic and psychographic data tables",
      "Field interview survey data from 20 smallholder vegetable farmers in Palakkad",
      "Persona archetyping guidelines"
    ],
    theory: "A User Persona is a semi-fictional archetype based on verified empirical user research that embodies the demographic traits, behavioral patterns, technical proficiencies, goals, motivations, and frustrations of a target customer segment.",
    procedure: [
      "Step 1: Aggregate quantitative survey data (age, landholding size, crop type, monthly income) across 20 farmers.",
      "Step 2: Identify dominant behavioral clusters using data segmentation.",
      "Step 3: Define personal identifiers: Name, Archetype Title, Demographic Snapshot, and Representative Photo.",
      "Step 4: Articulate specific Core Goals (e.g., prevent tomato distress sales during harvest glut).",
      "Step 5: Document Core Frustrations (e.g., grid power outages lasting 14 hours, predatory middleman commissions).",
      "Step 6: Define Technology Comfort Level, Purchasing Authority, and a personal defining quote."
    ],
    inputData: "Field surveys from Palakkad vegetable farmers: Average age 48, landholding 1.5 acres, monthly agricultural surplus Rs. 14,000, smartphone familiarity low.",
    implementationDetails: "Built-in dynamic Persona Builder in GXEST605 Platform with export to PDF/PNG for engineering sprint rooms.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 3. Select 'Agricultural Segment'. Populate sliders for Tech Savviness, Cost Sensitivity, and Risk Tolerance. Generate persona profile 'Rajan - The Marginal Vegetable Farmer'.",
    expectedOutput: "A complete, audit-ready Persona card with Photo, Quote, Demographics, Bio, 4 Goals, 4 Frustrations, and 3 Design Implications.",
    result: "Successfully established a vivid, data-backed persona that grounds engineering decisions in realistic constraints (e.g., no English UI, pay-per-use financing).",
    realWorldApplications: [
      "Decentralized rural cold chains",
      "Agri-tech machinery interfaces",
      "Micro-finance-enabled farm equipment"
    ],
    vivaQuestions: [
      { q: "What is a User Persona in Design Thinking?", a: "A semi-fictional archetype that represents the key traits, motivations, and behaviors of a distinct target user group based on real data." },
      { q: "Who pioneered the use of personas in software and interaction design?", a: "Alan Cooper in his landmark 1999 book 'The Inmates Are Running the Asylum'." },
      { q: "What is the difference between a proto-persona and a research-based persona?", a: "A proto-persona is created from internal team assumptions without field research; a research-based persona is synthesized from empirical field data." },
      { q: "What are the primary components of an engineering user persona?", a: "Name, demographic background, photo, representative quote, user goals, pain points/frustrations, and technical competence level." },
      { q: "Why should a design team limit the number of primary personas to one or two?", a: "Designing for everyone results in a diluted, convoluted product that satisfies no one; focusing on a primary persona ensures clear architectural trade-offs." },
      { q: "What is a negative or exclusionary persona?", a: "A profile representing users whom the product explicitly chooses NOT to serve (e.g. enterprise industrial farms with dedicated generators)." },
      { q: "What is the danger of relying on demographic data alone without psychographic data?", a: "Two people with identical demographics (e.g. King Charles and Ozzy Osbourne: same age, nationality, income) have radically divergent behavioral motivations." },
      { q: "How do personas prevent 'the elastic user' phenomenon?", a: "They stop engineers from stretching user requirements during debates to suit whatever feature they personally prefer to code or build." },
      { q: "How does a persona directly influence the Product Requirement Document (PRD)?", a: "Features are prioritized based on whether they directly resolve the primary persona's stated goals or mitigate their critical frustrations." },
      { q: "What is a buyer persona versus an end-user persona?", a: "A buyer persona makes the financial purchase decision (e.g., hospital procurement officer); an end-user persona uses the product daily (e.g., nurse)." },
      { q: "Can personas evolve over the product lifecycle?", a: "Yes, as the product enters new market segments or user adoption matures, personas must be updated." },
      { q: "What is the role of an authentic user quote in a persona card?", a: "It provides an immediate emotional anchor that summarizes the user's primary mental attitude and dilemma." },
      { q: "How do you validate whether a persona is accurate?", a: "Reviewing the persona with domain experts, field researchers, and presenting it to actual users for resonance." },
      { q: "What is the empathy multiplier effect of personas?", a: "It enables distant software developers and mechanical designers to debate features referring to a specific human name rather than abstract 'users'." },
      { q: "What is an accessibility persona?", a: "A persona that explicitly incorporates physical, sensory, or cognitive impairments to test universal design compliance." }
    ]
  },
  {
    experimentNumber: 4,
    title: "Customer Journey Mapping (CJM) & Touchpoint Analysis",
    moduleLink: 2,
    coMapping: ["CO1", "CO3"],
    aim: "To map the end-to-end customer journey for a patient booking, consulting, and receiving medicine via a rural telemedicine kiosk, identifying emotional valleys and opportunity zones.",
    requirements: [
      "Customer Journey Map Canvas",
      "Process flow chart of rural clinic telemedicine kiosk",
      "Emotional valence rating scale (-5 to +5)",
      "Touchpoint sticky matrix"
    ],
    theory: "A Customer Journey Map (CJM) is a timeline-based visualization that charts a user's multi-stage interaction with a product or service. By tracking actions, touchpoints, thinking, and emotional curves across stages, teams identify critical pain points ('valleys') that represent prime opportunities for innovative intervention.",
    procedure: [
      "Step 1: Define journey phases: Awareness, Arrival at Kiosk, Registration, Video Consultation, Prescription Generation, Medicine Dispensing.",
      "Step 2: List specific physical and digital touchpoints for each phase (e.g., touch screen, biometric scanner, webcam, receipt printer).",
      "Step 3: Document user actions and expectations at each milestone.",
      "Step 4: Score the emotional experience curve on a -5 (distressed) to +5 (delighted) scale.",
      "Step 5: Identify the deepest emotional dip (e.g., waiting 20 minutes for video call with poor audio bandwidth).",
      "Step 6: Formulate high-leverage innovation opportunities at those critical valleys."
    ],
    inputData: "Observational logs from 15 patients utilizing the Wayanad District Primary Health Centre telemedicine booth.",
    implementationDetails: "Interactive Canvas with dynamic SVG emotional curve graph in the GXEST605 Platform.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 4. Walk through the 6 stages. Drag emotional satisfaction points to generate the live spline curve. View automated Opportunity Cards generated at lowest dips.",
    expectedOutput: "A high-resolution Customer Journey Map depicting 6 phases, 18 touchpoints, an emotional trajectory curve, and 5 prioritized innovation opportunities.",
    result: "Revealed that prescription interpretation and medicine dispensing was the lowest emotional dip (-4), driving the recommendation for automated vernacular audio-guided blister pack dispensing.",
    realWorldApplications: [
      "Healthcare service delivery systems",
      "E-governance kiosk interfaces",
      "Public transportation smart ticketing"
    ],
    vivaQuestions: [
      { q: "What is a Customer Journey Map?", a: "A visual timeline detailing the sequence of steps a customer goes through while interacting with a product or service, tracking their actions, emotions, and touchpoints." },
      { q: "What is a 'touchpoint' in a journey map?", a: "Any point of interaction between the user and the system (e.g., website, mobile notification, hardware button, service technician)." },
      { q: "What does an emotional valence curve illustrate in a CJM?", a: "The psychological trajectory of user delight, neutral satisfaction, or frustration across chronological stages." },
      { q: "What is a 'Moment of Truth' (MoT)?", a: "A pivotal touchpoint where the user's perception of value is decisively won or lost (e.g., onboarding, system crash recovery)." },
      { q: "What are the standard stages of a customer journey?", a: "Awareness, Consideration, Purchase/Onboarding, Usage, Support/Troubleshooting, and Advocacy/Renewal." },
      { q: "What is the difference between front-stage and back-stage processes in service design?", a: "Front-stage processes are visible to the user (e.g. kiosk screen); back-stage processes operate behind the scenes to deliver the experience (e.g. cloud database, pharmacy supply chain)." },
      { q: "Why are emotional valleys in a journey map considered valuable?", a: "They pinpoint exact moments of acute friction, which represent the highest-leverage opportunities for innovative product disruption." },
      { q: "How does a journey map differ from a system workflow diagram?", a: "A system workflow diagram shows technical data flow and logic; a customer journey map centers on human experience, perceptions, and emotions." },
      { q: "What is 'Churn Risk' on a journey map?", a: "The specific stage where user dissatisfaction is so intense that they abandon the product or service permanently." },
      { q: "How can quantitative data be incorporated into a CJM?", a: "By plotting analytics metrics like page drop-off rate, task completion time, and Net Promoter Score (NPS) along each touchpoint." },
      { q: "What is an omni-channel customer journey?", a: "A journey where the user seamlessly transitions across multiple channels (e.g. mobile app, physical store, telephone support) to complete an objective." },
      { q: "Who should participate in a CJM workshop?", a: "A cross-functional team including engineers, designers, customer support representatives, product managers, and actual end-users." },
      { q: "What is the 'peak-end rule' in psychology regarding user experience?", a: "People judge an experience largely based on how they felt at its peak (most intense point) and at its end, rather than the average of every moment." },
      { q: "How does a journey map inform the Specification Requirement Document (SRD)?", a: "Pain points identified on the map are translated into non-negotiable functional and performance requirements in the SRD." },
      { q: "What is an 'as-is' journey map versus a 'to-be' journey map?", a: "An 'as-is' map charts current user struggles with existing systems; a 'to-be' map envisions the idealized future experience delivered by the new product." }
    ]
  },
  {
    experimentNumber: 5,
    title: "5 Whys Root-Cause Problem Analysis",
    moduleLink: 2,
    coMapping: ["CO1"],
    aim: "To conduct a 5 Whys root-cause investigation into repeated premature battery discharge in an automated portable ECG field monitor.",
    requirements: [
      "5 Whys Cause-and-Effect Worksheet",
      "Field failure technician maintenance reports",
      "Fault tree analysis board"
    ],
    theory: "Formulated by Sakichi Toyoda for the Toyota Production System, the 5 Whys technique iteratively asks 'Why?' to peel back surface-level symptoms and uncover the fundamental design, human, or organizational root cause.",
    procedure: [
      "Step 1: Define the specific problem symptom clearly: 'Portable ECG battery dies after only 4 hours instead of rated 16 hours.'",
      "Step 2: Ask Why #1: Why does it discharge quickly? (Display backlight and cellular modem remain fully active continuously).",
      "Step 3: Ask Why #2: Why do they remain active? (The device never enters low-power sleep mode).",
      "Step 4: Ask Why #3: Why doesn't it enter sleep mode? (The micro-controller firmware hangs in a polling loop waiting for GPS lock).",
      "Step 5: Ask Why #4: Why does it wait endlessly for GPS? (GPS signal is absent indoors in concrete clinics, and firmware has no timeout exception).",
      "Step 6: Ask Why #5: Why was no timeout exception written? (The firmware team tested the prototype only in outdoor parking lots and never conducted an indoor clinics test protocol).",
      "Step 7: Formulate the Root-Cause Countermeasure."
    ],
    inputData: "Service logs of 30 portable ECG units returned by rural health workers across Palakkad and Idukki districts.",
    implementationDetails: "Tree-diagram visualizer with interactive branch exploration in the GXEST605 Platform.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 5. Enter problem symptom. Step through the 5 branching questions. Notice how the countermeasure transitions from replacing hardware to robust firmware timeout architecture and test protocols.",
    expectedOutput: "Completed 5 Whys Root-Cause Analysis tree leading to a verifiable systemic engineering countermeasure.",
    result: "Identified that premature battery drain was rooted in the lack of indoor exception handling in firmware, leading to an asynchronous sleep state and saving Rs. 12 lakhs in unnecessary battery re-engineering.",
    realWorldApplications: [
      "Medical device reliability engineering",
      "Automotive embedded systems",
      "Industrial machinery predictive maintenance"
    ],
    vivaQuestions: [
      { q: "What is the 5 Whys technique?", a: "An iterative interrogative technique used to explore the cause-and-effect relationships underlying a particular problem to uncover the root cause." },
      { q: "Who originated the 5 Whys method?", a: "Sakichi Toyoda, founder of Toyota Industries, as part of the Toyota Production System." },
      { q: "Must an engineer always ask exactly five questions in this method?", a: "No; 'five' is an empirical rule of thumb. It may take 3 questions or 8 questions until the true root cause is uncovered." },
      { q: "What distinguishes a root cause from a contributing symptom?", a: "Fixing a symptom only delays or temporarily masks the issue; eliminating the root cause permanently prevents the problem from recurring." },
      { q: "What is the main limitation of the linear 5 Whys method?", a: "Complex technical failures often have multiple branching root causes rather than a single linear chain of events." },
      { q: "How do you avoid stopping prematurely at a human error blame in 5 Whys?", a: "Never accept 'operator error' as a root cause; ask why the system permitted the operator to make the mistake (e.g. lack of Poka-Yoke or poor UI)." },
      { q: "What is a 'Countermeasure' in 5 Whys terminology?", a: "An action or systemic design change that permanently addresses the root cause, rather than a temporary fix." },
      { q: "How does 5 Whys integrate with the Ishikawa (Fishbone) diagram?", a: "The Fishbone diagram categorizes potential causes across 6Ms, and 5 Whys is used to drill down deeply along specific critical branches." },
      { q: "What are the '6Ms' in root-cause analysis?", a: "Manpower, Machine, Method, Material, Measurement, and Milieu (Environment)." },
      { q: "How do you verify whether a discovered root cause is genuinely correct?", a: "By reversing the logic using 'Therefore': trace back from the root cause to the initial symptom to verify logical continuity." },
      { q: "Can 5 Whys be applied to business and financial failures?", a: "Yes, it is widely utilized in root-cause analysis of supply chain bottlenecks, budget overruns, and delayed market launches." },
      { q: "What is 'confirmation bias' in 5 Whys analysis?", a: "When an engineer guides the questions to lead to a preconceived pet conclusion rather than following objective empirical evidence." },
      { q: "How does 5 Whys contribute to Design for Reliability (DFR)?", a: "It provides historical failure data that informs Design Failure Mode and Effects Analysis (DFMEA) in future revisions." },
      { q: "What should be documented during a 5 Whys session for academic audit?", a: "Problem statement, names of cross-functional team participants, the sequential question-and-answer chain, and the validated corrective action plan." },
      { q: "Why should firmware and hardware teams perform 5 Whys together?", a: "Because many apparent hardware glitches (like voltage dips or overheating) are triggered by firmware sequencing bugs and vice versa." }
    ]
  },
  {
    experimentNumber: 6,
    title: "Problem Statement Formulation & 'How Might We' Framing",
    moduleLink: 2,
    coMapping: ["CO1"],
    aim: "To synthesize user research into an actionable Point of View (POV) problem statement and generate 5 diverse 'How Might We' (HMW) challenge questions for a domestic rooftop rainwater harvesting system.",
    requirements: [
      "POV Formulation Framework worksheet",
      "HMW generation guide",
      "Field survey data from urban households in Kozhikode facing summer water scarcity"
    ],
    theory: "The Define stage bridges raw empathy data and creative ideation. A Point of View (POV) is an actionable problem statement: [User] needs [User's Need] because [Surprising Insight]. 'How Might We' (HMW) statements reframe the POV into optimistic, solvable creative springboards.",
    procedure: [
      "Step 1: Identify specific user archetype: 'Urban middle-class homeowner with concrete rooftop'.",
      "Step 2: Identify deep need: 'A self-cleaning first-flush rainwater filtration mechanism'.",
      "Step 3: Articulate surprising insight: 'Homeowners discard rainwater harvesting because manually cleaning slimy mesh filters after storms is disgusting and unsafe on wet ladders'.",
      "Step 4: Combine into formal POV statement.",
      "Step 5: Generate 5 HMW questions: (1) Amp up the good, (2) Remove the bad, (3) Explore the opposite, (4) Change a status quo, (5) Break into pieces."
    ],
    inputData: "Interviews of 25 homeowners in Kozhikode: 84% installed rainwater filters, but 72% abandoned them within 2 years due to maintenance hazards.",
    implementationDetails: "Guided problem statement wizard with automated quality validation in the platform.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 6. Input User, Need, and Insight fields. Click 'Generate HMW Springboards'. Review the generated challenge questions.",
    expectedOutput: "1 formal POV statement and 5 distinct HMW challenge questions ready for brainstorming.",
    result: "Successfully reframed a generic problem ('People need water filters') into an empathetic engineering challenge ('HMW design a self-purging rainwater diverter that cleans itself using stormwater gravity?').",
    realWorldApplications: [
      "Sustainable urban water conservation",
      "Decentralized greywater filtration",
      "Automated renewable energy systems"
    ],
    vivaQuestions: [
      { q: "What is the standard formula for a Point of View (POV) statement?", a: "[User] needs [User's Need] because [Surprising Insight]." },
      { q: "What is a 'How Might We' (HMW) question?", a: "A short, provocative challenge question that reframes a problem into an open-ended opportunity for creative ideation." },
      { q: "Why do we say 'How' in HMW?", a: "It assumes that solutions exist and invites exploration into the mechanisms." },
      { q: "Why do we say 'Might' in HMW?", a: "It signifies that our ideas are tentative possibilities, giving participants permission to fail and propose unconventional thoughts." },
      { q: "Why do we say 'We' in HMW?", a: "It emphasizes teamwork and collaborative collective ownership of the creative challenge." },
      { q: "What makes an HMW question too broad?", a: "When it lacks focus and constraints (e.g. 'How might we solve world water scarcity?'), making it impossible to brainstorm concrete product features." },
      { q: "What makes an HMW question too narrow?", a: "When it presumes a specific solution (e.g. 'How might we build a 12V motorized nylon valve?'), which stifles alternative creative ideas." },
      { q: "What is an 'insight' in Design Thinking?", a: "A non-obvious, deeply human truth discovered during empathy research that explains why people behave the way they do." },
      { q: "How many HMW questions should typically be derived from a single POV statement?", a: "Typically 5 to 10 diverse HMW questions exploring different facets of the problem." },
      { q: "What is the 'Amp up the good' technique in HMW generation?", a: "Taking a positive aspect of the user's current experience and amplifying it into the central focus of the product." },
      { q: "What is the 'Remove the bad' technique in HMW generation?", a: "Identifying the single most annoying friction point and completely eliminating it from the workflow." },
      { q: "How does a well-crafted HMW statement prevent premature convergence?", a: "By framing the challenge around the underlying human outcome rather than a specific physical mechanism." },
      { q: "Who should sign off on the defined problem statement before ideation begins?", a: "All key project stakeholders, including technical leads, design leads, and project sponsors." },
      { q: "Can an HMW question be rewritten during ideation?", a: "Yes; if ideation reveals that the problem was poorly framed, the team should loop back and adjust the HMW question." },
      { q: "How does problem definition directly influence the Specification Requirement Document (SRD)?", a: "The validated POV directly defines the functional scope and core value proposition in the SRD." }
    ]
  },
  {
    experimentNumber: 7,
    title: "SCAMPER Divergent Ideation Workshop",
    moduleLink: 3,
    coMapping: ["CO2"],
    aim: "To apply all 7 prompts of the SCAMPER technique (Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse) to design disruptive innovations for an electric two-wheeler commuting vehicle.",
    requirements: [
      "SCAMPER prompt cards and matrix board",
      "Electric two-wheeler baseline technical architecture",
      "Timer (7-minute sprints per prompt)",
      "Digital sticky ideation canvas"
    ],
    theory: "SCAMPER is a powerful creative thinking tool devised by Bob Eberle. It provides structured cognitive stimuli that force designers to challenge orthodox assumptions and systematically create unconventional product variations.",
    procedure: [
      "Step 1: Baseline the product: 2-wheeler EV with 3kWh battery, hub motor, steel frame, and digital display.",
      "Step 2: Sprint S (Substitute): Substitute steel chassis with recycled aerospace-grade aluminum/bamboo fiber composite.",
      "Step 3: Sprint C (Combine): Combine helmet storage lock with wireless inductive helmet-charging and breathalyzer.",
      "Step 4: Sprint A (Adapt): Adapt regenerative shock absorbers from heavy freight trains to recharge battery over potholes.",
      "Step 5: Sprint M (Modify/Magnify): Magnify digital instrument cluster into a heads-up augmented reality visor projection.",
      "Step 6: Sprint P (Put to other use): Use the parked EV as a bidirectional home power bank (V2H) during Kerala monsoon power outages.",
      "Step 7: Sprint E (Eliminate): Eliminate physical mechanical keys and instrument panel; operate entirely via smartphone BLE.",
      "Step 8: Sprint R (Reverse/Rearrange): Rearrange battery pack to be hot-swappable from the side rather than fixed beneath the floorboard."
    ],
    inputData: "Baseline specifications of a 2.5 kW urban commuter electric scooter.",
    implementationDetails: "Full interactive SCAMPER board in the GXEST605 Platform with idea rating and voting tools.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 7. Click each letter of SCAMPER. Enter ideas or use AI Idea Spark. Filter top 3 concepts based on feasibility.",
    expectedOutput: "A completed SCAMPER matrix with at least 3 high-potential ideas under each of the 7 prompts (21 ideas minimum).",
    result: "Generated 28 unique product feature concepts, with Vehicle-to-Home (V2H) bidirectional discharging and quick-release side battery swappability advancing to feasibility screening.",
    realWorldApplications: [
      "Electric vehicle subsystem architecture",
      "Consumer electronics disruptive redesign",
      "Sustainable industrial packaging"
    ],
    vivaQuestions: [
      { q: "What does the acronym SCAMPER stand for?", a: "Substitute, Combine, Adapt, Modify/Magnify, Put to another use, Eliminate, and Reverse/Rearrange." },
      { q: "Who originally developed the SCAMPER mnemonic?", a: "Bob Eberle in 1971, building upon Alex Osborn's original brainstorming checklists." },
      { q: "What is the primary cognitive purpose of the 'Substitute' prompt?", a: "To explore alternative materials, components, power sources, suppliers, or algorithms to improve performance or reduce cost." },
      { q: "Give an example of 'Combine' in consumer technology.", a: "Combining a mobile phone with a digital camera, GPS receiver, and biometric fingerprint reader into a modern smartphone." },
      { q: "Give an example of 'Adapt' inspired by nature (biomimicry).", a: "Adapting the aerodynamic beak profile of the Kingfisher bird to eliminate the sonic boom in Japanese Shinkansen bullet trains." },
      { q: "What is the difference between Modify and Magnify in SCAMPER?", a: "Modify changes attributes like color, texture, or shape; Magnify increases scale, speed, durability, or frequency." },
      { q: "What is 'Put to another use' in circular economy design?", a: "Repurposing decommissioned EV lithium-ion batteries as stationary solar energy storage banks for rural microgrids." },
      { q: "How does the 'Eliminate' prompt foster minimalist engineering?", a: "By systematically removing superfluous components, reducing BOM cost, assembly complexity, and potential failure points." },
      { q: "Give an example of 'Reverse/Rearrange' in automotive design.", a: "Placing the motor in the wheel hub instead of the chassis, or placing the battery pack flat on the floorboard to lower center of gravity." },
      { q: "Why is SCAMPER classified as a divergent thinking tool?", a: "Because its structured prompts stimulate the generation of a wide, diverse spectrum of unexpected alternatives." },
      { q: "How much time should typically be allotted to each SCAMPER prompt during a workshop?", a: "Around 5 to 10 minutes per prompt to maintain high cognitive energy and rapid output." },
      { q: "What should you do with wild or seemingly impossible ideas generated during SCAMPER?", a: "Document them without judgment; they frequently contain underlying principles that can be modified into feasible breakthroughs." },
      { q: "How do you transition from SCAMPER ideation to concept selection?", a: "By clustering similar ideas and applying convergent screening tools like dot voting or decision matrices." },
      { q: "Can SCAMPER be applied to software algorithms?", a: "Yes; e.g. substituting polling with event-driven callbacks, combining caches, or eliminating redundant database roundtrips." },
      { q: "How does SCAMPER contribute to patent portfolio development?", a: "It systematically explores design-around alternatives to avoid competitors' patents while identifying novel white spaces for new patent claims." }
    ]
  },
  {
    experimentNumber: 8,
    title: "Brainstorming Session & Brainwriting 6-3-5 Exercise",
    moduleLink: 3,
    coMapping: ["CO2"],
    aim: "To conduct a structured Brainwriting 6-3-5 session to generate 108 innovative concepts in 30 minutes for a low-cost tactile communication device for deaf-blind individuals.",
    requirements: [
      "Brainwriting 6-3-5 worksheet templates (6 participants)",
      "Timer (5 minutes per round × 6 rounds)",
      "Silent collaboration room / shared digital spreadsheet",
      "Problem statement brief"
    ],
    theory: "Traditional verbal brainstorming often suffers from loud voices dominating, evaluation apprehension, and cognitive anchoring. Brainwriting 6-3-5 (6 participants, 3 ideas per sheet, 5-minute rounds) is a silent, egalitarian divergent tool developed by Bernd Rohrbach that produces 108 concepts in 30 minutes.",
    procedure: [
      "Step 1: Seat 6 participants around a table and distribute a 6-3-5 grid worksheet with 3 columns and 6 rows.",
      "Step 2: State the challenge: 'Design a low-cost, wearable tactile communication interface for deaf-blind persons.'",
      "Step 3: Round 1 (5 mins): Each participant writes 3 distinct ideas in row 1 of their sheet.",
      "Step 4: Rotate sheets clockwise to the next participant.",
      "Step 5: Round 2 (5 mins): Each participant reads the 3 ideas above and adds 3 new or built-upon ideas in row 2.",
      "Step 6: Repeat for 6 rounds until all sheets are filled.",
      "Step 7: Total ideas generated = 6 participants × 3 ideas × 6 rounds = 108 ideas.",
      "Step 8: Perform silent dot-voting to identify top 5 winning concepts."
    ],
    inputData: "Design challenge brief for deaf-blind assistive technology, requiring low cost (< Rs. 3,000) and battery operation.",
    implementationDetails: "Automated 6-participant digital rotation engine in the GXEST605 Platform.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 8. Start Brainwriting simulation. Add 3 ideas, observe virtual agent rotation, and watch 108 ideas populate the grid.",
    expectedOutput: "A fully populated 108-idea matrix and a synthesized list of top 5 clustered innovation themes.",
    result: "Demonstrated how silent brainwriting eliminates interpersonal dominance and generated a winning concept: a haptic vibro-tactile glove mapping English phonemes to fingertips.",
    realWorldApplications: [
      "Assistive technology invention",
      "Cross-functional enterprise innovation",
      "Rapid product conceptualization sprints"
    ],
    vivaQuestions: [
      { q: "What does '6-3-5' stand for in Brainwriting?", a: "6 participants write 3 ideas per round across 5-minute intervals." },
      { q: "Who invented the Brainwriting 6-3-5 technique?", a: "Bernd Rohrbach, a German marketing and design specialist, in 1968." },
      { q: "How many ideas are generated in a complete standard 6-3-5 session?", a: "Exactly 108 ideas (6 participants × 3 ideas × 6 rounds)." },
      { q: "What are the four core rules of Osborn's classic brainstorming?", a: "(1) Defer judgment, (2) Encourage wild ideas, (3) Aim for quantity, and (4) Build upon each other's ideas." },
      { q: "What is 'Production Blocking' in traditional verbal brainstorming?", a: "The impediment that only one person can speak at a time, forcing others to wait and frequently forget or suppress their ideas." },
      { q: "What is 'Evaluation Apprehension'?", a: "The psychological fear of being judged, ridiculed, or criticized by peers or superiors when voicing unusual ideas." },
      { q: "What is 'Social Loafing' in team innovation?", a: "The tendency of individuals to exert less cognitive effort when working in a large group compared to working individually." },
      { q: "How does Brainwriting 6-3-5 overcome introversion vs extroversion barriers?", a: "Because the entire session is strictly silent and written, giving every participant equal floor time and eliminating vocal dominance." },
      { q: "What is 'piggybacking' or 'hitchhiking' in brainwriting?", a: "Using an idea written by a previous participant as a creative stepping stone to derive an evolved, superior concept." },
      { q: "What should a facilitator do if a participant runs out of ideas during a round?", a: "Encourage them to combine two existing ideas on the sheet or reverse an assumption from an earlier entry." },
      { q: "Why is a strict time limit (5 minutes) imposed per round?", a: "Time pressure stimulates fast heuristic thinking, preventing participants from over-analyzing or self-censoring." },
      { q: "Can Brainwriting 6-3-5 be executed remotely across digital tools?", a: "Yes, using cloud spreadsheets or collaborative digital whiteboards with automated cell unlocking." },
      { q: "What is 'Brainsteering'?", a: "A modern evolution of brainstorming that introduces structured categories and constraints to guide ideation toward strategic goals." },
      { q: "How do you filter 108 ideas down to viable concepts efficiently?", a: "Using rapid affinity clustering followed by silent multi-voting (dot voting) against clear criteria." },
      { q: "How does the ideation stage connect with Proof of Concept (PoC)?", a: "The top 1 or 2 winning concepts emerging from convergent filtering are selected for physical benchtop PoC feasibility testing." }
    ]
  },
  {
    experimentNumber: 9,
    title: "Six Thinking Hats Convergent Evaluation Exercise",
    moduleLink: 3,
    coMapping: ["CO2"],
    aim: "To systematically evaluate candidate product architectures for a Smart Classroom Acoustic Balancer using Edward de Bono's Six Thinking Hats method.",
    requirements: [
      "Six Thinking Hats role cards / digital icons",
      "Acoustic Balancer concept proposal document",
      "Evaluation worksheet with dedicated hat sections",
      "Meeting facilitator role assignment"
    ],
    theory: "Edward de Bono's Six Thinking Hats is a parallel thinking technique that separates ego from performance. By directing all participants to wear the same cognitive 'hat' simultaneously, it eliminates confrontational arguments and ensures comprehensive 360-degree evaluation.",
    procedure: [
      "Step 1: Blue Hat (Process): Define session objective: Evaluate whether active noise cancellation or passive metamaterial baffling is superior.",
      "Step 2: White Hat (Facts & Data): Review objective metrics: Classroom dimensions (8m x 10m), ambient noise levels (75 dB), budget (Rs. 15,000), power limits.",
      "Step 3: Red Hat (Feelings & Intuition): Immediate gut reactions without justification (e.g. 'I feel active microphones in classrooms will raise teacher privacy concerns').",
      "Step 4: Black Hat (Caution & Risks): Relentlessly identify design flaws, safety hazards, high BOM costs, and failure modes.",
      "Step 5: Yellow Hat (Optimism & Benefits): Explore all positive values, cost savings, speech intelligibility gains, and market scalability.",
      "Step 6: Green Hat (Creativity & Alternatives): Propose novel solutions to overcome the Black Hat risks (e.g. edge-processing audio without recording or storing speech).",
      "Step 7: Blue Hat (Synthesis): Summarize consensus and formulate the final technical architecture decision."
    ],
    inputData: "Candidate Concept: 'Classroom IoT Acoustic Balancer with real-time feedback and smart sound-dampening louvers'.",
    implementationDetails: "Guided 6-Hat sequence player with synchronized notes in the GXEST605 Platform.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 9. Step through Blue -> White -> Red -> Black -> Yellow -> Green -> Blue hats. Export structured evaluation matrix.",
    expectedOutput: "A balanced, 360-degree concept evaluation report highlighting critical risks, unexploited upsides, and creative workarounds.",
    result: "Reached unanimous cross-functional consensus to adopt hybrid passive acoustic felt panels combined with visual decibel feedback LED indicators, mitigating privacy risks while meeting cost constraints.",
    realWorldApplications: [
      "Architecture design decisions",
      "Corporate risk and feasibility review",
      "Complex multidisciplinary system selection"
    ],
    vivaQuestions: [
      { q: "Who invented the Six Thinking Hats methodology?", a: "Dr. Edward de Bono in 1985." },
      { q: "What does the White Hat symbolize?", a: "Facts, objective data, figures, information requirements, and verifiable evidence." },
      { q: "What does the Red Hat symbolize?", a: "Emotions, intuition, gut feelings, and hunches, without any need for logical justification." },
      { q: "What does the Black Hat symbolize?", a: "Caution, critical judgment, potential risks, legal hazards, and why something might fail." },
      { q: "What does the Yellow Hat symbolize?", a: "Optimism, positive value, logical benefits, feasibility, and opportunities." },
      { q: "What does the Green Hat symbolize?", a: "Creativity, novel ideas, out-of-the-box thinking, alternatives, and out-of-rut solutions." },
      { q: "What does the Blue Hat symbolize?", a: "Metacognition, process control, agenda setting, session facilitation, and summary synthesis." },
      { q: "What is 'Parallel Thinking' as defined by Edward de Bono?", a: "A thinking process where all participants look in the same cognitive direction at the same time, avoiding adversarial debate." },
      { q: "Why is the Black Hat considered the most valuable yet most overused hat in engineering?", a: "It identifies critical safety and technical risks, but if applied prematurely, it kills creative ideas before they can be refined." },
      { q: "How long should a team spend under the Red Hat?", a: "Very brief (typically 30 to 60 seconds per person) so participants express spontaneous emotional reactions without over-rationalizing." },
      { q: "Can an individual use the Six Thinking Hats alone?", a: "Yes, solo designers use it as a personal mental checklist to view an engineering challenge from multiple perspectives." },
      { q: "Which hat is responsible for defining the problem and choosing the hat sequence?", a: "The Blue Hat." },
      { q: "How does the Six Hats method reduce adversarial meeting conflict?", a: "Instead of Person A arguing against Person B, Person A asks Person B to 'put on the Yellow Hat and find value together'." },
      { q: "What is the recommended hat sequence when evaluating a high-risk technical proposal?", a: "Blue -> White -> Yellow -> Black -> Green -> Red -> Blue." },
      { q: "How does the Six Thinking Hats exercise support KTU academic audits?", a: "It provides documented evidence of systematic, multidisciplinary evaluation of design alternatives prior to hardware commitment." }
    ]
  },
  {
    experimentNumber: 10,
    title: "SWOT Analysis Workshop for Product Concept Viability",
    moduleLink: 1,
    coMapping: ["CO2", "CO3"],
    aim: "To perform a comprehensive SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis and construct a TOWS strategic action matrix for an automated low-power induction cooker.",
    requirements: [
      "SWOT Matrix worksheet",
      "TOWS Strategic Synthesis canvas",
      "Market competitor intelligence reports for electric kitchen appliances in South India"
    ],
    theory: "SWOT analysis evaluates internal capabilities (Strengths, Weaknesses) against external market environments (Opportunities, Threats). The TOWS Matrix extends this by cross-leveraging internal strengths against external opportunities (SO), mitigating weaknesses via opportunities (WO), using strengths to neutralize threats (ST), and minimizing weaknesses against threats (WT).",
    procedure: [
      "Step 1: Analyze Internal Strengths (e.g., patented thermal sensor, 92% electrical efficiency, local Kerala assembly).",
      "Step 2: Analyze Internal Weaknesses (e.g., higher initial unit BOM cost than Chinese imports, lack of established brand name).",
      "Step 3: Analyze External Opportunities (e.g., Kerala KSERC subsidized daytime solar power tariffs, rising LPG cylinder prices).",
      "Step 4: Analyze External Threats (e.g., volatile grid voltage spikes in rural areas, aggressive predatory pricing by multinational giants).",
      "Step 5: Formulate TOWS Strategies: (SO) Target solar-electrified households; (ST) Engineer wide-input voltage tolerance (90V-280V) as a major USP against imports."
    ],
    inputData: "Product proposal and market analysis of a 1200W intelligent induction cooker tailored for traditional Kerala cooking (clay pot compatible).",
    implementationDetails: "Dynamic 4-quadrant SWOT & 4-quadrant TOWS generator in GXEST605 Platform.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 10. Populate items in S, W, O, T. View auto-generated cross-quadrant TOWS strategic action recommendations.",
    expectedOutput: "A complete SWOT 4-box matrix and an actionable TOWS Strategic Action Matrix with 8 prioritized engineering and commercial directives.",
    result: "Demonstrated how environmental threats (grid voltage fluctuations) directly shaped the core engineering requirement: designing an active PFC buck-boost power supply.",
    realWorldApplications: [
      "Consumer hardware commercialization",
      "Clean-tech energy appliances",
      "Strategic business model development"
    ],
    vivaQuestions: [
      { q: "What does SWOT stand for?", a: "Strengths, Weaknesses, Opportunities, and Threats." },
      { q: "Which components of SWOT are internal to the product or organization?", a: "Strengths and Weaknesses (e.g. proprietary technology, team capabilities, manufacturing defects)." },
      { q: "Which components of SWOT are external to the product or organization?", a: "Opportunities and Threats (e.g. regulatory changes, competitor pricing, macroeconomic trends, raw material costs)." },
      { q: "What is the primary difference between a SWOT analysis and a TOWS matrix?", a: "SWOT is primarily diagnostic and lists factors; TOWS is actionable and crosses factors to formulate proactive strategies (SO, ST, WO, WT)." },
      { q: "What is an 'SO' strategy in a TOWS matrix?", a: "A Maxi-Maxi strategy that uses internal strengths to exploit external market opportunities." },
      { q: "What is a 'WT' strategy in a TOWS matrix?", a: "A Mini-Mini defensive strategy that aims to minimize internal weaknesses while avoiding external threats." },
      { q: "What is a common trap when engineering teams conduct SWOT analyses?", a: "Confusing internal weaknesses with external threats, or listing vague generic statements without empirical data." },
      { q: "How does a SWOT analysis relate to the Stanford Business Model Canvas?", a: "Strengths and Weaknesses inform Key Resources and Cost Structure; Opportunities and Threats inform Value Propositions and Customer Relationships." },
      { q: "What constitutes a 'Strength' in an engineering hardware startup?", a: "Proprietary IP/patents, highly optimized BOM costs, unique domain expertise, or exclusive supply agreements." },
      { q: "Give an example of an external 'Threat' for an IoT medical device.", a: "Changes in government medical device regulations (e.g. CDSCO / FDA) or global semiconductor supply chain shortages." },
      { q: "How can an engineer convert an identified 'Threat' into an 'Opportunity'?", a: "By designing compliance features into the product before competitors, turning regulatory hurdles into a competitive moat." },
      { q: "How often should a product team revisit its SWOT analysis?", a: "At every major phase gate of the Product Development Lifecycle, especially after competitor launches." },
      { q: "What is 'PESTLE' analysis and how does it relate to the O and T of SWOT?", a: "PESTLE analyzes Political, Economic, Social, Technological, Legal, and Environmental factors to systematically discover Opportunities and Threats." },
      { q: "Why is honest identification of 'Weaknesses' critical during Proof of Concept (PoC)?", a: "Because unacknowledged weaknesses in early design will manifest as fatal flaws during pilot manufacturing or mass production." },
      { q: "How does SWOT analysis link to Bloom's taxonomy in KTU engineering curricula?", a: "It operates at the K4 (Analyze) and K5 (Evaluate) levels, requiring critical evaluation of technical, economic, and market trade-offs." }
    ]
  },
  {
    experimentNumber: 11,
    title: "Weighted Decision Matrix for Concept Selection",
    moduleLink: 3,
    coMapping: ["CO2", "CO3"],
    aim: "To construct a mathematical Weighted Decision Matrix (Pugh Matrix) to objectively select the best technical architecture from three competing concepts for a smart greywater recycling system.",
    requirements: [
      "Weighted Decision Matrix spreadsheet / calculator",
      "Concept specification sheets for Concept A (Chemical Flocculation), Concept B (Membrane Bioreactor), and Concept C (Multi-Stage Sand-Biochar Filter)",
      "Criteria weighting agreement rubric"
    ],
    theory: "A Weighted Decision Matrix (Pugh Matrix) is a quantitative concept selection tool. Key evaluation criteria are assigned relative percentage weights (summing to 100% or 1.0). Each concept is scored from 1 to 10 against each criterion. The weighted sum determines the winning design mathematically, removing emotional bias.",
    procedure: [
      "Step 1: Identify 6 core criteria: Manufacturing Cost, Filtration Efficiency, Maintenance Ease, Power Consumption, Physical Footprint, and Longevity.",
      "Step 2: Assign normalized percentage weights: Cost (25%), Efficiency (25%), Maintenance (20%), Power (10%), Footprint (10%), Longevity (10%).",
      "Step 3: Score Concept A, Concept B, and Concept C from 1 (poor) to 10 (excellent) across all criteria based on empirical benchmark tests.",
      "Step 4: Compute weighted scores for each concept: Score_weighted = SUM(Weight_i * Raw_Score_i).",
      "Step 5: Perform sensitivity analysis by varying criterion weights by ±10% to check ranking stability."
    ],
    inputData: "Technical benchmark data of 3 greywater systems running on 200 L/day household discharge.",
    implementationDetails: "Live interactive decision matrix calculator in the GXEST605 Platform with dynamic radar chart visualization.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 11. Adjust criterion sliders. Enter raw scores. Observe real-time recalculation of total scores and visual ranking charts.",
    expectedOutput: "Completed Decision Matrix table with raw scores, weighted scores, sensitivity analysis, and winning concept designation.",
    result: "Concept C (Multi-Stage Sand-Biochar Filter) achieved the highest weighted score (8.15 vs 7.40 for B and 6.65 for A) due to zero continuous power requirement and low maintenance costs.",
    realWorldApplications: [
      "Engineering concept trade-off studies",
      "Vendor and component selection",
      "Architectural trade-off documentation for academic audits"
    ],
    vivaQuestions: [
      { q: "What is a Weighted Decision Matrix?", a: "A quantitative analytical tool that evaluates and scores competing design concepts against multiple weighted criteria to identify the optimal solution." },
      { q: "Who originated the concept screening matrix?", a: "Stuart Pugh, a British design engineer, who introduced the Pugh Concept Selection Method in 1981." },
      { q: "What must the sum of all criterion weights equal in a normalized decision matrix?", a: "1.0 (or 100%)." },
      { q: "What is the difference between a Pugh Matrix and a Weighted Decision Matrix?", a: "A standard Pugh Matrix compares concepts against a baseline using (+, -, S for same); a Weighted Decision Matrix assigns numerical weights and quantitative 1-10 scores." },
      { q: "What is 'Sensitivity Analysis' in decision matrix modeling?", a: "The process of adjusting criterion weights to evaluate whether the winning concept remains robust or changes, testing the stability of the decision." },
      { q: "How are criteria selected for an engineering decision matrix?", a: "Directly derived from the non-negotiable requirements and stakeholder priorities specified in the Specification Requirement Document (SRD)." },
      { q: "What is 'Criterion Hallucination' in decision scoring?", a: "Artificially inflating criteria or weights to force a favored pet concept to win mathematically." },
      { q: "Can a concept with the highest raw average score lose in a weighted decision matrix?", a: "Yes; if it scores poorly on high-weight criteria (e.g. safety or cost), its weighted score will drop below a balanced concept." },
      { q: "What scale is typically used for scoring criteria in a decision matrix?", a: "A 1-to-5 or 1-to-10 Likert scale, where 1 represents unacceptable performance and 10 represents industry-leading performance." },
      { q: "What should an engineering team do if two concepts score within 1% of each other?", a: "Do not flip a coin; combine the best features of both concepts (using SCAMPER's Combine prompt) to create a superior hybrid concept." },
      { q: "How does a weighted decision matrix eliminate emotional and hierarchical bias?", a: "It forces debates to focus on objective, verifiable scores and agreed-upon criteria rather than the loudest or most senior person's opinion." },
      { q: "What is a 'Go/No-Go' screening gate prior to the decision matrix?", a: "A binary gate checking mandatory constraints (e.g. legal compliance or maximum price threshold); concepts failing any Go/No-Go gate are eliminated before scoring." },
      { q: "How can sustainability be integrated into the decision matrix?", a: "By dedicating specific high-weight criteria to Carbon Footprint, Recyclability, and End-of-Life Disassembly." },
      { q: "What role does the decision matrix play in KTU course file audits?", a: "It serves as formal objective documentary evidence demonstrating that students evaluated alternatives systematically (satisfying CO2 and CO3)." },
      { q: "Can a decision matrix be automated in software?", a: "Yes, using spreadsheets, Python Pandas scripts, or dedicated interactive web components as implemented in this platform." }
    ]
  },
  {
    experimentNumber: 12,
    title: "Multi-Dimensional Feasibility Assessment (6 Pillars)",
    moduleLink: 3,
    coMapping: ["CO2", "CO3"],
    aim: "To conduct a comprehensive 6-Dimensional Feasibility Assessment (Technical, Economic, Market, Operational, Legal, Ethical) for an AI-powered automated smart trash bin.",
    requirements: [
      "Six-Pillar Feasibility Assessment Rubric",
      "Component availability datasheets",
      "Patent landscape / Freedom to Operate (FTO) summary",
      "Environmental and privacy compliance checklists"
    ],
    theory: "Feasibility studies ensure that creative ideas are viable before capital is committed to physical prototyping. Evaluating an invention across all six dimensions prevents disastrous post-investment roadblocks such as IP lawsuits, component obsolescence, or regulatory bans.",
    procedure: [
      "Step 1: Technical Feasibility: Assess compute requirements for on-device YOLO edge inferencing, power budget, battery runtime, and mechanical sorting latency (< 1.5s).",
      "Step 2: Economic Feasibility: Calculate BOM cost (target < Rs. 4,500), retail price (Rs. 7,999), gross margins (43%), and Break-Even Point (BEP).",
      "Step 3: Market Feasibility: Calculate Total Addressable Market (TAM) in India, assess competing sensor bins, and verify willingness-to-pay among commercial offices.",
      "Step 4: Operational Feasibility: Verify component supply chains (Raspberry Pi vs ESP32-S3), PCB assembly local availability, and servicing logistics.",
      "Step 5: Legal Feasibility: Perform FTO patent search on optical waste sorting mechanisms; verify adherence to e-waste disposal laws and BIS certification.",
      "Step 6: Ethical Feasibility: Verify that the internal optical camera points strictly downwards to prevent user privacy violations; ensure fair recycling messaging."
    ],
    inputData: "Engineering proposal for 'SortAI: Edge-Vision Waste Segregator' using camera and dual-servo mechanical diverter.",
    implementationDetails: "Automated scoring wizard with spider-chart visualization in the GXEST605 Platform.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 12. Evaluate each pillar using 1-10 slider inputs. Observe composite Feasibility Index and Go/No-Go recommendation badge.",
    expectedOutput: "A formal 6-Pillar Feasibility Report with composite score, risk mitigation actions, and stage-gate approval sign-off.",
    result: "Achieved an Overall Feasibility Score of 8.2/10. Identified that high technical compute costs could be mitigated by substituting a full Raspberry Pi with an ESP32-S3 camera module, improving economic feasibility from 6.0 to 8.5.",
    realWorldApplications: [
      "Product innovation stage-gate governance",
      "Startup investor pitch validation",
      "Industrial R&D portfolio selection"
    ],
    vivaQuestions: [
      { q: "What are the six dimensions of feasibility in modern product development?", a: "Technical, Economic, Market, Operational, Legal, and Ethical feasibility." },
      { q: "What does Technical Feasibility evaluate?", a: "Whether the product can be built within the laws of physics, available engineering technology, component limits, and manufacturing precision." },
      { q: "What does Economic Feasibility evaluate?", a: "Capital expenditure (CapEx), operational expenditure (OpEx), Bill of Materials (BOM) cost, profit margins, and return on investment (ROI)." },
      { q: "What is Market Feasibility?", a: "Evaluating market size (TAM/SAM/SOM), customer demand, willingness to pay, competitor landscape, and distribution channels." },
      { q: "What is Operational Feasibility?", a: "Assessing whether the product can be manufactured, supported, distributed, and maintained reliably within existing infrastructure and human skill levels." },
      { q: "What is 'Freedom to Operate' (FTO) in Legal Feasibility?", a: "A formal legal review confirming that manufacturing and selling the product will not infringe any valid, active patents owned by third parties." },
      { q: "What is Ethical Feasibility in AI-enabled products?", a: "Ensuring that the product does not violate user privacy, exhibit discriminatory bias, exploit vulnerable populations, or cause environmental degradation." },
      { q: "What is the minimum acceptable score on a 1-to-10 feasibility scale before approving a PoC?", a: "Typically an overall composite score >= 7.0, with no single pillar scoring below 5.0." },
      { q: "What should be done if a project scores 9/10 in Technical Feasibility but 3/10 in Legal Feasibility?", a: "Stop immediately; proceeding with development would invite fatal patent litigation or regulatory injunctions." },
      { q: "How does economic feasibility determine target costing?", a: "By starting with what the customer is willing to pay in the market and subtracting the required profit margin to establish the maximum permissible BOM cost." },
      { q: "What is the difference between an invention being technically feasible versus economically feasible?", a: "Technical feasibility means it works in a lab; economic feasibility means it can be produced and sold at a price customers will pay while yielding a profit." },
      { q: "How does the Digital Personal Data Protection (DPDP) Act of India impact legal/ethical feasibility?", a: "Any product collecting biometric, visual, or personal user data must incorporate strict consent mechanisms, local storage, and secure encryption." },
      { q: "What is CapEx versus OpEx in product manufacturing?", a: "CapEx (Capital Expenditure) is one-time upfront cost for tooling, molds, and machinery; OpEx (Operational Expenditure) is ongoing costs for labor, electricity, and components." },
      { q: "Why must operational feasibility include end-of-life e-waste recycling?", a: "Under Extended Producer Responsibility (EPR) regulations, hardware manufacturers are legally and ethically responsible for recycling their products at end of life." },
      { q: "How does the 6-pillar feasibility report prepare students for final year capstone projects?", a: "It trains students to justify engineering decisions through holistic professional criteria rather than purely narrow code or circuit simulations." }
    ]
  },
  {
    experimentNumber: 13,
    title: "Proof of Concept (PoC) Specification & Risk Assessment",
    moduleLink: 3,
    coMapping: ["CO4"],
    aim: "To define the functional objectives, risk assessment matrix, technology scouting bill of materials, and validation criteria for a Proof of Concept (PoC) of a Smart Assistive Walking Stick for the visually impaired.",
    requirements: [
      "PoC Specification Template",
      "5x5 Qualitative Risk Assessment Matrix",
      "Electronic breadboard components (Ultrasonic sensor, ESP32, Vibration motor, Buzzer)",
      "Lab bench oscilloscope and bench power supply"
    ],
    theory: "A Proof of Concept (PoC) is an early, minimal, disposable realization of a product idea built exclusively to verify that a critical technical hypothesis or fundamental functionality is physically achievable. It does not look like a final product, but proves that core physics and algorithms function.",
    procedure: [
      "Step 1: State Core PoC Hypotheses: (1) Ultrasonic echo can detect knee-height obstacles within 200ms; (2) Dual vibration haptic motor can convey directional distance gradients.",
      "Step 2: Technology Scouting: Select low-cost, off-the-shelf breakout modules (HC-SR04 ultrasonic sensor, ESP32 DevKit, ERM coin vibration motors).",
      "Step 3: Construct Risk Assessment Matrix: Identify failure risks (e.g., false echoes from smooth tiled floors, high battery drain).",
      "Step 4: Establish Validation Gate Criteria: Minimum detection range = 2.0 meters, detection accuracy >= 95%, total current draw < 120 mA at 3.7V.",
      "Step 5: Assemble breadboard circuit and write minimal validation firmware.",
      "Step 6: Test against 10 obstacles under varying lighting and floor textures; record response times."
    ],
    inputData: "Obstacle detection scenarios: Wall, glass door, descending stairs, moving pedestrian, low curb.",
    implementationDetails: "PoC tracking dashboard with live risk matrix heat map in the platform.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 13. Review the PoC test suite. Execute virtual sensor validation test. Verify pass/fail status against target specifications.",
    expectedOutput: "A completed PoC Specification Document, 5x5 Risk Matrix with mitigations, and validated pass/fail test log.",
    result: "Successfully validated the core obstacle-detection hypothesis (detection latency = 85ms < 200ms target). Highlighted that ultrasonic waves are absorbed by thick woolen clothing, leading to the decision to incorporate an infrared ToF sensor in the Alpha prototype.",
    realWorldApplications: [
      "Assistive mobility devices",
      "Autonomous mobile robotics",
      "Industrial proximity safety systems"
    ],
    vivaQuestions: [
      { q: "What is a Proof of Concept (PoC)?", a: "An early, low-cost demonstration built solely to verify that a core technical concept, theory, or critical functionality is practically viable." },
      { q: "How does a PoC differ from an Alpha prototype?", a: "A PoC tests whether a specific technology works (often on an open breadboard); an Alpha prototype tests the integrated system 'works-like' in a laboratory enclosure." },
      { q: "What should happen to a PoC after its hypotheses are validated?", a: "It is typically retired or discarded; code and circuits are re-engineered cleanly for detailed design rather than directly commercialized." },
      { q: "What is 'Technology Scouting' in PoC development?", a: "The systematic search for existing commercial off-the-shelf (COTS) modules, ICs, APIs, and materials to rapidly test hypotheses without custom fabrication." },
      { q: "What are the two axes of a standard Risk Assessment Matrix?", a: "Likelihood of Occurrence (1 to 5) and Severity of Impact (1 to 5)." },
      { q: "What is a 'fatal flaw risk' in PoC testing?", a: "A technical, regulatory, or economic roadblock that cannot be resolved within the project's constraints, requiring an immediate pivot or project termination." },
      { q: "Why is aesthetic appearance unimportant in a PoC?", a: "Because the goal is rapid, cheap technical verification; investing time in industrial design styling at the PoC stage is wasted capital." },
      { q: "What is a 'Go/No-Go Gate' following PoC validation?", a: "A formal review milestone where stakeholders decide whether to fund detailed engineering design or discontinue the concept based on empirical test results." },
      { q: "What is 'Scope Creep' during PoC development?", a: "The tendency to add unnecessary features and refinements to the PoC, delaying validation of the primary core hypothesis." },
      { q: "How does document and process management apply to PoC?", a: "Logging test procedures, oscilloscope waveforms, failure modes, and code commits in a version-controlled repository for auditability." },
      { q: "What is 'Change Management' when a PoC fails?", a: "The structured process of communicating the failure, analyzing root causes, re-aligning stakeholder expectations, and executing a controlled technical pivot." },
      { q: "What is Knowledge Capture in engineering innovation?", a: "Documenting negative results and failed experiments so future teams do not repeat the same costly dead-end pathways." },
      { q: "How should storytelling be utilized in a PoC presentation?", a: "By framing the technical bench test within the lived struggle of the user, demonstrating how the validated mechanism solves the human problem." },
      { q: "What TRL level corresponds to a validated PoC?", a: "TRL 3 (Analytical and experimental critical function and/or characteristic proof of concept)." },
      { q: "Why is current consumption (power budget) a mandatory metric in battery-operated PoCs?", a: "Because if a PoC consumes 10x the permissible power budget, no reasonable battery can be fitted into the final portable enclosure without redesign." }
    ]
  },
  {
    experimentNumber: 14,
    title: "Comprehensive Risk Assessment & Mitigation Matrix",
    moduleLink: 3,
    coMapping: ["CO4"],
    aim: "To formulate a comprehensive 5x5 Risk Assessment Matrix with quantifiable risk scores and proactive mitigation pathways for an autonomous drone delivery system for rural healthcare clinics.",
    requirements: [
      "5x5 Risk Matrix Framework",
      "Risk assessment scoring rubric (Risk Score = Likelihood × Consequence)",
      "Civil Aviation DGCA Drone Rules 2021 regulatory guidelines",
      "Technical failure mode database"
    ],
    theory: "Risk assessment is a disciplined engineering process of identifying potential hazards, estimating their likelihood and severity, and establishing proactive engineering and operational controls. Unmanaged risks are the primary cause of budget overruns, regulatory bans, and product recalls.",
    procedure: [
      "Step 1: Categorize project risks into 4 domains: Technical, Operational/Safety, Regulatory/Legal, and Financial.",
      "Step 2: Score Likelihood (L: 1-Rare to 5-Almost Certain) and Consequence (C: 1-Insignificant to 5-Catastrophic).",
      "Step 3: Calculate Risk Rating: R = L × C (Green: 1-6 Low, Yellow: 8-12 Moderate, Red: 15-25 Critical).",
      "Step 4: Identify Critical Red Risks: (1) Mid-air motor failure causing crash; (2) Loss of GPS signal in hilly terrain; (3) Battery thermal runaway; (4) Regulatory BVLOS flying ban.",
      "Step 5: Define proactive mitigation engineering controls: Dual redundant motors (octocopter coaxial design), return-to-home inertial navigation fallback, and ballistic emergency parachute.",
      "Step 6: Re-score Residual Risk after mitigation."
    ],
    inputData: "Medical drone specification: 4.5 kg payload, 35 km operational radius over Western Ghats terrain.",
    implementationDetails: "Interactive 5x5 heatmap with pre- and post-mitigation toggle in the platform.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 14. View risk heatmap. Click on high-risk items to inspect mitigation architecture and observe residual risk reduction.",
    expectedOutput: "A complete Risk Register table with 12 identified risks, pre-mitigation scores, engineering mitigation controls, and verified residual risk scores.",
    result: "Reduced total project high-risk items from 6 to 0, demonstrating that parachute recovery and motor redundancy decrease catastrophic crash risk from 20 (Critical) to 4 (Low).",
    realWorldApplications: [
      "Aerospace and unmanned aerial systems",
      "Medical devices and surgical robots",
      "Critical infrastructure and smart grid engineering"
    ],
    vivaQuestions: [
      { q: "What is the formula for calculating Risk Score in a risk assessment matrix?", a: "Risk Score = Likelihood (Probability) × Consequence (Severity of Impact)." },
      { q: "What are the standard 5 levels of Likelihood?", a: "1-Rare, 2-Unlikely, 3-Possible, 4-Likely, and 5-Almost Certain." },
      { q: "What are the standard 5 levels of Consequence?", a: "1-Insignificant, 2-Minor, 3-Moderate, 4-Major, and 5-Catastrophic." },
      { q: "What is 'Residual Risk'?", a: "The remaining level of risk after all engineering safeguards, mitigations, and operational controls have been implemented." },
      { q: "What are the four classical strategies for treating risk?", a: "(1) Avoid (eliminate the activity), (2) Mitigate (reduce likelihood or impact), (3) Transfer (insurance, outsourcing), (4) Accept (for low-impact risks)." },
      { q: "What is a 'Single Point of Failure' (SPOF)?", a: "A component or subsystem whose isolated malfunction will cause the entire product or system to fail completely." },
      { q: "How do engineers eliminate Single Points of Failure?", a: "By designing redundancy (e.g. dual power supplies, duplicate flight controllers, backup mechanical linkages)." },
      { q: "What is the hierarchy of risk control in engineering?", a: "Elimination -> Substitution -> Engineering Controls -> Administrative Controls / Warnings -> Personal Protective Equipment." },
      { q: "Why is 'Engineering Controls' ranked higher than 'User Warnings' in risk mitigation?", a: "Because physical design safeguards (e.g. interlocks) cannot be forgotten or bypassed, whereas users frequently ignore warning labels." },
      { q: "What is 'BVLOS' in drone regulations and what risk does it carry?", a: "Beyond Visual Line of Sight; carries high risk of mid-air collision with terrain or other aircraft if automated sense-and-avoid systems fail." },
      { q: "How does a Risk Register support project audits?", a: "It provides a living, auditable log proving that engineering teams actively foresaw hazards and implemented documented solutions prior to testing." },
      { q: "What is 'ALARP' in safety engineering?", a: "'As Low As Reasonably Practicable'—a principle dictating that risk must be reduced until the cost of further reduction is disproportionate to the benefit." },
      { q: "What is the role of fail-safe design in risk management?", a: "Ensuring that if a system component fails, it defaults to a safe state (e.g. a railway signal turning red or a valve springing closed)." },
      { q: "Can financial risks be analyzed on the same matrix as technical risks?", a: "Yes, by scaling consequence to financial loss (e.g. Level 5 Catastrophic = company insolvency or losses > Rs. 50 lakhs)." },
      { q: "How does risk assessment in Module 3 differ from DFMEA in Module 4?", a: "Module 3 Risk Assessment evaluates systemic, project, and environmental risks broadly; DFMEA is a microscopic, component-by-component engineering failure analysis." }
    ]
  },
  {
    experimentNumber: 15,
    title: "Specification Requirement Document (SRD/SRS) Preparation",
    moduleLink: 4,
    coMapping: ["CO3", "CO4"],
    aim: "To author a comprehensive, IEEE 830-compliant Software & Hardware Specification Requirement Document (SRD/SRS) for an IoT-based Cold Chain Vaccine Monitoring System.",
    requirements: [
      "IEEE 830 SRS / ISO/IEC/IEEE 29148 Template",
      "System block diagram and interface architecture",
      "Environmental operational constraints standard (WHO PQS specifications)"
    ],
    theory: "An SRD/SRS is a formal engineering contract specifying what the product must do without prematurely dictating how it must be implemented internally. It encompasses functional requirements, non-functional requirements (performance, security, power), external interfaces, and regulatory constraints.",
    procedure: [
      "Step 1: Section 1: Product Scope and Purpose (WHO cold-chain compliance for -20°C to +8°C vaccine transport).",
      "Step 2: Section 2: General Description (Product perspective, user characteristics, operating environment).",
      "Step 3: Section 3: Functional Requirements (Temperature logging every 60s, cellular telemetry, GPS tracking, tamper-evident door sensor, acoustic alarm on excursion).",
      "Step 4: Section 4: Non-Functional Requirements (Battery autonomy >= 72 hours, IP67 waterproof enclosure, temperature measurement accuracy ±0.2°C).",
      "Step 5: Section 5: External Interface Specifications (Hardware interfaces: I2C sensor bus; Software interfaces: MQTT broker over TLS 1.3).",
      "Step 6: Section 6: Verification & Validation Cross-Reference Matrix (linking every requirement to an inspection, test, or analysis method)."
    ],
    inputData: "WHO Performance, Quality and Safety (PQS) specifications for portable vaccine temperature data loggers.",
    implementationDetails: "Structured document editor with requirement traceability matrix generator in the platform.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 15. Inspect the generated IEEE 830 SRD. Trace Requirement FR-04 (Temperature Excursion Alert) to Verification Test VT-04.",
    expectedOutput: "A 6-section, audit-compliant SRD/SRS document with 15 functional requirements, 10 non-functional requirements, and a complete Traceability Matrix.",
    result: "Produced a rigorous engineering requirement baseline that eliminates ambiguity between hardware, firmware, and quality assurance teams.",
    realWorldApplications: [
      "Pharmaceutical cold chain devices",
      "Industrial automation instrumentation",
      "Defense and mission-critical electronics"
    ],
    vivaQuestions: [
      { q: "What does SRD and SRS stand for?", a: "Specification Requirement Document (hardware/system) and Software Requirement Specification (software)." },
      { q: "Which international standard governs Software Requirement Specifications?", a: "IEEE 830-1998 (superseded by ISO/IEC/IEEE 29148:2018)." },
      { q: "What is the primary difference between Functional and Non-Functional requirements?", a: "Functional requirements describe WHAT behaviors the system must perform; Non-Functional requirements describe HOW WELL (performance, security, reliability, power) it must perform." },
      { q: "What does the SMART acronym signify in requirement engineering?", a: "Specific, Measurable, Achievable, Relevant, and Time-bound." },
      { q: "What is a Requirement Traceability Matrix (RTM)?", a: "A grid that maps each user need to its corresponding functional requirement, architectural module, and specific verification test case." },
      { q: "Why should an SRD specify 'What' rather than 'How'?", a: "To give engineering designers creative freedom to choose the best implementation technologies while strictly meeting the external functional goals." },
      { q: "What is an 'Ambiguous Requirement' and why is it dangerous?", a: "A requirement with subjective words like 'user-friendly' or 'fast'; dangerous because different engineers and clients interpret them differently, causing disputes." },
      { q: "How do you rephrase 'The system must be low-power' into an unambiguous requirement?", a: "'The device shall consume no more than 45 mA in active mode and no more than 15 µA in sleep mode at 3.3V DC'." },
      { q: "What is an Ingress Protection (IP) rating in an SRD?", a: "A standard rating (IEC 60529) defining an enclosure's resistance to solid intrusion (dust: 0-6) and liquid intrusion (water: 0-9)." },
      { q: "What are External Interface Requirements?", a: "Specifications defining how the system communicates with external hardware, software components, communication networks, and human users." },
      { q: "What is 'Scope Creep' and how does a signed SRD prevent it?", a: "The uncontrolled addition of new features without adjustments to time, cost, and resources; the SRD serves as a formal contract preventing unapproved additions." },
      { q: "What are the four standard methods of requirement verification?", a: "(1) Inspection (visual check), (2) Demonstration (functional observation), (3) Test (quantitative measurement), and (4) Analysis (mathematical/simulated proof)." },
      { q: "What is an Environmental Requirement in an SRD?", a: "Tolerances for operating temperature, storage temperature, humidity, shock, vibration, and altitude." },
      { q: "Who must formally review and sign off on an SRD?", a: "System architects, hardware lead, software lead, QA lead, product manager, and client/sponsor representatives." },
      { q: "How does the SRD link to Course Outcome CO4 in GXEST605?", a: "CO4 mandates testing prototypes and pilot builds specifically with respect to the Specification Requirement Document." }
    ]
  },
  {
    experimentNumber: 16,
    title: "Design Failure Mode and Effects Analysis (DFMEA)",
    moduleLink: 4,
    coMapping: ["CO3", "CO4"],
    aim: "To perform a detailed DFMEA on a portable Lithium-Ion Battery Power Bank with Solar Charging, calculate Risk Priority Numbers (RPN), and implement design countermeasures to reduce RPN below acceptable thresholds.",
    requirements: [
      "DFMEA Worksheet template (AIAG-VDA format)",
      "Severity (1-10), Occurrence (1-10), and Detection (1-10) scoring tables",
      "Subsystem CAD and electrical schematics"
    ],
    theory: "DFMEA is a proactive analytical engineering technique used during the design phase to identify potential failure modes, evaluate their causes and consequences, and prioritize risk reduction using the Risk Priority Number: RPN = Severity × Occurrence × Detection. High RPN items must undergo design remediation.",
    procedure: [
      "Step 1: Identify critical subsystems: (1) 18650 Li-ion battery pack; (2) Buck-boost charging circuit; (3) USB-C output port; (4) Polycarbonate enclosure.",
      "Step 2: Postulate potential failure modes (e.g. thermal runaway from internal short, overcharging, water ingress).",
      "Step 3: Analyze Failure Effects and assign Severity (S: 1-10). Thermal fire = S=9.",
      "Step 4: Identify Root Causes and assign Occurrence (O: 1-10). Lack of secondary thermal sensor = O=7.",
      "Step 5: Review Current Design Controls and assign Detection (D: 1-10). Software polling only = D=5.",
      "Step 6: Compute Baseline RPN: RPN = 9 × 7 × 5 = 315 (Unacceptable: Threshold is 100).",
      "Step 7: Implement Design Countermeasure: Add redundant hardware thermal fuse (PTC) directly on cell tabs + physical battery isolation barrier.",
      "Step 8: Re-score Revised RPN: S=9, O=1 (hardware cutoff cannot fail), D=2 (automated factory voltage/resistance test) -> Revised RPN = 9 × 1 × 2 = 18.",
      "Step 9: Calculate RPN Reduction Percentage: ((315 - 18) / 315) × 100% = 94.3%."
    ],
    inputData: "Schematics of a 10,000 mAh portable rugged power bank intended for outdoor trekking in high humidity.",
    implementationDetails: "Automated DFMEA worksheet with dynamic RPN highlighting and Pareto chart generator in the platform.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 16. Enter failure modes into the DFMEA table. Adjust S, O, D values. Review automated red highlighting for RPN > 100. Enter corrective action to see live RPN drop.",
    expectedOutput: "A comprehensive DFMEA table covering 8 failure modes with initial RPNs, corrective actions, and revised RPNs.",
    result: "Successfully lowered the highest risk failure mode from an RPN of 315 to 18 (94.3% risk reduction), validating the design for pre-compliance testing.",
    realWorldApplications: [
      "Automotive battery packs and powertrain design",
      "Medical electronics hardware safety",
      "Consumer electronics reliability engineering"
    ],
    vivaQuestions: [
      { q: "What does DFMEA stand for?", a: "Design Failure Mode and Effects Analysis." },
      { q: "What is the mathematical formula for Risk Priority Number (RPN)?", a: "RPN = Severity (S) × Occurrence (O) × Detection (D)." },
      { q: "What is the numerical range of RPN?", a: "From 1 to 1000 (since each parameter is scored from 1 to 10)." },
      { q: "What is Severity (S) in DFMEA?", a: "An assessment of the seriousness of the effect of the potential failure mode on the customer, user, or environment." },
      { q: "What is Occurrence (O) in DFMEA?", a: "The likelihood or frequency that a specific root cause will manifest during the product's design life." },
      { q: "What is Detection (D) in DFMEA?", a: "The probability that existing design verification and testing controls will detect the weakness before the product is released to manufacturing." },
      { q: "If Severity is 10, what does it signify?", a: "A catastrophic failure mode affecting customer safety or violating government regulatory standards without warning." },
      { q: "Why must a failure mode with Severity 9 or 10 be redesigned even if its RPN is below 50?", a: "Because safety and regulatory compliance are non-negotiable; low probability of occurrence never excuses a fatal safety hazard." },
      { q: "What is the difference between DFMEA and PFMEA?", a: "DFMEA focuses on design and engineering weaknesses of the product; PFMEA focuses on manufacturing, assembly, and tooling errors on the factory line." },
      { q: "What is a 'Failure Mode' versus a 'Failure Effect'?", a: "A Failure Mode is the physical manner in which a part fails (e.g. cracked capacitor); a Failure Effect is the consequence perceived by the user (e.g. device won't power on)." },
      { q: "What is Poka-Yoke and how does it affect Occurrence in DFMEA?", a: "Mistake-proofing by physical geometry or firmware interlocks; it drastically reduces Occurrence to 1 or 2 by preventing the failure from happening." },
      { q: "When should DFMEA be initiated in the Product Development Lifecycle?", a: "Early in the detailed design stage (Module 4), before finalizing schematics, CAD tooling, and PCB layout." },
      { q: "Who should participate in a DFMEA review session?", a: "A multidisciplinary team: system design engineers, component specialists, test engineers, manufacturing experts, and quality managers." },
      { q: "Can software code have a DFMEA?", a: "Yes; Software FMEA analyzes failure modes like buffer overflows, memory leaks, race conditions, and unhandled exceptions." },
      { q: "What is the standard RPN threshold in automotive and consumer industries for mandatory action?", a: "Typically an RPN > 100 (or any Severity >= 9) mandates formal corrective redesign actions." }
    ]
  },
  {
    experimentNumber: 17,
    title: "Alpha Prototype Development & Benchmarking",
    moduleLink: 4,
    coMapping: ["CO4"],
    aim: "To build, assemble, and bench-test an Alpha Prototype ('works-like') of an Automated Solar Smart Irrigation Controller, benchmarking its sensor accuracy and valve actuation against SRD requirements.",
    requirements: [
      "Custom milled / rapid prototype PCB",
      "3D printed PLA laboratory enclosure",
      "Capacitive soil moisture sensors & 12V latching solenoid valve",
      "Digital multimeter, oscilloscope, and calibrated soil test bench"
    ],
    theory: "An Alpha Prototype is the first integrated, fully functional realization of a product built with production-intent engineering architecture. It is tested in a controlled laboratory environment ('works-like') to verify electrical tolerances, thermal performance, and firmware integrity.",
    procedure: [
      "Step 1: Fabricate rapid prototype double-sided PCBA with surface mount components.",
      "Step 2: Flash version 0.9.0 firmware onto the onboard ESP32 micro-controller.",
      "Step 3: Assemble into rapid 3D printed benchtop enclosure.",
      "Step 4: Connect to soil test chamber with calibrated moisture gradients (10% to 90% volumetric water content).",
      "Step 5: Measure sensor analog response curve and verify ±2% measurement linearity.",
      "Step 6: Execute 500 automated valve open/close cycles under 3.5 bar water pressure; monitor solenoid coil temperature.",
      "Step 7: Perform power budget bench testing across sleep (45 µA) and active RF transmission (180 mA) states."
    ],
    inputData: "Soil calibration samples: Red loam, clay, and sandy soil with verified gravimetric moisture percentages.",
    implementationDetails: "Alpha prototype testing bench simulator with live thermal and waveform logging in the platform.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 17. Launch Alpha Test Suite. Run 500-cycle stress test. Review pass/fail report against SRD baseline limits.",
    expectedOutput: "A verified Alpha Test Report logging sensor calibration curves, thermal limits, valve cycle reliability, and firmware stability.",
    result: "The Alpha prototype satisfied 14 of 15 SRD parameters. It revealed that 12V inductive kickback caused micro-controller brownouts, driving the inclusion of a flyback diode and optocoupler isolation in the Beta revision.",
    realWorldApplications: [
      "Precision agriculture IoT devices",
      "Automated industrial fluid valves",
      "Solar-powered remote telemetry stations"
    ],
    vivaQuestions: [
      { q: "What is an Alpha Prototype?", a: "An early fully functional 'works-like' prototype built using engineering components to test and verify technical specifications in controlled laboratory settings." },
      { q: "What is the primary difference between an Alpha prototype and a Proof of Concept (PoC)?", a: "A PoC tests a single isolated hypothesis on breadboards; an Alpha prototype tests the complete integrated multi-subsystem architecture inside a representative enclosure." },
      { q: "What are the typical fabrication methods used for Alpha prototypes?", a: "Rapid 3D printing (FDM/SLA), CNC machined plastic/aluminum, quick-turn printed circuit boards (PCBs), and silicone soft tooling." },
      { q: "Why is an Alpha prototype usually NOT given to general external customers for testing?", a: "Because it lacks final aesthetic finish, regulatory safety certifications (CE/BIS), and may be fragile or hazardous outside controlled lab conditions." },
      { q: "What is 'Engineering Verification Testing' (EVT)?", a: "The formal testing phase conducted on Alpha prototypes to verify that hardware and software meet the core functional specifications in the SRD." },
      { q: "What is a 'flyback diode' and why was it needed in the experiment?", a: "A diode placed across an inductive load (solenoid coil) to safely dissipate high-voltage reverse spikes during de-energization, preventing MCU resets." },
      { q: "What is 'Thermal Throttling' in Alpha prototype testing?", a: "Testing the device under maximum computational and environmental heat loads to verify that components do not exceed safe operating junction temperatures." },
      { q: "How many Alpha prototype units are typically fabricated?", a: "Typically 3 to 10 units, dedicated to electrical, firmware, mechanical stress, and destructive testing." },
      { q: "What is the role of an in-circuit debugger (JTAG/SWD) during Alpha prototyping?", a: "It provides real-time access to micro-controller registers and memory to trace hardware-firmware timing crashes and memory leaks." },
      { q: "What is 'Design Freeze' after Alpha testing?", a: "The formal milestone where electrical schematics and core mechanical architecture are locked before ordering expensive production-intent tooling." },
      { q: "What is a 'works-like, looks-like' prototype?", a: "A prototype that combines internal functional engineering with the exact exterior materials, surface texture, and visual aesthetics of the final commercial product." },
      { q: "What is the primary trade-off between 3D printing and injection molding for enclosures?", a: "3D printing has zero tooling cost but high per-part cost and low production speed; injection molding requires high upfront tooling CapEx ($10k-$50k) but gives very low per-part cost and rapid mass replication." },
      { q: "How are prototype timelines effectively maintained when components are delayed?", a: "By parallel path prototyping (using modular daughterboards) and designing fallback footprints on PCBs for alternate chip suppliers." },
      { q: "What is 'Burn-in Testing' in prototype development?", a: "Operating the prototype continuously under elevated temperature and voltage for 48-168 hours to trigger and identify early component infant mortality." },
      { q: "How does Alpha prototype benchmarking map to Bloom's taxonomy in KTU exams?", a: "It evaluates CO4 at Level K4 (Analyze), testing students' ability to compare experimental prototype performance with theoretical specifications." }
    ]
  },
  {
    experimentNumber: 18,
    title: "Beta Prototype Evaluation & Field Usability Testing",
    moduleLink: 4,
    coMapping: ["CO4", "CO5"],
    aim: "To deploy 5 Beta Prototypes ('looks-like and works-like') of a Smart Haptic Cane for visually impaired users in outdoor field environments, evaluating usability, durability, and customer satisfaction (CSAT).",
    requirements: [
      "5 fully packaged Beta Prototypes with injection-molded ABS enclosures",
      "System Usability Scale (SUS) questionnaire",
      "Outdoor obstacle course (pavements, puddles, stairs, crowds)",
      "Video recording and observer tracking equipment"
    ],
    theory: "A Beta Prototype is a production-intent unit that looks and functions like the final commercial product. It is manufactured using tooling-representative processes and placed in the hands of actual end-users in real operating conditions ('validation') to uncover ergonomics flaws and environmental vulnerabilities.",
    procedure: [
      "Step 1: Recruit 5 visually impaired participants across age groups (22 to 65 years).",
      "Step 2: Provide standardized 10-minute briefing without manual intervention.",
      "Step 3: Task participants to navigate an 800m realistic urban route including sidewalks, street crossings, and indoor stairs.",
      "Step 4: Record obstacle collision rates, travel speed (m/s), and battery discharge profile.",
      "Step 5: Administer the 10-question System Usability Scale (SUS) survey immediately after completion.",
      "Step 6: Compute average SUS score: Score > 80 indicates high commercial acceptability.",
      "Step 7: Inspect mechanical enclosure for moisture ingress, scratch durability, and grip fatigue."
    ],
    inputData: "Field test logs across 40 hours of combined outdoor walking in Kochi urban traffic and rain.",
    implementationDetails: "SUS calculator and field telemetry playback tool in the GXEST605 Platform.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 18. Review user field trial video logs. Input 10 SUS survey responses. Calculate final usability index.",
    expectedOutput: "A comprehensive Beta Evaluation Report including SUS score, mean obstacle avoidance success rate (96.4%), and 3 ergonomic design adjustments.",
    result: "Achieved an SUS score of 84.5/100 ('A' grade). Field testing revealed that the rubber grip became slippery in monsoon rain, leading to a textured silicone over-mold for the pilot build.",
    realWorldApplications: [
      "Assistive technology commercialization",
      "Wearable sports and health tech",
      "Rugged field inspection equipment"
    ],
    vivaQuestions: [
      { q: "What is a Beta Prototype?", a: "A production-intent 'looks-like and works-like' prototype tested by real target users in their actual operating environments to validate usability and durability." },
      { q: "What is the primary difference between Alpha and Beta prototype testing?", a: "Alpha testing is internal verification by engineers in a lab; Beta testing is external validation by real end-users in the field." },
      { q: "What is the System Usability Scale (SUS)?", a: "A standardized 10-item Likert questionnaire developed by John Brooke in 1986 that yields a single composite usability score from 0 to 100." },
      { q: "What does an SUS score of 68 represent?", a: "The historical empirical average benchmark; scores above 68 are above average, and scores above 80 are considered excellent." },
      { q: "What is 'Design Validation' versus 'Design Verification'?", a: "Verification checks 'Did we build the product to specification?'; Validation checks 'Did we build the right product to solve the user's real problem?'" },
      { q: "What is 'A/B Testing' during Beta evaluation?", a: "Providing two slightly different product variants (e.g. tactile grip A vs tactile grip B) to two user cohorts to measure which performs better quantitatively." },
      { q: "Why must Beta prototypes be tested in extreme weather conditions?", a: "Because laboratory ambient conditions (22°C, dry air) do not reveal field failure modes like condensation, thermal expansion, dust ingress, or UV degradation." },
      { q: "How many Beta prototypes are typically deployed in hardware startups?", a: "Typically 15 to 50 units, distributed to trusted early adopter customers and field trial partners." },
      { q: "What is 'Telemetry Logging' in modern Beta hardware testing?", a: "Embedding cellular or Wi-Fi diagnostics that secretly log sensor anomalies, crash logs, and battery health directly to cloud servers." },
      { q: "What is 'User Fatigue' in ergonomic testing?", a: "Physical discomfort, hand cramps, or cognitive overload that develops only after prolonged, repeated use (e.g. walking for > 1 hour)." },
      { q: "How should negative feedback from Beta testers be handled?", a: "As invaluable gold; finding flaws during Beta costs 100x less than fixing them after mass tooling and retail shipment." },
      { q: "What is an NDA (Non-Disclosure Agreement) in Beta testing?", a: "A legal contract signed by external beta testers preventing them from publicly disclosing or photographing unreleased proprietary designs." },
      { q: "What is 'Design for Servicing' uncovered during Beta trials?", a: "Ensuring that worn-out parts (like batteries or rubber tips) can be easily replaced by technicians without destroying the enclosure." },
      { q: "What TRL level corresponds to a successful Beta field trial?", a: "TRL 7 (Integrated system prototype demonstration in an operational environment)." },
      { q: "How does Beta testing feedback directly influence the Pilot Build?", a: "It locks in the final Engineering Change Orders (ECOs) for production tooling, packaging design, and user manual documentation." }
    ]
  },
  {
    experimentNumber: 19,
    title: "Pilot Build Planning & Vendor Evaluation",
    moduleLink: 4,
    coMapping: ["CO4"],
    aim: "To develop a comprehensive Pilot Build Plan (100 units) for an Automated Smart Water Meter, including vendor selection criteria, assembly line balancing, and quality inspection stages.",
    requirements: [
      "Pilot Build Operations Sheet",
      "Supplier evaluation scorecard (ISO 9001, capacity, tooling lead time)",
      "Assembly line Work Instruction Sheets (WIS)",
      "Quality control inspection checklist"
    ],
    theory: "A Pilot Build is a controlled pre-production manufacturing run (typically 50-500 units) conducted on the actual factory floor. Its purpose is not to test the product design, but to validate the manufacturing line, tooling fixtures, assembly tact time, and First Pass Yield (FPY).",
    procedure: [
      "Step 1: Define Pilot Objectives: Verify target tact time (12 mins/unit), achieve First Pass Yield >= 95%, validate assembly fixtures.",
      "Step 2: Evaluate 3 candidate Electronics Manufacturing Services (EMS) vendors across Bangalore and Cochin using a weighted scorecard.",
      "Step 3: Define 6 Assembly Workstations: (WS1) PCBA flashing & functional test; (WS2) Ultrasonic brass pipe insertion; (WS3) Battery & display harness assembly; (WS4) Ultrasonic enclosure welding; (WS5) High-pressure hydrostatic leak test (10 bar); (WS6) Final packaging & laser QR labeling.",
      "Step 4: Establish Quality Inspection Gates: Automated Optical Inspection (AOI), In-Circuit Testing (ICT), and 100% Hydrostatic Pressure testing.",
      "Step 5: Calculate Pilot Build Bill of Materials and manufacturing overhead costs."
    ],
    inputData: "Manufacturing architecture of a battery-powered NB-IoT ultrasonic water meter.",
    implementationDetails: "Line balancing simulator and EMS supplier scorecard in the GXEST605 Platform.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 19. Run Pilot Build simulation for 100 units. Observe line bottleneck identification at WS5 and calculate First Pass Yield.",
    expectedOutput: "A complete Pilot Build Plan document, EMS vendor evaluation matrix, assembly line layout, and quality inspection protocols.",
    result: "Selected EMS Partner B (Score 88/100). Simulated pilot run identified a bottleneck at hydrostatic pressure testing, resolving it by adding a dual-chamber testing fixture to maintain line tact time.",
    realWorldApplications: [
      "Smart utility meter manufacturing",
      "Automotive sensor production lines",
      "Consumer electronics factory ramp-up"
    ],
    vivaQuestions: [
      { q: "What is a Pilot Build in product development?", a: "A controlled, limited manufacturing run (50-500 units) conducted on the actual production line to validate tooling, assembly processes, and quality yields." },
      { q: "How does a Pilot Build differ from a Beta Prototype?", a: "A Beta prototype tests whether the product design satisfies users; a Pilot Build tests whether the manufacturing line can produce the product reliably at scale." },
      { q: "What is First Pass Yield (FPY)?", a: "The percentage of manufactured units that complete the production and testing process without requiring any rework or scrapping." },
      { q: "What is 'Tact Time' in assembly line planning?", a: "The maximum allowable time per workstation required to produce a unit in order to meet customer demand rate." },
      { q: "What is an EMS in hardware manufacturing?", a: "Electronic Manufacturing Services—specialized contract factories that assemble, test, and package printed circuit boards and final electronics." },
      { q: "What is Automated Optical Inspection (AOI)?", a: "High-speed camera systems on SMT lines that automatically scan solder joints and component alignments for defects against CAD baselines." },
      { q: "What is In-Circuit Testing (ICT)?", a: "A bed-of-nails test fixture that probes individual test points on a PCBA to check for resistance, capacitance, shorts, and opens before powering up." },
      { q: "What is a Work Instruction Sheet (WIS)?", a: "A visual, step-by-step document placed at each factory workstation directing assembly operators exactly how to mount, screw, or test a part." },
      { q: "What are the key criteria when selecting a manufacturing partner?", a: "Quality certifications (ISO 9001/ISO 13485), engineering capabilities, capacity flexibility, financial stability, IP protection track record, and unit pricing." },
      { q: "What is 'Tooling Lead Time' for injection molding?", a: "The time required (typically 4 to 10 weeks) to precision-machine hardened steel molds before the first sample plastic part (T1 sample) is pressed." },
      { q: "What is a 'T1 Sample' in plastic molding?", a: "The first test shot of plastic injected into a new metal tool, used by engineers to check for shrinkage, sink marks, flash, and dimensional tolerances." },
      { q: "What is Line Balancing in industrial engineering?", a: "Distributing assembly tasks evenly across all workstations so that no single station becomes a bottleneck while others sit idle." },
      { q: "What is 'Burn-in' testing during a pilot build?", a: "Testing electronic assemblies under thermal and voltage stress to eliminate 'infant mortality' failures before customer shipment." },
      { q: "What is an Engineering Change Order (ECO)?", a: "A formal, documented request to modify a design, component, or tooling during manufacturing to fix an identified flaw." },
      { q: "How does the pilot build prepare a company for full-scale mass production?", a: "It trains factory operators, verifies supplier lead times, locks in quality control standards, and proves commercial unit economics." }
    ]
  },
  {
    experimentNumber: 20,
    title: "Product Cost Analysis & Break-Even Modeling",
    moduleLink: 4,
    coMapping: ["CO3", "CO4"],
    aim: "To perform a detailed Product Cost Analysis, compute Bill of Materials (BOM) cost, direct labor, manufacturing overheads, and model the Break-Even Point (BEP) for an automated neonatal phototherapy unit.",
    requirements: [
      "BOM costing spreadsheet / financial calculator",
      "Component supplier volume quotation tables (100, 1000, 10,000 units)",
      "Fixed cost (CapEx, tooling, compliance certification) amortization schedule"
    ],
    theory: "Product cost engineering determines commercial viability. Unit production cost includes Direct Material (BOM), Direct Labor, and Manufacturing Overheads. Fixed costs (R&D, tooling, certification) must be amortized over production volumes. The Break-Even Point (BEP) determines the exact sales volume where Total Revenue equals Total Costs.",
    procedure: [
      "Step 1: Itemize complete Bill of Materials (BOM) for 1000-unit annual volume: Blue LED array (Rs. 1,400), Driver PCBA (Rs. 850), Aluminum chassis (Rs. 1,200), Power supply (Rs. 600), Optics & diffuser (Rs. 450), Cables/fasteners (Rs. 200). Direct Material Cost = Rs. 4,700.",
      "Step 2: Calculate Direct Labor: 2.5 hours assembly @ Rs. 200/hr = Rs. 500.",
      "Step 3: Calculate Manufacturing Overhead: Testing, QA, facility allocation = Rs. 400. Total Variable Cost per Unit (V) = Rs. 5,600.",
      "Step 4: Itemize Fixed Costs (F): Medical device CDSCO certification (Rs. 3,50,000), Sheet metal stamping tooling (Rs. 4,00,000), R&D and pilot overhead (Rs. 4,50,000). Total Fixed Cost = Rs. 12,00,000.",
      "Step 5: Establish Selling Price (P): Rs. 9,600 per unit (Gross margin = 41.6%).",
      "Step 6: Compute Contribution Margin (CM): CM = P - V = Rs. 9,600 - Rs. 5,600 = Rs. 4,000.",
      "Step 7: Compute Break-Even Point (BEP in Units): BEP = Fixed Costs / Contribution Margin = 12,00,000 / 4,000 = 300 units.",
      "Step 8: Compute Break-Even Revenue: 300 units × Rs. 9,600 = Rs. 28,80,000."
    ],
    inputData: "Financial data for a low-cost, clinical-grade LED infant jaundice treatment phototherapy system.",
    implementationDetails: "Live interactive Break-Even calculator and sensitivity chart in the GXEST605 Platform.",
    demonstrationGuide: "Navigate to Lab Simulator -> Exp 20. Adjust Fixed Cost and Selling Price sliders. View real-time intersection on the Break-Even Chart.",
    expectedOutput: "A complete BOM cost breakdown, Unit Economics Table, Break-Even graph, and 3-year profit projection model.",
    result: "Calculated that selling 300 units breaks even against all fixed costs; at the target annual production of 1,000 units, the product generates Rs. 28,00,000 in net pre-tax profit.",
    realWorldApplications: [
      "Medical technology pricing strategy",
      "Hardware startup financial planning",
      "Enterprise Design to Cost (DTC) governance"
    ],
    vivaQuestions: [
      { q: "What is a Bill of Materials (BOM)?", a: "A comprehensive inventory list of all raw materials, components, assemblies, sub-assemblies, and fasteners required to manufacture a product." },
      { q: "What is the difference between Fixed Cost and Variable Cost?", a: "Fixed costs do not change with production volume (e.g. tooling, factory rent, R&D); Variable costs increase directly with every unit produced (e.g. microchips, raw plastic, labor)." },
      { q: "What is the formula for Break-Even Point (BEP) in units?", a: "BEP (Units) = Total Fixed Costs / (Selling Price per Unit - Variable Cost per Unit)." },
      { q: "What is Contribution Margin?", a: "The portion of sales revenue generated by each unit that exceeds variable costs, contributing to covering fixed overheads and generating profit: CM = Price - Variable Cost." },
      { q: "What is 'Design to Cost' (DTC)?", a: "A management discipline where target cost is treated as an independent design parameter equal in importance to technical performance specifications." },
      { q: "How do economies of scale reduce BOM cost at higher volumes?", a: "Suppliers offer bulk volume tiered discounts (e.g. buying 10,000 micro-controllers costs 40% less per unit than buying 100)." },
      { q: "What is CapEx amortization in product manufacturing?", a: "Spreading the upfront capital expense of expensive injection molds or tooling across the expected lifetime volume of manufactured units." },
      { q: "What is Gross Margin percentage and how is it calculated?", a: "Gross Margin % = ((Selling Price - Direct Unit Cost) / Selling Price) × 100%." },
      { q: "What is a 'BOM Scrub' during detailed engineering design?", a: "A systematic review of every component in the BOM to eliminate single-source parts, obsolete chips, and expensive over-specified tolerances." },
      { q: "What is 'Yield Loss Cost' in manufacturing economics?", a: "The financial cost of scrapped or defective parts produced on the line, which must be absorbed by the surviving good units." },
      { q: "What happens to the Break-Even Point if the selling price is reduced by 10%?", a: "The Contribution Margin decreases, which pushes the Break-Even Point to a higher volume of units required to cover fixed costs." },
      { q: "What is Payback Period?", a: "The time required for cumulative net cash inflows from product sales to equal the initial total investment capital." },
      { q: "Why must freight and warranty reserves be factored into product cost?", a: "Because shipping electronics and repairing field defects under 1-year warranty typically consume 3% to 7% of total product revenues." },
      { q: "How does Design for Assembly (DFA) reduce product labor cost?", a: "By minimizing fastener count, designing snap-fits, and standardizing tools, reducing assembly time per unit." },
      { q: "Why is product cost analysis a mandatory requirement for academic audits in GXEST605?", a: "It proves that students understand that an engineering solution is not complete until it is demonstrated to be economically viable and commercially sustainable." }
    ]
  }
];

