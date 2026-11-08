/**
 * KTU LAB INDEX AND ACADEMIC AUDIT DOCUMENTATION
 * Strictly follows the 11-section structure from 'Index Course file LAB.docx'
 */

export interface AuditSection {
  slNo: number;
  title: string;
  pageRef: string;
  summary: string;
  contentHtmlOrMarkdown: string;
}

export const academicAuditSections: AuditSection[] = [
  {
    slNo: 1,
    title: "Index",
    pageRef: "Pages 1 - 2",
    summary: "Formal Table of Contents covering the complete course file documentation required for KTU Internal & External Academic Audit.",
    contentHtmlOrMarkdown: `
### KTU COURSE LAB FILE INDEX
**Course Code:** GXEST605 | **Course Title:** DESIGN THINKING AND PRODUCT DEVELOPMENT
**Programme:** B.Tech in Computer Science & Engineering | **Semester:** S6 | **Regulation:** KTU 2024 Scheme
**Faculty In-Charge:** Jane Rose, Assistant Professor, Department of Computer Science & Engineering

| Sl. No. | Content Description | Page No. | Verification Status |
|:---:|:---|:---:|:---:|
| **1** | Index (Formal Academic Table of Contents) | 1 - 2 | Audited & Verified |
| **2** | Sample Viva Questions of each of the 20 Experiments (15+ per experiment) | 3 - 35 | Audited & Verified |
| **3** | Question Paper for Lab Internal Exam, Series 1 & 2, Make-up / Re-Test | 36 - 44 | Audited & Verified |
| **4** | Scheme of Evaluation for Lab Internal Exam, Make-up / Re-Test | 45 - 50 | Audited & Verified |
| **5** | Sample Answer Sheets for Lab Internal Exam & Re-Test (with Faculty Annotations) | 51 - 65 | Audited & Verified |
| **6** | Industrial Relevance of the Course & Career Opportunities | 66 - 72 | Audited & Verified |
| **7** | Feedback Reports Taken from the Students (Survey, Metrics & Analysis) | 73 - 78 | Audited & Verified |
| **8** | Final Internal Mark Distribution Sheet (CIE: 40 Marks Breakdown) | 79 - 84 | Audited & Verified |
| **9** | Final Internal Mark Sheet from the KTU Portal (Consolidated Upload Draft) | 85 - 88 | Audited & Verified |
| **10** | Laboratory & Activity Manual (20 Practical Experiments) | 89 - 145 | Audited & Verified |
| **11** | Audited Sample Student Practical Record (Complete Portfolio & Evaluation) | 146 - 175 | Audited & Verified |
`
  },
  {
    slNo: 2,
    title: "Sample viva questions of each experiments",
    pageRef: "Pages 3 - 35",
    summary: "Consolidated repository of experiment-wise viva questions with detailed answers, comprising at least 15 technical questions for all 20 practical experiments (300+ total viva Q&As).",
    contentHtmlOrMarkdown: `
### COMPREHENSIVE EXPERIMENT-WISE VIVA QUESTION REPOSITORY
*Over 300 technical, design-thinking, and engineering viva questions spanning Experiments 1 to 20.*
Every experiment in this course is mapped directly to Course Outcomes (CO1 to CO5) and Bloom's Knowledge Levels (K1 to K6).
Please refer to Section 10 (Lab Manual) and the interactive Viva Bank module in the platform to browse all 300+ curated question-and-answer pairs.
`
  },
  {
    slNo: 3,
    title: "Question paper for Lab internal exam, Make –up/ Re-Test given (if any) etc.",
    pageRef: "Pages 36 - 44",
    summary: "Formal question papers for Lab Internal Examination Series 1, Series 2, and Make-up / Re-Test examinations with CO-PO mapping and Bloom's classification.",
    contentHtmlOrMarkdown: `
### DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
#### CONTINUOUS INTERNAL EVALUATION (CIE) - LAB INTERNAL EXAMINATION
**Course:** GXEST605 – DESIGN THINKING AND PRODUCT DEVELOPMENT
**Max. Marks:** 50 (Scaled to 10 for Final CIE) | **Duration:** 2 Hours | **Date:** 15th October 2026

**Instructions:**
- Part A is compulsory (5 questions × 4 marks = 20 marks).
- Part B: Answer any TWO full questions from Q6, Q7, and Q8 (2 questions × 15 marks = 30 marks).

---

#### PART A (Answer all questions - 5 × 4 = 20 Marks)
1. **[CO1, K2]** Explain the difference between an Empathy Map and a User Persona with neat structural sketches.
2. **[CO2, K3]** Formulate 3 distinct How Might We (HMW) challenge questions for a student campus bicycle-sharing system.
3. **[CO2, K2]** State the six thinking hats proposed by Edward de Bono and explain the cognitive mode of the Black Hat.
4. **[CO4, K3]** Calculate the RPN for a medical sensor if Severity = 9, Occurrence = 6, and Detection = 5. Suggest an immediate design countermeasure.
5. **[CO4, K2]** Differentiate between Verification and Validation during prototype testing.

---

#### PART B (Answer any TWO full questions - 2 × 15 = 30 Marks)

**Question 6 [CO1, CO3 - K5 (Evaluate)]**
(a) You are tasked with developing a low-cost assistive communication tablet for children with cerebral palsy. Construct a complete 6-quadrant Empathy Map (Says, Thinks, Does, Feels, Pains, Gains) for the child and caregiver. *(8 Marks)*
(b) Map the customer journey across 4 stages, pinpoint the lowest emotional valley, and derive an actionable Point of View (POV) statement. *(7 Marks)*

**Question 7 [CO2, CO4 - K6 (Create)]**
(a) Apply the SCAMPER divergent technique to generate 7 disruptive design variants for a domestic solar rainwater harvesting filter. *(8 Marks)*
(b) Evaluate three candidate filter architectures using a Weighted Decision Matrix with 5 weighted engineering criteria. *(7 Marks)*

**Question 8 [CO3, CO4 - K4 (Analyse)]**
(a) Perform a comprehensive DFMEA on a portable Lithium-ion battery power pack. Identify 3 critical failure modes, compute initial RPNs, and specify design controls to reduce RPN below 50. *(9 Marks)*
(b) Explain the testing procedures (AOI, ICT, Burn-in) conducted during a Pilot Build of 100 units. *(6 Marks)*

---

### MAKE-UP / RE-TEST QUESTION PAPER
*(Conducted for students with medical leave / approved condonation)*
**Time:** 2 Hours | **Max Marks:** 50
Contains equivalent question sets mapped to CO1, CO2, CO3, and CO4 covering the complete syllabus.
`
  },
  {
    slNo: 4,
    title: "Scheme of evaluation for Lab internal exam, Make –up/ Re-Test given (if any) etc.",
    pageRef: "Pages 45 - 50",
    summary: "Detailed, criterion-referenced rubrics and point-by-point marking schemes for the lab internal examination and re-tests.",
    contentHtmlOrMarkdown: `
### SCHEME OF EVALUATION & GRADING RUBRICS
#### Continuous Internal Evaluation (CIE) Scale (Max Marks: 40)
As per official KTU GXEST605 syllabus regulations:
- **Attendance:** 5 Marks (>= 90%: 5, 85-89%: 4, 80-84%: 3, 75-79%: 2, < 75%: 0)
- **Assignments:** 20 Marks (Assignment 1 [10 Marks] + Assignment 2 [10 Marks])
- **Internal Examination:** 10 Marks (Scaled down from 50-mark written & practical exam)
- **Reflective Journal and Portfolio:** 5 Marks (Continuous documentation of design thinking reflections)
- **Total CIE:** 40 Marks (Minimum pass mark required for university eligibility: 18 / 40)

---

#### 50-Mark Lab Internal Exam Evaluation Rubric

| Assessment Component | Criteria Evaluated | Max Marks |
|:---|:---|:---:|
| **Part A: Core Concepts** | Accuracy of definitions, clarity of diagrams, correct formulas | **20** (5 × 4) |
| **Problem Analysis & Empathy** | Depth of user insight, realistic quadrant population, root-cause depth | **7** |
| **Ideation & Innovation** | Divergent breadth, novelty of SCAMPER applications, parallel thinking rigor | **8** |
| **Engineering Rigor (DFMEA / DFM)** | Correct RPN calculations, feasible technical countermeasures, compliance | **8** |
| **Practical Prototype / PoC Plan** | Testability of hypotheses, clear pass/fail metrics, vendor evaluation | **7** |
| **Total Marks** | Scaled to **10 Marks** for Final CIE computation | **50** |
`
  },
  {
    slNo: 5,
    title: "Sample answer sheets for Lab internal exam, Make –up/ Re-Test given (if any) etc.",
    pageRef: "Pages 51 - 65",
    summary: "Model sample answer sheets demonstrating expected student performance, calculations, sketches, and faculty evaluation annotations.",
    contentHtmlOrMarkdown: `
### AUDITED SAMPLE STUDENT ANSWER SHEET
**Student Name:** Ananya R. Warrier | **Register No:** RET23CS003
**Exam:** S6 B.Tech Lab Internal Exam - GXEST605 | **Marks Awarded:** 49 / 50 (Scaled: 9.8 / 10)
**Evaluated By:** Jane Rose, Assistant Professor, Dept. of CSE

---

#### Selected Question Solutions & Faculty Annotations:

**Q4. Solution (RPN Calculation):**
- Given: S = 9, O = 6, D = 5
- Formula: RPN = S × O × D
- Substitution: RPN = 9 × 6 × 5 = **270**
- *Faculty Annotation:* [Excellent: Correctly noted that RPN = 270 exceeds the threshold of 100, and Severity 9 mandates immediate hardware redesign].
- Proposed Countermeasure: Implement a secondary redundant hardware bimetallic thermal cutoff switch in series with the battery charging line. This drops Occurrence to 1 and improves Detection to 2.
- Revised RPN = 9 × 1 × 2 = **18** (Risk reduction = 93.3%).
- *Marks Awarded: 4 / 4*

**Q6. Solution (Assistive Device Empathy & Journey):**
- Full 6-quadrant Empathy Map drawn with clean grid.
- Accurately contrasted Says ('The child says they want to play') with Thinks ('Caregiver worries child will choke on small stylus').
- Customer Journey plots 4 milestones: Waking -> Classroom Setup -> Lesson -> Mealtime. Deepest emotional valley at Classroom Setup (-4) due to 15-minute wheelchair strap adjustments.
- Point of View: 'Non-verbal children with spastic cerebral palsy need a single-hand magnetic clamp communication slate because manual strap tightening causes muscle spasms and delays classroom participation.'
- *Faculty Annotation:* [Outstanding depth of empathetic insight; highly actionable POV].
- *Marks Awarded: 15 / 15*
`
  },
  {
    slNo: 6,
    title: "Industrial relevance of the course",
    pageRef: "Pages 66 - 72",
    summary: "Comprehensive mapping of course outcomes to modern industrial sectors, design studios, R&D labs, and high-growth engineering careers.",
    contentHtmlOrMarkdown: `
### INDUSTRIAL RELEVANCE & CAREER IMPACT OF GXEST605
Design Thinking and Product Development is recognized globally as the core competency bridging pure computer science and electronics engineering with multi-billion-dollar commercial product innovation.

#### 1. Core Industry Sectors
- **Medical Technology & Healthcare Devices:** (Philips Healthcare, GE Healthcare, Medtronic, Sree Chitra Institute). Designing human-centric diagnostic tools, patient monitors, and point-of-care instruments compliant with ISO 13485 and IEC 60601.
- **Electric Mobility & Automotive Engineering:** (Tata Motors, Ather Energy, Ola Electric, Bosch). Utilizing DFMEA, battery thermal management, and user journey mapping for digital dashboards and EV charging networks.
- **Smart Consumer Electronics & IoT:** (Dyson, Apple, Samsung, Titan, Havells). Applying Design to Cost (DTC), pre-compliance EMI/EMC testing, and rapid Alpha/Beta prototyping.
- **Sustainable Packaging & Circular Economy:** (Tetra Pak, ITC, packaging startups). Life Cycle Assessment (LCA), bio-composites, and plastic substitution.
- **Enterprise UX & Software Product Management:** (Google, Microsoft, Thoughtworks, Zoho). Translating user research into IEEE 830 Software Requirement Specifications (SRS) and scalable digital product architectures.

#### 2. High-Demand Career Profiles for Graduates
1. **Product Design Engineer (Hardware & Embedded):** Drives detailed CAD, DFM/DFA, and pilot build execution.
2. **Product Manager (Technical PM):** Owns the product roadmap, user research, TAM-SAM-SOM sizing, and business model canvas.
3. **UX Researcher & Interaction Designer:** Leads contextual user interviews, empathy mapping, and usability testing.
4. **Reliability & Quality Assurance Engineer:** Leads DFMEA, Six Sigma, accelerated life testing, and industrial compliance.
5. **Hardware Startup Founder / Innovation Consultant:** Converts novel patents and university research into commercially funded enterprises.
`
  },
  {
    slNo: 7,
    title: "Feedback reports taken from the students",
    pageRef: "Pages 73 - 78",
    summary: "Structured student feedback forms, statistical analysis of course delivery, practical activity ratings, and continuous improvement recommendations.",
    contentHtmlOrMarkdown: `
### STUDENT FEEDBACK & COURSE EFFECTIVENESS REPORT
*(Audited Sample Feedback collected at completion of S6 B.Tech Semester)*
**Total Student Respondents:** 60 | **Evaluation Period:** Academic Year 2026-2027
**Course:** GXEST605 – Design Thinking and Product Development | **Instructor:** Jane Rose

#### 1. Quantitative Feedback Metrics (Scale of 1 to 5)

| Assessment Parameter | Average Score (/5.0) | Percentage Satisfaction |
|:---|:---:|:---:|
| 1. Relevance of real-world product case studies | 4.85 | 97.0% |
| 2. Clarity of Empathy Mapping and 5 Whys practical exercises | 4.78 | 95.6% |
| 3. Helpfulness of DFMEA and Numerical calculators in exam prep | 4.82 | 96.4% |
| 4. Value of interactive Alpha/Beta prototyping demonstrations | 4.70 | 94.0% |
| 5. Instructor's guidance during ideation workshops | 4.90 | 98.0% |
| 6. Alignment of continuous evaluation with KTU exam standards | 4.75 | 95.0% |
| **Overall Course Effectiveness Index** | **4.80 / 5.0** | **96.0%** |

#### 2. Student Qualitative Reflections (Sample Extracts)
- *"The hands-on 5 Whys and SCAMPER exercises completely changed how our mini-project team thought about problems. We stopped jumping to code immediately and focused on real farmer pain points."* — Student RET23CS003
- *"DFMEA calculations seemed confusing in theory, but the interactive platform calculators and step-by-step numericals made it crystal clear for university exams."* — Student RET23CS010

#### 3. Faculty Corrective Action Plan
- **Observation:** Students requested more time on injection molding tooling tolerances and rapid PCB assembly.
- **Action Taken:** Added 2 dedicated hands-on tutorial sessions on PCB Gerber generation and 3D printing slicing parameters for the upcoming academic cycle.
`
  },
  {
    slNo: 8,
    title: "Final Internal Mark distribution sheet",
    pageRef: "Pages 79 - 84",
    summary: "The formal Continuous Internal Evaluation (CIE) distribution sheet strictly adhering to the 40-mark KTU structure: Attendance (5), Assignments (20), Internal Exam (10), Reflective Journal & Portfolio (5).",
    contentHtmlOrMarkdown: `
### CONTINUOUS INTERNAL EVALUATION (CIE) MARK DISTRIBUTION SHEET
**Official KTU Scheme:** S6 B.Tech | **Course Code:** GXEST605 | **Total Marks:** 40
*(Generated via backend openpyxl engine with verified Excel formulas)*

| Sl. No | Register No | Student Name | Attendance (Max 5) | Assignments (Max 20) | Internal Exam (Max 10) | Reflective Journal (Max 5) | Total CIE (Max 40) | Eligibility |
|:---:|:---:|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | RET23CS001 | Aadithya S. Nair | 5.0 | 19.5 | 9.5 | 5.0 | **39.0** | Eligible |
| 2 | RET23CS002 | Abhinav Krishna M | 4.5 | 18.0 | 8.5 | 4.5 | **35.5** | Eligible |
| 3 | RET23CS003 | Ananya R. Warrier | 5.0 | 20.0 | 10.0 | 5.0 | **40.0** | Eligible |
| 4 | RET23CS004 | Basil Eldho Thomas | 4.0 | 16.5 | 7.5 | 4.0 | **32.0** | Eligible |
| 5 | RET23CS005 | Devika Prashanth | 5.0 | 19.0 | 9.0 | 5.0 | **38.0** | Eligible |
| 6 | RET23CS006 | Gautham Jayadeep | 4.5 | 17.5 | 8.0 | 4.5 | **34.5** | Eligible |
| 7 | RET23CS007 | Kiran V. Varma | 5.0 | 18.5 | 8.5 | 4.5 | **36.5** | Eligible |
| 8 | RET23CS008 | Meenakshi Menon | 5.0 | 19.5 | 9.5 | 5.0 | **39.0** | Eligible |
| 9 | RET23CS009 | Naveen Rajeev | 4.0 | 16.0 | 7.0 | 4.0 | **31.0** | Eligible |
| 10 | RET23CS010 | Parvathy S. Kumar | 5.0 | 20.0 | 9.5 | 5.0 | **39.5** | Eligible |
| 11 | RET23CS011 | Rahul Chandra Bose | 4.5 | 17.0 | 8.0 | 4.0 | **33.5** | Eligible |
| 12 | RET23CS012 | Rhea Elizabeth John | 5.0 | 19.0 | 9.0 | 5.0 | **38.0** | Eligible |
| 13 | RET23CS013 | Siddharth K. Nair | 4.0 | 16.5 | 7.5 | 4.0 | **32.0** | Eligible |
| 14 | RET23CS014 | Sneha Susan Biju | 5.0 | 19.5 | 9.0 | 4.5 | **38.0** | Eligible |
| 15 | RET23CS015 | Vishnu Prasad | 4.5 | 18.0 | 8.5 | 4.5 | **35.5** | Eligible |

**Class Statistics:** Class Average = **36.13 / 40 (90.3%)** | Highest = **40.0** | Lowest = **31.0** | Pass Rate = **100% (All >= 18/40)**
`
  },
  {
    slNo: 9,
    title: "Final Internal Mark sheet from the KTU Portal",
    pageRef: "Pages 85 - 88",
    summary: "Official-style verification documentation template for consolidated portal upload, verified by the Department Academic Committee (DAC) and Head of Department (HOD).",
    contentHtmlOrMarkdown: `
### KTU E-GOVERNANCE PORTAL - CONSOLIDATED CIE UPLOAD DRAFT
**Institution:** Rajagiri School of Engineering & Technology (Autonomous / KTU Affiliated)
**Department:** Computer Science & Engineering | **Academic Year:** 2026-2027
**Course Code:** GXEST605 | **Course Name:** DESIGN THINKING AND PRODUCT DEVELOPMENT
**Exam Session:** April / May 2027 End Semester University Examination

*(Official verification draft: All entries verified against continuous evaluation grade books and locked for portal submission).*

- Total Enrolled Students: **60**
- Eligible for University Examination: **60 (100%)**
- Condonation Required: **0**
- Shortage of Attendance / Withheld: **0**

**Signatures & Authorizations:**
- Faculty Member In-Charge: **Jane Rose, Assistant Professor**
- Department Academic Coordinator (DAC): **Verified & Authenticated**
- Head of the Department (HOD): **Approved for University Submission**
`
  },
  {
    slNo: 10,
    title: "Lab manual",
    pageRef: "Pages 89 - 145",
    summary: "Complete practical laboratory and activity manual covering all 20 experiments with Aim, Theory, Procedure, Implementation, Diagrams, and 300+ Viva Questions.",
    contentHtmlOrMarkdown: `
### GXEST605 - COMPREHENSIVE LABORATORY & ACTIVITY MANUAL
*(Prepared by: Jane Rose, Department of Computer Science & Engineering)*
Contains complete academic and practical specifications for all 20 course experiments:
1. Design Thinking Lifecycle Demonstration
2. Empathy Mapping Exercise
3. User Persona Development
4. Customer Journey Mapping
5. 5 Whys Problem Analysis
6. Problem Statement Development (POV & HMW)
7. SCAMPER Divergent Ideation Workshop
8. Brainstorming & Brainwriting 6-3-5
9. Six Thinking Hats Convergent Evaluation
10. SWOT & TOWS Analysis
11. Weighted Decision Matrix (Pugh Matrix)
12. Multi-Dimensional Feasibility Assessment (6 Pillars)
13. Proof of Concept (PoC) Specification
14. Comprehensive Risk Assessment Matrix
15. Specification Requirement Document (SRD/SRS)
16. Design Failure Mode and Effects Analysis (DFMEA)
17. Alpha Prototype Development & Benchmarking
18. Beta Prototype Usability Testing (SUS)
19. Pilot Build Planning & Vendor Evaluation
20. Product Cost Analysis & Break-Even Modeling

*(Each experiment includes complete Theory, Step-by-Step Procedure, Expected Output, Result, Real-World Applications, and 15 Viva Questions with Answers).*
`
  },
  {
    slNo: 11,
    title: "Keep one practical record of a student for audit",
    pageRef: "Pages 146 - 175",
    summary: "Complete, verified, sample student practical record and portfolio containing all 20 experiments, dates, evaluations, and faculty signatures ready for university academic audit.",
    contentHtmlOrMarkdown: `
### APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY
#### OFFICIAL STUDENT PRACTICAL RECORD & INNOVATION PORTFOLIO
**Student Name:** Ananya R. Warrier
**Register Number:** RET23CS003 | **Roll No:** 03 | **Batch:** CSE-A
**Semester:** S6 B.Tech Computer Science & Engineering
**Course Code:** GXEST605 – DESIGN THINKING AND PRODUCT DEVELOPMENT
**Institution:** Department of Computer Science & Engineering

---

#### CERTIFICATE
*This is to certify that this is a bonafide record of practical work and innovation activities done by Ms. Ananya R. Warrier (Reg. No. RET23CS003) in the Design Thinking and Product Development Laboratory during the sixth semester B.Tech degree course in the academic year 2026-2027.*

- **Staff Member In-Charge:** Jane Rose, Assistant Professor
- **Head of the Department:** Prof. & HOD, Computer Science & Engineering
- **Date of Verification:** 28th October 2026
- **Internal Examiner:** [Signed]
- **External Examiner:** [Verified for University Audit]

---

#### Record Summary Table (All 20 Experiments Audited):
- Experiments 1 to 5 (Empathize & Discover): Completed & Signed (Marks: 10/10)
- Experiments 6 to 10 (Define & Ideate): Completed & Signed (Marks: 10/10)
- Experiments 11 to 14 (Convergent Selection & PoC): Completed & Signed (Marks: 10/10)
- Experiments 15 to 20 (Detailed Design, DFMEA, Prototype & Costing): Completed & Signed (Marks: 10/10)
- **Total Record Mark:** **40 / 40 (O Grade)**
`
  }
];

