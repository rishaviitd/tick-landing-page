import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

/**
 * Call to Action component
 * Contains placeholders for "Start Free Trial" and "Contact Sales" buttons
 * that can be connected to your authentication or contact system
 */
const CTA = () => {
  // Functions that can be implemented to connect to your systems
  const handleStartTrial = (e) => {
    e.preventDefault();
    console.log("Start Trial button clicked - implement your trial signup logic here");
    // Add your trial signup logic here
  };

  const handleContactSales = (e) => {
    e.preventDefault();
    console.log("Contact Sales button clicked - implement your contact logic here");
    // Add your contact form or redirect logic here
  };

  return (
    <section className="py-20" id="cta">
      <div className="w-full bg-[#58CC02]">
        <div className="absolute inset-0 bg-grid-white/5 bg-[length:20px_20px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="px-6 py-12 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Focus on Teaching, Not Grading
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Grade smarter, teach better
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Turn handwritten work into actionable insights. tick AI automates the mundane aspects of grading while adapting to your teaching style, leaving you more time to do what you do best — teach.
              </p>
              
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0" />
                  <p className="text-left text-base md:text-lg">Automatically digitize and score handwritten work</p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0" />
                  <p className="text-left text-base md:text-lg">Create standardized rubrics that evolve with your teaching</p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0" />
                  <p className="text-left text-base md:text-lg">Provide personalized, step-by-step feedback at scale</p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0" />
                  <p className="text-left text-base md:text-lg">Identify common misconceptions for targeted instruction</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-[#58CC02] hover:bg-white/90 group px-8 py-6 text-lg"
                  onClick={handleStartTrial}
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg"
                  onClick={handleContactSales}
                >
                  Contact Sales
                </Button>
              </div>
              <p className="mt-6 text-sm opacity-80">
                No credit card required. 14-day free trial.
              </p>
              
              <div className="mt-12 pt-10 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">Reduce Workload</h3>
                  <p className="text-sm opacity-90">Save 70% of your grading time without compromising quality</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">Understand Patterns</h3>
                  <p className="text-sm opacity-90">Reveal common mistake patterns for targeted remediation</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">Human-AI Partnership</h3>
                  <p className="text-sm opacity-90">You maintain control; the AI handles the mechanical work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
