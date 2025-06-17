import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const HomePage = () => {
  return (
    <div className="w-full min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-56 px-2 sm:px-4 md:px-6 xl:px-6 pb-6 mx-auto w-full bg-gray-100 rounded-bl-3xl rounded-br-3xl">
        <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-56 rounded-bl-3xl rounded-br-3xl pointer-events-none" />
        <div className="relative flex flex-col justify-center xl:flex-row md:flex-row sm:flex-col w-full">
          {/* Left: Title */}
          <div className="2xl:w-[50%] xl:w-[65%] md:w-[50%] sm:w-full flex flex-col justify-start xl:justify-center md:justify-center sm:justify-start">
            <h1 className="text-5xl sm:text-6xl w-auto 2xl:text-8xl xl:text-8xl  leading-tight text-black mb-2 xl:mb-0 md:mb-1 sm:mb-2 md:ml-8 font-roboto font-light" style={{ lineHeight: 1.08 }}>
              Kinh doanh vượt trội
              trong thời đại số với
              <span className="block text-6xl xl:text-8xl md:text-7xl sm:text-5xl font-light bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent mt-2 font-roboto">
                ZALO ZNS
              </span>
            </h1>
          </div>
          {/* Right: Description & CTA */}
          <div className="xl:w-[25%] md:w-[40%] sm:w-full flex flex-col items-center justify-start xl:justify-center md:justify-center sm:justify-start mt-6 xl:mt-0 md:mt-2 sm:mt-4">
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
            <div className="text-white mr-10 text-sm text-left mb-2 0.5xl:mr-10 mr-2 opacity-80 w-28 0.5xl:w-36">
              Bước đột phá trong việc CSKH cho doanh nghiệp
            </div>

            <button
              className="relative flex items-center gap-2 bg-gray-100 rounded-tl-3xl px-4 py-6 0.5xl:px-24 0.5xl:py-10 shadow-md text-black font-medium text-base hover:bg-gray-100 transition"
            >
              {/* Circle div top-right */}
              <div class="absolute top-[-32px] right-0 w-8 h-8 bg-gray-100 mask-rounded-hole"></div>

              {/* Circle div bottom-left */}
              <div class="absolute bottom-0 left-[-32px]  w-8 h-8 bg-gray-100 mask-rounded-hole"></div>
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
        <div className="absolute inset-0 w-[0%] 0.5xl:w-[18%]  bg-gradient-to-r from-[#bcaaff] via-[#a0c4ff] to-[#fff] opacity-30 pointer-events-none"></div>
        {/* Pattern bên trái */}
        <div className="absolute left-[-140px] top-0 h-full w-0 sm:w-auto pointer-events-none select-none z-0 flex items-center">
          <img src="/svg/elements-X.png" alt="Pattern X" className="h-full w-full opacity-90" />
        </div>
        {/* Nội dung chính */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <h2 className="text-5xl sm:text-6xl w-auto 2xl:text-8xl xl:text-8xl font-light leading-tight text-center font-roboto mb-10 max-w-5xl">
            Khám phá các dịch vụ của Zatify ngay để nắm bắt được toàn bộ{' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-normal">
              Hệ sinh thái Zalo
            </span>
          </h2>
          {/* Logos */}
          <div className="hidden sm:flex flex-row items-center justify-center gap-12 mt-2 opacity-80">
            {[
              { src: 'svg/logos/zalozns.jpg', alt: 'Zalo ZNS' },
              { src: 'svg/logos/zaloaccout.jpg', alt: 'Zalo Offical Account' },
              { src: 'svg/logos/zaloads.jpg', alt: 'Zalo ADS' },
              { src: 'svg/logos/miniapp.jpg', alt: 'Zalo Miniapp' },
            ].map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-20" />
            ))}
          </div>
              <div className="sm:hidden w-full">
                <div className="swiper-container-wrapper">
                  <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
                    loop={true}
                    className="w-full"
                  > 
                    {[ 
                      { src: 'svg/logos/zalozns.jpg', alt: 'Zalo ZNS' },
                      { src: 'svg/logos/zaloaccout.jpg', alt: 'Zalo Offical Account' },
                      { src: 'svg/logos/zaloads.jpg', alt: 'Zalo ADS' },
                      { src: 'svg/logos/miniapp.jpg', alt: 'Zalo Miniapp' },
                    ].map((logo) => (
                  <SwiperSlide key={logo.alt} className="flex justify-center items-center w-full">
                    <img src={logo.src} alt={logo.alt} className="h-20 mx-auto" />
                  </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="custom-swiper-pagination"></div>
                </div>
              </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="mt-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-light font-roboto">Các dịch vụ của Zatify</h3>
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
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Card 1 */}
          <div className="md:col-span-2 md:row-span-2 col-span-full relative h-[420px]">
            <div
              className="rounded-3xl overflow-hidden cursor-pointer group bg-cover bg-center h-full"
              style={{ backgroundImage: "url('/images/zaloofficalaccout.jpg')" }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-end rounded-3xl">
                <h4 className="text-white text-xl font-semibold mb-2">Zalo Official Account - ZOA</h4>
                <p className="text-white text-sm w-[90%] mb-8">
                  Dịch vụ gửi thông báo chăm sóc khách hàng đến số điện thoại khách hàng trên Zalo
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 bg-white p-2 pb-0 rounded-tl-[16px] rounded-br-[16px]">
              {/* Circle div top-right */}
              <div className="absolute top-[-16px] right-0 w-4 h-4 bg-white mask-rounded-hole-card"></div>

              {/* Circle div bottom-left */}
              <div className="absolute bottom-0 left-[-16px] w-4 h-4 bg-white mask-rounded-hole-card"></div>

              <div className="bg-black rounded-[16px] p-2 hover:bg-gray-700 transition cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-2 md:row-span-2 col-span-full rounded-3xl overflow-hidden relative cursor-pointer group bg-purple-400 p-6 flex flex-col justify-between h-[420px]">
            <div>
              <h4 className="text-white text-xl font-semibold mb-4">Zalo Notification Service ZNS</h4>
              <p className="text-white text-sm mb-4">
                Tài khoản chính thức của doanh nghiệp trên nền tảng Zalo, giúp doanh nghiệp kết nối và tương tác với người dùng Zalo
              </p>
            </div>
            <div className="absolute bottom-0 right-0 bg-white p-2 pb-0 rounded-tl-[16px] rounded-br-[16px]">
              {/* Circle div top-right */}
              <div className="absolute top-[-16px] right-0 w-4 h-4 bg-white mask-rounded-hole-card"></div>

              {/* Circle div bottom-left */}
              <div className="absolute bottom-0 left-[-16px] w-4 h-4 bg-white mask-rounded-hole-card"></div>

              <div className="bg-black rounded-[16px] p-2 hover:bg-gray-700 transition cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            {/* Replace globe SVG with dotted circles and 3 X letters */}
            <svg className="absolute bottom-6 left-2 w-72 h-40 opacity-80" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Dotted circles pattern */}
              <g opacity="0.6" fill="#FFFFFF">
                {Array.from({ length: 6 }).map((_, row) =>
                  Array.from({ length: 8 }).map((_, col) => (
                    <circle
                      key={row + '-' + col}
                      cx={10 + col * 18}
                      cy={10 + row * 18}
                      r="2"
                    />
                  ))
                )}
              </g>
              {/* 3 X letters replaced with image */}
              <image
                href="/svg/3x.png"
                x="0"
                y="40"
                width="140"
                height="80"
                opacity="0.8"/>
            </svg>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-2 md:row-span-1 col-span-full gap-4 rounded-3xl overflow-hidden relative cursor-pointer group flex flex-col h-[450px]">
            {/* Top part */}
            <div className="bg-blue-50 rounded-3xl p-6 relative flex-[0.3]">
              <svg
                className="absolute bottom-16 left-72 w-32 h-32 opacity-30"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" r="90" stroke="#7ec8e3" strokeWidth="2" />
                <circle cx="100" cy="100" r="75" stroke="#7ec8e3" strokeWidth="2" />
                <circle cx="100" cy="100" r="60" stroke="#7ec8e3" strokeWidth="2" />
                <circle cx="100" cy="100" r="45" stroke="#7ec8e3" strokeWidth="2" />
                <circle cx="100" cy="100" r="30" stroke="#7ec8e3" strokeWidth="2" />
                <circle cx="100" cy="100" r="15" stroke="#7ec8e3" strokeWidth="2" />
              </svg>
              <h4 className="text-black text-xl font-semibold mb-2">Zalo Ads</h4>
            </div>
            {/* Bottom part */}
            <div className=" rounded-3xl p-6 flex flex-col justify-between flex-[0.6] relative text-white">
              <div className="absolute inset-0 bg-gradient-to-r from-[#bcaaff] via-[#7ec8e3] to-[#a0c4ff] opacity-80 rounded-bl-3xl rounded-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <h4 className="text-xl font-semibold mb-2">Zalo Mini App</h4>
                <p>
                  Những App nhỏ chạy trực tiếp trên nền tảng Zalo, một giải pháp hiệu quả dành cho doanh nghiệp.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 bg-white p-2 pb-0 rounded-tl-[16px] rounded-br-[16px]">
                {/* Circle div top-right */}
                <div className="absolute top-[-16px] right-0 w-4 h-4 bg-white mask-rounded-hole-card"></div>

                {/* Circle div bottom-left */}
                <div className="absolute bottom-0 left-[-16px] w-4 h-4 bg-white mask-rounded-hole-card"></div>

                <div className="bg-black rounded-[16px] p-2 hover:bg-gray-700 transition cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <img
              src="https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/communication-care-366x206.jpg"
              alt="Background"
              className="absolute bottom-[34px] w-full h-[250px] object-cover rounded-3xl -z-10"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
