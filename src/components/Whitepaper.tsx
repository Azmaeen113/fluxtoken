import { FileText, Download, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Whitepaper = () => {
  const topics = [
    "Technical architecture",
    "Tokenomics deep dive",
    "IoT integration roadmap",
    "Energy marketplace mechanics",
    "Governance model",
    "Security measures",
  ];

  return (
    <section id="whitepaper" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-circuit opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Dive Into the Details</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive whitepaper to understand how we're revolutionizing the
            intersection of IoT, renewable energy, and blockchain technology
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-3xl hover:scale-[1.02] transition-all duration-300 animate-scale-in">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Icon/Visual */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center animate-pulse-glow">
                  <FileText className="w-16 h-16 text-background" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 text-foreground">FLUX Whitepaper v1.0</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A comprehensive guide to the FLUX ecosystem, covering our vision, technology,
                  tokenomics, and roadmap for creating a sustainable, decentralized future.
                </p>

                {/* Topics Covered */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-muted-foreground mb-3">KEY TOPICS COVERED:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {topics.map((topic, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary text-background font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all"
                  >
                    <Download className="mr-2" size={18} />
                    Download Whitepaper
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary/10 font-bold"
                  >
                    <ExternalLink className="mr-2" size={18} />
                    View Online
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">42</div>
                <div className="text-xs text-muted-foreground">Pages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">Jan 2025</div>
                <div className="text-xs text-muted-foreground">Last Updated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">3</div>
                <div className="text-xs text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">15K+</div>
                <div className="text-xs text-muted-foreground">Downloads</div>
              </div>
            </div>
          </div>

          {/* Technical Documentation Link */}
          <div className="mt-6 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors group"
            >
              <BookOpen size={18} />
              <span className="font-medium">View Technical Documentation</span>
              <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whitepaper;
