import { Globe, Network, Leaf } from "lucide-react";

const About = () => {
  const pillars = [
    {
      icon: Network,
      title: "Blockchain Foundation",
      description: "Secure, transparent, decentralized infrastructure powering the future of energy",
      gradient: "from-primary to-purple-500",
    },
    {
      icon: Globe,
      title: "IoT Integration",
      description: "Smart devices, real-time data, and automated systems creating an interconnected world",
      gradient: "from-purple-500 to-secondary",
    },
    {
      icon: Leaf,
      title: "Clean Energy",
      description: "Sustainable power, carbon reduction, and building a greener future for all",
      gradient: "from-secondary to-primary",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-circuit opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Pioneering the Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The intersection of blockchain, IoT, and renewable energy
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              FLUX is pioneering the intersection of blockchain technology, IoT infrastructure,
              and renewable energy. Our mission is to create a sustainable, interconnected world
              where technology serves both humanity and the planet.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-premium rounded-full flex items-center justify-center mb-6">
              <Network className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              Building a decentralized ecosystem that empowers communities through sustainable
              energy solutions, smart infrastructure, and transparent blockchain technology,
              creating lasting positive impact for generations to come.
            </p>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built on Three Pillars
          </h3>
          <p className="text-muted-foreground">Core technologies powering the FLUX ecosystem</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl group hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}>
                <pillar.icon className="w-8 h-8 text-background" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">{pillar.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
