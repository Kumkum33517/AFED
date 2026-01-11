import { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Activity, AlertTriangle, TrendingUp, Filter } from "lucide-react";

interface DepartmentKPI {
  department: string;
  scheme: string;
  totalEvents: number;
  anomalies: number;
  riskLevel: "Low" | "Medium" | "High";
  processedToday: number;
}

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  subtext?: string;
  color?: "primary" | "amber" | "red";
}

function MetricCard({
  icon,
  label,
  value,
  subtext,
  color = "primary",
}: MetricCardProps) {
  const colorClasses = {
    primary:
      "text-primary border-primary/50 hover:border-primary shadow-lg shadow-primary/20 hover:shadow-primary/40",
    amber:
      "text-amber-400 border-amber-400/50 hover:border-amber-400 shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40",
    red: "text-red-400 border-red-400/50 hover:border-red-400 shadow-lg shadow-red-400/20 hover:shadow-red-400/40",
  };

  return (
    <Card
      className={`p-6 border-2 ${colorClasses[color]} bg-card hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
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
        <div className="opacity-80">{icon}</div>
      </div>
    </Card>
  );
}

export default function OperationalDashboardPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedScheme, setSelectedScheme] = useState("All");
  const [selectedTime, setSelectedTime] = useState("Last 24 hours");

  const departmentKPIs: DepartmentKPI[] = [
    {
      department: "Finance",
      scheme: "Payments",
      totalEvents: 156847,
      anomalies: 125,
      riskLevel: "Medium",
      processedToday: 45230,
    },
    {
      department: "Procurement",
      scheme: "Vendors",
      totalEvents: 98234,
      anomalies: 87,
      riskLevel: "High",
      processedToday: 28940,
    },
    {
      department: "Human Resources",
      scheme: "Payroll",
      totalEvents: 76543,
      anomalies: 42,
      riskLevel: "Low",
      processedToday: 22150,
    },
    {
      department: "Benefits",
      scheme: "Welfare",
      totalEvents: 54321,
      anomalies: 38,
      riskLevel: "Low",
      processedToday: 16780,
    },
    {
      department: "Compliance",
      scheme: "Audit Trail",
      totalEvents: 45678,
      anomalies: 52,
      riskLevel: "Medium",
      processedToday: 13420,
    },
  ];

  const filteredKPIs =
    selectedDepartment === "All"
      ? departmentKPIs
      : departmentKPIs.filter((d) => d.department === selectedDepartment);

  const totalEvents = filteredKPIs.reduce((sum, d) => sum + d.totalEvents, 0);
  const totalAnomalies = filteredKPIs.reduce((sum, d) => sum + d.anomalies, 0);
  const totalProcessed = filteredKPIs.reduce((sum, d) => sum + d.processedToday, 0);

  const getRiskColor = (level: string) => {
    switch (level) {
      case "High":
        return "text-red-400 bg-red-900/20";
      case "Medium":
        return "text-amber-400 bg-amber-900/20";
      case "Low":
        return "text-green-400 bg-green-900/20";
      default:
        return "text-gray-400 bg-gray-900/20";
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Operational Summary
          </h1>
          <p className="text-muted-foreground">
            Department-wise fraud detection and event analysis
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6 border border-border bg-card mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Filters</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Department
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 bg-background border border-border rounded-lg text-foreground cursor-pointer hover:border-primary transition-colors"
              >
                <option>All</option>
                <option>Finance</option>
                <option>Procurement</option>
                <option>Human Resources</option>
                <option>Benefits</option>
                <option>Compliance</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Scheme
              </label>
              <select
                value={selectedScheme}
                onChange={(e) => setSelectedScheme(e.target.value)}
                className="px-4 py-2 bg-background border border-border rounded-lg text-foreground cursor-pointer hover:border-primary transition-colors"
              >
                <option>All</option>
                <option>Payments</option>
                <option>Vendors</option>
                <option>Payroll</option>
                <option>Welfare</option>
                <option>Audit Trail</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Time Range
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="px-4 py-2 bg-background border border-border rounded-lg text-foreground cursor-pointer hover:border-primary transition-colors"
              >
                <option>Last 24 hours</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Aggregated KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <MetricCard
            icon={<Activity className="w-8 h-8" />}
            label="Total Events Processed"
            value={totalEvents.toLocaleString()}
            subtext={`Across ${filteredKPIs.length} departments`}
            color="primary"
          />
          <MetricCard
            icon={<AlertTriangle className="w-8 h-8" />}
            label="Total Anomalies Detected"
            value={totalAnomalies}
            subtext={`${((totalAnomalies / totalEvents) * 100).toFixed(2)}% anomaly rate`}
            color="amber"
          />
          <MetricCard
            icon={<TrendingUp className="w-8 h-8" />}
            label="Processed Today"
            value={`${(totalProcessed / 1000).toFixed(1)}K`}
            subtext="Across all departments"
            color="primary"
          />
        </div>

        {/* Department-wise KPIs Table */}
        <div className="overflow-x-auto">
          <Card className="border border-border bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-background/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Department
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Scheme
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Total Events
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Anomalies
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Anomaly Rate
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Risk Level
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Processed Today
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredKPIs.map((dept, idx) => {
                  const anomalyRate = (
                    (dept.anomalies / dept.totalEvents) *
                    100
                  ).toFixed(2);
                  return (
                    <tr
                      key={idx}
                      className="border-b border-border hover:bg-background/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">
                        {dept.department}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {dept.scheme}
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground">
                        {dept.totalEvents.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">
                        {dept.anomalies}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-6 bg-background rounded overflow-hidden border border-border/50">
                            <div
                              className={`h-full ${
                                parseFloat(anomalyRate) > 0.15
                                  ? "bg-red-500"
                                  : parseFloat(anomalyRate) > 0.05
                                    ? "bg-amber-500"
                                    : "bg-green-500"
                              }`}
                              style={{ width: `${parseFloat(anomalyRate) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {anomalyRate}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getRiskColor(
                            dept.riskLevel
                          )}`}
                        >
                          {dept.riskLevel}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground">
                        {dept.processedToday.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>

        {/* Summary Stats */}
        <Card className="p-6 border border-border bg-card mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            System Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Departments Monitored
              </p>
              <p className="text-3xl font-bold text-primary">
                {filteredKPIs.length}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                High Risk Departments
              </p>
              <p className="text-3xl font-bold text-red-400">
                {filteredKPIs.filter((d) => d.riskLevel === "High").length}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Average Anomaly Rate
              </p>
              <p className="text-3xl font-bold text-amber-400">
                {(
                  filteredKPIs.reduce(
                    (sum, d) => sum + (d.anomalies / d.totalEvents) * 100,
                    0
                  ) / filteredKPIs.length
                ).toFixed(2)}
                %
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
