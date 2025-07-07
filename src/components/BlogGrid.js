import React from 'react';

const blogCards = [
    {
        img: "/svg/bloggrid/card1.jpg",
        title: "How can I get started with Artificial Intelligence for my business?",
        date: "2 Jan 2025 / andrew",
        desc: "/ AI Aiero / Technology /"
    },
    {
        img: "/svg/bloggrid/card2.jpg",
        title: "AI and Robotics: Advancing Automation and Human-Robot Collaboration",
        date: "25 Dec 2024 / andrew",
        desc: "/ AI / Neural Networks /"
    },
    {
        img: "/svg/bloggrid/card3.jpg",
        title: "How Natural Language Processing is revolutionizing Text Analysis",
        date: "25 Dec 2024 / andrew",
        desc: "/ AI Services / AI Solutions /"
    },
    {
        img: "/svg/bloggrid/card4.jpg",
        title: "The Role of AI in Climate Action and Environmental Sustainability",
        date: "25 Dec 2024 / andrew",
        desc: "/ AI / Environment /"
    },
    {
        img: "/svg/bloggrid/card5.jpg",
        title: "Understanding Neural Networks: The Backbone of Modern AI",
        date: "25 Dec 2024 / andrew",
        desc: "/ AI / Neural Networks /"
    },
    {
        img: "/svg/bloggrid/card6.jpg",
        title: "How Natural Language Processing is Shaping the Future of Communication",
        date: "25 Dec 2024 / andrew",
        desc: "/ AI / NLP /"
    },
    {
        img: "/svg/bloggrid/card7.jpg",
        title: "How AI Can Boost Your Marketing Strategy with Personalization",
        date: "25 Dec 2024 / andrew",
        desc: "/ AI / Business /"
    },
    {
        img: "/svg/bloggrid/card8.jpg",
        title: "Computer Vision and Its Real-World Applications in Industry",
        date: "25 Dec 2024 / andrew",
        desc: "/ AI / Neural Networks /"
    },
    {
        img: "/svg/bloggrid/card9.jpg",
        title: "Building Ethical AI: Navigating Challenges in Machine Learning",
        date: "25 Dec 2024 / andrew",
        desc: "/ AI / Business /"
    },
    {
        img: "/svg/bloggrid/card2.jpg",
        title: "Is Artificial Intelligence accessible to businesses of all sizes",
        date: "24 Dec 2024 / andrew",
        desc: "/ AI / Neural Networks /"
    },
    {
        img: "/svg/bloggrid/card11.jpg",
        title: "The role of Artificial Intelligence in healthcare: Improving patient care",
        date: "7 Dec 2024 / andrew",
        desc: "/ AI / Smart City /"
    },
    {
        img: "/svg/bloggrid/card12.jpg",
        title: "AI for Healthcare: Diagnostics and Beyond",
        date: "6 Dec 2024 / andrew",
        desc: "// AI / Healthcare /"
    },
    {
        img: "/svg/bloggrid/card3.jpg",
        title: "Is Artificial Intelligence accessible",
        date: "23 Dec 2024 / andrew",
        desc: "/ Uncategorized /"
    },
    {
        img: "/svg/bloggrid/card10.jpg",
        title: "March 20 ChatGPT outage: Here’s what happened",
        date: "22 Dec 2024 / andrew",
        desc: "/ Science /"
    },
    {
        img: "/svg/bloggrid/card11.jpg",
        title: "Announcing OpenAI’s Bug Bounty Program",
        date: "21 Dec 2024 / andrew",
        desc: "/ Bloging /"
    },
    {
        img: "/svg/bloggrid/card1.jpg",
        title: "Our approach to AI safety",
        date: "24 Dec 2024 / andrew",
        desc: "/ Technology /"
    },
];

