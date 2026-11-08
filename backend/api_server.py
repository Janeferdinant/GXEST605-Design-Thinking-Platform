"""
FastAPI Server for GXEST605 Design Thinking Platform.
Provides REST endpoints for ML inference, calculations, and Excel course file generation.
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import os
import sys
from pathlib import Path

CURRENT_DIR = Path(__file__).resolve().parent
if str(CURRENT_DIR) not in sys.path:
    sys.path.insert(0, str(CURRENT_DIR))

from models_and_analytics import (
    run_sentiment_analysis,
    run_customer_segmentation,
    run_product_recommendation,
    run_market_demand_prediction,
    run_quality_defect_classification,
    run_customer_satisfaction_prediction
)
from generate_academic_audit_sheets import generate_audit_excel

app = FastAPI(
    title="GXEST605 Design Thinking & Academic API",
    description="Backend microservice for KTU Course GXEST605 - Jane Rose, Dept of CSE",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SentimentRequest(BaseModel):
    text: str

class SegmentationRequest(BaseModel):
    features: List[List[float]] # [[income, age, freq, ux]]

class RecommendationRequest(BaseModel):
    product_name: str
    top_k: Optional[int] = 3

class MarketDemandRequest(BaseModel):
    price: float
    marketing_budget: float
    competitor_price: float
    seasonality_index: float

class QualityDefectRequest(BaseModel):
    temp_variance: float
    vibration_level: float
    cycle_time: float
    pressure: float

class CsatRequest(BaseModel):
    usability_score: float
    support_tickets: int
    net_promoter_score: float

@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "course": "GXEST605",
        "faculty": "Jane Rose | Department of Computer Science & Engineering",
        "regulation": "KTU 2024 Scheme"
    }

@app.post("/api/ml/sentiment")
def sentiment_endpoint(req: SentimentRequest):
    return run_sentiment_analysis(req.text)

@app.post("/api/ml/segmentation")
def segmentation_endpoint(req: SegmentationRequest):
    return run_customer_segmentation(req.features)

@app.post("/api/ml/recommendation")
def recommendation_endpoint(req: RecommendationRequest):
    return run_product_recommendation(req.product_name, req.top_k)

@app.post("/api/ml/market-demand")
def market_demand_endpoint(req: MarketDemandRequest):
    return run_market_demand_prediction(req.dict())

@app.post("/api/ml/quality-defect")
def quality_defect_endpoint(req: QualityDefectRequest):
    return run_quality_defect_classification(req.dict())

@app.post("/api/ml/csat")
def csat_endpoint(req: CsatRequest):
    return run_customer_satisfaction_prediction(req.dict())

@app.get("/api/audit/generate-excel")
def generate_excel_endpoint():
    out_path = os.path.join(os.path.dirname(__file__), "GXEST605_Internal_Marks_Audit.xlsx")
    generate_audit_excel(out_path)
    if os.path.exists(out_path):
        return FileResponse(
            out_path,
            media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            filename="GXEST605_Internal_Marks_Audit.xlsx"
        )
    raise HTTPException(status_code=500, detail="Failed to generate Excel file")

if __name__ == "__main__":
    import uvicorn
    # Generate the excel file right away so it exists in backend folder
    generate_audit_excel(os.path.join(os.path.dirname(__file__), "GXEST605_Internal_Marks_Audit.xlsx"))
    print("Excel audit file pre-generated.")

