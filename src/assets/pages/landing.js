import React from "react";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero text-white p-[250px] text-center h-screen">
        <h1 className="text-8xl font-bold mb-10">
          Welcome to AI Image Recognition
        </h1>
        <p className="text-xl mb-8">
          Leverage the power of Google Vision API and Cloudinary for image and
          live video recognition.
        </p>
        <button className="m-4 bg-blue-500 focus:outline-offset-2 hover:bg-sky-500 text-white p-2 rounded mt-4 hover:scale-105 px-8 ">
          Images
        </button>

        <button className="mx-4 bg-blue-500 focus:outline-offset-2 hover:bg-sky-500 text-white p-2 rounded mt-4 hover:scale-105 px-8 ">
          Video
        </button>
        <motion.div
          className="flex flex-col justify-center items-center mt-20"
          animate={{
            opacity: [0.2, 1, 0.2],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-10 bg-white opacity-70"></div>
          <div className="text-white text-sm mt-2">Scroll Down</div>
        </motion.div>
      </section>

      {/* Information Section */}
      <section className="info-section  bg-gray-200 p-20">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">
          How it Works
        </h2>
        <p className="text-lg mb-6 flex justify-center">
          By using Google Vision API and Cloudinary, you can easily upload and
          recognize images. The process is secure and private, ensuring that
          your data is handled with the utmost care.
        </p>
        <h3 className="text-2xl font-semibold mb-4 flex justify-center ">
          Live AI Video Recognition
        </h3>
        <p className="text-lg flex justify-center">
          Additionally, our live AI video recognition system allows you to get
          real-time analysis of videos directly from your camera feed. Whether
          it's a live video stream or pre-recorded, the AI will process and
          analyze the content seamlessly.
        </p>
      </section>

      {/* Usage Section */}
      <section className="usage-section bg-gray-200 h-[500px] items-cente">
        <h2 className="text-3xl font-bold mb-6 flex justify-center ">
          How to Use
        </h2>
        <p className="text-lg mb-6 flex justify-center border-2 ">
          simple drag-and-drop interface or use the live video recognition
          feature. Once you upload the image or start the live video feed, the
          AI will process it and provide insights.
        </p>
        <h3 className="text-2xl font-semibold mb-4 flex justify-center ">
          Privacy Guaranteed
        </h3>
        <p className="text-lg flex justify-center ">
          All data is securely handled and stored in compliance with privacy
          policies. Your images and videos will not be used for anything other
          than recognition purposes.
        </p>
      </section>
      <footer class="bg-white rounded-lg shadow-sm  dark:bg-gray-800 h-[100px] ">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="" class="hover:underline">
              Project™
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
