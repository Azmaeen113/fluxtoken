import { Twitter, Send, MessageCircle, Globe, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import fluxLogo from "@/assets/flux-logo.png";

const Footer = () => {
  const contractAddress = "0xB846d28185F1D36D9aAB4f1E33BC0FD060bc1Daf";

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    toast.success("Contract address copied!");
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Technology", href: "#technology" },
    { label: "Whitepaper", href: "#whitepaper" },
  ];

  const resources = [
    { label: "Documentation", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Support", href: "#" },
    { label: "Media Kit", href: "#" },
  ];

  const legal = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ];

  const socials = [
    { icon: Send, href: "#", label: "Telegram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "#", label: "Discord" },
    { icon: Globe, href: "#", label: "Medium" },
  ];

  return (
    <footer className="relative overflow-hidden bg-background border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-circuit opacity-10"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={fluxLogo} alt="FLUX Token" className="h-10 w-10" />
              <span className="text-2xl font-bold text-gradient">FLUX</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Building a Sustainable Future through blockchain, IoT, and renewable energy innovation.
            </p>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 mb-6">
              {legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <a
                href="mailto:contact@flux.io"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={14} />
                contact@flux.io
              </a>
            </div>
          </div>
        </div>

        {/* Contract Address Section */}
        <div className="glass-card p-6 rounded-xl mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-xs text-muted-foreground mb-1">BSC Testnet Contract Address</p>
              <p className="text-sm font-mono text-foreground break-all">{contractAddress}</p>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={copyAddress}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Copy
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a
                  href={`https://testnet.bscscan.com/address/${contractAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View <ExternalLink size={14} className="ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>© 2025 FLUX Token. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span>Built on BSC</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span>Powered by Blockchain Technology</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              <strong>Important Disclaimer:</strong> Cryptocurrency investments carry risk. Please do
              your own research (DYOR). This is a test contract for demonstration purposes. Always verify
              contract addresses and be cautious of scams.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
