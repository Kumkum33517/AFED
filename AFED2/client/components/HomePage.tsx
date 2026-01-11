import { useState } from "react";
import { TrendingUp, AlertTriangle, Activity, Github, Linkedin, Twitter } from "lucide-react";
import { Card } from "@/components/ui/card";
import AnalysisModal from "./AnalysisModal";
import RiskNotification from "./RiskNotification";
import EventsOverTimeGraph from "./EventsOverTimeGraph";

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  subtext?: string;
  color?: "primary" | "amber" | "red";
  onClick: () => void;
}

function MetricCard({
  icon,
  label,
  value,
  subtext,
  color = "primary",
  onClick,
}: MetricCardProps) {
  const colorClasses = {
    primary: "text-primary border-primary/50 hover:border-primary shadow-lg shadow-primary/20 hover:shadow-primary/40",
    amber: "text-amber-400 border-amber-400/50 hover:border-amber-400 shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40",
    red: "text-red-400 border-red-400/50 hover:border-red-400 shadow-lg shadow-red-400/20 hover:shadow-red-400/40",
  };

  return (
    <Card
      onClick={onClick}
      className={`p-6 border-2 ${colorClasses[color]} bg-card cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105 group relative overflow-hidden`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            {label}
          </p>
          <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
          {subtext && (
            <p className="text-xs text-muted-foreground">{subtext}</p>
          )}
        </div>
        <div className={`opacity-80`}>{icon}</div>
      </div>
    </Card>
  );
}

export default function HomePage() {
  const [activeModal, setActiveModal] = useState<"events" | "anomalies" | "risk" | null>(null);
  const [risks, setRisks] = useState<Array<{ id: string; message: string; level: "low" | "medium" | "high"; }>>([]);

  const addRisk = (level: "low" | "medium" | "high", message: string) => {
    const newRisk = {
      id: Date.now().toString(),
      message,
      level,
    };
    setRisks([newRisk, ...risks.slice(0, 4)]);
    setTimeout(() => {
      setRisks((prev) => prev.filter((r) => r.id !== newRisk.id));
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Risk Notifications */}
      <div className="fixed top-20 right-4 z-30 space-y-2">
        {risks.map((risk) => (
          <RiskNotification key={risk.id} level={risk.level} message={risk.message} />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome to AFED
          </h1>
          <p className="text-lg text-primary font-semibold mb-2">
            Automated Fraud & Event Detection Platform
          </p>
          <p className="text-muted-foreground max-w-2xl">
            Monitor, detect, and respond to anomalies in real-time with intelligent machine learning
          </p>
        </div>

        {/* Events Over Time Graph */}
        <div className="mb-12">
          <EventsOverTimeGraph />
        </div>

        {/* KPI Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <MetricCard
            icon={<Activity className="w-8 h-8" />}
            label="Total Events Processed"
            value="2,847,392"
            subtext="Across all departments"
            color="primary"
            onClick={() => {
              setActiveModal("events");
              addRisk("low", "✓ Events processed successfully");
            }}
          />
          <MetricCard
            icon={<AlertTriangle className="w-8 h-8" />}
            label="Total Anomalies Detected"
            value="342"
            subtext="Flagged by ML engine"
            color="amber"
            onClick={() => {
              setActiveModal("anomalies");
              addRisk("medium", "⚠ 12 new anomalies detected");
            }}
          />
          <MetricCard
            icon={<TrendingUp className="w-8 h-8" />}
            label="Events Analyzed Today"
            value="156,847"
            subtext="Last 24 hours"
            color="primary"
            onClick={() => {
              setActiveModal("risk");
              addRisk("low", "✓ Daily analysis complete");
            }}
          />
        </div>

        {/* Current System Risk Posture Section */}
        <Card className="p-8 border border-border bg-card mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-dark-pink via-dark-pink/50 to-transparent"></div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Current System Risk Posture</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Overall Risk Level</p>
              <p className="text-4xl font-bold text-amber-400 mb-4">Medium</p>
              <p className="text-sm text-muted-foreground">
                Based on anomaly severity and frequency across all monitored systems
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-40 h-40 rounded-full border-8 border-amber-400/30 flex items-center justify-center bg-amber-400/5">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-400">65%</p>
                  <p className="text-xs text-muted-foreground mt-2">Risk Score</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* System Status Section */}
        <Card className="p-8 border border-border bg-card mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
          <h2 className="text-2xl font-bold text-foreground mb-6">System Health</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Status Overview */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    <p className="text-sm text-muted-foreground">Detection Engine</p>
                  </div>
                  <p className="text-lg font-semibold text-foreground ml-5">Operational</p>
                  <p className="text-xs text-muted-foreground ml-5 mt-1">Last checked: 2 min ago</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    <p className="text-sm text-muted-foreground">Data Pipeline</p>
                  </div>
                  <p className="text-lg font-semibold text-foreground ml-5">Healthy</p>
                  <p className="text-xs text-muted-foreground ml-5 mt-1">Last checked: 1 min ago</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    <p className="text-sm text-muted-foreground">API Services</p>
                  </div>
                  <p className="text-lg font-semibold text-foreground ml-5">Responding</p>
                  <p className="text-xs text-muted-foreground ml-5 mt-1">Last checked: 30 sec ago</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-sm text-muted-foreground mb-2">Processing Rate</p>
                <p className="text-2xl font-bold text-primary">45,231/sec</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Events processed per second
                </p>
              </div>

              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-sm text-muted-foreground mb-2">Detection Accuracy</p>
                <p className="text-2xl font-bold text-primary">98.5%</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Based on last 30 days
                </p>
              </div>

              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-sm text-muted-foreground mb-2">Average Response Time</p>
                <p className="text-2xl font-bold text-primary">124ms</p>
                <p className="text-xs text-muted-foreground mt-1">
                  End-to-end latency
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Recent Activities Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Recent Events Card */}
          <Card className="p-6 border border-border bg-card">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              Recent Events
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-background border border-border/50 hover:border-primary transition-colors">
                <p className="text-sm text-foreground">Transaction processed</p>
                <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border/50 hover:border-primary transition-colors">
                <p className="text-sm text-foreground">Procurement record ingested</p>
                <p className="text-xs text-muted-foreground mt-1">5 minutes ago</p>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border/50 hover:border-primary transition-colors">
                <p className="text-sm text-foreground">Batch processing completed</p>
                <p className="text-xs text-muted-foreground mt-1">12 minutes ago</p>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border/50 hover:border-primary transition-colors">
                <p className="text-sm text-foreground">Data validation passed</p>
                <p className="text-xs text-muted-foreground mt-1">18 minutes ago</p>
              </div>
            </div>
          </Card>

          {/* Recent Alerts Card */}
          <Card className="p-6 border border-border bg-card">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-dark-pink"></div>
              Recent Alerts
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-red-500/5 border border-red-400/30 hover:border-red-400 transition-colors">
                <p className="text-sm text-foreground">High-risk anomaly detected</p>
                <p className="text-xs text-muted-foreground mt-1">1 minute ago</p>
              </div>
              <div className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-400/30 hover:border-yellow-400 transition-colors">
                <p className="text-sm text-foreground">Repeated vendor pattern flagged</p>
                <p className="text-xs text-muted-foreground mt-1">8 minutes ago</p>
              </div>
              <div className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-400/30 hover:border-yellow-400 transition-colors">
                <p className="text-sm text-foreground">Processing rate spike detected</p>
                <p className="text-xs text-muted-foreground mt-1">15 minutes ago</p>
              </div>
              <div className="p-3 rounded-lg bg-red-500/5 border border-red-400/30 hover:border-red-400 transition-colors">
                <p className="text-sm text-foreground">Unusual transaction volume</p>
                <p className="text-xs text-muted-foreground mt-1">22 minutes ago</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Resources Section */}
        <div className="border-t border-border pt-12 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-6">Resources</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="#"
              className="p-4 rounded-lg bg-card border border-border hover:border-dark-pink transition-all duration-300 text-center group hover:shadow-lg hover:shadow-dark-pink/20"
            >
              <p className="text-sm text-foreground font-medium group-hover:text-dark-pink transition-colors">
                About
              </p>
            </a>
            <a
              href="#"
              className="p-4 rounded-lg bg-card border border-border hover:border-dark-pink transition-all duration-300 text-center group hover:shadow-lg hover:shadow-dark-pink/20"
            >
              <p className="text-sm text-foreground font-medium group-hover:text-dark-pink transition-colors">
                Documentation
              </p>
            </a>
            <a
              href="#"
              className="p-4 rounded-lg bg-card border border-border hover:border-dark-pink transition-all duration-300 text-center group hover:shadow-lg hover:shadow-dark-pink/20"
            >
              <p className="text-sm text-foreground font-medium group-hover:text-dark-pink transition-colors">
                Support
              </p>
            </a>
            <a
              href="#"
              className="p-4 rounded-lg bg-card border border-border hover:border-dark-pink transition-all duration-300 text-center group hover:shadow-lg hover:shadow-dark-pink/20"
            >
              <p className="text-sm text-foreground font-medium group-hover:text-dark-pink transition-colors">
                Guide
              </p>
            </a>
          </div>
        </div>

        {/* Connect Section */}
        <div className="border-t border-border pt-12 pb-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">Connect</h3>
          <div className="flex gap-6 flex-wrap">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-card border border-border hover:border-dark-pink hover:bg-secondary transition-all flex items-center gap-2 group hover:shadow-lg hover:shadow-dark-pink/20"
            >
              <Github className="w-5 h-5 text-foreground group-hover:text-dark-pink transition-colors" />
              <span className="text-sm text-foreground font-medium group-hover:text-dark-pink transition-colors">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-card border border-border hover:border-dark-pink hover:bg-secondary transition-all flex items-center gap-2 group hover:shadow-lg hover:shadow-dark-pink/20"
            >
              <Linkedin className="w-5 h-5 text-foreground group-hover:text-dark-pink transition-colors" />
              <span className="text-sm text-foreground font-medium group-hover:text-dark-pink transition-colors">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-card border border-border hover:border-dark-pink hover:bg-secondary transition-all flex items-center gap-2 group hover:shadow-lg hover:shadow-dark-pink/20"
            >
              <Twitter className="w-5 h-5 text-foreground group-hover:text-dark-pink transition-colors" />
              <span className="text-sm text-foreground font-medium group-hover:text-dark-pink transition-colors">Twitter</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-8 text-xs text-muted-foreground text-center">
          <p>© 2024 AFED. All rights reserved.</p>
        </div>
      </div>

      {/* Modals */}
      {activeModal === "events" && (
        <AnalysisModal
          title="Total Events Analyzed"
          onClose={() => setActiveModal(null)}
          type="events"
        />
      )}
      {activeModal === "anomalies" && (
        <AnalysisModal
          title="Anomalies Detected"
          onClose={() => setActiveModal(null)}
          type="anomalies"
        />
      )}
      {activeModal === "risk" && (
        <AnalysisModal
          title="System Risk Analysis"
          onClose={() => setActiveModal(null)}
          type="risk"
        />
      )}
    </div>
  );
}
