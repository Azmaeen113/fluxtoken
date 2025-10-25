import { Rocket, Zap, TrendingUp, Network, Globe, Star, CheckCircle2, Clock, Circle } from "lucide-react";

const Roadmap = () => {
  const phases = [
    {
      quarter: "2025–2026",
      title: "Foundation",
      icon: Rocket,
      status: "in-progress",
      milestones: [
        { text: "Branding & Visual Identity", done: true },
        { text: "Website Launch", done: true },
        { text: "MVP Development", done: false },
        { text: "Community Building", done: false },
        { text: "Whitepaper v1.0 Release", done: false },
        { text: "Initial Network Testing", done: false },
        { text: "Provider Onboarding System", done: false },
        { text: "Beta Testing Program", done: false },
      ],
    },
    {
      quarter: "2026–2027",
      title: "Compute Layer",
      icon: Zap,
      status: "upcoming",
      milestones: [
        { text: "Proof-of-Compute Protocol Launch", done: false },
        { text: "Node Network Deployment", done: false },
        { text: "Provider Dashboard Release", done: false },
        { text: "Compute Marketplace Beta", done: false },
        { text: "API & SDK Development", done: false },
        { text: "Smart Contract Integration", done: false },
        { text: "Kaspa BlockDAG Integration", done: false },
      ],
    },
    {
      quarter: "2028+",
      title: "Expansion",
      icon: TrendingUp,
      status: "future",
      milestones: [
        { text: "Strategic Partnerships", done: false },
        { text: "Enterprise Client Onboarding", done: false },
        { text: "Marketplace Full Launch", done: false },
        { text: "Cross-chain Integration", done: false },
        { text: "Advanced Compute Features", done: false },
        { text: "Global Network Expansion", done: false },
        { text: "Mainnet Optimization", done: false },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "secondary";
      case "in-progress":
        return "accent";
      case "upcoming":
        return "primary";
      default:
        return "premium";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return CheckCircle2;
      case "in-progress":
        return Clock;
      default:
        return Circle;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "COMPLETED";
      case "in-progress":
        return "IN PROGRESS";
      case "upcoming":
        return "UPCOMING";
      default:
        return "FUTURE";
    }
  };

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-circuit opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground">Building the Future of Decentralized Compute</p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {phases.map((phase, index) => {
              const StatusIcon = getStatusIcon(phase.status);
              const PhaseIcon = phase.icon;
              const statusColor = getStatusColor(phase.status);

              return (
                <div
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Line */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-secondary opacity-30 hidden md:block"></div>
                  )}

                  <div className="glass-card p-6 md:p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon Section */}
                      <div className="flex md:flex-col items-center md:items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br from-${statusColor} to-${statusColor}/50 rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <PhaseIcon className="w-6 h-6 text-background" />
                        </div>
                        <div className={`hidden md:flex items-center gap-2 text-${statusColor} text-sm font-bold`}>
                          <StatusIcon size={16} />
                          <span>{getStatusLabel(phase.status)}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">{phase.quarter}</div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{phase.title}</h3>
                          </div>
                          <div className={`md:hidden flex items-center gap-2 text-${statusColor} text-xs font-bold`}>
                            <StatusIcon size={14} />
                            <span>{getStatusLabel(phase.status)}</span>
                          </div>
                        </div>

                        {/* Milestones Grid */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          {phase.milestones.map((milestone, mIndex) => (
                            <div
                              key={mIndex}
                              className="flex items-center gap-2 text-sm"
                            >
                              {milestone.done ? (
                                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                              ) : (
                                <Circle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                              )}
                              <span className={milestone.done ? "text-foreground" : "text-muted-foreground"}>
                                {milestone.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
