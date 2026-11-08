import { CourseMetadata, CourseOutcome, CoPoMapping, SyllabusModule } from "../types";

export const courseMetadata: CourseMetadata = {
  courseCode: "GXEST605",
  courseTitle: "DESIGN THINKING AND PRODUCT DEVELOPMENT",
  semester: "S6",
  regulation: "KTU 2024 Scheme",
  credits: 2,
  teachingHours: "2:0:0:0 (Lecture: 2, Tutorial: 0, Practical: 0, Research: 0)",
  cieMarks: 40,
  eseMarks: 60,
  examDuration: "2 Hours 30 Minutes",
  facultyName: "Jane Rose",
  department: "Department of Computer Science & Engineering",
  courseObjectives: [
    "To guide students through the iterative stages of design thinking, including empathizing with users, defining problems, ideating solutions and developing Proof of Concepts (PoC) and technical feasibility studies.",
    "To promote the development of critical thinking skills by engaging students in integrative inquiry, where they ask meaningful questions that connect classroom knowledge with real-world applications.",
    "To equip students with the ability to involve in product design considering the sustainability, inclusivity, diversity and equity aspects."
  ]
};

export const courseOutcomes: CourseOutcome[] = [
  {
    coNumber: "CO1",
    statement: "Empathize to capture the user needs and define the objectives with due consideration of various aspects including inclusivity, diversity and equity",
    bloomsLevel: "K5 (Evaluate)",
    targetAttainment: 80
  },
  {
    coNumber: "CO2",
    statement: "Ideate using divergent and convergent thinking to arrive at innovative ideas keeping in mind the sustainability, inclusivity, diversity and equity aspects",
    bloomsLevel: "K6 (Create)",
    targetAttainment: 75
  },
  {
    coNumber: "CO3",
    statement: "Engage in Human Centric Design of innovative products meeting the specifications",
    bloomsLevel: "K5 (Evaluate)",
    targetAttainment: 80
  },
  {
    coNumber: "CO4",
    statement: "Develop Proof of Concepts (PoC), prototypes & pilot build of products and test their performance with respect to the Specification Requirement Document",
    bloomsLevel: "K4 (Analyse)",
    targetAttainment: 75
  },
  {
    coNumber: "CO5",
    statement: "Reflect on professional and personal growth through the learnings in the course, identifying areas for further development",
    bloomsLevel: "K4 (Analyse)",
    targetAttainment: 85
  }
];

export const coPoMappingTable: CoPoMapping[] = [
  { coNumber: "CO1", po: { PO1: 3, PO2: 2, PO3: 2, PO4: 0, PO5: 2, PO6: 3, PO7: 3, PO8: 3, PO9: 2, PO10: 2, PO11: 0, PO12: 3 } },
  { coNumber: "CO2", po: { PO1: 3, PO2: 2, PO3: 3, PO4: 0, PO5: 2, PO6: 3, PO7: 3, PO8: 3, PO9: 2, PO10: 2, PO11: 0, PO12: 3 } },
  { coNumber: "CO3", po: { PO1: 3, PO2: 2, PO3: 3, PO4: 0, PO5: 2, PO6: 3, PO7: 3, PO8: 2, PO9: 2, PO10: 2, PO11: 0, PO12: 3 } },
  { coNumber: "CO4", po: { PO1: 3, PO2: 2, PO3: 2, PO4: 0, PO5: 3, PO6: 3, PO7: 3, PO8: 2, PO9: 2, PO10: 2, PO11: 0, PO12: 3 } },
  { coNumber: "CO5", po: { PO1: 3, PO2: 0, PO3: 0, PO4: 0, PO5: 3, PO6: 3, PO7: 2, PO8: 2, PO9: 2, PO10: 0, PO11: 0, PO12: 3 } }
];

