# GXEST605 - Design Thinking and Product Development Platform Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete KTU teaching, innovation laboratory, product development, and academic documentation platform for GXEST605 with notes, practicals, numericals, 11-part audit file, interactive simulators, ML analytics lab, and luxury design studio UI.

**Architecture:** A unified full-stack system consisting of:
1. Comprehensive academic data stores and structured JSON/TS modules representing all KTU syllabus topics (Modules 1-4, 88 subtopics), 20 practical experiments with 300+ viva questions, 10 complete product development case studies, 15 solved numerical problems, model question papers, and all 11 mandatory academic audit sections.
2. An interactive, responsive React + TypeScript + Tailwind CSS web platform with Three.js product visualizers, interactive design thinking tools (Empathy Map, Persona, Journey Map, 5 Whys, SCAMPER, Six Hats, Decision Matrix, DFMEA, TRL), and academic audit export.
3. A Python data analytics & FastAPI microservice with Scikit-learn models (sentiment, customer segmentation, recommendation, market prediction, defect classification, satisfaction prediction) and an automated Excel course file generator using openpyxl enforcing KTU's 40-mark CIE schema (Attendance: 5, Assignments: 20, Internal Exam: 10, Reflective Journal: 5).

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS, Lucide React, Three.js, Python 3.14, FastAPI, Scikit-learn, Pandas, NumPy, openpyxl.

**Spec:** GXEST605 Official Syllabus (`Design-Thinking-and-Product-Development-Group-A-B.pdf`) & Mandatory Index File (`Index Course file LAB.docx`).

## Global Constraints
- Strictly preserve the four-module KTU syllabus sequence and all 88 topics without omissions.
- Exact CIE mark distribution: Attendance (5), Assignments (20), Internal Exam (10), Reflective Journal & Portfolio (5) = 40 Marks.
- ESE format: 60 Marks total (Part A: 8 questions × 3 marks = 24 marks; Part B: 4 questions × 9 marks = 36 marks with 2 questions per module, 1 to be answered).
- Design theme: Burgundy (`#4A0E17`, `#58112C`), Champagne Gold (`#D4AF37`, `#F3E5AB`), Ivory (`#FDFBF7`), Dark Navy (`#0A1128`), Glassmorphism.
- Footer on every view: `Jane Rose | Department of Computer Science & Engineering`.
- Mandatory 11-section Index Course File sequence exactly matching `Index Course file LAB.docx`.
- All sample feedback must be clearly labeled as sample.

## Review Focus
1. CIE Mark breakdown accuracy: ensure formulas in Excel and code sum strictly to 40 with the exact 5-20-10-5 split.
2. ESE Question paper structure: ensure 8x3 + 4x9 = 60 with exactly two questions per module in Part B.
3. 20 Practical experiments: verify each experiment contains all required headings and minimum 15 viva questions with answers.
4. Numerical problems: verify all 15 numerical problems contain Given Data, Formula, Substitution, Step-by-Step, and Final Answer.
5. ML models: verify reproducible outputs and working fallbacks for local and client execution.

---

### Task 1: Python Analytics & Academic Audit Excel Generator Engine
**Files:**
- Create: `backend/models_and_analytics.py`
- Create: `backend/generate_academic_audit_sheets.py`
- Create: `backend/api_server.py`
- Test: `backend/test_backend.py`

**Interfaces:**
- Consumes: Scikit-learn, pandas, numpy, openpyxl, fastapi.
- Produces: CLI script & FastAPI endpoints for 6 ML models and generated `GXEST605_Internal_Marks_Audit.xlsx` matching KTU 40-mark CIE breakdown.

- [ ] **Step 1: Write tests for Python analytics and Excel generator**
- [ ] **Step 2: Run test to verify it fails**
- [ ] **Step 3: Implement data analytics models, synthetic datasets, and KTU Excel generator**
- [ ] **Step 4: Run tests to verify all models and Excel generation pass**

---

### Task 2: Core Academic Data Stores & KTU Notes Engine
**Files:**
- Create: `src/data/syllabusData.ts` (All 4 modules, 88 topics, CO-PO mapping, textbooks)
- Create: `src/data/notesData.ts` (Comprehensive notes, diagrams, 3-mark & 9-mark answers, viva)
- Create: `src/data/experimentsData.ts` (All 20 practical experiments with 15+ viva Q&As each = 300+ viva questions)
- Create: `src/data/caseStudiesData.ts` (10 complete real-world product lifecycle case studies)
- Create: `src/data/numericalProblemsData.ts` (15 categories with step-by-step solutions)
- Create: `src/data/questionPapersData.ts` (60-mark model question paper, internal exam, answer keys)
- Create: `src/data/academicAuditData.ts` (All 11 sections matching `Index Course file LAB.docx`)

