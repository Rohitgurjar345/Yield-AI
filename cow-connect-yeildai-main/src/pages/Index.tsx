import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scan, Info, MapPin, MessageCircle, Zap, Award, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-livestock.jpg";

const Index = () => {
  const features = [
    {
      icon: Scan,
      title: "AI Breed Recognition",
      description: "Upload livestock images for instant breed identification with 98% accuracy",
      link: "/recognition"
    },
    {
      icon: Info,
      title: "Breed Information",
      description: "Comprehensive database of Indian livestock breeds with care guidelines",
      link: "/breeds"
    },
    {
      icon: MapPin,
      title: "Find Breeders",
      description: "Locate verified breeders in your area with quality breeding stock",
      link: "/breeders"
    },
    {
      icon: MessageCircle,
      title: "AI Assistant",
      description: "Get expert advice on breeding, care, and livestock management",
      link: "/chat"
    }
  ];

  const stats = [
    { number: "50+", label: "Livestock Breeds" },
    { number: "98%", label: "Recognition Accuracy" },
    { number: "10K+", label: "Active Farmers" },
    { number: "28", label: "States Covered" }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Indian livestock in agricultural setting" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Smart Livestock Breeding with{" "}
            <span className="text-accent">Yield-AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Revolutionize your livestock farming with AI-powered breed recognition, 
            intelligent mating recommendations, and expert guidance for optimal yields.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/recognition">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-strong">
                <Scan className="w-5 h-5 mr-2" />
                Start Recognition
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Livestock Management Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to make informed breeding decisions and optimize your livestock yields
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} to={feature.link}>
                  <Card className="shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-section bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Yield-AI Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, intelligent, and farmer-friendly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Upload Image</h3>
              <p className="text-muted-foreground">
                Simply take a photo of your livestock using your smartphone or upload an existing image
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our advanced AI instantly identifies the breed with detailed characteristics and care information
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Recommendations</h3>
              <p className="text-muted-foreground">
                Get personalized breeding recommendations and connect with nearby breeders for optimal results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-section bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Optimize Your Livestock Breeding?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of farmers already using Yield-AI to improve their livestock yields 
            and make smarter breeding decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/recognition">
              <Button size="lg" variant="secondary" className="shadow-strong">
                <Scan className="w-5 h-5 mr-2" />
                Start Free Recognition
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
