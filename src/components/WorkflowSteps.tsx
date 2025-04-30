
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
      title: "1. Create Your Class",
      description: "Upload your class list or attendance sheet. We instantly build your student database.",
    },
    {
      icon: Step2Icon,
      title: "2. Set Up Assignment",
      description: "Upload a question paper. AI extracts questions and helps you upload a rubric and marking scheme.",
    },
    {
      icon: Step3Icon,
      title: "3. Submit Student Work",
      description: "Upload answer sheets and our AI auto-grades each submission using your rubric and feedback style.",
    },
    {
      icon: Step4Icon,
      title: "4. Share Results & Analysis",
      description: "Share detailed feedback per question and comprehensive analysis reports with students in text format.",
    },
  ];

  return (
    <section className="py-20 bg-muted/50" id="workflow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Simple Workflow
          </div>
          <h2 className="text-3xl font-bold mb-4">How GradeAI Works</h2>
          <p className="text-muted-foreground text-lg">
            Our AI learns your grading style and preferences to provide feedback that feels like it came directly from you.
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
          <h3 className="text-xl font-semibold mb-4 text-center">AI That Adapts to Your Style</h3>
          <p className="text-muted-foreground mb-4">
            Our advanced machine learning algorithms analyze your previous grading patterns and feedback style, 
            allowing our AI to mimic your approach. The more you use GradeAI, the better it gets at replicating 
            your unique assessment style.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">95% Accuracy Rate</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Continuous Learning</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Style Adaptation</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Consistent Feedback</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;
