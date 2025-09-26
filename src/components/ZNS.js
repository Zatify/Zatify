import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar, faPhone, faGift } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

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

const ZaloNotificationService = () => {
    const [openDetail, setOpenDetail] = useState(null);
    const contentRefs = React.useRef([]);
    const [znsTab, setZnsTab] = useState(2);

    // Hiệu ứng cho tiêu đề 
    const [titleRef, animateTitle] = useAnimateOnScroll();
    const [h2Ref, animateH2] = useAnimateOnScroll();
    const [h2Refcus, animateH2cus] = useAnimateOnScroll();
    const [h2Refpart, animateH2part] = useAnimateOnScroll();
    const [h2Reffaq, animateH2faq] = useAnimateOnScroll();
    const [h2Refzns, animateH2zns] = useAnimateOnScroll();

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
            <section className="service-single-layout flex flex-col md:flex-row max-w-full 0.5xl:mx-14 mt-52 p-6 gap-10">
                {/* Sidebar left */}
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
                <main className="service-single-main w-full md:w-3/4 2xl:w-4/5 flex flex-col gap-8">
                    {/* Main heading and paragraphs */}
                    <article className="main-content w-full mx-auto max-w-[80rem] 2xl:max-w-[85rem] px-0 py-0 bg-transparent">
                        <h1
                            ref={titleRef}
                            className="text-[2.5rem] leading-[1.1] font-roboto xl:text-7xl md:pl-0 max-w-[600px] 0.5xl:max-w-[100%]"
                            style={{ overflow: 'visible', lineHeight: '1.2', minHeight: '1em' }}
                        >
                            {"Giải pháp Chăm sóc Khách hàng Tiết kiệm & Hiệu quả trên Zalo".split(' ').map((word, wordIndex) => (
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
                                    {wordIndex < "Giải pháp Chăm sóc Khách hàng Tiết kiệm & Hiệu quả trên Zalo".split(' ').length - 1 && '\u00A0'}
                                </span>
                            ))}
                        </h1>
                        <p className="font-manrope max-w-full 2xl:text-xl text-base xl:text-lg md:pl-0  mt-8 leading-relaxed">
                            Zalo Notification Service (ZNS) là dịch vụ gửi thông báo chăm sóc khách hàng tới các số điện thoại đang sử dụng Zalo
                        </p>
                    </article>

                    {/* ZNS Template Section  */}
                    <section className="relative w-full flex-grow my-6 max-w-[62rem] 2xl:max-w-[85rem] mx-auto pb-16">
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
                                        label: <span className="font-manrope text-sm md:text-base xl:text-lg">ZNS Giao dịch</span>,
                                        icon: <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-base sm:text-lg md:text-xl xl:text-xl" />,
                                    },
                                    {
                                        label: <span className="font-manrope text-sm md:text-base xl:text-lg">ZNS Chăm sóc khách hàng</span>,
                                        icon: <FontAwesomeIcon icon={faPhone} className="text-base sm:text-lg md:text-xl xl:text-xl" />,
                                    },
                                    {
                                        label: <span className="font-manrope text-sm md:text-base xl:text-lg">ZNS Khuyến mãi</span>,
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
                                            className="flex-shrink-0 flex flex-col items-center w-[170px] xl:w-[228px] 2xl:w-[322px]"
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
                </main>
            </section>

            {/* ZNS Section */}
            <section className="relative flex-grow max-w-full xl:my-16 my-10 sm:max-w-[85rem] mx-auto px-2 sm:px-8 lg:px-12 pb-16">
                <img
                    src="/svg/bg-opacity.svg"
                    alt="Background opacity effect"
                    className="absolute inset-0 top-48 rounded-bl-3xl rounded-br-3xl pointer-events-none opacity-60"
                />

                {/* Heading */}
                         <h2
                            ref={h2Refzns}
                            className="text-[2.5rem] leading-[1.1] font-roboto text-center xl:text-7xl md:pl-0 max-w-[600px] 0.5xl:max-w-[100%]"
                            style={{ overflow: 'visible', lineHeight: '1.2', minHeight: '1em' }}
                        >
                            {"Tại sao doanh nghiệp dùng ZNS".split(' ').map((word, wordIndex) => (
                                <span key={wordIndex} style={{ display: 'inline-block' }}>
                                    {word.split('').map((char, charIndex) => (
                                        <span
                                            key={charIndex}
                                            className={`inline-block transition-all duration-1000 ease-out
          ${animateH2zns ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
                                            style={{
                                                transitionDelay: `${(wordIndex * 150) + (charIndex * 50)}ms`,
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            {char}
                                        </span>
                                    ))}
                                    {wordIndex < "Giải pháp Chăm sóc Khách hàng Tiết kiệm & Hiệu quả trên Zalo".split(' ').length - 1 && '\u00A0'}
                                </span>
                            ))}
                        </h2>
                {/* Features grid */}
                <div className="flex flex-col items-center">
                    {/* Top row - 3 features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 xl:gap-x-24 gap-y-8 mt-[-30px] sm:mt-0 mb-12">

                        {/* Feature 1 */}
                        <article className="flex flex-col items-center text-center space-y-4 xl:space-y-6 max-w-xs">
                            <img
                                src="https://content.zalo.cloud/uploads/ic_advantage_1_3f3e77ffbf.svg"
                                alt="Nội dung đa dạng"
                                className="w-20 h-20"
                            />
                            <h3 className="text-lg md:text-xl font-roboto text-gray-900">Nội dung đa dạng</h3>
                            <p className="text-gray-600 leading-relaxed font-manrope text-sm md:text-base">
                                Tạo thông báo với giới hạn hàng trăm ký tự có đủ văn bản dạng phong phú (nội dung dạng bảng, nội dung chứa ảnh, nút CTA…)
                            </p>
                        </article>

                        {/* Feature 2 */}
                        <article className="flex flex-col items-center text-center space-y-4 xl:space-y-6 max-w-xs">
                            <img
                                src="https://content.zalo.cloud/uploads/ic_advantage_2_0c886dcd4b.svg"
                                alt="Tiết kiệm chi phí"
                                className="w-20 h-20"
                            />
                            <h3 className="text-lg md:text-xl font-roboto text-gray-900">Tiết kiệm chi phí</h3>
                            <p className="text-gray-600 leading-relaxed font-manrope text-sm md:text-base">
                                Chỉ trả phí trên số ZNS được xử lý thành công với giá cạnh tranh và minh bạch chỉ từ 200đ.
                            </p>
                        </article>

                        {/* Feature 3 */}
                        <article className="flex flex-col items-center text-center space-y-4 xl:space-y-6 max-w-xs">
                            <img
                                src="https://content.zalo.cloud/uploads/ic_advantage_3_8939b96d9d.svg"
                                alt="Tương tác 2 chiều"
                                className="w-20 h-20"
                            />
                            <h3 className="text-lg md:text-xl font-roboto text-gray-900">Tương tác 2 chiều</h3>
                            <p className="text-gray-600 leading-relaxed font-manrope text-sm md:text-base">
                                Tiếp tục duy trì hội thoại qua Tài khoản doanh nghiệp (Official Account) nếu người nhận phản hồi với thông báo.
                            </p>
                        </article>
                    </div>

                    {/* Bottom row - 2 features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 xl:gap-x-24 gap-y-8">

                        {/* Feature 4 */}
                        <article className="flex flex-col items-center text-center space-y-4 xl:space-y-6 max-w-xs">
                            <img
                                src="https://content.zalo.cloud/uploads/ic_advantage_4_748802bbef.svg"
                                alt="Tiếp cận chủ động"
                                className="w-20 h-20"
                            />
                            <h3 className="text-lg md:text-xl font-roboto text-gray-900">Tiếp cận chủ động</h3>
                            <p className="text-gray-600 leading-relaxed font-manrope text-sm md:text-base">
                                Gửi thông báo đến khách hàng khi có số điện thoại đăng ký dùng Zalo, không yêu cầu điều kiện khách hàng phải follow OA trước đó.
                            </p>
                        </article>

                        {/* Feature 5 */}
                        <article className="flex flex-col items-center text-center space-y-4 xl:space-y-6 max-w-xs">
                            <img
                                src="https://content.zalo.cloud/uploads/ic_advantage_5_6024271193.svg"
                                alt="Theo dõi dễ dàng"
                                className="w-20 h-20"
                            />
                            <h3 className="text-lg md:text-xl  text-gray-900 font-roboto">Theo dõi dễ dàng</h3>
                            <p className="text-gray-600 leading-relaxed font-manrope text-sm md:text-base">
                                Nắm thông tin lượt xử lý thành công theo ngày với khả năng theo dõi lượng tương tác qua nút CTA nếu dẫn đến web/app của doanh nghiệp.        </p>
                        </article>
                    </div>
                </div>
            </section>



            {/* FAQ Section */}
            <section className=" relative xl:my-20 my-16 flex-grow max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 pb-16 overflow-hidden">
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
                                        className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed font-manrope"
                                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                                    />
                                </div>

                            </details>
                        ))}
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
          {[1,2,6,4,5,3,7,8].map(index => (
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
    )
}

export default ZaloNotificationService;