const BlogGrid = () => {
    const [page, setPage] = React.useState(1);
    const cardsPerPage = 9;
    const totalPages = Math.ceil(blogCards.length / cardsPerPage);
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const showCards = blogCards.slice(start, end);

    return (
        <>
            {/* Hero Section */}
            <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-0 rounded-bl-3xl rounded-br-3xl pointer-events-none" />


            <section className="relative p-4 top-36 w-full max-w-full mx-auto " style={{ zIndex: 1 }}>
                <div
                    className="relative rounded-3xl 0.5xl:rounded-tr-3xl 0.5xl:rounded-none w-full h-[280px] md:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden"
                    style={{
                        backgroundImage: 'url(svg/background/contact.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal text-center mx-auto select-none" style={{ letterSpacing: 2 }}>Blog Grid</h1>
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
                    <div className="absolute left-[255px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    {/* Circle div top-left */}
                    <div className="absolute left-[-1px] bottom-[69px]  w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
                    <div className="justify-center items-center w-64 h-20 absolute left-0 bottom-0 bg-white rounded-tr-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex flex-col shadow-md" style={{ minWidth: 220 }}>
                        <span className="text-sm mb-1">Home / Services</span>
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

            {/* Blog Section */}
            <section className="w-full flex flex-col items-center mt-64 mb-24">
                <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full justify-center">
                        {showCards.map((card, idx) => {
                            // Card 11: style giống card trắng viền mỏng trong ảnh
                            if (card.title === "The role of Artificial Intelligence in healthcare: Improving patient care") {
                                return (
                                    <div
                                        key={idx}
                                        className="bg-gradient-to-br from-[#f8fbff] to-[#f5f7fa] rounded-3xl border border-[#e6e6e6] shadow-none overflow-hidden w-full h-20 flex flex-col relative p-8 min-h-[300px]"
                                    >
                                        <div className="text-xs text-gray-400 mb-4">{card.date}</div>
                                        <h3 className="text-[22px] 0.5xl:text-[25px] mb-3 text-black font-roboto font-normal leading-snug">{card.title}</h3>
                                        <div className="text-xs text-gray-400 mt-auto">{card.desc}</div>
                                    </div>
                                );
                            }
                            // Card 12: style giống card xanh quote trong ảnh
                            if (card.title === "AI for Healthcare: Diagnostics and Beyond") {
                                return (
                                    <div
                                        key={idx}
                                        className="rounded-3xl w-full h-20 flex flex-col relative p-8 min-h-[300px] bg-gradient-to-br from-[#42c8be] to-[#2d89c8] text-black shadow-lg"
                                    >
                                        <div className="flex items-start mb-2">
                                            <svg width="32" height="32" fill="none" viewBox="0 0 32 32" className="mr-2 mt-1">
                                                <path d="M10.5 8C8.01472 8 6 10.0147 6 12.5C6 14.9853 8.01472 17 10.5 17C12.9853 17 15 14.9853 15 12.5V8H10.5ZM21.5 8C19.0147 8 17 10.0147 17 12.5C17 14.9853 19.0147 17 21.5 17C23.9853 17 26 14.9853 26 12.5V8H21.5Z" fill="#fff" fillOpacity="0.7" />
                                            </svg>
                                            <span className="font-normal leading-snug font-roboto text-xl text-black">
                                                Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence. It involves the creation of algorithms and models that enable machines to learn, reason, perceive.
                                            </span>
                                        </div>
                                        <div className="text-xs mt-6 text-black">Adam Peterson</div>
                                    </div>
                                );
                            }

                            return (
                                <div key={idx} className="bg-white rounded-3xl shadow-md overflow-hidden w-full flex flex-col relative group min-h-[420px]">
                                    <div className="relative w-full flex-[0.65] overflow-hidden rounded-3xl">
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            className="w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                                            style={{ willChange: 'transform' }}
                                        />
                                        {/* Date and holes */}
                                        <div className="absolute left-1/3 bottom-0 -translate-x-1/2 flex items-end z-20">
                                            <div className="relative w-8 h-8 left-1 top-1.5 bg-white mask-rounded-hole-testimonial-left"></div>
                                            <div className="text-xs text-gray-500 w-40 h-12 flex justify-center items-center bg-white rounded-t-3xl z-50">
                                                {card.date}
                                            </div>
                                            <div className="relative w-8 h-8 right-[1px] top-1.5 bg-white mask-rounded-hole-testimonial-right"></div>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-[0.45] ml-2 0.5xl:ml-4">
                                        <h3 className="text-[22px] 0.5xl:text-[25px] mb-3 text-gray-900 font-roboto">{card.title}</h3>
                                        <div className="text-xs text-gray-400 mt-auto">{card.desc}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Pagination Section */}
            <section className="w-full max-w-7xl mx-auto flex justify-center items-center mt-8 mb-16">
                <div className="flex gap-2">
                    {page > 1 && (
                        <button
                            className="border border-[#A3B8D8] rounded-xl px-6 py-3 font-roboto text-lg font-normal shadow-none flex items-center gap-2 focus:outline-none transition-colors duration-300 text-[#222] bg-white"
                            style={{ boxShadow: '0 2px 8px 0 rgba(75,108,183,0.10)', borderWidth: 1.5 }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'; e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#222'; }}
                            onClick={() => setPage(page - 1)}
                        >Previous <span aria-hidden>↗</span></button>
                    )}
                    {[...Array(totalPages)].map((_, idx) => (
                        <button
                            key={idx}
                            className={`border border-[#A3B8D8] rounded-xl px-6 py-3 font-roboto text-lg font-normal shadow-none focus:outline-none transition-colors duration-300
                ${page === idx + 1 ? 'text-white' : 'text-[#222]'}
              `}
                            style={{
                                boxShadow: '0 2px 8px 0 rgba(75,108,183,0.10)',
                                borderWidth: 1.5,
                                background: page === idx + 1
                                    ? 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'
                                    : 'white',
                            }}
                            onMouseEnter={e => { if (page !== idx + 1) e.currentTarget.style.background = 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'; if (page !== idx + 1) e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={e => { if (page !== idx + 1) e.currentTarget.style.background = 'white'; if (page !== idx + 1) e.currentTarget.style.color = '#222'; }}
                            onClick={() => setPage(idx + 1)}
                        >{idx + 1}</button>
                    ))}
                    {page < totalPages && (
                        <button
                            className="border border-[#A3B8D8] rounded-xl px-6 py-3 font-roboto text-lg font-normal shadow-none flex items-center gap-2 focus:outline-none transition-colors duration-300 text-[#222] bg-white"
                            style={{ boxShadow: '0 2px 8px 0 rgba(75,108,183,0.10)', borderWidth: 1.5 }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'; e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#222'; }}
                            onClick={() => setPage(page + 1)}
                        >Next <span aria-hidden>↗</span></button>
                    )}
                </div>
            </section>
            {/* End Blog Section */}
        </>
    );
};

export default BlogGrid;

