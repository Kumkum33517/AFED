import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Bell, Lock, Users, Shield, Database } from "lucide-react";

export default function SettingsPage() {
  const settingsSections = [
    {
      title: "Notifications",
      description: "Manage alert and notification preferences",
      icon: Bell,
      settings: [
        { label: "Email Alerts", enabled: true },
        { label: "SMS Notifications", enabled: false },
        { label: "High Risk Alerts", enabled: true },
        { label: "Daily Summary", enabled: true },
      ],
    },
    {
      title: "Security",
      description: "Configure security and authentication settings",
      icon: Lock,
      settings: [
        { label: "Two-Factor Authentication", enabled: true },
        { label: "IP Whitelist", enabled: false },
        { label: "Session Timeout", enabled: true },
        { label: "API Key Rotation", enabled: true },
      ],
    },
    {
      title: "Access Control",
      description: "Manage user roles and permissions",
      icon: Users,
      settings: [
        { label: "Role-Based Access", enabled: true },
        { label: "Admin Approval Required", enabled: false },
        { label: "Team Collaboration", enabled: true },
        { label: "Audit Logging", enabled: true },
      ],
    },
    {
      title: "Data Protection",
      description: "Configure data privacy and compliance settings",
      icon: Shield,
      settings: [
        { label: "Data Encryption", enabled: true },
        { label: "GDPR Compliance", enabled: true },
        { label: "Data Retention Policy", enabled: true },
        { label: "PII Masking", enabled: false },
      ],
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Configure AFED system settings and preferences
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingsSections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <Card key={idx} className="p-8 border border-border bg-card">
                <div className="flex items-start gap-4 mb-6">
                  <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {section.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {section.settings.map((setting, settingIdx) => (
                    <div
                      key={settingIdx}
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
              </Card>
            );
          })}
        </div>

        {/* API Configuration */}
        <Card className="p-8 border border-border bg-card mt-6">
          <div className="flex items-start gap-4 mb-6">
            <Database className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                API Configuration
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Manage API keys and integration settings
              </p>
            </div>
          </div>

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
              Save API Settings
            </button>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
