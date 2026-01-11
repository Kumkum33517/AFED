import { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, Clock, X, ArrowRight } from "lucide-react";

interface DetectionItem {
  eventId: string;
  type: string;
  title: string;
  description: string;
  flagReason: string;
  normalBehavior: string;
  suggestedAction: string;
  detectedTime: string;
  severity: "High" | "Medium" | "Low" | "Safe";
  riskScore: number;
  status: "New" | "Under Review" | "Closed";
}

export default function DetectionPage() {
  const [severityFilter, setSeverityFilter] = useState("All");
  const [timeFilter, setTimeFilter] = useState("Last 24 hours");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [selectedDetection, setSelectedDetection] = useState<DetectionItem | null>(null);

  const detectionItems: DetectionItem[] = [
    {
      eventId: "EVT-2024-00842",
      type: "Payment",
      title: "Unusual Login Pattern",
      description: "Multiple failed login attempts from unknown IP address",
      flagReason: "Five consecutive failed login attempts detected from IP 192.168.1.x within 2 minutes, which deviates from normal authentication patterns.",
      normalBehavior: "User typically logs in once per day from IP 10.0.0.x with 100% success rate",
      suggestedAction: "Review transaction and verify account security. Consider enabling 2FA.",
      detectedTime: "2 minutes ago",
      severity: "High",
      riskScore: 92,
      status: "New",
    },
    {
      eventId: "EVT-2024-00841",
      type: "Procurement",
      title: "High Transaction Amount",
      description: "Transaction exceeds average by 300%",
      flagReason: "Transaction amount of $50,000 is 300% above the user's average transaction value of $12,500",
      normalBehavior: "Average transaction: $12,500 (Last 30 days)",
      suggestedAction: "Verify transaction details and contact vendor for confirmation",
      detectedTime: "15 minutes ago",
      severity: "Medium",
      riskScore: 72,
      status: "Under Review",
    },
    {
      eventId: "EVT-2024-00840",
      type: "Welfare",
      title: "Geographic Anomaly",
      description: "Access from country not in historical pattern",
      flagReason: "Login detected from India, which is outside user's historical access pattern (US only)",
      normalBehavior: "User historically accesses from United States locations only",
      suggestedAction: "Verify vendor history and check for duplicate records",
      detectedTime: "1 hour ago",
      severity: "Medium",
      riskScore: 65,
      status: "Under Review",
    },
    {
      eventId: "EVT-2024-00839",
      type: "Payment",
      title: "API Usage Spike",
      description: "API request rate increased by 250%",
      flagReason: "API requests increased from 100 req/min to 350 req/min",
      normalBehavior: "API request rate: 100 req/min (average)",
      suggestedAction: "Monitor system resources and check for bottlenecks",
      detectedTime: "2 hours ago",
      severity: "Low",
      riskScore: 35,
      status: "Closed",
    },
    {
      eventId: "EVT-2024-00838",
      type: "Procurement",
      title: "Normal Activity",
      description: "Standard transaction processing",
      flagReason: "No anomalies detected in this transaction",
      normalBehavior: "Transaction behavior matches expected patterns",
      suggestedAction: "No action required - transaction approved",
      detectedTime: "3 hours ago",
      severity: "Safe",
      riskScore: 5,
      status: "Closed",
    },
  ];

  const filteredItems = detectionItems.filter((item) => {
    if (severityFilter !== "All" && item.severity !== severityFilter) {
      return false;
    }
    return true;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "text-red-400 bg-red-900/30";
      case "Medium":
        return "text-amber-400 bg-amber-900/30";
      case "Low":
        return "text-blue-400 bg-blue-900/30";
      default:
        return "text-green-400 bg-green-900/30";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "text-cyan-400 bg-cyan-900/30";
      case "Under Review":
        return "text-yellow-400 bg-yellow-900/30";
      case "Closed":
        return "text-green-400 bg-green-900/30";
      default:
        return "text-gray-400 bg-gray-900/30";
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Anomaly Detection & Alerts
          </h1>
          <p className="text-muted-foreground">
            Case management system for detected anomalies and fraud events
          </p>
        </div>

        {/* Filter Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
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
              <option>Payment</option>
              <option>Procurement</option>
              <option>Welfare</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              Quick Filters
            </label>
            <select className="px-4 py-2 bg-card border border-border rounded-lg text-foreground cursor-pointer hover:border-primary transition-colors">
              <option>All Cases</option>
              <option>Only Unresolved</option>
              <option>Only High Priority</option>
            </select>
          </div>
        </div>

        {/* Detection Table */}
        <div className="overflow-x-auto">
          <Card className="border border-border bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-background/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Event ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Severity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Risk Score</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <tr
                      key={item.eventId}
                      className="border-b border-border hover:bg-background/50 transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-4 text-sm text-cyan-400 font-mono">{item.eventId}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{item.type}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{item.title}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(item.severity)}`}>
                          {item.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-6 bg-background rounded overflow-hidden border border-border/50">
                            <div
                              className={`h-full ${
                                item.riskScore >= 70
                                  ? "bg-red-500"
                                  : item.riskScore >= 40
                                    ? "bg-amber-500"
                                    : "bg-green-500"
                              }`}
                              style={{ width: `${item.riskScore}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{item.riskScore}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.detectedTime}</td>
                      <td className="px-6 py-4 text-sm">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedDetection(item)}
                          className="text-xs border-primary/50 hover:border-primary text-primary hover:text-primary"
                        >
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="px-6 py-8 text-center text-muted-foreground">
                      No detections found for the selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Card>
        </div>
      </div>

      {/* Details Side Panel */}
      {selectedDetection && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedDetection(null)}
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-96 bg-card border-l border-border shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Detection Details</h2>
              <button
                onClick={() => setSelectedDetection(null)}
                className="p-1 hover:bg-background rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Event ID */}
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Event ID</p>
                <p className="text-sm font-mono text-cyan-400">{selectedDetection.eventId}</p>
              </div>

              {/* Title and Status */}
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Alert</p>
                <p className="text-sm font-semibold text-foreground">{selectedDetection.title}</p>
                <div className="mt-3 flex gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(selectedDetection.severity)}`}>
                    {selectedDetection.severity}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(selectedDetection.status)}`}>
                    {selectedDetection.status}
                  </span>
                </div>
              </div>

              {/* Risk Score */}
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Risk Score</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-background rounded overflow-hidden border border-border/50">
                    <div
                      className={`h-full ${
                        selectedDetection.riskScore >= 70
                          ? "bg-red-500"
                          : selectedDetection.riskScore >= 40
                            ? "bg-amber-500"
                            : "bg-green-500"
                      }`}
                      style={{ width: `${selectedDetection.riskScore}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-foreground w-10">{selectedDetection.riskScore}%</span>
                </div>
              </div>

              {/* Why It Was Flagged */}
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Why It Was Flagged</p>
                <p className="text-sm text-foreground leading-relaxed">{selectedDetection.flagReason}</p>
              </div>

              {/* Normal Behavior */}
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Normal Behavior Comparison</p>
                <p className="text-sm text-foreground leading-relaxed">{selectedDetection.normalBehavior}</p>
              </div>

              {/* Suggested Action */}
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Suggested Action</p>
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
                  <p className="text-sm text-foreground flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{selectedDetection.suggestedAction}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="border-t border-border p-6 space-y-2">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Mark as Reviewed
              </Button>
              <Button variant="outline" className="w-full border-border hover:bg-background">
                Close Case
              </Button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
