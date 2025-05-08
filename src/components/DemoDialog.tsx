import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";

interface DemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoDialog = ({ open, onOpenChange }: DemoDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-[#58CC02]">
            Demo Coming Soon!
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            We're currently preparing an amazing demo experience for you.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-6 py-6">
          <div className="w-24 h-24 bg-[#58CC02]/10 rounded-full flex items-center justify-center">
            <Calendar className="h-12 w-12 text-[#58CC02]" />
          </div>
          
          <p className="text-center">
            Our team is putting the finishing touches on an interactive demo that showcases 
            tick AI's powerful grading capabilities. We'll notify you as soon as it's ready!
          </p>
          
          <div className="flex flex-col items-center space-y-2">
            <Button 
              onClick={() => onOpenChange(false)}
              className="bg-[#58CC02] hover:bg-[#58CC02]/90 text-white px-8 py-2"
            >
              Got it, thanks!
            </Button>
            
            <Button 
              variant="link"
              className="text-[#58CC02]"
              onClick={() => window.location.href = "mailto:contact@tickai.com"}
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact us for early access
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog; 