import React, { useState } from 'react';


const ZaloMiniApp = () => {
    // State để lưu index của thẻ details đang mở
    const [openDetail, setOpenDetail] = useState(null);
    const contentRefs = React.useRef([]); // Ref array for content divs

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
            <section className="service-single-layout flex flex-col md:flex-row max-w-full 0.5xl:mx-14 mt-52 p-6  gap-10">
                {/* Sidebar left */}
                <aside className="service-single-sidebar w-full md:w-1/5 flex-col gap-8 hidden md:flex">
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
                <main className="service-single-main w-full md:w-4/5 flex flex-col gap-8">
                    {/* Main heading and paragraphs */}
                    <article className="main-content w-full">
                        <h1 className="text-4xl 0.5xl:text-6xl max-w-full leading-tight font-roboto">Mini App - Khai mở kênh tiếp cận khách hàng mới cho doanh nghiệp</h1>
                    </article>

                    {/* Main image */}
                    <div className="main-image rounded-xl overflow-hidden">
                        <img src="/images/Miniapp/landingpage-banner.png" alt="AI VR headset" className="w-[80%] mx-auto h-auto object-cover rounded-xl" />
                    </div>

                    {/* Pricing table */}
                    <section className="pricing-table max-w-full">
                        <h1 className="text-4xl 0.5xl:text-6xl max-w-xl mb-4 leading-tight font-roboto 0.5xl:mt-28">Choose the plan that fits your needs</h1>
                        <div className="flex flex-col 0.5xl:flex-row items-star justify-center gap-6 w-full">
                            {/* Card 1 */}
                            <div className="flex flex-row gap-3  h-[555px]">
                                <div className="flex-1 bg-white w-[330px] 0.5xl:pt-20 rounded-2xl border border-black p-10 flex flex-col items-start relative z-10">
                                    <h3 className="text-[40px] font-roboto mb-2">Basic</h3>
                                    <p className="mb-4 font-manrope font-semibold text-gray-800">Great for private individuals</p>
                                    <ul className="mb-8 text-base font-manrope text-gray-800 space-y-2">
                                        <li>1 User</li>
                                        <li>Unlimited Projects</li>
                                        <li>Download prototypes</li>
                                        <li>1 Gb workspace</li>
                                    </ul>
                                    <div className="text-4xl font-bold mb-8">Free</div>
                                    <div className="gradient-border rounded-md inline-block p-[1px]">
                                        <button className="justify-center text-sm bg-white rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                                            Get started<span className="ml-1">→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="flex flex-row gap-3  h-[555px]">
                                <div className="flex-1 w-[330px] 0.5xl:pt-20 bg-[#f1f2f4] rounded-2xl p-10 flex flex-col items-start relative z-20">
                                    <div className="absolute top-0 left-1/3 -translate-x-1/2 bg-white text-black text-black px-6 py-2 rounded-b-2xl font-semibold text-sm">Popular</div>
                                    <h3 className="text-[40px] text-black font-roboto mb-2">Premium</h3>
                                    <p className="mb-4 font-manrope font-semibold text-black">14 days free period</p>
                                    <ul className="mb-8 text-base font-manrope text-black space-y-2">
                                        <li>3 Users</li>
                                        <li>Unlimited Projects</li>
                                        <li>Download prototypes</li>
                                        <li>100 Gb workspace</li>
                                    </ul>
                                    <div className="text-4xl text-black font-bold mb-8">$99<span className="text-lg font-normal">/mo</span></div>
                                    <div className="rounded-md inline-block p-[1px]">
                                        <button className="justify-center text-sm text-white bg-[#333333] #333333 rounded-[0.65rem] px-4 py-2 hover:bg-[#3ed6c5] hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                                            Get started<span className="ml-1">→</span>
                                        </button>
                                    </div>                        </div>
                            </div>
                            {/* Card 3 */}
                            <div className="flex flex-row gap-3  h-[555px]">
                                <div className="flex-1 bg-white w-[330px] 0.5xl:pt-20 rounded-2xl border border-black p-10 flex flex-col items-start relative z-10">
                                    <h3 className="text-[40px] text-black font-roboto mb-2">Unlimited</h3>
                                    <p className="mb-4 font-manrope font-semibold text-black">Great for private individuals</p>
                                    <ul className="mb-8 text-base font-manrope text-black space-y-2">
                                        <li>100 Users</li>
                                        <li>Unlimited Projects</li>
                                        <li>Download prototypes</li>
                                        <li>100 Gb workspace</li>
                                    </ul>
                                    <div className="text-4xl text-black font-bold mb-8">$199<span className="text-lg font-normal">/mo</span></div>
                                    <div className="gradient-border rounded-md inline-block p-[1px]">
                                        <button className="justify-center text-sm bg-white rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                                            Get started<span className="ml-1">→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className=" my-28  h-auto w-full rounded-br-3xl flex justify-start items-start relative overflow-hidden">
                        <div className="relative max-w-full h-full flex-1">
                            <h2 className="text-4xl 0.5xl:text-6xl font-light mb-10 0.5xl:w-[53%] font-roboto leading-tight">
                                Open questions from our customers
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
                                            <p className="mt-3 text-gray-700 text-base leading-relaxed font-manrope">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </section>

                </main>
            </section>


            {/* Zalo Mini Ap paragraphs */}
            <section className="relative flex-grow max-w-full xl:my-16 my-10 sm:max-w-[85rem] mx-auto px-2 sm:px-8 lg:px-12 pb-16">
                <h2 className="text-4xl 0.5xl:text-6xl max-w-full text-center leading-tight font-roboto my-8">Zalo Mini App là gì?</h2>
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

        </div>
    )
}

export default ZaloMiniApp;
