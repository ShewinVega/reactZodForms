Custom Form Project
Overview

This project is a simple React application that uses React Hook Form and Zod to handle form validation with a custom form component. It includes features like field validation, error handling, and form submission.
Features

  Custom Form Component: A reusable form component with validation and error handling.
  Form Validation: Uses Zod for schema-based validation.
  Error Handling: Form inputs show error messages when validation fails.
  Form Submission: Handles form submission and logs the form data to the console.

Technologies Used

  React: JavaScript library for building user interfaces.
  React Hook Form: A library for managing forms in React.
  Zod: A TypeScript-first schema declaration and validation library.
  CSS: For styling the form.

Project Structure

  /src
  ├── /components
  │   ├── /CustomForm
  │   │   ├── CustomForm.tsx       # Main form component
  │   │   ├── customInput.css      # Styles for the form inputs
  │   │   └── InputForm.tsx        # Custom input component
  │   ├── /models
  │   │   └── /schema
  │   │       └── CustomForm.ts    # Form schema and types
  │   ├── /utils
  │   │   └── messages.ts          # Error message constants
  ├── App.tsx                       # Main application entry point
  ├── App.css                       # Styles for the app
  └── index.tsx                     # Application entry file

Installation

  Clone the repository:

    git clone https://github.com/your-username/custom-form.git

  Navigate into the project folder:

    cd custom-form

  Install dependencies:

    npm install

  Start the application:

    npm start | bun run dev | pnpm run dev


Usage

  1. CustomForm Component: This is the core component where the form is rendered. It uses react-hook-form to manage the form state and Zod for validation.
  2. InputForm Component: A custom input field component used to render individual input fields within the form.
