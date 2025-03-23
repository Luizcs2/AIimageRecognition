// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Import any global styles (like Tailwind's CSS file here)
import App from "./App"; // Import your main App component

// This line tells React to render the App component inside the 'root' div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
