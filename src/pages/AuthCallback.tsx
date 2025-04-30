import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = () => {
      const params = new URLSearchParams(location.search);
      const token = params.get("token");

      if (token) {
        try {
          // Store the token in localStorage
          localStorage.setItem("auth_token", token);
          console.log("Token stored successfully");

          // Verify token is valid by parsing it (simple validation)
          const tokenParts = token.split(".");
          if (tokenParts.length !== 3) {
            throw new Error("Invalid token format");
          }

          // Parse the payload
          const payload = JSON.parse(atob(tokenParts[1]));
          console.log("Token payload:", payload);

          // Log more details about the token structure
          if (payload.user) {
            console.log("User data in token:", payload.user);
          } else {
            console.log(
              "No user object in payload, using top-level properties"
            );
          }

          // Redirect to app - use exact token format without modification
          window.location.href = `https://app.usetick.com/auth/callback?token=${encodeURIComponent(
            token
          )}`;
        } catch (error) {
          console.error("Error handling token:", error);
          setError("Authentication failed: Invalid token format");
          setTimeout(() => navigate("/signup?error=invalid_token"), 3000);
        }
      } else {
        // Handle error
        setError("No authentication token received");
        setTimeout(() => navigate("/signup?error=auth_failed"), 3000);
      }
    };

    handleCallback();
  }, [location, navigate]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Authentication Error
          </h1>
          <p className="text-gray-700 mb-4">{error}</p>
          <p className="text-gray-500">Redirecting to sign up page...</p>
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500 mx-auto mt-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Completing sign in...
        </h1>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    </div>
  );
};

export default AuthCallback;
