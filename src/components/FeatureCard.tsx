
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
      className={`bg-white rounded-xl p-6 shadow-md border transition-all duration-300 ${
        isActive || isHovered ? 'border-primary/50 shadow-lg transform -translate-y-1' : 'border-transparent'
      } ${onClick ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
          isActive || isHovered ? 'bg-primary/20' : 'bg-primary/10'
        }`}>
          <Icon className={`h-6 w-6 transition-colors duration-300 ${
            isActive || isHovered ? 'text-primary' : 'text-primary/80'
          }`} />
        </div>
        {stepNumber && (
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
            isActive || isHovered ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
          } transition-colors duration-300 font-semibold text-sm`}>
            {stepNumber}
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      
      {(isActive || isHovered) && (
        <div className="h-1 w-16 bg-primary/60 mt-4 rounded-full transition-all duration-300"></div>
      )}
    </div>
  );
};

export default FeatureCard;
