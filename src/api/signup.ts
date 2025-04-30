// api.ts
import { SignupFormData } from "../types/index";

// API base URL - use VITE_BACKEND_URL from environment and append /api/v1
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

// Interface for API response
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Interface for user data returned after signup/login
interface UserData {
  id: string;
  email: string;
  name: string;
  token?: string;
  createdAt?: string;
}

// Interface for login data
interface LoginData {
  email: string;
  password: string;
}

// Error class for API errors
export class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = "ApiError";
  }
}

/**
 * Service for user authentication
 */
export const AuthService = {
  /**
   * Register a new user
   * @param userData - User signup data
   * @returns Promise with user data
   */
  signup: async (userData: SignupFormData): Promise<UserData> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          password: userData.password,
        }),
      });

      const data: ApiResponse<UserData> = await response.json();

      if (!response.ok) {
        throw new ApiError(data.error || "Failed to sign up", response.status);
      }

      if (!data.success || !data.data) {
        throw new ApiError("Failed to create account", 500);
      }

      return data.data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError("Network error. Please try again later.", 500);
    }
  },

  /**
   * Login a user with email/password
   * @param loginData - Login credentials
   * @returns Promise with user data including token
   */
  login: async (loginData: LoginData): Promise<UserData> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data: ApiResponse<{ token: string; user: UserData }> =
        await response.json();

      if (!response.ok) {
        throw new ApiError(data.error || "Failed to login", response.status);
      }

      if (!data.success || !data.data) {
        throw new ApiError("Login failed", 500);
      }

      // Store the token in localStorage
      localStorage.setItem("auth_token", data.data.token);

      return {
        ...data.data.user,
        token: data.data.token,
      };
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError("Network error. Please try again later.", 500);
    }
  },

  /**
   * Sign in with Google using One Tap
   * @param credential - The JWT credential returned by Google One Tap
   */
  googleSignup: async (credential: string): Promise<UserData> => {
    try {
      console.log(
        "Sending Google credential to:",
        `${API_BASE_URL}/api/v1/auth/google/callback`
      );

      const response = await fetch(
        `${API_BASE_URL}/api/v1/auth/google/callback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ credential }),
        }
      );

      const data: ApiResponse<UserData> = await response.json();
      console.log("Google auth response:", data);

      if (!response.ok) {
        throw new ApiError(
          data.error || "Failed to sign in with Google",
          response.status
        );
      }

      if (!data.success || !data.data) {
        throw new ApiError("Failed to create account", 500);
      }

      return data.data;
    } catch (error) {
      console.error("Google auth error details:", error);
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError("Network error. Please try again later.", 500);
    }
  },

  /**
   * Redirect to traditional Google OAuth flow
   */
  googleRedirect: (): void => {
    window.location.href = `${API_BASE_URL}/api/v1/auth/google`;
  },
};

export default AuthService;
