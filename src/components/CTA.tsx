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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl overflow-hidden shadow-xl relative">
          <div className="absolute inset-0 bg-grid-white/5 bg-[length:20px_20px]"></div>
          <div className="px-6 py-12 md:p-12 text-white relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                AI That Understands Your Teaching Style
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to transform your grading process?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of educators who are saving time and providing better feedback with GradeAI that learns and adapts to your unique teaching philosophy.
              </p>
              
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-left text-sm md:text-base">AI that continuously learns from your feedback style</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-left text-sm md:text-base">95% accuracy compared to manual grading</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-left text-sm md:text-base">Save up to 70% of your grading time</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-left text-sm md:text-base">Personalized feedback that sounds like you</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 group"
                  onClick={handleStartTrial}
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-white border-white hover:bg-white/10"
                  onClick={handleContactSales}
                >
                  Contact Sales
                </Button>
              </div>
              <p className="mt-6 text-sm opacity-80">
                No credit card required. 14-day free trial.
              </p>
              
              <div className="mt-10 pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Style Adaptation</h3>
                  <p className="text-sm opacity-90">AI that learns and matches your personal grading style</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                  <p className="text-sm opacity-90">Improves with each paper you review and edit</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Teacher Control</h3>
                  <p className="text-sm opacity-90">You always have final say on all assessments</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
