import React, { useState } from "react";
import { useDropzone } from "react-dropzone"; // Import useDropzone hook

function Homepage() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  // Handle image upload and set image preview
  const handleImageUpload = (acceptedFiles) => {
    setImage(URL.createObjectURL(acceptedFiles[0])); // Set the image preview
  };

  // Handle form submission (send image to API)
  const handlesubmit = async () => {
    const response = await fetch("api/recognize-image", {
      method: "POST",
      body: image,
    });
    const data = await response.json();
    setResult(data); // Set the result of the recognition
  };

  // Set up dropzone options
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*", // Accept only image files
    onDrop: handleImageUpload, // Handle drop event
  });

  return (
    <div className="homepage flex flex-col justify-center items-center min-h-screen p-6">
      <h2 className=" text-white text-5xl mb-1 text-center h-20">
        AI Image Recognition
      </h2>
      <h3 className="text-white text-xl text-center h-20">
      Unlock insights from your images with cutting-edge AI technology
      </h3>

      {/* Drag-and-drop area */}
      <div
        {...getRootProps()} // Attach drop zone props to the div
        className="border-2 focus:outline-offset-2 hover:bg-sky-200/20 border-dotted rounded border-gray-500 p-10 text-center cursor-pointer w-full md:w-1/2"
      >
        <input {...getInputProps()} />{" "}
        {/* Attach input props to the hidden file input */}
        <p className="text-white">Click to select an image</p>
      </div>

      {/* Image preview */}
      {image && (
        <div className="image-preview text-blue-500 mb-4">
          <img
            src={image}
            alt="Uploaded"
            className="w-48 h-48 focus:outline-offset-2 object-cover"
          />
        </div>
      )}

      {/* Submit button */}
      <button
        onClick={handlesubmit}
        className="bg-blue-500 focus:outline-offset-2 hover:bg-sky-500 text-white p-2 rounded mt-4 hover:scale-105"
      >
        Submit for Recognition
      </button>

      {/* Recognition result */}
      {result && (
        <div className="result focus:outline-offset-2 hover:bg-sky-500 flex flex-col items-center mt-4">
          <h3 className="font-bold">Recognition result</h3>
          <p>{result.description}</p>
        </div>
      )}
    </div>
  );
}

export default Homepage;
