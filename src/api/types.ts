// API Types
export interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface UserData {
  id: string;
  email: string;
  name: string;
  token?: string;
  createdAt?: string;
}

// Interface for API response
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
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
