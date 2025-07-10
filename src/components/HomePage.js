import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useMenu } from '../contexts/MenuContext'; // Thêm dòng này gần useNavigate

const HomePage = () => {
  // State để lưu index của thẻ details đang mở
  const [openDetail, setOpenDetail] = useState(null);
  const contentRefs = React.useRef([]); // Ref array for content divs
  const navigate = useNavigate();
  const { setActiveIndex } = useMenu(); // Thêm dòng này gần useNavigate

  // Danh sách câu hỏi/đáp án FAQ
  const faqList = [
    {
      question: "What is Artificial Intelligence?",
      answer: "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.",
    },
    {
      question: "How does Machine Learning relate to Artificial Intelligence?",
      answer: "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.",
    },
    {
      question: "Is Artificial Intelligence replacing human jobs?",
      answer: "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.",
    },
    {
      question: "What are the different types of Artificial Intelligence?",
      answer: "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.",
    },
  ];

  // Helper to get content height
  const getContentHeight = idx => {
    const el = contentRefs.current[idx];
    // Nếu đang mở thì lấy scrollHeight, nếu không thì trả về 0
    return el ? el.scrollHeight : 0;
  };

  // Đảm bảo luôn có hiệu ứng khi mở lại detail
  React.useEffect(() => {
    if (openDetail !== null && contentRefs.current[openDetail]) {
      const el = contentRefs.current[openDetail];
      // Đặt maxHeight về 0 trước khi mở lại để trigger transition
      el.style.transition = 'none';
      el.style.maxHeight = '0px';
      // Bắt buộc browser reflow
      void el.offsetHeight;
      el.style.transition =
        'max-height 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)';
      el.style.maxHeight = el.scrollHeight + 'px';
    }
  }, [openDetail]);

  return (
    <div className="w-full min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-56 px-2 sm:px-4 md:px-6 xl:px-6 pb-6 mx-auto w-full bg-gray-100 rounded-bl-3xl rounded-br-3xl">
        <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-40 rounded-bl-3xl rounded-br-3xl pointer-events-none" />
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
            <div className="text-white  text-sm text-left 0.5xl:mr-10 mr-2 opacity-80 w-28 0.5xl:w-40">
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
      <section className="relative mt-24 px-0 max-w-none w-full flex justify-center items-center min-h-[420px] h-[70vh] bg-white overflow-hidden">
        <div className="absolute inset-0 w-[0%] 0.5xl:w-[18%]  bg-gradient-to-r from-[#bcaaff] via-[#a0c4ff] to-[#fff] opacity-10 pointer-events-none"></div>
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
      <section className="mt-32 px-6 max-w-full mx-auto mb-20">
        <div className="flex flex-col sm:flex-row 0.5xl:w-[77%] justify-between items-start mb-6 mx-auto">
          <h3 className="text-3xl 0.5xl:text-7xl font-light font-roboto">Các dịch vụ của Zatify</h3>
            <div className="rounded-md inline-block p-[1px]">
              <button className="justify-center text-sm bg-white border border-[#a689fa] rounded-[0.65rem] px-4 py-2 text-black transition flex items-center gap-1 w-[160px] h-[50px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white"
                onClick={() => {
                  setActiveIndex(2); // 2 là index của "DỊCH VỤ"
                  navigate('/service');
                }}
              >
                Khám phá thêm<span className="ml-1">→</span>
              </button>
            </div>

        </div>
        <div className=" flex flex-col 0.5xl:flex-row justify-center gap-6 ">
          {/* Card 1 */}
          <div className="md:col-span-2 rounded-3xl md:row-span-2 bg-gradient-to-br from-cyan-300 via-cyan-500 to-cyan-700 col-span-full relative 0.5xl:h-[568px] h-[378px] w-[456px]">
            <div
              className="rounded-3xl overflow-hidden cursor-pointer group bg-cover bg-center h-full"
              style={{ backgroundImage: "url('https://demo.artureanec.com/themes/aiero/wp-content/uploads/2024/12/sphere_4-1-min.png ')" }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-end rounded-3xl">
                <h4 className="text-white text-xl font-semibold mb-2">Zalo Official Account - ZOA</h4>
                <p className="text-white text-sm w-[90%] mb-8">
                  Dịch vụ gửi thông báo chăm sóc khách hàng đến số điện thoại khách hàng trên Zalo
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 bg-white p-2 pb-0 rounded-tl-3xl rounded-br-[16px]">
              {/* Circle div top-right */}
              <div className="absolute top-[-16px] right-0 w-4 h-4 bg-white mask-rounded-hole-card"></div>

              {/* Circle div bottom-left */}
              <div className="absolute bottom-0 left-[-16px] w-4 h-4 bg-white mask-rounded-hole-card"></div>

              <div className="bg-black rounded-[18px] p-2 hover:bg-gray-700 transition cursor-pointer" onClick={() => {
                window.scrollTo(0, 0);
                navigate('/service-single');
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-2 md:row-span-2 col-span-full rounded-3xl rounded-br-[0px]  overflow-hidden relative cursor-pointer group bg-[#ad8de0] p-6 flex flex-col justify-between 0.5xl:h-[568px] h-[378px] w-[456px]">
            <div>
              <h4 className="text-white text-xl font-semibold mb-4">Zalo Notification Service ZNS</h4>
              <p className="text-white text-sm mb-4">
                Tài khoản chính thức của doanh nghiệp trên nền tảng Zalo, giúp doanh nghiệp kết nối và tương tác với người dùng Zalo
              </p>
            </div>
            <div className="absolute bottom-0 right-0 bg-white p-2 pb-0 rounded-tl-3xl rounded-br-0]">
              {/* Circle div top-right */}
              <div className="absolute top-[-16px] right-0 w-4 h-4 bg-white mask-rounded-hole-card"></div>

              {/* Circle div bottom-left */}
              <div className="absolute bottom-0 left-[-16px] w-4 h-4 bg-white mask-rounded-hole-card"></div>

              <div className="bg-black rounded-[18px] p-2 hover:bg-gray-700 transition cursor-pointer" onClick={() => {
                window.scrollTo(0, 0);
                navigate('/service-single');
              }}>
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
                opacity="0.8" />
            </svg>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-2 md:row-span-1 col-span-full gap-4 rounded-3xl rounded-br-[0px] overflow-hidden relative cursor-pointer group flex flex-col h-[568px] w-[456px]">
            {/* Top part */}
            <div className="bg-blue-50 rounded-3xl p-6 relative flex-[0.3] flex items-center justify-center">
              <h4 className=" text-black text-xl font-semibold mb-2 absolute left-20 top-4 -translate-x-1/2">Zalo Ads</h4>
              <img
                src="https://demo.artureanec.com/themes/aiero/wp-content/uploads/2024/12/Group-18418.png"
                alt="Zalo Ads"
                className="absolute top-0 right-0 max-h-32  w-auto object-contain "
              />
            </div>
            {/* Bottom part */}
            <div className=" rounded-3xl p-6 flex flex-col justify-between flex-[0.7] relative text-white">
              <div className="absolute inset-0 bg-gradient-to-r from-[#bcaaff] via-[#7ec8e3] to-[#a0c4ff] opacity-80 rounded-bl-3xl rounded-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <h4 className="text-xl font-semibold mb-2">Zalo Mini App</h4>
                <p>
                  Những App nhỏ chạy trực tiếp trên nền tảng Zalo, một giải pháp hiệu quả dành cho doanh nghiệp.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 bg-white p-2 pb-0 rounded-tl-3xl">
                {/* Circle div top-right */}
                <div className="absolute top-[-16px] right-0 w-4 h-4 bg-white mask-rounded-hole-card"></div>

                {/* Circle div bottom-left */}
                <div className="absolute bottom-0 left-[-16px] w-4 h-4 bg-white mask-rounded-hole-card"></div>

                <div className="bg-black rounded-[18px] p-2 hover:bg-gray-700 transition cursor-pointer" onClick={() => {
                  window.scrollTo(0, 0);
                  navigate('/service-single');
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <img
              src="https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/communication-care-366x206.jpg"
              alt="Background"
              className="absolute bottom-[0px] w-full h-[367px] object-cover rounded-3xl -z-10"
            />
          </div>
        </div>
      </section>
      <section className="labelrunning w-full h-[115px] overflow-hidden flex items-center relative">
        <div className="marquee flex whitespace-nowrap" style={{ animation: 'marquee 15s linear infinite' }}>
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-gray-800 font-roboto mx-8">
            / Neural Networks in shaping the future of technology.
          </span>
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-gray-800 font-roboto mx-8">
            / Neural Networks in shaping the future of technology.
          </span>
        </div>
      </section>


      {/* features Section */}

      <section className="relative 0.5xl:mt-20 flex-grow max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-48 rounded-bl-3xl rounded-br-3xl pointer-events-none opacity-60" />
        {/* Heading */}
        <h2 className="text-4xl sm:text-7xl max-w-fullbg-o leading-tight mb-16 font-roboto text-gray-800">
          The unique selling<br />
          points &amp; advantages<br />
          of our service
        </h2>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 gap-x-12">

          {/* Feature 1 */}
          <article className="flex flex-col items-start space-y-4 max-w-xs">
            <span className="material-icons-outlined text-indigo-500 text-4xl">integration_instructions</span>
            <h3 className="text-[20px] font-semibold font-manrope">AI Technology</h3>
            <p className="text-gray-600 leading-relaxed font-manrope">
              Emphasize the expertise and knowledge of your team in developing and implementing neural networks
            </p>
          </article>

          {/* Feature 2 */}
          <article className="flex flex-col items-start space-y-4 max-w-xs">
            <span className="material-icons-outlined text-indigo-500 text-4xl">grid_view</span>
            <h3 className="text-[20px] font-semibold font-manrope">Tailored solutions</h3>
            <p className="text-gray-600 leading-relaxed font-manrope">
              Mention your ability to customize solutions based on specific business requirements
            </p>
          </article>

          {/* Feature 3 */}
          <article className="flex flex-col items-start space-y-4 max-w-xs">
            <span className="material-icons-outlined text-indigo-500 text-4xl">smart_display</span>
            <h3 className="text-[20px] font-semibold font-manrope">Cutting-edge technology</h3>
            <p className="text-gray-600 leading-relaxed font-manrope">
              Highlight your use of the latest tools and techniques in neural network development
            </p>
          </article>

          {/* Feature 4 */}
          <article className="flex flex-col items-start space-y-4 max-w-xs">
            <span className="material-icons-outlined text-indigo-500 text-4xl">shield</span>
            <h3 className="text-[20px] font-semibold font-manrope">Modern development</h3>
            <p className="text-gray-600 leading-relaxed font-manrope">
              Showcase successful case studies or client testimonials that demonstrate the effectiveness of your services
            </p>
          </article>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-50 flex p-6 flex-col md:mt-24 md:flex-row gap-6 rounded-3xl h-auto overflow-hidden">
        {/* Left Card - Testimonial */}
        <div className="relative bg-[#1f1f1f] rounded-3xl text-gray-300 p-10 md:w-[60%] md:h-[790px] h-[472px] flex flex-col justify-around items-center">
          <div className='0.5xl:w-[80%] mb-10 0.5xl:mb-0'>
            <div className="text-4xl text-white ">❝</div>
            <p className="text-[18px] 0.5xl:text-2xl text-white leading-relaxed font-roboto">
              Working with Aiero has been a game-changer for our business. Their AI
              solutions have revolutionized our operations, enabling us to automate
              repetitive tasks and make data-driven decisions with ease. We couldn't
              be happier with the results."
            </p>
            <p className=" text-[14px] 0.5xl:text-[16px] w-[80%] font-manrope mt-10 0.5:mt-20">
              - John Anderson, CEO of XYZ Company
            </p>
          </div>
          {/* Arrows */}
          <div className="flex items-center gap-4 absolute bottom-0 left-[30%] 0.5xl:left-[20%] transform -translate-x-1/2 bg-white rounded-t-[32px] px-4 py-2">
            {/* Circle div bottom-right */}
            <div class="absolute bottom-[-4px] right-[-31px]  w-8 h-8 bg-white mask-rounded-hole-testimonial-right"></div>

            {/* Circle div bottom-left */}
            <div class="absolute bottom-[-4px] left-[-28px]  w-8 h-8 bg-white mask-rounded-hole-testimonial-left"></div>
            <button className="w-12 h-12 flex items-center justify-center rounded-l-[32px] rounded-r-none font-thin text-black text-[30px] bg-white hover:text-cyan-400">
              ←
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-r-[32px] rounded-l-none font-thin text-black text-[30px] bg-white hover:text-cyan-400">
              →
            </button>
          </div>
        </div>

        {/* Right Card - Overview */}
        <div className="text-white p-10 md:w-[40%] rounded-3xl md:h-[790px] h-[472px] flex flex-col justify-around"
          style={{ backgroundImage: "url('/svg/Testimonial.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h2 className="0.5xl:text-6xl text-4xl leading-snug mb-8 font-roboto">
            Discover what our clients have to say about our AI solutions
          </h2>
          <div>
            <p className="outlined-text mb-1">250+</p>
            <p className="text-lg text-white">Happy clients</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="  pt-32 pb-32 px-2 sm:px-4 md:px-6 xl:px-6 mx-6 0.5xl:mx-6 h-auto bg-gray-100 rounded-3xl rounded-br-3xl flex flex-col 0.5xl:flex-row justify-around items-start relative overflow-hidden">
        {/* left section */}
        <div className="relative 0.5xl:left-10 h-[200px] 0.5xl:h-[650px] flex-[0.3] mb-20 0.5xl:mb-0 w-auto sm:w-auto pointer-events-none select-none z-0 flex items-center">
          <img src="/svg/elements-X.png" alt="Pattern X" className="h-full w-full opacity-90" />
        </div>
        {/* right section  */}
        <div className="relative max-w-4xl w-full h-full flex-[0.7]">
          <h2 className="text-4xl 0.5xl:text-6xl font-light mb-10 font-roboto leading-tight">
            Everything you need <br /> to know about
          </h2>
          <div className="space-y-6">
            {faqList.map((faq, idx) => (
              <details
                key={idx}
                className="group border-b border-gray-300 pb-4 cursor-pointer"
                open={openDetail === idx}
                onClick={e => e.preventDefault()}
              >
                <summary
                  className="text-xl 0.5xl:text-2xl font-roboto list-none flex justify-between items-center"
                  onClick={e => {
                    e.preventDefault();
                    setOpenDetail(openDetail === idx ? null : idx);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {faq.question}
                  <span className="transition-transform duration-300 group-open:rotate-45 text-xl">+</span>
                </summary>
                <div
                  ref={el => {
                    contentRefs.current[idx] = el;
                  }}
                  style={{
                    overflow: 'hidden',
                    maxHeight: openDetail === idx ? getContentHeight(idx) + 'px' : '0px',
                    opacity: openDetail === idx ? 1 : 0,
                    transform: openDetail === idx ? 'translateY(0)' : 'translateY(-24px) scaleY(0.98)',
                    transition:
                      'max-height 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                    willChange: 'max-height, opacity, transform',
                  }}
                >
                  <p className="mt-3 text-gray-700 text-base leading-relaxed font=manrope">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
          <div className="mt-10">
            <div className="rounded-md inline-block p-[1px]">
              <button className="justify-center text-sm bg-gray-100 border border-[#a689fa] rounded-[0.65rem] px-4 py-2 text-black transition flex items-center gap-1 w-[160px] h-[50px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white">
                Explore more<span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full flex flex-col items-center mt-32 mb-24">
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
          <div className="flex flex-col 0.5xl:flex-row 0.5xl:justify-between ml-6 0.5xl:ml-0 justify-start items-start 0.5xl:items-center w-full mb-12">
            <div>
              <h2 className="mt-4 text-4xl sm:text-6xl font-roboto font-light leading-tight text-black">
                Exploring the world of<br />
                artificial intelligence<br />
                with Aiero blogging
              </h2>
            </div>
            <div className="rounded-md inline-block p-[1px]">
              <button className="justify-center text-sm bg-white border border-[#a689fa] rounded-[0.65rem] px-4 py-2 text-black transition flex items-center gap-1 w-[160px] h-[50px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white">
                More acticles<span className="ml-1">→</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col 0.5xl:flex-row gap-8 w-full justify-center">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-3xl shadow-md overflow-hidden w-full 0.5xl:w-[422px] 0.5xl:h-[557px] flex flex-col relative group">
              <div className="relative w-full flex-[0.55] overflow-hidden rounded-3xl">
                <img
                  src="https://8ded8880.delivery.rocketcdn.me/themes/aiero/wp-content/uploads/2024/12/autodrive-autonomous-vehicle-navigation-fi-640x478.jpg"
                  alt="AI Blog 1"
                  className="w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                  style={{ willChange: 'transform' }}
                />
                {/* Date and holes */}
                <div className="absolute left-1/3 bottom-0 -translate-x-1/2 flex items-end z-20">
                  <div className="relative w-8 h-8 left-1 top-1.5 bg-white mask-rounded-hole-testimonial-left"></div>
                  <div className="text-xs text-gray-500 w-40 h-12 flex justify-center items-center bg-white rounded-t-3xl z-50">
                    2 Jan 2025 / andrew
                  </div>
                  <div className="relative w-8 h-8 right-[1px] top-1.5 bg-white mask-rounded-hole-testimonial-right"></div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-[0.45] ml-2 0.5xl:ml-4">
                <h3 className="text-[22px] 0.5xl:text-[25px] mb-3 text-gray-900 font-roboto">How can I get started with Artificial Intelligence for my business?</h3>
                <div className="text-xs text-gray-400 mt-auto">/ AI Aiero / Technology /</div>
              </div>
            </div>
            {/* Blog Card 2 */}
            <div className="bg-white rounded-3xl shadow-md overflow-hidden w-full md:w-[422px] md:h-[557px] flex flex-col relative group">
              <div className="relative w-full flex-[0.55] overflow-hidden rounded-3xl">
                <img
                  src="https://8ded8880.delivery.rocketcdn.me/themes/aiero/wp-content/uploads/2024/12/robot-1-min-640x478.jpg"
                  alt="AI Blog 2"
                  className="w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                  style={{ willChange: 'transform' }}
                />
                {/* Date and holes */}
                <div className="absolute left-1/3 bottom-0 -translate-x-1/2 flex items-end z-20">
                  <div className="relative w-8 h-8 left-1 top-1.5 bg-white mask-rounded-hole-testimonial-left"></div>
                  <div className="text-xs text-gray-500 w-40 h-12 flex justify-center items-center bg-white rounded-t-3xl z-50">
                    25 Dec 2024 / andrew
                  </div>
                  <div className="relative w-8 h-8 right-[1px] top-1.5 bg-white mask-rounded-hole-testimonial-right"></div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-[0.45] ml-2 0.5xl:ml-4">
                <h3 className="text-[22px] 0.5xl:text-[25px] mb-3 text-gray-900 font-roboto">AI and Robotics: Advancing Automation and Human-Robot Collaboration</h3>
                <div className="text-xs text-gray-400 mt-auto">/ AI / Neural Networks /</div>
              </div>
            </div>
            {/* Blog Card 3 */}
            <div className="bg-white rounded-3xl shadow-md overflow-hidden w-full md:w-[422px] md:h-[557px] flex flex-col relative group">
              <div className="relative w-full flex-[0.55] overflow-hidden rounded-3xl">
                <img
                  src="https://8ded8880.delivery.rocketcdn.me/themes/aiero/wp-content/uploads/2024/12/is-artificial-intelligence-accessible-640x478.jpg"
                  alt="AI Blog 3"
                  className="w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                  style={{ willChange: 'transform' }}
                />
                {/* Date and holes */}
                <div className="absolute left-1/3 bottom-0 -translate-x-1/2 flex items-end z-20">
                  <div className="relative w-8 h-8 left-1 top-1.5 bg-white mask-rounded-hole-testimonial-left"></div>
                  <div className="text-xs text-gray-500 w-40 h-12 flex justify-center items-center bg-white rounded-t-3xl z-50">
                    25 Dec 2024 / andrew
                  </div>
                  <div className="relative w-8 h-8 right-[1px] top-1.5 bg-white mask-rounded-hole-testimonial-right"></div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-[0.45] ml-2 0.5xl:ml-4">
                <h3 className="text-[22px] 0.5xl:text-[25px] mb-3 text-gray-900 font-roboto">How Natural Language Processing is revolutionizing Text Analysis</h3>
                <div className="text-xs text-gray-400 mt-auto">/ AI Services / AI Solutions /</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
