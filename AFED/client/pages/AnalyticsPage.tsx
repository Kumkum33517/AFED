import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function AnalyticsPage() {
  const metrics = [
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
    {
      title: "Detection Time",
      value: "124ms",
      change: "→",
      period: "avg latency",
      color: "text-primary",
    },
    {
      title: "System Uptime",
      value: "99.98%",
      change: "↑",
      period: "this month",
      color: "text-green-400",
    },
  ];

  const riskDistribution = [
    { level: "High", percentage: 8, count: 47 },
    { level: "Medium", percentage: 35, count: 205 },
    { level: "Low", percentage: 57, count: 334 },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Analytics
          </h1>
          <p className="text-muted-foreground">
            Deep dive into your fraud detection and event data
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, idx) => (
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


        {/* Detailed Insights */}
        <Card className="p-6 border border-border bg-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Key Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-background border border-border">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">
                    Performance Improving
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Detection accuracy up 2.3% from last week with improved ML models
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-background border border-border">
              <div className="flex items-start gap-3">
                <TrendingDown className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">
                    Alert Spike Detected
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    15% increase in anomalies this morning. Investigating root cause
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-background border border-border">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">
                    Processing Capacity
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    System is handling 45K events/sec with 99.98% uptime
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-background border border-border">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">
                    Data Quality Score
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    98.7% data integrity maintained across all pipelines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Risk Distribution */}
        <Card className="p-6 border border-border bg-card">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Risk Distribution
          </h3>
          <div className="space-y-4">
            {riskDistribution.map((risk, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-foreground">{risk.level}</span>
                  <span className="text-sm font-semibold text-primary">
                    {risk.count}
                  </span>
                </div>
                <div className="w-full h-2 bg-background rounded-full overflow-hidden">
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
      </div>
    </Layout>
  );
}
