# SG Mart E-commerce Website

## Overview
SG Mart is a modern e-commerce platform built with React, TypeScript, and TailwindCSS. It features product listings, shopping cart functionality, checkout process, order tracking, and user authentication.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- Visual Studio Code

### Recommended VS Code Extensions
This project includes recommendations for VS Code extensions. When you open the project in VS Code, you'll be prompted to install the recommended extensions, which include:

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript support
- And more helpful tools for React development

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
cd project
npm run dev
```

The application will be available at http://localhost:5174 (or another port if 5174 is in use).

### VS Code Setup

This project includes VS Code configuration files to enhance your development experience:

- `.vscode/settings.json`: Editor settings for consistent formatting and linting
- `.vscode/launch.json`: Debug configurations for Chrome and Node.js
- `.prettierrc`: Code formatting rules
- `jsconfig.json`: JavaScript/TypeScript path resolution and IntelliSense

### Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run lint`: Run ESLint to check for code issues
- `npm run preview`: Preview the production build locally
- `npm run format`: Format all source files with Prettier
- `npm run format:check`: Check if files are properly formatted

## Project Structure

```
project/
├── public/            # Static assets
├── src/
│   ├── components/    # React components
│   ├── context/       # React context providers
│   ├── data/          # Mock data
│   ├── types/         # TypeScript type definitions
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main application component
│   ├── index.css      # Global styles
│   └── main.tsx       # Application entry point
├── .vscode/           # VS Code configuration
├── .prettierrc        # Prettier configuration
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Troubleshooting VS Code Issues

If you encounter issues with VS Code:

1. Make sure all recommended extensions are installed
2. Reload VS Code after installing extensions
3. Check that TypeScript is using the workspace version (bottom right of VS Code)
4. Try running `npm install` again to ensure all dependencies are properly installed
5. Clear the TypeScript server cache: Ctrl+Shift+P → "TypeScript: Restart TS Server"

## License
MIT