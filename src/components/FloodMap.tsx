import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export type RiskZone = {
  name: string;
  lat: number;
  lng: number;
  radius: number;
  level: "high" | "moderate" | "low";
  score: number;
  rainfall: string;
  riverLevel: string;
  population: string;
  action: string;
};

export type MapPoint = {
  name: string;
  lat: number;
  lng: number;
  type: "user" | "shelter" | "hospital" | "dam";
};

export type RouteSegment = {
  lat: number;
  lng: number;
};

const zoneColors: Record<RiskZone["level"], string> = {
  high: "#e0533a",
  moderate: "#e0a040",
  low: "#3da868",
};

const userIcon = L.divIcon({
  className: "",
  html: '<div style="width:14px;height:14px;border-radius:50%;background:#3b82c4;border:3px solid #fff;box-shadow:0 0 0 4px rgba(59,130,196,0.3);"></div>',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

const shelterIcon = L.divIcon({
  className: "",
  html: '<div style="width:12px;height:12px;border-radius:2px;background:#3da868;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>',
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

const hospitalIcon = L.divIcon({
  className: "",
  html: '<div style="width:12px;height:12px;border-radius:2px;background:#e0533a;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>',
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

const damIcon = L.divIcon({
  className: "",
  html: '<div style="width:14px;height:14px;border-radius:50%;background:#3b82c4;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:8px;color:#fff;font-weight:bold;">D</div>',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

function iconForType(type: MapPoint["type"]) {
  switch (type) {
    case "user":
      return userIcon;
    case "shelter":
      return shelterIcon;
    case "hospital":
      return hospitalIcon;
    case "dam":
      return damIcon;
  }
}

export type FloodMapProps = {
  zones: RiskZone[];
  points: MapPoint[];
  route?: RouteSegment[];
  center?: [number, number];
  zoom?: number;
  className?: string;
  onZoneClick?: (zone: RiskZone) => void;
};

export function FloodMap({
  zones,
  points,
  route,
  center = [29.385, 79.645],
  zoom = 12,
  className,
  onZoneClick,
}: FloodMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center,
      zoom,
      zoomControl: true,
      scrollWheelZoom: true,
    });
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap · Demo data",
      maxZoom: 18,
    }).addTo(map);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [center, zoom]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const layerGroup = L.layerGroup().addTo(map);

    for (const zone of zones) {
      const color = zoneColors[zone.level];
      const circle = L.circle([zone.lat, zone.lng], {
        radius: zone.radius,
        color: color,
        fillColor: color,
        fillOpacity: 0.2,
        weight: 2,
      });
      circle.bindPopup(
        `<div style="min-width:160px;">
          <div style="font-weight:bold;font-size:12px;margin-bottom:4px;">${zone.name}</div>
          <div style="color:${color};font-size:11px;font-weight:600;">${zone.level.toUpperCase()} · ${zone.score}/100</div>
          <div style="margin-top:4px;font-size:10px;color:#666;">Rainfall: ${zone.rainfall}</div>
          <div style="font-size:10px;color:#666;">River level: ${zone.riverLevel}</div>
          <div style="font-size:10px;color:#666;">Population: ${zone.population}</div>
          <div style="margin-top:4px;font-size:10px;">${zone.action}</div>
        </div>`,
      );
      if (onZoneClick) {
        circle.on("click", () => onZoneClick(zone));
      }
      circle.addTo(layerGroup);
    }

    for (const point of points) {
      const marker = L.marker([point.lat, point.lng], { icon: iconForType(point.type) });
      marker.bindPopup(
        `<div><strong>${point.name}</strong><br/><span style="font-size:10px;color:#666;text-transform:capitalize;">${point.type}</span></div>`,
      );
      marker.addTo(layerGroup);
    }

    if (route && route.length >= 2) {
      const latlngs = route.map((r) => [r.lat, r.lng] as [number, number]);
      L.polyline(latlngs, {
        color: "#3da868",
        weight: 5,
        opacity: 0.8,
        dashArray: "10, 6",
      }).addTo(layerGroup);
    }

    return () => {
      map.removeLayer(layerGroup);
    };
  }, [zones, points, route, onZoneClick]);

  return <div ref={containerRef} className={className} style={{ height: "100%", width: "100%" }} />;
}

export const demoZones: RiskZone[] = [
  {
    name: "Upper Kumaun Basin",
    lat: 29.39,
    lng: 79.63,
    radius: 1200,
    level: "high",
    score: 78,
    rainfall: "124 mm",
    riverLevel: "4.8 m",
    population: "3,200 est.",
    action: "Evacuate to Community Shelter A",
  },
  {
    name: "Ridge Road Sector",
    lat: 29.37,
    lng: 79.62,
    radius: 800,
    level: "moderate",
    score: 54,
    rainfall: "88 mm",
    riverLevel: "3.2 m",
    population: "1,100 est.",
    action: "Monitor and prepare for evacuation",
  },
  {
    name: "Valley Floor",
    lat: 29.4,
    lng: 79.66,
    radius: 1000,
    level: "high",
    score: 71,
    rainfall: "108 mm",
    riverLevel: "4.1 m",
    population: "2,400 est.",
    action: "Move to higher ground",
  },
  {
    name: "Lower Basin",
    lat: 29.36,
    lng: 79.67,
    radius: 700,
    level: "low",
    score: 28,
    rainfall: "42 mm",
    riverLevel: "2.1 m",
    population: "600 est.",
    action: "No immediate action required",
  },
];

export const demoPoints: MapPoint[] = [
  { name: "Your Location", lat: 29.385, lng: 79.645, type: "user" },
  { name: "Community Shelter A", lat: 29.4, lng: 79.67, type: "shelter" },
  { name: "Ridge School Hall", lat: 29.37, lng: 79.66, type: "shelter" },
  { name: "Valley Clinic", lat: 29.395, lng: 79.655, type: "hospital" },
  { name: "Dam K-2", lat: 29.41, lng: 79.63, type: "dam" },
];

export const demoRoute: RouteSegment[] = [
  { lat: 29.385, lng: 79.645 },
  { lat: 29.39, lng: 79.65 },
  { lat: 29.395, lng: 79.658 },
  { lat: 29.398, lng: 79.665 },
  { lat: 29.4, lng: 79.67 },
];
