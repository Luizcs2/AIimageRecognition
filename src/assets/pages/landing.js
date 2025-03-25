import React from "react";
import { motion } from "framer-motion";
import { Upload, Video, ShieldCheck, Zap } from "lucide-react";

function LandingPage() {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
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
      <section className="info-section bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            How It Works
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* API Integration Card */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Upload className="w-12 h-12 text-blue-500 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Image Recognition
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Leverage the power of Google Vision API and Cloudinary to
                effortlessly upload and recognize images. Our secure and private
                process ensures your data is handled with the utmost care and
                confidentiality.
              </p>
            </motion.div>

            {/* Video Recognition Card */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Video className="w-12 h-12 text-green-500 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Live Video Analysis
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI video recognition system provides real-time
                analysis directly from your camera feed. Whether it's a live
                stream or pre-recorded video, the AI processes and analyzes
                content seamlessly and intelligently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="usage-section bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            How to Use
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Usage Instructions Card */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Zap className="w-12 h-12 text-purple-500 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Easy Upload
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Use our intuitive drag-and-drop interface or live video
                recognition feature. Simply upload an image or start a video
                feed, and our AI will instantly process and provide insightful
                analysis.
              </p>
            </motion.div>

            {/* Privacy Card */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <ShieldCheck className="w-12 h-12 text-red-500 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Privacy First
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Your data privacy is our top priority. All uploads are securely
                handled and stored in strict compliance with privacy policies.
                Your images and videos are used solely for recognition purposes.
              </p>
            </motion.div>
          </div>
        </div>
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
