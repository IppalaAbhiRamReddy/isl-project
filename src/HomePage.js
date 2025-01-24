import React from "react";


function HomePage() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/Logo.jpg" // Path to your logo image
              alt="Logo"
              className="w-8 h-8"
            />
            <h1 className="text-2xl font-bold">Signify</h1>
          </div>
          <nav className="flex space-x-4">
            <button className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
              Home
            </button>
            <button className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
              About us
            </button >
            <a href="/isl-translation">
            <button  className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-500" >
              ISL Translation
             </button> </a>
            <button className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
              Courses & Learning
            </button>
            <button className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
              Community
            </button>
            <button className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
              Contact Us
            </button>
            <a
              href="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
            >
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left Half - Text */}
          <div className="w-full md:w-1/2 pr-8">
            <h2 className="text-4xl font-bold mb-4">
              Bridging Communication Through Indian Sign Language
            </h2>
            <p className="text-lg mb-8">
              The real-time translation of Indian Sign Language (ISL) gestures, expressions into text is a revolutionary ACTING for bridging the communication gap between the hearing and speech-impaired (DEAF) communities and the rest of the world. This innovative technology leverages advanced artificial intelligence and computer vision techniques to interpret the gestures and convert them into text instantly. As technology evolves, the system can integrate voice-to-text translation, multilingual support, and enhanced machine learning models for increased accuracy. This initiative paves the way for a more inclusive society where connection is no longer a barrier.
            </p>
          </div>
          
          {/* Right Half - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/sign_language image .jpg" // Path to your image
              alt="ISL Communication"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded h-[500px] flex flex-col justify-between">
              <img
                src="/realtime.jpg"
                alt="Real-Time Translation"
                className="w-full h-[250px] object-cover rounded mb-4"
              />
              <div className="flex flex-col items-center justify-center bg-white bg-opacity-50 py-4 rounded">
                <h4 className="text-xl font-bold text-black mb-0">Real-Time Translation</h4>
                <p className="text-center text-black mb-4">
                  Translate live videos or pre-recorded ISL videos into accurate
                  text instantly.
                </p>
                <a href="/isl-translation">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500">
                  Translate
                </button> </a>
              </div>
            </div>
            <div className="bg-white p-6 shadow-md rounded h-[500px] flex flex-col justify-between">
              <img
                src="/certificate.jpg"
                alt="Certification"
                className="w-full h-[250px] object-cover rounded mb-4"
              />
              <div className="flex flex-col items-center justify-center bg-white bg-opacity-50 py-4 rounded">
                <h4 className="text-xl font-bold text-black mb-0">Learning Path</h4>
                <p className="text-center text-black mb-4">
                  Learn ISL at your own pace with curated lessons.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500">
                  Learn
                </button>
              </div>
            </div>
            <div className="bg-white p-6 shadow-md rounded h-[500px] flex flex-col justify-between">
              <img
                src="/community.jpg"
                alt="Community"
                className="w-full h-[250px] object-cover rounded mb-4"
              />
              <div className="flex flex-col items-center justify-center bg-white bg-opacity-50 py-4 rounded">
                <h4 className="text-xl font-bold text-black mb-0">Community</h4>
                <p className="text-center text-black mb-4">
                  Join a vibrant community of Learners,Mentors and Advocates.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
    </div>
  );
}

export default HomePage;