import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState, useRef, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useMenu } from '../contexts/MenuContext';

const ServicePage = () => {
    const navigate = useNavigate();
    const { setActiveIndex } = useMenu();
    const h3Ref = useRef(null);
    const [animateH3, setAnimateH3] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
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
            if (h3Ref.current) {
                const rect = h3Ref.current.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    setAnimateH3(true);
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

    const testimonials = [
        {
            id: 1,
            quote: "Dịch vụ hỗ trợ thật sự tuyệt vời! Phản hồi nhanh chóng, tận tình và giải quyết vấn đề rất chuyên nghiệp.",
            author: "Công ty Bạn uống tôi lái",
            logo: "/images/logokhachhang/butl.jpg"
        },
        {
            id: 2,
            quote: "Hỗ trợ dịch vụ nhanh gọn và nhiệt tình! Mình rất ấn tượng với sự tận tâm và chuyên nghiệp của đội ngũ, giải quyết vấn đề cực kỳ hiệu quả!",
            author: "Bảo hiểm Phú hưng",
            logo: "/images/logokhachhang/bhph.jpg"
        },
        {
            id: 3,
            quote: "Dịch vụ không chỉ nhanh và tận tình mà giá cả còn tốt hơn mình mong đợi! Đội ngũ hỗ trợ chuyên nghiệp, mình rất hài lòng!",
            author: "Mgol",
            logo: "/images/logokhachhang/mgol.jpg"
        }
    ];

    return (
        <div className="relative w-full min-h-screen font-sans">
            {/* Hero Section */}
            <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-0 rounded-bl-3xl rounded-br-3xl pointer-events-none" />
            <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-[450vh] rounded-bl-3xl rounded-br-3xl pointer-events-none z-50" />

            <section className="relative p-4 top-36 w-full max-w-full mx-auto " style={{ zIndex: 1 }}>
                <div
                    className="relative rounded-3xl 0.5xl:rounded-tr-3xl 0.5xl:rounded-none w-full h-[280px] md:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden"
                    style={{
                        backgroundImage: 'url(svg/background/bg-service.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal text-center mx-auto select-none" style={{ letterSpacing: 2 }}>Tổng quan</h1>
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
                        <span className="text-sm mb-1">Dịch vụ / Tổng quan</span>
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

            {/* Centered Image Section */}
            <section className="relative w-full py-12">
                <div className="flex justify-center items-center">
                    <img
                        src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/benefic_4.svg"
                        alt="Integration"
                        className="w-8 h-8 text-indigo-500"
                    />
                </div>
            </section>

      {/* Services Cards Section */}
      <section className="md:my-24 my-4 px-6 max-w-full mx-auto">
        <div className="flex flex-col md:flex-row 0.5xl:w-[77%] justify-between items-start md:items-center mb-6 mx-auto min-h-[120px]">
          <div className="flex flex-col flex-1 justify-center items-start w-full">
            <h3
              ref={h3Ref}
              className="text-4xl  sm:text-6xl md:text-7xl font-light font-roboto flex"
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
            <div className="absolute bottom-0 right-0 bg-white p-2 pb-0 rounded-tl-3xl rounded-br-0 z-50">
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
            <svg className="hidden md:block absolute bottom-0 left-2 w-full z-0 h-40 opacity-100" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  onClick={e =>  {
                    e.stopPropagation();
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
                <div className="bg-black rounded-[18px] p-2 hover:bg-gray-700 transition cursor-pointer" onClick={e =>  {
                  e.stopPropagation();
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
            <section className="relative 0.5xl:mt-20 flex-row max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 py-16">
                <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-48 rounded-bl-3xl rounded-br-3xl pointer-events-none opacity-60" />
                {/* Heading */}
                <h2 className="text-3xl sm:text-7xl w-full 0.5xl:w-[65%] leading-snug mb-16 font-roboto text-gray-800">
                    Zatify sẽ giúp cho doanh nghiệp điều gì?
                </h2>

                {/* Features grid */}
                <div className="flex flex-col items-center">
                    {/* Top row - 3 features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-12 mb-12">
                        {/* Feature 1 */}
                        <article className="flex flex-col items-start space-y-4 max-w-xs">
                            <img
                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/benefic_4.svg"
                                alt="Integration"
                                className="w-10 h-10 text-indigo-500 mx-auto"
                            />                            <p className="text-gray-600 leading-relaxed font-manrope">
                                Tối ưu trải nghiệm khách hàng với đa dạng tính năng tương tác
                            </p>
                        </article>

                        {/* Feature 2 */}
                        <article className="flex flex-col items-start space-y-4 max-w-xs">
                            <img src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/benefic_1.svg"
                                alt="Security"
                                className="w-10 h-10 text-indigo-500 mx-auto"
                            />
                            <p className="text-gray-600 leading-relaxed font-manrope">
                                An toàn thông tin theo tiêu chuẩn quốc tế
                            </p>
                        </article>

                        {/* Feature 3 */}
                        <article className="flex flex-col items-start space-y-4 max-w-xs">
                            <img src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/benefic_3.svg"
                                alt="Cost"
                                className="w-10 h-10 text-indigo-500 mx-auto  "
                            />
                            <p className="text-gray-600 leading-relaxed font-manrope">
                                Chi phí hợp lý và minh bạch cho từng dịch vụ
                            </p>
                        </article>
                    </div>

                    {/* Bottom row - 2 features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-12">
                        {/* Feature 4 */}
                        <article className="flex flex-col items-start space-y-4 max-w-xs">
                            <img src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/benefic_5.svg"
                                alt="Shield"
                                className="w-10 h-10 text-indigo-500 mx-auto"
                            />
                            <p className="text-gray-600 leading-relaxed font-manrope">
                                Tối ưu hiệu quả vận hành với công cụ quản lý mạnh mẽ
                            </p>
                        </article>

                        {/* Feature 5 */}
                        <article className="flex flex-col items-start space-y-4 max-w-xs">
                            <img src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/benefic_6.svg"
                                alt="Analytics"
                                className="w-10 h-10 text-indigo-500 mx-auto"
                            />
                            <p className="text-gray-600 leading-relaxed font-manrope">
                                Dễ dàng kết nối với hệ thống, nền tảng của doanh nghiệp hoặc bên thứ ba
                            </p>
                        </article>
                    </div>
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
                            className=" h-16 rounded-lg mb-4 object-cover"
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

            {/* Price Section  */}
            <section className="relative 0.5xl:mt-20 flex-row max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 py-16">
                <h3
                    ref={h3Ref}
                    className="text-3xl 0.5xl:text-7xl mb-6 font-light font-roboto flex"
                    style={{
                        overflow: 'visible',
                        lineHeight: '1.2',
                        minHeight: '1em',
                    }}
                >
                    {"Bảng giá dịch vụ OA".split('').map((char, idx) => (
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
                <p className='mb-16 text-sm md:text-lg xl:text-xl'>Dành cho OA đã xác thực</p>
                <div className="flex flex-col 0.5xl:flex-row items-star justify-center gap-6 w-full">
                    {/* Card 1 */}
                    <div className="flex flex-row gap-3  h-[555px]">
                        <div className="flex-1 bg-white w-[330px] 0.5xl:pt-20 rounded-2xl border border-black p-10 flex flex-col items-start shadow-md relative z-10">
                            <h3 className="text-[40px] font-roboto mb-2">Dùng thử</h3>
                            <p className="mb-4 font-manrope font-semibold text-lg text-gray-800">1 tháng</p>
                            <ul className="mb-8 text-base font-manrope text-gray-800 space-y-2">
                                <li>Tương tác cơ bản và nâng cao.</li>
                                <li>Có sẵn 2.000 tin Tư vấn ngoài khung.</li>
                                <li>Không thể gia hạn.</li>
                                <li>Không tích hợp API.</li>
                            </ul>
                            <div className="text-4xl font-bold mb-8">10.000đ</div>
                            <div className="rounded-md mt-8 inline-block p-[1px]">
                                <button className="justify-center text-sm bg-white border border-[#a689fa] rounded-[0.65rem] px-4 py-2 text-black transition flex items-center gap-1 w-[160px] h-[50px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white">
                                    Get started<span className="ml-1">→</span>
                                </button>
                            </div>
                        </div>
                        {/* Vertical bar 1 */}
                        <div className="flex w-[70px] h-full  rounded-3xl " style={{ backgroundImage: "url('svg/thanhdoc/basic.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    </div>
                    {/* Card 2 */}
                    <div className="flex flex-row gap-3  h-[555px]">
                        <div className="flex-1 w-[330px] 0.5xl:pt-20 bg-[#bcaaff] rounded-2xl p-10 flex flex-col items-start shadow-xl relative z-20">
                            <div className="absolute top-0 left-1/3 -translate-x-1/2 bg-white text-black px-6 py-2 rounded-b-2xl font-semibold text-sm">Phổ biến nhất</div>
                            <h3 className="text-[40px] text-white font-roboto mb-2">Nâng cao</h3>
                            <p className="mb-4 font-manrope font-semibold text-lg text-white">1 năm</p>
                            <ul className="mb-8 text-base font-manrope text-white space-y-2">
                                <li>Tương tác cơ bản và nâng cao.</li>
                                <li>Có sẵn 2.000 tin Tư vấn ngoài khung.</li>
                                <li>Có thể gia hạn và mua lại.</li>
                                <li>Tích hợp API.</li>
                                <li>Chia sẻ OA qua QR & URL</li>
                            </ul>
                            <div className="text-4xl text-white font-bold mb-8">99.000đ<span className="text-lg font-normal">/tháng</span></div>
                            <div className="rounded-md inline-block p-[1px]">
                                <button className="justify-center text-sm text-white bg-[#333333] #333333 rounded-[0.65rem] px-4 py-2 hover:bg-[#3ed6c5] hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                                    Get started<span className="ml-1">→</span>
                                </button>
                            </div>                        </div>
                        {/* Vertical bar 2 */}
                        <div className="flex w-[70px] h-full  rounded-3xl " style={{ backgroundImage: "url('svg/thanhdoc/premium.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    </div>
                    {/* Card 3 */}
                    <div className="flex flex-row gap-3  h-[555px]">
                        <div className="flex-1 w-[330px] 0.5xl:pt-20 bg-[#3ed6c5] rounded-2xl p-10 flex flex-col items-start shadow-md relative z-10">
                            <h3 className="text-[40px] text-white font-roboto mb-2">Premium</h3>
                            <p className="mb-4 font-manrope font-semibold text-lg text-white">1 năm</p>
                            <ul className="mb-8 text-base font-manrope text-white space-y-2">
                                <li>Tương tác cơ bản và nâng cao.</li>
                                <li>Có sẵn 9.000 tin Tư vấn ngoài khung.</li>
                                <li>Có thể gia hạn và mua lại.</li>
                                <li>Tích hợp API.</li>
                                <li>Chia sẻ OA qua QR & URL</li>
                            </ul>
                            <div className="text-4xl text-white font-bold mb-8">399.000đ<span className="text-lg font-normal">/tháng</span></div>
                            <div className="rounded-md inline-block p-[1px]">
                                <button className="justify-center text-sm bg-[#3ed6c5] border border-[#a689fa] rounded-[0.65rem] px-4 py-2 text-black transition flex items-center gap-1 w-[160px] h-[50px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white">
                                    Get started<span className="ml-1">→</span>
                                </button>
                            </div>
                        </div>
                        {/* Vertical bar 3 */}
                        <div className="flex w-[70px] h-full  rounded-3xl " style={{ backgroundImage: "url('svg/thanhdoc/unlimited.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    </div>
                </div>
            </section>

            {/* Explore Services Section */}
            <section className="relative z-0 mt-24 px-0 max-w-none w-full flex justify-center items-center min-h-[420px] h-[70vh] bg-none overflow-hidden">
                <div className="absolute inset-0 w-[0%] 0.5xl:w-[18%]  bg-gradient-to-r from-[#bcaaff] via-[#a0c4ff] to-[#fff] opacity-10 pointer-events-none"></div>
                {/* Pattern bên trái */}
                <div className="absolute left-[-140px] top-0 h-full w-0 sm:w-auto pointer-events-none select-none z-0 flex items-center">
                    <img src="/svg/elements-X.png" alt="Pattern X" className="h-full w-full opacity-90" />
                </div>
                {/* Nội dung chính */}
                <div className="relative z-10 flex flex-col items-center w-full">
                    <h2 className="text-5xl sm:text-6xl w-auto 2xl:text-8xl xl:text-8xl font-light leading-tight text-center font-roboto mb-10 max-w-5xl">
                        Khám phá các dịch vụ của Zatify ngay để nắm bắt được toàn bộ{' '}
                        <span className="bg-gradient-to-r from-[#39D4DB] to-[#46b5e2] bg-clip-text text-transparent font-normal">
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
                            <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-10" />
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
                                        <img src={logo.src} alt={logo.alt} className="h-10 mx-auto" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="custom-swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    );
};

export default ServicePage;
