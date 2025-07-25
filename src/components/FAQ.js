import React, { useState } from 'react';


const FAQ = () => {
    // State để lưu index của thẻ details đang mở
    const [openDetail, setOpenDetail] = useState(null);
    const contentRefs = React.useRef([]); // Ref array for content divs

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
                    <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal max-w-5xl leading-none text-center mx-auto select-none" style={{ letterSpacing: 2 }}>FAQ</h1>
                    {/* Vertical Neural text */}
                    <div className="absolute right-24 bottom-5 items-center hidden md:block">
                    </div>


                    {/* Breadcrumb */}
                    {/* Circle div bottom-right */}
                    <div className="absolute left-[319px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    {/* Circle div top-left */}
                    <div className="absolute left-[-1px] bottom-[69px]  w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    <div className="justify-center items-center w-80 h-20 absolute left-0 bottom-0 bg-white rounded-tr-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex flex-col shadow-md" style={{ minWidth: 220 }}>
                        <span className="text-sm mb-1">Home / FAQ</span>
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
                        <h1 className="text-5xl md:text-7xl font-roboto font-normal mb-16 mt-8">What would you like to know?</h1>
                        <div className="space-y-16">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-roboto  mb-4">
                                    1. How does Machine Learning relate to Artificial Intelligence?
                                </h2>
                                <p className="text-lg text-gray-700 font-manrope">
                                    Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-roboto  mb-4">
                                    2. What are the different types of Artificial Intelligence?
                                </h2>
                                <p className="text-lg text-gray-700 font-manrope">
                                    There are generally two types of AI: Narrow or Weak AI, which is designed to perform specific tasks, and General or Strong AI, which possesses human-level intelligence and can handle a wide range of tasks.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-roboto  mb-4">
                                    3. What are the applications of Artificial Intelligence?
                                </h2>
                                <p className="text-lg text-gray-700 font-manrope mb-2">
                                    AI has applications in various fields, including:
                                </p>
                                <ul className="list-disc pl-8 text-lg text-gray-700 font-manrope space-y-1">
                                    <li>Natural Language Processing (NLP) for chatbots, language translation, and sentiment analysis.</li>
                                    <li>Computer Vision for image recognition, object detection, and autonomous vehicles.</li>
                                    <li>Machine Learning for predictive analytics, data mining, and pattern recognition.</li>
                                    <li>Robotics for automation in industries such as manufacturing and healthcare.</li>
                                    <li>AI-powered personal assistants, recommendation systems, and fraud detection, among others.</li>
                                </ul>
                            </div>
                        </div>
                    </article>


                    {/* FAQ Section */}
                    <section className=" my-28  h-auto w-full rounded-br-3xl flex justify-start items-start relative overflow-hidden">
                        <div className="relative max-w-full h-full flex-1">
                            <h2 className="text-4xl 0.5xl:text-6xl font-light mb-10 0.5xl:w-[53%] font-roboto leading-tight">
                                Everything you need to know about
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

export default FAQ;
