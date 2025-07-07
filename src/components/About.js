import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const About = () => {
  React.useEffect(() => {
    let started = false;
    let frame;
    function animateNumber() {
      const el = document.getElementById('animated-number');
      if (!el) return;
      let start = 1;
      const end = 500;
      const duration = 1200;
      const startTime = performance.now();
      function update(now) {
        const elapsed = now - startTime;
        let progress = Math.min(elapsed / duration, 1);
        let value = Math.floor(start + (end - start) * progress);
        el.textContent = value + '+';
        if (progress < 1) {
          frame = requestAnimationFrame(update);
        } else {
          el.textContent = end + '+';
        }
      }
      frame = requestAnimationFrame(update);
    }
    function onScroll() {
      if (started) return;
      const el = document.getElementById('animated-number');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        started = true;
        animateNumber();
        window.removeEventListener('scroll', onScroll);
      }
    }
    window.addEventListener('scroll', onScroll);
    // Check immediately in case already in view
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen font-sans">      <div style={{ height: '6rem' }} />
      {/* Hero Section */}
      <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-0 rounded-bl-3xl rounded-br-3xl pointer-events-none" />

      <section className="relative p-4 top-10 w-full max-w-full mx-auto " style={{ zIndex: 1 }}>
        <div
          className="relative rounded-3xl 0.5xl:rounded-tr-3xl 0.5xl:rounded-none w-full h-[280px] md:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(svg/background/about-us.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal text-center mx-auto select-none" style={{ letterSpacing: 2 }}>About Us</h1>
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
          <div className="absolute left-[255px] bottom-[-11px] w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
          {/* Circle div top-left */}
          <div className="absolute left-[-1px] bottom-[69px]  w-8 h-8 bg-white mask-rounded-hole-service-bl z-50"></div>
          <div className="justify-center items-center w-64 h-20 absolute left-0 bottom-0 bg-white rounded-tr-3xl  rounded-br-none px-8 py-4 text-black text-base font-sans flex flex-col shadow-md" style={{ minWidth: 220 }}>
            <span className="text-sm mb-1">Home / About us</span>
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


      {/* Content Container  */}
      <section className="relative 0.5xl:max-w-[85rem] max-w-full mt-24 mx-auto px-6 py-10 sm:py-16" style={{ minHeight: 340 }}>
        {/* Absolute Aiero text cho desktop */}
        <span
          className="pointer-events-none select-none absolute lg:left-40 lg:top-[25rem] -translate-x-1/2 -translate-y-1/2 text-[16rem] 0.5xl:text-[25rem] font-extrabold outlined-text z-0 hidden lg:block"
          style={{
            color: 'transparent',
            WebkitTextStroke: '2px #3b82f6',
            textStroke: '2px #3b82f6',
            fontFamily: 'Inter,sans-serif',
            lineHeight: 1,
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Aiero
        </span>
        <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 z-10">
          <h1 className="text-[2.5rem] leading-[1.1] font-roboto 0.5xl:text-6xl max-w-[600px] 0.5xl:max-w-[65%]">
            Awesome things in working with Aiero WordPress theme
          </h1>
          <img
            src="https://storage.googleapis.com/a1aa/image/dadeb660-ea40-431d-8b2d-4804542fca87.jpg"
            alt="Light gray XXX logo text"
            className="hidden lg:block w-[150px] h-[50px] object-contain"
            width="150"
            height="50"
          />
        </div>
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-end mt-10 gap-6 z-10">
          {/* Aiero cho mobile, flex cùng text */}
          <div
            className="block text-[7rem] md:text-[12rem] 2xl:hidden w-full text-center"
            style={{
              color: 'transparent',
              WebkitTextStroke: '1px #3b82f6',
              textStroke: '1px #3b82f6',
              fontFamily: 'Inter,sans-serif',
              fontWeight: 800,
              lineHeight: 1,
              userSelect: 'none',
              whiteSpace: 'nowrap',
              marginBottom: '1.5rem'
            }}
          >
            Aiero
          </div>
          <div className="max-w-[600px] text-base leading-relaxed font-manrope text-black">
            <p className="mb-6 font-semibold">
              At XXLando, we are a leading AI services provider dedicated to delivering innovative solutions that leverage artificial intelligence to transform businesses.
            </p>
            <p className="mb-6">
              Our team of experts specializes in cutting-edge AI technologies, offering customized strategies and implementations to help you stay ahead in today’s data-driven world. Unlock the full potential of AI with
            </p>
            <p>
              XXLando, your trusted partner in the future of intelligent technology stay ahead in today’s data-driven world. Unlock the full potential of AI with XXLando, your trusted partner in the future of intelligent technology stay ahead in today’s.
            </p>
          </div>
        </div>
      </section>
      {/* Text chạy ngang qua màn hình */}
      <section className="labelrunning w-full h-[115px] overflow-hidden flex items-center relative">
        <div className="marquee flex whitespace-nowrap" style={{ animation: 'marquee 15s linear infinite' }}>
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-gray-800 font-roboto mx-8">
            / Neural Networks in shaping the future of technology.
          </span>
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-gray-800 font-roboto mx-8">
            / Neural Networks in shaping the future of technology.
          </span>
        </div>
      </section>
      
      {/* Mission Section */}
      <div className="flex flex-col md:flex-row max-w-[1901px] mx-auto p-6 gap-6 min-h-[595px] mt-16">
        {/* Left black panel */}
        <div className="bg-[#1d1d1d] rounded-2xl flex flex-col justify-between p-12 md:p-16 md:w-1/3 text-white">
          <div>
            <h1 className="text-4xl font-semibold mb-6 leading-tight">Mission</h1>
            <p className="text-sm font-normal leading-relaxed mb-6">
              Certainly, crafting a clear and inspiring mission statement is essential for a development company. It should reflect your company’s values, purpose, and long-term objectives. Here’s a sample mission statement for a development company,
            </p>
            <p className="text-sm font-normal leading-relaxed">
              At XXLando our mission is to empower businesses and organizations through innovative development solutions. We are committed to delivering exceptional, tailored software, websites, and applications that not only meet our clients.
            </p>
          </div>
          <div className="self-end -mb-2">
            <img
              alt="XXLando logo with teal and white colors on black background"
              className="w-[160px] h-[80px] object-contain"
              height="80"
              src="https://storage.googleapis.com/a1aa/image/813c20c9-a94f-414b-e17c-2ae36a996c43.jpg"
              width="160"
            />
          </div>
        </div>
        {/* Right panel with image and text */}
        <div className="relative rounded-2xl md:w-2/3 overflow-hidden flex flex-col justify-between" style={{ minHeight: '595px' }}>
          <img
            alt="Contact background"
            className="object-cover rounded-2xl"
            style={{ width: 1228.67, height: 595 }}
            src="/svg/background/contact.jpg"
          />
          <div className="absolute bottom-24 left-8 max-w-[60%] text-white text-3xl md:text-4xl font-normal leading-snug">
            we create a professional product using artificial intelligence
          </div>
          {/* 500+ vertical and Created projects below, flexbox */}
          <div
            className="absolute right-0 top-1/2 flex flex-col items-center select-none pb-8"
            style={{ transform: 'translateY(-50%)', zIndex: 3, width: '180px' }}
          >
            <span
              id="animated-number"
              className="text-[96px] md:text-[140px] font-extrabold leading-none"
              style={{
                transform: 'rotate(90deg)',
                whiteSpace: 'nowrap',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                color: '#fff',
                textShadow: '0 4px 24px rgba(0,0,0,0.25), 0 1px 0 #000',
                display: 'block',
                textAlign: 'center',
              }}
            >1+</span>
            <span
              className="text-xs font-normal mt-24"
              style={{
                color: '#fff',
                textAlign: 'center',
                textShadow: '0 2px 12px rgba(0,0,0,0.18), 0 1px 0 #000',
                lineHeight: 1.2,
                display: 'block',
              }}
            >Created projects</span>
          </div>
          <button
            className="absolute bottom-0 right-0 flex items-center gap-2 bg-white rounded-tl-3xl px-6 py-4 text-sm font-normal text-black"
            onClick={() => {
              const video = document.getElementById('mission-video');
              if (video) video.style.display = video.style.display === 'none' ? 'block' : 'flex';
            }}
          >
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            Watch video
          </button>
          <div id="mission-video" style={{ display: 'none', position: 'absolute', bottom: 100, right: 40, zIndex: 20, background: '#000', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,0.3)', flexDirection: 'column', alignItems: 'flex-end' }}>
            <button
              style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 10, right: 10, zIndex: 21, cursor: 'pointer' }}
              onClick={() => { document.getElementById('mission-video').style.display = 'none'; }}
              aria-label="Close video"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            <iframe
              width="900"
              height="506"
              src="https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&controls=1&rel=0&modestbranding=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ display: 'block', borderRadius: '1rem' }}
            ></iframe>
          </div>
        </div>
      </div>
                {/* Explore Services Section */}
      <section className="relative mt-24 px-0 max-w-none w-full flex justify-center items-center min-h-[420px] h-[70vh] bg-white overflow-hidden">
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
      {/* Neural Network Team Section */}
      <div className="bg-white flex justify-center items-center py-16 px-2">
        <main className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {/* Left: Team Info */}
          <section className="flex flex-col justify-center max-w-lg">
            <p className="text-xs text-gray-600 mb-2 tracking-widest font-normal">[ team ]</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-snug mb-6 max-w-[18ch]">
              The Neural Network experts: uniting talent for intelligent solutions
            </h1>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-transparent mb-1 select-none" style={{ color: 'transparent', WebkitTextStroke: '1.5px #a5b4fc' }}>
              +500
            </h2>
            <p className="text-sm text-gray-900 font-normal mb-8">Awesome team members</p>
              <div className="gradient-border w-[162px] h-[52px] rounded-md inline-block p-[1px]">
                <button className="justify-center text-sm text-black bg-white rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                  Expore more
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
          </section>
  
          {/* Right: Team Cards */}
          <section
            className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full"
          >
            {/* Card 1 */}
            <a
              href="/team/alan-begham"
              className="block group/team-card mx-auto xs:mx-0"
            >
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[280px] w-full transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a bearded man with glasses wearing a white t-shirt, looking straight" className="w-full h-[260px] object-cover rounded-t-xl" height="260" src="https://storage.googleapis.com/a1aa/image/ac30d169-6aa9-4659-ccda-1ee61f8bb4a1.jpg" width="280" />
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
            <a
              href="/team/alan-begham"
              className="block group/team-card mx-auto xs:mx-0"
            >
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[280px] w-full transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a smiling man wearing a white t-shirt, looking straight" className="w-full h-[260px] object-cover rounded-t-xl" height="260" src="https://storage.googleapis.com/a1aa/image/36c7bc5f-1f62-4294-0a9e-b596dd8d24bb.jpg" width="280" />
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
            <a
              href="/team/alan-begham"
              className="block group/team-card mx-auto xs:mx-0"
            >
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[280px] w-full transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a man with short hair wearing a white t-shirt, looking straight" className="w-full h-[260px] object-cover rounded-t-xl" height="260" src="https://storage.googleapis.com/a1aa/image/6ed584f1-ab84-4822-503b-958e292a4f93.jpg" width="280" />
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
            {/* Card 4 */}
            <a
              href="/team/alan-begham"
              className="block group/team-card mx-auto xs:mx-0"
            >
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[280px] w-full transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a man with glasses wearing a white t-shirt, looking straight" className="w-full h-[260px] object-cover rounded-t-xl" height="260" src="https://storage.googleapis.com/a1aa/image/435c514d-06a3-4f46-58e8-bebc51b9195e.jpg" width="280" />
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
            <a
              href="/team/alan-begham"
              className="block group/team-card mx-auto xs:mx-0"
            >
              <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[280px] w-full transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border hover:border-blue-300 group/team-card">
                <img alt="Portrait of a man with short hair wearing a white t-shirt, looking straight" className="w-full h-[260px] object-cover rounded-t-xl" height="260" src="https://storage.googleapis.com/a1aa/image/6ed584f1-ab84-4822-503b-958e292a4f93.jpg" width="280" />
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
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
