import { ArrowDown, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import kascomputeLogo from "/logo 4.png";

const Hero = () => {
  const stats = [
    { icon: TrendingUp, label: "Market Cap", value: "$5.2M" },
    { icon: Zap, label: "Total Supply", value: "10B KCT" },
    { icon: Users, label: "Active Providers", value: "12.5K" },
    { icon: TrendingUp, label: "Network Uptime", value: "99.9%" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Sparkles Background */}
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticles-hero"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#00D9FF"
        />
      </div>
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-circuit opacity-20"></div>
      <div className="absolute inset-0" style={{ background: "var(--gradient-ambient)" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={kascomputeLogo}
              alt="KASCompute Logo"
              className="w-48 h-48 md:w-56 md:h-56 animate-float drop-shadow-2xl"
            />
          </div>

          {/* Above Headline */}
          <div className="text-lg md:text-xl text-primary font-medium mb-4">
            Decentralized Compute Power — Powered by Kaspa
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-gradient">The Future of</span>
            <br />
            <span className="text-foreground">Decentralized Computing</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Turning idle GPUs & CPUs into decentralized compute power.
          </p>

          {/* Token Display */}
          <div className="inline-block glass-card px-8 py-4 rounded-2xl animate-pulse-glow">
            <div className="text-4xl md:text-5xl font-bold text-gradient">$KCT</div>
            <div className="text-sm text-muted-foreground mt-1">Building Tomorrow</div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-background font-bold text-lg px-8 py-6 hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
            >
              <Zap className="mr-2" size={20} />
              Read Whitepaper
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6"
            >
              Join Telegram
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6"
            >
              Become a Provider
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-xl hover:scale-105 transition-transform"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <ArrowDown className="w-8 h-8 text-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
