import { Users, MessageCircle, Twitter, Send, Globe, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Community = () => {
  const [email, setEmail] = useState("");

  const socials = [
    {
      name: "Telegram",
      icon: Send,
      members: "12.5K",
      description: "Join our community of innovators",
      status: "1,234 Online",
      gradient: "from-primary to-purple-500",
      link: "#",
    },
    {
      name: "Twitter/X",
      icon: Twitter,
      members: "8.3K",
      description: "Stay updated with latest news",
      status: "Active Daily",
      gradient: "from-purple-500 to-secondary",
      link: "#",
    },
    {
      name: "Discord",
      icon: MessageCircle,
      members: "5.7K",
      description: "Connect with the team and community",
      status: "24/7 Active",
      gradient: "from-secondary to-accent",
      link: "#",
    },
    {
      name: "Medium",
      icon: Globe,
      members: "3.2K",
      description: "Read our latest insights",
      status: "Weekly Updates",
      gradient: "from-accent to-primary",
      link: "#",
    },
  ];

  const stats = [
    { label: "Community Members", value: "25K+" },
    { label: "Daily Active Users", value: "3.5K" },
    { label: "Countries", value: "120+" },
    { label: "Growth Rate", value: "+45%" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
    }
  };

  return (
    <section id="community" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-circuit opacity-20"></div>
      <div className="absolute inset-0" style={{ background: "var(--gradient-ambient)" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Join the Revolution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of the movement toward a sustainable, connected future
          </p>
        </div>

        {/* Social Platform Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
                <social.icon className="w-7 h-7 text-background" />
              </div>

              <h3 className="text-xl font-bold mb-2 text-foreground">{social.name}</h3>
              <div className="text-2xl font-bold text-gradient mb-2">{social.members}</div>
              <p className="text-sm text-muted-foreground mb-3">{social.description}</p>

              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">{social.status}</span>
              </div>

              <Button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary text-background font-semibold hover:shadow-lg hover:shadow-primary/50">
                Join {social.name}
              </Button>
            </a>
          ))}
        </div>

        {/* Community Stats */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="glass-card p-8 rounded-2xl animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Global Community</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto animate-scale-in">
          <div className="glass-card p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-background" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest updates, insights, and exclusive announcements
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background border-border focus:border-primary"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary text-background font-bold hover:shadow-lg hover:shadow-primary/50"
              >
                Subscribe
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              Join 15,000+ subscribers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
