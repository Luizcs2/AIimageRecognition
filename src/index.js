// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import any global styles (like Tailwind's CSS file here)
import App from "./App"; // Import your main App component

// This line tells React to render the App component inside the 'root' div in index.html
const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
