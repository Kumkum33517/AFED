📁 AFED – Automated Fraud & Event Detection

🔐 AI-Powered Real-Time Fraud & Anomaly Detection System

AFED (Automated Fraud & Event Detection) is a machine learning–based web application designed to automatically detect fraudulent activities and suspicious events from large-scale digital data such as transactions, user behavior, and system logs. The system leverages unsupervised anomaly detection techniques to identify deviations from normal behavior in real time and present them through an intuitive dashboard.

🚀 Project Overview

With the increasing digitization of financial and operational systems, traditional rule-based fraud detection methods are no longer sufficient. AFED addresses this gap by providing an adaptive, scalable, and automated solution that learns normal patterns from data and flags anomalies without relying solely on predefined rules.

The platform is designed to be:

Intelligent

Scalable

Easy to integrate

User-friendly

🧠 Key Features

ML-based anomaly detection (Isolation Forest / LOF)

Real-time analysis of transactions and system events

Severity-based risk classification (Low / Medium / High)

Interactive dashboard for monitoring anomalies

Modular and scalable system architecture

Supports multiple data sources (transactions, logs, events)

🏗️ System Architecture (High-Level)
Data Sources
 (Transactions | Logs | Events)
        |
        v
Data Preprocessing Layer
 (Cleaning & Feature Engineering)
        |
        v
ML Anomaly Detection Engine
 (Isolation Forest / LOF)
        |
        v
Backend APIs (Flask)
        |
        v
Database (MongoDB)
        |
        v
Frontend Dashboard (React.js)

🔄 Workflow

Data is ingested from multiple sources

Raw data is cleaned and preprocessed

Machine learning models analyze behavior patterns

Anomaly scores are generated

Events are classified based on risk severity

Results are stored and visualized on the dashboard

High-risk events trigger alerts

🧰 Technology Stack
Frontend

React.js

Chart.js / Matplotlib

Backend

Python

Flask (REST APIs)

Machine Learning

Scikit-learn

Pandas

NumPy

Database

MongoDB

Tools & Platforms

Git & GitHub

VS Code

Jupyter Notebook

📂 Project Structure
AFED/
│
├── backend/
│   ├── app.py
│   ├── model/
│   │   └── anomaly_detection.py
│   ├── routes/
│   │   └── api_routes.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── data/
│   ├── sample_transactions.csv
│   └── logs.csv
│
├── notebooks/
│   └── data_exploration.ipynb
│
├── docs/
│   └── AFED_Documentation.pdf
│
├── README.md
└── .gitignore

📊 Dataset

The system uses a combination of:

Open-source fraud detection datasets (Kaggle)

Synthetic transaction and log data for testing

Each dataset contains features such as transaction amount, timestamp, user behavior indicators, and system events.

🤖 Machine Learning Approach

AFED uses unsupervised learning algorithms to detect anomalies:

Isolation Forest

Efficient for large datasets

Detects rare and abnormal data points

Local Outlier Factor (LOF)

Measures local deviation of density

Effective for detecting contextual anomalies

These models learn normal behavior patterns and assign anomaly scores to new events.

📈 Dashboard & Visualization

The dashboard provides:

Overview of total events analyzed

Number of detected anomalies

Trend analysis over time

Visual comparison of normal vs anomalous behavior

Severity-based alert indicators

🧪 How to Run the Project
Backend
cd backend
pip install -r requirements.txt
python app.py

Frontend
cd frontend
npm install
npm start

🔮 Future Enhancements

Real-time streaming using Kafka

Deep learning–based anomaly detection

Cloud deployment (AWS / Azure)

Email and SMS alert integration

Automated incident response

⚠️ Limitations

Requires sufficient historical data for learning patterns

Initial false positives may occur

Advanced alerting mechanisms are not included in the prototype

📚 References

Liu et al., Isolation Forest, IEEE ICDM, 2008

Chandola et al., Anomaly Detection: A Survey, ACM, 2009

Scikit-learn Documentation

Kaggle Fraud Detection Datasets

👩‍💻 Contributors

Kumkum Singh – AIML Undergraduate

(Add team members if any)

📄 License

This project is developed for educational and hackathon purposes.

⭐ Final Note

AFED demonstrates how machine learning can be effectively applied to real-world fraud and event detection challenges by combining intelligent algorithms with a clean and intuitive user interface.
