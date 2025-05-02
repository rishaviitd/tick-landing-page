import React, { createContext, useContext, ReactNode, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  startTrial: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any | null>(null);

  // Example authentication functions that developers can implement
  const login = async (email: string, password: string) => {
    console.log("Login function called with:", email);
    // Implement your authentication logic here
    // Example: const response = await api.login(email, password);
    // setUser(response.user);
    // setIsAuthenticated(true);
  };

  const signup = async (email: string, password: string, name: string) => {
    console.log("Signup function called with:", email, name);
    // Implement your signup logic here
    // Example: const response = await api.signup(email, password, name);
    // setUser(response.user);
    // setIsAuthenticated(true);
  };

  const logout = async () => {
    console.log("Logout function called");
    // Implement your logout logic here
    // Example: await api.logout();
    // setUser(null);
    // setIsAuthenticated(false);
  };

  const startTrial = async () => {
    console.log("Start trial function called");
    // Implement your trial signup logic here
    // Example: await api.startTrial();
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, signup, logout, startTrial }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// IMPORTANT: To use this context, wrap your application with AuthProvider
// Example:
//
// import { AuthProvider } from './context/AuthContext';
//
// const App = () => {
//   return (
//     <AuthProvider>
//       <RestOfYourApp />
//     </AuthProvider>
//   );
// };