- [ ] **Step 1: Validate data structures and types**
- [ ] **Step 2: Implement exhaustive academic content files with strict KTU adherence**
- [ ] **Step 3: Verify content completeness against syllabus and index documents**

---

### Task 3: Interactive Platform Setup & Design System
**Files:**
- Create: `package.json`, `tsconfig.json`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `index.html`
- Create: `src/index.css` (Burgundy, Champagne Gold, Ivory, Dark Navy, Glassmorphism, animations)
- Create: `src/types/index.ts`
- Create: `src/components/Navbar.tsx`
- Create: `src/components/Footer.tsx` (Featuring Jane Rose | Department of Computer Science & Engineering)

- [ ] **Step 1: Initialize project configuration and tailwind styles**
- [ ] **Step 2: Implement responsive navigation, glassmorphic layout, and footer**
- [ ] **Step 3: Verify layout rendering and theme token consistency**

---

### Task 4: Interactive Design Thinking Simulators & Practical Labs
**Files:**
- Create: `src/components/labs/EmpathyMapLab.tsx`
- Create: `src/components/labs/PersonaBuilderLab.tsx`
- Create: `src/components/labs/CustomerJourneyLab.tsx`
- Create: `src/components/labs/FiveWhysLab.tsx`
- Create: `src/components/labs/ScamperLab.tsx`
- Create: `src/components/labs/SixHatsLab.tsx`
- Create: `src/components/labs/DecisionMatrixLab.tsx`
- Create: `src/components/labs/DfmeaLab.tsx`
- Create: `src/components/labs/TrlAssessmentLab.tsx`
- Create: `src/components/labs/ExperimentsViewer.tsx` (Full 20-experiment manual with search & viva bank)

- [ ] **Step 1: Build interactive UI states and calculation handlers**
- [ ] **Step 2: Implement export/print capabilities for student submissions**
- [ ] **Step 3: Test user interactivity and calculation accuracy**

---

### Task 5: 3D Product Case Studies Studio & Numerical Calculators
**Files:**
- Create: `src/components/caseStudies/ProductViewer3D.tsx` (Interactive Canvas / Three.js 3D models)
- Create: `src/components/caseStudies/CaseStudiesExplorer.tsx`
- Create: `src/components/calculators/NumericalCalculators.tsx` (Break-even, RPN, Cost, Scaling, ROI)
- Create: `src/components/calculators/SolvedNumericalsViewer.tsx`

- [ ] **Step 1: Implement 3D product viewports for the 10 products**
- [ ] **Step 2: Build interactive step-by-step numerical calculators with visual charts**
- [ ] **Step 3: Verify mathematical accuracy and 3D rendering**

---

### Task 6: ML Dataset & Research Laboratory
**Files:**
- Create: `src/components/ml/ResearchLab.tsx`
- Create: `src/components/ml/SentimentAnalysisDemo.tsx`
- Create: `src/components/ml/CustomerSegmentationDemo.tsx`
- Create: `src/components/ml/ProductRecommenderDemo.tsx`
- Create: `src/components/ml/QualityDefectDemo.tsx`
- Create: `src/components/ml/MarketDemandDemo.tsx`
- Create: `src/components/ml/SatisfactionPredictorDemo.tsx`

- [ ] **Step 1: Build client-side interactive ML inference engines & charts**
- [ ] **Step 2: Connect with FastAPI endpoints when available or run full client-side ML fallbacks**
- [ ] **Step 3: Verify model evaluations, metrics (accuracy, ROC-AUC, confusion matrices) and data tables**

---

### Task 7: Academic Audit, Course File & Examination Hub
**Files:**
- Create: `src/components/audit/AcademicAuditHub.tsx` (All 11 sections from `Index Course file LAB.docx`)
- Create: `src/components/audit/InternalMarksTable.tsx` (Live CIE calculator + Excel export)
- Create: `src/components/audit/StudentSampleRecord.tsx` (Print-ready audited student record)
- Create: `src/components/exam/ModelExamViewer.tsx` (Full 60-mark KTU paper with Part A & B answers)
- Create: `src/components/notes/NotesExplorer.tsx` (Modules 1-4 complete KTU notes)

- [ ] **Step 1: Implement all 11 audit sections with print/export styling**
- [ ] **Step 2: Implement model question paper deconstruction and marking scheme**
- [ ] **Step 3: Verify KTU compliance, rubrics, and CO-PO alignments**

---

### Task 8: Innovation Dashboard & Full System Integration
**Files:**
- Create: `src/components/dashboard/InnovationDashboard.tsx`
- Create: `src/App.tsx`
- Create: `src/main.tsx`

- [ ] **Step 1: Integrate all views into high-performance tabbed & routed navigation**
- [ ] **Step 2: Build innovation dashboard with idea repository, TRL metrics, and status cards**
- [ ] **Step 3: Run full production build, automated verification tests, and verify all Part A-K requirements**

