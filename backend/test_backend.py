"""
Unit tests for GXEST605 Python Backend & Analytics Engine.
Enforces KTU Academic Regulations & ML Analytics Integrity.
"""
import os
import sys
import unittest
import openpyxl

# Ensure backend directory is in python search path
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
if CURRENT_DIR not in sys.path:
    sys.path.insert(0, CURRENT_DIR)

class TestAcademicAuditExcel(unittest.TestCase):
    def test_internal_mark_sheet_structure(self):
        # We test that generate_academic_audit_sheets creates an Excel file
        # with the exact KTU CIE distribution:
        # Attendance: 5, Assignments: 20, Internal Exam: 10, Reflective Journal: 5, Total: 40
        from generate_academic_audit_sheets import generate_audit_excel
        output_file = "test_GXEST605_Internal_Marks_Audit.xlsx"
        generate_audit_excel(output_file)
        
        self.assertTrue(os.path.exists(output_file), "Excel file was not created")
        
        wb = openpyxl.load_workbook(output_file, data_only=False)
        sheet = wb["Internal Mark Distribution"]
        
        # Verify Headers and Maximum Marks
        headers = [cell.value for cell in sheet[4]]
        self.assertIn("Register No", headers)
        self.assertIn("Student Name", headers)
        self.assertIn("Attendance (Max 5)", headers)
        self.assertIn("Assignments (Max 20)", headers)
        self.assertIn("Internal Exam (Max 10)", headers)
        self.assertIn("Reflective Journal & Portfolio (Max 5)", headers)
        self.assertIn("Total CIE (Max 40)", headers)
        
        # Verify at least 10 student rows
        rows = list(sheet.iter_rows(min_row=5, max_row=14, values_only=True))
        self.assertGreaterEqual(len(rows), 10)
        
        # Verify row formulas/values
        for r_idx in range(5, 15):
            formula = sheet.cell(row=r_idx, column=8).value
            self.assertTrue(formula.startswith("=SUM("), f"Row {r_idx} total must be a SUM formula")
            
        wb.close()
        if os.path.exists(output_file):
            os.remove(output_file)

class TestMLAnalytics(unittest.TestCase):
    def test_ml_pipelines(self):
        from models_and_analytics import (
            run_sentiment_analysis,
            run_customer_segmentation,
            run_product_recommendation,
            run_market_demand_prediction,
            run_quality_defect_classification,
            run_customer_satisfaction_prediction
        )
        
        # 1. Sentiment Analysis
        sentiment_res = run_sentiment_analysis("The ergonomic grip is revolutionary and battery life is outstanding!")
        self.assertIn(sentiment_res["prediction"], ["Positive", "Very Positive"])
        self.assertGreater(sentiment_res["confidence"], 0.5)
        
        # 2. Customer Segmentation
        seg_res = run_customer_segmentation([[45000, 32, 8, 4.2]])
        self.assertIn("cluster", seg_res)
        self.assertIn(seg_res["cluster"], [0, 1, 2, 3])
        
        # 3. Product Recommendation
        rec_res = run_product_recommendation("Smart Assistive Walking Stick")
        self.assertGreaterEqual(len(rec_res["recommendations"]), 1)
        
        # 4. Market Demand Prediction
        market_res = run_market_demand_prediction({"price": 2500, "marketing_budget": 50000, "competitor_price": 2700, "seasonality_index": 1.2})
        self.assertGreater(market_res["predicted_units"], 0)
        
        # 5. Quality Defect Classification
        defect_res = run_quality_defect_classification({"temp_variance": 4.5, "vibration_level": 12.3, "cycle_time": 42.0, "pressure": 115})
        self.assertIn(defect_res["defect_status"], ["Pass", "Defect", "Rework"])
        
        # 6. Customer Satisfaction
        csat_res = run_customer_satisfaction_prediction({"usability_score": 9, "support_tickets": 0, "net_promoter_score": 10})
        self.assertGreater(csat_res["satisfaction_probability"], 0.7)

if __name__ == '__main__':
    unittest.main()
