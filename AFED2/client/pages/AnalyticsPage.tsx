import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function AnalyticsPage() {
  const systemTrends = [
    {
      title: "Event Growth",
      value: "+12.5%",
      change: "↑",
      period: "vs last week",
      color: "text-green-400",
    },
    {
      title: "Anomaly Rate",
      value: "2.3%",
      change: "↓",
      period: "improvement",
      color: "text-green-400",
    },
  ];

  const detectionPerformance = [
    {
      title: "Avg Detection Time",
      value: "124ms",
      change: "→",
      period: "avg latency",
      color: "text-primary",
    },
    {
      title: "Processing Capacity",
      value: "45K/sec",
      change: "↑",
      period: "events processed",
      color: "text-green-400",
    },
    {
      title: "Data Quality Score",
      value: "98.7%",
      change: "↑",
      period: "data integrity",
      color: "text-green-400",
    },
  ];

  const riskDistribution = [
    { level: "High", percentage: 8, count: 47 },
    { level: "Medium", percentage: 35, count: 205 },
    { level: "Low", percentage: 57, count: 334 },
  ];

  const insights = [
    {
      title: "System Improving",
      description: "Detection accuracy up 2.3% from last week with improved ML models",
      icon: TrendingUp,
      color: "text-green-400",
    },
    {
      title: "Alert Spike Detected",
      description: "15% increase in anomalies this morning. Investigating root cause",
      icon: TrendingDown,
      color: "text-amber-400",
    },
    {
      title: "Spike in Procurement Anomalies",
      description: "Repeated vendor pattern flagged across 12 transactions",
      icon: TrendingUp,
      color: "text-orange-400",
    },
    {
      title: "Repeated Vendor Behavior Detected",
      description: "Same vendor flagged 8 times in last 48 hours with varying transaction amounts",
      icon: TrendingDown,
      color: "text-red-400",
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Insights & Trends
          </h1>
          <p className="text-muted-foreground">
            Deep dive into your fraud detection and event data with actionable insights
          </p>
        </div>

        {/* SECTION 1: System Trends */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">System Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {systemTrends.map((metric, idx) => (
              <Card key={idx} className="p-6 border border-border bg-card">
                <p className="text-sm text-muted-foreground mb-2">{metric.title}</p>
                <div className="flex items-end gap-2">
                  <p className={`text-3xl font-bold ${metric.color}`}>
                    {metric.value}
                  </p>
                  <p className="text-xs text-muted-foreground pb-1">
                    {metric.change}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{metric.period}</p>
              </Card>
            ))}
          </div>
          <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent mb-12"></div>
        </div>

        {/* SECTION 2: Detection Performance */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Detection Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {detectionPerformance.map((metric, idx) => (
              <Card key={idx} className="p-6 border border-border bg-card">
                <p className="text-sm text-muted-foreground mb-2">{metric.title}</p>
                <div className="flex items-end gap-2">
                  <p className={`text-3xl font-bold ${metric.color}`}>
                    {metric.value}
                  </p>
                  <p className="text-xs text-muted-foreground pb-1">
                    {metric.change}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{metric.period}</p>
              </Card>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-background border border-border/50 mb-8">
            <p className="text-sm font-semibold text-green-400">✓ System Stable</p>
            <p className="text-xs text-muted-foreground mt-1">
              All metrics within expected parameters. No performance degradation detected.
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent mb-12"></div>
        </div>

        {/* SECTION 3: Risk Distribution */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Risk Distribution</h2>
          <Card className="p-6 border border-border bg-card mb-8">
            <div className="space-y-6">
              {riskDistribution.map((risk, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-foreground font-medium">{risk.level} Risk</span>
                    <span className="text-sm font-semibold text-primary">
                      {risk.count} events ({risk.percentage}%)
                    </span>
                  </div>
                  <div className="w-full h-3 bg-background rounded-full overflow-hidden border border-border/50">
                    <div
                      className={`h-full rounded-full ${
                        risk.level === "High"
                          ? "bg-red-500"
                          : risk.level === "Medium"
                            ? "bg-amber-500"
                            : "bg-green-500"
                      }`}
                      style={{ width: `${risk.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent mb-12"></div>
        </div>

        {/* SECTION 4: Alerts & Insights */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Alerts & Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insights.map((insight, idx) => {
              const Icon = insight.icon;
              return (
                <Card key={idx} className="p-6 border border-border bg-card">
                  <div className="flex items-start gap-4">
                    <Icon className={`w-5 h-5 ${insight.color} flex-shrink-0 mt-1`} />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{insight.title}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
