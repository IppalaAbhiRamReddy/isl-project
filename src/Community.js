import React from "react";

function CommunityPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-2">
            <img
              src="/Logo.jpg" // Replace with your logo path
              alt="Logo"
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold">Signify</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <a href="/isl-translation" className="hover:text-blue-600">
              ISL Translation
            </a>
            <a href="/about" className="hover:text-blue-600">
              About Us
            </a>
            <a href="/courses" className="hover:text-blue-600">
              Courses & Learning
            </a>
            <a href="/community" className="hover:text-blue-600">
              Community
            </a>
            <a href="/contact" className="hover:text-blue-600">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6">
        <h2 className="text-center text-3xl font-bold mb-12">
          Join the Conversation and Grow Together!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Panel */}
          <div className="bg-gray-300 h-64 rounded shadow flex items-center justify-center">
            {/* Placeholder for Content */}
          </div>
          {/* Right Panel */}
          <div className="bg-gray-300 h-64 rounded shadow flex items-center justify-center">
            {/* Placeholder for Content */}
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Ask any question ..."
              className="w-full px-4 py-2 border border-gray-400 rounded-l focus:outline-none"
            />
            <button className="absolute right-0 bg-gray-500 text-white px-6 py-2 rounded-r hover:bg-gray-600">
              →
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-600 py-4 mt-12">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/youtube-icon.png" alt="YouTube" className="w-6 h-6" />
            </a>
          </div>
          <p>© 2024 Copyright: VVIT MajorProject.com</p>
        </div>
      </footer>
    </div>
  );
}

export default CommunityPage;