export const officialTextbooks = [
  {
    slNo: 1,
    title: "Product Sense: Engineering your ideas into reality",
    authors: "Dr. K R Suresh Nair",
    publisher: "NotionPress.com",
    year: "2024"
  },
  {
    slNo: 2,
    title: "Change by Design: How Design Thinking Transforms Organizations and Inspires Innovation",
    authors: "Tim Brown",
    publisher: "HarperCollins Publishers Ltd.",
    year: "2009"
  },
  {
    slNo: 3,
    title: "Design Thinking for Strategic Innovation",
    authors: "Idris Mootee",
    publisher: "John Wiley & Sons Inc.",
    year: "2013"
  }
];

export const syllabusModules: SyllabusModule[] = [
  {
    moduleNumber: 1,
    title: "Fundamentals of Design Thinking and Product Development",
    contactHours: 6,
    description: "Covers the overarching product development lifecycle, design thinking principles, societal problem identification, human-centered design, user diversity, sustainability dimensions, TRL, originality, patentability, economic landscape, USP, manufacturability, and business modeling.",
    topics: [
      { id: "m1-1", topicNumber: 1, title: "Overview of stages of product development lifecycle", contactHours: 0.5, summary: "End-to-end stages from discovery to commercialization and obsolescence.", importance: "Core" },
      { id: "m1-2", topicNumber: 2, title: "Design thinking – definition", contactHours: 0.25, summary: "Human-centered, iterative, non-linear problem-solving methodology.", importance: "Core" },
      { id: "m1-3", topicNumber: 3, title: "Design thinking for product innovation", contactHours: 0.25, summary: "Intersection of human desirability, technological feasibility, and economic viability.", importance: "High" },
      { id: "m1-4", topicNumber: 4, title: "Bringing social impact in ideation", contactHours: 0.25, summary: "Targeting systemic social challenges within early ideation.", importance: "High" },
      { id: "m1-5", topicNumber: 5, title: "Identifying societal needs", contactHours: 0.25, summary: "Techniques to uncover unmet, latent, and expressed societal pain points.", importance: "High" },
      { id: "m1-6", topicNumber: 6, title: "Understanding multifaceted issues", contactHours: 0.25, summary: "Systems thinking approach to wicked, interconnected problems.", importance: "Medium" },
      { id: "m1-7", topicNumber: 7, title: "Community engagement and empathetic design", contactHours: 0.25, summary: "Participatory co-design with grassroots communities.", importance: "High" },
      { id: "m1-8", topicNumber: 8, title: "Technological innovation meeting societal needs", contactHours: 0.25, summary: "Appropriate technology frameworks for sustainable social impact.", importance: "Core" },
      { id: "m1-9", topicNumber: 9, title: "Understanding and bridging the divide using Human-Centred Design", contactHours: 0.25, summary: "Closing digital, literacy, and socio-economic divides through HCD.", importance: "High" },
      { id: "m1-10", topicNumber: 10, title: "Designing for inclusivity in product development", contactHours: 0.25, summary: "Universal design principles ensuring access for all ability tiers.", importance: "Core" },
      { id: "m1-11", topicNumber: 11, title: "Embracing user diversity", contactHours: 0.25, summary: "Accounting for neurodiversity, cultural nuances, and demographic variety.", importance: "High" },
      { id: "m1-12", topicNumber: 12, title: "Long-term impact", contactHours: 0.25, summary: "Life-cycle evaluation beyond initial product launch.", importance: "Medium" },
      { id: "m1-13", topicNumber: 13, title: "Sustainability: environmental, economic and social dimensions", contactHours: 0.5, summary: "Triple bottom line framework (People, Planet, Profit).", importance: "Core" },
      { id: "m1-14", topicNumber: 14, title: "Technology Readiness Level in the innovation lifecycle", contactHours: 0.5, summary: "NASA TRL 1 to 9 scale and innovation gatekeeping.", importance: "Core" },
      { id: "m1-15", topicNumber: 15, title: "Self-check on innovative ideas", contactHours: 0.25, summary: "Rigorous self-audit frameworks before committing resources.", importance: "Medium" },
      { id: "m1-16", topicNumber: 16, title: "Originality of ideas", contactHours: 0.25, summary: "Prior art search, novelty verification, and incremental vs radical delta.", importance: "High" },
      { id: "m1-17", topicNumber: 17, title: "Innovation landscape", contactHours: 0.25, summary: "Mapping competitors, whitespace, and market substitute solutions.", importance: "High" },
      { id: "m1-18", topicNumber: 18, title: "Patentability", contactHours: 0.25, summary: "Criteria: Novelty, Inventive Step (Non-obviousness), and Industrial Applicability.", importance: "Core" },
      { id: "m1-19", topicNumber: 19, title: "Economic landscape", contactHours: 0.25, summary: "Cost of living, willingness to pay, and macroeconomic constraints.", importance: "High" },
      { id: "m1-20", topicNumber: 20, title: "Unique Selling Proposition", contactHours: 0.25, summary: "Defining clear, defensible, and compelling competitive advantage.", importance: "Core" },
      { id: "m1-21", topicNumber: 21, title: "Repeatability and manufacturability", contactHours: 0.25, summary: "High-yield consistency across volume production lines.", importance: "Core" },
      { id: "m1-22", topicNumber: 22, title: "Sustainability", contactHours: 0.25, summary: "Circular economy integration, modular repairability, and end-of-life disposal.", importance: "High" },
      { id: "m1-23", topicNumber: 23, title: "Business models for comprehensive analysis", contactHours: 0.5, summary: "Stanford Business Model Canvas & Osterwalder 9 building blocks.", importance: "Core" }
    ]
  },
  {
    moduleNumber: 2,
    title: "Empathize and Define",
    contactHours: 6,
    description: "Deep dive into the first two design thinking phases: empathy immersion methods, root-cause 5 Whys, 5W+H questioning, empathy map construction, customer journey mapping, user personas, storytelling, critical items diagrams, and defining measurable success.",
    topics: [
      { id: "m2-1", topicNumber: 1, title: "Design thinking phases", contactHours: 0.5, summary: "Stanford d.school 5-stage & Double Diamond iterative architectures.", importance: "Core" },
      { id: "m2-2", topicNumber: 2, title: "Role of empathy in design thinking", contactHours: 0.25, summary: "Empathy as the cognitive bridge from assumption to actual human need.", importance: "Core" },
      { id: "m2-3", topicNumber: 3, title: "Methods of the empathize phase", contactHours: 0.5, summary: "Observation, contextual inquiry, semi-structured interviews, immersion.", importance: "Core" },
      { id: "m2-4", topicNumber: 4, title: "5 Whys", contactHours: 0.25, summary: "Root-cause interrogative analysis formulated by Sakichi Toyoda.", importance: "Core" },
      { id: "m2-5", topicNumber: 5, title: "5W+H questions", contactHours: 0.25, summary: "Who, What, Where, When, Why, and How systematic inquiry.", importance: "High" },
      { id: "m2-6", topicNumber: 6, title: "Empathy maps", contactHours: 0.5, summary: "Says, Thinks, Does, Feels, Pains, and Gains quadrant canvas.", importance: "Core" },
      { id: "m2-7", topicNumber: 7, title: "Activities before empathy mapping", contactHours: 0.25, summary: "User recruitment, interview protocols, consent forms, and objective setting.", importance: "High" },
      { id: "m2-8", topicNumber: 8, title: "Activities during and after empathy mapping", contactHours: 0.5, summary: "Synthesizing raw notes, affinity clustering, and extracting latent insights.", importance: "Core" },
      { id: "m2-9", topicNumber: 9, title: "Empathy tools", contactHours: 0.25, summary: "Sensory impairment simulators, fly-on-the-wall observation, camera studies.", importance: "High" },
      { id: "m2-10", topicNumber: 10, title: "Customer Journey Map", contactHours: 0.5, summary: "Timeline-based mapping of user stages, touchpoints, emotions, and pain points.", importance: "Core" },
      { id: "m2-11", topicNumber: 11, title: "Personas", contactHours: 0.5, summary: "Archetypal representations of user segments with goals, frustrations, and traits.", importance: "Core" },
      { id: "m2-12", topicNumber: 12, title: "Methods of the define phase", contactHours: 0.5, summary: "Point of View (POV) formula and 'How Might We' (HMW) challenge framing.", importance: "Core" },
      { id: "m2-13", topicNumber: 13, title: "Storytelling", contactHours: 0.5, summary: "Narrative architectures that communicate user struggles and envisioned solutions.", importance: "High" },
      { id: "m2-14", topicNumber: 14, title: "Critical items diagrams", contactHours: 0.5, summary: "Prioritization hierarchies isolating essential vs secondary feature constraints.", importance: "High" },
      { id: "m2-15", topicNumber: 15, title: "Define success", contactHours: 0.25, summary: "Formulating quantitative KPIs, OKRs, and acceptance criteria.", importance: "Core" }
    ]
  },
  {
    moduleNumber: 3,
    title: "Ideation and Proof of Concept",
    contactHours: 6,
    description: "Explores creative divergent and convergent ideation tools, research-backed ideation, technology trend scouting, six-dimensional feasibility studies, and rigorous Proof of Concept (PoC) validation, risk mitigation, and storytelling.",
    topics: [
      { id: "m3-1", topicNumber: 1, title: "Stages of ideation", contactHours: 0.25, summary: "Preparation, divergence, incubation, illumination, and convergence.", importance: "Core" },
      { id: "m3-2", topicNumber: 2, title: "Divergent thinking tools", contactHours: 0.5, summary: "SCAMPER, Brainstorming, Mind Mapping, Crazy Eights, Worst Idea.", importance: "Core" },
      { id: "m3-3", topicNumber: 3, title: "Convergent thinking tools", contactHours: 0.5, summary: "Six Thinking Hats, Dot Voting, 2x2 Impact Matrix, Decision Matrices.", importance: "Core" },
      { id: "m3-4", topicNumber: 4, title: "Idea capturing tools", contactHours: 0.25, summary: "Kanban boards, visual sketch repositories, Miro/FigJam boards.", importance: "Medium" },
      { id: "m3-5", topicNumber: 5, title: "Cross-industry inspiration", contactHours: 0.25, summary: "Biomimicry, automotive-to-medical analogies, aerospace ergonomics.", importance: "High" },
      { id: "m3-6", topicNumber: 6, title: "Role of research in ideation", contactHours: 0.25, summary: "Grounding imagination in verified empirical realities.", importance: "High" },
      { id: "m3-7", topicNumber: 7, title: "Market research", contactHours: 0.25, summary: "TAM, SAM, SOM calculations, competitor matrices, market sizing.", importance: "Core" },
      { id: "m3-8", topicNumber: 8, title: "Consumer research", contactHours: 0.25, summary: "Focus groups, surveys, ethnographic immersion, behavioral data.", importance: "High" },
      { id: "m3-9", topicNumber: 9, title: "Leveraging research for informed ideation", contactHours: 0.25, summary: "Translating research data into actionable design criteria.", importance: "High" },
      { id: "m3-10", topicNumber: 10, title: "Technological trends", contactHours: 0.25, summary: "Gartner Hype Cycle and exponential technology trajectories.", importance: "Medium" },
      { id: "m3-11", topicNumber: 11, title: "Navigating the technological landscape", contactHours: 0.25, summary: "Assessing open-source stacks, component availability, and chip supply chains.", importance: "High" },
      { id: "m3-12", topicNumber: 12, title: "Integrating emerging technologies", contactHours: 0.25, summary: "Edge AI, TinyML, BLE mesh, IoT sensors, Computer Vision.", importance: "Core" },
      { id: "m3-13", topicNumber: 13, title: "Technical feasibility", contactHours: 0.25, summary: "Physics boundaries, component limits, computational complexity.", importance: "Core" },
      { id: "m3-14", topicNumber: 14, title: "Economic feasibility", contactHours: 0.25, summary: "CapEx, OpEx, BOM costs, gross margins, return on investment.", importance: "Core" },
      { id: "m3-15", topicNumber: 15, title: "Market feasibility", contactHours: 0.25, summary: "Willingness to buy, distribution channels, customer acquisition cost.", importance: "Core" },
      { id: "m3-16", topicNumber: 16, title: "Operational feasibility", contactHours: 0.25, summary: "Supply chain agility, maintenance infrastructure, manufacturing skills.", importance: "High" },
      { id: "m3-17", topicNumber: 17, title: "Legal feasibility", contactHours: 0.25, summary: "IP clearance (Freedom to Operate), GDPR/DPDP, labor laws.", importance: "Core" },
      { id: "m3-18", topicNumber: 18, title: "Ethical feasibility", contactHours: 0.25, summary: "Algorithmic bias, user privacy, electronic waste stewardship.", importance: "Core" },
      { id: "m3-19", topicNumber: 19, title: "Ideation session techniques and tips", contactHours: 0.25, summary: "Deferring judgment, timeboxing, warmups, psychological safety.", importance: "High" },
      { id: "m3-20", topicNumber: 20, title: "Setting objectives", contactHours: 0.25, summary: "Clear testable hypotheses defining what PoC must validate.", importance: "Core" },
      { id: "m3-21", topicNumber: 21, title: "Risk assessment", contactHours: 0.25, summary: "Identifying critical failure points and mitigation plans.", importance: "Core" },
      { id: "m3-22", topicNumber: 22, title: "Technology scouting", contactHours: 0.25, summary: "Identifying off-the-shelf development boards, breakout modules, APIs.", importance: "High" },
      { id: "m3-23", topicNumber: 23, title: "Document and process management", contactHours: 0.25, summary: "Version-controlled engineering repositories, BOM trackers, lab notebooks.", importance: "Medium" },
      { id: "m3-24", topicNumber: 24, title: "Change management", contactHours: 0.25, summary: "Managing pivots and Engineering Change Orders (ECO).", importance: "Medium" },
      { id: "m3-25", topicNumber: 25, title: "Knowledge capture", contactHours: 0.25, summary: "Documenting failures, experimental benchmarks, design rationale.", importance: "Medium" },
      { id: "m3-26", topicNumber: 26, title: "Validating PoC", contactHours: 0.5, summary: "Pass/fail benchmarking against physical or algorithmic specifications.", importance: "Core" },
      { id: "m3-27", topicNumber: 27, title: "Storytelling in PoC presentation", contactHours: 0.25, summary: "Compelling demonstration to stakeholders, faculty, and investors.", importance: "High" }
    ]
  },
  {
    moduleNumber: 4,
    title: "Design, Prototyping and Pilot Build",
    contactHours: 6,
    description: "Detailed engineering design, SRD/SRS specifications, Design for Manufacturability, code optimization, DFMEA, Alpha & Beta prototypes, timelines, pilot build execution, manufacturing partner selection, and volume scaling.",
    topics: [
      { id: "m4-1", topicNumber: 1, title: "Transitioning from PoC to detailed design", contactHours: 0.25, summary: "Moving from breadboard proof to engineered CAD/schematics.", importance: "Core" },
      { id: "m4-2", topicNumber: 2, title: "Specification Requirement Document (SRD)", contactHours: 0.5, summary: "Hardware specifications, environmental tolerances, power budgets.", importance: "Core" },
      { id: "m4-3", topicNumber: 3, title: "Software Requirement Specification (SRS)", contactHours: 0.5, summary: "IEEE 830 compliant software architectures, interfaces, and non-functionals.", importance: "Core" },
      { id: "m4-4", topicNumber: 4, title: "Design for manufacturability (DFM/DFA)", contactHours: 0.5, summary: "Minimizing part count, standardization, injection molding drafting.", importance: "Core" },
      { id: "m4-5", topicNumber: 5, title: "Industrial standards", contactHours: 0.25, summary: "ISO 9001, IEC 60601, IEEE 802, CE, RoHS, BIS certifications.", importance: "Core" },
      { id: "m4-6", topicNumber: 6, title: "Readability of code", contactHours: 0.25, summary: "Clean code principles, PEP 8, linting, modular architecture.", importance: "High" },
      { id: "m4-7", topicNumber: 7, title: "Design to cost", contactHours: 0.25, summary: "Target costing, BOM optimization, cost vs performance trade-offs.", importance: "Core" },
      { id: "m4-8", topicNumber: 8, title: "Pre-compliance", contactHours: 0.25, summary: "In-house EMI/EMC, thermal, drop, and ingress protection (IP) testing.", importance: "High" },
      { id: "m4-9", topicNumber: 9, title: "Optimized code", contactHours: 0.25, summary: "Memory efficiency, interrupt handling, real-time deterministic loops.", importance: "High" },
      { id: "m4-10", topicNumber: 10, title: "Design Failure Mode and Effects Analysis (DFMEA)", contactHours: 0.5, summary: "Severity, Occurrence, Detection ratings and Risk Priority Number (RPN).", importance: "Core" },
      { id: "m4-11", topicNumber: 11, title: "Forecasting future design changes", contactHours: 0.25, summary: "Modular expansion, firmware OTA updates, backward compatibility.", importance: "Medium" },
      { id: "m4-12", topicNumber: 12, title: "Alpha prototypes", contactHours: 0.25, summary: "'Works-like' integrated functional units built in lab setting.", importance: "Core" },
      { id: "m4-13", topicNumber: 13, title: "Beta prototypes", contactHours: 0.25, summary: "'Looks-like & Works-like' production-intent units for field validation.", importance: "Core" },
      { id: "m4-14", topicNumber: 14, title: "Transition from design to prototype", contactHours: 0.25, summary: "Fabrication workflows (3D printing, PCB milling, CNC machining).", importance: "High" },
      { id: "m4-15", topicNumber: 15, title: "Goals and expectations for alpha and beta prototypes", contactHours: 0.25, summary: "Distinct acceptance criteria: engineering verification vs customer validation.", importance: "Core" },
      { id: "m4-16", topicNumber: 16, title: "Strategies for maintaining prototype timelines", contactHours: 0.25, summary: "Critical path method (CPM), rapid turnaround vendors, sprint gating.", importance: "High" },
      { id: "m4-17", topicNumber: 17, title: "Testing and refining alpha prototypes", contactHours: 0.25, summary: "Stress testing, thermal throttling, bug remediation loops.", importance: "Core" },
      { id: "m4-18", topicNumber: 18, title: "Transitioning to beta prototypes", contactHours: 0.25, summary: "Integrating industrial enclosure, custom PCBAs, final firmware.", importance: "High" },
      { id: "m4-19", topicNumber: 19, title: "Definition and purpose of pilot build", contactHours: 0.25, summary: "Pre-production batch (50-500 units) to validate manufacturing line.", importance: "Core" },
      { id: "m4-20", topicNumber: 20, title: "Setting objectives", contactHours: 0.25, summary: "Line yield, cycle time, tact time, and defect density metrics.", importance: "Core" },
      { id: "m4-21", topicNumber: 21, title: "Identification and selection of manufacturing partners", contactHours: 0.25, summary: "Supplier auditing, EMS vendor evaluation, NDAs, tooling capacity.", importance: "Core" },
      { id: "m4-22", topicNumber: 22, title: "Testing procedures in pilot build", contactHours: 0.25, summary: "Automated optical inspection (AOI), in-circuit test (ICT), Burn-in tests.", importance: "Core" },
      { id: "m4-23", topicNumber: 23, title: "Scaling to full-scale production or implementation", contactHours: 0.25, summary: "Ramping yield curves, supplier contracts, ERP, global distribution.", importance: "Core" }
    ]
  }
];

