const express = require("express");
const cors = require("cors");
const vision = require("@google-cloud/vision");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const path = require("path");

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Set up Google Vision API client
const client = new vision.ImageAnnotatorClient({
  keyFilename: path.resolve(
    __dirname,
    process.env.GOOGLE_APPLICATION_CREDENTIALS
  ),
});

// Set up Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// API to process an image URL with Google Vision
app.post("/api/upload-and-recognize", async (req, res) => {
  try {
    const { imageUrl } = req.body;
    if (!imageUrl) {
      return res.status(400).json({ error: "No image URL provided" });
    }

    // Send the image URL to Google Vision API
    const [visionResult] = await client.labelDetection(imageUrl);
    const labels = visionResult.labelAnnotations;

    res.json({
      imageUrl,
      labels,
      analyzed: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
