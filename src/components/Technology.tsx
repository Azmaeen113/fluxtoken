import { Database, Cpu, Zap, Shield } from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      icon: Database,
      title: "Kaspa BlockDAG",
      features: [
        "1-second block times",
        "Parallel block processing",
        "Infinite scalability potential",
        "Proven security model",
      ],
      gradient: "from-primary to-purple-500",
    },
    {
      icon: Cpu,
      title: "Proof-of-Compute",
      features: [
        "Fair reward distribution",
        "Real-time verification",
        "Hardware-agnostic protocol",
        "Energy-efficient validation",
      ],
      gradient: "from-purple-500 to-secondary",
    },
    {
      icon: Zap,
      title: "Global Network",
      features: [
        "Distributed architecture",
        "Low-latency routing",
        "Geographic redundancy",
        "99.9% uptime target",
      ],
      gradient: "from-secondary to-accent",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      features: [
        "End-to-end encryption",
        "Smart contract audits",
        "Multi-signature controls",
        "Regular security updates",
      ],
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="technology" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-circuit opacity-20"></div>
      <div className="absolute inset-0" style={{ background: "var(--gradient-ambient)" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground">Built on Kaspa's Revolutionary BlockDAG</p>
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl group hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${tech.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}>
                <tech.icon className="w-8 h-8 text-background" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-foreground">{tech.title}</h3>

              {/* Features List */}
              <ul className="space-y-2">
                {tech.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technical Specs Section */}
        <div className="max-w-4xl mx-auto mt-16 glass-card p-8 rounded-2xl animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Technical Specifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">~1 sec</div>
              <div className="text-sm text-muted-foreground">Block Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">KCT</div>
              <div className="text-sm text-muted-foreground">Token Standard</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Network Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
