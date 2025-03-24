import React, { useState } from "react";

function Homepage() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handlesubmit = async () => {
    const response = await fetch("api/recognize-image", {
      method: "POST",
      body: image,
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="homepage flex flex-col justify-center items-center min-h-screen p-6">
      <h2 className=" text-blue-500 text-4xl mb-10 text-center h-20">
        Upload an Image for AI recognition
      </h2>
      <h3 className="text-blue-500 text-xl mb-10 text-center h-20">
        See beyond the image
      </h3>

      <input
        classname="file"
        type="file"
        onChange={handleImageUpload}
        className="mb-4 file:bg-blue-500 file:font file:border-blue-500 file:border-0 file:text-white p-8 file:rounded-lg file:p-2 mt-4 border-dotted border-black border-2 rounded-lg"
      />

      {image && (
        <div className="image-preview mb-4">
          <img src={image} alt="Uploaded" className="w-48 h-48 object-cover" />
        </div>
      )}

      <button
        onClick={handlesubmit}
        className="bg-blue-500 text-white p-2 rounded mt-4"
      >
        Submit for Recognition
      </button>

      {result && (
        <div className="result flex flex-col items-center mt-4">
          <h3 className="font-bold">Recognition result</h3>
          <p>{result.description}</p>
        </div>
      )}
    </div>
  );
}

export default Homepage;
