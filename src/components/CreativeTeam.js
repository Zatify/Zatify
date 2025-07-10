
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const CreativeTeam = () => {

  // Animated counter for 250+
  const [count, setCount] = useState(1);
  const requestRef = useRef();

  useEffect(() => {
    let start = 1;
    let end = 250;
    let duration = 1800; // ms
    let startTime = null;

    function animateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      setCount(current);
      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animateCounter);
      } else {
        setCount(end);
      }
    }
    requestRef.current = requestAnimationFrame(animateCounter);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="relative w-full min-h-screen font-sans">
      {/* Hero Section */}
      <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-0 rounded-bl-3xl rounded-br-3xl pointer-events-none" />

      <section className="relative p-4 top-36 w-full max-w-full mx-auto " style={{ zIndex: 1 }}>
        <div
          className="relative rounded-3xl 0.5xl:rounded-tr-3xl 0.5xl:rounded-none w-full h-[280px] md:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(svg/background/creativeTeam.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal text-center mx-auto select-none" style={{ letterSpacing: 2 }}>Creative Team</h1>
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
            <span className="text-sm mb-1">Home / Creative Team</span>
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

      <section className="max-w-7xl mx-auto px-4 py-12 mt-60">
        {/* Tiêu đề team và số lượng thành viên */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-8 md:mb-0 md:w-2/3">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
              The Neural Network experts:<br />uniting talent for intelligent solutions
            </h2>
          </div>
          <div className="md:w-1/3 flex flex-col items-center md:items-end">
            <div className="text-[90px] md:text-[120px] font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text leading-none" style={{ WebkitTextStroke: '2px #b3b3ff' }}>
              {count}+
            </div>
            <div className="text-xl font-medium text-black mt-2">Awesome team members</div>
          </div>
        </div>
        {/* Card team sole: 3 trên trái, 3 dưới phải */}
        <div className="flex flex-col gap-10">
          {/* Hàng trên: 3 card trái */}
          <div className="flex flex-row justify-start gap-8 md:gap-10">
            {/* Card 1 */}
            <a href="/team/alan-begham" className="block group/team-card">
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a bearded man with glasses wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/ac30d169-6aa9-4659-ccda-1ee61f8bb4a1.jpg" width="220" />
                <div className="absolute left-4 bottom-16 z-20 flex flex-col gap-2">
                  {/* Cột icon social */}
                  <div className="flex flex-col items-start gap-3 transition-all duration-300 opacity-0 translate-y-4 group-hover/team-card:opacity-100 group-hover/team-card:translate-y-0 pointer-events-none group-hover/team-card:pointer-events-auto">
                    {/* Facebook */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M17 2.1v3.2h-1.5c-.6 0-.7.2-.7.7v1.5h2.2l-.3 2.3h-1.9V22h-2.7V9.8h-1.9V7.5h1.9V5.8C12 3.7 13.2 2.1 15.7 2.1H17z" /></svg>
                    </a>
                    {/* Zalo */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 7.82 2 15.02c0 3.13 1.23 5.98 3.28 8.13-.14.98-.54 2.47-1.41 4.13-.13.25.13.53.39.42 2.13-.87 3.7-1.77 4.7-2.37C11.5 26.8 13.7 27.5 16 27.5c7.73 0 14-5.82 14-13.02C30 7.82 23.73 2 16 2z" /></svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>
                    </a>
                  </div>
                  {/* Nút share */}
                  <div className="bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                      <circle cx="18" cy="5" r="2.5" />
                      <circle cx="6" cy="12" r="2.5" />
                      <circle cx="18" cy="19" r="2.5" />
                      <path d="M8.5 13.5l6.5 4.5M15 6.5l-6.5 4.5" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Alan Begham</h3>
                  <p className="text-xs text-gray-400 italic">/ CEO Aiero /</p>
                </div>
                <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                  <span className="vertical-text select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontWeight: 700, color: 'rgba(31,41,55,0.7)', fontSize: '1.75rem', userSelect: 'none', lineHeight: 1 }}>Neural</span>
                </div>
              </article>
            </a>
            {/* Card 2 */}
            <a href="/team/arthur-dowson" className="block group/team-card">
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a smiling man wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/36c7bc5f-1f62-4294-0a9e-b596dd8d24bb.jpg" width="220" />
                <div className="absolute left-4 bottom-16 z-20 flex flex-col gap-2">
                  {/* Cột icon social */}
                  <div className="flex flex-col items-start gap-3 transition-all duration-300 opacity-0 translate-y-4 group-hover/team-card:opacity-100 group-hover/team-card:translate-y-0 pointer-events-none group-hover/team-card:pointer-events-auto">
                    {/* Facebook */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M17 2.1v3.2h-1.5c-.6 0-.7.2-.7.7v1.5h2.2l-.3 2.3h-1.9V22h-2.7V9.8h-1.9V7.5h1.9V5.8C12 3.7 13.2 2.1 15.7 2.1H17z" /></svg>
                    </a>
                    {/* Zalo */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 7.82 2 15.02c0 3.13 1.23 5.98 3.28 8.13-.14.98-.54 2.47-1.41 4.13-.13.25.13.53.39.42 2.13-.87 3.7-1.77 4.7-2.37C11.5 26.8 13.7 27.5 16 27.5c7.73 0 14-5.82 14-13.02C30 7.82 23.73 2 16 2z" /></svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>
                    </a>
                  </div>
                  {/* Nút share */}
                  <div className="bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                      <circle cx="18" cy="5" r="2.5" />
                      <circle cx="6" cy="12" r="2.5" />
                      <circle cx="18" cy="19" r="2.5" />
                      <path d="M8.5 13.5l6.5 4.5M15 6.5l-6.5 4.5" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Arthur Dowson</h3>
                  <p className="text-xs text-gray-400 italic">/ AI Programmer /</p>
                </div>
                <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                  <span className="vertical-text select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontWeight: 700, color: 'rgba(31,41,55,0.7)', fontSize: '1.75rem', userSelect: 'none', lineHeight: 1 }}>Solution</span>
                </div>
              </article>
            </a>
            {/* Card 3 */}
            <a href="/team/dan-smith" className="block group/team-card">
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a man with short hair wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/6ed584f1-ab84-4822-503b-958e292a4f93.jpg" width="220" />
                <div className="absolute left-4 bottom-16 z-20 flex flex-col gap-2">
                  {/* Cột icon social */}
                  <div className="flex flex-col items-start gap-3 transition-all duration-300 opacity-0 translate-y-4 group-hover/team-card:opacity-100 group-hover/team-card:translate-y-0 pointer-events-none group-hover/team-card:pointer-events-auto">
                    {/* Facebook */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M17 2.1v3.2h-1.5c-.6 0-.7.2-.7.7v1.5h2.2l-.3 2.3h-1.9V22h-2.7V9.8h-1.9V7.5h1.9V5.8C12 3.7 13.2 2.1 15.7 2.1H17z" /></svg>
                    </a>
                    {/* Zalo */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 7.82 2 15.02c0 3.13 1.23 5.98 3.28 8.13-.14.98-.54 2.47-1.41 4.13-.13.25.13.53.39.42 2.13-.87 3.7-1.77 4.7-2.37C11.5 26.8 13.7 27.5 16 27.5c7.73 0 14-5.82 14-13.02C30 7.82 23.73 2 16 2z" /></svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>
                    </a>
                  </div>
                  {/* Nút share */}
                  <div className="bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                      <circle cx="18" cy="5" r="2.5" />
                      <circle cx="6" cy="12" r="2.5" />
                      <circle cx="18" cy="19" r="2.5" />
                      <path d="M8.5 13.5l6.5 4.5M15 6.5l-6.5 4.5" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Dan Smith</h3>
                  <p className="text-xs text-gray-400 italic">/ Manager /</p>
                </div>
                <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                  <span className="vertical-text select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontWeight: 700, color: 'rgba(31,41,55,0.7)', fontSize: '1.75rem', userSelect: 'none', lineHeight: 1 }}>Future</span>
                </div>
              </article>
            </a>
          </div>
          {/* Hàng dưới: 3 card phải */}
          <div className="flex flex-row justify-end gap-8 md:gap-10">
            {/* Card 4 */}
            <a href="/team/brandon-adams" className="block group/team-card">
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none ml-[236px] md:ml-[240px] lg:ml-[240px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a man with glasses wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/435c514d-06a3-4f46-58e8-bebc51b9195e.jpg" width="220" />
                <div className="absolute left-4 bottom-16 z-20 flex flex-col gap-2">
                  {/* Cột icon social */}
                  <div className="flex flex-col items-start gap-3 transition-all duration-300 opacity-0 translate-y-4 group-hover/team-card:opacity-100 group-hover/team-card:translate-y-0 pointer-events-none group-hover/team-card:pointer-events-auto">
                    {/* Facebook */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M17 2.1v3.2h-1.5c-.6 0-.7.2-.7.7v1.5h2.2l-.3 2.3h-1.9V22h-2.7V9.8h-1.9V7.5h1.9V5.8C12 3.7 13.2 2.1 15.7 2.1H17z" /></svg>
                    </a>
                    {/* Zalo */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 7.82 2 15.02c0 3.13 1.23 5.98 3.28 8.13-.14.98-.54 2.47-1.41 4.13-.13.25.13.53.39.42 2.13-.87 3.7-1.77 4.7-2.37C11.5 26.8 13.7 27.5 16 27.5c7.73 0 14-5.82 14-13.02C30 7.82 23.73 2 16 2z" /></svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>
                    </a>
                  </div>
                  {/* Nút share */}
                  <div className="bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                      <circle cx="18" cy="5" r="2.5" />
                      <circle cx="6" cy="12" r="2.5" />
                      <circle cx="18" cy="19" r="2.5" />
                      <path d="M8.5 13.5l6.5 4.5M15 6.5l-6.5 4.5" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Brandon Adams</h3>
                  <p className="text-xs text-gray-400 italic">/ HR Neuro /</p>
                </div>
                <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                  <span className="vertical-text select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontWeight: 700, color: 'rgba(31,41,55,0.7)', fontSize: '1.75rem', userSelect: 'none', lineHeight: 1 }}>Digital</span>
                </div>
              </article>
            </a>
            {/* Card 5 */}
            <a href="/team/alan-begham-neuro" className="block group/team-card">
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a man with short hair wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/6ed584f1-ab84-4822-503b-958e292a4f93.jpg" width="220" />
                <div className="absolute left-4 bottom-16 z-20 flex flex-col gap-2">
                  {/* Cột icon social */}
                  <div className="flex flex-col items-start gap-3 transition-all duration-300 opacity-0 translate-y-4 group-hover/team-card:opacity-100 group-hover/team-card:translate-y-0 pointer-events-none group-hover/team-card:pointer-events-auto">
                    {/* Facebook */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M17 2.1v3.2h-1.5c-.6 0-.7.2-.7.7v1.5h2.2l-.3 2.3h-1.9V22h-2.7V9.8h-1.9V7.5h1.9V5.8C12 3.7 13.2 2.1 15.7 2.1H17z" /></svg>
                    </a>
                    {/* Zalo */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 7.82 2 15.02c0 3.13 1.23 5.98 3.28 8.13-.14.98-.54 2.47-1.41 4.13-.13.25.13.53.39.42 2.13-.87 3.7-1.77 4.7-2.37C11.5 26.8 13.7 27.5 16 27.5c7.73 0 14-5.82 14-13.02C30 7.82 23.73 2 16 2z" /></svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>
                    </a>
                  </div>
                  {/* Nút share */}
                  <div className="bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                      <circle cx="18" cy="5" r="2.5" />
                      <circle cx="6" cy="12" r="2.5" />
                      <circle cx="18" cy="19" r="2.5" />
                      <path d="M8.5 13.5l6.5 4.5M15 6.5l-6.5 4.5" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Alan Begham</h3>
                  <p className="text-xs text-gray-400 italic">/ CEO Neuro /</p>
                </div>
                <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                  <span className="vertical-text select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontWeight: 700, color: 'rgba(31,41,55,0.7)', fontSize: '1.75rem', userSelect: 'none', lineHeight: 1 }}>Learning</span>
                </div>
              </article>
            </a>
            {/* Card 6 */}
            <a href="/team/tim-bearton" className="block group/team-card">
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a cheerful man with dark hair, wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/6ed584f1-ab84-4822-503b-958e292a4f93.jpg" width="220" />
                <div className="absolute left-4 bottom-16 z-20 flex flex-col gap-2">
                  {/* Cột icon social */}
                  <div className="flex flex-col items-start gap-3 transition-all duration-300 opacity-0 translate-y-4 group-hover/team-card:opacity-100 group-hover/team-card:translate-y-0 pointer-events-none group-hover/team-card:pointer-events-auto">
                    {/* Facebook */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M17 2.1v3.2h-1.5c-.6 0-.7.2-.7.7v1.5h2.2l-.3 2.3h-1.9V22h-2.7V9.8h-1.9V7.5h1.9V5.8C12 3.7 13.2 2.1 15.7 2.1H17z" /></svg>
                    </a>
                    {/* Zalo */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mb-1 hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 7.82 2 15.02c0 3.13 1.23 5.98 3.28 8.13-.14.98-.54 2.47-1.41 4.13-.13.25.13.53.39.42 2.13-.87 3.7-1.77 4.7-2.37C11.5 26.8 13.7 27.5 16 27.5c7.73 0 14-5.82 14-13.02C30 7.82 23.73 2 16 2z" /></svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 transition">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>
                    </a>
                  </div>
                  {/* Nút share */}
                  <div className="bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                      <circle cx="18" cy="5" r="2.5" />
                      <circle cx="6" cy="12" r="2.5" />
                      <circle cx="18" cy="19" r="2.5" />
                      <path d="M8.5 13.5l6.5 4.5M15 6.5l-6.5 4.5" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Tim Bearton</h3>
                  <p className="text-xs text-gray-400 italic">/ HR Neuro /</p>
                </div>
                <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                  <span className="vertical-text select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontWeight: 700, color: 'rgba(31,41,55,0.7)', fontSize: '1.75rem', userSelect: 'none', lineHeight: 1 }}>Ideas</span>
                </div>
              </article>
            </a>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="relative z-50 flex p-6 flex-col md:mt-24 md:flex-row gap-6 rounded-3xl h-auto overflow-hidden">
        {/* Left Card - Testimonial */}
        <div className="relative bg-[#1f1f1f] rounded-3xl text-gray-300 p-10 md:w-[60%] md:h-[790px] h-[472px] flex flex-col justify-around items-center">
          <div className='0.5xl:w-[80%] mb-10 0.5xl:mb-0'>
            <div className="text-4xl text-white ">❝</div>
            <p className="text-[18px] 0.5xl:text-2xl text-white leading-relaxed font-roboto">
              Working with Aiero has been a game-changer for our business. Their AI
              solutions have revolutionized our operations, enabling us to automate
              repetitive tasks and make data-driven decisions with ease. We couldn't
              be happier with the results."
            </p>
            <p className=" text-[14px] 0.5xl:text-[16px] w-[80%] font-manrope mt-10 0.5:mt-20">
              - John Anderson, CEO of XYZ Company
            </p>
          </div>
          {/* Arrows */}
          <div className="flex items-center gap-4 absolute bottom-0 left-[30%] 0.5xl:left-[20%] transform -translate-x-1/2 bg-white rounded-t-[32px] px-4 py-2">
            {/* Circle div bottom-right */}
            <div class="absolute bottom-[-4px] right-[-31px]  w-8 h-8 bg-white mask-rounded-hole-testimonial-right"></div>

            {/* Circle div bottom-left */}
            <div class="absolute bottom-[-4px] left-[-28px]  w-8 h-8 bg-white mask-rounded-hole-testimonial-left"></div>
            <button className="w-12 h-12 flex items-center justify-center rounded-l-[32px] rounded-r-none font-thin text-black text-[30px] bg-white hover:text-cyan-400">
              ←
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-r-[32px] rounded-l-none font-thin text-black text-[30px] bg-white hover:text-cyan-400">
              →
            </button>
          </div>
        </div>

        {/* Right Card - Overview */}
        <div className="text-white p-10 md:w-[40%] rounded-3xl md:h-[790px] h-[472px] flex flex-col justify-around"
          style={{ backgroundImage: "url('/svg/Testimonial.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h2 className="0.5xl:text-6xl text-4xl leading-snug mb-8 font-roboto">
            Discover what our clients have to say about our AI solutions
          </h2>
          <div>
            <p className="outlined-text mb-1">{count}+</p>
            <p className="text-lg text-white">Happy clients</p>
          </div>
        </div>
      </section>


      {/* Explore Services Section */}
      <section className="relative mt-24 mb-24 px-0 max-w-none w-full flex justify-center items-center min-h-[420px] h-[70vh] bg-white overflow-hidden">
        <div className="absolute inset-0 w-[0%] 0.5xl:w-[18%]  bg-gradient-to-r from-[#bcaaff] via-[#a0c4ff] to-[#fff] opacity-10 pointer-events-none"></div>
        {/* Pattern bên trái */}
        <div className="absolute left-[-140px] top-0 h-full w-0 sm:w-auto pointer-events-none select-none z-0 flex items-center">
          <img src="/svg/elements-X.png" alt="Pattern X" className="h-full w-full opacity-90" />
        </div>
        {/* Nội dung chính */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <h2 className="text-5xl sm:text-6xl w-auto 2xl:text-8xl xl:text-8xl font-light leading-tight text-center font-roboto mb-10 max-w-5xl">
            Khám phá các dịch vụ của Zatify ngay để nắm bắt được toàn bộ{' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-normal">
              Hệ sinh thái Zalo
            </span>
          </h2>
          {/* Logos */}
          <div className="hidden sm:flex flex-row items-center justify-center gap-12 mt-2 opacity-80">
            {[
              { src: 'svg/logos/zalozns.jpg', alt: 'Zalo ZNS' },
              { src: 'svg/logos/zaloaccout.jpg', alt: 'Zalo Offical Account' },
              { src: 'svg/logos/zaloads.jpg', alt: 'Zalo ADS' },
              { src: 'svg/logos/miniapp.jpg', alt: 'Zalo Miniapp' },
            ].map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-20" />
            ))}
          </div>
          <div className="sm:hidden w-full">
            <div className="swiper-container-wrapper">
              <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
                loop={true}
                className="w-full"
              >
                {[
                  { src: 'svg/logos/zalozns.jpg', alt: 'Zalo ZNS' },
                  { src: 'svg/logos/zaloaccout.jpg', alt: 'Zalo Offical Account' },
                  { src: 'svg/logos/zaloads.jpg', alt: 'Zalo ADS' },
                  { src: 'svg/logos/miniapp.jpg', alt: 'Zalo Miniapp' },
                ].map((logo) => (
                  <SwiperSlide key={logo.alt} className="flex justify-center items-center w-full">
                    <img src={logo.src} alt={logo.alt} className="h-20 mx-auto" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="custom-swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeTeam;
