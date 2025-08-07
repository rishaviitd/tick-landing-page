import { useState } from "react";
import FeatureCard from "./FeatureCard";
import {
  ClockIcon,
  LineChart,
  BrainCircuit,
  Shield,
  Sparkles,
  BarChart4,
  FileDigit,
  Pencil,
  Users,
  CheckSquare,
  MessageSquareText,
  BrainCog
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Digitize Handwritten Work",
      description:
        "Convert handwritten sheets into digital data, supporting rich free-response exams at scale — no special scan forms needed.",
      icon: FileDigit,
    },
    {
      title: "Holistic Evaluation",
      description:
        "Grades entire reasoning process, not just final answers. Recognizes multiple valid solution methods beyond template matching.",
      icon: BrainCog,
    },
    {
      title: "Auto-Generated Rubrics",
      description:
        "Create and share standardized rubrics for consistent scoring, better feedback, and step-by-step grade breakdowns.",
      icon: CheckSquare,
    },
    {
      title: "Detailed Feedback",
      description:
        "Deliver high-quality comments that help students correct actual mistakes with personalized, step-by-step guidance.",
      icon: MessageSquareText,
    },
    {
      title: "Support Large Classes",
      description:
        "Empower large classes (100–1000 students) to use open-ended questions rather than multiple-choice, without overwhelming instructors.",
      icon: Users,
    },
    {
      title: "Adaptive Learning",
      description:
        "AI suggests rubric enhancements when new error patterns emerge. Instructors confirm/adjust, and the AI continuously improves.",
      icon: BrainCircuit,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/20" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Complete Grading Workflow
          </div>
          <h2 className="section-title">
            Your Supercharged Teaching Assistant
          </h2>
          <p className="section-subtitle">
            One that never tires of marking the same step-by-step solution for the 100th time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="transition-all duration-300 transform hover:-translate-y-1"
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
          <div className="max-w-2xl mx-auto mb-8 bg-white modern-shadow p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Human-in-the-Loop Trust
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              tick AI acts as an intelligent partner, not a replacement. You maintain control while the AI handles the mechanical aspects of grading. Instructors oversee uncertain cases, and the AI learns from every correction, continuously improving to match your exact standards.
            </p>
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8"
            >
              <a href="#workflow">See How It Works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
