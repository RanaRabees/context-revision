# Context Revision - Next.js Project

## 📌 Project Overview
In this **Next.js 15** project, the **React Context API** is used for state management. The project structure is organized to handle different arithmetic operations using context and also includes authentication logic. This README serves as documentation for the learning process.

## 📂 Folder Structure
```
.next/              # Build and cache folder (auto-generated)
context/           # Context API files for state management
  ├── AddContext.jsx       # Context for addition operation
  ├── SubtractContext.jsx  # Context for subtraction operation
  ├── MultiplyContext.jsx  # Context for multiplication operation
  ├── DivideContext.jsx    # Context for division operation
  ├── AuthContext.jsx      # Context for authentication
  ├── ThemeContext.jsx     # Context for theme management
node_modules/      # Installed dependencies (auto-generated)
public/            # Static assets like images and icons
src/app/           # Main application folder
  ├── about/       # "About" page route
  │   ├── subabout/
  │   │   ├── layout.tsx  # Layout for "subabout"
  │   │   ├── page.tsx    # Page content for "subabout"
  │   ├── layout.tsx      # Layout for "about"
  │   ├── page.tsx        # Page content for "about"
  ├── components/  # Reusable components
  │   ├── AuthComponent.tsx  # Authentication-related UI component
  │   ├── Calculator.tsx     # Calculator component using context
  ├── new/         # "New" section
  │   ├── layout.tsx  # Layout for "new"
  │   ├── page.tsx    # Page content for "new"
.gitignore         # Files to be ignored by Git
package.json       # Project dependencies and scripts
next.config.ts     # Next.js configuration file
tsconfig.json      # TypeScript configuration
postcss.config.mjs # PostCSS configuration for Tailwind
```

## 📜 Context API Files
In this project, the **React Context API** is implemented to manage different types of state. Here’s what each context file does:
- **AddContext.jsx**: Manages state and functions related to addition.
- **SubtractContext.jsx**: Handles logic for subtraction.
- **MultiplyContext.jsx**: Stores multiplication-related functions.
- **DivideContext.jsx**: Manages division operations.
- **AuthContext.jsx**: Controls user authentication state.
- **ThemeContext.jsx**: Stores and updates the theme settings.

## 📦 Dependencies
This project includes the following dependencies:

### 🔹 Main Dependencies
- **react 19** - Core React library for building UI components.
- **react-dom 19** - React’s rendering package for the DOM.
- **next 15.2.4** - Next.js framework for server-side rendering and static site generation.

### 🔹 Development Dependencies
- **typescript 5** - TypeScript for type safety.
- **@types/react, @types/react-dom, @types/node** - TypeScript type definitions for better development experience.
- **eslint 9 & eslint-config-next 15.2.4** - Linting tools to maintain clean code.
- **tailwindcss 4 & @tailwindcss/postcss** - A utility-first CSS framework for styling.
- **@eslint/eslintrc 3** - Configuration settings for ESLint.

## 🚀 Running the Project
To run the project, follow these steps:

### 1️⃣ Install Dependencies
```sh
npm install
```
This installs all required packages listed in `package.json`.

### 2️⃣ Start the Development Server
```sh
npm run dev
```
This starts the Next.js development server, and the app can be accessed at [http://localhost:3000](http://localhost:3000).

### 3️⃣ Build the Project
```sh
npm run build
```
This compiles the project for production use.

### 4️⃣ Run in Production Mode
```sh
npm start
```
After building, this command starts the app in production mode.

## 📚 Learning Goals
The primary objectives of this project include:
- Mastering the **React Context API** for global state management.
- Understanding the **Next.js 15** project structure and features.
- Implementing **TypeScript** to enforce type safety.
- Creating authentication logic using the **AuthContext**.
- Using **Tailwind CSS** to improve styling efficiency.

---
### 🎯 Future Improvements
Potential improvements for this project include:
- Adding **more reusable components** for different contexts.
- Implementing **custom hooks** to simplify context logic.
- Enhancing **authentication with JWT tokens**.
- Adding **dark mode support** using ThemeContext.

## 💡 Conclusion
This project serves as a hands-on learning experience for React, Next.js, and state management using the Context API. Continuous expansion of features and refinement of architecture will continue. 🚀

