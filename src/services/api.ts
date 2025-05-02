/**
 * API Service
 *
 * This is a placeholder for API service implementation.
 * Replace with your actual API calls when connecting to a backend.
 */

interface User {
  id: string;
  name: string;
  email: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

interface SignupResponse {
  user: User;
  token: string;
}

// Example API class that can be implemented with your backend
export class Api {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string = "/api") {
    this.baseUrl = baseUrl;
  }

  // Set authentication token
  setToken(token: string): void {
    this.token = token;
    localStorage.setItem("auth_token", token);
  }

  // Get stored token
  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem("auth_token");
    }
    return this.token;
  }

  // Clear token (for logout)
  clearToken(): void {
    this.token = null;
    localStorage.removeItem("auth_token");
  }

  // Helper method for API requests
  private async request(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<any> {
    const url = `${this.baseUrl}${endpoint}`;

    // Set default headers
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    // Add auth token if available
    if (this.getToken()) {
      headers["Authorization"] = `Bearer ${this.getToken()}`;
    }

    const config: RequestInit = {
      ...options,
      headers,
    };

    // Make the request
    const response = await fetch(url, config);

    // Check if the request was successful
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `API request failed with status ${response.status}`
      );
    }

    // Return the response data
    return response.json();
  }

  // Authentication methods
  async login(email: string, password: string): Promise<LoginResponse> {
    // Replace with actual implementation
    console.log("API login called with:", email);

    // This is a placeholder - implement actual API call
    // return this.request('/auth/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    // });

    // Mock response
    return {
      user: {
        id: "user_123",
        name: "Example User",
        email,
      },
      token: "mock_token_xyz",
    };
  }

  async signup(
    email: string,
    password: string,
    name: string
  ): Promise<SignupResponse> {
    // Replace with actual implementation
    console.log("API signup called with:", email, name);

    // This is a placeholder - implement actual API call
    // return this.request('/auth/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password, name }),
    // });

    // Mock response
    return {
      user: {
        id: "user_new",
        name,
        email,
      },
      token: "mock_token_new",
    };
  }

  async logout(): Promise<void> {
    // Replace with actual implementation
    console.log("API logout called");

    // This is a placeholder - implement actual API call if needed
    // await this.request('/auth/logout', { method: 'POST' });

    this.clearToken();
  }

  async startTrial(): Promise<void> {
    // Replace with actual implementation
    console.log("API startTrial called");

    // This is a placeholder - implement actual API call
    // return this.request('/subscription/trial', { method: 'POST' });
  }
}

// Create and export a singleton instance
export const api = new Api();

export default api;
