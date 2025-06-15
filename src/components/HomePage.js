import React from 'react';

const HomePage = () => {
  return (
    <div className="w-full min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-56 px-2 sm:px-4 md:px-6 xl:px-6 pb-6 mx-auto w-full bg-gray-100 rounded-bl-3xl rounded-br-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-[#bcaaff] via-[#7ec8e3] to-[#a0c4ff] opacity-20 rounded-bl-3xl rounded-br-3xl pointer-events-none"></div>
        <div className="relative flex flex-col justify-center xl:flex-row md:flex-row sm:flex-col w-full">
          {/* Left: Title */}
          <div className="2xl:w-[50%] xl:w-[55%] md:w-[50%] sm:w-full flex flex-col justify-start xl:justify-center md:justify-center sm:justify-start">
            <h1 className="text-5xl sm:text-6xl w-auto 2xl:text-8xl xl:text-7xl  leading-tight text-black mb-2 xl:mb-0 md:mb-1 sm:mb-2 md:ml-8 font-roboto font-light" style={{ lineHeight: 1.08 }}>
              Kinh doanh vượt trội
              trong thời đại số với
              <span className="block text-6xl xl:text-8xl md:text-7xl sm:text-5xl font-light bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent mt-2 font-roboto">
                ZALO ZNS
              </span>
            </h1>
          </div>
          {/* Right: Description & CTA */}
          <div className="xl:w-[30%] md:w-[40%] sm:w-full flex flex-col items-center justify-start xl:justify-center md:justify-center sm:justify-start mt-6 xl:mt-0 md:mt-2 sm:mt-4">
            <div className="flex flex-col items-start bg-opacity-80 p-6 xl:p-8 md:p-6 sm:p-4 max-w-md w-full xl:w-auto md:w-full sm:w-full">
              <p className="mb-6 sm:text-[16px] text-[14px]  text-gray-700 text-base text-left font-manrope">
                Giải pháp tin nhắn chăm sóc khách hàng tự động một cách tiết kiệm và hiệu quả
              </p>
              <button className="bg-red-400 hover:bg-red-300 text-white font-semibold py-3 px-7 rounded-lg shadow-md transition flex items-center gap-2 text-base float-right font-manrope sm:text-[16px] text-[14px]">
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
        <div className="relative mt-16 rounded-[32px] overflow-hidden bg-gradient-to-r from-[#bcaaff] via-[#7ec8e3] to-[#a0c4ff] h-[320px] xl:h-[600px] md:h-[480px] sm:h-[360px] flex items-end px-0 xl:px-10 md:px-6 sm:px-4 py-0 xl:py-8 md:py-6 sm:py-4 w-full">
          <span className="absolute left-10 bottom-10 text-white text-[120px] sm:text-[180px] md:text-[220px] xl:text-[260px] font-extrabold leading-none select-none opacity-90 z-10 font-roboto" style={{ letterSpacing: '-0.04em' }}>
            Zatify
          </span>
          <div className="absolute right-0 bottom-0 flex flex-col items-end z-20">
            <div className="text-white text-xs text-right mb-2 mr-6 opacity-80">
              Bước đột phá trong việc CSKH cho doanh nghiệp
            </div>
            <button
              className="flex items-center opacity-75 gap-2 bg-gray-100  rounded-tl-3xl px-24 py-10 shadow-md text-black font-medium text-base hover:bg-gray-100 transition"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="text-black"
              >
                <circle cx="9" cy="9" r="8" stroke="#E5E7EB" strokeWidth="1.5" />
                <polygon points="7,6 13,9 7,12" fill="black" />
              </svg>
              Xem video
            </button>
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
      <section className="relative mt-20 px-0 max-w-none w-full flex justify-center items-center min-h-[420px] bg-white overflow-hidden">
        <div className="absolute inset-0 w-[40%] bg-gradient-to-r from-[#bcaaff] via-[#fff] to-[#fff] opacity-5 rounded-bl-3xl rounded-br-3xl pointer-events-none"></div>
        {/* Pattern bên trái */}
        <div className="absolute left-0 top-0 h-full w-1/3 pointer-events-none select-none z-0 flex items-center">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            style={{ opacity: 0.18 }}
          >
            <defs>
              <linearGradient id="xGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#bcaaff" />
                <stop offset="100%" stopColor="#7ec8e3" />
              </linearGradient>
            </defs>
            {[
              { x: 20, y: 70, size: 90, opacity: 10 },
              { x: 110, y: 40, size: 70, opacity: 5 },
              { x: 60, y: 160, size: 100, opacity: 5 },
              { x: 180, y: 120, size: 80, opacity: 0.7 },
              { x: 80, y: 270, size: 110, opacity: 0.5 },
              { x: 210, y: 220, size: 85, opacity: 10 },
              { x: 30, y: 350, size: 95, opacity: 0.4 },
              { x: 160, y: 320, size: 75, opacity: 15 },
              { x: 260, y: 80, size: 60, opacity: 0.5 },
              { x: 320, y: 200, size: 100, opacity: 0.7 },
              { x: 300, y: 340, size: 80, opacity: 0.5 },
              { x: 220, y: 370, size: 60, opacity: 5 },
            ].map((item, idx) => (
              <text
                key={idx}
                x={item.x}
                y={item.y}
                fontSize={item.size}
                fontFamily="Arial, Helvetica, sans-serif"
                fontWeight="bold"
                fill="none"
                stroke="url(#xGradient)"
                strokeWidth="2"
                opacity={item.opacity}
              >
                X
              </text>
            ))}
          </svg>
        </div>
        {/* Nội dung chính */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] xl:text-[72px] font-light leading-tight text-center font-roboto mb-10 max-w-5xl">
            Khám phá các dịch vụ của Zatify ngay để nắm bắt được toàn bộ{' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-normal">
              Hệ sinh thái Zalo
            </span>
          </h2>
          {/* Logos */}
          <div className="flex flex-row items-center justify-center gap-12 mt-2 opacity-80">
            <img src="/logos/nd2.png" alt="ND2" className="h-10 grayscale" />
            <img src="/logos/metriks.png" alt="Metriks" className="h-10 grayscale" />
            <img src="/logos/quo.png" alt="Quo Legal Firm" className="h-10 grayscale" />
            <img src="/logos/mnmize.png" alt="Mnmize Interior" className="h-10 grayscale" />
          </div>
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
