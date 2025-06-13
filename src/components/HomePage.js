import React from 'react';

const HomePage = () => {
  return (
    <div className="w-full min-h-screen font-sans">
      {/* Hero Section */}
      <section className=" pt-56 px-2 md:px-6 pb-6  mx-auto w-full bg-gray-100 rounded-bl-3xl rounded-br-3xl">
        <div className="flex flex-col justify-center  md:flex-row w-full">
          {/* Left: Title */}
          <div className="md:w-[50%] flex flex-col justify-start md:justify-center">
            <h1 className="text-6xl md:text-8xl leading-tight text-black mb-2 md:mb-0 font-roboto font-light" style={{ lineHeight: 1.08 }}>
              Kinh doanh vượt trội
              trong thời đại số với
              <span className="block text-6xl md:text-8xl font-light bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent mt-2 font-roboto">
                ZALO ZNS
              </span>
            </h1>
          </div>
          {/* Right: Description & CTA */}
          <div className="md:w-[30%] flex flex-col items-center justify-start md:justify-center mt-6 md:mt-0">
            <div className=" flex flex-col items-start bg-opacity-80 p-6 md:p-8 max-w-md w-full md:w-auto">
              <p className="mb-6 text-gray-700 text-base text-left font-manrope">
                Giải pháp tin nhắn chăm sóc khách hàng tự động một cách tiết kiệm và hiệu quả
              </p>
              <button className="bg-red-400 hover:bg-red-300 text-white font-semibold py-3 px-7 rounded-lg shadow-md transition flex items-center gap-2 text-base float-right font-manrope">
                Khám phá ngay
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
        </div>
        {/* Banner */}
        <div className="relative mt-16 rounded-[32px] overflow-hidden bg-gradient-to-r from-[#bcaaff] via-[#7ec8e3] to-[#a0c4ff] h-[320px] md:h-[600px] flex items-end px-0 md:px-10 py-0 md:py-8 w-full">
          <span className="absolute left-10 bottom-10 text-white text-[70px] md:text-[120px] font-extrabold leading-none select-none opacity-90 z-10" style={{ letterSpacing: '-0.04em' }}>
            Zatify
          </span>
          <div className="absolute bottom-8 right-10 flex flex-col items-end z-20">
            <div className="text-white text-xs text-left leading-snug mb-3 opacity-90">
              Bước đột phá
              trong việc
              CSKH cho 
              doanh nghiệp
            </div>
            <div className="bg-white bg-opacity-80 rounded-full px-5 py-2 flex items-center gap-2 cursor-pointer hover:bg-opacity-100 transition shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.518-3.75A1 1 0 007 8.25v7.5a1 1 0 001.234.97l6.518-1.87a1 1 0 000-1.82z" />
              </svg>
              <span className="text-sm text-black font-medium">Xem video</span>
            </div>
          </div>
          {/* Hiệu ứng dots */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg width="100%" height="100%">
              <g opacity="0.25">
                {Array.from({ length: 8 }).map((_, row) =>
                  Array.from({ length: 16 }).map((_, col) => (
                    <circle
                      key={row + '-' + col}
                      cx={60 + col * 18}
                      cy={60 + row * 18}
                      r="2"
                      fill="white"
                    />
                  ))
                )}
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Explore Services Section */}
      <section className="mt-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold max-w-3xl leading-snug">
          Khám phá các dịch vụ của Zatify ngay để nắm bắt được toàn bộ{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400">
            Hệ sinh thái Zalo
          </span>
        </h2>
        {/* Logos */}
        <div className="mt-8 flex flex-wrap items-center gap-8 opacity-50">
          <img src="/logos/nd2.png" alt="ND2" className="h-10" />
          <img src="/logos/metriks.png" alt="Metriks" className="h-10" />
          <img src="/logos/quo.png" alt="Quo Legal Firm" className="h-10" />
          <img src="/logos/mnmize.png" alt="Mnmize Interior" className="h-10" />
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="mt-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Các dịch vụ của Zatify</h3>
          <button className="text-sm border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition flex items-center gap-1">
            Khám phá thêm
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <div className="h-48 bg-gradient-to-r from-teal-400 to-blue-600"></div>
            <div className="p-4 bg-white">
              <h4 className="font-semibold text-white bg-gradient-to-r from-teal-400 to-blue-600 p-2 rounded-md mb-2">
                Zalo Official Account - ZOA
              </h4>
              <p className="text-sm text-gray-600">
                Dịch vụ gửi thông báo chăm sóc khách hàng đến số điện thoại khách hàng trên Zalo
              </p>
            </div>
            <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 rounded-full p-2 group-hover:bg-opacity-90 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer group relative bg-purple-300">
            <div className="h-48 bg-purple-400 bg-opacity-70"></div>
            <div className="p-4">
              <h4 className="font-semibold text-white mb-2">Zalo Notification Service ZNS</h4>
              <p className="text-sm text-white">
                Tài khoản chính thức của doanh nghiệp trên nền tảng Zalo, giúp doanh nghiệp kết nối và tương tác với người dùng Zalo
              </p>
            </div>
            <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 rounded-full p-2 group-hover:bg-opacity-90 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer group relative bg-gradient-to-r from-blue-100 to-blue-300">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 bg-opacity-70"></div>
            <div className="p-4">
              <h4 className="font-semibold mb-2">Zalo Ads</h4>
              <p className="text-sm">
                <strong>Zalo Mini App</strong> <br />
                Những App nhỏ chạy trực tiếp trên nền tảng Zalo, một giải pháp hiệu quả dành cho doanh nghiệp.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 rounded-full p-2 group-hover:bg-opacity-90 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
