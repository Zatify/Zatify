import React from 'react';

const cards = [
  {
    bg: "/svg/projectgird/1.jpg",
    color: '#b6c7e3',
    tag: 'Development',
    tagClass: 'border-white/60 text-white',
    title: 'DeepVision: Enhancing Image Recognition with Neural Networks',
    titleClass: 'text-white',
    desc: 'The inputs are multiplied by their respective weights, summed up.',
    descClass: 'text-white',
  },
  {
    bg: "/svg/projectgird/2.jpg",
    tag: 'Integration',
    tagClass: 'border-white/60 text-white',
    title: 'NLPGenius: Natural Language Processing Powered by Neural Networks',
    titleClass: 'text-white',
    desc: 'The inputs are multiplied by their respective weights, summed up.',
    descClass: 'text-white',
    shadow: true,
  },
  {
    bg: "/svg/projectgird/3.jpg",
    color: '#1a3a4f',
    tag: 'AI Solution',
    tagClass: 'border-white/60 text-white',
    title: 'SmartTrader: Predictive Stock Market Analysis using Neural Networks',
    titleClass: 'text-white',
    desc: 'The inputs are multiplied by their respective weights, summed up.',
    descClass: 'text-white',
  },
  {
    bg: "/svg/projectgird/4.jpg",
    color: '#ffe0b2',
    tag: 'AI Solution',
    tagClass: 'border-white/60 text-white',
    title: 'CogniVision: Transformative AI for Intelligent Insight and Decision-Making',
    titleClass: 'text-white',
    desc: 'The inputs are multiplied by their respective weights, summed up.',
    descClass: 'text-white',
  },
  {
    bg: "/svg/projectgird/5.jpg",
    color: '#b2dfdb',
    tag: 'Desing core',
    tagClass: 'border-white/60 text-white',
    title: 'AutoDrive: Autonomous Vehicle Navigation with Advanced Neural Networks',
    titleClass: 'text-white',
    desc: 'The inputs are multiplied by their respective weights, summed up.',
    descClass: 'text-white',
  },
  {
    bg: "/svg/projectgird/6.jpg",
    color: '#f8bbd0',
    tag: 'AI Solution',
    tagClass: 'border-white/60 text-white',
    title: 'NeuraForge: Crafting Future-Ready AI Solutions for Industry Innovation',
    titleClass: 'text-white',
    desc: 'The inputs are multiplied by their respective weights, summed up.',
    descClass: 'text-white',
  },
  {
    bg: "/svg/projectgird/7.jpg",
    color: '#d1c4e9',
    tag: 'Desing core',
    tagClass: 'border-white/60 text-white',
    title: 'CogniCraft Innovations: Shaping the Future through Cutting-Edge AI Endeavors',
    titleClass: 'text-white',
    desc: 'The inputs are multiplied by their respective weights, summed up.',
    descClass: 'text-white',
  },
  {
    bg: "/svg/projectgird/8.jpg",
    color: '#fff9c4',
    tag: 'AI Solution',
    tagClass: 'border-white/60 text-white',
    title: 'CogniVision: Transformative AI for Intelligent Insight and Decision-Making',
    titleClass: 'text-white',
    desc: 'The inputs are multiplied by their respective weights, summed up.',
    descClass: 'text-white',
  },
  {
    bg: "/svg/projectgird/9.jpg",
    color: '#c8e6c9',
    tag: 'Integration',
    tagClass: 'border-white/60 text-white',
    title: 'SentientSolutions: Crafting Smart Solutions in Every AI Project Venture',
    titleClass: 'text-white',
    desc: 'The inputs are multiplied by their respective weights, summed up.',
    descClass: 'text-white',
  },
  // Card 10 (new)
  {
    bg: "/svg/projectgird/1.jpg",
    color: '#e1bee7',
    tag: 'Development',
    tagClass: 'border-white/60 text-white',
    title: 'DeepVision',
    titleClass: 'text-white',
    desc: 'The inputs are multiplied by their respective weights, summed up.',
    descClass: 'text-white',
  },
];

