import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Technology from "@/components/Technology";
import Whitepaper from "@/components/Whitepaper";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import { SparklesCore } from "@/components/ui/sparkles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Sparkles Background for entire site except footer */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#00D9FF"
        />
      </div>
      
      {/* Content with relative z-index */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Tokenomics />
        <Roadmap />
        <Technology />
        <Whitepaper />
        <Community />
      </div>
      
      {/* Footer without sparkle background */}
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
