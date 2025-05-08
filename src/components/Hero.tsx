import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, PlayCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";

/**
 * Hero component with call-to-action buttons
 * Contains buttons for "Try for Free" (navigates to login) and "Watch Demo" (shows dialog)
 */
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animation after component mount
    setIsVisible(true);
  }, []);

  // Navigate to login page
  const handleTryForFree = () => {
    navigate("/login");
  };

  // Open watch demo dialog
  const handleWatchDemo = () => {
    setDialogOpen(true);
  };

  return (
    <section className="pt-36 pb-20 md:pt-48 md:pb-32 min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-[#58CC02]/10 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          <span className="block">Grade papers with </span>
            <span className="text-[#58CC02]">AI-powered precision</span>
            </h1>
          
          <p className="mt-6 text-xl text-muted-foreground mx-auto max-w-2xl">
              Your AI-powered Grading assistant that digitizes, grades, and delivers detailed feedback<span className="font-semibold text-foreground"> — saving you countless hours</span>.
            </p>
            
          <div className="mt-12 flex flex-col items-center space-y-5">
            <div className="flex items-center space-x-2 transition-all duration-300 hover:translate-x-1">
              <CheckCircle2 className="h-6 w-6 text-[#58CC02] flex-shrink-0" />
              <p className="text-lg text-foreground"><span className="font-semibold">Save 90% of grading time</span> without sacrificing quality</p>
              </div>
            <div className="flex items-center space-x-2 transition-all duration-300 hover:translate-x-1">
              <CheckCircle2 className="h-6 w-6 text-[#58CC02] flex-shrink-0" />
              <p className="text-lg text-foreground"><span className="font-semibold">95% accuracy</span> compared to manual grading</p>
              </div>
            <div className="flex items-center space-x-2 transition-all duration-300 hover:translate-x-1">
              <CheckCircle2 className="h-6 w-6 text-[#58CC02] flex-shrink-0" />
              <p className="text-lg text-foreground"><span className="font-semibold">Standardized grading</span> with adaptive, AI-powered rubrics</p>
              </div>
            </div>
            
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="text-base group bg-[#58CC02] hover:bg-[#58CC02]/90 text-white px-8 py-6 text-lg"
                onClick={handleTryForFree}
              >
                Try for Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-base border-[#58CC02] text-[#58CC02] hover:bg-[#58CC02]/10 px-8 py-6 text-lg"
                    onClick={handleWatchDemo}
                  >
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md border-[#58CC02]/20">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center mb-2 text-[#58CC02]">Demo Coming Soon!</DialogTitle>
                    <DialogDescription className="text-center text-base">
                      <div className="flex flex-col items-center">
                        <PlayCircle className="h-20 w-20 text-[#58CC02] mb-4 mt-2" />
                        <p className="mb-4">
                          We're putting the finishing touches on our demo video. Check back soon to see tick AI in action!
                        </p>
                        <Button 
                          className="bg-[#58CC02] hover:bg-[#58CC02]/90 text-white mt-4"
                          onClick={() => setDialogOpen(false)}
                        >
                          I'll check back later
                        </Button>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
