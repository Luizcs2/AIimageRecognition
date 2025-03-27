import React from "react";
import Homepage from "./assets/pages/home"; // Import Homepage with the correct case
import LandingPage from "./assets/pages/landing"; // Import LandingPage
import Videopage from "./assets/pages/Videopage";
import videoBackground from "./assets/12421542_3840_2160_30fps.mp4"; // Import video as a module
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct imports for routing

function App() {
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

      {/* Set up Router and Routes */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Homepage />} /> {/* Removed .js */}
          <Route path="/videopage" element={<Videopage />} />{" "}
          {/* Removed .js */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
