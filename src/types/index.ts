/**
 * Core Type Definitions for GXEST605 Platform
 * APJ Abdul Kalam Technological University (KTU)
 */

export interface CourseMetadata {
  courseCode: string;
  courseTitle: string;
  semester: string;
  regulation: string;
  credits: number;
  teachingHours: string;
  cieMarks: number;
  eseMarks: number;
  examDuration: string;
  facultyName: string;
  department: string;
  courseObjectives: string[];
}

export interface CourseOutcome {
  coNumber: string;
  statement: string;
  bloomsLevel: string;
  targetAttainment: number;
}

export interface CoPoMapping {
  coNumber: string;
  po: { [key: string]: number };
}

export interface SyllabusTopic {
  id: string;
  topicNumber: number;
  title: string;
  subtopics?: string[];
  contactHours: number;
  summary: string;
  importance: "High" | "Medium" | "Core";
}

export interface SyllabusModule {
  moduleNumber: number;
  title: string;
  contactHours: number;
  description: string;
  topics: SyllabusTopic[];
}

export interface NoteItem {
  id: string;
  topicNumber: number;
  title: string;
  moduleNumber: number;
  definition: string;
  detailedExplanation: string;
  importantConcepts: string[];
  diagramDescription?: string;
  asciiDiagram?: string;
  realWorldApplication: string;
  caseStudy: string;
  advantages: string[];
  limitations: string[];
  formulas?: { name: string; formula: string; explanation: string }[];
  keywords: string[];
  threeMarkAnswer: { question: string; answer: string; keyPoints: string[] };
  nineMarkAnswer: { question: string; answer: string; breakdown: { section: string; content: string }[] };
  vivaQnA: { question: string; answer: string }[];
}

export interface PracticalExperiment {
  experimentNumber: number;
  title: string;
  moduleLink: number;
  coMapping: string[];
  aim: string;
  requirements: string[];
  theory: string;
  procedure: string[];
  inputData: string;
  implementationDetails: string;
  demonstrationGuide: string;
  expectedOutput: string;
  result: string;
  realWorldApplications: string[];
  vivaQuestions: { q: string; a: string }[];
}

export interface ProductCaseStudy {
  id: string;
  number: number;
  title: string;
  category: string;
  summary: string;
  societalProblem: string;
  userResearch: string;
  empathizePhase: {
    empathyFindings: string;
    personaSummary: string;
    journeyTouchpoint: string;
  };
  definePhase: {
    problemStatement: string;
    successMetrics: string[];
  };
  ideatePhase: {
    divergentIdeas: string[];
    convergentSelection: string;
    scamperApplication: string;
  };
  feasibilityStudy: {
    technical: string;
    economic: string;
    market: string;
    operational: string;
    legalEthical: string;
  };
  proofOfConcept: {
    objectives: string;
    keyRisks: string[];
    validationResult: string;
  };
  detailedDesign: {
    srdSpecs: string[];
    dfmConsiderations: string;
    industrialStandards: string[];
  };
  prototyping: {
    alphaPrototype: string;
    betaPrototype: string;
    timelineStrategy: string;
  };
  pilotBuild: {
    pilotObjectives: string;
    manufacturingPartner: string;
    testingProcedures: string;
    scaleStrategy: string;
  };
  commercialization: {
    targetPrice: string;
    bepEstimate: string;
    marketStrategy: string;
  };
  billOfMaterials: { item: string; qty: number; unitCost: string; subtotal: string }[];
  totalEstimatedCost: string;
  researchReferences: string[];
  futureScope: string[];
}

export interface SolvedNumerical {
  id: string;
  number: number;
  title: string;
  category: string;
  question: string;
  givenData: { [key: string]: string | number };
  formula: string;
  substitution: string;
  stepByStepSolution: string[];
  finalAnswer: string;
  practicalInterpretation: string;
}

export interface QuestionPaperSection {
  partName: "Part A" | "Part B";
  totalMarks: number;
  instructions: string;
  questions: {
    qNo: number;
    moduleNo: number;
    coMapping: string;
    bloomsLevel: string;
    marks: number;
    questionText: string;
    subDivisions?: { subLabel: string; marks: number; text: string; answerText: string }[];
    solutionText: string;
    markingScheme: { criterion: string; marks: number }[];
  }[];
}

export interface ModelQuestionPaper {
  examTitle: string;
  courseCode: string;
  courseName: string;
  semester: string;
  maxMarks: number;
  duration: string;
  partA: QuestionPaperSection;
  partB: QuestionPaperSection;
}

export interface StudentAuditRecord {
  regNo: string;
  name: string;
  attendance: number;
  assignments: number;
  internalExam: number;
  reflectiveJournal: number;
  totalCie: number;
  status: "Eligible" | "Condonation Required" | "Withheld";
  portfolioTopic: string;
  vivaScore: number;
}

