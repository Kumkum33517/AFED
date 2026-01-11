import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Settings, TrendingUp } from "lucide-react";

interface RoleOption {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const roles: RoleOption[] = [
  {
    id: "auditor",
    title: "Auditor / Compliance Officer",
    subtitle: "Audit & Compliance",
    description: "Can view anomalies, reports, analytics",
    icon: <ShieldAlert className="w-8 h-8" />,
    color: "from-blue-600 to-blue-700",
  },
  {
    id: "admin",
    title: "Administrator",
    subtitle: "System Admin",
    description: "Can view system health, configurations, access control",
    icon: <Settings className="w-8 h-8" />,
    color: "from-indigo-600 to-indigo-700",
  },
  {
    id: "analyst",
    title: "Analyst",
    subtitle: "Data Analyst",
    description: "Can view detection, analytics, trends",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-purple-600 to-purple-700",
  },
];

export default function RoleSelectionPage() {
  const navigate = useNavigate();

  const handleRoleSelect = (roleId: string) => {
    // Store selected role in sessionStorage (could also use context/state management)
    sessionStorage.setItem("userRole", roleId);
    // Navigate to landing page
    navigate("/landing");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -z-10" />

      {/* Content */}
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to AFED
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Administrative Fraud & Event Detection
          </p>
          <p className="text-base text-slate-500">
            Select your role to continue
          </p>
        </div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {roles.map((role) => (
            <Card
              key={role.id}
              className="relative overflow-hidden bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 cursor-pointer group"
              onClick={() => handleRoleSelect(role.id)}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${role.color}`}
              />

              <div className="relative p-8 flex flex-col items-center text-center">
                {/* Icon */}
                <div
                  className={`mb-4 p-4 rounded-lg bg-gradient-to-br ${role.color} text-white`}
                >
                  {role.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {role.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-cyan-400 font-semibold mb-4 uppercase tracking-wider">
                  {role.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-6">
                  {role.description}
                </p>

                {/* Button */}
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRoleSelect(role.id);
                  }}
                >
                  Select Role
                </Button>
              </div>

              {/* Bottom accent line */}
              <div className={`h-1 bg-gradient-to-r ${role.color}`} />
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-slate-500 text-sm">
          <p>© 2026 AFED. Protecting your systems from fraud and anomalies.</p>
        </div>
      </div>
    </div>
  );
}
