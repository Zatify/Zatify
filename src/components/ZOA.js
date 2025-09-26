import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
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

{/* Section: Nền tảng kết nối sản phẩm hệ sinh thái Zalo */}
const ZaloOfficialAccount = () => {
    // State cho FAQ
    const [openDetail, setOpenDetail] = useState(null);
    const contentRefs = React.useRef([]);

    // State cho tab
    const [selectedTab, setSelectedTab] = useState(0); // 0: Tư vấn, 1: Giao dịch, 2: Truyền thông
    // Hiệu ứng chạy chữ

    const [h2Refcus, animateH2cus] = useAnimateOnScroll();
    const [h2Refpart, animateH2part] = useAnimateOnScroll();
    const [h2Refzns, animateH2zns] = useAnimateOnScroll();
    // Dữ liệu cho từng tab
    const tabContents = [
        {
            label: "Tin Tư vấn",
            info: {
                description: "Là loại tin để OA có thể phản hồi lại các tin nhắn Chat của khách hàng với nội dung tuỳ biến",
                purpose: "Tư vấn cho khách hàng về sản phẩm, dịch vụ",
                target: "Người dùng Quan tâm hoặc Chưa quan tâm OA",
                condition: "OA có được UID người dùng<br/>Người dùng có phát sinh tương tác hoặc cho phép tương tác<br/>Tương tác cuối của người dùng trong khoảng thời gian cho phép (07 ngày)."
            }
        },
        {
            label: "Tin Giao dịch",
            info: {
                description: "Là loại tin nhắn phục vụ cho mục đích xác nhận giao dịch, cập nhật đơn hàng, thông báo trạng thái giao dịch.",
                purpose: "Gửi thông báo liên quan đến các giao dịch như đặt hàng, thanh toán, vận chuyển, chăm sóc hậu mãi.",
                target: "Người dùng đã phát sinh giao dịch với OA hoặc dịch vụ liên quan.",
                condition: "OA có được UID người dùng. Người dùng đã thực hiện giao dịch hoặc đồng ý nhận tin về giao dịch. Nội dung tin nhắn phải đúng mục đích giao dịch đã đăng ký."
            }
        },
        {
            label: "Tin Truyền thông",
            info: {
                description: "Là loại tin nhắn được gửi chủ động để quảng bá sản phẩm, dịch vụ, sự kiện.",
                purpose: "Tăng nhận diện thương hiệu, quảng bá chương trình khuyến mãi, sự kiện.",
                target: "Người dùng đã Quan tâm OA.",
                condition: "OA có được UID người dùng. Người dùng đã Quan tâm OA. Tin nhắn cần tuân thủ chính sách nội dung quảng cáo của Zalo."
            }
        }
    ];

    // Danh sách câu hỏi/đáp án FAQ
    const faqList = [
        {
            question: "Làm thế nào để đăng ký sử dụng ZNS?",
            answer: "Để bắt đầu sử dụng ZNS, bạn cần có tài khoản Zalo Official Account (ZOA) và Zalo Cloud Account (ZCA). Liên hệ sales@zatify.com.vn hoặc cs@zatify.com.vn để được hỗ trợ.",
        },
        {
            question: "Zalo Notification Service (ZNS) là gì?",
            answer: "Zalo Notification Service (ZNS) là giải pháp gửi thông báo từ Zalo Official Account (OA) của doanh nghiệp tới khách hàng trên nền tảng Zalo. ZNS giúp doanh nghiệp:\n+ Nâng cao hiệu quả tương tác với khả năng cá nhân hóa nội dung thông tin đa dạng và đẹp mắt.\n+ Tối ưu hóa vận hành với hệ thống kết nối hoàn toàn thông qua openAPI.\n+ Tiết kiệm chi phí với chính sách giá linh hoạt.",
        },
        {
            question: "ZNS tính phí như thế nào?",
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
                    <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal max-w-5xl leading-none text-center mx-auto select-none" style={{ letterSpacing: 2 }}>Zalo Official Accout</h1>
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
                        <span className="text-sm mb-1">Dịch vụ / Zalo Official Accout</span>
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
                <main className="service-single-main w-full md:w-3/4 flex flex-col gap-8">
                    {/* Main heading and paragraphs */}
                    <article className="main-content w-full">
                        <h1 className="text-4xl 0.5xl:text-6xl max-w-full mb-4 leading-tight font-roboto">KẾT NỐI VÀ TƯƠNG TÁC VỚI NGƯỜI DÙNG ZALO</h1>
                        <p className="font-manrope font-semibold max-w-full my-8">Zalo Official Account là tài khoản chính thức của doanh nghiệp trên nền tảng Zalo. Cung cấp giải pháp giúp doanh nghiệp kết nối và tương tác với người dùng Zalo.</p>
                       
                    </article>

                                        {/* Animated phones + icons section */}
    
                    <section className="sec_intro w-[100%] xl:w-[104%] h-[70vh] xl:h-[114vh] 2xl:h-[115vh] bg-[#f5f8ff] py-12 pb-24 md:pb-0 md:py-20 relative overflow-hidden">
                        <div className="container max-w-[1440px] top-[-10vh] sm:top-0 relative z-10">
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
                                        <div className="ani absolute bottom-[15vh] left-0 w-full flex items-center justify-center md:hidden">
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
{/* Zalo UID Experience Section */}
{/* Right side: Info & Tabs */}
<div
  className="relative w-full max-w-[1100px] bg-white rounded-lg p-6 shadow-md border border-gray-200"
  style={{ margin: '48px auto 0 auto' }}
>
    {/* Tabs */}
  <div className="justify-center w-full flex gap-0 mb-6 flex-wrap border-b border-gray-200">
  {tabContents.map((tab, idx) => (
    <button
      key={tab.label}
      className={`flex-1 py-3 font-semibold border-b-2 transition-all duration-200 text-center 
        ${selectedTab === idx 
          ? 'text-[#2563eb] border-[#2563eb] bg-white' 
          : 'text-[#374151] border-transparent bg-[#f3f4f6] font-normal'}`}
      type="button"
      style={
        idx === 0
          ? { borderTopLeftRadius: 8 }
          : idx === tabContents.length - 1
          ? { borderTopRightRadius: 8 }
          : {}
      }
      onClick={() => setSelectedTab(idx)}
    >
      {tab.label}
    </button>
  ))}
</div>

    {/* Table info động theo tab, giữ layout cố định, hiệu ứng fade */}
    <div
        className="grid grid-cols-1 md:grid-cols-2 gap-0 border rounded-lg overflow-hidden mb-6 relative"
        style={{minHeight: 280, transition: 'min-height 0.2s'}}
    >
        {/* Fade effect for tab content */}
        <div
            key={selectedTab}
            className="contents"
            style={{
                opacity: 1,
                transition: 'opacity 0.3s',
            }}
        >
            <div className="bg-[#f9fafb] px-5 py-4 font-semibold text-sm border-b border-r border-gray-200">Mô tả</div>
            <div className="bg-white px-5 py-4 text-sm border-b border-gray-200" dangerouslySetInnerHTML={{__html: tabContents[selectedTab].info.description}}></div>
            <div className="bg-[#f9fafb] px-5 py-4 font-semibold text-sm border-b border-r border-gray-200">Mục đích</div>
            <div className="bg-white px-5 py-4 text-sm border-b border-gray-200" dangerouslySetInnerHTML={{__html: tabContents[selectedTab].info.purpose}}></div>
            <div className="bg-[#f9fafb] px-5 py-4 font-semibold text-sm border-b border-r border-gray-200">Đối tượng nhận</div>
            <div className="bg-white px-5 py-4 text-sm border-b border-gray-200" dangerouslySetInnerHTML={{__html: tabContents[selectedTab].info.target}}></div>
            <div className="bg-[#f9fafb] px-5 py-4 font-semibold text-sm border-r border-gray-200">Điều kiện để nhận được tin</div>
            <div className="bg-white px-5 py-4 text-sm" dangerouslySetInnerHTML={{__html: tabContents[selectedTab].info.condition}}></div>
        </div>
    </div>
    {/* Giới thiệu tin UID */}
    <div className="text-sm max-w-full">
        <h3 className="font-semibold mb-3 text-base">Giới thiệu tin UID</h3>
        <p className="mb-3">
            <span className="font-semibold">Tin UID</span> là loại tin<br/>
            - Tin nhắn UID là tin nhắn gửi từ Official Account Doanh nghiệp đến Khách hàng đã có tương tác với OA của Doanh nghiệp có sử dụng Zalo thông qua định danh User ID (UID)<br/>
            - UID trong Zalo Official Account là định danh của một người dùng xác định đối với một tài khoản OA xác định. Với mỗi cặp User-OA khác nhau sẽ tồn tại UID khác nhau
        </p>
        <p className="font-semibold mb-2">Tương tác với OA được định nghĩa là một trong các hành động sau:</p>
        <ul className="list-none space-y-2 text-xs max-w-[400px]">
            <li className="flex items-center gap-2 text-[#3a7a0a]">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#3a7a0a"/><path d="M6 10.5L9 13.5L14 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Quan tâm OA
            </li>
            <li className="flex items-center gap-2 text-[#3a7a0a]">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#3a7a0a"/><path d="M6 10.5L9 13.5L14 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Gửi tin nhắn đến OA
            </li>
            <li className="flex items-center gap-2 text-[#3a7a0a]">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#3a7a0a"/><path d="M6 10.5L9 13.5L14 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Gọi đến OA hoặc chấp nhận cuộc gọi từ OA
            </li>
            <li className="flex items-center gap-2 text-[#3a7a0a]">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#3a7a0a"/><path d="M6 10.5L9 13.5L14 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Nhấn menu tương tác nhanh / menu Dịch vụ / CTA của OA Chatbot
            </li>
        </ul>
    </div>
</div>
                                {/* ZNS Section */}
                       
            <section className=" mt-20 relative flex-grow max-w-full sm:max-w-[85rem] mx-auto px-2 sm:px-8 lg:px-12 ">
                <img
                    src="/svg/bg-opacity.svg"
                    alt="Background opacity effect"
                    className="absolute inset-0 top-48 rounded-bl-3xl rounded-br-3xl pointer-events-none opacity-60"
                />

                {/* Heading */}
                <h2
                    ref={h2Refzns}
                    className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto mb-10 font-roboto text-gray-800 flex justify-center text-center whitespace-pre-line flex-wrap"
                    style={{ overflow: 'visible', lineHeight: '1.2', minHeight: '1em' }}
                >
                    {"ZALO OFFICIAL ACCOUNT MANG LẠI GÌ CHO DOANH NGHIỆP?".split(' ').map((word, idx) => (
                        <span
                            key={idx}
                            className={`inline-block transition-all duration-500 ease-out
      ${animateH2zns ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
    `}
                            style={{
                                transitionDelay: `${idx * 150}ms`,
                                display: 'inline-block',
                                lineHeight: '1.2',
                            }}
                        >
                            {word}&nbsp;
                        </span>
                    ))}

                </h2>
                {/* Features grid */}
                <div className="flex flex-col items-center">
                    {/* Top row - 4 features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-10 gap-y-6 mt-[-20px] sm:mt-0 mb-10">

                        {/* Feature 1 */}
                        <article className="flex flex-col items-center text-center space-y-4 xl:space-y-6 max-w-xs">
                            <img
                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/benefic_1.svg"
                                alt="An toàn thông tin theo tiêu chuẩn quốc tế"
                                className="w-14 h-14"
                            />
                            <h3 className="text-base md:text-lg font-roboto text-gray-900 leading-tight">
                                <span className="block">An toàn thông tin theo</span>
                                <span className="block">tiêu chuẩn quốc tế</span>
                            </h3>
                        </article>

                        {/* Feature 2 */}
                        <article className="flex flex-col items-center text-center space-y-4 xl:space-y-6 max-w-xs">
                            <img
                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/benefic_2.svg"
                                alt="Chứng nhận xác thực giúp đảm bảo uy tín doanh nghiệp"
                                className="w-14 h-14"
                            />
                            <h3 className="text-base md:text-lg font-roboto text-gray-900 leading-tight">
                                <span className="block">Chứng nhận xác thực giúp</span>
                                <span className="block">đảm bảo uy tín doanh nghiệp</span>
                                 </h3>
                        </article>

                        {/* Feature 3 */}
                        <article className="flex flex-col items-center text-center space-y-4 xl:space-y-6 max-w-xs">
                            <img
                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/benefic_3.svg"
                                alt="Chi phí hợp lý và minh bạch cho từng dịch vụ"
                                className="w-14 h-14"
                            />
                            <h3 className="text-base md:text-lg font-roboto text-gray-900 leading-tight">
                                 <span className="block">Chi phí hợp lý và minh bạch</span>
                                 <span className="block">cho từng dịch vụ</span>
                                 </h3>
                        </article>
                        {/* Feature 4 */}
                        <article className="flex flex-col items-center text-center space-y-4 xl:space-y-6 max-w-xs">
                            <img
                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/benefic_4.svg"
                                alt="Tối ưu trải nghiệm khách hàng với đa dạng tính năng tương tác"
                                className="w-14 h-14"
                            />
                            <h3 className="text-base md:text-lg font-roboto text-gray-900 leading-tight">
                                <span className="block">Tối ưu trải nghiệm khách hàng với đa dạng tính năng tương tác</span>
                            </h3>
                        </article>
                    </div>

                    {/* Bottom row - 3 features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 xl:gap-x-16 gap-y-6">

                        {/* Feature 5 */}
                        <article className="flex flex-col items-center text-center space-y-4 xl:space-y-6 max-w-xs">
                            <img
                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/benefic_5.svg"
                                alt="Tối ưu hiệu quả vận hành với công cụ quản lý mạnh mẽ"
                                className="w-14 h-14"
                            />
                            <h3 className="text-base md:text-lg font-roboto text-gray-900 leading-tight">
                                <span className="block">Tối ưu hiệu quả vận hành với</span>
                                <span className="block">công cụ quản lý mạnh mẽ</span>
                                </h3>
                        </article>

                        {/* Feature 6 */}
                        <article className="flex flex-col items-center text-center space-y-4 xl:space-y-6 max-w-xs">
                            <img
                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/benefic_6.svg"
                                alt="Dễ dàng kết nối với hệ thống, nền tảng của doanh nghiệp hoặc bên thứ ba"
                                className="w-14 h-14"
                            />
                            <h3 className="text-base md:text-lg  text-gray-900 font-roboto leading-tight">
                                <span className="block">Dễ dàng kết nối với hệ thống,</span> 
                                <span className="block">nền tảng của doanh nghiệp</span> 
                                <span className="block">hoặc bên thứ ba</span> 
                                </h3>
                        </article>
                         {/* Feature 7 */}
                        <article className="flex flex-col items-center text-center space-y-4 xl:space-y-6 max-w-xs">
                            <img
                                src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/benefic_7.svg"
                                alt="TTiếp cận hệ sinh thái đa dạng giải pháp của Zalo"
                                className="w-14 h-14"
                            />
                            <h3 className="text-base md:text-lg  text-gray-900 font-roboto leading-tight">
                                <span className="block">Tiếp cận hệ sinh thái đa dạng giải</span> 
                                <span className="block">pháp của Zalo</span>
                                </h3>
                        </article>
                    </div>
                </div>
            </section>
             {/* Pricing table */}
  <section className="relative 0.5xl:mt-20 flex-row max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 py-16">
      <h2 className="text-3xl sm:text-7xl w-full 0.5xl:w-[55%] leading-tight mb-16 font-roboto text-gray-800">
        Bảng giá dịch vụ OA
      </h2>
      <div className="flex flex-col 0.5xl:flex-row items-star justify-center gap-6 w-full">
        {/* Card 1 */}
        <div className="flex flex-row gap-3  h-[555px]">
          <div className="flex-1 bg-white w-[330px] 0.5xl:pt-20 rounded-2xl border border-black p-10 flex flex-col items-start shadow-md relative z-10">
            <h3 className="text-[40px] font-roboto mb-2">Dùng thử</h3>
             <p className="mb-4 font-manrope font-semibold text-gray-800">1 Tháng</p>
             <ul className="mb-8 text-base font-manrope text-gray-800 space-y-2">
                <li>Tương tác cơ bản và nâng cao 2.000 tin Tư Vấn ngoài khung</li>
                <li>Không giới hạn</li>
                <li>Không tích hợp API</li>
            </ul>
            <div className="text-3xl font-bold mt-8">10.000Đ</div>
                <div className="gradient-border rounded-md inline-block p-[1px] mt-8">
                    <button className="justify-center text-sm bg-white rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                    Mua ngay<span className="ml-1">→</span>
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
            <h3 className="text-[40px] text-black font-roboto mb-2">Nâng cao</h3>
                <p className="mb-4 font-manrope font-semibold text-black">1 năm</p>
                    <ul className="mb-8 text-base font-manrope text-black space-y-2">
                        <li>Tương tác cơ bản và nâng cao 2.000 tin Tư Vấn ngoài khung</li>
                        <li>Có thể gia hạn và mua lại</li>
                        <li>Tích hợp API</li>
                        <li>Chia sẻ OA qua QR & URL</li>
                    </ul>
                <div className="text-3xl text-black font-bold mb-8">99.000Đ<span className="text-3xl text-black font-bold mb-8">/Tháng</span></div>
                <div className="rounded-md inline-block p-[1px]">
                    <button className="justify-center text-sm text-white bg-[#333333] #333333 rounded-[0.65rem] px-4 py-2 hover:bg-[#3ed6c5] hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                        Mua ngay<span className="ml-1">→</span>
                    </button>
                </div>                        
            </div>
          {/* Vertical bar 2 */}
          <div className="flex w-[70px] h-full  rounded-3xl " style={{ backgroundImage: "url('svg/thanhdoc/premium.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-row gap-3  h-[555px]">
          <div className="flex-1 w-[330px] 0.5xl:pt-20 bg-[#3ed6c5] rounded-2xl p-10 flex flex-col items-start shadow-md relative z-10">
           <h3 className="text-[40px] text-black font-roboto mb-2">Premium</h3>
            <p className="mb-4 font-manrope font-semibold text-black">1 năm</p>
                <ul className="mb-8 text-base font-manrope text-black space-y-2">
                    <li>Tương tác cơ bản và nâng cao 9.000 tin Tư Vấn ngoài khung </li>
                    <li>Có thể gia hạn và mua lại</li>
                    <li>Tích hợp API</li>
                    <li>Chia sẻ OA qua QR & URL</li>
                </ul>
                <div className="text-3xl text-black font-bold mb-8">$399.000Đ<span className="text-3xl text-black font-bold mb-8">/Tháng</span></div>
                <div className="gradient-border rounded-md inline-block p-[1px]">
                    <button className="justify-center text-sm bg-white rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                        Mua ngay<span className="ml-1">→</span>
                    </button>
                </div>
          </div>
          {/* Vertical bar 3 */}
          <div className="flex w-[70px] h-full  rounded-3xl " style={{ backgroundImage: "url('svg/thanhdoc/unlimited.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
      </div>
    </section>
            

                {/* Section: 05 bước Zalo OA và hình ảnh minh họa */}
<div style={{ marginTop: '48px' }}>
  <ZaloOATimelineAnimated />
</div>
                {/* Section: Nền tảng kết nối sản phẩm hệ sinh thái Zalo */}
<section className="my-20 w-full py-0 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">NỀN TẢNG ĐỂ KẾT NỐI CÁC SẢN PHẨM<br />TRONG HỆ SINH THÁI ZALO</h2>
        {/* Desktop: 3 sản phẩm hiển thị ngang */}
        <div className="hidden md:flex flex-col md:flex-row justify-center items-center gap-44 w-full max-w-5xl">
            <div className="bg-white rounded-xl shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_24px_0_rgba(37,99,235,0.18)]" style={{width:240, height:82}}>
                <img src="/svg/logos/zalozns.jpg" alt="Zalo Notification Service" style={{width:194, height:32}} className="object-contain" />
            </div>
            <div className="bg-white rounded-xl shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_24px_0_rgba(37,99,235,0.18)]" style={{width:240, height:82}}>
                <img src="/svg/logos/miniapp.jpg" alt="Zalo MiniApp" style={{width:194, height:32}} className="object-contain" />
            </div>
            <div className="bg-white rounded-xl shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_24px_0_rgba(37,99,235,0.18)]" style={{width:240, height:82}}>
                <img src="/svg/logos/zaloads.jpg" alt="Zalo Ads" style={{width:194, height:32}} className="object-contain" />
            </div>
        </div>

        {/* Mobile: Swiper slider */}
        <div className="w-full max-w-xs md:hidden">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true, el: ".custom-pagination-zalo-products" }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                className="my-swiper-zalo-products"
            >
                <SwiperSlide>
                    <div className="bg-white rounded-xl shadow-md flex items-center justify-center transition-all duration-300" style={{width:240, height:82, margin: '0 auto'}}>
                        <img src="/svg/logos/zalozns.jpg" alt="Zalo Notification Service" style={{width:194, height:32}} className="object-contain" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white rounded-xl shadow-md flex items-center justify-center transition-all duration-300" style={{width:240, height:82, margin: '0 auto'}}>
                        <img src="/svg/logos/miniapp.jpg" alt="Zalo MiniApp" style={{width:194, height:32}} className="object-contain" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white rounded-xl shadow-md flex items-center justify-center transition-all duration-300" style={{width:240, height:82, margin: '0 auto'}}>
                        <img src="/svg/logos/zaloads.jpg" alt="Zalo Ads" style={{width:194, height:32}} className="object-contain" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="custom-pagination-zalo-products mt-6 flex justify-center"></div>
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

export default ZaloOfficialAccount;

function ZaloOATimelineAnimated() {
  const steps = [
    {
      title: 'Tạo và xác thực Zalo OA',
      desc: 'Tạo Zalo OA từ tài khoản Zalo và tiến hành xác thực.'
    },
    {
      title: 'Thiết lập Zalo OA',
      desc: 'Thiết lập các tính năng cơ bản trên Zalo OA.'
    },
    {
      title: 'Đăng ký gói dịch vụ trải nghiệm tính năng nâng cao',
      desc: 'Lựa chọn gói dịch vụ phù hợp để tiếp cận các tính năng nâng cao và sử dụng các hạn mức tính năng có sẵn theo từng gói.'
    },
    {
      title: 'Vận hành & tối ưu',
      desc: 'Theo dõi báo cáo vận hành, tối ưu hiệu quả.'
    },
    {
      title: 'Thu hút tương tác',
      desc: 'Quảng bá Zalo OA và thu hút người dùng tương tác.'
    }
  ];
  const sliderImages = [
    '/imgZOA/trip_1.png',
    '/imgZOA/trip_2.png',
    '/imgZOA/trip_5.png',
    '/imgZOA/trip_4.png',
    '/imgZOA/trip_3.png',
  ];
  const [current, setCurrent] = React.useState(0);
  // Tự động chuyển động qua từng bước
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % steps.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [steps.length]);
  return (
    <section className="my-20 relative py-8 px-0 bg-gradient-to-r from-[#1B1A7A] to-[#2B2A8E] overflow-hidden flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-0">
        <div className="mb-6 px-4">
          <h2 className="text-white font-extrabold text-4xl md:text-5xl text-left tracking-tight leading-tight">05 BƯỚC TRONG HÀNH TRÌNH VỚI ZALO OA</h2>
        </div>
  <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-stretch w-full h-auto md:h-[540px] px-4 md:px-8 justify-center md:justify-between">
          {/* Timeline dọc bên trái */}
          <div className="w-full md:w-1/2 h-auto md:h-full flex items-center justify-center md:justify-start mb-6 md:mb-0">
            <div className="relative w-full">
              <div className="absolute left-5 top-0 h-full w-1 bg-[#2B2A8E] z-0" style={{minHeight:'480px'}}></div>
              <ul className="space-y-0 relative z-10">
                {steps.map((step, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center gap-4 cursor-pointer py-2 ${typeof window !== 'undefined' && window.innerWidth < 768 && current !== idx ? 'hidden' : ''}`}
                    onClick={()=>setCurrent(idx)}
                  >
                    <div className="flex flex-col items-center">
                      <span className={`w-14 h-14 md:w-12 md:h-12 flex items-center justify-center rounded-full font-bold text-xl md:text-lg border-2 transition-all duration-300 ${current===idx?'bg-white text-[#1B1A7A] border-blue-400':'bg-[#0D4EAB] text-white border-[#2B2A8E]'} shadow`} style={{marginLeft:'-5px'}}>{idx+1}</span>
                    </div>
                    <div className="flex-1">
                      <div className={`font-bold text-2xl md:text-lg mb-1 transition-all duration-300 ${current===idx?'text-white':'text-[#AFC6FF]'}`}>{step.title}</div>
                      {/* Ẩn mô tả khi mobile */}
                      <div className={`hidden md:block text-sm md:text-base transition-all duration-300 ${current===idx?'text-white font-bold':'text-[#AFC6FF]'} opacity-90 leading-normal`}>{step.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Hình minh họa bên phải chuyển động theo bước */}
          <div className="w-full md:w-1/2 h-auto md:h-full flex items-center justify-center">
            <div className="relative w-full max-w-[480px] md:max-w-[620px] h-[320px] md:h-[480px] flex items-center justify-center" style={{background:'transparent', boxShadow:'none', border:'none'}}>
              {sliderImages.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`Zalo OA step ${idx+1}`}
                  className={`absolute left-0 top-0 w-[100%] h-[100%] object-contain rounded-2xl transition-opacity duration-700 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  style={{height: '100%', width: '100%'}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


