AFED – Administrative Friction & Anomaly Detection

AFED is a machine learning–based analytical prototype designed to detect anomalies and irregular patterns in government transactions and administrative processes. The goal of the project is to help auditors and compliance teams identify high-risk events early by analyzing deviations from normal operational behavior.

This repository contains a frontend dashboard prototype and a working ML demonstration that shows how anomaly detection would function in the backend.

Why AFED?

Monitoring government spending, procurement, and administrative workflows at scale is difficult.
Most existing systems rely on static rules or manual audits, which are slow, hard to maintain, and ineffective against new or evolving patterns.

AFED takes a data-driven approach by learning what “normal” looks like and flagging unusual behavior for further review.

What AFED Does

Detects anomalous transactions using unsupervised machine learning

Highlights irregular processing delays and unusual spending patterns

Provides risk indicators to help prioritize audit review

Visualizes insights in a dashboard-friendly format

Keeps humans in the loop for final decisions

AFED does not label fraud. It surfaces risk signals.

Tech Stack
Machine Learning & Analytics

Python

Pandas, NumPy

scikit-learn (Isolation Forest)

Visualization

Matplotlib

Frontend (Prototype)

Dashboard-based UI for auditors and administrators

Architecture (Planned)

REST APIs for frontend–backend communication

Secure backend services for data ingestion and ML inference

Data

The datasets included in this repository are synthetic and created for demonstration purposes.
They simulate government-style transactions and vendor records to showcase how AFED’s anomaly detection works.

ML Demo

The Jupyter Notebook included in this repository demonstrates:

Training an anomaly detection model on normal transaction data

Detecting irregular transactions in unseen data

Visualizing anomalies for easy interpretation

This notebook represents the backend logic that would power the AFED dashboard in a full system.

Current Status

Frontend dashboard: Prototype

ML detection logic: Functional demo

Backend integration: Planned / conceptual

Future Improvements

Real-time data ingestion

Advanced risk scoring and severity levels

Integration with external transaction systems

Role-based access control and audit logging

Notes

This project is intended as a conceptual and technical demonstration, suitable for academic evaluation, hackathons, and early-stage prototyping.
