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
                        >Neural</span>
                    </div>


                    {/* Breadcrumb */}
                    {/* Circle div bottom-right */}
                    <div className="absolute left-[319px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    {/* Circle div top-left */}
                    <div className="absolute left-[-1px] bottom-[69px]  w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    <div className="justify-center items-center w-80 h-20 absolute left-0 bottom-0 bg-white rounded-tr-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex flex-col shadow-md" style={{ minWidth: 220 }}>
                        <span className="text-sm mb-1">Home / Artificial Intelligence (AI) systems</span>
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
                    <div className=" service-list bg-gray-100 p-6 rounded-xl h-auto flex justify-center items-center 0.5xl:h-[340px]">
                        <ul className="space-y-6 text-gray-600 font-semibold font-manrope text-[20px]">
                            <li className="cursor-pointer hover:text-blue-600">Network Integration</li>
                            <li className="cursor-pointer hover:text-blue-600">Deep learning solutions</li>
                            <li className="cursor-pointer hover:text-blue-600">Transfer learning</li>
                            <li className="cursor-pointer hover:text-blue-600">Model evaluation</li>
                            <li className="cursor-pointer hover:text-blue-600">Real-time prediction</li>
                        </ul>
                    </div>

                    {/* Brochure */}
                    <div className="service-brochure bg-purple-400 p-6 rounded-xl text-white flex flex-col justify-center  0.5xl:h-[340px]">
                        <div className="mb-4">
                            <h3 className="text-[40px] leading-none my-4 font-roboto">Services brochure</h3>
                        </div>
                        <div className="border hover:border-none rounded-xl w-[162px] inline-block p-[1px]">
                            <button className="justify-center text-sm text-black bg-purple-400 rounded-[0.65rem] px-4 py-2 hover:bg-purple-600 hover:text-white text-white transition flex items-center gap-1 w-[160px] h-[50px]">
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
                            </button>
                        </div>
                    </div>

                    {/* AI Consulting */}
                    <div className="flex items-end relative p-6 rounded-xl w-full text-white h-[340px]" style={{backgroundImage: 'url(/svg/Testimonial.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <div className="relative w-full z-10">
                            <h3 className="text-3xl font-roboto mb-2">AI Strategy and Consulting</h3>
                            <p className="font-manrope">Provide expert guidance on developing an AI strategy</p>
                        </div>
                    </div>
                </aside>

                {/* Main content right */}
                <main className="service-single-main w-full md:w-3/4 flex flex-col gap-8">
                    {/* Main heading and paragraphs */}
                    <article className="main-content w-full">
                        <h1 className="text-4xl 0.5xl:text-6xl max-w-full mb-4 leading-tight font-roboto">Neural networks are a fundamental component of Artificial Intelligence (AI) systems</h1>
                        <p className="font-manrope font-semibold max-w-full my-8">Integrating neural network models into existing systems or software applications, enabling businesses to leverage AI capabilities seamlessly.</p>
                        <p className="font-manrope max-w-full mb-6 leading-relaxed">
                            In today’s fast-paced and data-driven world, businesses are constantly seeking innovative ways to gain a competitive edge, make smarter decisions, and deliver exceptional customer experiences. One technology that is transforming industries across the globe is neural networks. Harnessing the power of artificial intelligence, neural networks have the ability to analyze vast amounts of data, identify complex patterns, and make accurate predictions, enabling businesses to unlock new opportunities and drive growth.
                        </p>
                    </article>

                    {/* Main image */}
                    <div className="main-image rounded-xl overflow-hidden shadow-lg">
                        <img src="/svg/background/servicesingle.jpg" alt="AI VR headset" className="w-full h-auto object-cover rounded-xl" />
                    </div>

                    {/* Description paragraph */}
                    <article className="description max-w-full">
                        <p className="font-manrope max-w-full mb-6 leading-relaxed">
                            In today’s fast-paced and data-driven world, businesses are constantly seeking innovative ways to gain a competitive edge, make smarter decisions, and deliver exceptional customer experiences. One technology that is transforming industries across the globe is neural networks. Harnessing the power of artificial intelligence, neural networks have the ability to analyze vast amounts of data, identify complex patterns, and make accurate predictions, enabling businesses to unlock new opportunities and drive growth.
                        </p>
                    </article>

                    {/* Feature list */}
                    <ul className="feature-list list-disc list-inside max-w-3xl space-y-2 font-manrope font-bold text-gray-700">
                        <li>Pacific hake false trevally queen parrotfish black</li>
                        <li>Prickleback moss really queen parrotfish black</li>
                        <li>Queen parrotfish black prickleback moss pacific</li>
                        <li>Hake false trevally queen</li>
                    </ul>

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

        </div>
    )
}

export default ZaloMiniApp;
