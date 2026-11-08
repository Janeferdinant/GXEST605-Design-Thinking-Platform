import { SolvedNumerical } from "../types";

export const numericalProblemsData: SolvedNumerical[] = [
  {
    id: "num-1",
    number: 1,
    title: "Weighted Decision Matrix for Concept Selection",
    category: "Concept Selection",
    question: "An engineering team is evaluating three competing concepts (Concept A, Concept B, and Concept C) for a portable smart water purifier. The evaluation criteria and their percentage weights are: Manufacturing Cost (30%), Filtration Efficiency (25%), Battery Autonomy (15%), Compactness/Weight (15%), and Ease of Maintenance (15%). The raw scores (on a 1-10 scale) given by a multidisciplinary evaluation panel are:\n- Concept A: Cost = 8, Efficiency = 7, Battery = 6, Compactness = 9, Maintenance = 8\n- Concept B: Cost = 6, Efficiency = 9, Battery = 8, Compactness = 6, Maintenance = 7\n- Concept C: Cost = 9, Efficiency = 6, Battery = 7, Compactness = 7, Maintenance = 9\nCalculate the total weighted score for each concept, rank them in order of preference, and perform a sensitivity check if the weight of Filtration Efficiency is increased to 35% while Manufacturing Cost is reduced to 20%.",
    givenData: {
      "Weight_Cost": "0.30 (30%)",
      "Weight_Efficiency": "0.25 (25%)",
      "Weight_Battery": "0.15 (15%)",
      "Weight_Compactness": "0.15 (15%)",
      "Weight_Maintenance": "0.15 (15%)",
      "Scores_Concept_A": "[8, 7, 6, 9, 8]",
      "Scores_Concept_B": "[6, 9, 8, 6, 7]",
      "Scores_Concept_C": "[9, 6, 7, 7, 9]"
    },
    formula: "Total Weighted Score (S) = SUM(w_i * s_i) for i = 1 to n, where SUM(w_i) = 1.0",
    substitution: "S_A = (0.30*8) + (0.25*7) + (0.15*6) + (0.15*9) + (0.15*8)\nS_B = (0.30*6) + (0.25*9) + (0.15*8) + (0.15*6) + (0.15*7)\nS_C = (0.30*9) + (0.25*6) + (0.15*7) + (0.15*7) + (0.15*9)",
    stepByStepSolution: [
      "Step 1: Baseline Weighted Score for Concept A:\nS_A = 2.40 + 1.75 + 0.90 + 1.35 + 1.20 = 7.60 / 10",
      "Step 2: Baseline Weighted Score for Concept B:\nS_B = 1.80 + 2.25 + 1.20 + 0.90 + 1.05 = 7.20 / 10",
      "Step 3: Baseline Weighted Score for Concept C:\nS_C = 2.70 + 1.50 + 1.05 + 1.05 + 1.35 = 7.65 / 10",
      "Step 4: Baseline Ranking: Concept C (7.65) > Concept A (7.60) > Concept B (7.20). Concept C wins by a narrow margin of 0.05 points.",
      "Step 5: Sensitivity Analysis (New Weights: Cost = 0.20, Efficiency = 0.35, Others = 0.15):\nS_A' = (0.20*8) + (0.35*7) + (0.15*6) + (0.15*9) + (0.15*8) = 1.60 + 2.45 + 0.90 + 1.35 + 1.20 = 7.50\nS_B' = (0.20*6) + (0.35*9) + (0.15*8) + (0.15*6) + (0.15*7) = 1.20 + 3.15 + 1.20 + 0.90 + 1.05 = 7.50\nS_C' = (0.20*9) + (0.35*6) + (0.15*7) + (0.15*7) + (0.15*9) = 1.80 + 2.10 + 1.05 + 1.05 + 1.35 = 7.35",
      "Step 6: Sensitivity Ranking: Concept A and B tie at 7.50, while Concept C drops to third place (7.35)."
    ],
    finalAnswer: "Baseline: Concept C wins (Score = 7.65). Sensitivity Adjusted: Concepts A and B tie for first place (Score = 7.50).",
    practicalInterpretation: "While Concept C is the cheapest to make, its low filtration efficiency (6/10) makes it highly vulnerable if clinical purification standards become stricter. The team should combine the compact design of A with the filtration membrane of B."
  },
  {
    id: "num-2",
    number: 2,
    title: "Multi-Dimensional Feasibility Score Index",
    category: "Feasibility Analysis",
    question: "A proposed IoT-based wildlife collision deterrence system along railway tracks is subjected to a 6-pillar feasibility assessment. The expert review committee assigns weights and ratings (1-10) as follows: Technical Feasibility (Weight = 0.25, Score = 8.0), Economic Feasibility (Weight = 0.20, Score = 6.5), Market/Social Feasibility (Weight = 0.15, Score = 9.0), Operational Feasibility (Weight = 0.15, Score = 7.0), Legal Feasibility (Weight = 0.15, Score = 8.5), and Ethical Feasibility (Weight = 0.10, Score = 9.5). The organizational policy requires an Overall Feasibility Index (OFI) >= 7.5 and no individual score below 6.0 for Stage-Gate PoC approval. Calculate the OFI and determine whether the project advances.",
    givenData: {
      "Pillars": "Technical, Economic, Market, Operational, Legal, Ethical",
      "Weights": "[0.25, 0.20, 0.15, 0.15, 0.15, 0.10]",
      "Scores": "[8.0, 6.5, 9.0, 7.0, 8.5, 9.5]",
      "Gate_Threshold": "OFI >= 7.5 and Minimum Score >= 6.0"
    },
    formula: "OFI = SUM(w_i * s_i), where i in [Tech, Econ, Mkt, Ops, Leg, Eth]",
    substitution: "OFI = (0.25*8.0) + (0.20*6.5) + (0.15*9.0) + (0.15*7.0) + (0.15*8.5) + (0.10*9.5)",
    stepByStepSolution: [
      "Step 1: Compute individual weighted contributions:\n- Technical: 0.25 * 8.0 = 2.000\n- Economic: 0.20 * 6.5 = 1.300\n- Market/Social: 0.15 * 9.0 = 1.350\n- Operational: 0.15 * 7.0 = 1.050\n- Legal: 0.15 * 8.5 = 1.275\n- Ethical: 0.10 * 9.5 = 0.950",
      "Step 2: Sum the weighted contributions:\nOFI = 2.000 + 1.300 + 1.350 + 1.050 + 1.275 + 0.950 = 7.925",
      "Step 3: Evaluate Minimum Thresholds:\n- Minimum individual score = 6.5 (Economic Feasibility), which is > 6.0 hurdle.\n- Overall OFI = 7.925, which is > 7.5 hurdle."
    ],
    finalAnswer: "Overall Feasibility Index (OFI) = 7.925 / 10. The project passes the stage-gate review and is APPROVED for Proof of Concept (PoC) development.",
    practicalInterpretation: "Although the project achieves high societal, ethical, and technical marks, economic feasibility is relatively weak (6.5) due to high installation costs per kilometer of track. The engineering team must prioritize low-cost wireless sensor networking in the detailed design phase to safeguard commercial viability."
  },
  {
    id: "num-3",
    number: 3,
    title: "Cost-Benefit Analysis (CBA) & Benefit-Cost Ratio",
    category: "Cost-Benefit Analysis",
    question: "A municipal hospital is considering replacing traditional disposable mercury-free thermometers with a centralized IoT continuous patient temperature monitoring patch system. The upfront capital cost (CapEx) including gateways and staff training is Rs. 15,00,000. The annual operating and cloud server cost (OpEx) is Rs. 2,00,000 per year over a 4-year lifecycle. The annual quantifiable benefits (nursing labor hours saved, early sepsis detection preventing ICU admissions, and zero consumable wastage) are estimated at Rs. 7,50,000 per year. Assuming a discount rate of 10% per annum, compute the Net Present Value (NPV) and the Benefit-Cost Ratio (BCR). State whether the investment is financially justified.",
    givenData: {
      "Initial_CapEx (C0)": "Rs. 15,00,000",
      "Annual_OpEx (Ot)": "Rs. 2,00,000 / year (t = 1 to 4)",
      "Annual_Benefit (Bt)": "Rs. 7,50,000 / year (t = 1 to 4)",
      "Lifecycle (n)": "4 years",
      "Discount_Rate (r)": "10% (0.10)"
    },
    formula: "PV = Amount / (1 + r)^t\nNPV = PV(Benefits) - [CapEx + PV(OpEx)]\nBCR = PV(Benefits) / [CapEx + PV(OpEx)]",
    substitution: "Discount factors for r=10%: Year 1 = 0.9091, Year 2 = 0.8264, Year 3 = 0.7513, Year 4 = 0.6830.\nCumulative PVIFA(10%, 4) = 0.9091 + 0.8264 + 0.7513 + 0.6830 = 3.1698",
    stepByStepSolution: [
      "Step 1: Calculate Present Value of Benefits (PV_B):\nPV_B = 7,50,000 * 3.1698 = Rs. 23,77,350",
      "Step 2: Calculate Present Value of Operating Costs (PV_O):\nPV_O = 2,00,000 * 3.1698 = Rs. 6,33,960",
      "Step 3: Calculate Total Present Value of Costs (PV_C):\nPV_C = Initial CapEx + PV_O = 15,00,000 + 6,33,960 = Rs. 21,33,960",
      "Step 4: Compute Net Present Value (NPV):\nNPV = PV_B - PV_C = 23,77,350 - 21,33,960 = +Rs. 2,43,390",
      "Step 5: Compute Benefit-Cost Ratio (BCR):\nBCR = PV_B / PV_C = 23,77,350 / 21,33,960 = 1.114"
    ],
    finalAnswer: "NPV = +Rs. 2,43,390; Benefit-Cost Ratio (BCR) = 1.114. Since NPV > 0 and BCR > 1.0, the investment is financially sound and justified.",
    practicalInterpretation: "For every Rupee spent on the smart monitoring system over 4 years, the hospital recovers Rs. 1.11 in discounted tangible economic value, while simultaneously eliminating human charting error in patient wards."
  },
  {
    id: "num-4",
    number: 4,
    title: "Return on Investment (ROI) and Simple Payback Period",
    category: "Financial Feasibility",
    question: "A manufacturing unit invests Rs. 8,00,000 to implement an automated automated optical inspection (AOI) camera workstation to detect solder bridges on PCB assemblies. The automated station reduces rework labor and scrap losses, yielding an annual net cash inflow of Rs. 3,20,000. The estimated equipment salvage value at the end of its 5-year operating life is Rs. 1,00,000. Calculate: (a) Simple Payback Period in years; (b) Accounting Rate of Return (ARR) based on average investment; and (c) Total 5-year ROI percentage.",
    givenData: {
      "Initial_Investment (I)": "Rs. 8,00,000",
      "Annual_Cash_Inflow (CF)": "Rs. 3,20,000 / year",
      "Lifespan (n)": "5 years",
      "Salvage_Value (S)": "Rs. 1,00,000"
    },
    formula: "(a) Payback Period = Initial Investment / Annual Cash Inflow\n(b) Annual Depreciation = (I - S) / n; Net Annual Profit = CF - Depreciation; Average Investment = (I + S) / 2; ARR = (Net Annual Profit / Average Investment) * 100%\n(c) Total ROI % = [(Total Net Returns over Lifespan) / Initial Investment] * 100%",
    substitution: "Payback = 8,00,000 / 3,20,000\nDepreciation = (8,00,000 - 1,00,000) / 5 = 1,40,000 / yr\nNet Profit = 3,20,000 - 1,40,000 = 1,80,000 / yr\nAverage Investment = (8,00,000 + 1,00,000) / 2 = 4,50,000",
    stepByStepSolution: [
      "Step 1: Simple Payback Period:\nPayback = 8,00,000 / 3,20,000 = 2.50 years (2 years and 6 months).",
      "Step 2: Accounting Rate of Return (ARR):\n- Annual Straight-Line Depreciation = (8,00,000 - 1,00,000) / 5 = Rs. 1,40,000\n- Net Annual Accounting Profit = Rs. 3,20,000 - Rs. 1,40,000 = Rs. 1,80,000\n- Average Capital Invested = (8,00,000 + 1,00,000) / 2 = Rs. 4,50,000\n- ARR = (1,80,000 / 4,50,000) * 100% = 40.0%",
      "Step 3: Total 5-Year Return on Investment (ROI):\n- Total Cash Generated over 5 years = (3,20,000 * 5) + 1,00,000 (salvage) = Rs. 17,00,000\n- Total Net Profit = Rs. 17,00,000 - Rs. 8,00,000 = Rs. 9,00,000\n- Total ROI % = (9,00,000 / 8,00,000) * 100% = 112.5%"
    ],
    finalAnswer: "(a) Payback Period = 2.5 years; (b) ARR = 40.0%; (c) Total 5-Year ROI = 112.5%.",
    practicalInterpretation: "The capital investment pays for itself in exactly half its rated lifespan. The 40% ARR significantly exceeds typical corporate hurdle rates (15-20%), demonstrating that automated quality inspection delivers superior commercial returns."
  },
  {
    id: "num-5",
    number: 5,
    title: "Break-Even Analysis (BEP in Units & Revenue)",
    category: "Cost & Break-Even Modeling",
    question: "A hardware startup develops a smart portable water quality tester. The annual fixed costs (office rent, R&D amortization, tooling maintenance, insurance) amount to Rs. 18,00,000. The variable cost per unit (BOM parts, direct assembly labor, calibration, and packaging) is Rs. 1,400. The company plans to sell the device at a retail price of Rs. 3,800. Calculate: (a) Contribution Margin per unit; (b) Contribution Margin Ratio; (c) Break-Even Point in units; (d) Break-Even Sales Revenue; and (e) The number of units that must be sold to generate a target annual profit of Rs. 6,00,000.",
    givenData: {
      "Fixed_Cost (FC)": "Rs. 18,00,000",
      "Variable_Cost_per_unit (V)": "Rs. 1,400",
      "Selling_Price_per_unit (P)": "Rs. 3,800",
      "Target_Profit (TP)": "Rs. 6,00,000"
    },
    formula: "(a) Contribution Margin (CM) = P - V\n(b) CM Ratio = (CM / P) * 100%\n(c) BEP (Units) = FC / CM\n(d) BEP (Revenue) = BEP (Units) * P = FC / (CM Ratio)\n(e) Required Sales (Units) = (FC + TP) / CM",
    substitution: "CM = 3,800 - 1,400 = 2,400\nCM Ratio = 2,400 / 3,800\nBEP (Units) = 18,00,000 / 2,400\nRequired Units = (18,00,000 + 6,00,000) / 2,400",
    stepByStepSolution: [
      "Step 1: Calculate Unit Contribution Margin (CM):\nCM = Rs. 3,800 - Rs. 1,400 = Rs. 2,400 per unit.",
      "Step 2: Calculate Contribution Margin Ratio (CMR):\nCMR = (2,400 / 3,800) * 100% = 63.16%",
      "Step 3: Calculate Break-Even Point in Units (BEP_units):\nBEP_units = Rs. 18,00,000 / Rs. 2,400 = 750 units.",
      "Step 4: Calculate Break-Even Sales Revenue (BEP_revenue):\nBEP_revenue = 750 units * Rs. 3,800 = Rs. 28,50,000.",
      "Step 5: Units required to achieve Target Profit of Rs. 6,00,000:\nTarget Units = (18,00,000 + 6,00,000) / 2,400 = 24,00,000 / 2,400 = 1,000 units."
    ],
    finalAnswer: "(a) CM = Rs. 2,400; (b) CM Ratio = 63.16%; (c) BEP = 750 units; (d) BEP Revenue = Rs. 28,50,000; (e) Units for Rs. 6L profit = 1,000 units.",
    practicalInterpretation: "The business must sell at least 750 units (roughly 63 units/month) just to cover overheads. Every unit sold past 750 contributes Rs. 2,400 directly to pre-tax net profit."
  },
  {
    id: "num-6",
    number: 6,
    title: "Product Manufacturing Cost Breakdown (Direct & Overheads)",
    category: "Cost Engineering",
    question: "An electronics product engineering firm produces an IoT air pollution monitoring node. For an annual production run of 2,500 units, the manufacturing cost records show:\n- Direct Raw Materials & Electronic Components: Rs. 32,50,000\n- Direct Assembly Labor: 5,000 worker-hours at Rs. 180 per hour\n- Direct Machine Tooling Lease: Rs. 1,50,000\n- Factory Overhead (Factory rent, power, supervisor salaries): Rs. 6,00,000\n- Quality Control Testing & Calibration Lab Costs: Rs. 2,50,000\n- Administrative & Selling Overheads: 15% of Prime Cost\nCalculate: (a) Total Prime Cost; (b) Factory (Manufacturing) Cost; (c) Total Cost of Production; (d) Unit Production Cost; and (e) Selling Price per unit if the company targets a 25% profit margin on cost.",
    givenData: {
      "Volume (N)": "2,500 units",
      "Direct_Materials": "Rs. 32,50,000",
      "Direct_Labor": "5,000 hrs * Rs. 180/hr = Rs. 9,00,000",
      "Direct_Expenses": "Rs. 1,50,000",
      "Factory_Overhead": "Rs. 6,00,000",
      "QC_Testing": "Rs. 2,50,000",
      "Admin_Selling_Overhead": "15% of Prime Cost",
      "Profit_Margin": "25% on Total Cost"
    },
    formula: "Prime Cost = Direct Materials + Direct Labor + Direct Expenses\nFactory Cost = Prime Cost + Factory Overhead + QC Testing\nTotal Cost of Production = Factory Cost + Admin & Selling Overheads\nUnit Production Cost = Total Cost of Production / N\nSelling Price = Unit Cost * (1 + Margin)",
    substitution: "Prime Cost = 32,50,000 + 9,00,000 + 1,50,000\nAdmin Overhead = 0.15 * Prime Cost\nTotal Cost = Factory Cost + Admin Overhead",
    stepByStepSolution: [
      "Step 1: Calculate Total Prime Cost:\nPrime Cost = Rs. 32,50,000 (Materials) + Rs. 9,00,000 (Labor) + Rs. 1,50,000 (Tooling) = Rs. 43,00,000",
      "Step 2: Calculate Factory Cost:\nFactory Cost = Prime Cost (43,00,000) + Factory Overhead (6,00,000) + QC Testing (2,50,000) = Rs. 51,50,000",
      "Step 3: Calculate Administrative & Selling Overheads:\nAdmin Overhead = 15% of Rs. 43,00,000 = Rs. 6,45,000",
      "Step 4: Calculate Total Cost of Production:\nTotal Cost = Factory Cost (51,50,000) + Admin Overhead (6,45,000) = Rs. 57,95,000",
      "Step 5: Calculate Unit Production Cost:\nUnit Cost = Rs. 57,95,000 / 2,500 units = Rs. 2,318.00 per unit",
      "Step 6: Calculate Selling Price per Unit (at 25% profit margin):\nSelling Price = Rs. 2,318.00 * (1 + 0.25) = Rs. 2,897.50 (Round to Rs. 2,899.00)"
    ],
    finalAnswer: "(a) Prime Cost = Rs. 43,00,000; (b) Factory Cost = Rs. 51,50,000; (c) Total Cost = Rs. 57,95,000; (d) Unit Cost = Rs. 2,318.00; (e) Selling Price = Rs. 2,899.00.",
    practicalInterpretation: "Direct materials account for over 56% of total product cost. Engineering efforts in Design to Cost (DTC) should focus primarily on component consolidation and PCB redesign rather than squeezing direct assembly labor."
  },
  {
    id: "num-7",
    number: 7,
    title: "Unit Production Cost at Scale via Learning Curve",
    category: "Production Scaling",
    question: "A robotics startup manufactures custom telepresence robots. The first pilot unit required 80 labor-hours to assemble and test. The assembly process exhibits an 85% learning curve (Wright's Learning Curve Model). If the direct labor wage rate is Rs. 250 per hour and the direct materials cost per robot remains constant at Rs. 22,000, calculate: (a) The labor hours required to build the 2nd, 4th, and 8th units; (b) The cumulative average labor hours per unit for the first 8 units; and (c) The total unit manufacturing cost of the 8th robot.",
    givenData: {
      "Time_for_1st_unit (T1)": "80 hours",
      "Learning_Rate (s)": "85% (0.85)",
      "Labor_Wage_Rate": "Rs. 250 / hour",
      "Materials_Cost_per_unit": "Rs. 22,000"
    },
    formula: "Wright's Model: When cumulative production doubles from N to 2N, the cumulative average time (or marginal time in standard doubling) drops by learning factor s.\nT_2N = T_N * s\nLearning curve index b = log(s) / log(2) = log(0.85) / log(2) = -0.2345\nT_x = T_1 * x^b",
    substitution: "b = -0.07058 / 0.30103 = -0.2345\nUnit 2 hours = 80 * 0.85 = 68.0 hrs\nUnit 4 hours = 68 * 0.85 = 57.8 hrs\nUnit 8 hours = 57.8 * 0.85 = 49.13 hrs",
    stepByStepSolution: [
      "Step 1: Calculate Labor Hours for Doubled Output Units (using standard 85% doubling rule):\n- Unit 1: T_1 = 80.00 hours\n- Unit 2: T_2 = 80.00 * 0.85 = 68.00 hours\n- Unit 4: T_4 = 68.00 * 0.85 = 57.80 hours\n- Unit 8: T_8 = 57.80 * 0.85 = 49.13 hours",
      "Step 2: Calculate Direct Labor Cost for the 8th unit:\nLabor Cost_8 = 49.13 hours * Rs. 250/hr = Rs. 12,282.50",
      "Step 3: Calculate Total Unit Manufacturing Cost of the 8th unit:\nTotal Unit Cost_8 = Materials Cost (Rs. 22,000) + Labor Cost (Rs. 12,282.50) = Rs. 34,282.50",
      "Step 4: Compare with 1st Unit Cost:\nTotal Unit Cost_1 = Rs. 22,000 + (80 * 250) = Rs. 42,000.00\nCost Reduction = ((42,000 - 34,282.50) / 42,000) * 100% = 18.38% reduction by unit 8."
    ],
    finalAnswer: "(a) Unit 2 = 68.0 hrs, Unit 4 = 57.8 hrs, Unit 8 = 49.13 hrs; (b) Labor cost of 8th unit = Rs. 12,282.50; (c) Total cost of 8th robot = Rs. 34,282.50.",
    practicalInterpretation: "Due to operator learning, fixture familiarity, and cable routing optimization, labor time decreases by nearly 31 hours per robot between the 1st and 8th units, providing significant cost compression as production scales."
  },
  {
    id: "num-8",
    number: 8,
    title: "Market Sizing: TAM, SAM, and SOM Penetration",
    category: "Market Feasibility",
    question: "A student startup is designing an affordable smart helmet with crash detection and breathalyzer interlocks for two-wheeler riders in India. Market research reveals:\n- Total registered two-wheelers in India = 220 million riders (National Total Addressable Market)\n- Two-wheeler commuters in urban Tier 1 & 2 cities aged 18-35 who purchase smart safety accessories = 12% of total riders (Serviceable Addressable Market - SAM)\n- Average selling price per smart helmet = Rs. 3,500\n- The startup targets capturing a conservative 0.75% of the SAM within the first two operating years (Serviceable Obtainable Market - SOM)\nCalculate: (a) TAM in monetary value (Rs. Crores); (b) SAM in physical units and monetary value (Rs. Crores); and (c) SOM in physical units and projected Year-2 annual revenue (Rs. Crores).",
    givenData: {
      "Total_Riders_India": "220,000,000 (22 Crores)",
      "Target_Segment_Percentage": "12% (0.12)",
      "Selling_Price": "Rs. 3,500 per helmet",
      "SOM_Target_Share": "0.75% (0.0075)"
    },
    formula: "TAM (Units) = Total National Market Units\nTAM (Value) = TAM (Units) * Price\nSAM (Units) = TAM (Units) * Segment %\nSAM (Value) = SAM (Units) * Price\nSOM (Units) = SAM (Units) * Target Share %\nSOM (Value) = SOM (Units) * Price",
    substitution: "TAM Value = 220,000,000 * 3,500\nSAM Units = 220,000,000 * 0.12\nSOM Units = SAM Units * 0.0075",
    stepByStepSolution: [
      "Step 1: Calculate Total Addressable Market (TAM):\n- TAM (Units) = 220,000,000 helmets\n- TAM (Value) = 220,000,000 * Rs. 3,500 = Rs. 7,70,000 Crores (Rs. 7.7 Trillion)",
      "Step 2: Calculate Serviceable Addressable Market (SAM):\n- SAM (Units) = 220,000,000 * 0.12 = 26,400,000 helmets (2.64 Crores)\n- SAM (Value) = 26,400,000 * Rs. 3,500 = Rs. 9,240 Crores",
      "Step 3: Calculate Serviceable Obtainable Market (SOM):\n- SOM (Units) = 26,400,000 * 0.0075 = 1,98,000 helmets\n- SOM (Value / Revenue) = 1,98,000 * Rs. 3,500 = Rs. 69.30 Crores"
    ],
    finalAnswer: "(a) TAM = Rs. 7,70,000 Crores; (b) SAM = 2.64 Crore units (Rs. 9,240 Crores); (c) SOM = 1,98,000 units (Projected Year-2 Revenue = Rs. 69.30 Crores).",
    practicalInterpretation: "Even capturing less than 1% of the urban youth commuter segment represents an achievable, venture-scale business producing nearly Rs. 70 Crores in top-line revenue, confirming immense market headroom."
  },
  {
    id: "num-9",
    number: 9,
    title: "Customer Satisfaction (CSAT, NPS, and CES) Indices",
    category: "Customer Analytics",
    question: "Following a 60-day beta trial of a smart induction cooker, 200 users responded to a customer experience survey:\n1. CSAT Question ('How satisfied are you with the cooking speed?'): 110 rated '5-Very Satisfied', 50 rated '4-Satisfied', 25 rated '3-Neutral', 10 rated '2-Dissatisfied', and 5 rated '1-Very Dissatisfied'.\n2. Net Promoter Score (NPS) Question ('How likely are you to recommend CookBot to a friend?'): 120 rated 9-10 (Promoters), 50 rated 7-8 (Passives), and 30 rated 0-6 (Detractors).\n3. Customer Effort Score (CES) Question ('The smart cooker made dinner prep easy'): 150 agreed (low effort), 30 neutral, and 20 disagreed (high effort).\nCalculate: (a) CSAT Percentage; (b) Net Promoter Score (NPS); (c) CES Percentage; and (d) Evaluate whether the product satisfies commercial launch readiness criteria (CSAT >= 75%, NPS >= +40, CES >= 70%).",
    givenData: {
      "Total_Respondents (N)": "200",
      "CSAT_Top2": "110 (5-star) + 50 (4-star) = 160",
      "NPS_Promoters": "120 (60%)",
      "NPS_Passives": "50 (25%)",
      "NPS_Detractors": "30 (15%)",
      "CES_LowEffort": "150 (75%)"
    },
    formula: "CSAT % = (Number of Satisfied Customers [4 & 5] / Total Respondents) * 100%\nNPS = % Promoters - % Detractors (ranges from -100 to +100)\nCES % = (Number of Agree Responses / Total Respondents) * 100%",
    substitution: "CSAT % = (160 / 200) * 100%\nNPS = (120/200 * 100%) - (30/200 * 100%) = 60% - 15%\nCES % = (150 / 200) * 100%",
    stepByStepSolution: [
      "Step 1: Compute Customer Satisfaction Score (CSAT):\nCSAT % = (160 / 200) * 100% = 80.0%",
      "Step 2: Compute Net Promoter Score (NPS):\n- % Promoters = (120 / 200) * 100% = 60.0%\n- % Detractors = (30 / 200) * 100% = 15.0%\n- NPS = 60.0 - 15.0 = +45",
      "Step 3: Compute Customer Effort Score (CES):\nCES % = (150 / 200) * 100% = 75.0%",
      "Step 4: Audit against Commercial Launch Criteria:\n- CSAT: 80.0% >= 75.0% (PASS)\n- NPS: +45 >= +40 (PASS)\n- CES: 75.0% >= 70.0% (PASS)"
    ],
    finalAnswer: "(a) CSAT = 80.0%; (b) NPS = +45; (c) CES = 75.0%. All three criteria exceed launch thresholds; the product is APPROVED for pilot manufacturing ramp-up.",
    practicalInterpretation: "An NPS of +45 indicates strong word-of-mouth advocacy in consumer appliances (where average industry NPS is typically +30). The 15% detractors point to user confusion regarding hopper cleaning, which should be resolved via animated app tutorials."
  },
  {
    id: "num-10",
    number: 10,
    title: "Risk Priority Number (RPN) in DFMEA",
    category: "Reliability & DFMEA",
    question: "During the DFMEA of a lithium-ion battery management system (BMS) for an electric wheelchair, the engineering team identifies four potential failure modes:\n1. Failure Mode FM-1 (MOSFET over-temperature latch failure): S = 8, O = 5, D = 4\n2. Failure Mode FM-2 (Current sense shunt resistor solder fatigue): S = 6, O = 7, D = 5\n3. Failure Mode FM-3 (Cell overcharge leading to thermal runaway): S = 10, O = 3, D = 6\n4. Failure Mode FM-4 (Bluetooth telemetry packet loss): S = 3, O = 6, D = 2\nCalculate: (a) The baseline RPN for each failure mode; (b) Prioritize them for corrective engineering action; and (c) Identify which failure mode demands immediate mandatory redesign irrespective of RPN.",
    givenData: {
      "FM-1": "S = 8, O = 5, D = 4",
      "FM-2": "S = 6, O = 7, D = 5",
      "FM-3": "S = 10, O = 3, D = 6",
      "FM-4": "S = 3, O = 6, D = 2"
    },
    formula: "RPN = Severity (S) * Occurrence (O) * Detection (D)\nAction Threshold: RPN >= 100 or Severity >= 9 mandates immediate corrective design controls.",
    substitution: "RPN_1 = 8 * 5 * 4\nRPN_2 = 6 * 7 * 5\nRPN_3 = 10 * 3 * 6\nRPN_4 = 3 * 6 * 2",
    stepByStepSolution: [
      "Step 1: Compute RPN for each failure mode:\n- FM-1 (MOSFET over-temp): RPN = 8 * 5 * 4 = 160\n- FM-2 (Shunt solder fatigue): RPN = 6 * 7 * 5 = 210\n- FM-3 (Cell overcharge / fire): RPN = 10 * 3 * 6 = 180\n- FM-4 (BLE packet loss): RPN = 3 * 6 * 2 = 36",
      "Step 2: Prioritize by RPN:\nRank 1: FM-2 (RPN = 210)\nRank 2: FM-3 (RPN = 180)\nRank 3: FM-1 (RPN = 160)\nRank 4: FM-4 (RPN = 36)",
      "Step 3: Analyze Critical Safety Mandates:\nFailure Mode FM-3 carries a Severity rating of 10 (catastrophic thermal runaway fire endangering user life). Under international automotive and medical standards (AIAG-VDA), any failure mode with S = 9 or 10 demands immediate mandatory redesign regardless of whether its RPN is higher or lower than other modes."
    ],
    finalAnswer: "(a) RPNs: FM-1 = 160, FM-2 = 210, FM-3 = 180, FM-4 = 36; (b) Priority order: FM-2 > FM-3 > FM-1 > FM-4; (c) FM-3 demands immediate mandatory redesign due to Severity = 10.",
    practicalInterpretation: "Although FM-2 has the highest mathematical RPN (210), FM-3 represents an existential safety threat (S=10). The team must implement dual redundant hardware over-voltage cutoff fuses for FM-3 and beef up solder pad fillets with underfill epoxy for FM-2."
  },
  {
    id: "num-11",
    number: 11,
    title: "DFMEA Risk Reduction & Pareto Mitigation Analysis",
    category: "Reliability & DFMEA",
    question: "Following the DFMEA of a smart infant incubator, the initial baseline RPNs of the top 5 failure modes were:\n- FM-A (Heater relay sticking closed): S = 10, O = 4, D = 5 (RPN = 200)\n- FM-B (Oxygen sensor calibration drift): S = 8, O = 6, D = 4 (RPN = 192)\n- FM-C (Humidifier water reservoir dry-run): S = 6, O = 7, D = 4 (RPN = 168)\n- FM-D (Castor wheel locking latch failure): S = 5, O = 5, D = 4 (RPN = 100)\n- FM-E (LCD backlight inverter burnout): S = 4, O = 4, D = 3 (RPN = 48)\nThe engineering team implements the following design remediations:\n- For FM-A: Added a secondary independent bimetallic thermal cutoff switch in series with the power rail (Occurrence drops to 1, Detection improves to 2).\n- For FM-B: Implemented automated two-point calibration check at startup (Detection improves to 2).\nCalculate: (a) Initial Total RPN; (b) Revised RPNs for FM-A and FM-B; (c) Revised Total RPN; and (d) Percentage Total Risk Reduction achieved.",
    givenData: {
      "Initial_RPNs": "FM-A = 200, FM-B = 192, FM-C = 168, FM-D = 100, FM-E = 48",
      "FM-A_Remediation": "S = 10, O_new = 1, D_new = 2",
      "FM-B_Remediation": "S = 8, O_new = 6, D_new = 2"
    },
    formula: "Revised RPN = S_revised * O_revised * D_revised\nPercentage Risk Reduction = [(Initial Total RPN - Revised Total RPN) / Initial Total RPN] * 100%",
    substitution: "Initial Total RPN = 200 + 192 + 168 + 100 + 48 = 708\nRevised RPN_A = 10 * 1 * 2 = 20\nRevised RPN_B = 8 * 6 * 2 = 96",
    stepByStepSolution: [
      "Step 1: Calculate Initial Total RPN:\nTotal RPN_initial = 200 + 192 + 168 + 100 + 48 = 708",
      "Step 2: Calculate Revised RPN for FM-A:\nRPN_A_revised = 10 (S) * 1 (O) * 2 (D) = 20\n(Risk reduction on FM-A = ((200 - 20) / 200) * 100% = 90.0% reduction)",
      "Step 3: Calculate Revised RPN for FM-B:\nRPN_B_revised = 8 (S) * 6 (O) * 2 (D) = 96\n(Risk reduction on FM-B = ((192 - 96) / 192) * 100% = 50.0% reduction)",
      "Step 4: Compute Revised Total System RPN:\nTotal RPN_revised = 20 (A) + 96 (B) + 168 (C) + 100 (D) + 48 (E) = 432",
      "Step 5: Compute Overall System Risk Reduction Percentage:\nTotal Risk Reduction % = [(708 - 432) / 708] * 100% = (276 / 708) * 100% = 38.98%"
    ],
    finalAnswer: "(a) Initial Total RPN = 708; (b) Revised RPN_A = 20, Revised RPN_B = 96; (c) Revised Total RPN = 432; (d) Overall Risk Reduction = 38.98%.",
    practicalInterpretation: "By adding a Rs. 35 mechanical bimetallic thermal switch (Poka-Yoke), the team eliminated the catastrophic infant overheating hazard (FM-A RPN fell from 200 to 20), demonstrating high ROI on preventive safety engineering."
  },
  {
    id: "num-12",
    number: 12,
    title: "Technology Readiness Level (TRL) Weighted Maturity Index",
    category: "Technology Readiness",
    question: "An autonomous electric delivery robot consists of four critical sub-technologies at varying stages of maturity:\n1. Subsystem 1: Solid-State LIDAR Vision (Weight = 30%, Current TRL = 4)\n2. Subsystem 2: Dual Brushless Hub Motor Powertrain (Weight = 25%, Current TRL = 7)\n3. Subsystem 3: Dynamic Obstacle Avoidance SLAM Software (Weight = 25%, Current TRL = 5)\n4. Subsystem 4: Autonomous Wireless Inductive Charging Dock (Weight = 20%, Current TRL = 3)\nCalculate: (a) The Composite System Technology Readiness Level (TRL_sys); (b) The Technology Maturity Index (TMI %) relative to full commercial deployment (TRL 9); and (c) Identify which subsystem represents the critical bottleneck holding back full-scale field prototyping (TRL 6).",
    givenData: {
      "Subsystem_1": "Weight = 0.30, TRL = 4",
      "Subsystem_2": "Weight = 0.25, TRL = 7",
      "Subsystem_3": "Weight = 0.25, TRL = 5",
      "Subsystem_4": "Weight = 0.20, TRL = 3",
      "Target_Deployment_TRL": "9"
    },
    formula: "TRL_sys = SUM(Weight_i * TRL_i)\nTMI % = (TRL_sys / 9.0) * 100%",
    substitution: "TRL_sys = (0.30*4) + (0.25*7) + (0.25*5) + (0.20*3)",
    stepByStepSolution: [
      "Step 1: Compute Weighted TRL Contributions:\n- Subsystem 1: 0.30 * 4 = 1.20\n- Subsystem 2: 0.25 * 7 = 1.75\n- Subsystem 3: 0.25 * 5 = 1.25\n- Subsystem 4: 0.20 * 3 = 0.60",
      "Step 2: Calculate Composite System TRL:\nTRL_sys = 1.20 + 1.75 + 1.25 + 0.60 = 4.80",
      "Step 3: Calculate Technology Maturity Index (TMI %):\nTMI % = (4.80 / 9.0) * 100% = 53.33%",
      "Step 4: Bottleneck Analysis:\nAccording to system engineering principles, a system's true operational readiness is governed by its weakest link ('Weakest-Link TRL Rule'). Subsystem 4 (Wireless Inductive Dock) is at TRL 3 (Laboratory proof-of-concept only). Subsystem 1 (LIDAR) is at TRL 4. To reach TRL 6 for an integrated Alpha field prototype, Subsystems 1 and 4 must be matured to at least TRL 5 in relevant environments."
    ],
    finalAnswer: "(a) Composite TRL = 4.80 / 9; (b) Technology Maturity Index = 53.33%; (c) Subsystem 4 (TRL 3) is the primary developmental bottleneck.",
    practicalInterpretation: "While the electric powertrain is already mature (TRL 7), launching field pilots will fail because the autonomous dock is still an unproven laboratory bench experiment (TRL 3). Resources must be diverted to dock coil alignment testing."
  },
  {
    id: "num-13",
    number: 13,
    title: "Prototype Testing Performance: MTBF and First Pass Yield",
    category: "Prototyping & Reliability",
    question: "During environmental stress testing of 20 Alpha prototypes of a smart water meter over a 500-hour continuous test period:\n- Total cumulative operating test time = 20 units * 500 hours = 10,000 unit-hours\n- 4 random component failures occurred during the test window\n- During the subsequent pilot assembly run of 150 units, 138 units passed all automated optical and functional pressure tests on the first attempt without rework\nCalculate: (a) Failure Rate (lambda) in failures per hour; (b) Mean Time Between Failures (MTBF) in operating hours; (c) Product Reliability R(t) for a 1,000-hour mission; and (d) First Pass Yield (FPY %) of the pilot build.",
    givenData: {
      "Total_Test_Hours (T)": "10,000 hours",
      "Number_of_Failures (r)": "4 failures",
      "Mission_Time (t)": "1,000 hours",
      "Pilot_Units_Started": "150 units",
      "Pilot_Units_Passed_FPY": "138 units"
    },
    formula: "(a) Failure Rate (lambda) = r / T\n(b) MTBF = 1 / lambda = T / r\n(c) Reliability R(t) = exp(-lambda * t)\n(d) First Pass Yield (FPY %) = (Units Passed First Attempt / Total Units Started) * 100%",
    substitution: "lambda = 4 / 10,000 = 0.0004 failures/hr\nMTBF = 10,000 / 4 = 2,500 hours\nR(1,000) = exp(-0.0004 * 1000) = exp(-0.40)\nFPY = (138 / 150) * 100%",
    stepByStepSolution: [
      "Step 1: Calculate Failure Rate (lambda):\nlambda = 4 / 10,000 unit-hours = 0.0004 failures per hour (or 400 FIT [Failures in Time]).",
      "Step 2: Calculate Mean Time Between Failures (MTBF):\nMTBF = 1 / 0.0004 = 2,500 operating hours.",
      "Step 3: Calculate Reliability for 1,000-Hour Operating Interval:\nR(1,000) = e^(-0.0004 * 1,000) = e^(-0.40) = 0.6703 (67.03% probability of zero failures over 1,000 continuous hours).",
      "Step 4: Calculate First Pass Yield (FPY %):\nFPY % = (138 / 150) * 100% = 92.00%"
    ],
    finalAnswer: "(a) Failure Rate = 0.0004 failures/hr; (b) MTBF = 2,500 hours; (c) R(1,000 hrs) = 67.03%; (d) Pilot First Pass Yield = 92.00%.",
    practicalInterpretation: "A 92% FPY is acceptable for an early pilot build, but the MTBF of 2,500 hours (approx. 3.5 months of continuous operation) is inadequate for a commercial utility meter rated for 5 years. Root-cause analysis must be conducted on the 4 failures to replace weak electrolytic capacitors with solid tantalum caps."
  },
  {
    id: "num-14",
    number: 14,
    title: "Production Scaling Capacity & Assembly Line Balancing",
    category: "Production Scaling",
    question: "A factory is designing an assembly line to produce 1,200 smart electricity monitors per 8-hour shift. The plant operates one shift per day with an effective operating efficiency of 85% (allowing for lunch, breaks, and minor tool changeovers). The product assembly involves 5 sequential tasks with standard work times:\n- Task 1 (PCB mounting & screw fastening): 24 seconds\n- Task 2 (Current clamp wiring & soldering): 36 seconds\n- Task 3 (Firmware flashing & functional ICT): 42 seconds\n- Task 4 (Ultrasonic enclosure case welding): 18 seconds\n- Task 5 (High-voltage flash test & packaging): 30 seconds\nCalculate: (a) Total Work Content time; (b) Available operating time per shift in seconds; (c) Target Takt Time in seconds; (d) Theoretical minimum number of workstations required; and (e) Assembly Line Efficiency if 4 workstations are allocated.",
    givenData: {
      "Target_Daily_Volume (D)": "1,200 units / shift",
      "Shift_Length": "8 hours = 28,800 seconds",
      "Uptime_Efficiency": "85% (0.85)",
      "Task_Times": "[24s, 36s, 42s, 18s, 30s]"
    },
    formula: "(a) Total Work Content (TWC) = SUM(t_i)\n(b) Available Operating Time (AOT) = Shift Seconds * Efficiency\n(c) Takt Time (T_takt) = AOT / D\n(d) Minimum Workstations (N_min) = ceil(TWC / T_takt)\n(e) Line Efficiency % = [TWC / (Actual Workstations * Maximum Bottleneck Cycle Time)] * 100%",
    substitution: "TWC = 24 + 36 + 42 + 18 + 30 = 150 seconds\nAOT = 28,800 * 0.85 = 24,480 seconds\nTakt Time = 24,480 / 1,200 = 20.4 seconds\nN_min = 150 / 20.4",
    stepByStepSolution: [
      "Step 1: Calculate Total Work Content (TWC):\nTWC = 24 + 36 + 42 + 18 + 30 = 150 seconds.",
      "Step 2: Calculate Available Operating Time (AOT):\nAOT = 8 hours * 3,600 s/hr * 0.85 = 24,480 seconds.",
      "Step 3: Calculate Target Takt Time:\nT_takt = 24,480 seconds / 1,200 units = 20.40 seconds per unit.",
      "Step 4: Calculate Theoretical Minimum Number of Workstations (N_min):\nN_min = TWC / T_takt = 150 / 20.40 = 7.35 -> Round UP to 8 workstations.",
      "Step 5: Line Balancing Analysis:\nBecause the takt time is 20.4s and Task 3 alone takes 42s, Task 3 must be split across two parallel stations (21s each) and Task 2 (36s) across two parallel stations (18s each) to prevent line starvation."
    ],
    finalAnswer: "(a) Total Work Content = 150 seconds; (b) Available Time = 24,480 seconds; (c) Takt Time = 20.40 seconds; (d) Minimum Stations = 8 workstations required.",
    practicalInterpretation: "A single linear line cannot meet the 1,200 unit daily quota. The manufacturing engineer must duplicate the flashing and soldering stations in parallel to keep every station's cycle time below the 20.4-second takt time threshold."
  },
  {
    id: "num-15",
    number: 15,
    title: "Sustainability Life Cycle Assessment (LCA) Carbon Footprint",
    category: "Sustainability Assessment",
    question: "A comparative Life Cycle Assessment (LCA) is performed between two enclosure design options for a consumer smart home sensor over a 5-year operational lifecycle (100,000 units):\n- Option 1 (Virgin ABS Plastic): Enclosure mass = 120 grams. Carbon emission factor for virgin ABS production = 3.8 kg CO2-eq per kg. End-of-life landfill emissions = 0.5 kg CO2-eq/kg. Annual operating electricity = 4.5 kWh/year (Grid emission factor = 0.82 kg CO2/kWh).\n- Option 2 (100% Recycled Bamboo-Polymer Composite): Enclosure mass = 110 grams. Carbon emission factor = 0.9 kg CO2-eq per kg. End-of-life composting credit = -0.2 kg CO2-eq/kg. Power-optimized firmware reduces operating electricity to 2.8 kWh/year.\nCalculate: (a) Total cradle-to-grave carbon footprint per unit for Option 1; (b) Total carbon footprint per unit for Option 2; (c) Percentage carbon reduction achieved by Option 2; and (d) Total carbon emissions prevented across 100,000 units in metric tonnes of CO2-equivalent.",
    givenData: {
      "Option_1_Mass": "0.12 kg virgin ABS",
      "Option_1_Material_Factor": "3.8 kg CO2/kg",
      "Option_1_EOL_Factor": "0.5 kg CO2/kg",
      "Option_1_Energy": "4.5 kWh/yr * 5 yrs = 22.5 kWh",
      "Option_2_Mass": "0.11 kg bamboo composite",
      "Option_2_Material_Factor": "0.9 kg CO2/kg",
      "Option_2_EOL_Factor": "-0.2 kg CO2/kg",
      "Option_2_Energy": "2.8 kWh/yr * 5 yrs = 14.0 kWh",
      "Grid_Emission_Factor": "0.82 kg CO2 / kWh",
      "Total_Production_Units": "100,000 units"
    },
    formula: "Carbon Footprint = Material Emissions + End-of-Life Emissions + Operational Energy Emissions\nEnergy Emissions = Total kWh * Grid Factor\nMaterial Emissions = Mass * Emission Factor",
    substitution: "Option 1 = (0.12 * 3.8) + (0.12 * 0.5) + (22.5 * 0.82)\nOption 2 = (0.11 * 0.9) + (0.11 * -0.2) + (14.0 * 0.82)",
    stepByStepSolution: [
      "Step 1: Compute Carbon Footprint for Option 1 (Virgin ABS):\n- Material Production = 0.12 kg * 3.8 kg CO2/kg = 0.456 kg CO2-eq\n- End-of-Life Landfill = 0.12 kg * 0.5 kg CO2/kg = 0.060 kg CO2-eq\n- 5-Year Operational Electricity = 22.5 kWh * 0.82 kg CO2/kWh = 18.450 kg CO2-eq\n- Total Option 1 Footprint = 0.456 + 0.060 + 18.450 = 18.966 kg CO2-eq per unit.",
      "Step 2: Compute Carbon Footprint for Option 2 (Recycled Bamboo Composite):\n- Material Production = 0.11 kg * 0.9 kg CO2/kg = 0.099 kg CO2-eq\n- End-of-Life Credit = 0.11 kg * (-0.2 kg CO2/kg) = -0.022 kg CO2-eq\n- 5-Year Operational Electricity = 14.0 kWh * 0.82 kg CO2/kWh = 11.480 kg CO2-eq\n- Total Option 2 Footprint = 0.099 - 0.022 + 11.480 = 11.557 kg CO2-eq per unit.",
      "Step 3: Compute Per-Unit Carbon Savings:\n- Carbon Saved per unit = 18.966 - 11.557 = 7.409 kg CO2-eq\n- Percentage Reduction = (7.409 / 18.966) * 100% = 39.06% carbon reduction.",
      "Step 4: Compute Total Emissions Prevented Across 100,000 Units:\n- Total kg CO2-eq saved = 100,000 * 7.409 kg = 7,40,900 kg CO2-eq\n- Total Metric Tonnes = 7,40,900 / 1,000 = 740.90 Metric Tonnes of CO2-equivalent."
    ],
    finalAnswer: "(a) Option 1 = 18.966 kg CO2-eq/unit; (b) Option 2 = 11.557 kg CO2-eq/unit; (c) Carbon Reduction = 39.06%; (d) Total Carbon Prevented = 740.90 Tonnes of CO2.",
    practicalInterpretation: "Switching to eco-composite materials and optimizing firmware sleep states cuts product lifecycle greenhouse emissions by nearly 40%, preventing over 740 tonnes of CO2 while qualifying the company for international ESG and carbon credit certifications."
  }
];

