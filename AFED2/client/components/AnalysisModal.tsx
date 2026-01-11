import { X } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AnalysisModalProps {
  title: string;
  onClose: () => void;
  type: "events" | "anomalies" | "risk";
}

export default function AnalysisModal({
  title,
  onClose,
  type,
}: AnalysisModalProps) {
  const getContent = () => {
    switch (type) {
      case "events":
        return {
          stats: [
            { label: "Total Processed", value: "2,847,392", color: "text-primary" },
            { label: "Today", value: "+125,420", color: "text-green-400" },
            { label: "Peak Rate", value: "45,231/sec", color: "text-primary" },
            {
              label: "Avg Processing",
              value: "124ms",
              color: "text-muted-foreground",
            },
          ],
          details: [
            {
              time: "10:45 AM",
              event: "Transaction processing",
              count: 12504,
              status: "✓",
            },
            {
              time: "10:30 AM",
              event: "User login events",
              count: 8923,
              status: "✓",
            },
            {
              time: "10:15 AM",
              event: "API calls",
              count: 15632,
              status: "✓",
            },
            {
              time: "10:00 AM",
              event: "System logs",
              count: 22145,
              status: "✓",
            },
            {
              time: "09:45 AM",
              event: "Database queries",
              count: 18934,
              status: "✓",
            },
          ],
        };
      case "anomalies":
        return {
          stats: [
            { label: "This Week", value: "342", color: "text-amber-400" },
            { label: "Today", value: "+47", color: "text-red-400" },
            { label: "Severity", value: "Medium", color: "text-amber-400" },
            { label: "Detection Rate", value: "98.5%", color: "text-green-400" },
          ],
          details: [
            {
              time: "Just now",
              event: "Unusual login pattern detected",
              type: "Medium",
              status: "⚠",
            },
            {
              time: "2 mins ago",
              event: "High transaction amount",
              type: "Low",
              status: "ℹ",
            },
            {
              time: "15 mins ago",
              event: "Geographic anomaly",
              type: "High",
              status: "🔴",
            },
            {
              time: "1 hour ago",
              event: "Rapid failed authentications",
              type: "Medium",
              status: "⚠",
            },
            {
              time: "2 hours ago",
              event: "Unusual API usage pattern",
              type: "Low",
              status: "ℹ",
            },
          ],
        };
      case "risk":
        return {
          stats: [
            { label: "Current Level", value: "Medium", color: "text-amber-400" },
            { label: "High Risk Events", value: "3", color: "text-red-400" },
            { label: "Medium Risk", value: "12", color: "text-amber-400" },
            { label: "Low Risk", value: "27", color: "text-green-400" },
          ],
          details: [
            {
              time: "Critical",
              event: "Multiple failed login attempts from unknown IP",
              level: "High",
              status: "🔴",
            },
            {
              time: "Warning",
              event: "Transaction amount exceeds historical average",
              level: "Medium",
              status: "⚠",
            },
            {
              time: "Alert",
              event: "Access from new geographic location",
              level: "Medium",
              status: "⚠",
            },
            {
              time: "Notice",
              event: "API request rate increased by 150%",
              level: "Low",
              status: "ℹ",
            },
            {
              time: "Info",
              event: "Unusual data export request detected",
              level: "Low",
              status: "ℹ",
            },
          ],
        };
    }
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl bg-card border border-border max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {content.stats.map((stat, idx) => (
              <div key={idx} className="p-4 bg-background rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Details List */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {content.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {detail.event}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {detail.time}
                        {type === "events" && ` • ${detail.count} events`}
                        {type === "anomalies" && ` • ${detail.type}`}
                        {type === "risk" && ` • ${detail.level}`}
                      </p>
                    </div>
                    <span className="text-lg ml-2">{detail.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
