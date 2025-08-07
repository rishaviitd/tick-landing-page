import { Step1Icon, Step2Icon, Step3Icon, Step4Icon } from "./StepIcons";
import { useState, useEffect, useRef } from "react";

const WorkflowSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const startAutomation = () => {
    intervalRef.current = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 3000);
  };
  
  useEffect(() => {
    startAutomation();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  const steps = [
    {
      icon: Step1Icon,
      title: "1. Digitize Submissions",
      description: "Upload handwritten student work through our scanner app or upload images. No special forms needed.",
    },
    {
      icon: Step2Icon,
      title: "2. Define Your Rubric",
      description: "Create or select a customizable rubric. AI helps generate standards-aligned criteria for your assignment.",
    },
    {
      icon: Step3Icon,
      title: "3. AI-Powered Grading",
      description: "The AI evaluates complete reasoning processes, not just final answers, providing step-by-step feedback.",
    },
    {
      icon: Step4Icon,
      title: "4. Review & Insights",
      description: "Approve or adjust AI-suggested grades, and gain insights into common misconceptions across your class.",
    },
  ];

  return (
    <section className="py-20 bg-muted/50" id="workflow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Streamlined Process
          </div>
          <h2 className="text-3xl font-bold mb-4">How tick AI Works</h2>
          <p className="text-muted-foreground text-lg">
            From handwritten work to detailed feedback in four simple steps — giving you back valuable teaching time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-xl shadow-md text-center transition-all duration-500 ${
                activeStep === index ? 'ring-2 ring-primary/40 shadow-lg transform -translate-y-1' : ''
              }`}
              onMouseEnter={() => {
                if (intervalRef.current) {
                  clearInterval(intervalRef.current);
                }
                setActiveStep(index);
              }}
              onMouseLeave={() => {
                startAutomation();
              }}
            >
              <div className="mx-auto w-16 h-16 mb-4 relative">
                <div className={`absolute inset-0 ${
                  activeStep === index ? 'bg-primary/20' : 'bg-primary/10'
                } rounded-full transition-colors duration-300`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <step.icon className={`h-8 w-8 ${
                    activeStep === index ? 'text-primary' : 'text-primary/80'
                  } transition-colors duration-300`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {activeStep === index && (
                <div className="h-1 w-20 bg-primary/60 mx-auto mt-4 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-center">Adaptive AI That Grows With You</h3>
          <p className="text-muted-foreground mb-4">
            Our AI continuously improves by learning from your corrections and adjustments. The system suggests rubric enhancements when it detects new error patterns, allowing you to standardize grading while maintaining your personal teaching approach.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Rich Free-Response</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Multiple Solution Paths</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Comprehensive Analytics</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">90% Time Saved</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;
