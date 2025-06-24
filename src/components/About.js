import React from "react";

const About = () => {
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
          className="pointer-events-none select-none absolute lg:left-40 lg:top-[25rem] -translate-x-1/2 -translate-y-1/2 text-[16rem] 0.5xl:text-[25rem] font-extrabold outlined-text z-0 hidden 2xl:block"
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
            alt="Abstract blue and purple fluid shapes background with white dotted pattern on right side"
            className="object-cover rounded-2xl"
            style={{ width: 1228.67, height: 595 }}
            src="https://storage.googleapis.com/a1aa/image/8e01da5c-573c-400c-341e-798e3550684c.jpg"
          />
          <div className="absolute bottom-24 left-8 max-w-[60%] text-white text-3xl md:text-4xl font-normal leading-snug">
            we create a professional product using artificial intelligence
          </div>
          <div className="absolute top-12 right-8 flex flex-col items-center text-white font-semibold">
            <span className="text-[72px] md:text-[96px] font-extrabold leading-none rotate-90 select-none">500+</span>
            <span className="text-xs mt-2 text-center">Created projects</span>
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
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {/* Card 1 */}
            <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none">
              <img alt="Portrait of a bearded man with glasses wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/ac30d169-6aa9-4659-ccda-1ee61f8bb4a1.jpg" width="220" />
              <div className="absolute top-4 left-4 bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer">
                {/* Share SVG */}
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8a3 3 0 1 0-2.83-4H8a3 3 0 1 0 0 2h7.17A3 3 0 0 0 18 8zm-6 8a3 3 0 1 0 0-2H6.83A3 3 0 1 0 6 16zm6-2a3 3 0 1 0 2.83 4H16a3 3 0 1 0 0-2h-7.17A3 3 0 0 0 6 16z" /></svg>
              </div>
              <div className="p-4 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Alan Begham</h3>
                <p className="text-xs text-gray-400 italic">/ CEO Aiero /</p>
              </div>
              <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                <span className="vertical-text select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontWeight: 700, color: 'rgba(31,41,55,0.7)', fontSize: '1.75rem', userSelect: 'none', lineHeight: 1 }}>Neural</span>
              </div>
            </article>
            {/* Card 2 */}
            <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none">
              <img alt="Portrait of a smiling man wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/36c7bc5f-1f62-4294-0a9e-b596dd8d24bb.jpg" width="220" />
              <div className="absolute top-4 left-4 bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8a3 3 0 1 0-2.83-4H8a3 3 0 1 0 0 2h7.17A3 3 0 0 0 18 8zm-6 8a3 3 0 1 0 0-2H6.83A3 3 0 1 0 6 16zm6-2a3 3 0 1 0 2.83 4H16a3 3 0 1 0 0-2h-7.17A3 3 0 0 0 6 16z" /></svg>
              </div>
              <div className="p-4 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Arthur Dowson</h3>
                <p className="text-xs text-gray-400 italic">/ AI Programmer /</p>
              </div>
              <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                <span className="vertical-text select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontWeight: 700, color: 'rgba(31,41,55,0.7)', fontSize: '1.75rem', userSelect: 'none', lineHeight: 1 }}>Solution</span>
              </div>
            </article>
            {/* Card 3 */}
            <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none">
              <img alt="Portrait of a man with short hair wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/6ed584f1-ab84-4822-503b-958e292a4f93.jpg" width="220" />
              <div className="absolute top-4 left-4 bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8a3 3 0 1 0-2.83-4H8a3 3 0 1 0 0 2h7.17A3 3 0 0 0 18 8zm-6 8a3 3 0 1 0 0-2H6.83A3 3 0 1 0 6 16zm6-2a3 3 0 1 0 2.83 4H16a3 3 0 1 0 0-2h-7.17A3 3 0 0 0 6 16z" /></svg>
              </div>
              <div className="p-4 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Dan Smith</h3>
                <p className="text-xs text-gray-400 italic">/ Manager /</p>
              </div>
              <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                <span className="vertical-text select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontWeight: 700, color: 'rgba(31,41,55,0.7)', fontSize: '1.75rem', userSelect: 'none', lineHeight: 1 }}>Future</span>
              </div>
            </article>
            {/* Card 4 */}
            <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none">
              <img alt="Portrait of a man with glasses wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/435c514d-06a3-4f46-58e8-bebc51b9195e.jpg" width="220" />
              <div className="absolute top-4 left-4 bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8a3 3 0 1 0-2.83-4H8a3 3 0 1 0 0 2h7.17A3 3 0 0 0 18 8zm-6 8a3 3 0 1 0 0-2H6.83A3 3 0 1 0 6 16zm6-2a3 3 0 1 0 2.83 4H16a3 3 0 1 0 0-2h-7.17A3 3 0 0 0 6 16z" /></svg>
              </div>
              <div className="p-4 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Brandon Adams</h3>
                <p className="text-xs text-gray-400 italic">/ HR Neuro /</p>
              </div>
              <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                <span className="vertical-text select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontWeight: 700, color: 'rgba(31,41,55,0.7)', fontSize: '1.75rem', userSelect: 'none', lineHeight: 1 }}>Digital</span>
              </div>
            </article>
            {/* Card 5 */}
            <article className="relative rounded-xl overflow-hidden bg-white shadow-md max-w-[220px] md:max-w-none">
              <img alt="Portrait of a man with short hair wearing a white t-shirt, looking straight" className="w-full h-[220px] object-cover rounded-t-xl" height="220" src="https://storage.googleapis.com/a1aa/image/6ed584f1-ab84-4822-503b-958e292a4f93.jpg" width="220" />
              <div className="absolute top-4 left-4 bg-gray-800 bg-opacity-80 p-2 rounded-full text-white text-xs cursor-pointer">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8a3 3 0 1 0-2.83-4H8a3 3 0 1 0 0 2h7.17A3 3 0 0 0 18 8zm-6 8a3 3 0 1 0 0-2H6.83A3 3 0 1 0 6 16zm6-2a3 3 0 1 0 2.83 4H16a3 3 0 1 0 0-2h-7.17A3 3 0 0 0 6 16z" /></svg>
              </div>
              <div className="p-4 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Alan Begham</h3>
                <p className="text-xs text-gray-400 italic">/ CEO Neuro /</p>
              </div>
              <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                <span className="vertical-text select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontWeight: 700, color: 'rgba(31,41,55,0.7)', fontSize: '1.75rem', userSelect: 'none', lineHeight: 1 }}>Learning</span>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
