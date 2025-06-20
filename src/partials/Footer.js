import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white rounded-2xl m-4 -z-50">
      {/* Top Footer Section */}
      <div className="flex flex-col md:flex-row justify-between p-8 max-w-7xl mx-auto">
        {/* Left Side */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <p className="text-xs mb-2 text-gray-400">[ get in touch ]</p>
          <h2 className="text-4xl font-semibold leading-tight mb-4">
            We are always ready to help you and answer your questions
          </h2>
          <p className="text-sm text-gray-300 mb-8 max-w-md">
            Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling sleeper.
          </p>

          <div className="grid grid-cols-2 gap-8 max-w-md text-sm">
            <div>
              <h3 className="font-semibold mb-2">Call Center</h3>
              <p>800 100 975 20 34</p>
              <p>+ (123) 1800-234-5678</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Our Location</h3>
              <p>USA, New York - 1060</p>
              <p>Str. First Avenue 1</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:aiero@mail.co" className="underline hover:text-gray-400">
                aiero@mail.co
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Social network</h3>
              <div className="flex space-x-4 text-white">
                <a href="#" aria-label="Facebook" className="hover:text-gray-400">f</a>
                <a href="#" aria-label="X" className="hover:text-gray-400">X</a>
                <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">in</a>
                <a href="#" aria-label="YouTube" className="hover:text-gray-400">▶</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 bg-white rounded-2xl p-8 text-gray-900 shadow-lg max-w-md mx-auto md:mx-0">
          <h3 className="font-bold text-lg mb-6">Get in Touch</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-blue-400 rounded-md text-blue-700 hover:bg-blue-50 transition"
            >
              Send message
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-white rounded-t-3xl p-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Side */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="flex items-center space-x-6 mb-6">
            <div className="font-bold text-xl tracking-wide">AIERO</div>
            <div className="flex space-x-4 text-white text-lg">
              <a href="#" aria-label="Facebook" className="hover:text-gray-400">f</a>
              <a href="#" aria-label="X" className="hover:text-gray-400">X</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">in</a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-400">▶</a>
            </div>
          </div>
          <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-400 mb-6 select-none">
            since 2024
          </div>
          <p className="text-xs text-gray-400 mb-4">©Aiero 2025. All rights reserved.</p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-between text-sm">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Expertise</a></li>
              <li><a href="#" className="hover:underline">Sustainability</a></li>
              <li><a href="#" className="hover:underline">News & Media</a></li>
              <li><a href="#" className="hover:underline">Case Studies</a></li>
              <li><a href="#" className="hover:underline">Contacts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Air Freight</a></li>
              <li><a href="#" className="hover:underline">Sea Freight</a></li>
              <li><a href="#" className="hover:underline">Land Transport</a></li>
              <li><a href="#" className="hover:underline">Groupage</a></li>
              <li><a href="#" className="hover:underline">Consultancy</a></li>
              <li><a href="#" className="hover:underline">Value Added Services</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <button className="mb-4 px-4 py-2 border border-blue-600 rounded-md text-white hover:bg-blue-600 transition">
              Get a Quote
            </button>
            <div className="text-xs text-gray-400 space-x-2">
              <a href="#" className="hover:underline">Terms of use</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
