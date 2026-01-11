import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";

const data = [
  { time: "00:00", events: 1200, anomalies: 45 },
  { time: "02:00", events: 1900, anomalies: 78 },
  { time: "04:00", events: 1400, anomalies: 52 },
  { time: "06:00", events: 2210, anomalies: 95 },
  { time: "08:00", events: 2290, anomalies: 112 },
  { time: "10:00", events: 2000, anomalies: 88 },
  { time: "12:00", events: 2181, anomalies: 105 },
  { time: "14:00", events: 2500, anomalies: 142 },
  { time: "16:00", events: 2100, anomalies: 98 },
  { time: "18:00", events: 2800, anomalies: 165 },
  { time: "20:00", events: 2390, anomalies: 125 },
  { time: "22:00", events: 2490, anomalies: 138 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; name: string; color: string }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const anomalyValue = payload.find((p) => p.name === "Anomalies")?.value || 0;
    const eventValue = payload.find((p) => p.name === "Normal Events")?.value || 0;
    const anomalyRate = eventValue > 0 ? ((anomalyValue / eventValue) * 100).toFixed(2) : 0;

    const isSpiked = anomalyValue > 120;

    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
        <p className="text-xs text-slate-400">
          Normal Events: <span className="text-primary font-semibold">{eventValue}</span>
        </p>
        <p className="text-xs text-slate-400 mb-2">
          Anomalies: <span className="text-red-400 font-semibold">{anomalyValue}</span>
        </p>
        <p className="text-xs text-slate-400 mb-2">
          Anomaly Rate: <span className="font-semibold">{anomalyRate}%</span>
        </p>
        {isSpiked && (
          <p className="text-xs text-orange-400 font-semibold mt-2 bg-orange-400/10 px-2 py-1 rounded">
            ⚠ Spike detected – unusual activity
          </p>
        )}
      </div>
    );
  }
  return null;
}

export default function EventsOverTimeGraph() {
  return (
    <Card className="p-6 border border-border bg-card">
      <h2 className="text-2xl font-bold text-foreground mb-2">Events Over Time</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Monitoring normal events and anomaly detection patterns
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="time"
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: "12px" }}
          />
          <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: "12px" }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: "20px" }} />
          <Line
            type="monotone"
            dataKey="events"
            stroke="#64748b"
            strokeWidth={3}
            dot={false}
            name="Normal Events"
            isAnimationActive={true}
          />
          <Line
            type="monotone"
            dataKey="anomalies"
            stroke="#f97316"
            strokeWidth={3}
            dot={false}
            name="Anomalies"
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
