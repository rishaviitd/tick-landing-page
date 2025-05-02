import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { AuthService, UserData, LoginData, SignupFormData } from "../api";

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserData | null;
  login: (loginData: LoginData) => Promise<void>;
  signup: (userData: SignupFormData) => Promise<void>;
  logout: () => void;
  googleSignup: (credential: string) => Promise<void>;
  googleRedirect: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserData | null>(null);

  // Check for token on mount
  useEffect(() => {
    const token = AuthService.getToken();
    setIsAuthenticated(!!token);
  }, []);

  const login = async (loginData: LoginData) => {
    try {
      const userData = await AuthService.login(loginData);
      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const signup = async (userData: SignupFormData) => {
    try {
      const newUser = await AuthService.signup(userData);
      setUser(newUser);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  const googleSignup = async (credential: string) => {
    try {
      const userData = await AuthService.googleSignup(credential);
      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Google signup error:", error);
      throw error;
    }
  };

  const googleRedirect = () => {
    AuthService.googleRedirect();
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        signup,
        logout,
        googleSignup,
        googleRedirect,
      }}
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
