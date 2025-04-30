
import { useState } from "react";
import FeatureCard from "./FeatureCard";
import { ClockIcon, LineChart, BrainCircuit, Shield, Sparkles, BarChart4 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      title: "Save 70% Time",
      description: "Reduce grading time dramatically with AI that understands your rubric perfectly and works at machine speed.",
      icon: ClockIcon,
    },
    {
      title: "Adaptive AI",
      description: "Our AI learns your personal grading style and preferences, getting smarter with each paper you review.",
      icon: BrainCircuit,
    },
    {
      title: "95% Accuracy",
      description: "Achieve remarkable grading consistency with our AI that maintains your exact standards across all student papers.",
      icon: BarChart4,
    },
    {
      title: "Personalized Feedback",
      description: "Provide rich, constructive feedback that sounds exactly like you wrote it - because our AI mimics your tone and style.",
      icon: LineChart,
    },
    {
      title: "Privacy Focused",
      description: "Your data is encrypted and secure. Student papers never leave our secure processing environment.",
      icon: Shield,
    },
    {
      title: "Comprehensive Analytics",
      description: "Gain insights into student performance with detailed analytics that help identify common misconceptions and learning gaps.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Why Teachers Trust Us
          </div>
          <h2 className="text-3xl font-bold mb-4">Features Designed for Modern Educators</h2>
          <p className="text-muted-foreground text-lg">
            Our AI learns your unique grading style and applies it consistently across all student papers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="transition-all duration-300"
              onMouseEnter={() => setActiveFeature(index)}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                isActive={activeFeature === index}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto mb-8 bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Why Teachers Trust Our AI</h3>
            <p className="text-muted-foreground mb-4">
              Unlike basic AI tools, GradeAI truly understands your assessment philosophy. 
              It learns from your feedback patterns and adapts to your unique grading style, 
              providing remarkably accurate assessments that feel like they came directly from you.
            </p>
            <Button asChild>
              <a href="#workflow">See How It Works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
