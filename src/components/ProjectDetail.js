import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Dữ liệu cards giống như trong Projectsgrid.js
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

// Hero Section
export default function ProjectDetail() {
  const { id } = useParams();
  const currentId = parseInt(id, 10);
  const prevId = currentId > 0 ? currentId - 1 : cards.length - 1;
  const nextId = currentId < cards.length - 1 ? currentId + 1 : 0;
  const prevCard = cards[prevId];
  const nextCard = cards[nextId];
  const navigate = useNavigate();

  const card = cards[parseInt(id, 10)];

  return (
    <>
      <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-0 rounded-bl-3xl rounded-br-3xl pointer-events-none" />
      <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-[450vh] rounded-bl-3xl rounded-br-3xl pointer-events-none z-50" />
      <section className="relative p-4 top-36 w-full max-w-full mx-auto " style={{ zIndex: 1 }}>
        <div
          className="relative rounded-3xl 0.5xl:rounded-tr-3xl 0.5xl:rounded-none w-full h-[280px] md:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(/svg/background/Project.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Chỉ phần chữ nằm trong khung 980x270px */}
          <div className="relative flex items-center justify-center w-[980px] h-[270px] mx-auto">
            <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal text-center w-full select-none leading-tight" style={{ letterSpacing: 2 }}>
              / {card ? card.title : ''} /
            </h1>
            {/* Vertical Projects text */}
            <div className="absolute right-[-150px] top-[50px] items-center hidden md:block">
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
              >Projects</span>
            </div>
          </div>
          {/* Breadcrumb and decorations ...existing code... */}
          <div className="absolute left-[255px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
          <div className="absolute left-[-1px] bottom-[69px]  w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
          <div className="justify-center items-center w-64 h-20 absolute left-0 bottom-0 bg-white rounded-tr-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex flex-col shadow-md" style={{ minWidth: 220 }}>
            <span className="text-sm mb-1">Home / Projects</span>
          </div>
          <div className="hidden md:block absolute left-[95px] top-[-1px] w-8 h-8 bg-white mask-rounded-hole-service-tl z-50"></div>
          <div className="hidden md:block absolute left-[-1px] top-[63px]  w-8 h-8 bg-white mask-rounded-hole-service-tl z-50"></div>
          <div className="hidden md:block justify-center items-center w-24 h-16 absolute left-0 top-0 bg-white rounded-br-3xl px-8 py-4 text-black text-base font-sans flex-col"></div>
          <div className="hidden md:block absolute right-[69px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-br z-50"></div>
          <div className="hidden md:block absolute right-[-11px] top-[231px]  w-8 h-8 bg-white mask-rounded-hole-service-br z-50"></div>
          <div className="hidden md:block justify-center items-center h-72 w-20 absolute right-0 bottom-0 bg-white rounded-tl-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex-col shadow-md"></div>
        </div>
      </section>
      {/* Section căn chỉnh lại giống hình mẫu, logo sát lề trái phía trên, nội dung lệch phải phía dưới */}
      <section className="w-full bg-transparent py-20 px-2 md:px-0 mt-48 flex flex-col md:flex-row items-start justify-between">
        {/* Logo + text block: nằm ngang, cả logo và chữ xích xuống */}
        <div className="ml-0 md:ml-24 flex flex-row items-center justify-start mb-8 md:mb-0">
          <div className="bg-[#22272c] text-white font-bold text-xl w-24 h-24 flex items-center justify-center mt-10">ND2</div>
          <div className="flex flex-col justify-center ml-6 mt-10">
            <span className="text-black text-[24px] leading-[1.1] font-normal whitespace-nowrap">Nordyne</span>
            <span className="text-black text-[24px] leading-[1.1] font-normal whitespace-nowrap">Defense</span>
            <span className="text-black text-[24px] leading-[1.1] font-normal whitespace-nowrap">Dynamics</span>
          </div>
        </div>
        {/* Nội dung mô tả: bên phải hoặc dưới khi mobile */}
        <div className="max-w-3xl w-full flex flex-col items-start text-left md:mr-10">
          <h1 className="text-black text-[40px] md:text-[80px] leading-[1.1] font-normal mb-8">Brief and project<br />description</h1>
          <p className="mb-6 text-[18px] md:text-[20px] font-bold leading-7 text-black">
            Integrating neural network models into existing systems or software applications, enabling businesses to leverage AI capabilities seamlessly.
          </p>
          <p className="mb-6 text-[17px] md:text-[19px] font-normal leading-7 text-gray-900">
            In today’s fast-paced and data-driven world, businesses are constantly seeking innovative ways to gain a competitive edge, make smarter decisions, and deliver exceptional customer experiences.
          </p>
          <ul className="mb-10 space-y-2 text-[17px] md:text-[19px] font-normal text-gray-900 list-none">
            <li className="flex items-center gap-2"><span className="text-black text-xl leading-none -rotate-45">↘</span>Pacific hake false trevally queen parrotfish black</li>
            <li className="flex items-center gap-2"><span className="text-black text-xl leading-none -rotate-45">↘</span>Prickleback moss revally queen parrotfish black</li>
            <li className="flex items-center gap-2"><span className="text-black text-xl leading-none -rotate-45">↘</span>Queen parrotfish black prickleback</li>
            <li className="flex items-center gap-2"><span className="text-black text-xl leading-none -rotate-45">↘</span>Moss pacific hake false trevally queen</li>
          </ul>

          {/* Divider */}
          <hr className="w-full border-t border-gray-300 mb-10" />

          {/* 3 columns info + button */}
          <div className="w-full flex flex-col md:flex-row md:items-start">
            {/* 3 columns */}
            <div className="flex flex-row flex-1 justify-start gap-x-14">
              <div>
                <div className="text-[26px] font-semibold mb-2">Strategy</div>
                <div className="text-gray-400 text-[20px] mb-1">Creating project</div>
                <div className="text-gray-400 text-[20px]">Mobile app</div>
                {/* Button nằm dưới cột Strategy */}
                <div className="mt-10">
                  <button className="px-8 py-5 rounded-2xl border border-indigo-200 text-black text-lg font-normal flex items-center gap-2 transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200">
                    Live project
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </button>
                </div>
              </div>
              <div>
                <div className="text-[26px] font-semibold mb-2">Design</div>
                <div className="text-gray-400 text-[20px] mb-1">Artificial Intellegance</div>
                <div className="text-gray-400 text-[20px]">Neural Networks</div>
              </div>
              <div>
                <div className="text-[26px] font-semibold mb-2">Client</div>
                <div className="text-gray-400 text-[20px]">AIX Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation block dưới cùng */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="flex justify-between items-start">
          {/* Prev */}
          <div className="flex flex-col items-start w-[320px]">
            <button
              className="flex items-center gap-2 text-black text-base font-normal mb-4 border-b border-black/80 pb-1 hover:opacity-80 transition"
              onClick={() => navigate(`/project/${prevId}`)}
            >
              <span className="text-xl">&#8592;</span>
              <span>Prev project</span>
            </button>
            <div className="flex items-center gap-4 mt-2">
              <img src={prevCard.bg} alt={prevCard.title} className="w-36 h-24 rounded-2xl object-cover" />
              <div>
                <div className="text-gray-400 text-sm mb-1 font-normal">{prevCard.tag}</div>
                <div className="text-black text-xl font-normal leading-snug">{prevCard.title.split(':')[0]}<br/>{prevCard.title.split(':')[1]}</div>
              </div>
            </div>
          </div>
          {/* Grid icon center */}
          <div className="flex flex-col items-center justify-center flex-1">
            <button className="text-black text-2xl opacity-80 hover:opacity-100 transition mt-10 md:mt-0">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="6" height="6" rx="1.5"/><rect x="15" y="3" width="6" height="6" rx="1.5"/><rect x="3" y="15" width="6" height="6" rx="1.5"/><rect x="15" y="15" width="6" height="6" rx="1.5"/></svg>
            </button>
          </div>
          {/* Next */}
          <div className="flex flex-col items-end w-[320px]">
            <button
              className="flex items-center gap-2 text-black text-base font-normal mb-4 border-b border-black/80 pb-1 hover:opacity-80 transition"
              onClick={() => navigate(`/project/${nextId}`)}
            >
              <span>Next project</span>
              <span className="text-xl">&#8594;</span>
            </button>
            <div className="flex items-center gap-4 mt-2 justify-end">
              <div className="text-right">
                <div className="text-gray-400 text-sm mb-1 font-normal">{nextCard.tag}</div>
                <div className="text-black text-xl font-normal leading-snug">{nextCard.title.split(':')[0]}<br/>{nextCard.title.split(':')[1]}</div>
              </div>
              <img src={nextCard.bg} alt={nextCard.title} className="w-36 h-24 rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </div>
      {/* Nút scroll to top góc phải */}
      <button aria-label="Scroll to top" className="fixed bottom-6 right-6 bg-teal-400 w-14 h-14 rounded-xl flex items-center justify-center text-black text-xl shadow-md hover:shadow-lg transition">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/></svg>
      </button>
    </>
  );
}
