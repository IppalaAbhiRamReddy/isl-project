import React, { useState, useRef } from "react";

const IslTranslation = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef(null);

  const startCamera = () => {
    setIsCameraActive(true);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error("Error accessing camera: ", err));
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600"
            >
              About Us
            </a>
            <a
              href="/isl-translation"
              className="text-gray-700 hover:text-blue-600"
            >
              ISL Translation
            </a>
            <a
              href="/courses"
              className="text-gray-700 hover:text-blue-600"
            >
              Courses & Learning
            </a>
            <a
              href="/community"
              className="text-gray-700 hover:text-blue-600"
            >
              Community
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600"
            >
              Contact Us
            </a>
          </div>
          <div className="logo">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10"
            />
          </div>
        </div>
      </header>

      {/* Body Section */}
      <main className="flex-grow container mx-auto py-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">ISL Translation</h1>
        </div>

        <div className="flex justify-center">
          {/* Big Rectangular Box */}
          <div
            className="border-2 border-gray-300 bg-gray-200 w-3/4 h-64 flex items-center justify-center"
          >
            {isCameraActive ? (
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                playsInline
              />
            ) : (
              <p className="text-gray-500">
                Click "Start Translation" to access the camera.
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={startCamera}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Start Translation
          </button>
          <button
            className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
          >
            Reset
          </button>
          <button
            className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
          >
            Save
          </button>
        </div>
        <section id="contact" className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
          <p className="mb-4">
            Have questions or want to collaborate? Reach out to us!
          </p>
          <a
            href="mailto:support@isltranslator.com"
            className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-500"
          >
            Email Us
          </a>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2025 Signify. All rights reserved.</p>
        </div>
      </footer>

      </main>
    </div>
    
  );
};

export default IslTranslation;
