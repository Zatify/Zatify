import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from 'react-router-dom';
import { useMenu } from '../contexts/MenuContext'; // Thêm dòng này gần useNavigate


const useAnimateOnScroll = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && !hasAnimated.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          setAnimate(true);
          hasAnimated.current = true;
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return [ref, animate];
};

const HomePage = () => {
  // State để lưu index của thẻ details đang mở
  const [openDetail, setOpenDetail] = useState(null);
  const contentRefs = React.useRef([]); // Ref array for content divs
  const navigate = useNavigate();
  const { setActiveIndex } = useMenu(); // Thêm dòng này gần useNavigate




  // Thêm hiệu ứng cho heading "Ưu điểm của Zatify"
  const [h2Ref, animateH2] = useAnimateOnScroll();
  const [h3Ref, animateH3] = useAnimateOnScroll();
  const [h2Refcus, animateH2cus] = useAnimateOnScroll();
  const [h2Refpart, animateH2part] = useAnimateOnScroll();
  const [h2BlogRef, animateH2Blog] = useAnimateOnScroll();


  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote: "Dịch vụ hỗ trợ thật sự tuyệt vời! Phản hồi nhanh chóng, tận tình và giải quyết vấn đề rất chuyên nghiệp.",
      author: "Công ty Bạn uống tôi lái",
      logo: "/images/logokhachhang/about/client-05.png"
    },
    {
      id: 2,
      quote: "Hỗ trợ dịch vụ nhanh gọn và nhiệt tình! Mình rất ấn tượng với sự tận tâm và chuyên nghiệp của đội ngũ, giải quyết vấn đề cực kỳ hiệu quả!",
      author: "Bảo hiểm Phú hưng",
      logo: "/images/logokhachhang/about/client-26.png"
    },
    {
      id: 3,
      quote: "Dịch vụ không chỉ nhanh và tận tình mà giá cả còn tốt hơn mình mong đợi! Đội ngũ hỗ trợ chuyên nghiệp, mình rất hài lòng!",
      author: "Mgol",
      logo: "/images/logokhachhang/about/client-21.png"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Danh sách câu hỏi/đáp án FAQ
  const faqList = [
    {
      question: "Làm thế nào để đăng ký tài khoản Zatify?",
      answer: "Để bắt đầu sử dụng dịch vụ Zatify bạn cần truy cập vào app.zatify.com.vn, bấm Đăng ký sau đó nhập thông tin tài khoản chi tiết vào để tạo tài khoản.",
    },
    {
      question: "	Zalo Notification Service (ZNS) là gì?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Zalo Notification Service (ZNS) là giải pháp gửi thông báo từ Zalo Official Account (OA) của doanh nghiệp tới khách hàng trên nền tảng Zalo.
          </li>
          <li>
            Nâng cao hiệu quả tương tác với khả năng cá nhân hóa nội dung thông tin đa dạng và đẹp mắt.
          </li>
          <li>
            Tối ưu hóa vận hành với hệ thống kết nối hoàn toàn thông qua openAPI.
          </li>
          <li>
            Tiết kiệm chi phí với chính sách giá linh hoạt.
          </li>
        </ul>
      ),
    },
    {
      question: "	ZNS tính phí như thế nào?",
      answer: "ZNS tính phí dựa trên số lệnh được xử lý thành công trong khoảng thời gian cam kết. Nếu xử lý thất bại (thông báo ZNS không đến máy người nhận) hoặc xử lý thành công nhưng không nằm trong thời gian cam kết thì sẽ không tính phí.",
    },
    {
      question: "ZNS có thể gửi đến khách hàng không sử dụng Zalo hay không?",
      answer: "Không, ZNS chỉ được gửi đến nhóm khách hàng có sử dụng Zalo.",
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



  // Animated counter for "250+"
  const [clientCount, setClientCount] = useState(0);
  const overviewRef = useRef(null);
  const [overviewInView, setOverviewInView] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (overviewRef.current) {
        const rect = overviewRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          setOverviewInView(true);
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let frame;
    if (overviewInView && clientCount < 250) {
      frame = setInterval(() => {
        setClientCount(prev => {
          if (prev >= 250) {
            clearInterval(frame);
            return 250;
          }
          return prev + 5;
        });
      }, 12);
    }
    return () => clearInterval(frame);
  }, [overviewInView, clientCount]);

  return (
    <div className="w-full min-h-screen font-sans overflow-x-hidden">
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
              <button
                className="bg-red-400 hover:bg-red-300 text-white font-semibold py-3 px-7 rounded-lg shadow-md transition flex items-center gap-2 text-base float-right font-manrope sm:text-[16px] text-[14px]"
                onClick={() => {
                  setActiveIndex(2); // 2 là index của "DỊCH VỤ"
                  navigate('/service');
                }}
              >
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
        <div
          className="relative mt-16 rounded-[32px] overflow-hidden h-[320px] xl:h-[600px] md:h-[480px] sm:h-[360px] flex items-end px-0 xl:px-10 md:px-6 sm:px-4 py-0 xl:py-8 md:py-6 sm:py-4 w-full"
          style={{
            backgroundImage: "url('/images/homepage.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <span className="absolute left-10 bottom-[-42px] text-white text-[120px] sm:text-[180px] md:text-[240px] xl:text-[280px] font-extrabold leading-none select-none opacity-90 z-10 font-roboto" style={{ letterSpacing: '-0.04em' }}>
            Zatify
          </span>
          <div className="absolute right-0 bottom-0 flex flex-col items-end z-20">
            <div className="text-white                 
            text-sm
                xl:text-xl
                lg:text-lg
                md:text-base
                sm:text-sm
                text-left 0.5xl:mr-10 mr-2 opacity-80 w-28 xl:w-60">
              Bước đột phá trong việc CSKH cho doanh nghiệp
            </div>

            <button
              className="relative flex items-center gap-2 bg-gray-100 rounded-tl-3xl px-4 py-6 0.5xl:px-24 0.5xl:py-10 shadow-md text-black font-medium
                text-sm
                xl:text-xl
                lg:text-lg
                md:text-base
                sm:text-sm
                hover:bg-gray-100 transition"
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
      <section className="relative md:my-24 my-8 px-0 max-w-none w-full flex justify-center items-center min-h-[420px] h-[70vh] bg-white overflow-hidden">
        <div className="absolute inset-0 w-[0%] md:w-[18%]  bg-gradient-to-r from-[#bcaaff] via-[#a0c4ff] to-[#fff] opacity-10 pointer-events-none"></div>
        {/* Pattern bên trái */}
        <div className="absolute left-[-140px] hidden md:flex top-0 h-full w-0 sm:w-auto pointer-events-none select-none z-0 items-center">
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
          <div className="hidden md:flex flex-row items-center justify-center gap-4 xl:gap-12 mt-2 opacity-80">
            {[
              { src: 'svg/logos/zalozns.jpg', alt: 'Zalo ZNS' },
              { src: 'svg/logos/zaloaccout.jpg', alt: 'Zalo Offical Account' },
              { src: 'svg/logos/zaloads.jpg', alt: 'Zalo ADS' },
              { src: 'svg/logos/miniapp.jpg', alt: 'Zalo Miniapp' },
            ].map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-10" />
            ))}
          </div>
          <div className="md:hidden w-full">
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
                    <img src={logo.src} alt={logo.alt} className="h-10 mx-auto" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="custom-swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="md:my-24 my-4 px-6 max-w-full mx-auto">
        <div className="flex flex-col sm:flex-row 0.5xl:w-[77%] justify-between items-start sm:items-center mb-6 mx-auto min-h-[120px]">
          <div className="flex flex-col flex-1 justify-center items-start w-full">
            <h3
              ref={h3Ref}
              className="text-4xl sm:text-5xl md:text-7xl font-light font-roboto flex"
              style={{
                overflow: 'visible',
                lineHeight: '1.2',
                minHeight: '1em',
              }}
            >
              {"Các dịch vụ của Zatify".split('').map((char, idx) => (
                <span
                  key={idx}
                  className={`inline-block transition-all duration-500 ease-out
                    ${animateH3
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'}
                  `}
                  style={{
                    transitionDelay: `${idx * 50}ms`,
                    display: 'inline-block',
                    lineHeight: '1.2',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h3>
            <div className="mt-2 text-base text-gray-700 font-manrope">
              {/* Subtitle hoặc mô tả cho dịch vụ của Zatify */}
            </div>
          </div>
          <div className="rounded-md p-[1px] flex items-center h-full mt-4 sm:mt-0">
            <button className="justify-center text-sm bg-white border border-[#a689fa] rounded-[0.65rem] px-4 py-2 text-black transition flex items-center gap-1 w-[160px] h-[50px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white"
              onClick={() => {
                setActiveIndex(2);
                navigate('/service');
              }}
            >
              Khám phá thêm<span className="ml-1">→</span>
            </button>
          </div>
        </div>
        <div className=" flex flex-col sm:flex-row justify-center gap-6 ">
          {/* Card 1 */}
          <div className="md:col-span-2 rounded-3xl md:row-span-2 bg-gradient-to-br from-cyan-300 via-cyan-500 to-cyan-700 col-span-full relative 0.5xl:h-[568px] h-[378px] 
            w-full sm:w-[456px] ml-0 sm:ml-0">
            <div
              className="rounded-3xl overflow-hidden cursor-pointer group bg-cover bg-center h-full"
              style={{ backgroundImage: "url('https://demo.artureanec.com/themes/aiero/wp-content/uploads/2024/12/sphere_4-1-min.png ')" }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-end rounded-3xl">
                <h4
                  style={{ textDecorationThickness: '2px' }}
                  className="text-white text-xl md:text-2xl xl:text-3xl font-semibold mb-6 cursor-pointer hover:underline underline-offset-8 transition-all duration-300"
                  onClick={() => {
                    setActiveIndex(2);
                    window.scrollTo(0, 0);
                    navigate('/zalo-oficial-account');
                  }}>Zalo Official Account - ZOA</h4>
                <p className="text-white text-sm md:text-base xl:text-lg w-[90%] mb-8">
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
                setActiveIndex(2);
                window.scrollTo(0, 0);
                navigate('/zalo-oficial-account');
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-2 md:row-span-2 col-span-full rounded-3xl rounded-br-[0px]  overflow-hidden relative cursor-pointer group bg-[#ad8de0] p-6 flex flex-col justify-between md:h-[568px] h-[378px] 
            w-full sm:w-[456px] ml-0 sm:ml-0">
            <div>
              <h4
                style={{ textDecorationThickness: '2px' }}
                className="text-white text-xl md:text-2xl xl:text-3xl hover:underline  underline-offset-8 font-semibold md:mt-8 mt-2 mb-6"
                onClick={() => {
                  setActiveIndex(2);
                  window.scrollTo(0, 0);
                  navigate('/zalo-notification-service');
                }}>Zalo Notification Service ZNS</h4>
              <p className="text-white text-sm md:text-base xl:text-lg mb-4">
                Tài khoản chính thức của doanh nghiệp trên nền tảng Zalo, giúp doanh nghiệp kết nối và tương tác với người dùng Zalo
              </p>
            </div>
            <div className="absolute bottom-0 right-0 bg-white p-2 pb-0 rounded-tl-3xl rounded-br-0]">
              {/* Circle div top-right */}
              <div className="absolute top-[-16px] right-0 w-4 h-4 bg-white mask-rounded-hole-card"></div>

              {/* Circle div bottom-left */}
              <div className="absolute bottom-0 left-[-16px] w-4 h-4 bg-white mask-rounded-hole-card"></div>

              <div className="bg-black rounded-[18px] p-2 hover:bg-gray-700 transition cursor-pointer" onClick={() => {
                setActiveIndex(2);
                window.scrollTo(0, 0);
                navigate('/zalo-notification-service');
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            {/* Replace globe SVG with dotted circles and 3 X letters */}
            <svg className="hidden md:block absolute bottom-0 left-2 w-full h-40 opacity-100" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.6" fill="#FFFFFF">
                {[
                  6, 8, 10, 12, 12, 12, 12, 12, 12, 10, 8, 6
                ].map((dotsPerRow, rowIndex) => {
                  const spacing = 30;
                  const startX = 70 - (dotsPerRow * spacing) / 2;
                  const centerY = 70;
                  const radiusY = 55;
                  const y = centerY - 55 + (rowIndex * 30);
                  return Array.from({ length: dotsPerRow }).map((_, colIndex) => (
                    <circle
                      key={`${rowIndex}-${colIndex}`}
                      cx={startX + colIndex * spacing}
                      cy={y}
                      r="2"
                    />
                  ));
                })}
              </g>
              {/* Circular/diamond dotted pattern with equal spacing */}
              {/* 3 X letters replaced with image */}
              <image
                href="/svg/3x.png"
                x="-80"
                y="52"
                className="w-[240px] h-[100px]"
              />
            </svg>
          </div>

          {/* Card 3 */}
          <div
            className={`md:col-span-2 md:row-span-1 col-span-full gap-4 rounded-3xl rounded-br-[0px] overflow-hidden relative cursor-pointer group flex flex-col
    ${window.innerWidth < 768 ? 'h-[378px]' : 'h-[568px]'}
    w-full sm:w-[456px] ml-0 sm:ml-0`}
            onClick={() => {
              setActiveIndex(2);
              window.scrollTo(0, 0);
              navigate('/zalo-ads');
            }}
            tabIndex={0}
            role="button"
            aria-label="Xem chi tiết Zalo Ads"
            onKeyUp={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveIndex(2);
                window.scrollTo(0, 0);
                navigate('/zalo-ads');
              }
            }}
            style={{ outline: 'none' }}
          >
            {/* Top part */}
            <div className="bg-blue-50 rounded-3xl p-6 relative flex-[0.4] flex items-center justify-center sm:flex-[0.3]">
              <h4
                style={{ textDecorationThickness: '2px' }}
                className=" text-black text-xl md:text-2xl xl:text-3xl hover:underline underline-offset-8 font-semibold mb-2 mt-6 absolute left-20 top-4 -translate-x-1/2"
                onClick={() => {
                  setActiveIndex(2);
                  window.scrollTo(0, 0);
                  navigate('/zalo-ads');
                }}>Zalo Ads</h4>
              <img
                src="https://demo.artureanec.com/themes/aiero/wp-content/uploads/2024/12/Group-18418.png"
                alt="Zalo Ads"
                className="absolute top-0 right-0 max-h-32  w-auto object-contain "
              />
              {/* Button điều hướng thêm ở đây */}
              <div className="absolute bottom-0 right-0 bg-white p-2 pb-0 rounded-tl-3xl">
                {/* Circle div top-right */}
                <div className="absolute top-[-16px] right-0 w-4 h-4 bg-white mask-rounded-hole-card"></div>
                {/* Circle div bottom-left */}
                <div className="absolute bottom-0 left-[-16px] w-4 h-4 bg-white mask-rounded-hole-card"></div>
                <div className="bg-black rounded-[18px] p-2 hover:bg-gray-700 transition cursor-pointer" onClick={e => {
                  e.stopPropagation();
                  setActiveIndex(2);
                  window.scrollTo(0, 0);
                  navigate('/zalo-ads');
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Bottom part */}
            <div className="rounded-3xl p-6 flex flex-col justify-between flex-[0.6] sm:flex-[0.7] relative text-white">
              <div className="absolute inset-0 rounded-bl-3xl rounded-3xl pointer-events-none overflow-hidden">
                {/* Gradient background */}
                <div className="w-full h-full bg-gradient-to-r from-[#bcaaff] via-[#7ec8e3] to-[#a0c4ff] opacity-80 absolute inset-0"></div>
                {/* Image inside gradient */}
                <img
                  src="https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/communication-care-366x206.jpg"
                  alt="Background"
                  className="w-full h-full object-cover opacity-50"
                  style={{ mixBlendMode: 'multiply' }} // Nếu muốn hiệu ứng blend với gradient
                />
              </div>
              <div className="relative z-10">
                <h4
                  style={{ textDecorationThickness: '2px' }}
                  className="text-xl md:text-2xl xl:text-3xl hover:underline underline-offset-8 font-semibold md:mt-8 mt-2 mb-6"
                  onClick={() => {
                    setActiveIndex(2);
                    window.scrollTo(0, 0);
                    navigate('/zalo-mini-app');
                  }}>Zalo Mini App</h4>
                <p className="text-white text-sm md:text-base xl:text-lg mb-4">
                  Những App nhỏ chạy trực tiếp trên nền tảng Zalo, một giải pháp hiệu quả dành cho doanh nghiệp.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 bg-white p-2 pb-0 rounded-tl-3xl">
                {/* Circle div top-right */}
                <div className="absolute top-[-16px] right-0 w-4 h-4 bg-white mask-rounded-hole-card"></div>
                {/* Circle div bottom-left */}
                <div className="absolute bottom-0 left-[-16px] w-4 h-4 bg-white mask-rounded-hole-card"></div>
                <div className="bg-black rounded-[18px] p-2 hover:bg-gray-700 transition cursor-pointer" onClick={() => {
                  setActiveIndex(2);
                  window.scrollTo(0, 0);
                  navigate('/zalo-mini-app');
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="labelrunning w-full h-[115px] overflow-hidden flex items-center relative">
        <div className="marquee flex whitespace-nowrap" style={{ animation: 'marquee 15s linear infinite' }}>
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-gray-800 font-roboto mx-8">
            Zatify – Trao sức mạnh cho doanh nghiệp, kiến tạo trải nghiệm khách hàng đỉnh cao, lan tỏa sản phẩm mới vươn xa!
          </span>
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-gray-800 font-roboto mx-8">
            Zatify – Trao sức mạnh cho doanh nghiệp, kiến tạo trải nghiệm khách hàng đỉnh cao, lan tỏa sản phẩm mới vươn xa!
          </span>
        </div>
      </section>


      {/* features Section */}

      <section className="relative 0.5xl:mt-20 flex-grow max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-48 rounded-bl-3xl rounded-br-3xl pointer-events-none opacity-60" />
        {/* Heading với hiệu ứng từng ký tự */}
        <h2
          ref={h2Ref}
          className="text-4xl sm:text-7xl max-w-fullbg-o leading-tight mb-16 font-roboto text-gray-800 flex"
          style={{ overflow: 'visible', lineHeight: '1.2', minHeight: '1em' }}
        >
          {"Ưu điểm của Zatify".split('').map((char, idx) => (
            <span
              key={idx}
              className={`inline-block transition-all duration-500 ease-out
                ${animateH2
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'}
              `}
              style={{
                transitionDelay: `${idx * 50}ms`,
                display: 'inline-block',
                lineHeight: '1.2',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 gap-x-12">

          {/* Feature 1 */}
          <article className="flex flex-col items-start space-y-4 max-w-xs">
            <span className="material-icons-outlined text-indigo-500 text-4xl">integration_instructions</span>
            <h3 className="text-[20px] font-semibold font-manrope">Hệ sinh thái Zalo</h3>
            <p className="text-gray-600 leading-relaxed font-manrope">
              Tối ưu hóa tiềm năng kinh doanh từ hệ sinh thái hơn 100 triệu người dùng và hạ tầng công nghệ của Zalo.            </p>
          </article>

          {/* Feature 2 */}
          <article className="flex flex-col items-start space-y-4 max-w-xs">
            <span className="material-icons-outlined text-indigo-500 text-4xl">grid_view</span>
            <h3 className="text-[20px] font-semibold font-manrope">Giải pháp toàn diện</h3>
            <p className="text-gray-600 leading-relaxed font-manrope">
              Thiết kế giải pháp công nghệ phù hợp với chiến lược kinh doanh của riêng bạn từ nền tảng sản phẩm đa dạng.
            </p>
          </article>

          {/* Feature 3 */}
          <article className="flex flex-col items-start space-y-4 max-w-xs">
            <span className="material-icons-outlined text-indigo-500 text-4xl">smart_display</span>
            <h3 className="text-[20px] font-semibold font-manrope">	Sẵn sàng hỗ trợ</h3>
            <p className="text-gray-600 leading-relaxed font-manrope">
              Triển khai nhanh chóng và vận hành hiệu quả với đội ngũ chăm sóc khách hàng chuyên nghiệp.            </p>
          </article>

          {/* Feature 4 */}
          <article className="flex flex-col items-start space-y-4 max-w-xs">
            <span className="material-icons-outlined text-indigo-500 text-4xl">shield</span>
            <h3 className="text-[20px] font-semibold font-manrope">Bảo mật thông tin</h3>
            <p className="text-gray-600 leading-relaxed font-manrope">
              Ứng dụng công nghệ hiện đại vào từng sản phẩm với tiêu chuẩn bảo mật cao.            </p>
          </article>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-50 flex p-6 flex-col md:mt-24 md:flex-row gap-6 rounded-3xl h-auto overflow-hidden">
        {/* Left Card - Testimonial */}
        <div className="relative bg-[#1f1f1f] rounded-3xl text-gray-300 p-10 md:w-[60%] md:h-[650px] 2xl:h-[780px] h-[472px] flex flex-col justify-around items-center">
          <div className='0.5xl:w-[80%] mb-10 0.5xl:mb-0'>
            <img
              src={testimonials[currentTestimonial].logo}
              alt="Client Logo"
              className=" h-24 rounded-lg mb-4 object-cover"
            />
            <div className="text-4xl text-white ">❝</div>
            <p className="text-[18px] 0.5xl:text-2xl text-white leading-relaxed font-roboto">
              {testimonials[currentTestimonial].quote}
            </p>
            <p className=" text-[14px] 0.5xl:text-[16px] w-[80%] font-manrope mt-10 0.5:mt-20">
              - {testimonials[currentTestimonial].author}
            </p>
          </div>
          {/* Arrows */}
          <div className="flex items-center gap-4 absolute bottom-0 left-[30%] 0.5xl:left-[20%] transform -translate-x-1/2 bg-white rounded-t-[32px] px-4 py-2">
            {/* Circle div bottom-right */}
            <div class="absolute bottom-[-4px] right-[-31px]  w-8 h-8 bg-white mask-rounded-hole-testimonial-right"></div>

            {/* Circle div bottom-left */}
            <div class="absolute bottom-[-4px] left-[-28px]  w-8 h-8 bg-white mask-rounded-hole-testimonial-left"></div>
            <button
              className="w-12 h-12 flex items-center justify-center rounded-l-[32px] rounded-r-none font-thin text-black text-[30px] bg-white hover:text-cyan-400"
              onClick={() => setCurrentTestimonial(prev =>
                prev === 0 ? testimonials.length - 1 : prev - 1
              )}
            >
              ←
            </button>
            <button
              className="w-12 h-12 flex items-center justify-center rounded-r-[32px] rounded-l-none font-thin text-black text-[30px] bg-white hover:text-cyan-400"
              onClick={() => setCurrentTestimonial(prev =>
                prev === testimonials.length - 1 ? 0 : prev + 1
              )}
            >
              →
            </button>
          </div>
        </div>

        {/* Right Card - Overview */}
        <div
          ref={overviewRef}
          className="text-white p-10 md:w-[40%] rounded-3xl md:h-[650px] 2xl:h-[780px] h-[472px] flex flex-col justify-around"
          style={{ backgroundImage: "url('/svg/Testimonial.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <h2 className="0.5xl:text-6xl text-4xl leading-snug mb-8 font-roboto">
            Số lượng khách hàng lớn đã tin tưởng và sử dụng dich vụ của Zatify
          </h2>
          <div>
            <p className="outlined-text mb-1">{clientCount}+</p>
            <p className="text-lg text-white">Khách hàng hài lòng</p>
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
            Bạn thắc mắc, <br />
            tôi giải đáp
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
                  <div className="mt-3 text-gray-700 text-base leading-relaxed font-manrope">
                    {faq.answer}
                  </div>
                </div>
              </details>
            ))}
          </div>
          <div className="mt-10">
            <div className="rounded-md inline-block p-[1px]">
              <button
                className="justify-center text-sm bg-gray-100 border border-[#a689fa] rounded-[0.65rem] px-4 py-2 text-black transition flex items-center gap-1 w-[175px] h-[50px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white"
                onClick={() => {
                  setActiveIndex(4); // 4 là index của "Tin tức"
                  navigate('/faq');
                }}
              >
                Vẫn còn thắc mắc<span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section className="w-full flex flex-col items-center mt-32 mb-24">
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
          <div className="flex flex-col px-4 xl:px-2 0.5xl:flex-row 0.5xl:justify-between ml-6 0.5xl:ml-0 justify-start items-start 0.5xl:items-center w-full mb-12">
            <div className='w-full xl:w-[50%]'>
              <h2
                ref={h2BlogRef}
                className="mt-4 text-4xl sm:text-6xl font-roboto font-light leading-tight text-black flex flex-wrap"
                style={{ overflow: 'visible', lineHeight: '1.2', minHeight: '1em' }}
              >
                {"Khám phá các dự án tiêu biểu của Zatify".split(' ').map((word, wIdx, arr) => (
                  <span key={wIdx} className="mr-2">
                    {word.split('').map((char, idx) => (
                      <span
                        key={wIdx + '-' + idx}
                        className={`inline-block transition-all duration-500 ease-out
                          ${animateH2Blog
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'}
                        `}
                        style={{
                          transitionDelay: `${(wIdx * word.length + idx) * 18}ms`, // delay đều hơn, không bị khựng
                          display: 'inline-block',
                          lineHeight: '1.2',
                        }}
                      >
                        {char}
                      </span>
                    ))}
                    {wIdx < arr.length - 1 ? <span>&nbsp;</span> : null}
                  </span>
                ))}
              </h2>
            </div>
            <div className="rounded-md inline-block p-[1px]">
              <button className="justify-center text-sm bg-white border border-[#a689fa] rounded-[0.65rem] px-4 py-2 text-black transition flex items-center gap-1 w-[160px] h-[50px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white">
                Các dự án khác<span className="ml-1">→</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col 0.5xl:flex-row gap-8 w-full justify-center px-4  ">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-3xl shadow-md overflow-hidden w-full h-auto flex flex-col relative group">
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
            <div className="bg-white rounded-3xl shadow-md overflow-hidden w-full h-auto flex flex-col relative group">
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
            <div className="bg-white rounded-3xl shadow-md overflow-hidden w-full h-auto flex flex-col relative group">
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

      {/* Customer of Zatify */}
      <section className="relative 0.5xl:mt-10 flex-grow xl:max-w-[90%] mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Tiêu đề */}
        <div className="max-w-[80rem] mx-auto xl:mb-24">
          <h2
            ref={h2Refcus}
            className="text-4xl sm:text-7xl max-w-fullbg-o leading-tight mb-16 font-roboto text-gray-800 flex"
            style={{ overflow: 'visible', lineHeight: '1.2', minHeight: '1em' }}
          >
            {"Khách hàng của Zatify".split('').map((char, idx) => (
              <span
                key={idx}
                className={`inline-block transition-all duration-500 ease-out
          ${animateH2cus ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
                style={{
                  transitionDelay: `${idx * 50}ms`,
                  display: 'inline-block',
                  lineHeight: '1.2',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>
        </div>

        {/* Desktop: Swiper layout */}
        <div className="hidden lg:block">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, el: ".custom-pagination-desktop" }}
            autoplay={{
              delay: 4000, // 4s giây
              disableOnInteraction: false,
            }}
            loop={true}
            className="my-swiper-desktop"
          >
            {/* Slide 1: 12 logos */}
            <SwiperSlide>
              <div className="grid grid-cols-6 gap-8">
                {[17, 26, 32, 22, 5, 36, 21, 38, 39, 40, 41, 37].map(index => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`}
                      alt={`Khách hàng ${index}`}
                      className="h-24 w-auto max-w-full object-contain"
                      onError={(e) => {
                        e.target.src = '/svg/logos/miniapp.jpg';
                      }}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>

            {/* Slide 2: 12 logos */}
            <SwiperSlide>
              <div className="grid grid-cols-6 gap-8">
                {[13, 14, 15, 16, 1, 18, 19, 20, 7, 4, 23, 24].map(index => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`}
                      alt={`Khách hàng ${index}`}
                      className="h-24 w-auto max-w-full object-contain"
                      onError={(e) => {
                        e.target.src = '/svg/logos/zaloaccout.jpg';
                      }}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>

            {/* Slide 3: 12 logos */}
            <SwiperSlide>
              <div className="grid grid-cols-6 gap-8">
                {[25, 2, 27, 28, 29, 30, 31, 3, 33, 34, 35, 6].map(index => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`}
                      alt={`Khách hàng ${index}`}
                      className="h-24 w-auto max-w-full object-contain"
                      onError={(e) => {
                        e.target.src = '/svg/logos/zaloads.jpg';
                      }}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
            {/* Slide 4: a lot logos */}
            <SwiperSlide>
              <div className="grid grid-cols-6 gap-8">
                {[8, 9, 10, 11, 12].map(index => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`}
                      alt={`Khách hàng ${index}`}
                      className="h-24 w-auto max-w-full object-contain"
                      onError={(e) => {
                        e.target.src = '/svg/logos/zaloads.jpg';
                      }}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Pagination dots for desktop */}
          <div className="custom-pagination-desktop mt-8 flex justify-center space-x-4">
            <div className="swiper-pagination-desktop"></div>
          </div>
        </div>

        {/* Mobile: Swiper layout */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true, el: ".custom-pagination-mobile" }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="my-swiper"
          >
            {/* Slide 1: 6 logos */}
            <SwiperSlide>
              <div className="grid grid-cols-3 gap-4">
                {[17, 26, 32, 22, 5, 36].map(index => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`}
                      alt={`Khách hàng ${index}`}
                      className="h-12 w-auto max-w-full object-contain"
                      onError={(e) => {
                        e.target.src = '/svg/logos/miniapp.jpg';
                      }}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>

            {/* Slide 2: 6 logos */}
            <SwiperSlide>
              <div className="grid grid-cols-3 gap-4">
                {[21, 38, 39, 40, 41, 37].map(index => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`}
                      alt={`Khách hàng ${index}`}
                      className="h-12 w-auto max-w-full object-contain"
                      onError={(e) => {
                        e.target.src = '/svg/logos/zaloaccout.jpg';
                      }}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>

            {/* Slide 3: 6 logos */}
            <SwiperSlide>
              <div className="grid grid-cols-3 gap-4">
                {[13, 14, 15, 16, 1, 18].map(index => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`}
                      alt={`Khách hàng ${index}`}
                      className="h-12 w-auto max-w-full object-contain"
                      onError={(e) => {
                        e.target.src = '/svg/logos/zaloads.jpg';
                      }}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>

            {/* Slide 4: 6 logos */}
            <SwiperSlide>
              <div className="grid grid-cols-3 gap-4">
                {[19, 20, 7, 4, 23, 24].map(index => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`}
                      alt={`Khách hàng ${index}`}
                      className="h-12 w-auto max-w-full object-contain"
                      onError={(e) => {
                        e.target.src = '/svg/logos/zalozns.jpg';
                      }}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>

            {/* Slide 5: 6 logos */}
            <SwiperSlide>
              <div className="grid grid-cols-3 gap-4">
                {[25, 2, 27, 28, 29, 30].map(index => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`}
                      alt={`Khách hàng ${index}`}
                      className="h-12 w-auto max-w-full object-contain"
                      onError={(e) => {
                        e.target.src = '/svg/logos/miniapp.jpg';
                      }}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>

            {/* Slide 6: 6 logos */}
            <SwiperSlide>
              <div className="grid grid-cols-3 gap-4">
                {[31, 3, 33, 34, 35, 6].map(index => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`}
                      alt={`Khách hàng ${index}`}
                      className="h-12 w-auto max-w-full object-contain"
                      onError={(e) => {
                        e.target.src = '/svg/logos/zaloaccout.jpg';
                      }}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
            {/* Slide 7: a lot logos */}
            <SwiperSlide>
              <div className="grid grid-cols-3 gap-4">
                {[8, 9, 10, 11, 12].map(index => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`}
                      alt={`Khách hàng ${index}`}
                      className="h-12 w-auto max-w-full object-contain"
                      onError={(e) => {
                        e.target.src = '/svg/logos/zaloaccout.jpg';
                      }}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>

          {/*  Pagination dots*/}
          <div className="custom-pagination-mobile mt-6 flex justify-center"></div>
        </div>
      </section>

      {/* Partner of Zatify */}
      <section className="relative flex-grow xl:max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="max-w-[85rem] mx-auto xl:mb-24">
          <h2
            ref={h2Refpart}
            className="text-4xl sm:text-7xl max-w-full leading-tight mb-16 font-roboto text-gray-800 flex"
            style={{ overflow: 'visible', lineHeight: '1.2', minHeight: '1em' }}
          >
            {"Đối tác của Zatify".split('').map((char, idx) => (
              <span
                key={idx}
                className={`inline-block transition-all duration-500 ease-out
          ${animateH2part ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
                style={{
                  transitionDelay: `${idx * 50}ms`,
                  display: 'inline-block',
                  lineHeight: '1.2',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-8 gap-x-20">
          {[1, 2, 6, 4, 5, 3, 7, 8].map(index => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={`/images/logodoitac/partner-${index < 10 ? '0' + index : index}.png`}
                alt={`Đối tác ${index}`}
                className="h-20 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;
