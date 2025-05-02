// SignupPage.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";

// Add type declaration for Google One Tap
declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: any) => void;
          renderButton: (element: HTMLElement, config: any) => void;
          prompt: (momentListener?: any) => void;
        };
      };
    };
  }
}

const SignupPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { googleSignup, googleRedirect } = useAuth();

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
  }, [googleSignup, googleRedirect]);

  const handleGoogleResponse = async (response: any) => {
    console.log("Google response received:", response);
    setIsLoading(true);
    setError(null);

    try {
      await googleSignup(response.credential);

      window.location.href =
        `${import.meta.env.VITE_APP_URL}/auth/callback?token=` +
        encodeURIComponent(response.credential);
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("Failed to sign in with Google. Please try again.");
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Falling back to traditional Google OAuth");
    googleRedirect();
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="m-auto max-w-md w-full p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4355E7] rounded-2xl shadow-lg mb-6">
            <svg
              className="w-10 h-10 text-white"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
              <path
                d="M2 17L12 22L22 17M2 12L12 17L22 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-[2.5rem] font-bold text-[#1D2433] mb-4">
            Create your account
          </h1>
          <p className="text-[#4B5563] text-lg">
            Join thousands of AI innovators
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
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-[#4355E7] hover:text-blue-700 transition duration-150"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
