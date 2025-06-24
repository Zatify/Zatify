import React from "react";
import { Link } from "react-router-dom";
import Header from "../partials/Header";

const bannerImg = "https://storage.googleapis.com/a1aa/image/0e692277-3ada-4b9d-e3e2-3761f213b7ca.jpg";

const Contact = () => {
  return (
    <div>
            {/* Hero Section */}
            <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-0 rounded-bl-3xl rounded-br-3xl pointer-events-none" />

            <section className="relative p-4 top-36 w-full max-w-full mx-auto " style={{ zIndex: 1 }}>
                <div
                    className="relative rounded-3xl 0.5xl:rounded-tr-3xl 0.5xl:rounded-none w-full h-[280px] md:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden"
                    style={{
                        backgroundImage: 'url(svg/background/contact.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal text-center mx-auto select-none" style={{ letterSpacing: 2 }}>Contacts</h1>
                    {/* Vertical Neural text */}
                    <div className="absolute right-24 bottom-5 items-center hidden md:block">
                        <span
                            className="font-sans select-none"
                            style={{
                                writingMode: 'vertical-rl',
                                textOrientation: 'mixed',
                                fontSize: '90px',
                                fontWeight: 650,
                                color: 'transparent',
                                WebkitTextStroke: '1px #fff',
                                textStroke: '1px #fff',
                                letterSpacing: '1px',
                                lineHeight: 1,
                                transform: 'rotate(180deg)'
                            }}
                        >Contacts</span>
                    </div>


                    {/* Breadcrumb */}
                    {/* Circle div bottom-right */}
                    <div className="absolute left-[255px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    {/* Circle div top-left */}
                    <div className="absolute left-[-1px] bottom-[69px]  w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    <div className="justify-center items-center w-64 h-20 absolute left-0 bottom-0 bg-white rounded-tr-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex flex-col shadow-md" style={{ minWidth: 220 }}>
                        <span className="text-sm mb-1">Home / Contact</span>
                    </div>


                    {/* Decoration-tl */}

                    {/* Circle div top-right */}
                    <div className="hidden md:block absolute left-[95px] top-[-1px] w-8 h-8 bg-white mask-rounded-hole-service-tl z-50"></div>
                    {/* Circle div bottom-left */}
                    <div className="hidden md:block absolute left-[-1px] top-[63px]  w-8 h-8 bg-white mask-rounded-hole-service-tl z-50"></div>
                    <div className="hidden md:block justify-center items-center w-24 h-16 absolute left-0 top-0 bg-white rounded-br-3xl px-8 py-4 text-black text-base font-sans flex-col"></div>

                    {/* Decoration-br */}
                    {/* Circle div top-right */}
                    <div className="hidden md:block absolute right-[69px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-br z-50"></div>
                    {/* Circle div bottom-left */}
                    <div className="hidden md:block absolute right-[-11px] top-[231px]  w-8 h-8 bg-white mask-rounded-hole-service-br z-50"></div>
                    <div className="hidden md:block justify-center items-center h-72 w-20 absolute right-0 bottom-0 bg-white rounded-tl-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex-col shadow-md"></div>
                </div>
            </section>
      
      {/* Contact main content - thiết kế giống hình gửi */}
      <div className="max-w-[85rem] mx-auto flex flex-col md:flex-row mt-60 p-6 md:p-16 bg-white">
        {/* Left info panel */}
        <div className="md:w-1/2 flex flex-col justify-center relative pr-0 md:pr-20">
          <h1 className="text-4xl md:text-6xl font-normal leading-tight max-w-xl mb-6 text-black whitespace-pre-line text-center md:text-left" style={{fontFamily: 'Inter, sans-serif'}}>
            {`We are always ready
            to help you and
            answer your
            questions`}
          </h1>
          <p className="text-base max-w-xl mb-0 text-[#1a1a1a] font-normal">
            Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling sleeper.
          </p>
          <img alt="World map pattern made of small dots in light gray behind text" className="absolute left-0 bottom-0 -z-10 opacity-30 w-[520px] h-[220px] hidden md:block" height="220" src="https://storage.googleapis.com/a1aa/image/76ee56e8-6cc1-4f65-9e39-a413c576a794.jpg" width="520" />
          {/* Info grid dưới đoạn mô tả */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 mt-12 w-full max-w-3xl">
            <div>
              <p className="font-semibold text-lg mb-2 text-black">Call Center</p>
              <p className="text-base text-black mb-1">800 100 975 20 34</p>
              <p className="text-base text-black">+ (123) 1800-234-5678</p>
            </div>
            <div>
              <p className="font-semibold text-lg mb-2 text-black">Our Location</p>
              <p className="text-base text-black mb-1">USA, New York – 1060</p>
              <p className="text-base text-black">Str. First Avenue 1</p>
            </div>
            <div>
              <p className="font-semibold text-lg mb-2 text-black">Email</p>
              <a className="text-base text-black underline hover:text-blue-700" href="mailto:aiero@mail.co">aiero@mail.co</a>
            </div>
            <div>
              <p className="font-semibold text-lg mb-2 text-black">Social network</p>
              <div className="flex space-x-6 text-2xl mt-1">
                <a aria-label="Facebook" className="hover:text-blue-600 transition" href="#"><i className="fab fa-facebook-f"></i></a>
                <a aria-label="X" className="hover:text-black transition" href="#"><i className="fab fa-x-twitter"></i></a>
                <a aria-label="LinkedIn" className="hover:text-blue-700 transition" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a aria-label="YouTube" className="hover:text-red-600 transition" href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* Contact form */}
        <form aria-label="Get in Touch form" className="md:w-1/2 bg-[#f3f4f6] rounded-[2rem] p-12 max-w-xl w-full mt-12 md:mt-0 flex flex-col justify-center">
          <h2 className="font-bold text-2xl mb-8 text-[#1a1a1a]" style={{fontFamily: 'Inter, sans-serif'}}>Get in Touch</h2>
          <input className="w-full mb-6 px-6 py-4 rounded-2xl border border-gray-300 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Full name" required type="text" />
          <input className="w-full mb-6 px-6 py-4 rounded-2xl border border-gray-300 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Email" required type="email" />
          <input className="w-full mb-6 px-6 py-4 rounded-2xl border border-gray-300 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Subject" required type="text" />
          <textarea className="w-full mb-8 px-6 py-4 rounded-2xl border border-gray-300 text-base text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Message" required rows={5}></textarea>
              <div className="gradient-border w-[162px] h-[52px] rounded-md inline-block p-[1px]">
                <button className="justify-center text-sm text-black bg-white rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                  Expore more
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

      {/* Google Map section */}
      <div className="w-full mt-12 rounded-3xl overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1372.6841860427799!2d106.73252808026004!3d10.727188989844564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175250028a90abd%3A0x7ab6be6fa3f0b8fb!2zSOG6u20gMTAxNQ!5e0!3m2!1sen!2suk!4v1750444833758!5m2!1sen!2suk" 
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
