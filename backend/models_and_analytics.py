"""
Machine Learning and Research Analytics Engine for GXEST605 Design Thinking.
Implements:
1. Sentiment Analysis on Product Reviews
2. Customer Segmentation via K-Means Clustering
3. Product Recommendation Engine via Cosine Similarity
4. Market Demand Prediction via Ridge Regression
5. Manufacturing Quality & Defect Classification via Random Forest
6. Customer Satisfaction Prediction via Logistic Regression
"""
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression, Ridge
from sklearn.cluster import KMeans
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics.pairwise import cosine_similarity

# --------------------------------------------------------------------------
# 1. Sentiment Analysis Engine
# --------------------------------------------------------------------------
_reviews_corpus = [
    "The ergonomic grip is revolutionary and battery life is outstanding!",
    "Incredible design, easy to use, highly accessible for elderly persons.",
    "Remarkable build quality and sustainable bamboo composite packaging.",
    "Solved my daily water wastage problem completely. Wonderful product!",
    "Flawless user experience and intuitive touchscreen navigation.",
    "Very clumsy design, buttons are unresponsive and heavy to hold.",
    "Complete waste of money, sensor stopped working on the second day.",
    "Poor battery life, overheating issues, and frustrating setup process.",
    "Terrible customer support and fragile plastic housing broke instantly.",
    "Mediocre product, neither bad nor exceptional, average performance."
]
_sentiment_labels = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0] # 1: Positive, 0: Negative

_tfidf_vec = TfidfVectorizer(ngram_range=(1, 2))
_X_tfidf = _tfidf_vec.fit_transform(_reviews_corpus)
_sentiment_model = LogisticRegression()
_sentiment_model.fit(_X_tfidf, _sentiment_labels)

def run_sentiment_analysis(text: str):
    vec = _tfidf_vec.transform([text])
    pred = _sentiment_model.predict(vec)[0]
    prob = _sentiment_model.predict_proba(vec)[0]
    
    label = "Very Positive" if prob[1] > 0.75 else ("Positive" if pred == 1 else "Negative")
    confidence = float(prob[1] if pred == 1 else prob[0])
    
    return {
        "text": text,
        "prediction": label,
        "confidence": round(confidence, 4),
        "positive_score": round(float(prob[1]), 4),
        "negative_score": round(float(prob[0]), 4)
    }

# --------------------------------------------------------------------------
# 2. Customer Segmentation Engine (K-Means)
# Features: [Income, Age, Frequency, UX_Rating]
# --------------------------------------------------------------------------
np.random.seed(42)
_customer_data = np.vstack([
    np.random.normal(loc=[30000, 22, 12, 4.5], scale=[4000, 2, 2, 0.3], size=(40, 4)), # Tech Early Adopters
    np.random.normal(loc=[75000, 42, 4, 3.8], scale=[8000, 4, 1, 0.4], size=(40, 4)),  # Premium Enterprise
    np.random.normal(loc=[20000, 68, 2, 4.8], scale=[3000, 5, 1, 0.2], size=(40, 4)),  # Assistive / Elderly
    np.random.normal(loc=[50000, 31, 7, 4.1], scale=[6000, 3, 2, 0.3], size=(40, 4))   # Sustainable Mainstream
])
_kmeans_model = KMeans(n_clusters=4, random_state=42, n_init=10)
_kmeans_model.fit(_customer_data)

_cluster_names = {
    0: "Tech Early Adopters (High Engagement, Youth)",
    1: "Premium Enterprise (High Income, Quality Focus)",
    2: "Assistive & Elderly Care (Accessibility Focus)",
    3: "Sustainable Mainstream (Eco-conscious Balance)"
}

def run_customer_segmentation(features_list):
    arr = np.array(features_list).reshape(-1, 4)
    cluster_id = int(_kmeans_model.predict(arr)[0])
    dist = float(np.min(_kmeans_model.transform(arr)[0]))
    return {
        "cluster": cluster_id,
        "segment_name": _cluster_names[cluster_id],
        "distance_to_centroid": round(dist, 2),
        "cluster_centers": _kmeans_model.cluster_centers_.tolist()
    }

# --------------------------------------------------------------------------
# 3. Product Recommendation Engine (Content-Based Cosine Similarity)
# --------------------------------------------------------------------------
_catalog = [
    {"id": 1, "name": "Smart Assistive Walking Stick", "tags": "assistive healthcare sensors ultrasonic gps elderly safety"},
    {"id": 2, "name": "IoT Smart Irrigation Controller", "tags": "agriculture water conservation iot soil moisture automated solar"},
    {"id": 3, "name": "Solar Cold Storage Pod", "tags": "agriculture solar cooling supply chain rural food preservation"},
    {"id": 4, "name": "Biodegradable Mycelium Packaging", "tags": "sustainable packaging eco compostable zero plastic circular economy"},
    {"id": 5, "name": "Low-Cost Neonatal Phototherapy Unit", "tags": "healthcare medical device low cost infant jaundice led solar"},
    {"id": 6, "name": "AI Automated Smart Waste Segregator", "tags": "smart waste recycling computer vision ai robotic segregation"},
    {"id": 7, "name": "Braille Smart Display Slate", "tags": "assistive education tactile refreshable braille visually impaired"},
    {"id": 8, "name": "Automated Low-Power Induction Cooker", "tags": "cooking energy efficient automated thermal sensor kitchen smart"},
    {"id": 9, "name": "Classroom Ambient Noise Balancer", "tags": "education smart classroom acoustics noise acoustic dampening edtech"},
    {"id": 10, "name": "Home Energy Disaggregation Meter", "tags": "energy smart grid nilm monitoring efficiency analytics iot"}
]
_cat_df = pd.DataFrame(_catalog)
_cat_vec = TfidfVectorizer()
_cat_matrix = _cat_vec.fit_transform(_cat_df["tags"])
_cat_sim = cosine_similarity(_cat_matrix, _cat_matrix)

