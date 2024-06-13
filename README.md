# Photo Management App

This project is a Photo Management Application developed with a Backend-for-Frontend (BFF) pattern. The primary purpose of this app is to provide a seamless and efficient way for users to manage their photos with functionalities like filtering, pagination, and enriched data display.

## Tools and Technologies Used

- Vite: A fast and optimized build tool for modern web development.
- Node.js 18: The runtime environment for the backend.
- Express: A minimal and flexible Node.js web application framework for the backend.
- React 18: The library used for building the frontend user interface.
- Concurrently: A utility to run multiple commands concurrently, used here to run both server and client.
- Material-UI (MUI): A React component library for implementing Google's Material Design.
- ESLint: A tool for identifying and fixing problems in JavaScript code.
- Prettier: An opinionated code formatter.

## Description of the App

The Photo Management App is designed to provide users with an intuitive interface to browse and manage their photo collections. The app follows a Backend-for-Frontend (BFF) pattern, where the backend serves as an intermediary between the frontend and various backend services. This pattern is used to simplify the frontend logic, improve performance, and provide a single point of control for data aggregation and transformation.

## Reasons for Using the BFF Pattern

- Performance Optimization: By having a dedicated backend for the frontend, we can optimize API responses specifically for the frontend's needs.
- Simplified Frontend: The BFF abstracts complex data-fetching and transformation logic away from the frontend, making the frontend code simpler and more maintainable.
- Security: The BFF can handle sensitive data securely on the server side, reducing the risk of exposing sensitive data to the client.

## How to Run This App Locally

1. Clone the repository:

   ```
   git clone <git@github.com:sofia-quintana/meta-photo.git>
   cd <meta-photo>
   ```

   (Remember to clone with SSH, not HTTPS)

2. Install dependencies:

   ```
   npm install
   ```

3. Run the app:

   ```
   npm start
   ```

   This command uses concurrently to run both the backend server and the Vite development server for the frontend.

## Available Scripts

- `start`: Runs both the backend and frontend concurrently.
- `client`: Starts the Vite development server for the frontend.
- `build`: Builds the frontend for production.
- `server`: Starts the backend server using Node.js and Express.
- `lint`: Runs ESLint to check for code quality issues.
- `preview`: Serves the production build locally.

## Running the App

1. Start the Development Server:

```
npm start
```

This will start both the backend server and the Vite development server. The app should be available at http://localhost:5173.

2. Building for Production:

```
npm run build
```

This will create a production build of the frontend.

3. Preview the Production Build:

```
npm run preview
```

This will start a local server to preview the production build.
