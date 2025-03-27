import React, { useState } from "react";
import { useDropzone } from "react-dropzone"; // Import useDropzone hook

function Videopage() {
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
        AI Video Recognition
      </h2>
      <h3 className="text-white text-xl text-center h-20">
        Use our Live Video AI Detection
      </h3>

      {/* Submit button */}
      <button
        onClick={handlesubmit}
        className="bg-blue-500 focus:outline-offset-2 hover:bg-sky-500 text-white p-2 rounded mt-4 hover:scale-105"
      >
        Start Live Video
      </button>
    </div>
  );
}

export default Videopage;
