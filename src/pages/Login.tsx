import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import AuthService from "../api/signup";

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadGoogleScript = () => {
      console.log("Loading Google One Tap script...");
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        console.log("Google script loaded successfully");
        initializeGoogleOneTap();
      };

      script.onerror = () => {
        console.error("Error loading Google script");
        setError("Failed to load Google authentication services");
        // If Google script fails to load, redirect to traditional OAuth
        handleGoogleSignIn();
      };
    };

    const initializeGoogleOneTap = () => {
      if (window.google?.accounts) {
        console.log("Initializing Google One Tap...");
        window.google.accounts.id.initialize({
          client_id:
            "1057670814902-tt3cc45biti3nlnfl18abge6mle1njjt.apps.googleusercontent.com",
          callback: handleGoogleResponse,
          auto_select: false,
          cancel_on_tap_outside: true,
        });

        // Render the Google Sign In button
        const googleButtonContainer = document.getElementById(
          "google-signin-button"
        );
        if (googleButtonContainer) {
          window.google.accounts.id.renderButton(googleButtonContainer, {
            type: "standard",
            theme: "outline",
            size: "large",
            text: "continue_with",
            shape: "rectangular",
            width: 320,
            logo_alignment: "center",
          });
        }
      } else {
        console.error("Google accounts API not available");
        // If Google API is not available, redirect to traditional OAuth
        handleGoogleSignIn();
      }
    };

    loadGoogleScript();

    return () => {
      const script = document.querySelector(
        'script[src="https://accounts.google.com/gsi/client"]'
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleGoogleResponse = async (response: any) => {
    console.log("Google response received:", response);
    setIsLoading(true);
    setError(null);

    try {
      const result = await AuthService.googleSignup(response.credential);
      console.log("Google sign-in successful:", result);

      if (result.token) {
        localStorage.setItem("auth_token", result.token);
      }

      // Use proper encoding for token to prevent any issues
      window.location.href =
        `${import.meta.env.VITE_APP_URL}/auth/callback?token=` +
        encodeURIComponent(result.token || response.credential);
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("Failed to sign in with Google. Please try again.");
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Falling back to traditional Google OAuth");
    AuthService.googleRedirect();
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="m-auto max-w-md w-full p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img 
              src="/tick-ai-logo.svg" 
              alt="tick AI" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <h1 className="text-[2.5rem] font-bold text-[#1D2433] mb-4">
            Welcome back
          </h1>
          <p className="text-[#4B5563] text-lg">
            Sign in to continue to tick AI
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            <div className="flex">
              <AlertCircle className="w-5 h-5 mr-2" />
              <p>{error}</p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {/* Google Sign In Button Container */}
          <div id="google-signin-button" className="flex justify-center"></div>

          <div className="text-center mt-8">
            <p className="text-[#4B5563] text-base">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-[#58CC02] hover:text-[#4AA300] transition duration-150"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
