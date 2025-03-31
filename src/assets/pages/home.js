import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

function Homepage() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadToCloudinary = async (file) => {
    try {
      console.log("Uploading file:", file);
      console.log(
        "Cloudinary Cloud Name:",
        process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
      );
      console.log(
        "Cloudinary Upload Preset:",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      );
      console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);

      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      );

      console.log("Uploading to Cloudinary...");
      console.log("Cloud Name:", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
      console.log(
        "Upload Preset:",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      );

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Upload failed: ${errorText}`);
      }

      const data = await response.json();
      console.log("Cloudinary response:", data);
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      setError("Failed to upload image to Cloudinary");
      return null;
    }
  };

  // Handle image upload
  const handleImageUpload = async (acceptedFiles) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const file = acceptedFiles[0];
      if (file) {
        const imageUrl = await uploadToCloudinary(file);
        if (imageUrl) {
          setImage(imageUrl);
        }
      }
    } catch (error) {
      console.error("Error handling image upload:", error);
      setError("Failed to process the uploaded image");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!image) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/upload-and-recognize`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageUrl: image }),
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error during image recognition:", error);
      setError("Failed to recognize image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Set up dropzone
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: handleImageUpload,
    maxFiles: 1,
  });

  return (
    <div className="homepage flex flex-col justify-center items-center min-h-screen p-6">
      <h2 className="text-white text-5xl mb-1 text-center">
        AI Image Recognition
      </h2>
      <h3 className="text-white text-xl text-center mb-6">
        Unlock insights from your images with cutting-edge AI technology
      </h3>

      <div
        {...getRootProps()}
        className="border-2 text-white border-dashed border-gray-300 rounded-md p-6 mb-4 text-center cursor-pointer hover:bg-gray-500/20 w-full max-w-md"
      >
        <input {...getInputProps()} />
        <p>Click or drag to select an image</p>
      </div>

      {loading && <p className="text-blue-500 mb-4">Processing...</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {image && (
        <div className="mb-4">
          <h2 className="text-blue-500 font-semibold mb-2">Image Preview</h2>
          <img
            src={image}
            alt="Uploaded preview"
            className="max-w-full h-auto max-h-64 rounded-md"
          />
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={!image || loading}
        className={`bg-blue-500 text-white p-2 rounded mt-4 hover:scale-105 ${
          !image || loading
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-sky-500"
        }`}
      >
        Submit for Recognition
      </button>

      {result && (
        <div className="mt-6 p-4 border rounded-md w-full max-w-md text-white">
          <h2 className="text-xl font-semibold mb-2">Recognition Results</h2>
          <ul className="list-disc pl-5">
            {result.labels && result.labels.length > 0 ? (
              result.labels.map((label, index) => (
                <li key={index} className="mb-1">
                  {label.description} (Confidence:{" "}
                  {(label.score * 100).toFixed(2)}%)
                </li>
              ))
            ) : (
              <li>No labels detected</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Homepage;
