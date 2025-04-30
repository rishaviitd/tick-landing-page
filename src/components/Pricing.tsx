import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

/**
 * Pricing component with plans and placeholder buttons
 * that can be connected to your trial signup or contact system
 */
const Pricing = () => {
  // Functions that can be implemented to connect to your systems
  const handleBasicTrialClick = () => {
    console.log("Basic Plan Trial button clicked - implement your trial signup logic here");
    // Add your trial signup logic for Basic plan
  };

  const handleProTrialClick = () => {
    console.log("Pro Plan Trial button clicked - implement your trial signup logic here");
    // Add your trial signup logic for Pro plan
  };

  const handleContactSales = () => {
    console.log("Contact Sales button clicked - implement your contact logic here");
    // Add your contact form or redirect logic for Enterprise plan
  };

  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-xl shadow-md border overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-muted-foreground mb-4">For individual teachers</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <Button 
                className="w-full"
                onClick={handleBasicTrialClick}
              >
                Start Free Trial
              </Button>
            </div>
            <div className="border-t p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="ml-2">Up to 200 papers/month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="ml-2">Basic AI feedback</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="ml-2">Email support</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-white rounded-xl shadow-xl border border-primary/20 overflow-hidden relative">
            <div className="absolute top-0 inset-x-0 bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
              Most Popular
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-muted-foreground mb-4">For educators with multiple classes</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$24.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <Button 
                className="w-full bg-primary"
                onClick={handleProTrialClick}
              >
                Start Free Trial
              </Button>
            </div>
            <div className="border-t p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="ml-2">Up to 500 papers/month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="ml-2">Detailed AI feedback</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="ml-2">Student sharing portal</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="ml-2">Priority support</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl shadow-md border overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-4">For schools and institutions</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleContactSales}
              >
                Contact Sales
              </Button>
            </div>
            <div className="border-t p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="ml-2">Unlimited papers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="ml-2">Advanced AI feedback</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="ml-2">Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="ml-2">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="ml-2">SSO Authentication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
