import React from "react";

function HomePage() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ISL Translator</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Bridging Communication Through Indian Sign Language
          </h2>
          <p className="text-lg mb-8">
            A revolutionary platform to translate Indian Sign Language into text
            with real-time accuracy.
          </p>
          <a
            href="#features"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded">
              <h4 className="text-xl font-bold mb-2">Real-Time Translation</h4>
              <p>
                Translate live videos or pre-recorded ISL videos into accurate
                text instantly.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded">
              <h4 className="text-xl font-bold mb-2">Facial Recognition</h4>
              <p>
                Advanced detection of facial expressions and gestures for
                enhanced context.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded">
              <h4 className="text-xl font-bold mb-2">Learning Courses</h4>
              <p>
                Personalized ISL courses for beginners and advanced learners
                alike.
              </p>
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
          <p>© 2025 ISL Translator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
