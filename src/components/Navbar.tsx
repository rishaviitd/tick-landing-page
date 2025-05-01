import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

/**
 * Navbar component for the landing page
 * The login and signup buttons are placeholders that can be connected
 * to your authentication system
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // These functions can be implemented to connect to your auth system

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-1">
              <div className="w-10 h-10 relative flex-shrink-0">
                <img 
                  src="/tick-ai-logo.svg" 
                  alt="tick AI" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold" style={{ color: "#58CC02" }}>tick AI </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground/80 hover:text-[#58CC02] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/#features"
              className="text-foreground/80 hover:text-[#58CC02] transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              to="/#pricing"
              className="text-foreground/80 hover:text-[#58CC02] transition-colors font-medium"
            >
              Pricing
            </Link>
            <div className="flex space-x-4">
              <Link to="/login">
                <Button 
                  variant="outline" 
                  className="border-[#58CC02] text-[#58CC02] hover:bg-[#58CC02]/10"
                >
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#58CC02] hover:bg-[#58CC02]/90 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-foreground hover:bg-[#58CC02]/10 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/#features"
              className="block px-3 py-2 text-foreground hover:bg-[#58CC02]/10 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/#pricing"
              className="block px-3 py-2 text-foreground hover:bg-[#58CC02]/10 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="space-y-2 pt-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="outline" 
                  className="w-full border-[#58CC02] text-[#58CC02] hover:bg-[#58CC02]/10"
                >
                  Log In
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#58CC02] hover:bg-[#58CC02]/90 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
