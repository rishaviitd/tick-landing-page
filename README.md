# GradeAI Landing Page

A modern, responsive landing page for GradeAI built with React, TypeScript, and Tailwind CSS. This simplified codebase contains only the landing page with placeholder buttons for authentication and user actions.

## Overview

This is a simplified version of the GradeAI application that includes only the landing page components. All authentication, dashboard, and other functionality has been removed to provide a clean starting point for integrating your own authentication system and backend.

## Features

- Responsive landing page with modern UI components
- Mobile-friendly design
- Placeholder buttons for login, signup, and "try for free" actions
- TypeScript support for better development experience
- Ready-to-implement authentication context
- Placeholder API service structure
- Easy to customize and extend

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gradeai-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── ui/         # Base UI components
│   ├── CTA.tsx     # Call to action section
│   ├── Features.tsx # Features section
│   ├── Footer.tsx  # Footer component
│   ├── Hero.tsx    # Hero section
│   ├── Navbar.tsx  # Navigation bar
│   └── ...         # Other landing page components
├── context/        # React context for state management
│   └── AuthContext.tsx # Auth context placeholder
├── lib/            # Utility functions
│   └── utils.ts    # General utilities
├── pages/          # Application pages
│   ├── Landing.tsx # Main landing page
│   └── NotFound.tsx # 404 page
├── services/       # External services integration
│   └── api.ts      # API service placeholder
├── types/          # TypeScript type definitions
│   └── index.d.ts  # Common types
├── App.tsx         # Application entry point
└── main.tsx        # React rendering
```

## Customization

### Adding Authentication

The landing page includes placeholder buttons for authentication in the following components:

1. **Navbar.tsx**: Login and signup buttons
2. **CTA.tsx**: "Start Your Free Trial" button
3. **Hero.tsx**: "Try for Free" button
4. **Pricing.tsx**: "Start Free Trial" buttons

These buttons have handler functions that can be connected to your authentication system:

```tsx
// Example in Navbar.tsx:
const handleLogin = () => {
  // Add your login logic here
  console.log("Login button clicked");
};

const handleSignup = () => {
  // Add your signup logic here
  console.log("Signup button clicked");
};
```

### Implementing Authentication

The project includes a ready-to-implement authentication context in `src/context/AuthContext.tsx`. To use it:

1. Implement the actual authentication logic in the context
2. Connect to your backend by updating the `src/services/api.ts` file
3. Wrap your application with the `AuthProvider` in `App.tsx`:

```tsx
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Rest of your app */}
      </BrowserRouter>
    </AuthProvider>
  );
};
```

### Modifying Content

You can easily modify the landing page content in the respective component files:

- **Hero.tsx**: Update the main hero section
- **Features.tsx**: Modify the features section
- **Pricing.tsx**: Update pricing information
- **CTA.tsx**: Change the call-to-action content
- **Footer.tsx**: Customize the footer links and information

## Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

The built files will be available in the `dist` directory.

## License

[Add your license information here]

## Contact

[Add your contact information here]
