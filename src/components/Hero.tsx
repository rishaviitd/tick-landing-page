import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Hero component with call-to-action buttons
 * Contains placeholder buttons for "Try for Free" and "Watch Demo"
 * that can be connected to your trial and demo systems
 */
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    setIsVisible(true);
  }, []);

  // Functions that can be implemented to connect to your systems
  const handleTryForFree = () => {
    console.log("Try for Free button clicked - implement your trial signup logic here");
    // Add your trial signup logic here
  };

  const handleWatchDemo = () => {
    console.log("Watch Demo button clicked - implement your demo logic here");
    // Add your demo video or redirect logic here
    
    // Example of scrolling to a demo section
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span>Grade papers with </span>
              <span className="gradient-text">AI-powered precision</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Save countless hours by automating paper grading with AI that adapts to <span className="font-semibold text-foreground">your unique grading style</span>.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-2 transition-all duration-300 hover:translate-x-1">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground"><span className="font-semibold">95% accuracy</span> compared to manual grading</p>
              </div>
              <div className="flex items-start space-x-2 transition-all duration-300 hover:translate-x-1">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground"><span className="font-semibold">Adaptive learning</span> that mirrors your feedback style</p>
              </div>
              <div className="flex items-start space-x-2 transition-all duration-300 hover:translate-x-1">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground"><span className="font-semibold">Trusted by 5,000+</span> educators worldwide</p>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-base group"
                onClick={handleTryForFree}
              >
                Try for Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base"
                onClick={handleWatchDemo}
              >
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className={`order-1 lg:order-2 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-2xl p-1">
              <div className="bg-background rounded-xl overflow-hidden shadow-xl relative">
                <img 
                  src="/placeholder.svg" 
                  alt="GradeAI Dashboard" 
                  className="w-full h-auto"
                  style={{ minHeight: "300px", objectFit: "cover" }}
                />
                
                {/* Interactive overlay elements */}
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1.5 rounded-full text-sm backdrop-blur-sm animate-pulse">
                  AI analyzing paper...
                </div>
                
                <div className="absolute top-4 left-4 bg-green-500/90 text-white px-3 py-1.5 rounded-full text-sm backdrop-blur-sm animate-fade-in">
                  97% accurate
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            
            {/* Floating badges */}
            <div className="absolute -right-12 top-1/3 bg-white shadow-lg rounded-lg px-3 py-2 text-sm font-medium animate-float">
              Personalized feedback
            </div>
            <div className="absolute -left-10 bottom-1/4 bg-white shadow-lg rounded-lg px-3 py-2 text-sm font-medium animate-float" style={{ animationDelay: "1.5s" }}>
              Time saved: 70%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
