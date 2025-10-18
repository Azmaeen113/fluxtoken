import { Rocket, Zap, TrendingUp, Network, Globe, Star, CheckCircle2, Clock, Circle } from "lucide-react";

const Roadmap = () => {
  const phases = [
    {
      quarter: "Q1 2025",
      title: "Foundation",
      icon: Rocket,
      status: "completed",
      milestones: [
        { text: "Project conceptualization", done: true },
        { text: "Team formation", done: true },
        { text: "Whitepaper v1.0", done: true },
        { text: "Smart contract development", done: true },
        { text: "Website launch", done: true },
        { text: "Social media channels", done: true },
      ],
    },
    {
      quarter: "Q2 2025",
      title: "Launch",
      icon: Zap,
      status: "in-progress",
      milestones: [
        { text: "Smart contract audit", done: false },
        { text: "Presale launch", done: false },
        { text: "Community building campaigns", done: false },
        { text: "Partnership announcements", done: false },
        { text: "Testnet deployment", done: true },
        { text: "Marketing blitz", done: false },
      ],
    },
    {
      quarter: "Q3 2025",
      title: "Growth",
      icon: TrendingUp,
      status: "upcoming",
      milestones: [
        { text: "DEX listing (PancakeSwap)", done: false },
        { text: "CoinMarketCap & CoinGecko listing", done: false },
        { text: "First IoT device integration", done: false },
        { text: "Community governance launch", done: false },
        { text: "10,000 holder milestone", done: false },
        { text: "Strategic partnerships", done: false },
      ],
    },
    {
      quarter: "Q4 2025",
      title: "Expansion",
      icon: Network,
      status: "upcoming",
      milestones: [
        { text: "CEX listings", done: false },
        { text: "IoT device marketplace beta", done: false },
        { text: "Energy credit trading platform", done: false },
        { text: "Mobile app launch", done: false },
        { text: "Cross-chain bridge development", done: false },
        { text: "Global marketing campaign", done: false },
      ],
    },
    {
      quarter: "Q1 2026",
      title: "Ecosystem",
      icon: Globe,
      status: "future",
      milestones: [
        { text: "Full IoT marketplace launch", done: false },
        { text: "Renewable energy marketplace", done: false },
        { text: "DAO implementation", done: false },
        { text: "Hardware wallet integration", done: false },
        { text: "Enterprise partnerships", done: false },
        { text: "100,000 holder milestone", done: false },
      ],
    },
    {
      quarter: "Q2 2026+",
      title: "Revolution",
      icon: Star,
      status: "future",
      milestones: [
        { text: "Global IoT network launch", done: false },
        { text: "Major exchange listings", done: false },
        { text: "Real-world energy grid integration", done: false },
        { text: "Mainstream adoption push", done: false },
        { text: "Carbon credit marketplace", done: false },
        { text: "Becoming industry standard", done: false },
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
          <p className="text-xl text-muted-foreground">Building Tomorrow, Today</p>
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
