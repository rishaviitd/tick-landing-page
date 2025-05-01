import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isActive?: boolean;
  onClick?: () => void;
  stepNumber?: number;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  isActive = false, 
  onClick,
  stepNumber
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`feature-card bg-white transition-all duration-300 ${
        isActive || isHovered ? 'border-primary/50 shadow-xl' : ''
      } ${onClick ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-6">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 ${
          isActive || isHovered ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
        }`}>
          <Icon className="h-7 w-7" />
        </div>
        {stepNumber && (
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
            isActive || isHovered ? 'bg-primary text-white' : 'bg-secondary text-primary'
          } transition-colors duration-300 font-semibold text-sm`}>
            {stepNumber}
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
      
      {(isActive || isHovered) && (
        <div className="h-1 w-16 bg-primary mt-6 rounded-full transition-all duration-300"></div>
      )}
    </div>
  );
};

export default FeatureCard;
