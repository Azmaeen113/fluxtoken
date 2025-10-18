import { Coins, Lock, Megaphone, Droplet, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Tokenomics = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0xB846d28185F1D36D9aAB4f1E33BC0FD060bc1Daf";

  const allocations = [
    {
      icon: Droplet,
      title: "DEX Liquidity",
      amount: "50M",
      percentage: 50,
      description: "Ensuring deep liquidity and stable trading",
      color: "primary",
    },
    {
      icon: Coins,
      title: "Presale",
      amount: "30M",
      percentage: 30,
      description: "Early supporter allocation and community building",
      color: "secondary",
      badge: "LIVE",
    },
    {
      icon: Megaphone,
      title: "Marketing",
      amount: "10M",
      percentage: 10,
      description: "Global adoption and ecosystem growth",
      color: "premium",
    },
    {
      icon: Lock,
      title: "Founder",
      amount: "10M",
      percentage: 10,
      description: "Team allocation with vesting schedule",
      color: "accent",
    },
  ];

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    toast.success("Contract address copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tokenomics" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-circuit opacity-20"></div>
      <div className="absolute inset-0" style={{ background: "var(--gradient-ambient)" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Tokenomics</span>
          </h2>
          <p className="text-xl text-muted-foreground">Powering the Future</p>
        </div>

        {/* Total Supply Display */}
        <div className="max-w-md mx-auto mb-16 text-center animate-scale-in">
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-gradient-shift"></div>
            <div className="relative z-10">
              <div className="text-6xl md:text-7xl font-bold text-gradient mb-2">100M</div>
              <div className="text-muted-foreground text-lg">$FLUX Total Supply</div>
            </div>
          </div>
        </div>

        {/* Allocation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {allocations.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-${item.color}/20 rounded-xl flex items-center justify-center`}>
                  <item.icon className={`w-6 h-6 text-${item.color}`} />
                </div>
                {item.badge && (
                  <span className="bg-secondary text-background text-xs font-bold px-2 py-1 rounded">
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
              <div className="text-3xl font-bold text-gradient mb-2">{item.amount}</div>
              <div className="text-sm text-muted-foreground mb-4">{item.percentage}%</div>

              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2 mb-4 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-${item.color} to-${item.color} animate-scale-in`}
                  style={{ width: `${item.percentage}%`, animationDelay: `${index * 0.1 + 0.5}s` }}
                ></div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Contract Address */}
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                <Coins className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Smart Contract</h3>
            </div>

            <div className="bg-background/50 rounded-xl p-4 mb-4">
              <p className="text-xs text-muted-foreground mb-2">BSC Testnet Contract Address</p>
              <p className="text-sm md:text-base font-mono text-foreground break-all">
                {contractAddress}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={copyAddress}
                className="flex-1 bg-primary hover:bg-primary/90 text-background font-semibold"
              >
                {copied ? (
                  <>
                    <Check className="mr-2" size={16} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2" size={16} />
                    Copy Address
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a
                  href={`https://testnet.bscscan.com/address/${contractAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on BscScan
                </a>
              </Button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground">Verified & Audited</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
