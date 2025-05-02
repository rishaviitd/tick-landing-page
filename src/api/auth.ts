// Auth API Service
import { API_BASE_URL, DEFAULT_HEADERS } from "./config";
import {
  ApiError,
  ApiResponse,
  LoginData,
  SignupFormData,
  UserData,
} from "./types";

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
        headers: DEFAULT_HEADERS,
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
        headers: DEFAULT_HEADERS,
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
      const response = await fetch(
        `${API_BASE_URL}/api/v1/auth/google/callback`,
        {
          method: "POST",
          headers: DEFAULT_HEADERS,
          body: JSON.stringify({ credential }),
        }
      );

      const data: ApiResponse<UserData> = await response.json();

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

  /**
   * Logout current user
   */
  logout: (): void => {
    localStorage.removeItem("auth_token");
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem("auth_token");
  },

  /**
   * Get current authentication token
   */
  getToken: (): string | null => {
    return localStorage.getItem("auth_token");
  },
};

export default AuthService;
