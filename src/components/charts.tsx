import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { PredictionResult } from "@/services/predictionService";

const trendData: Record<string, Array<{ time: string; score: number }>> = {
  "24 Hours": [
    { time: "00:00", score: 22 },
    { time: "04:00", score: 30 },
    { time: "08:00", score: 42 },
    { time: "12:00", score: 56 },
    { time: "16:00", score: 72 },
    { time: "20:00", score: 78 },
  ],
  "7 Days": [
    { time: "Mon", score: 31 },
    { time: "Tue", score: 36 },
    { time: "Wed", score: 41 },
    { time: "Thu", score: 48 },
    { time: "Fri", score: 52 },
    { time: "Sat", score: 61 },
    { time: "Sun", score: 78 },
  ],
  "30 Days": [
    { time: "W1", score: 35 },
    { time: "W2", score: 39 },
    { time: "W3", score: 42 },
    { time: "W4", score: 45 },
    { time: "W5", score: 50 },
    { time: "W6", score: 58 },
    { time: "W7", score: 78 },
  ],
};

export type TrendPeriod = keyof typeof trendData;

export function RiskTrendChart({ period }: { period: TrendPeriod }) {
  const data = trendData[period];
  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={data} margin={{ top: 5, right: 10, bottom: 0, left: -28 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.91 0.008 255.508)" />
        <XAxis
          dataKey="time"
          tick={{ fontSize: 10, fontFamily: "monospace", fill: "oklch(0.68 0.015 257.417)" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          domain={[0, 100]}
          tick={{ fontSize: 10, fontFamily: "monospace", fill: "oklch(0.68 0.015 257.417)" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "11px",
            border: "1px solid oklch(0.91 0.008 255.508)",
            background: "oklch(0.995 0.002 247.858)",
          }}
        />
        <Line
          type="monotone"
          dataKey="score"
          stroke="oklch(0.5 0.14 232.788)"
          strokeWidth={2.5}
          dot={{ r: 3, fill: "oklch(0.5 0.14 232.788)" }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function FeatureImportanceChart({ result }: { result: PredictionResult }) {
  const data = result.factors.map((f) => ({ name: f.label, value: f.value }));
  const colors = ["oklch(0.576 0.245 27.325)", "oklch(0.5 0.14 232.788)", "oklch(0.7 0.16 70)", "oklch(0.596 0.145 163.225)", "oklch(0.546 0.16 232.788)"];
  return (
    <ResponsiveContainer width="100%" height={160}>
      <BarChart data={data} layout="vertical" margin={{ top: 0, right: 10, bottom: 0, left: 0 }}>
        <XAxis type="number" domain={[0, 100]} hide />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ fontSize: 10, fontFamily: "monospace", fill: "oklch(0.5 0.02 257.417)" }}
          axisLine={false}
          tickLine={false}
          width={110}
        />
        <Tooltip
          contentStyle={{
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "11px",
            border: "1px solid oklch(0.91 0.008 255.508)",
            background: "oklch(0.995 0.002 247.858)",
          }}
          formatter={(v: number) => [`${v}%`, "Importance"]}
        />
        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={12}>
          {data.map((_, i) => (
            <Cell key={i} fill={colors[i % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function RainfallChart() {
  const data = [
    { time: "00:00", rainfall: 8 },
    { time: "04:00", rainfall: 14 },
    { time: "08:00", rainfall: 32 },
    { time: "12:00", rainfall: 48 },
    { time: "16:00", rainfall: 65 },
    { time: "20:00", rainfall: 82 },
  ];
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} margin={{ top: 5, right: 10, bottom: 0, left: -28 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.91 0.008 255.508)" />
        <XAxis
          dataKey="time"
          tick={{ fontSize: 10, fontFamily: "monospace", fill: "oklch(0.68 0.015 257.417)" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 10, fontFamily: "monospace", fill: "oklch(0.68 0.015 257.417)" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "11px",
            border: "1px solid oklch(0.91 0.008 255.508)",
            background: "oklch(0.995 0.002 247.858)",
          }}
          formatter={(v: number) => [`${v} mm`, "Rainfall"]}
        />
        <Bar dataKey="rainfall" fill="oklch(0.5 0.14 232.788)" radius={[4, 4, 0, 0]} barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function RiverLevelChart() {
  const data = [
    { time: "00:00", level: 2.1 },
    { time: "04:00", level: 2.6 },
    { time: "08:00", level: 3.4 },
    { time: "12:00", level: 3.9 },
    { time: "16:00", level: 4.4 },
    { time: "20:00", level: 4.8 },
  ];
  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={data} margin={{ top: 5, right: 10, bottom: 0, left: -28 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.91 0.008 255.508)" />
        <XAxis
          dataKey="time"
          tick={{ fontSize: 10, fontFamily: "monospace", fill: "oklch(0.68 0.015 257.417)" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          domain={[0, 6]}
          tick={{ fontSize: 10, fontFamily: "monospace", fill: "oklch(0.68 0.015 257.417)" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "11px",
            border: "1px solid oklch(0.91 0.008 255.508)",
            background: "oklch(0.995 0.002 247.858)",
          }}
          formatter={(v: number) => [`${v} m`, "River level"]}
        />
        <Line
          type="monotone"
          dataKey="level"
          stroke="oklch(0.576 0.245 27.325)"
          strokeWidth={2.5}
          dot={{ r: 3, fill: "oklch(0.576 0.245 27.325)" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function FloodRiskDistributionChart() {
  const data = [
    { name: "Low", value: 18, fill: "oklch(0.596 0.145 163.225)" },
    { name: "Moderate", value: 32, fill: "oklch(0.7 0.16 70)" },
    { name: "High", value: 38, fill: "oklch(0.576 0.245 27.325)" },
    { name: "Critical", value: 12, fill: "oklch(0.45 0.22 27.325)" },
  ];
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={70}
          innerRadius={40}
          paddingAngle={2}
        >
          {data.map((entry, i) => (
            <Cell key={i} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "11px",
            border: "1px solid oklch(0.91 0.008 255.508)",
            background: "oklch(0.995 0.002 247.858)",
          }}
          formatter={(v: number, n: string) => [`${v}%`, n]}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function VegetationRadarChart() {
  const data = [
    { metric: "Forest", current: 31, target: 45 },
    { metric: "Canopy", current: 44, target: 60 },
    { metric: "Density", current: 38, target: 55 },
    { metric: "Restoration", current: 72, target: 85 },
    { metric: "Vulnerability", current: 58, target: 30 },
  ];
  return (
    <ResponsiveContainer width="100%" height={220}>
      <RadarChart data={data}>
        <PolarGrid stroke="oklch(0.91 0.008 255.508)" />
        <PolarAngleAxis
          dataKey="metric"
          tick={{ fontSize: 10, fontFamily: "monospace", fill: "oklch(0.68 0.015 257.417)" }}
        />
        <Radar
          name="Current"
          dataKey="current"
          stroke="oklch(0.576 0.245 27.325)"
          fill="oklch(0.576 0.245 27.325)"
          fillOpacity={0.3}
        />
        <Radar
          name="Target"
          dataKey="target"
          stroke="oklch(0.596 0.145 163.225)"
          fill="oklch(0.596 0.145 163.225)"
          fillOpacity={0.3}
        />
        <Tooltip
          contentStyle={{
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "11px",
            border: "1px solid oklch(0.91 0.008 255.508)",
            background: "oklch(0.995 0.002 247.858)",
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export function AlertFrequencyChart() {
  const data = [
    { day: "Mon", alerts: 4 },
    { day: "Tue", alerts: 7 },
    { day: "Wed", alerts: 5 },
    { day: "Thu", alerts: 9 },
    { day: "Fri", alerts: 12 },
    { day: "Sat", alerts: 8 },
    { day: "Sun", alerts: 6 },
  ];
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} margin={{ top: 5, right: 10, bottom: 0, left: -28 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.91 0.008 255.508)" />
        <XAxis
          dataKey="day"
          tick={{ fontSize: 10, fontFamily: "monospace", fill: "oklch(0.68 0.015 257.417)" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 10, fontFamily: "monospace", fill: "oklch(0.68 0.015 257.417)" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "11px",
            border: "1px solid oklch(0.91 0.008 255.508)",
            background: "oklch(0.995 0.002 247.858)",
          }}
          formatter={(v: number) => [v, "Alerts"]}
        />
        <Bar dataKey="alerts" fill="oklch(0.546 0.16 232.788)" radius={[4, 4, 0, 0]} barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
}
