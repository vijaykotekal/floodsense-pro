export type RiskLevel = "LOW" | "MODERATE" | "HIGH" | "CRITICAL";

export type PredictionInput = {
  rainfallIntensity: number;
  totalRainfall: number;
  rainfallDuration: number;
  cloudburst: number;
  temperature: number;
  humidity: number;
  climateChange: number;
  elevation: number;
  slope: number;
  terrain: number;
  vegetation: number;
  forest: number;
  riverLevel: number;
  riverFlow: number;
  damCapacity: number;
  damLevel: number;
  construction: number;
  development: number;
  landUse: number;
};

export type PredictionResult = {
  score: number;
  probability: number;
  confidence: number;
  level: RiskLevel;
  factors: Array<{ label: string; value: number }>;
  explanation: string;
};

export const demoInput: PredictionInput = {
  rainfallIntensity: 34,
  totalRainfall: 124,
  rainfallDuration: 6.5,
  cloudburst: 72,
  temperature: 19,
  humidity: 87,
  climateChange: 58,
  elevation: 1840,
  slope: 42,
  terrain: 78,
  vegetation: 28,
  forest: 31,
  riverLevel: 4.8,
  riverFlow: 76,
  damCapacity: 64,
  damLevel: 82,
  construction: 61,
  development: 54,
  landUse: 48,
};

const clamp = (value: number, min = 0, max = 100) => Math.min(max, Math.max(min, value));

export function predictFloodRisk(input: PredictionInput): PredictionResult {
  const score = Math.round(
    clamp(
      input.totalRainfall * 0.23 +
        input.rainfallIntensity * 0.22 +
        input.rainfallDuration * 2.8 +
        input.cloudburst * 0.08 +
        input.humidity * 0.08 +
        input.slope * 0.26 +
        input.terrain * 0.1 +
        input.riverLevel * 5.3 +
        input.riverFlow * 0.1 +
        input.damLevel * 0.08 +
        input.construction * 0.08 -
        input.vegetation * 0.12 -
        input.forest * 0.05 -
        28,
    ),
  );
  const level: RiskLevel = score >= 85 ? "CRITICAL" : score >= 65 ? "HIGH" : score >= 40 ? "MODERATE" : "LOW";
  const probability = clamp(Math.round(score + 4));
  const confidence = clamp(Math.round(85 + input.terrain / 20 - input.climateChange / 40));
  const factors = [
    { label: "Rainfall intensity", value: clamp(Math.round(input.rainfallIntensity * 2.4)) },
    { label: "River level", value: clamp(Math.round(input.riverLevel * 14)) },
    { label: "Terrain slope", value: clamp(Math.round(input.slope * 1.35)) },
    { label: "Low vegetation", value: clamp(Math.round(100 - input.vegetation * 1.15)) },
    { label: "Construction activity", value: clamp(Math.round(input.construction * 0.7)) },
  ].sort((a, b) => b.value - a.value);

  const explanation = `${factors[0]?.label ?? "Rainfall"}, steep terrain, and rising river levels are the primary factors contributing to this modeled ${level.toLowerCase()} flood risk.`;
  return { score, probability, confidence, level, factors, explanation };
}