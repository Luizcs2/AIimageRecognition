import React, { useState } from "react";
import Homepage from "./assets/pages/home"; // Import Homepage with the correct case
import LandingPage from "./assets/pages/landing"; // Import LandingPage
import videoBackground from "./assets/12421542_3840_2160_30fps.mp4"; // Import video as a module
import "./App.css";

function App() {
  const [showLanding, setShowLanding] = useState(true); // State to toggle between LandingPage and Homepage

  return (
    <div className="App" style={{ position: "relative", overflow: "hidden" }}>
      {/* Video background */}
      <video
        src={videoBackground} // Use the imported video here
        type="video/mp4"
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Ensure the video is in the background
          filter: "blur(2.5px)", // Apply blur effect
        }}
      />

      {/* Conditionally render Homepage or LandingPage */}
      {showLanding ? <LandingPage /> : <Homepage />}

      {/* Optional: Button to toggle between pages */}
      <button
        onClick={() => setShowLanding(!showLanding)}
        className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded"
      >
        Toggle to {showLanding ? "Homepage" : "LandingPage"}
      </button>
    </div>
  );
}

export default App;
