import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Download, FileText, Calendar } from "lucide-react";

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      title: "Weekly Fraud Detection Report",
      date: "Generated on Dec 16, 2024",
      period: "Dec 10 - Dec 16, 2024",
      type: "Comprehensive",
      size: "2.4 MB",
      icon: FileText,
    },
    {
      id: 2,
      title: "Daily Anomaly Summary",
      date: "Generated on Dec 17, 2024",
      period: "Dec 17, 2024",
      type: "Daily",
      size: "856 KB",
      icon: FileText,
    },
    {
      id: 3,
      title: "Monthly Compliance Report",
      date: "Generated on Dec 1, 2024",
      period: "November 2024",
      type: "Compliance",
      size: "5.2 MB",
      icon: FileText,
    },
    {
      id: 4,
      title: "System Performance Analysis",
      date: "Generated on Dec 17, 2024",
      period: "Last 30 Days",
      type: "Performance",
      size: "1.8 MB",
      icon: FileText,
    },
    {
      id: 5,
      title: "Risk Assessment Report",
      date: "Generated on Dec 15, 2024",
      period: "Dec 1 - Dec 15, 2024",
      type: "Risk Analysis",
      size: "3.1 MB",
      icon: FileText,
    },
    {
      id: 6,
      title: "Executive Summary",
      date: "Generated on Dec 10, 2024",
      period: "Q4 2024",
      type: "Executive",
      size: "1.2 MB",
      icon: FileText,
    },
  ];

  const reportTypes = [
    { name: "Weekly Reports", count: 4 },
    { name: "Daily Reports", count: 30 },
    { name: "Monthly Reports", count: 3 },
    { name: "Custom Reports", count: 12 },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Reports</h1>
          <p className="text-muted-foreground">
            Generate and manage fraud detection reports
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {reportTypes.map((type, idx) => (
            <Card key={idx} className="p-6 border border-border bg-card">
              <p className="text-sm text-muted-foreground">{type.name}</p>
              <p className="text-3xl font-bold text-primary mt-2">{type.count}</p>
            </Card>
          ))}
        </div>

        {/* Generate Report Section */}
        <Card className="p-8 border border-border bg-card mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-dark-pink via-dark-pink/50 to-transparent"></div>
          <h3 className="text-xl font-bold text-foreground mb-6">
            Generate New Report
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Report Type
              </label>
              <select className="px-4 py-2 bg-background border border-border rounded-lg text-foreground">
                <option>Weekly Summary</option>
                <option>Daily Anomalies</option>
                <option>Monthly Overview</option>
                <option>Custom Report</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Date Range
              </label>
              <select className="px-4 py-2 bg-background border border-border rounded-lg text-foreground">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Custom range</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Format
              </label>
              <select className="px-4 py-2 bg-background border border-border rounded-lg text-foreground">
                <option>PDF</option>
                <option>CSV</option>
                <option>Excel</option>
                <option>JSON</option>
              </select>
            </div>
          </div>

          {/* Preview Summary */}
          <div className="mb-6 p-4 rounded-lg bg-background border border-border/50">
            <p className="text-sm font-semibold text-foreground mb-3">Preview Summary</p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-bold text-primary">47</p>
                <p className="text-xs text-muted-foreground">Total events</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-400">12</p>
                <p className="text-xs text-muted-foreground">Anomalies included</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-400">3</p>
                <p className="text-xs text-muted-foreground">High-risk cases</p>
              </div>
            </div>
          </div>

          <button className="px-6 py-2 bg-gradient-to-r from-primary to-dark-pink text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
            Generate Report
          </button>
        </Card>

        {/* Recent Reports */}
        <h3 className="text-xl font-bold text-foreground mb-4">Recent Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reports.map((report) => {
            const Icon = report.icon;
            return (
              <Card
                key={report.id}
                className="p-6 border border-border bg-card hover:border-primary transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {report.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {report.date}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-dark-pink/20 text-dark-pink">
                    {report.type}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{report.period}</span>
                  </div>
                  <span>{report.size}</span>
                </div>
                <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-background border border-border rounded-lg text-foreground hover:border-dark-pink hover:text-dark-pink transition-all hover:shadow-lg hover:shadow-dark-pink/20">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