def run_product_recommendation(product_name: str, top_k=3):
    matches = _cat_df[_cat_df["name"].str.lower().str.contains(product_name.lower())]
    if matches.empty:
        idx = 0
    else:
        idx = matches.index[0]
        
    sim_scores = list(enumerate(_cat_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    recs = []
    for s_idx, score in sim_scores[1:top_k+1]:
        recs.append({
            "product_id": int(_cat_df.iloc[s_idx]["id"]),
            "name": str(_cat_df.iloc[s_idx]["name"]),
            "similarity_score": round(float(score), 4)
        })
    return {
        "query_product": _cat_df.iloc[idx]["name"],
        "recommendations": recs
    }

# --------------------------------------------------------------------------
# 4. Market Demand Prediction (Ridge Regression)
# Features: [price, marketing_budget, competitor_price, seasonality_index]
# Target: Sales Volume in Units
# --------------------------------------------------------------------------
_X_market = np.array([
    [2000, 30000, 2200, 1.0],
    [2500, 45000, 2600, 1.2],
    [1800, 20000, 1900, 0.9],
    [3200, 60000, 3100, 1.3],
    [2900, 40000, 3000, 1.1],
    [1500, 15000, 1600, 0.8],
    [4000, 80000, 3900, 1.5],
    [2200, 35000, 2400, 1.0],
    [2700, 50000, 2800, 1.2],
    [3500, 70000, 3600, 1.4]
])
_y_market = np.array([4200, 5600, 3100, 6800, 5100, 2400, 8500, 4700, 6100, 7600])
_market_model = Ridge()
_market_model.fit(_X_market, _y_market)

def run_market_demand_prediction(params: dict):
    x = np.array([[
        params.get("price", 2500),
        params.get("marketing_budget", 40000),
        params.get("competitor_price", 2600),
        params.get("seasonality_index", 1.0)
    ]])
    pred = float(_market_model.predict(x)[0])
    return {
        "inputs": params,
        "predicted_units": int(max(pred, 0)),
        "forecast_status": "High Demand" if pred > 5000 else "Standard Demand"
    }

# --------------------------------------------------------------------------
# 5. Manufacturing Quality & Defect Classification (Random Forest)
# Features: [temp_variance, vibration_level, cycle_time, pressure]
# --------------------------------------------------------------------------
_X_quality = np.array([
    [1.2, 3.4, 30.0, 100.0],
    [1.5, 4.1, 31.5, 101.5],
    [1.1, 3.0, 29.5, 99.8],
    [7.8, 18.2, 48.0, 125.0],
    [6.9, 16.5, 46.5, 122.0],
    [3.8, 9.2, 38.0, 108.0],
    [4.2, 10.1, 39.5, 110.0],
    [8.5, 20.1, 52.0, 130.0],
    [1.3, 3.8, 30.5, 100.5],
    [3.5, 8.8, 37.0, 107.0]
])
_y_quality = np.array(["Pass", "Pass", "Pass", "Defect", "Defect", "Rework", "Rework", "Defect", "Pass", "Rework"])
_rf_quality = RandomForestClassifier(n_estimators=20, random_state=42)
_rf_quality.fit(_X_quality, _y_quality)

def run_quality_defect_classification(params: dict):
    x = np.array([[
        params.get("temp_variance", 2.0),
        params.get("vibration_level", 4.0),
        params.get("cycle_time", 32.0),
        params.get("pressure", 101.0)
    ]])
    status = str(_rf_quality.predict(x)[0])
    probs = _rf_quality.predict_proba(x)[0]
    classes = _rf_quality.classes_
    class_probs = {cls: round(float(p), 3) for cls, p in zip(classes, probs)}
    return {
        "defect_status": status,
        "confidence": round(float(np.max(probs)), 4),
        "probability_distribution": class_probs
    }

# --------------------------------------------------------------------------
# 6. Customer Satisfaction (CSAT) Prediction (Logistic Regression)
# Features: [usability_score (1-10), support_tickets (0-5), nps (1-10)]
# --------------------------------------------------------------------------
_X_csat = np.array([
    [9, 0, 10], [8, 1, 9], [9, 0, 9], [7, 2, 7],
    [4, 4, 3], [3, 5, 2], [5, 3, 4], [8, 0, 8],
    [9, 1, 10], [2, 5, 1], [6, 2, 6], [10, 0, 10]
])
_y_csat = np.array([1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1])
_csat_model = LogisticRegression()
_csat_model.fit(_X_csat, _y_csat)

def run_customer_satisfaction_prediction(params: dict):
    x = np.array([[
        params.get("usability_score", 8),
        params.get("support_tickets", 1),
        params.get("net_promoter_score", 9)
    ]])
    pred = int(_csat_model.predict(x)[0])
    prob = float(_csat_model.predict_proba(x)[0][1])
    return {
        "satisfied": bool(pred == 1),
        "satisfaction_probability": round(prob, 4),
        "rating_category": "Delighted" if prob > 0.8 else ("Satisfied" if prob > 0.5 else "At Risk")
    }

