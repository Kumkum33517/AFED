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

export default function EventsOverTimeGraph() {
  return (
    <Card className="p-6 border border-border bg-card">
      <h2 className="text-2xl font-bold text-foreground mb-6">Events Over Time</h2>
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
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: `1px solid hsl(var(--border))`,
              borderRadius: "6px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Legend wrapperStyle={{ paddingTop: "20px" }} />
          <Line
            type="monotone"
            dataKey="events"
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            dot={false}
            name="Total Events"
            isAnimationActive={true}
          />
          <Line
            type="monotone"
            dataKey="anomalies"
            stroke="hsl(var(--dark-pink))"
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
