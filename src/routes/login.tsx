import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Activity, ArrowRight, Eye, EyeOff, Lock, Mail, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "FloodSense AI — Login" },
      { name: "description", content: "Sign in to the FloodSense AI early warning system demo." },
    ],
  }),
  component: LoginPage,
});

type Role = "citizen" | "authority" | "administrator";

const roleInfo: Record<Role, { label: string; icon: typeof Users; access: string[] }> = {
  citizen: {
    label: "Citizen",
    icon: Users,
    access: ["Risk information", "Alerts", "Evacuation map"],
  },
  authority: {
    label: "Authority",
    icon: ShieldCheck,
    access: ["Risk monitoring", "Alerts", "Evacuation coordination", "Analytics"],
  },
  administrator: {
    label: "Administrator",
    icon: Activity,
    access: ["Complete system", "Data", "Users", "Models", "System configuration"],
  },
};

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (role?: Role) => {
    if (role) {
      toast.success(`Signed in as ${roleInfo[role].label}`, {
        description: "Demo access granted. Entering dashboard…",
      });
    } else if (!email || !password) {
      toast.error("Please enter email and password", {
        description: "Or use Continue as Demo User.",
      });
      return;
    } else {
      toast.success("Login successful", {
        description: "Entering dashboard…",
      });
    }
    setTimeout(() => navigate({ to: "/" }), 600);
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      <Toaster position="bottom-right" />
      <div className="flex min-h-screen flex-col lg:flex-row">
        <div className="relative flex flex-1 flex-col justify-between overflow-hidden bg-gradient-to-br from-signal/90 via-signal to-water p-8 text-signalink lg:p-12">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-lg bg-signalink/20 font-display text-xl font-bold">
              F
            </div>
            <div>
              <div className="font-display text-xl font-bold tracking-tight">FloodSense AI</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-signalink/70">
                Early Warning System
              </div>
            </div>
          </div>
          <div className="my-12 max-w-md">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              Predict. Protect. Prepare.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-signalink/80">
              AI-Based Mountain Flood &amp; Flash-Flood Early Warning System. Multi-source data
              flows into modeled risk prediction, early warning, GIS evacuation, and long-term
              restoration planning.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider">
              {["Predict", "Explain", "Warn", "Evacuate", "Restore"].map((step, i) => (
                <span
                  key={step}
                  className="rounded-full bg-signalink/15 px-3 py-1.5"
                >
                  {i + 1}. {step}
                </span>
              ))}
            </div>
          </div>
          <div className="font-mono text-[10px] text-signalink/60">
            Academic prototype · Demo environment · Model simulation
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-sm space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight">Sign in</h2>
              <p className="mt-1 text-sm text-dim">
                Access the flood risk monitoring dashboard.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-faint">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-faint" />
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-faint">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-faint" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9 pr-9"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-faint hover:text-dim"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Button
                className="h-10 w-full bg-signal font-mono font-semibold text-signalink hover:bg-signal/90"
                onClick={() => handleLogin()}
              >
                Login <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                className="h-10 w-full font-mono"
                onClick={() => handleLogin()}
              >
                Sign Up
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-line" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-paper px-3 font-mono text-[10px] uppercase tracking-wider text-faint">
                  Or continue as demo user
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(roleInfo) as Role[]).map((role) => {
                const info = roleInfo[role];
                const Icon = info.icon;
                return (
                  <button
                    key={role}
                    onClick={() => handleLogin(role)}
                    className="group flex flex-col items-center gap-2 rounded-lg border border-line bg-panel p-3 text-center transition-colors hover:border-signal hover:bg-panel2"
                  >
                    <Icon className="size-5 text-signal transition-transform group-hover:scale-110" />
                    <span className="font-mono text-[10px] font-medium">{info.label}</span>
                  </button>
                );
              })}
            </div>

            <p className="text-center font-mono text-[10px] leading-relaxed text-faint">
              No real backend required. Demo accounts provide role-based access for the academic
              demonstration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
