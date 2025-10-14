import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from "swiper/modules";
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


const ZaloAds = () => {
    // Hàm mở popup video (tạm thời dùng alert, bạn có thể thay bằng logic popup thật)
    const popupPlayVideo = (id) => {
        alert(`Play video: ${id}`);
    };
    // State để lưu index của thẻ details đang mở
    const [openDetail, setOpenDetail] = useState(null);
    const contentRefs = React.useRef([]); // Ref array for content divs
    // Detect mobile viewport to swap images
    const [isMobile, setIsMobile] = useState(false);
    React.useEffect(() => {
        if (typeof window === 'undefined') return;
        const mq = window.matchMedia('(max-width: 768px)');
        const handle = (e) => setIsMobile(e.matches);
        // Set initial
        setIsMobile(mq.matches);
        // Add listener in a compatible way
        if (mq.addEventListener) mq.addEventListener('change', handle);
        else if (mq.addListener) mq.addListener(handle);
        return () => {
            if (mq.removeEventListener) mq.removeEventListener('change', handle);
            else if (mq.removeListener) mq.removeListener(handle);
        };
    }, []);
    const [h2Reffaq, animateH2faq] = useAnimateOnScroll();
    const [h2Refcus, animateH2cus] = useAnimateOnScroll();
    const [h2Refpart, animateH2part] = useAnimateOnScroll();
    // Danh sách menu
    const menuItems = [
        "QC Commerce",
        "QC Form",
        "QC Tin Nhắn",
        "QC Website",
        "QC Zalo Official Account",
        "QC Video",
        "QC Bài Viết OA",
    ];

    // State để chọn menu item
    const [selectedItem, setSelectedItem] = useState(menuItems[0]);

    // Nội dung cho từng menu item
    const contentMap = {
        "QC Commerce": {
            title: "Quảng cáo Commerce",
            description: "Quảng cáo Commerce là hình thức quảng cáo dành riêng cho ngành bán lẻ, nhắm tới tập người dùng thường xuyên mua sắm trên Zalo, tối ưu trải nghiệm mua sắm và khuyến khích người xem để lại thông tin đặt hàng ngay trên quảng cáo chỉ với vài click chuột.",
            benefits: [
                "Thiết lập trang giới thiệu sản phẩm một cách dễ dàng, không tốn chi phí tạo dựng website hay chi phí thiết lập gian hàng thương mại điện tử.",
                "Tăng tỷ lệ chuyển đổi đặt hàng và chốt đơn nhờ vào thiết kế tối ưu trải nghiệm người dùng, cùng nội dung trang sản phẩm có thể tuỳ biến."
            ],
            image1: null,
            image2: "/imgzaloads/commerce.png",

        },
        "QC Form": {
            title: "Quảng cáo Form",
            description: "Quảng cáo Form là hình thức quảng cáo nhằm hỗ trợ doanh nghiệp thực hiện thu thập thông tin khách hàng tiềm năng một cách dễ dàng. Quảng cáo sẽ hiển thị luân phiên trên Zalo app (Zalo News Feed, Zalo Article).",
            benefits: [
                "Tối đa hoá tỉ lệ khách hàng quan tâm đến sản phẩm/ dịch vụ của bạn, cung cấp thông tin liên hệ một cách tự động hoá (họ tên, số điện thoại, địa chỉ...) và đơn giản.",
                "Dành cho một số nhóm ngành hàng cao cấp và tiếp cận được đúng khách hàng tiềm năng."
            ],
            image1: "/imgzaloads/form.png",
            image2: null,

        },
        "QC Tin Nhắn": {
            title: "Quảng cáo Tin Nhắn",
            description: "Quảng cáo tin nhắn là hình thức hỗ trợ nhà quảng cáo tương tác trực tiếp với khách hàng tiềm năng qua tin nhắn Zalo. Quảng cáo sẽ hiển thị luân phiên trên các nền tảng của hệ sinh thái Zalo Ads như Zalo app, Báo Mới, Zing Mp3.",
            benefits: [
                "Thu thập thông tin khách hàng, tư vấn 1:1 hoặc chốt đơn ngay trên Zalo.",
                "Tăng tỉ lệ chuyển đổi ra đơn hàng khi sử dụng Chatbot để hỗ trợ trả lời tin tự động.",
                "Tiếp cận lại nhóm khách hàng đã từng tương tác trong tương lai nhằm cập nhật sản phẩm mới/ chương trình khuyến mại."
            ],
            image1: null,
            image2: "/imgzaloads/tinnhan.png",

        },
        "QC Website": {
            title: "Quảng cáo Website",
            description: "Quảng cáo website trên Zalo là hình thức quảng cáo tăng lượng truy cập về website của doanh nghiệp, cửa hàng.",
            benefits: [
                "Chuyển mọi người đến trang liên kết của bạn để mua hàng hoặc để lại thông tin tư vấn.",
                "Tăng lượng truy cập đến ứng dụng di động của bạn, giúp tăng tỉ lệ tải."
            ],
            image1: "/imgzaloads/website.png",
            image2: null,

        },
        "QC Zalo Official Account": {
            title: "Zalo Official Account",
            description: "Quảng cáo Zalo Official Account là hình thức quảng cáo tăng lượng quan tâm trang Zalo Official Account của doanh nghiệp, cửa hàng. Tăng lượt quan tâm cho tài khoản Official Account và tiếp cận lại nhóm khách hàng này dễ dàng và hoàn toàn miễn phí bằng các tính năng của Zalo Official Account.",
            benefits: [
                "Tăng lượt quan tâm cho tài khoản Official Account.",
                "Sau đó, bạn tiếp cận lại nhóm khách hàng này dễ dàng và hoàn toàn miễn phí bằng các tính năng của Zalo Official Account."
            ],
            image1: null,
            image2: "/imgzaloads/ZOA.png",


        },
        "QC Video": {
            title: "Quảng cáo Video",
            description: "Quảng cáo Video là hình thức quảng cáo tương tác với người mua hàng một cách trực quan, sinh động và sáng tạo hơn.",
            benefits: [
                "Tăng độ nhận diện thương hiệu của doanh nghiệp.",
                "Chuyển mọi người đến trang liên kết của bạn để mua hàng hoặc để lại thông tin tư vấn."
            ],
            image1: "/imgzaloads/video.png",
            image2: null,

        },
        "QC Bài Viết OA": {
            title: "Quảng cáo Bài Viết OA",
            description: "Quảng cáo Bài viết là hình thức quảng cáo nội dung bài viết được khởi tạo trên Zalo Official Account của doanh nghiệp hoặc cửa hàng trên Zalo.",
            benefits: [
                "Dễ dàng khởi tạo, tích hợp sẵn trong hệ sinh thái của Zalo Official Account.",
                "Gia tăng nhận biết thương hiệu và tỷ lệ mua hàng."
            ],
            image1: null,
            image2: "/imgzaloads/baiviet.png",

        }
    };

    // Danh sách câu hỏi/đáp án FAQ
    const faqList = [
        {
            question: "Quảng cáo Zalo Ads là gì?",
            answer:
                "Zalo Ads là hệ thống tự chạy quảng cáo giúp doanh nghiệp, chủ cửa hàng chủ động trong việc tạo và quản lý các chiến dịch quảng cáo của mình để nhắm tới khách hàng mục tiêu trên hệ sinh thái Zalo và giúp tối ưu chi phí quảng cáo cho doanh nghiệp.",
        },
        {
            question: "Zalo Ads có cho chọn nhóm đối tượng để quảng cáo không?",
            answer: `
      <p>Zalo Ads cho phép nhà quảng cáo chọn 2 loại nhóm đối tượng quảng cáo</p>
      <p>1. Nhóm đối tượng là tập người dùng Zalo có sẵn trên hệ thống:</p>
      <ul class="list-disc list-inside ml-5">
        <li>Địa điểm : nhà quảng cáo có thể chọn tỉnh thành theo vị trí địa lý Miền Bắc, Miền Trung, Miền Nam (Tp Hồ Chí Minh, Hà Nội,…).</li>
        <li>Giới tính : Nam hoặc Nữ hoặc Tất cả.</li>
        <li>Độ tuổi :  chọn nhóm độ tuổi phù hợp với mục tiêu quảng cáo (từ 13 – 65 tuổi).</li>
        <li>Nền tảng di động : Nhà quảng cáo có thể chọn quảng cáo chỉ chọn quảng cáo chỉ hiển thị trên di động (Andorid, iOS) hoặc có thể hiển thị trên PC.</li>
        <li>Tiêu chí về nhân khẩu học và sở thích của người dùng Zalo: Hệ thống Zalo Ads sẽ phân tích nhóm người dùng Zalo có những hành vi, sở thích trùng với những thông tin nhà quảng cáo chọn và phân phối quảng cáo đến những nhóm người dùng này.</li>
        <p>2. Nhóm đối tượng là tập danh sách số điện thoại khách hàng do nhà quảng cáo tải lên hệ thống:</p>
     
      </ul>
    `,
        },
        {
            question: "Làm sao để tôi nhìn thấy được quảng cáo của mình?",
            answer:
                "Zalo Ads sẽ phân phối quảng cáo dựa theo nhóm đối tượng đã được thiết lập và luân phiên trên Nhật ký người dùng Zalo và các kênh network của Zalo như app Zing Mp3, Báo mới, Znews,…. Vì thế, nhà quảng cáo sẽ khó thấy được quảng cáo của mình hiển thị trực tiếp.",
        },
        {
            question: "Zalo Ads tính phí như thế nào?",
            answer: `
      <p>Zalo Ads có các cách tính phí theo các phương thức như bên dưới:</p>
      <ul class="list-disc list-inside ml-5">
        <li>Phương thức tính theo lượt nhấn vào quảng cáo (CPC – Cost Per Click): Đây là hình thức tính tiền khi có người dùng nhấn vào quảng cáo của bạn và đây cũng là hình thức tính tiền phổ biến cho nhiều loại quảng cáo trên Zalo Ads.</li>
        <li>Phương thức tính theo lượt liên hệ/lượt mua hàng (CPA – Cost Per Action):  Zalo Ads tính phí khi người dùng Zalo thực hiện hành động trên quảng cáo.</li>
        <li>Loại quảng cáo áp dụng: quảng cáo Commerce, quảng cáo Form và quảng cáo Tin nhắn.</li>
        <li>Phương thức tính theo lượt hiển thị quảng cáo (CPM – Cost Per Mille): tính phí cho mỗi nghìn lần hiển thị quảng cáo (1M = 1000 lượt hiển thị) đến nhóm người dùng chọn trong lúc thiết lập quảng cáo. Chú ý: 1M = 1,000 lượt hiển thị.</li>
        <li>Loại quảng cáo áp dụng: quảng cáo display, quảng cáo video.</li>
     </ul>
    `,
        },
        {
            question: "Tôi cần phải cập nhật giấy phép gì để được quảng cáo?",
            answer:
                "Để quảng cáo sản phẩm TPCN và một số sản phẩm trong danh sách do Zalo Ads quy định, nhà quảng cáo cần cung cấp giấy phép quảng cáo và tài liệu chứng thực. Zalo Ads không hỗ trợ thủ tục và quy trình cấp giấy phép này, vì thế nhà quảng cáo nên tham khảo thông tin của cơ quan chức năng liên quan. Tham khảo thông tin về tài liệu cần cung cấp cho từng loại sản phẩm tại: <a href='https://ads.zalo.me/business/san-pham-can-giay-phep/' target='_blank' rel='noopener noreferrer'>https://ads.zalo.me/business/san-pham-can-giay-phep/</a>",
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
                    <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal max-w-5xl leading-none text-center mx-auto select-none" style={{ letterSpacing: 2 }}>Zalo Ads</h1>
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
                        <span className="text-sm mb-1">Dịch vụ / Zalo Ads</span>
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
            <section className="service-single-layout flex flex-col md:flex-row max-w-full 0.5xl:mx-14 mt-52 p-6  gap-10">
                {/* Sidebar left */}
                <aside className="service-single-sidebar w-full md:w-1/4 2xl:w-1/5 flex-col gap-8 hidden md:flex">
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
                            <h3 className="text-3xl font-roboto mb-2">AI Strategy and Consulting</h3>
                            <p className="font-manrope">Provide expert guidance on developing an AI strategy</p>
                        </div>
                    </div>
                </aside>

                {/* Main content right */}
                <main className="service-single-main w-full md:w-3/4 2xl:w-4/5 flex flex-col gap-8">
                    {/* Main heading and paragraphs */}
                    <article className="main-content w-full">
                        <h1 className="text-4xl 0.5xl:text-6xl max-w-full mb-4 leading-tight font-roboto">Dễ dàng quảng cáo doanh nghiệp hiệu quả với Zalo Ads</h1>
                        <p className="font-manrope font-semibold max-w-full my-8">Quảng cáo nhanh chống, hiệu quả với mọi quy mô doanh nghiệp và ngân sách.</p>
                    </article>

                    {/* Section Video thay thế 3 phần */}
                    {/* Section Video thay thế 3 phần */}
                    <div className="sec_intro w-full xl:w-[calc(108%-8px)] h-[120vh] md:h-auto xl:h-[114vh] 2xl:h-[121vh] bg-[#000028] py-12 pb-24 md:pb-0 relative overflow-hidden flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-0 rounded-3xl">

                        <div className="relative left-0 md:left-[6%] section-video flex flex-col md:flex-row items-center justify-center w-full h-auto md:h-full">

                            {/* Left: Video + cubes overlay */}
                            <div className="relative left-0 md:left-[5%] w-full md:w-[1000px] h-auto md:h-[520px] flex flex-col items-center justify-center">
                                <div className="relative w-full max-w-[1800px] h-auto md:h-[500px] mx-auto">

                                    {/* Title on mobile */}
                                    <div className="-top-16 left-24 absolute md:hidden mb-8 flex flex-col items-center text-center text-white z-[3]">
                                        <h1 className="text-4xl font-extrabold leading-tight">HỆ SINH THÁI</h1>
                                        <span className="text-4xl font-extrabold leading-tight mt-2">ZALO ADS</span>
                                    </div>

                                    {/* Video */}
                                    <video
                                        src="/imgzaloads/videozaloads.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="relative md:absolute top-0 w-full h-auto object-cover rounded-2xl z-[1]"
                                    />

                                    {/* Play button overlay */}
                                    <button
                                        aria-label="Play video"
                                        onClick={() => popupPlayVideo('intro')}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-20 h-20 flex items-center justify-center bg-transparent z-[10]"
                                    >
                                        <svg
                                            width="64"
                                            height="64"
                                            viewBox="0 0 64 64"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="32" cy="32" r="31" stroke="#fff" strokeWidth="2" opacity="0.3" />
                                            <polygon points="26,22 48,32 26,42" fill="#fff" opacity="0.7" />
                                        </svg>
                                    </button>

                                    {/* Cube overlays */}
                                    <img
                                        src={isMobile ? '/imgzaloads/mobile.png' : '/imgzaloads/imgzaloads.png'}
                                        alt="Zalo Ads overlay"
                                        className="absolute -top-20 md:-top-10  w-full h-auto object-contain z-[1000] animate-updown"
                                    />

                                    <style>{`
          @keyframes updown {
            0% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
            100% { transform: translateY(0); }
          }
          .animate-updown {
            animation: updown 2.5s ease-in-out infinite;
          }
        `}</style>
                                </div>
                            </div>

                            {/* Right: Title + text (ẩn khi mobile) */}
                            <div className="flex relative right-[10%] flex-col justify-center md:pl-12 w-full md:w-[800px] mt-8 md:mt-0 text-right z-[3]">
                                <div className="hidden md:flex w-full flex-col">
                                    <h1 className="relative w-full right-[25%] text-white font-extrabold mb-2 text-[64px] leading-[2] tracking-[1px]">
                                        HỆ SINH THÁI
                                    </h1>
                                    <span className="relative right-[15%] text-white font-extrabold mb-2 text-[64px] leading-[1.05]">
                                        ZALO ADS
                                    </span>
                                </div>

                                <p className="relative md:text-left text-center md:px-0 px-8 left-[10%] md:left-[30%] md:mt-20 w-full md:w-[280px] text-base text-white md:text-lg font-semibold leading-tight mb-4 text-left">
                                    <span className="text-[#2D7FFF] font-bold">Hơn 78 triệu người dùng</span> hoạt động hằng tháng và <span className="text-white font-extrabold">2 tỷ tin nhắn</span> mỗi ngày.
                                </p>

                            </div>
                        </div>
                    </div>


                </main>
            </section>

            {/* Header text */}

            <div className="section-type-ads">
                {/* Container canh giữa có cùng độ rộng với section */}
                <div className="w-full max-w-[1100px] mx-auto">
                    <h3 className="desktop-only ml-6 md:ml-12 text-left text-3xl font-semibold mb-8">
                        <strong className="text-[#2d7fff]">Zalo Ads</strong> cung cấp nhiều hình thức quảng cáo đa dạng và hiệu quả.<br />
                        Phù hợp với nhiều nhu cầu khác nhau trong mọi lĩnh vực.
                    </h3>



                    {/* Quảng cáo Commerce */}
                    <section className="relative w-full max-w-[1100px] bg-[#000000] rounded-lg p-6 shadow-md border border-gray-200 flex md:flex-row flex-col gap-8 items-start mt-12" style={{ margin: '48px auto 0 auto', minHeight: '420px' }}>
                        {/* Sidebar menu */}
                        <aside className="bg-[#000000] rounded-xl py-1 px-4 flex md:flex-col flex-row gap-2 text-left overflow-x-auto md:overflow-visible w-full md:w-[320px]">
                            <ul className="flex md:flex-col flex-row md:space-y-2 space-x-2 md:space-x-0 whitespace-nowrap">
                                {menuItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`px-6 py-3 rounded-xl cursor-pointer ${selectedItem === item ? 'bg-gradient-to-r from-[#6c2c7f] to-[#2d1a3a] text-white font-semibold' : 'text-[#bdbdbd] hover:text-white hover:bg-[#23235a]'}`}
                                        onClick={() => setSelectedItem(item)}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        {/* Main content */}
                        <div className="flex-1 flex md:flex-row flex-col-reverse gap-8 items-start">
                            {/* Left: Nội dung quảng cáo */}
                            {(() => {
                                const content = contentMap[selectedItem];
                                return (
                                    <div className="flex-1 flex flex-col justify-start items-start relative">
                                        <h1 className="text-[#2d7fff] text-3xl md:text-3xl font-bold mb-6 whitespace-nowrap">{content.title}</h1>
                                        <p className="text-[#e2e2e2] text-base md:text-lg mb-6 max-w-xl">{content.description}</p>
                                        <div className="mb-8">
                                            <span className="font-bold text-white">Với {content.title}, bạn có thể:</span>
                                            <ul className="mt-4 space-y-4">
                                                {content.benefits.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <span className="text-orange-600 font-bold text-xl">|</span>
                                                        <span className="text-[#e2e2e2]">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })()}
                            {/* Right: Hình minh họa */}
                            {(() => {
                                const content = contentMap[selectedItem];
                                return (
                                    <div className="w-full md:w-[320px] flex-shrink-0 flex flex-col items-center justify-center">
                                        <div
                                            className="relative overflow-hidden"
                                            style={{
                                                marginTop: '18px',
                                                height: '420px',
                                                width: '320px',
                                            }}
                                        >
                                            <div
                                                className="absolute inset-0 transition-transform duration-700 ease-in-out"
                                                style={{
                                                    transform: `translateX(0)`,
                                                    animation: 'slideFromRight 0.7s ease-in-out',
                                                }}
                                                key={selectedItem} // Key ensures re-render for animation
                                            >
                                                {content.image1 && (
                                                    <img
                                                        src={content.image1}
                                                        alt={`${content.title} Overlay`}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'contain',
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                        }}
                                                    />
                                                )}
                                                {content.image2 && (
                                                    <img
                                                        src={content.image2}
                                                        alt={content.title}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'contain',
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className="absolute left-0 bottom-[-32px] w-full h-12 bg-gradient-to-r from-[#2d7fff] to-[#6c2c7f] blur-xl opacity-40 rounded-b-xl"></div>
                                    </div>
                                );
                            })()}
                        </div>

                        <style>{`
                        @keyframes slideFromRight {
                            from {
                                transform: translateX(100%); /* Start from the right */
                                opacity: 0;
                            }
                            to {
                                transform: translateX(0); /* End at the center */
                                opacity: 1;
                            }
                        }
                    `}</style>

                    </section>
                    <style>{`
                    @keyframes pageSlide {
                        from {
                            transform: translateX(-100%);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }
                    @keyframes slideFromLeft {
                        from {
                            transform: translateX(-100%); /* Start from the left */
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0); /* End at the center */
                            opacity: 1;
                        }
                    }
                    @keyframes slideFromRight {
                        from {
                            transform: translateX(100%); /* Start from the right */
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0); /* End at the center */
                            opacity: 1;
                        }
                    }
                `}</style>
                </div>
            </div>

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
            <section className="relative flex-grow max-w-[100%] mx-auto px-6 sm:px-8 lg:px-12 pb-16">
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
            {/* Partner of Zatify */}
            <section className="relative flex-grow xl:max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 py-16">
                <div className="max-w-[85rem] mx-auto xl:mb-24">
                    <h2
                        ref={h2Refpart}
                        className="text-3xl  sm:text-6xl xl:text-7xl max-w-full leading-tight mb-2 xl:mb-16 font-roboto text-gray-800 flex"
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
                <div className="grid grid-cols-4 gap-8 md:gap-x-20 gap-2">
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
    )
}

export default ZaloAds;
