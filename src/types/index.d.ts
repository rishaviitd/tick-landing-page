// Type definitions for the GradeAI Landing Page

/**
 * Common button handler types
 */
export type ButtonHandler = () => void;
export type EventButtonHandler = (e: React.MouseEvent) => void;

/**
 * Authentication handler types
 */
export interface AuthHandlers {
  handleLogin: ButtonHandler;
  handleSignup: ButtonHandler;
  handleTryForFree: ButtonHandler;
  handleStartTrial: EventButtonHandler;
  handleContactSales: EventButtonHandler;
  handleWatchDemo: ButtonHandler;
}

/**
 * Pricing plan handler types
 */
export interface PricingHandlers {
  handleBasicTrialClick: ButtonHandler;
  handleProTrialClick: ButtonHandler;
  handleContactSales: ButtonHandler;
}
// types.ts

// Form data interface
export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Login form data interface
export interface LoginFormData {
  email: string;
  password: string;
}

// Form error states interface
export interface FormErrors {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
  [key: string]: string | null | undefined;
}

// Company info interface
export interface CompanyInfo {
  name: string;
  tagline: string;
  logoUrl?: string;
}

// Feature item interface for the left panel
export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// User data interface
export interface UserData {
  id: string;
  name: string;
  email: string;
  token?: string;
}
