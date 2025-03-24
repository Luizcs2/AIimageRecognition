import React from "react";
import Homepage from "./assets/pages/home"; // Import Homepage with the correct case
import videoBackground from "./assets/12421542_3840_2160_30fps.mp4"; // Import video as a module
import "./App.css";

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
        }}
      />

      {/* Render the Homepage component */}
      <Homepage />
    </div>
  );
}

export default App;