const Projectsgrid = () => {
  const [page, setPage] = React.useState(1);
  const cardsSectionRef = React.useRef(null);

  const handleSetPage = (p) => {
    setPage(p);
    setTimeout(() => {
      if (cardsSectionRef.current) {
        cardsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 10);
  };
  const cardsPerPage = 9;
  const start = (page - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const showCards = cards.slice(start, end);
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full max-w-full px-4 z-10 mb-12 pt-[160px]">
        <div
          className="relative rounded-3xl 0.5xl:rounded-tr-3xl 0.5xl:rounded-none w-full h-[280px] md:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(svg/background/contact.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal text-center mx-auto select-none" style={{ letterSpacing: 2 }}>/Projects grid/</h1>
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
          <div className="justify-center items-center w-64 h-20 absolute left-0 bottom-0 bg-white rounded-tr-3xl  rounded-br-none px-8 py-4 text-black text-base font-roboto flex flex-col shadow-md" style={{ minWidth: 220 }}>
            <span className="text-sm mb-1">Home / Projects grid</span>
          </div>

          {/* Decoration-tl */}

          {/* Circle div top-right */}
          <div className="hidden md:block absolute left-[95px] top-[-1px] w-8 h-8 bg-white mask-rounded-hole-service-tl z-50"></div>
          {/* Circle div bottom-left */}
          <div className="hidden md:block absolute left-[-1px] top-[63px]  w-8 h-8 bg-white mask-rounded-hole-service-tl z-50"></div>
          <div className="hidden md:block justify-center items-center w-24 h-16 absolute left-0 top-0 bg-white rounded-br-3xl px-8 py-4 text-black text-base font-roboto flex-col"></div>

          {/* Decoration-br */}
          {/* Circle div top-right */}
          <div className="hidden md:block absolute right-[69px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-br z-50"></div>
          {/* Circle div bottom-left */}
          <div className="hidden md:block absolute right-[-11px] top-[231px]  w-8 h-8 bg-white mask-rounded-hole-service-br z-50"></div>
          <div className="hidden md:block justify-center items-center h-72 w-20 absolute right-0 bottom-0 bg-white rounded-tl-3xl  rounded-br-none px-8 py-4 text-black text-base font-roboto flex-col shadow-md"></div>
        </div>
      </section>


      {/* Projects Grid Section - 9 cards in one section */}
      <section ref={cardsSectionRef} className="w-full max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 z-20 relative font-roboto">
        {showCards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-3xl overflow-hidden relative min-h-[500px] flex flex-col justify-end p-8 group font-roboto cursor-pointer"
            style={{ backgroundColor: card.color || undefined }}
            onClick={() => window.location.href = "/project/" + (start + idx)}
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center z-0 transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110"
              style={{ backgroundImage: `url('${card.bg}')`, transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1), filter 0.5s cubic-bezier(0.4,0,0.2,1)' }}
            />
            {/* Overlay content */}
            <span
              className={
                `absolute top-4 left-4 px-4 py-1 border border-white rounded-full text-xs font-normal bg-transparent text-white transition-all duration-300 flex items-center justify-center tracking-wide shadow-none cursor-pointer ` +
                `hover:bg-gradient-to-r hover:from-[#45D0BD] hover:to-[#3A8DFF] hover:text-white`
              }
              style={{ minWidth: 90, height: 32, borderWidth: 1.5, fontFamily: 'roboto, Arial, sans-serif', letterSpacing: '0.01em' }}
            >{card.tag}</span>
            {/* Title always at bottom left, but moves up on hover */}
            <h2
              className={`absolute left-8 bottom-16 font-roboto font-normal m-0 transition-all duration-500 break-words whitespace-pre-line leading-tight z-10 group-hover:bottom-32 ${card.titleClass}`}
              style={{ fontSize: '25px', color: '#F5F5F5', fontWeight: 400 }}
            >
              {card.title}
            </h2>
            {/* Content container for description and button, hidden until hover */}
            <div className={`flex flex-col gap-2 w-full transition-all duration-500 absolute left-0 bottom-8 px-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto`}>
              <p className={`${card.descClass} text-base mb-2`}>{card.desc}</p>
              {/* Explore more button removed */}
            </div>
          </div>
        ))}
      </section>
      {/* Pagination Section */}
      <section className="w-full max-w-7xl mx-auto flex justify-center items-center mt-8 mb-16">
        <div className="flex gap-2">
          {page === 1 ? (
            <>
              {/* Page 1 button */}
              <button
                className={`border border-[#A3B8D8] rounded-xl px-6 py-3 font-roboto text-lg font-normal shadow-none focus:outline-none transition-colors duration-300
                  ${page === 1
                    ? 'text-white'
                    : 'text-[#222]'}
                `}
                style={{
                  boxShadow: '0 2px 8px 0 rgba(75,108,183,0.10)',
                  borderWidth: 1.5,
                  background: page === 1
                    ? 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'
                    : 'white',
                }}
                onMouseEnter={e => { if (page !== 1) e.currentTarget.style.background = 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'; if (page !== 1) e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { if (page !== 1) e.currentTarget.style.background = 'white'; if (page !== 1) e.currentTarget.style.color = '#222'; }}
                onClick={() => handleSetPage(1)}
              >1</button>
              {/* Page 2 button */}
              <button
                className={`border border-[#A3B8D8] rounded-xl px-6 py-3 font-roboto text-lg font-normal shadow-none focus:outline-none transition-colors duration-300
                  ${page === 2
                    ? 'text-white'
                    : 'text-[#222]'}
                `}
                style={{
                  boxShadow: '0 2px 8px 0 rgba(75,108,183,0.10)',
                  borderWidth: 1.5,
                  background: page === 2
                    ? 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'
                    : 'white',
                }}
                onMouseEnter={e => { if (page !== 2) e.currentTarget.style.background = 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'; if (page !== 2) e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { if (page !== 2) e.currentTarget.style.background = 'white'; if (page !== 2) e.currentTarget.style.color = '#222'; }}
                onClick={() => handleSetPage(2)}
              >2</button>
              {/* Next button */}
              <button
                className="border border-[#A3B8D8] rounded-xl px-6 py-3 font-roboto text-lg font-normal shadow-none flex items-center gap-2 focus:outline-none transition-colors duration-300 text-[#222] bg-white"
                style={{ boxShadow: '0 2px 8px 0 rgba(75,108,183,0.10)', borderWidth: 1.5 }}
                onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#222'; }}
                onClick={() => handleSetPage(2)}
              >Next <span aria-hidden>↗</span></button>
            </>
          ) : (
            <>
              {/* Previous button */}
              <button
                className="border border-[#A3B8D8] rounded-xl px-6 py-3 font-roboto text-lg font-normal shadow-none flex items-center gap-2 focus:outline-none transition-colors duration-300 text-[#222] bg-white"
                style={{ boxShadow: '0 2px 8px 0 rgba(75,108,183,0.10)', borderWidth: 1.5 }}
                onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#222'; }}
                onClick={() => handleSetPage(1)}
              >Previous <span aria-hidden>↗</span></button>
              {/* Page 1 button */}
              <button
                className={`border border-[#A3B8D8] rounded-xl px-6 py-3 font-roboto text-lg font-normal shadow-none focus:outline-none transition-colors duration-300
                  ${page === 1
                    ? 'text-white'
                    : 'text-[#222]'}
                `}
                style={{
                  boxShadow: '0 2px 8px 0 rgba(75,108,183,0.10)',
                  borderWidth: 1.5,
                  background: page === 1
                    ? 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'
                    : 'white',
                }}
                onMouseEnter={e => { if (page !== 1) e.currentTarget.style.background = 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'; if (page !== 1) e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { if (page !== 1) e.currentTarget.style.background = 'white'; if (page !== 1) e.currentTarget.style.color = '#222'; }}
                onClick={() => handleSetPage(1)}
              >1</button>
              {/* Page 2 button */}
              <button
                className={`border border-[#A3B8D8] rounded-xl px-6 py-3 font-roboto text-lg font-normal shadow-none focus:outline-none transition-colors duration-300
                  ${page === 2
                    ? 'text-white'
                    : 'text-[#222]'}
                `}
                style={{
                  boxShadow: '0 2px 8px 0 rgba(75,108,183,0.10)',
                  borderWidth: 1.5,
                  background: page === 2
                    ? 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'
                    : 'white',
                }}
                onMouseEnter={e => { if (page !== 2) e.currentTarget.style.background = 'linear-gradient(117deg, #8258c8 0%, #2c84c8 100%)'; if (page !== 2) e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { if (page !== 2) e.currentTarget.style.background = 'white'; if (page !== 2) e.currentTarget.style.color = '#222'; }}
                onClick={() => handleSetPage(2)}
              >2</button>
            </>
          )}
        </div>
      </section>
      {/* End Projects Grid Section */}
      {/* ...existing code... */}
    </>
  );
};

export default Projectsgrid;

