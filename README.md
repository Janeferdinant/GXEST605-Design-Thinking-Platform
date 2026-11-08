# GXEST605: Design Thinking and Product Development
### APJ Abdul Kalam Technological University (KTU) • S6 B.Tech Curriculum
#### Teaching, Innovation Laboratory, Real-World Product Engineering & Academic Audit Platform

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?logo=three.js)](https://threejs.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-Python-009688?logo=fastapi)](https://fastapi.tiangolo.com)
[![License: Academic](https://img.shields.io/badge/License-KTU%20Academic-gold)](#)

---

## 🏛️ Course & Faculty Attribution
- **Course Code:** `GXEST605`
- **Course Title:** Design Thinking and Product Development
- **Course Category:** Engineering Science Course (EST)
- **Credits:** 3 Credits
- **Faculty In-Charge:** **Jane Rose | Department of Computer Science & Engineering**
- **Evaluation Blueprint:**
  - **Continuous Internal Evaluation (CIE):** 40 Marks *(Attendance: 5, Assignments: 20, Internal Exam: 10, Reflective Journal: 5)*
  - **End Semester Examination (ESE):** 60 Marks *(Part A: 8 × 3 = 24 marks; Part B: 4 × 9 = 36 marks; 2.5 hours)*
  - **Minimum CIE Eligibility for ESE:** 18 / 40 Marks

---

## 🌟 Key Features & Academic Architecture

### 1. KTU Notes & 88-Topic Syllabus Explorer
- **Modules 1 to 4** covering all 88 official KTU subtopics in exact sequence without omissions.
- Definitions, in-depth explanations, ASCII system diagrams, real-world industry examples, 3-mark answers, 9-mark analytical answers, and viva bank.

### 2. 20 Practical Experiment Simulators
- Full laboratory manual matching official syllabus with **300+ viva questions (15 per lab)**.
- In-browser interactive simulators:
  - **Double Diamond** Lifecycle Simulation
  - **Empathy Map** 6-Quadrant Canvas
  - **5 Whys** Root Cause Analysis
  - **SCAMPER** 7-Prompt Divergent Ideation Workshop
  - **Weighted Pugh Decision Matrix** Calculator
  - **DFMEA** Risk Priority Number (RPN) Engine

### 3. 10 Real-World 12-Stage Product Case Studies
- End-to-end engineering journey: *Societal Problem → Empathy → Define → Ideate → Feasibility → PoC → Detailed Design → Prototype → Testing → Pilot Build → Commercialization*.
- **Interactive Three.js 3D WebGL Models** for all 10 products with full Bill of Materials (BOM) costings.
- Products: Smart Waste Segregator, Neonatal Phototherapy Unit, LoRaWAN Drip Irrigation, LiDAR Smart Walking Cane, Classroom Acoustic Monitor, Residential Greywater Filtration, Mycelium Packaging, Automated Cooker, Bidirectional Smart Meter, Braille Slate.

### 4. Machine Learning & Research Laboratory
- 6 reproducible Scikit-learn pipelines with client-side interactive inference and FastAPI backend:
  1. **Sentiment Analysis** (TF-IDF + Logistic Regression)
  2. **Customer Segmentation** (K-Means Clustering)
  3. **Product Recommendation** (TF-IDF + Cosine Similarity)
  4. **Market Demand Forecasting** (Ridge Regression)
  5. **Defect Classification** (Random Forest SMT Inspection)
  6. **Customer Satisfaction (CSAT)** (Logistic Regression)

### 5. 15 Solved Numerical Problems & Calculators
- Complete step-by-step mathematical working with Given Data, Formulas, Substitutions, Final Answers, and Practical Interpretations.
- Interactive calculators: Break-Even Point (BEP), DFMEA RPN, NASA TRL 1-9 progression, Cost-Benefit Analysis (NPV & BCR).

### 6. Solved 60-Mark KTU Model Examination Paper
- Complete ESE paper: **Part A** (8 compulsory questions × 3 marks = 24 marks) and **Part B** (4 questions × 9 marks = 36 marks, 2 choices per module) with complete solutions and faculty evaluation rubrics.

### 7. 11-Part KTU Academic Audit Hub
- Strictly conforms to `Index Course file LAB.docx`:
  1. Index
  2. Sample Viva Questions (15 per experiment, 300+ total)
  3. Internal Question Paper, Make-up & Re-test Papers
  4. Scheme of Evaluation & Rubrics
  5. Sample Answer Sheets with Faculty Markings
  6. Industrial Relevance of the Course
  7. Student Course End Feedback Reports
  8. Final Internal Mark Distribution Sheet *(Attendance: 5, Assignments: 20, Internal Exam: 10, Reflective Journal: 5 = 40 Marks)*
  9. KTU Portal Final Internal Mark Sheet
  10. Laboratory Manual
  11. Audited Sample Practical Record (Exp 16 DFMEA)
- Built-in live generator and download of [`GXEST605_Internal_Marks_Audit.xlsx`](./public/GXEST605_Internal_Marks_Audit.xlsx).

### 8. Product Innovation Dashboard
- Active student idea incubator, 5-Gate pipeline tracker, TRL 1-9 gauges, and venture registration modal.

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js 18+ and npm
- Python 3.10+ (for analytics microservice)

### 1. Frontend Web App
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Backend Analytics & Excel Generator
```bash
# Run unit tests verifying ML models and Excel workbook generator
python -m unittest backend/test_backend.py

# Start FastAPI server on port 8001
python -m uvicorn backend.api_server:app --port 8001 --host 127.0.0.1
```
Interactive API documentation available at [http://localhost:8001/docs](http://localhost:8001/docs).

---

## 📦 Project Structure

```
├── backend/
│   ├── api_server.py                      # FastAPI REST microservice
│   ├── generate_academic_audit_sheets.py  # openpyxl 40-mark CIE Excel engine
│   ├── models_and_analytics.py            # 6 Scikit-learn ML pipelines
│   └── test_backend.py                    # Automated test suite
├── docs/                                  # Implementation plans & specs
├── public/
│   └── GXEST605_Internal_Marks_Audit.xlsx # Pre-generated KTU audit workbook
├── src/
│   ├── components/
│   │   ├── audit/                         # 11-part academic audit hub
│   │   ├── calculators/                   # Solved numericals & live calculators
│   │   ├── caseStudies/                   # 10 product case studies & Three.js 3D viewers
│   │   ├── dashboard/                     # Innovation & Stage-Gate dashboard
│   │   ├── exam/                          # 60-mark KTU model exam viewer
│   │   ├── home/                          # Syllabus & course overview
│   │   ├── labs/                          # 20 practical experiments & interactive simulators
│   │   ├── ml/                            # ML research lab interfaces
│   │   ├── notes/                         # Complete 4-module KTU notes
│   │   ├── Footer.tsx                     # Mandatory academic attribution footer
│   │   └── Navbar.tsx                     # Navigation header
│   ├── data/                              # Canonical structured academic datasets
│   ├── types/                             # TypeScript definitions
│   ├── App.tsx                            # Root application view orchestrator
│   ├── index.css                          # Luxury Burgundy & Champagne Gold theme
│   └── main.tsx                           # Application DOM entry
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json                            # Vercel deployment configuration
└── vite.config.ts
```

---

## 👩‍🏫 Faculty In-Charge
**Jane Rose | Department of Computer Science & Engineering**  
*APJ Abdul Kalam Technological University (KTU)*

