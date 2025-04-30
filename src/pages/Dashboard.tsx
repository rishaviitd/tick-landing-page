import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<{
    name?: string;
    email?: string;
  } | null>(null);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("auth_token");
    if (!token) {
      console.log("No token found, redirecting to signup");
      navigate("/signup");
      return;
    }

    // Parse the JWT token (just the payload part)
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      console.log("Token payload in Dashboard:", payload);

      // Always expect user data in payload.user
      if (payload.user) {
        console.log("Using user object from payload:", payload.user);
        setUserData({
          name: payload.user.name || "Guest",
          email: payload.user.email || "",
        });
      } else {
        console.error("No user object found in token payload");
        navigate("/signup");
      }
    } catch (error) {
      console.error("Error parsing token:", error);
      navigate("/signup");
    }
  }, [navigate]);

  // Add debugging for the userData state
  useEffect(() => {
    console.log("Current userData state:", userData);
  }, [userData]);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/signup");
  };

  // Debug function to display token details
  const debugToken = () => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      console.log("No token found in localStorage");
      return;
    }

    try {
      // Split the token into its parts
      const tokenParts = token.split(".");
      if (tokenParts.length !== 3) {
        console.log("Invalid token format - not a valid JWT");
        return;
      }

      // Decode header
      const header = JSON.parse(atob(tokenParts[0]));
      // Decode payload
      const payload = JSON.parse(atob(tokenParts[1]));

      console.log("==== JWT Token Debug ====");
      console.log("Header:", header);
      console.log("Payload:", payload);
      console.log("Signature: [hidden]");
      console.log("=======================");

      // Also check window.user if it exists
      if ((window as any).user) {
        console.log("Window user object:", (window as any).user);
      }
    } catch (error) {
      console.error("Error parsing token for debugging:", error);
    }
  };

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex space-x-4">
            <button
              onClick={debugToken}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Debug Token
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Log out
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Welcome, {userData.name}!
              </h2>
              {userData.email && (
                <p className="text-gray-600">
                  Logged in as:{" "}
                  <span className="font-medium">{userData.email}</span>
                </p>
              )}

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-2">
                  Your Account Details
                </h3>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {userData.name}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Email
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {userData.email}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Account Status
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Authentication
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">Google</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
