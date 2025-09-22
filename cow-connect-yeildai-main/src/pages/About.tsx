import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Zap, Heart, Globe } from "lucide-react";

const About = () => {
  const teamMembers = [
    { name: "Dr. Priya Sharma", role: "Agricultural AI Specialist", expertise: "Machine Learning & Livestock" },
    { name: "Rajesh Kumar", role: "Full Stack Developer", expertise: "React & Backend Systems" },
    { name: "Dr. Vikram Singh", role: "Veterinary Consultant", expertise: "Indian Livestock Breeds" },
    { name: "Anita Patel", role: "UX Designer", expertise: "Farmer-Centric Design" }
  ];

  const achievements = [
    { icon: Award, title: "98% Accuracy", description: "In breed recognition across 50+ Indian livestock breeds" },
    { icon: Users, title: "10,000+ Farmers", description: "Successfully using our platform for breeding decisions" },
    { icon: Globe, title: "28 States", description: "Coverage across India with localized breed information" },
    { icon: Heart, title: "50+ Breeds", description: "Comprehensive database of Indian livestock breeds" }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            About Yield-AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering Indian farmers and livestock breeders through AI-driven breed recognition, 
            smart breeding recommendations, and comprehensive livestock management solutions.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <Target className="w-6 h-6 text-primary" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                To revolutionize livestock management in India by providing cutting-edge AI technology 
                that helps farmers make informed breeding decisions, improve productivity, and preserve 
                indigenous breed diversity.
              </p>
              <p className="text-muted-foreground">
                We believe in sustainable agriculture that combines traditional knowledge with modern 
                technology to create a prosperous future for Indian farmers.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <Zap className="w-6 h-6 text-accent" />
                <span>Our Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                To become India's leading platform for livestock breed recognition and breeding 
                optimization, supporting the livelihoods of millions of farmers and contributing 
                to food security.
              </p>
              <p className="text-muted-foreground">
                We envision a future where every farmer has access to intelligent breeding guidance, 
                helping them achieve optimal yields while preserving India's rich livestock heritage.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="text-center shadow-medium hover:shadow-strong transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center shadow-medium">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {member.expertise}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <Card className="shadow-medium mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Powered by Advanced AI Technology
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Deep Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Convolutional Neural Networks fine-tuned for Indian livestock breeds
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Cloud Computing</h3>
                <p className="text-sm text-muted-foreground">
                  Scalable infrastructure for real-time image processing and analysis
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-semibold mb-2">Farmer-First Design</h3>
                <p className="text-sm text-muted-foreground">
                  User-friendly interface designed for farmers with varying technical skills
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join the Agricultural Revolution
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to optimize your livestock breeding with AI-powered insights? 
            Start using Yield-AI today and see the difference intelligent farming can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary">
              Start Recognition
            </Button>
            <Button variant="outline" size="lg">
              Contact Our Team
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;