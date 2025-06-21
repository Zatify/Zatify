import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#18191b] text-white rounded-3xl m-4 h-auto overflow-hidden relative">
      {/* Background SVG - đặt absolute cho toàn bộ footer */}
      <img src="/svg/bg-opacity.svg" alt="bg" className="absolute top-[60%] inset-0 w-full h-full object-cover pointer-events-none select-none" style={{zIndex:0}} />
      {/* Top Section */}
      <div className="flex flex-col items-center md:flex-row justify-between gap-0 px-10 py-14 max-w-7xl h-auto 0.5xl:h-[90vh] mx-auto relative z-10">
        {/* Left: Contact Info */}
        <div className="flex-1 min-w-[320px]">
          <h2 className="text-4xl md:text-6xl leading-tight mb-4 font-roboto">
            We are always ready<br />to help you and<br />answer your<br />questions
          </h2>
          <p className="text-[16px] mt-10 text-white mb-8 max-w-md font-manrope">
            Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling sleeper.
          </p>
          <div className="grid grid-cols-2 gap-y-6 gap-x-10 text-sm max-w-lg mt-16">
            <div>
              <h3 className="font-manrope font-semibold text-[17px] mb-2">Call Center</h3>
              <div className="text-[15px] mt-6 font-manrope mb-4">
                <p>0389 603 339</p>
                <p>0919 676 808</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold font-manrope mb-2 text-[17px]">Our Location</h3>
              <div className="text-[15px] mt-6 font-manrope mb-4">
                <p>1015/32 đường Huỳnh Tấn Phát, phường Phú Thuận Quận 7, TP.HCM</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold font-manrope mb-2 text-[17px]">Email</h3>
              <div className="text-[15px] mt-6 font-manrope mb-4">
                <a href="mailto:aiero@mail.co" className="underline hover:text-cyan-400 transition">Sales@zatify.com.vn</a>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="flex-1 flex h-[600px] justify-center max-w-2xl">
          <div className="bg-white rounded-2xl p-8 md:p-10 w-full max-w-lg shadow-lg">
            <h3 className="font-bold text-lg mb-6 text-gray-900">Get in Touch</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full border h-[200px] border-gray-300 rounded-md px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <div className="gradient-border rounded-md inline-block p-[1px]">
                <button className="justify-center text-sm text-black bg-white rounded-[0.65rem] px-4 py-2 hover:bg-gray-100 transition flex items-center gap-1 w-[160px] h-[50px]">
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Middle Section: Slogan */}
      <div className="max-w-7xl border-b border-gray-300 h-[30vh] mx-4 0.5xl:mx-auto flex flex-col 0.5xl:flex-row items-start 0.5xl:items-center justify-around 0.5xl:justify-between relative z-10">
        <div className="text-4xl md:text-7xl mb-2 bg-gradient-to-r from-cyan-300  to-blue-500 text-transparent bg-clip-text select-none font-roboto">
          It’s blow your mind!<br />Meet Neural Networks
        </div>
        <div className="gradient-border rounded-md inline-block p-[1px]">
          <button className="justify-center text-sm text-white bg-[#18191b] rounded-[0.65rem] px-4 py-2 hover:bg-gray-100 transition flex items-center gap-1 w-[160px] h-[50px]">
            Get a Quote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="rounded-t-3xl h-auto 0.5xl:h-[50vh] items-center overflow-hidden max-w-7xl mx-auto px-10 py-10 flex flex-col md:flex-row justify-between items-start gap-10 relative z-10">
        {/* Left: Logo, social, since, copyright */}
        <div className="flex-1 min-w-[260px] relative z-10 flex flex-col items-start justify-start">
          <div className="font-bold text-2xl tracking-wide mb-2 mt-2">AIERO</div>
          {/* Social icons nếu cần */}
          <div className="text-[14vw] 0.5xl:text-[7vw] font-bold  text-transparent bg-clip-text mb-6 select-none leading-none whitespace-nowrap" style={{WebkitTextStroke:'2px #5f5fff', color:'transparent'}}>since 2024</div>
          <p className="text-xs text-gray-300 mb-4"><span className="text-cyan-200">©<a href="#" className="underline">Aiero</a> 2025.</span> All rights reserved.</p>
        </div>
        {/* Right: Menus and links */}
        <div className="flex-1 flex flex-col md:flex-row justify-end gap-20 text-sm relative z-10 mt-8 md:mt-0">
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
        </div>
        {/* Bottom links */}
        <div className="absolute bottom-4 right-10 text-xs text-gray-300 z-10">
          <a href="#" className="hover:underline mr-2">Terms of use</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
