
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "GradeAI has revolutionized how I grade papers. It accurately captures my grading style and provides feedback that feels like it came from me. What used to take me hours now takes minutes.",
    author: "Dr. Sarah Johnson",
    role: "High School English Teacher",
    avatar: "/placeholder.svg"
  },
  {
    quote: "The accuracy of the AI is remarkable. It learned my assessment style after just a few examples and now consistently provides feedback that aligns with how I would grade. My students can't tell the difference!",
    author: "Prof. Michael Chen",
    role: "University Professor",
    avatar: "/placeholder.svg"
  },
  {
    quote: "My students love the detailed feedback they receive, and I love how much time I save on grading. The AI adapts to my style so well that the feedback feels personalized from me.",
    author: "Emily Rodriguez",
    role: "Middle School Science Teacher",
    avatar: "/placeholder.svg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Educator Testimonials
          </div>
          <h2 className="text-3xl font-bold mb-4">What Educators Say About Our AI</h2>
          <p className="text-muted-foreground text-lg">
            See why teachers trust our AI to understand their unique grading style.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white p-8 md:p-10 rounded-xl shadow-lg overflow-hidden">
            {/* Abstract decoration */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-accent/5 rounded-full"></div>
            
            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <p className="italic text-foreground text-lg md:text-xl mb-8 relative z-10">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>
              
              <div className="flex items-center">
                <div className="flex-none">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].author} />
                    <AvatarFallback>{testimonials[currentIndex].author.split(' ').map(name => name[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonials[currentIndex].author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 500);
                  }}
                  className={`w-2 h-2 rounded-full mx-1 transition-all ${
                    currentIndex === index ? 'bg-primary w-6' : 'bg-primary/30'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md border border-primary/10">
              <div className="flex items-center space-x-2 mb-2">
                <div className="text-primary font-bold text-xl">95%</div>
                <div className="text-sm">Accuracy Rate</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Our AI achieves 95% agreement with teacher grading on the same assignments.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md border border-primary/10">
              <div className="flex items-center space-x-2 mb-2">
                <div className="text-primary font-bold text-xl">5,000+</div>
                <div className="text-sm">Educators</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by thousands of educators across K-12 and higher education.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md border border-primary/10">
              <div className="flex items-center space-x-2 mb-2">
                <div className="text-primary font-bold text-xl">70%</div>
                <div className="text-sm">Time Saved</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Teachers report saving up to 70% of their grading time with our AI assistant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
