// API configuration

// API base URL - use VITE_BACKEND_URL from environment and append /api/v1 if needed
export const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

// Default request headers
export const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};
