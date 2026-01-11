import { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Lock, Users, Database, Shield } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("security");

  const securitySettings = [
    { label: "Two-Factor Authentication", enabled: true },
    { label: "IP Whitelist", enabled: false },
    { label: "Session Timeout", enabled: true },
    { label: "API Key Rotation", enabled: true },
    { label: "SSL/TLS Encryption", enabled: true },
    { label: "Password Policy", enabled: true },
  ];

  const roles = [
    {
      id: "auditor",
      name: "Auditor / Compliance Officer",
      permissions: [
        { name: "View Anomalies", allowed: true },
        { name: "View Reports", allowed: true },
        { name: "View Analytics", allowed: true },
        { name: "Export Data", allowed: true },
        { name: "Manage Users", allowed: false },
        { name: "System Configuration", allowed: false },
      ],
    },
    {
      id: "admin",
      name: "Administrator",
      permissions: [
        { name: "View Anomalies", allowed: true },
        { name: "View Reports", allowed: true },
        { name: "View Analytics", allowed: true },
        { name: "Export Data", allowed: true },
        { name: "Manage Users", allowed: true },
        { name: "System Configuration", allowed: true },
      ],
    },
    {
      id: "analyst",
      name: "Analyst",
      permissions: [
        { name: "View Anomalies", allowed: true },
        { name: "View Reports", allowed: true },
        { name: "View Analytics", allowed: true },
        { name: "Export Data", allowed: true },
        { name: "Manage Users", allowed: false },
        { name: "System Configuration", allowed: false },
      ],
    },
  ];

  const systemPreferences = [
    { label: "Email Alerts", enabled: true },
    { label: "SMS Notifications", enabled: false },
    { label: "High Risk Alerts", enabled: true },
    { label: "Daily Summary", enabled: true },
    { label: "Weekly Report Digest", enabled: true },
    { label: "System Maintenance Alerts", enabled: true },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Configure AFED system settings, security, and access control
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-border mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("security")}
            className={`pb-4 px-2 font-medium text-sm transition-colors ${
              activeTab === "security"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Security
            </div>
          </button>
          <button
            onClick={() => setActiveTab("access")}
            className={`pb-4 px-2 font-medium text-sm transition-colors ${
              activeTab === "access"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Access Control
            </div>
          </button>
          <button
            onClick={() => setActiveTab("preferences")}
            className={`pb-4 px-2 font-medium text-sm transition-colors ${
              activeTab === "preferences"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              System Preferences
            </div>
          </button>
        </div>

        {/* Security Tab */}
        {activeTab === "security" && (
          <Card className="p-8 border border-border bg-card mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Security Settings
            </h2>
            <p className="text-muted-foreground mb-6">
              Configure security and authentication settings for AFED
            </p>

            <div className="space-y-4 mb-8">
              {securitySettings.map((setting, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors"
                >
                  <span className="font-medium text-foreground">
                    {setting.label}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={setting.enabled}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-secondary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
                  </label>
                </div>
              ))}
            </div>

            {/* API Configuration */}
            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                API Configuration
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    API Key
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      value="sk_live_123456789abcdef"
                      readOnly
                      className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground"
                    />
                    <button className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                      Copy
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Webhook URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://your-domain.com/webhook"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground"
                  />
                </div>

                <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Save Security Settings
                </button>
              </div>
            </div>
          </Card>
        )}

        {/* Access Control Tab */}
        {activeTab === "access" && (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              View and manage role-based access control (RBAC) for different user types
            </p>

            {roles.map((role) => (
              <Card key={role.id} className="p-8 border border-border bg-card">
                <h3 className="text-lg font-bold text-foreground mb-6">
                  {role.name}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {role.permissions.map((permission, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-lg bg-background border border-border"
                    >
                      <span className="text-sm text-foreground">
                        {permission.name}
                      </span>
                      <input
                        type="checkbox"
                        checked={permission.allowed}
                        readOnly
                        className="w-5 h-5 rounded border-primary cursor-not-allowed"
                        disabled
                      />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* System Preferences Tab */}
        {activeTab === "preferences" && (
          <Card className="p-8 border border-border bg-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              System Preferences
            </h2>
            <p className="text-muted-foreground mb-6">
              Configure notification and system behavior preferences
            </p>

            <div className="space-y-4 mb-8">
              {systemPreferences.map((setting, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors"
                >
                  <span className="font-medium text-foreground">
                    {setting.label}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={setting.enabled}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-secondary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
                  </label>
                </div>
              ))}
            </div>

            <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Save Preferences
            </button>
          </Card>
        )}
      </div>
    </Layout>
  );
}
