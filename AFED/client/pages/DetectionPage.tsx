import { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

export default function DetectionPage() {
  const [severityFilter, setSeverityFilter] = useState("All");
  const [timeFilter, setTimeFilter] = useState("Last 24 hours");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const detectionItems = [
    {
      id: 1,
      title: "Unusual Login Pattern",
      description: "Multiple failed login attempts from unknown IP address",
      time: "2 minutes ago",
      severity: "High",
      icon: AlertTriangle,
      color: "text-red-400",
      bgColor: "bg-red-900/20",
    },
    {
      id: 2,
      title: "High Transaction Amount",
      description: "Transaction exceeds average by 300%",
      time: "15 minutes ago",
      severity: "Medium",
      icon: AlertTriangle,
      color: "text-amber-400",
      bgColor: "bg-amber-900/20",
    },
    {
      id: 3,
      title: "Geographic Anomaly",
      description: "Access from country not in historical pattern",
      time: "1 hour ago",
      severity: "Medium",
      icon: AlertTriangle,
      color: "text-amber-400",
      bgColor: "bg-amber-900/20",
    },
    {
      id: 4,
      title: "API Usage Spike",
      description: "API request rate increased by 250%",
      time: "2 hours ago",
      severity: "Low",
      icon: Clock,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
    },
    {
      id: 5,
      title: "Normal Activity",
      description: "Standard transaction processing",
      time: "3 hours ago",
      severity: "Safe",
      icon: CheckCircle,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
    },
  ];

  const filteredItems = detectionItems.filter((item) => {
    if (severityFilter !== "All" && item.severity !== severityFilter) {
      return false;
    }
    return true;
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Anomaly Detection
          </h1>
          <p className="text-muted-foreground">
            Real-time detection of suspicious events and anomalies
          </p>
        </div>

        {/* Filter Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              Severity Filter
            </label>
            <select
              value={severityFilter}
              onChange={(e) => setSeverityFilter(e.target.value)}
              className="px-4 py-2 bg-card border border-border rounded-lg text-foreground cursor-pointer hover:border-primary transition-colors"
            >
              <option>All</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
              <option>Safe</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              Time Range
            </label>
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="px-4 py-2 bg-card border border-border rounded-lg text-foreground cursor-pointer hover:border-primary transition-colors"
            >
              <option>Last 24 hours</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              Detection Type
            </label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2 bg-card border border-border rounded-lg text-foreground cursor-pointer hover:border-primary transition-colors"
            >
              <option>All Types</option>
              <option>Fraud</option>
              <option>Anomaly</option>
              <option>Pattern</option>
            </select>
          </div>
        </div>

        {/* Detection Items */}
        <div className="space-y-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                className={`p-6 border border-border bg-card hover:border-primary transition-all cursor-pointer ${item.bgColor}`}
              >
                <div className="flex items-start gap-4">
                  <Icon className={`w-6 h-6 flex-shrink-0 mt-1 ${item.color}`} />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.severity === "High"
                            ? "bg-red-900/50 text-red-200"
                            : item.severity === "Medium"
                              ? "bg-amber-900/50 text-amber-200"
                              : item.severity === "Low"
                                ? "bg-blue-900/50 text-blue-200"
                                : "bg-green-900/50 text-green-200"
                        }`}
                      >
                        {item.severity}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      {item.time}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })
          ) : (
            <Card className="p-8 border border-border bg-card text-center">
              <p className="text-muted-foreground">No detections found for the selected filters.</p>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
}
