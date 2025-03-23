import React, { useState } from "react";

function Homepage() {
  const [image, setImage] = useState(1);
  const [result, setResult] = useState(1);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handlesubmit = async () => {
    const response = await fetch("api/recognize-image", {
      mthod: "POST",
      body: image,
    });
    const data = await response.json();

    setResult(data);
  };

  return (
    <div classname="homepage p-6 justify-center items-center h-screen">
      <h2 classname="text-white text-x1 mb-4">
        Upload an Image for AI recongnition
      </h2>

      <input type="file" onChange={handleImageUpload} classname="mb-4 " />

      <div className="image-preview mb-4">
        {image && (
          <img src={image} alt="Uploaded" className="w-48 h-48 object-cover" />
        )}
      </div>
      <button
        onClick={handlesubmit}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Submit for Recongnition
      </button>

      {result && (
        <div className=" result mb-4">
          <h3>Recongnition result</h3>
          <p> {result.descripton}</p>
        </div>
      )}
    </div>
  );
}
export default Homepage;
