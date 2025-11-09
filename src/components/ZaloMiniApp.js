import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion"
import { FiUsers, FiCalendar, FiRepeat, FiDollarSign, FiShare2, FiHeart, FiCheck, FiDownload } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

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

const ZaloMiniApp = () => {
    // State để lưu index của thẻ details đang mở
    const [openDetail, setOpenDetail] = useState(null);
    const contentRefs = React.useRef([]); // Ref array for content divs
    const navigate = useNavigate();


    // Hiệu ứng cho tiêu đề 
    const [titleRef, animateTitle] = useAnimateOnScroll();
    const [h2Refwhat, animateH2what] = useAnimateOnScroll();
    const [h2Refbus, animateH2bus] = useAnimateOnScroll();
    const [h2Refuser, animateH2user] = useAnimateOnScroll();

    // Danh sách câu hỏi/đáp án FAQ
    const faqList = [
        {
            question: "How do you ensure the security of AI systems?",
            answer: "Yes, we tailor AI solutions to meet the unique requirements of each client, ensuring maximum relevance and effectiveness.",
        },
        {
            question: "Can you customize AI solutions for specific business needs?",
            answer: "Yes, we tailor AI solutions to meet the unique requirements of each client, ensuring maximum relevance and effectiveness.",
        },
        {
            question: "Do you provide ongoing support for AI implementations?",
            answer: "Yes, we tailor AI solutions to meet the unique requirements of each client, ensuring maximum relevance and effectiveness.",
        },
        {
            question: "How do you handle data privacy and compliance?",
            answer: "Yes, we tailor AI solutions to meet the unique requirements of each client, ensuring maximum relevance and effectiveness",
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
        <div className="relative w-full min-h-screen font-sans overflow-x-hidden">
            {/* Hero Section */}
            <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-0 rounded-bl-3xl rounded-br-3xl pointer-events-none" />

            <section className="relative p-4 top-36 w-full max-w-full mx-auto " style={{ zIndex: 1 }}>
                <div
                    className="relative rounded-3xl 0.5xl:rounded-tr-3xl 0.5xl:rounded-none w-full h-[280px] md:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden"
                    style={{
                        backgroundImage: 'url(/svg/background/contact.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal max-w-5xl leading-none text-center mx-auto select-none" style={{ letterSpacing: 2 }}>Zalo Mini App</h1>
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
                    <div className="absolute left-[319px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    {/* Circle div top-left */}
                    <div className="absolute left-[-1px] bottom-[69px]  w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    <div className="justify-center items-center w-80 h-20 absolute left-0 bottom-0 bg-white rounded-tr-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex flex-col shadow-md" style={{ minWidth: 220 }}>
                        <span className="text-sm mb-1"> Dịch vụ / Zalo Mini App</span>
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

            {/* Main layout section */}
            <section className="service-single-layout flex flex-col md:flex-row max-w-full 0.5xl:mx-14 mt-52 p-4 gap-8 overflow-x-hidden">
                {/* Sidebar left */}
                <aside className="service-single-sidebar w-full md:w-1/4 2xl:w-1/5 flex-col gap-8 hidden md:flex">
                    {/* Service list */}
                    <div className="service-list bg-gray-100 px-6 rounded-xl h-auto flex justify-start items-center 0.5xl:h-[300px]">
                        <ul className="space-y-6 text-gray-500 font-manrope text-[20px]">
                            {[
                                "Zalo Official Account",
                                "Zalo Mini App",
                                "Zalo Notification Service",
                                "Zalo Ads",
                            ].map((item, index) => {
                                const links = [
                                    "/zalo-oficial-account",
                                    "/zalo-mini-app",
                                    "/zalo-notification-service",
                                    "/zalo-ads"
                                ];
                                return (
                                    <li
                                        key={index}
                                        className="cursor-pointer flex items-center gap-2 group transition-all duration-300"
                                        onClick={() => {
                                            navigate(links[index])
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                    >
                                        {/* Icon mũi tên */}
                                        <span className="opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[20px]">
                                            ↗
                                        </span>
                                        {/* Text */}
                                        <span className="transition-all duration-300 group-hover:text-black group-hover:font-semibold group-hover:translate-x-1">
                                            {item}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Brochure */}
                    <div
                        className="service-brochure p-6 rounded-xl text-white flex flex-col justify-center 0.5xl:h-[340px]"
                        style={{
                            backgroundImage: 'url(/brochure/Brochure.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minHeight: '340px',
                        }}
                    >
                        {/* Nếu vẫn không thấy ảnh, thử thêm một thẻ img để debug */}
                        {/* <img src="/svg/projectgrid/2.jpg" alt="debug" style={{width: 100}} /> */}
                        <div className="mb-4">
                            <h3 className="text-[40px] leading-none my-4 font-roboto">Zatify Brochure</h3>
                        </div>
                        {/* Thay hình minh họa brochure bằng nền, giữ nguyên chữ và nút */}
                        <div className="border hover:border-none rounded-xl w-[162px] inline-block p-[1px]">
                            <a
                                href="/files/[ZATIFY] Zalo Ecosystem Credential 2025.pdf"
                                download
                                className="justify-center text-sm rounded-[0.65rem] px-4 py-2 text-white transition flex items-center gap-1 w-[160px] h-[50px] hover:bg-purple-600"
                            >
                                Download
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
                            </a>
                        </div>
                    </div>


                    {/* AI Consulting */}
                    <div className="flex items-end relative p-6 rounded-xl w-full text-white h-[340px]" style={{ backgroundImage: 'url(/svg/Testimonial.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="relative w-full z-10">
                            <h3 className="text-3xl font-roboto mb-2">Tăng cường nhận diện thương hiệu</h3>
                            <p className="font-manrope">Cho phép doanh nghiệp cải thiện đáng kể khả năng tương tác với khách hàng</p>
                        </div>
                    </div>
                </aside>

                {/* Main content right */}
                <main className="service-single-main w-full max-w-[62rem] 2xl:max-w-[100%] md:w-3/4 2xl:w-4/5 flex flex-col gap-8">
                    {/* Main heading and paragraphs */}
                    <article className="main-content w-full">
                        <h1
                            ref={titleRef}
                            className="text-[2.5rem] leading-[1.1] font-roboto xl:text-7xl md:pl-0 w-[105%]"
                            style={{ overflow: 'visible', lineHeight: '1.2', minHeight: '1em' }}
                        >
                            {"Mini App - Khai mở kênh tiếp cận khách hàng mới cho doanh nghiệp".split(' ').map((word, wordIndex) => (
                                <span key={wordIndex} style={{ display: 'inline-block' }}>
                                    {word.split('').map((char, charIndex) => (
                                        <span
                                            key={charIndex}
                                            className={`inline-block transition-all duration-500 ease-out
          ${animateTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
                                            style={{
                                                transitionDelay: `${(wordIndex * 150) + (charIndex * 50)}ms`,
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            {char}
                                        </span>
                                    ))}
                                    {wordIndex < "Mini App - Khai mở kênh tiếp cận khách hàng mới cho doanh nghiệp".split(' ').length - 1 && '\u00A0'}
                                </span>
                            ))}
                        </h1>                    </article>

                    {/* Main image */}
                    <div className="main-image rounded-xl overflow-hidden">
                        <img src="/images/Miniapp/landingpage-banner.png" alt="AI VR headset" className="w-[100%] 2xl:w-[80%] mx-auto h-auto object-cover rounded-xl" />
                    </div>

                </main>
            </section>


            {/* Zalo Mini App paragraphs */}
            <section className="relative flex-grow max-w-full xl:my-24 my-10 w-full mx-auto px-2 sm:px-8 lg:px-12 pb-16 overflow-x-hidden">
                <h2
                    ref={h2Refwhat}
                    className="text-4xl sm:text-6xl xl:text-7xl mb-8 md:mb-16 justify-center w-full leading-tight xl:mb-8 font-roboto text-gray-800 flex"
                    style={{ overflow: 'visible', lineHeight: '1.2', minHeight: '1em' }}
                >
                    {"Zalo Mini App là gì?".split('').map((char, idx) => (
                        <span
                            key={idx}
                            className={`inline-block transition-all duration-500 ease-out
          ${animateH2what ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
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
                <p className="text-gray-700 text-base md:text-xl text-center max-w-2xl mx-auto font-manrope">
                    Zalo Mini App là những "chương trình nhỏ" chạy trực tiếp trên nền tảng Zalo,
                    một giải pháp hiệu quả dành cho doanh nghiệp.
                </p>
                {/* Decorative ellipse effect */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[90%] h-10 md:h-16 bg-transparent pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 900 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="ellipseGradient" x1="450" y1="12" x2="450" y2="48" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#b6f0ff" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
                            </linearGradient>
                        </defs>
                        <ellipse
                            cx="450"
                            cy="30"
                            rx="440"
                            ry="18"
                            fill="none"
                            stroke="url(#ellipseGradient)"
                            strokeWidth="2"
                            opacity="1"
                        />
                    </svg>
                </div>
                {/* Decorative dots */}
                <span
                    className="absolute left-[20%] top-28 w-2 h-2 rounded-full border-2 border-lime-400 bg-white/0 shadow-[0_0_12px_4px_rgba(163,230,53,0.5)] animate-pulse"
                />
                <span
                    className="absolute right-[20%] top-16 w-2 h-2 rounded-full border-2 border-lime-400 bg-white/0 shadow-[0_0_12px_4px_rgba(163,230,53,0.5)] animate-pulse"
                />
                <span
                    className="absolute left-[25%] bottom-12 w-2 h-2 bg-cyan-300 rounded-full opacity-80 shadow-[0_0_10px_1px_rgba(34,211,238,0.8)] animate-pulse"
                />
                <span className="absolute right-[20%] bottom-16 w-2 h-2 bg-cyan-300 rounded-full opacity-80 shadow-[0_0_10px_1px_rgba(34,211,238,0.8)] animate-pulse"></span>
            </section>



            {/* business benefits section */}
            <section className="relative flex-grow max-w-full xl:my-24 my-10 w-full mx-auto px-2 md:px-8 lg:px-12 pb-16 overflow-x-hidden">
                <h2
                    ref={h2Refbus}
                    className="text-4xl sm:text-6xl xl:text-7xl mb-8 md:mb-16 justify-center w-full leading-tight xl:mb-8 font-roboto text-gray-800 flex"
                    style={{ overflow: 'visible', lineHeight: '1.2', minHeight: '1em' }}
                >
                    {"Lợi ích cho doanh nghiệp".split('').map((char, idx) => (
                        <span
                            key={idx}
                            className={`inline-block transition-all duration-500 ease-out
          ${animateH2bus ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
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
                <p className="text-gray-700 text-base md:text-xl text-center max-w-4xl mx-auto font-manrope">
                    Zalo Mini App giúp doanh nghiệp xây dựng và tích hợp ứng dụng trên zalo 1 cách đơn giản, dễ dàng, tiện lợi và hiệu quả.
                </p>

                {/* Content section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
                    {/* Left side */}
                    <div className="flex flex-col gap-10 h-full">
                        {[
                            { icon: <FiUsers />, title: "Tiếp cận hàng triệu khách hàng", desc: "Dễ dàng chuyển đổi, không cần tải app" },
                            { icon: <FiCalendar />, title: "Nâng cao trải nghiệm khách hàng", desc: "Khách hàng dễ dàng trải nghiệm đa dịch vụ chỉ trên 1 ứng dụng duy nhất" },
                            { icon: <FiRepeat />, title: "Kênh mới Re-Marketing 0 đồng", desc: "Kênh mới để chăm sóc khách hàng một cách tiện lợi trên Zalo, Momo" }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group flex flex-col items-center md:items-end text-center md:text-right h-full justify-start"
                            >
                                <div className="bg-blue-400 group-hover:bg-blue-900 transition-colors duration-300 rounded-full p-4 mb-3 flex items-center justify-center">
                                    {React.cloneElement(item.icon, { className: "text-white text-3xl" })}
                                </div>
                                <h3 className="font-medium font-roboto text-lg md:text-xl mb-2">{item.title}</h3>
                                <p className="text-gray-600 font-manrope text-sm md:text-base min-h-[48px] flex items-center">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Center image */}
                    <div className="flex justify-center items-center">
                        <img
                            src="https://miniapp.vn/wp-content/uploads/2024/01/banner-app.webp"
                            alt="App Preview"
                            className="max-h-[70vh] xl:max-h-[90vh] object-contain"
                        />
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col gap-8 px-6 md:px-0 h-full justify-start">
                        {/* Tiêu đề đầu trang */}
                        <div className="flex flex-col gap-2 text-left">
                            {[
                                "Tăng doanh thu - Giảm chi phí",
                                "Đầu tư ít - Hiệu quả cao"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="bg-blue-800 rounded-full p-1 flex items-center justify-center">
                                        <FiCheck className="text-white text-xs" />
                                    </div>
                                    <h4 className="text-base md:text-lg font-semibold text-gray-700">
                                        {text}
                                    </h4>
                                </div>

                            ))}
                        </div>


                        {/* Các item lợi ích */}
                        {[
                            { icon: <FiDollarSign />, title: "Tiết kiệm chi phí", desc: "Tiết kiệm chi phí, thời gian và nhân lực vận hành ứng dụng." },
                            { icon: <FiShare2 />, title: "Marketing hiệu quả", desc: "Tận dụng lan truyền xã hội, đòn bẩy social trên Zalo, Momo." },
                            { icon: <FiHeart />, title: "Khách hàng trung thành", desc: "Áp dụng các chương trình khuyến mãi và tích điểm để kích thích mua hàng." }
                        ].map((item, i) => (
                            <div key={i} className="group flex items-center gap-4 h-full">
                                <div className="bg-blue-400 group-hover:bg-blue-900 transition-colors duration-300 rounded-full p-3 flex items-center justify-center flex-shrink-0">
                                    {React.cloneElement(item.icon, { className: "text-white text-2xl" })}
                                </div>
                                <div className="flex flex-col text-left">
                                    <h3 className="font-medium font-roboto text-lg md:text-xl mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 font-manrope text-sm md:text-base">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Users benefits section  */}
            <article className="relative flex-grow max-w-full mx-auto px-4 sm:px-8 lg:px-12 overflow-x-hidden">
                <h2
                    ref={h2Refuser}
                    className="text-4xl sm:text-6xl xl:text-7xl mb-8 md:mb-16  max-w-fullbg-o leading-tight font-roboto text-gray-800 flex"
                    style={{ overflow: 'visible', lineHeight: '1.2', minHeight: '1em' }}
                >
                    {"Lợi ích cho người dùng".split('').map((char, idx) => (
                        <span
                            key={idx}
                            className={`inline-block transition-all duration-500 ease-out
          ${animateH2user ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
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
                <p className="text-gray-700 text-base md:text-xl text-left w-full mx-auto font-manrope">
                    Zalo Mini App giúp doanh nghiệp xây dựng và tích hợp ứng dụng trên zalo 1 cách đơn giản, dễ dàng, tiện lợi và hiệu quả.
                </p>
            </article>
            <section className="relative flex-grow max-w-full xl:my-24 my-10 w-full mx-auto px-2 sm:px-8 lg:px-12 pb-16 overflow-x-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: 3 Phone Images */}
                    <div className="flex justify-center relative">
                        {/* Phone 1 */}
                        <motion.img
                            src="https://miniapp.vn/wp-content/uploads/2024/01/banner-miniapp-2.png"
                            alt="Phone 1"
                            className="top-4 right-20 xl:right-36 max-h-[100%] relative z-10"
                            animate={{ y: [0, -10, 5, -5, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "easeInOut",
                                delay: 0.2,
                            }}
                        />
                        {/* Phone 2 */}
                        <motion.img
                            src="https://miniapp.vn/wp-content/uploads/2024/01/thetichdiem3.png"
                            alt="Phone 2"
                            className="absolute top-36 sm:left-60 md:left-28 xl:left-40 max-h-[100%] z-20 drop-shadow-xl"
                            animate={{ y: [0, 12, -8, 4, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "easeInOut",
                                delay: 0.7,
                            }}
                        />
                        {/* Phone 3 */}
                        <motion.img
                            src="https://miniapp.vn/wp-content/uploads/2024/01/thetichdiem2.png"
                            alt="Phone 3"
                            className="absolute top-24 left-72 max-h-[100%] z-30 drop-shadow-xl hidden xl:block"
                            animate={{ y: [0, -15, 10, -5, 0] }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "easeInOut",
                                delay: 1.1,
                            }}
                        />
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col gap-8 px-6 md:px-0 h-full justify-start">
                        {/* Tiêu đề đầu trang */}
                        <div className="flex flex-col gap-2 text-left">
                            <div className="flex items-center gap-3">
                                <p className="text-base md:text-lg text-gray-700">
                                    Mini App giúp người dùng dễ dàng truy cập, trải nghiệm nhanh chóng, đa dạng các dịch vụ.
                                </p>
                            </div>
                        </div>


                        {[
                            { icon: <FiDownload />, title: "Trải nghiệm nhanh chóng", desc: "User dễ dàng truy cập Mini App ngay trên Zalo hay Momo" },
                            { icon: <FiDownload />, title: "Giao diện đơn giản", desc: "Tinh gọn thiết kế phù hợp với nhu cầu sử dụng" },
                            { icon: <FiDownload />, title: "Tính tiện dụng cao", desc: "Liên kết sẵn tài khoản, số điện thoại, … thuận tiện" },
                            { icon: <FiDownload />, title: "Dễ dàng chia sẻ", desc: "Trực tiếp cho bạn bè, nhóm chat trên Zalo" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group flex items-center gap-4 h-full cursor-pointer"
                            >
                                <div className="bg-blue-400 group-hover:bg-blue-900 transition-colors duration-300 rounded-full p-3 flex items-center justify-center flex-shrink-0">
                                    {React.cloneElement(item.icon, {
                                        className:
                                            "text-white text-2xl transition-colors duration-300",
                                    })}
                                </div>
                                <div className="flex flex-col text-left">
                                    <h3 className="font-medium font-roboto text-lg md:text-xl mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 font-manrope text-sm md:text-base">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Label & Logos */}
                        <div className="mt-6">
                            <h4 className="font-medium font-roboto text-lg md:text-xl text-gray-800 mb-8">
                                Sản phẩm trong hệ sinh thái của Zalo
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-y-12">
                                {["zaloaccout.jpg", "zalozns.jpg", "zaloads.jpg", "miniapp.jpg"].map((logo, i) => (
                                    <img
                                        key={i}
                                        src={`/svg/logos/${logo}`}
                                        alt={`Logo ${i + 1}`}
                                        className="h-8 w-auto object-contain mx-auto hover:scale-105 transition-transform"
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default ZaloMiniApp;
