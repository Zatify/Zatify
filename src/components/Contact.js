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
                    <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal text-center mx-auto select-none" style={{ letterSpacing: 2 }}>Liên hệ</h1>
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
                        >Zatify</span>
                    </div>


                    {/* Breadcrumb */}
                    {/* Circle div bottom-right */}
                    <div className="absolute left-[255px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    {/* Circle div top-left */}
                    <div className="absolute left-[-1px] bottom-[69px]  w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    <div className="justify-center items-center w-64 h-20 absolute left-0 bottom-0 bg-white rounded-tr-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex flex-col shadow-md" style={{ minWidth: 220 }}>
                        <span className="text-sm mb-1">Trang chủ / Liên hệ</span>
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
          <h1 className="text-4xl md:text-7xl font-normal leading-tight max-w-xl mb-6 text-black whitespace-pre-line text-center md:text-left" style={{fontFamily: 'Inter, sans-serif'}}>
            {`Chúng tôi luôn
            sẵn sàng hỗ trợ
            và giải đáp mọi
            thắc mắc của bạn!`}
          </h1>
          <img alt="World map pattern made of small dots in light gray behind text" className="absolute left-0 bottom-0 -z-10 opacity-30 w-[520px] h-[220px] hidden md:block" height="220" src="https://storage.googleapis.com/a1aa/image/76ee56e8-6cc1-4f65-9e39-a413c576a794.jpg" width="520" />
          {/* Info grid dưới đoạn mô tả */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 mt-12 w-full max-w-3xl">
            <div>
              <p className="font-semibold text-lg mb-2 text-black">Hotline</p>
              <p className="text-base text-black mb-1">0389 603 339</p>
              <p className="text-base text-black">0919 676 808</p>
            </div>
            <div>
              <p className="font-semibold text-lg mb-2 text-black">Địa chỉ</p>
              <p className="text-base text-black mb-1">1015/32 đường Huỳnh Tấn Phát, phường Phú Thuận Quận 7, TP.HCM</p>
            </div>
            <div>
              <p className="font-semibold text-lg mb-2 text-black">Email</p>
              <a className="text-base text-black underline hover:text-blue-700" href="mailto:Sales@zatify.com.vn">Sales@zatify.com.vn</a>
            </div>
          </div>
        </div>
        {/* Contact form */}
          <div className=" flex h-[600px] 2xl:h-[650px] justify-center 2xl:min-w-[600px]">
            <div className="bg-white rounded-2xl p-8 md:p-10 w-full max-w-lg 2xl:max-w-xl shadow-lg">
              <h3 className="text-3xl md:text-4xl 2xl:text-5xl  leading-tight mb-4 font-roboto text-gray-900">Liên hệ ngay</h3>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Họ tên"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 2xl:px-6 lg:py-4 2xl:text-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 2xl:px-6 lg:py-4 2xl:text-lg"
                />
                <input
                  type="text"
                  placeholder="Tiêu đề"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 2xl:px-6 lg:py-4 2xl:text-lg"
                />
                <textarea
                  placeholder="Nội dung"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 2xl:px-6 lg:py-4 2xl:text-lg"
                />
                <div className="gradient-border rounded-md inline-block p-[1px]">
                  <button className="justify-center text-sm text-black bg-white rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                    Gửi mail ngay
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
