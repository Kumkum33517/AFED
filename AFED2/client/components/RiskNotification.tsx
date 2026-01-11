import { AlertTriangle } from "lucide-react";

interface RiskNotificationProps {
  level: "low" | "medium" | "high";
  message: string;
}

export default function RiskNotification({
  level,
  message,
}: RiskNotificationProps) {
  const bgColorClasses = {
    low: "bg-blue-900/80 border-blue-500 text-blue-100",
    medium: "bg-amber-900/80 border-amber-500 text-amber-100",
    high: "bg-red-900/80 border-red-500 text-red-100",
  };

  const borderColorClasses = {
    low: "border-blue-500",
    medium: "border-amber-500",
    high: "border-red-500",
  };

  const iconColorClasses = {
    low: "text-blue-400",
    medium: "text-amber-400",
    high: "text-red-400",
  };

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${bgColorClasses[level]} animate-in slide-in-from-top-4 duration-300`}
    >
      <AlertTriangle className={`w-5 h-5 flex-shrink-0 ${iconColorClasses[level]}`} />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}
