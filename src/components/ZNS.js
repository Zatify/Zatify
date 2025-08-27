import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar, faPhone, faGift } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { motion } from "framer-motion";
import { Pagination, Autoplay } from "swiper/modules";

const ZaloNotificationService = () => {
    const [openDetail, setOpenDetail] = useState(null);
    const contentRefs = React.useRef([]);
    const [znsTab, setZnsTab] = useState(2);

    // Hiệu ứng cho tiêu đề 
    const [animateTitle, setAnimateTitle] = React.useState(false);
    const titleRef = React.useRef(null);
    const h2Ref = useRef(null);
    const [animateH2, setAnimateH2] = useState(false);
    const h2Refcus = useRef(null);
    const [animateH2cus, setAnimateH2cus] = useState(false);
    const h2Reffaq = useRef(null);
    const [animateH2faq, setAnimateH2faq] = useState(false);
    const h2Refzns = useRef(null);
    const [animateH2zns, setAnimateH2zns] = useState(false);

    // Danh sách câu hỏi/đáp án FAQ
    const faqList = [
        {
            question: "Làm thế nào để đăng ký sử dụng ZNS?",
            answer:
                "Để bắt đầu sử dụng ZNS, bạn cần có tài khoản Zalo Official Account (ZOA) và Zalo Cloud Account (ZCA). Liên hệ sales@zatify.com.vn hoặc cs@zatify.com.vn để được hỗ trợ.",
        },
        {
            question: "Zalo Notification Service (ZNS) là gì?",
            answer: `
      <p>Zalo Notification Service (ZNS) là giải pháp gửi thông báo từ Zalo Official Account (OA) của doanh nghiệp tới khách hàng trên nền tảng Zalo.</p>
      <p>ZNS giúp doanh nghiệp:</p>
      <ul class="list-disc list-inside ml-5">
        <li>Nâng cao hiệu quả tương tác với khả năng cá nhân hóa nội dung thông tin đa dạng và đẹp mắt.</li>
        <li>Tối ưu hóa vận hành với hệ thống kết nối hoàn toàn thông qua openAPI.</li>
        <li>Tiết kiệm chi phí với chính sách giá linh hoạt.</li>
      </ul>
    `,
        },
        {
            question: "ZNS tính phí như thế nào?",
            answer:
                "ZNS tính phí dựa trên số lệnh được xử lý thành công trong khoảng thời gian cam kết. Nếu xử lý thất bại (thông báo ZNS không đến máy người nhận) hoặc xử lý thành công nhưng không nằm trong thời gian cam kết thì sẽ không tính phí.",
        },
        {
            question: "ZNS có thể gửi đến khách hàng không sử dụng Zalo hay không?",
            answer: "Không, ZNS chỉ được gửi đến nhóm khách hàng có sử dụng Zalo.",
        },
    ];



    const znsTemplates = [
        [
            {
                title: 'Mẫu ZNS giao dịch 1',
                image: '/images/template/zns_transaction_1.png',

            },
            {
                title: 'Mẫu ZNS giao dịch 2',
                image: '/images/template/zns_transaction_2.png',

            },
            {
                title: 'Mẫu ZNS giao dịch 3',
                image: '/images/template/zns_transaction_3.png',

            },
            {
                title: 'Mẫu ZNS giao dịch 4',
                image: '/images/template/zns_transaction_4.png',

            },
        ],
        [
            {
                title: 'Mẫu ZNS CSKH 1',
                image: '/images/template/zns_customer_care_1.png',
            },
            {
                title: 'Mẫu ZNS CSKH 2',
                image: '/images/template/zns_customer_care_2.png',

            },
            {
                title: 'Mẫu ZNS CSKH 3',
                image: '/images/template/zns_customer_care_3.png',

            },
            {
                title: 'Mẫu ZNS CSKH 4',
                image: '/images/template/zns_customer_care_4.png',

            },
        ],
        [
            {
                title: 'Mẫu ZNS Khuyến mãi 1',
                image: '/images/template/zns_promotion_1.png',

            },
            {
                title: 'Mẫu ZNS Khuyến mãi 2',
                image: '/images/template/zns_promotion_2.png',

            },
            {
                title: 'Mẫu ZNS Khuyến mãi 3',
                image: '/images/template/zns_promotion_3.png',

            },
            {
                title: 'Mẫu ZNS Khuyến mãi 4',
                image: '/images/template/zns_promotion_4.png',

            },
        ]
    ];

    // Helper to get content height
    const getContentHeight = idx => {
        const el = contentRefs.current[idx];
        return el ? el.scrollHeight : 0;
    };

    React.useEffect(() => {
        // Trigger hiệu ứng khi tiêu đề vào viewport
        function onScrollTitle() {
            if (!titleRef.current) return;
            const rect = titleRef.current.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setAnimateTitle(true);
                window.removeEventListener('scroll', onScrollTitle);
            }
        }
        window.addEventListener('scroll', onScrollTitle);
        onScrollTitle();
        return () => window.removeEventListener('scroll', onScrollTitle);
    }, []);

    React.useEffect(() => {
        if (openDetail !== null && contentRefs.current[openDetail]) {
            const el = contentRefs.current[openDetail];
            el.style.transition = 'none';
            el.style.maxHeight = '0px';
            void el.offsetHeight;
            el.style.transition =
                'max-height 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)';
            el.style.maxHeight = el.scrollHeight + 'px';
        }
    }, [openDetail]);

    useEffect(() => {
        const handleScroll = () => {
            if (h2Reffaq.current) {
                const rect2 = h2Reffaq.current.getBoundingClientRect();
                if (rect2.top < window.innerHeight - 80) {
                    setAnimateH2faq(true);
                }
            }
            if (h2Refzns.current) {
                const rect2 = h2Refzns.current.getBoundingClientRect();
                if (rect2.top < window.innerHeight - 80) {
                    setAnimateH2zns(true);
                }
            }
            if (h2Refcus.current) {
                const rect2 = h2Refcus.current.getBoundingClientRect();
                if (rect2.top < window.innerHeight - 80) {
                    setAnimateH2cus(true);
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setAnimateH2(true);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        if (h2Ref.current) {
            observer.observe(h2Ref.current);
        }

        return () => {
            if (h2Ref.current) {
                observer.unobserve(h2Ref.current);
            }
        };
    }, []);
    return (
        <div className="relative w-full min-h-screen font-sans">
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
                    <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal max-w-5xl leading-none text-center mx-auto select-none" style={{ letterSpacing: 2 }}>Zalo Notification Service</h1>
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
                        <span className="text-sm mb-1">Dịch vụ / Zalo Notification Service</span>
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
            <section className="service-single-layout flex flex-col md:flex-row max-w-full 0.5xl:mx-14 mt-52  gap-10">
                {/* Sidebar left */}
                {/* Sidebar left */}
                <aside className="service-single-sidebar w-full md:w-1/4 flex flex-col gap-6 hidden md:flex">
                    {/* Service list */}
                    <div className="service-list bg-gray-100 p-6 rounded-xl h-auto flex justify-start items-center 0.5xl:h-[340px]">
                        <ul className="space-y-6 text-gray-500 font-manrope text-[20px]">
                            {[
                                "Zalo Official Account",
                                "Zalo Mini App",
                                "Zalo Notification Service",
                                "Zalo Ads",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer flex items-center gap-2 group transition-all duration-300"
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
                            ))}
                        </ul>
                    </div>

                    {/* Brochure */}
                    <div className="service-brochure bg-purple-400 p-6 rounded-xl text-white flex flex-col justify-center 0.5xl:h-[340px]">
                        <div className="mb-4">
                            <h3 className="text-[40px] leading-none my-4 font-roboto">ZATIFY brochure</h3>
                        </div>
                        <div className="border hover:border-none rounded-xl w-[162px] inline-block p-[1px]">
                            <a
                                href="/files/[ZATIFY] Zalo Ecosystem Credential 2025.pdf"
                                download
                                className="justify-center text-sm bg-purple-400 rounded-[0.65rem] px-4 py-2 hover:bg-purple-600 hover:text-white text-white transition flex items-center gap-1 w-[160px] h-[50px]"
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
                <main className="service-single-main w-full md:w-3/4 flex flex-col gap-8">
                    {/* Main heading and paragraphs */}
                    <article className="main-content w-full">
                        <h1
                            ref={titleRef}
                            className="text-[2.5rem] leading-[1.1] font-roboto 0.5xl:text-6xl max-w-[600px] 0.5xl:max-w-[100%]"
                            style={{
                                overflow: 'visible',
                                lineHeight: '1.2',
                                minHeight: '1em',
                                wordBreak: 'break-word',
                                whiteSpace: 'normal',
                                display: 'block',
                            }}
                        >
                            {
                                // Tách theo từ và giữ dấu cách
                                "Giải pháp Chăm sóc Khách hàng Tiết kiệm & Hiệu quả trên Zalo"
                                    .split(/(\s+)/)
                                    .map((wordOrSpace, wordIdx) =>
                                        wordOrSpace.trim() === "" ? (
                                            // Nếu là dấu cách, render luôn
                                            <span key={`space-${wordIdx}`}>{wordOrSpace}</span>
                                        ) : (
                                            // Nếu là từ, map từng ký tự
                                            <span key={`word-${wordIdx}`} style={{ display: 'inline-block' }}>
                                                {wordOrSpace.split('').map((char, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={`inline-block transition-all duration-500 ease-out
                            ${animateTitle
                                                                ? 'opacity-100 translate-y-0'
                                                                : 'opacity-0 translate-y-8'}
                          `}
                                                        style={{
                                                            transitionDelay: `${(wordIdx * 10 + idx) * 15}ms`,
                                                            display: 'inline-block',
                                                            lineHeight: '1.2',
                                                        }}
                                                    >
                                                        {char}
                                                    </span>
                                                ))}
                                            </span>
                                        )
                                    )
                            }
                        </h1>
                        <p className="font-manrope max-w-full mb-6 leading-relaxed">
                            Zalo Notification Service (ZNS) là dịch vụ gửi thông báo chăm sóc khách hàng tới các số điện thoại đang sử dụng Zalo
                        </p>
                    </article>

                    {/* Animated phones + icons section */}

                    <section className="sec_intro w-[105%] md:h-[91vh] xl:h-[114vh] bg-[#f5f8ff] py-12 pb-24 md:pb-0 md:py-20 relative overflow-hidden">
                        <div className="container max-w-[1440px] relative z-10">
                            <div className="content_main flex flex-col md:flex-row items-center mt-14 justify-between relative z-20">

                                {/* Phones + Icons cluster */}
                                <div className="ani_images relative flex-1 flex items-center justify-center">
                                    <div className="inner relative top-[10vh] right-[10%] md:left-[20%] flex items-start gap-16">

                                        {/* Phone 1 */}
                                        <div className="images relative z-10">
                                            <img
                                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/sec_intro_2.png"
                                                alt="Phone 1"
                                                className="w-[150px] md:w-[210px] lg:w-[265px] z-10 relative"
                                            />

                                            {/* Decorative overlays */}
                                            <div className="deco3 absolute left-[-50%] top-[15vh] w-20 md:w-28">
                                                <img className="w-full" src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/deco3.png" alt="" />
                                            </div>
                                            <div className="deco2 absolute right-[-25%] top-[-7vh] w-20 md:w-28">
                                                <img className="w-full" src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/deco2.png" alt="" />
                                            </div>
                                            <div className="deco1 absolute right-[-45%] bottom-[1vh] w-16 md:w-20">
                                                <img className="w-full" src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/deco1.png" alt="" />
                                            </div>
                                        </div>

                                        {/* Icons bar below both phones (Desktop only) */}
                                        <div className="ani absolute bottom-[20vh] left-0 w-full items-center justify-center md:flex hidden">
                                            <div className="wrap relative flex flex-col left-[12%] justify-between items-center w-[calc(100%-17rem)] max-w-[600px]">

                                                {/* Item 1 */}
                                                <div className="item w-full relative flex items-center justify-center h-[10vh]">
                                                    <motion.div
                                                        className="absolute flex items-center gap-3"
                                                        style={{ top: 40, zIndex: 2 }}
                                                        initial={{ x: -250 }}
                                                        animate={{ x: 50 }}
                                                        transition={{
                                                            repeat: Infinity,
                                                            repeatType: "loop",
                                                            duration: 2.8,
                                                            ease: "easeInOut",
                                                            delay: 0.78
                                                        }}
                                                    >

                                                        {/* Line + Number */}
                                                        <div className="box_wrap flex flex-col items-center">
                                                            <div className="number">
                                                                <img
                                                                    className="w-full max-w-[200px]"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/number.png"
                                                                    alt="number"
                                                                />
                                                            </div>
                                                            <div className="line my-2">
                                                                <img
                                                                    className="w-full max-w-[200px]"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/line.svg"
                                                                    alt="line"
                                                                />
                                                            </div>
                                                            <div className="number">
                                                                <img
                                                                    className="w-full max-w-[200px]"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/number.png"
                                                                    alt="number"
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Icon */}
                                                        <div className="icon flex-shrink-0">
                                                            <img
                                                                className="w-10 md:w-14"
                                                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/ani_call.svg"
                                                                alt="Call"
                                                            />
                                                        </div>
                                                    </motion.div>
                                                </div>


                                                {/* Item 2 */}
                                                <div className="item w-full relative flex items-center justify-center h-[10vh]">
                                                    <motion.div
                                                        className="absolute left-0 right-0 flex items-center"
                                                        style={{ top: 40, zIndex: 1 }}
                                                        initial={{ x: 280 }}
                                                        animate={{ x: -10 }}
                                                        transition={{
                                                            repeat: Infinity,
                                                            repeatType: "loop",
                                                            duration: 2.8,
                                                            ease: "easeInOut",
                                                            delay: 0.78
                                                        }}
                                                    >
                                                        {/* Icon */}
                                                        <div className="icon flex-shrink-0">
                                                            <img
                                                                className="w-10 md:w-14"
                                                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/ani_mess.svg"
                                                                alt="Call"
                                                            />
                                                        </div>
                                                        {/* Line + Number */}
                                                        <div className="box_wrap ml-4 flex flex-col items-center">
                                                            <div className="number">
                                                                <img
                                                                    className="w-full max-w-[200px] rotate-180"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/number.png"
                                                                    alt="number"
                                                                />
                                                            </div>
                                                            <div className="line my-2">
                                                                <img
                                                                    className="w-full max-w-[200px] rotate-180"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/line.svg"
                                                                    alt="line"
                                                                />
                                                            </div>
                                                            <div className="number">
                                                                <img
                                                                    className="w-full max-w-[200px] rotate-180"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/number.png"
                                                                    alt="number"
                                                                />
                                                            </div>
                                                        </div>

                                                    </motion.div>
                                                </div>

                                                {/* Item 3 */}
                                                <div className="item w-full relative flex items-center justify-center h-[10vh]">
                                                    <motion.div
                                                        className="absolute flex items-center gap-3"
                                                        style={{ top: 40, zIndex: 2 }}
                                                        initial={{ x: -250 }}
                                                        animate={{ x: 50 }}
                                                        transition={{
                                                            repeat: Infinity,
                                                            repeatType: "loop",
                                                            duration: 2.8,
                                                            ease: "easeInOut",
                                                            delay: 0.78
                                                        }}
                                                    >

                                                        {/* Line + Number */}
                                                        <div className="box_wrap flex flex-col items-center">
                                                            <div className="number">
                                                                <img
                                                                    className="w-full max-w-[200px]"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/number.png"
                                                                    alt="number"
                                                                />
                                                            </div>
                                                            <div className="line my-2">
                                                                <img
                                                                    className="w-full max-w-[200px]"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/line.svg"
                                                                    alt="line"
                                                                />
                                                            </div>
                                                            <div className="number">
                                                                <img
                                                                    className="w-full max-w-[200px]"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/number.png"
                                                                    alt="number"
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Icon */}
                                                        <div className="icon flex-shrink-0">
                                                            <img
                                                                className="w-10 md:w-14"
                                                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/ani_img.svg"
                                                                alt="Picture"
                                                            />
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Icons bar for mobile */}
                                        <div className="ani absolute bottom-[10vh] left-0 w-full flex items-center justify-center md:hidden">
                                            <div className="wrap relative flex flex-col left-[2%] justify-between items-center w-[calc(100%-3rem)] max-w-[340px]">
                                                {/* Item 1 */}
                                                <div className="item w-full relative flex items-center justify-center h-[7vh]">
                                                    <motion.div
                                                        className="absolute flex items-center gap-2"
                                                        style={{ top: 20, zIndex: 2 }}
                                                        initial={{ x: -100 }}
                                                        animate={{ x: 70 }}
                                                        transition={{
                                                            repeat: Infinity,
                                                            repeatType: "loop",
                                                            duration: 2.8,
                                                            ease: "easeInOut",
                                                            delay: 0.78
                                                        }}
                                                    >

                                                        {/* Line + Number */}
                                                        <div className="box_wrap flex flex-col items-center">
                                                            <div className="number">
                                                                <img
                                                                    className="w-full max-w-[90px]"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/number.png"
                                                                    alt="number"
                                                                />
                                                            </div>
                                                            <div className="line my-1">
                                                                <img
                                                                    className="w-full max-w-[90px]"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/line.svg"
                                                                    alt="line"
                                                                />
                                                            </div>
                                                            <div className="number">
                                                                <img
                                                                    className="w-full max-w-[90px]"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/number.png"
                                                                    alt="number"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* Icon */}
                                                        <div className="icon flex-shrink-0">
                                                            <img
                                                                className="w-7"
                                                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/ani_call.svg"
                                                                alt="Call"
                                                            />
                                                        </div>
                                                    </motion.div>
                                                </div>
                                                {/* Item 2 */}
                                                <div className="item w-full relative flex items-center justify-center h-[7vh]">
                                                    <motion.div
                                                        className="absolute left-0 right-0 flex items-center"
                                                        style={{ top: 20, zIndex: 1 }}
                                                        initial={{ x: 250 }}
                                                        animate={{ x: 80 }}
                                                        transition={{
                                                            repeat: Infinity,
                                                            repeatType: "loop",
                                                            duration: 2.8,
                                                            ease: "easeInOut",
                                                            delay: 0.78
                                                        }}
                                                    >
                                                        {/* Icon */}
                                                        <div className="icon flex-shrink-0">
                                                            <img
                                                                className="w-7"
                                                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/ani_mess.svg"
                                                                alt="Call"
                                                            />
                                                        </div>
                                                        {/* Line + Number */}
                                                        <div className="box_wrap ml-2 flex flex-col items-center">
                                                            <div className="number">
                                                                <img
                                                                    className="w-full max-w-[90px] rotate-180"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/number.png"
                                                                    alt="number"
                                                                />
                                                            </div>
                                                            <div className="line my-1">
                                                                <img
                                                                    className="w-full max-w-[90px] rotate-180"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/line.svg"
                                                                    alt="line"
                                                                />
                                                            </div>
                                                            <div className="number">
                                                                <img
                                                                    className="w-full max-w-[90px] rotate-180"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/number.png"
                                                                    alt="number"
                                                                />
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                                {/* Item 3 */}
                                                <div className="item w-full relative flex items-center justify-center h-[7vh]">
                                                    <motion.div
                                                        className="absolute flex items-center gap-2"
                                                        style={{ top: 20, zIndex: 2 }}
                                                        initial={{ x: -100 }}
                                                        animate={{ x: 70 }}
                                                        transition={{
                                                            repeat: Infinity,
                                                            repeatType: "loop",
                                                            duration: 2.8,
                                                            ease: "easeInOut",
                                                            delay: 0.78
                                                        }}
                                                    >

                                                        {/* Line + Number */}
                                                        <div className="box_wrap flex flex-col items-center">
                                                            <div className="number">
                                                                <img
                                                                    className="w-full max-w-[90px]"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/number.png"
                                                                    alt="number"
                                                                />
                                                            </div>
                                                            <div className="line my-1">
                                                                <img
                                                                    className="w-full max-w-[90px]"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/line.svg"
                                                                    alt="line"
                                                                />
                                                            </div>
                                                            <div className="number">
                                                                <img
                                                                    className="w-full max-w-[90px]"
                                                                    src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/number.png"
                                                                    alt="number"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* Icon */}
                                                        <div className="icon flex-shrink-0">
                                                            <img
                                                                className="w-7"
                                                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/ani_img.svg"
                                                                alt="Picture"
                                                            />
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End mobile motion icons */}
                                        {/* Phone 2 */}
                                        <div className="images relative left-[20%] md:left-[26%] z-20">
                                            <img
                                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/sec_intro_1.png"
                                                alt="Phone 2"
                                                className="w-[150px] md:w-[210px] lg:w-[265px]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Laptop */}
                                <div className="flex-1 flex items-center justify-end mt-12 md:mt-0 relative overflow-hidden">
                                    <img
                                        src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/deco5.png"
                                        alt="Laptop"
                                        className="hidden md:block w-[150%] max-w-none translate-x-1/3"
                                    />
                                </div>

                            </div>
                        </div>
                    </section>




                </main>
            </section>

            {/* ZNS Template Section  */}
            <section className="relative flex-grow my-16 xl:my-40 max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 pb-16">
                {/* Tabs */}
                <div className="flex flex-col px-0 py-0 bg-transparent">
                    <h2
                        ref={h2Ref}
                        className="text-4xl sm:text-7xl max-w-fullbg-o leading-tight mb-16 font-roboto text-gray-800 flex"
                        style={{ overflow: 'visible', lineHeight: '1.2', minHeight: '1em' }}
                    >
                        {"Chọn loại mẫu ZNS".split('').map((char, idx) => (
                            <span
                                key={idx}
                                className={`inline-block transition-all duration-500 ease-out
          ${animateH2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
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
                    <div className="flex gap-2 sm:gap-8 items-center border-b border-[#e0e7ef]">
                        {[
                            {
                                label: <span className="text-xs sm:text-sm md:text-lg xl:text-xl">ZNS Giao dịch</span>,
                                icon: <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-base sm:text-lg md:text-xl xl:text-xl" />,
                            },
                            {
                                label: <span className="text-xs sm:text-sm md:text-lg xl:text-xl">ZNS Chăm sóc khách hàng</span>,
                                icon: <FontAwesomeIcon icon={faPhone} className="text-base sm:text-lg md:text-xl xl:text-xl" />,
                            },
                            {
                                label: <span className="text-xs sm:text-sm md:text-lg xl:text-xl">ZNS Khuyến mãi</span>,
                                icon: <FontAwesomeIcon icon={faGift} className="text-base sm:text-lg md:text-xl xl:text-xl" />,
                            },
                        ].map((tab, i) => (
                            <button
                                key={i}
                                className={`flex items-center gap-1 sm:gap-2 px-1 sm:px-2 pb-2 border-b-2 transition font-semibold text-xs sm:text-sm md:text-lg bg-transparent
        ${znsTab === i
                                        ? 'border-[#2e6fff] text-[#2e6fff]'
                                        : 'border-transparent text-[#7b8190] hover:text-[#2e6fff]'
                                    }`}
                                onClick={() => setZnsTab(i)}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>


                    {/* Templates */}
                    <div className="flex gap-6 mt-8 overflow-x-auto flex-nowrap scrollbar-hide">
                        {znsTemplates[znsTab] && znsTemplates[znsTab].length > 0 ? (
                            znsTemplates[znsTab].map((tpl, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 flex flex-col items-center w-[180px] xl:w-[298px] 2xl:w-[320px]"
                                >
                                    <img
                                        src={tpl.image}
                                        alt={tpl.title}
                                        className="rounded-2xl w-full h-auto object-cover mb-2"
                                        style={{ background: '#fff' }}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="text-gray-400 text-lg italic py-20 px-10">
                                Chưa có mẫu minh họa
                            </div>
                        )}
                    </div>

                </div>

            </section>

            {/* ZNS Section */}
            <section className="relative flex-grow max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 pb-16">
                <img
                    src="/svg/bg-opacity.svg"
                    alt="Background opacity effect"
                    className="absolute inset-0 top-48 rounded-bl-3xl rounded-br-3xl pointer-events-none opacity-60"
                />

                {/* Heading */}
                <h2
                    ref={h2Refzns}
                    className="text-4xl sm:text-7xl max-w-fullbg-o leading-tight mb-16 font-roboto text-gray-800 flex"
                    style={{ overflow: 'visible', lineHeight: '1.2', minHeight: '1em' }}
                >
                    {"Tại sao doanh nghiệp dùng ZNS".split('').map((char, idx) => (
                        <span
                            key={idx}
                            className={`inline-block transition-all duration-500 ease-out
          ${animateH2zns ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
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
                <div className="flex flex-col items-center">
                    {/* Top row - 3 features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 mt-[-30px] sm:mt-0 mb-12">

                        {/* Feature 1 */}
                        <article className="flex flex-col items-center text-center space-y-4 max-w-xs">
                            <img
                                src="https://content.zalo.cloud/uploads/ic_advantage_1_3f3e77ffbf.svg"
                                alt="Nội dung đa dạng"
                                className="w-20 h-20"
                            />
                            <h3 className="text-lg font-roboto text-gray-900">Nội dung đa dạng</h3>
                            <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                                Tạo thông báo với giới hạn hàng trăm ký tự có đủ văn bản dạng phong phú (nội dung dạng bảng, nội dung chứa ảnh, nút CTA…)
                            </p>
                        </article>

                        {/* Feature 2 */}
                        <article className="flex flex-col items-center text-center space-y-4 max-w-xs">
                            <img
                                src="https://content.zalo.cloud/uploads/ic_advantage_2_0c886dcd4b.svg"
                                alt="Tiết kiệm chi phí"
                                className="w-20 h-20"
                            />
                            <h3 className="text-lg font-roboto text-gray-900">Tiết kiệm chi phí</h3>
                            <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                                Chỉ trả phí trên số ZNS được xử lý thành công với giá cạnh tranh và minh bạch chỉ từ 200đ.
                            </p>
                        </article>

                        {/* Feature 3 */}
                        <article className="flex flex-col items-center text-center space-y-4 max-w-xs">
                            <img
                                src="https://content.zalo.cloud/uploads/ic_advantage_3_8939b96d9d.svg"
                                alt="Tương tác 2 chiều"
                                className="w-20 h-20"
                            />
                            <h3 className="text-lg font-roboto text-gray-900">Tương tác 2 chiều</h3>
                            <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                                Tiếp tục duy trì hội thoại qua Tài khoản doanh nghiệp (Official Account) nếu người nhận phản hồi với thông báo.
                            </p>
                        </article>
                    </div>

                    {/* Bottom row - 2 features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">

                        {/* Feature 4 */}
                        <article className="flex flex-col items-center text-center space-y-4 max-w-xs">
                            <img
                                src="https://content.zalo.cloud/uploads/ic_advantage_4_748802bbef.svg"
                                alt="Tiếp cận chủ động"
                                className="w-20 h-20"
                            />
                            <h3 className="text-lg font-roboto text-gray-900">Tiếp cận chủ động</h3>
                            <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                                Gửi thông báo đến khách hàng khi có số điện thoại đăng ký dùng Zalo, không yêu cầu điều kiện khách hàng phải follow OA trước đó.
                            </p>
                        </article>

                        {/* Feature 5 */}
                        <article className="flex flex-col items-center text-center space-y-4 max-w-xs">
                            <img
                                src="https://content.zalo.cloud/uploads/ic_advantage_5_6024271193.svg"
                                alt="Theo dõi dễ dàng"
                                className="w-20 h-20"
                            />
                            <h3 className="text-lg  text-gray-900 font-roboto">Theo dõi dễ dàng</h3>
                            <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                                Nắm thông tin lượt xử lý thành công theo ngày với khả năng theo dõi lượng tương tác qua nút CTA nếu dẫn đến web/app của doanh nghiệp.        </p>
                        </article>
                    </div>
                </div>
            </section>



            {/* FAQ Section */}
            <section className=" relative xl:my-40 my-16 flex-grow max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 pb-16 overflow-hidden">
                <div className="relative max-w-full h-full flex-1">
                    <h2
                        ref={h2Reffaq}
                        className="text-4xl sm:text-7xl max-w-fullbg-o leading-tight mb-16 font-roboto text-gray-800 flex"
                        style={{ overflow: 'visible', lineHeight: '1.2', minHeight: '1em' }}
                    >
                        {"Câu hỏi thường gặp".split('').map((char, idx) => (
                            <span
                                key={idx}
                                className={`inline-block transition-all duration-500 ease-out
          ${animateH2faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
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
                                    <div
                                        className="mt-3 text-gray-700 text-base leading-relaxed font-manrope"
                                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                                    />
                                </div>

                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer of Zatify */}
            <section className="relative flex-grow max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 pb-16">


                {/* Tiêu đề */}
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
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(index => (
                                    <div key={index} className="flex items-center justify-center">
                                        <img
                                            src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`}
                                            alt={`Khách hàng ${index}`}
                                            className="h-16 w-auto max-w-full object-contain"
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
                                {[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map(index => (
                                    <div key={index} className="flex items-center justify-center">
                                        <img
                                            src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`}
                                            alt={`Khách hàng ${index}`}
                                            className="h-16 w-auto max-w-full object-contain"
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
                                {[25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36].map(index => (
                                    <div key={index} className="flex items-center justify-center">
                                        <img
                                            src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`}
                                            alt={`Khách hàng ${index}`}
                                            className="h-16 w-auto max-w-full object-contain"
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
                                {[1, 2, 3, 4, 5, 6].map(index => (
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
                                {[7, 8, 9, 10, 11, 12].map(index => (
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
                                {[13, 14, 15, 16, 17, 18].map(index => (
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
                                {[19, 20, 21, 22, 23, 24].map(index => (
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
                                {[25, 26, 27, 28, 29, 30].map(index => (
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
                                {[31, 32, 33, 34, 35, 36].map(index => (
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



        </div>
    )
}

export default ZaloNotificationService;
