import React, { useState, useRef, useEffect } from "react";
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
      const end = 250;
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

  // Hiệu ứng từng ký tự cho tiêu đề
  const [animateTitle, setAnimateTitle] = React.useState(false);
  const titleRef = React.useRef(null);
  const h2Ref = useRef(null);
  const [animateH2, setAnimateH2] = useState(false);

  React.useEffect(() => {
    // Trigger hiệu ứng khi tiêu đề vào viewport
    function onScrollTitle() {
      if (!titleRef.current) return;
      const rect = titleRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setAnimateTitle(true);
        window.removeEventListener('scroll', onScrollTitle);
      }
    }
    window.addEventListener('scroll', onScrollTitle);
    onScrollTitle();
    return () => window.removeEventListener('scroll', onScrollTitle);
  }, []);

  // Fixed useEffect for h2 "Ưu điểm của Zatify"
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimateH2(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    return () => {
      if (h2Ref.current) {
        observer.unobserve(h2Ref.current);
      }
    };
  }, []);


  return (
    <div className="relative w-full min-h-screen font-sans">
      <div style={{ height: '6rem' }} />
      {/* Hero Section */}
      <img src="/svg/bg-opacity.svg" alt="Background opacity effect" className="absolute inset-0 top-0 rounded-bl-3xl rounded-br-3xl pointer-events-none" />
      <img src="/svg/about-us-gradient.svg" alt="Background opacity effect" className="absolute  inset-0 top-[270vh] md:top-[180vh] 2xl:top-[130vh] rounded-bl-3xl rounded-br-3xl pointer-events-none" />

      <section className="relative p-4 top-10 w-full max-w-full mx-auto " style={{ zIndex: 1 }}>
        <div
          className="relative rounded-3xl 0.5xl:rounded-tr-3xl 0.5xl:rounded-none w-full h-[280px] md:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(svg/background/about-us.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="text-white text-[40px] md:text-[90px] font-roboto font-normal text-center mx-auto select-none" style={{ letterSpacing: 2 }}>Giới thiệu</h1>
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
            <span className="text-sm mb-1">Về Zatify / Giới thiệu</span>
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
          className="pointer-events-none select-none absolute lg:left-40 lg:top-[25rem] -translate-x-1/2 -translate-y-1/2 text-[16rem] 0.5xl:text-[22rem] font-extrabold outlined-text z-0 hidden lg:block"
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
          Zatify
        </span>
        <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 z-10">
          <h1
            ref={titleRef}
            className="text-[2.5rem] leading-[1.1] font-roboto 0.5xl:text-6xl max-w-[600px] 0.5xl:max-w-[65%]"
            style={{
              overflow: 'visible',
              lineHeight: '1.2',
              minHeight: '1em',
              wordBreak: 'break-word',
              whiteSpace: 'normal',
              display: 'block',
            }}
          >
            {
              // Tách theo từ và giữ dấu cách
              "Định hình tương lai số hóa trên nền tảng Zalo"
                .split(/(\s+)/)
                .map((wordOrSpace, wordIdx) =>
                  wordOrSpace.trim() === "" ? (
                    // Nếu là dấu cách, render luôn
                    <span key={`space-${wordIdx}`}>{wordOrSpace}</span>
                  ) : (
                    // Nếu là từ, map từng ký tự
                    <span key={`word-${wordIdx}`} style={{ display: 'inline-block' }}>
                      {wordOrSpace.split('').map((char, idx) => (
                        <span
                          key={idx}
                          className={`inline-block transition-all duration-500 ease-out
                            ${animateTitle
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-8'}
                          `}
                          style={{
                            transitionDelay: `${(wordIdx * 10 + idx) * 15}ms`,
                            display: 'inline-block',
                            lineHeight: '1.2',
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  )
                )
            }
          </h1>
          <img
            src="/images/logoZ.jpg"
            alt="Zatify logo"
            className="hidden lg:block w-auto h-16 object-contain"
          />
        </div>
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-end mt-10 gap-6 z-10">
          {/* Aiero cho mobile, flex cùng text */}
          <div
            className="block text-[7rem] md:text-[10rem] lg:hidden w-full text-center"
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
            Zatify
          </div>
          <div className="max-w-[600px] text-base leading-relaxed font-manrope text-black">
            <p className="mb-6 font-semibold">
              ZATIFY là đơn vị tiên phong cung cấp giải pháp truyền thông và chuyển đổi số toàn diện trên nền tảng Zalo, giúp doanh nghiệp nâng cao hiệu quả tương tác, chăm sóc và giữ chân khách hàng.
            </p>
            <p className="mb-6">
              Với đội ngũ kỹ thuật và chiến lược chuyên sâu, ZATIFY không chỉ là đối tác công nghệ, mà còn là người bạn đồng hành trong chiến lược tăng trưởng bền vững của doanh nghiệp.
            </p>
            <p>
              Chúng tôi tin rằng Zalo không chỉ là một nền tảng nhắn tin, mà là một “cánh tay số hóa” đầy tiềm năng – nơi doanh nghiệp có thể:
              <br /><br />
              <span style={{ display: 'block', marginLeft: '1.5em' }}>● Giao tiếp cá nhân hóa</span>
              <span style={{ display: 'block', marginLeft: '1.5em' }}>● Tự động hóa quy trình chăm sóc khách hàng</span>
              <span style={{ display: 'block', marginLeft: '1.5em' }}>● Kích hoạt chiến dịch tiếp thị đúng lúc – đúng người</span>
            </p>
          </div>
        </div>
      </section>
      {/* Text chạy ngang qua màn hình */}
      <section className="labelrunning w-full h-[115px] overflow-hidden flex items-center relative">
        <div className="marquee flex whitespace-nowrap" style={{ animation: 'marquee 15s linear infinite' }}>
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-gray-800 font-roboto mx-8">
            Kết nối thông minh – Bứt phá doanh thu.
          </span>
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-gray-800 font-roboto mx-8">
            Chạm đúng khách hàng – Đúng lúc – Đúng cách.
          </span>
          {/* Nhân đôi nội dung để hiệu ứng chạy mượt */}
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-gray-800 font-roboto mx-8">
            Kết nối thông minh – Bứt phá doanh thu.
          </span>
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-gray-800 font-roboto mx-8">
            Chạm đúng khách hàng – Đúng lúc – Đúng cách.
          </span>
        </div>
      </section>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row max-w-[1901px] mx-auto p-6 gap-6 min-h-[595px] 2xl:min-h-[720px] mt-16">
        {/* Left black panel */}
        <div className="bg-[#1d1d1d] rounded-2xl flex flex-col justify-center px-12 md:px-16 md:w-1/3 min-h-[595px] text-white relative">
          <div className="pb-10">
            <h1 className="text-4xl 2xl:text-5xl font-semibold mb-6 2xl:mb-10 leading-tight">Sứ mệnh của ZATIFY</h1>
            <p className="text-sm 2xl:text-lg font-normal leading-relaxed mb-6">
              ZATIFY cam kết đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số, thông qua nền tảng Zalo với các giải pháp toàn diện như ZNS, Zalo OA, Zalo Ads, Mini App và Survey.
            </p>
            <p className="text-sm 2xl:text-lg font-normal leading-relaxed mb-6">
              Chúng tôi mang đến trải nghiệm cá nhân hóa cho người dùng cuối, tối ưu hiệu quả marketing và dịch vụ khách hàng cho doanh nghiệp Việt.
            </p>
            <p className="text-sm 2xl:text-lg font-normal leading-relaxed">
              Sứ mệnh của ZATIFY là giúp khách hàng xây dựng kết nối mạnh mẽ, đúng người – đúng thời điểm – đúng kênh, trên một nền tảng số duy nhất.
            </p>
          </div>
          <img
            src="/svg/3x.png"
            alt="Zatify mission"
            width="240"
            height="100"
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              margin: 0,
            }}
          />
        </div>
        {/* Right panel with image and text */}
        <div className="relative rounded-2xl md:w-2/3 overflow-hidden flex flex-col justify-between min-h-[595px] 2xl:min-h-[720px]">
          <img
            alt="Contact background"
            className="object-cover rounded-2xl min-h-[595px] w-full h-full"
            src="/svg/background/contact.jpg"
          />
          <div className="absolute bottom-24 left-8 max-w-[60%] text-white text-xl md:text-2xl 2xl:text-3xl font-normal leading-snug">
            Được nhiều doanh nghiệp tin tưởng lựa chọn để dẫn đầu hành trình số hóa trên nền tảng Zalo.          </div>
          {/* 500+ vertical and Created projects below, flexbox */}
          <div
            className="absolute right-0 top-1/2 flex flex-col items-center select-none pb-8"
            style={{ transform: 'translateY(-50%)', zIndex: 3, width: '180px' }}
          >
            <span
              id="animated-number"
              className="text-[96px] md:text-[140px] font-bold leading-none"
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
            >Khách hàng</span>
          </div>
          <button
            className="absolute bottom-0 right-0 flex items-center gap-2 bg-white rounded-tl-2xl px-6 py-4 text-sm font-normal text-black shadow-md transition"
            style={{ overflow: 'visible' }}
            onClick={() => {
              const video = document.getElementById('mission-video');
              if (video) video.style.display = video.style.display === 'none' ? 'block' : 'flex';
            }}
          >
            {/* Circle div top-right */}
            <div className="absolute top-[-16px] right-0 w-4 h-4 bg-white mask-rounded-hole-card"></div>

            {/* Circle div bottom-left */}
            <div className="absolute bottom-0 left-[-16px] w-4 h-4 bg-white mask-rounded-hole-card"></div>

            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="11" stroke="#E5E7EB" strokeWidth="1.5" fill="none" />
              <polygon points="10,8 17,12 10,16" fill="currentColor" />
            </svg>
            Xem video
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
      <section className="relative z-0 mt-24 px-0 max-w-none w-full flex justify-center items-center min-h-[420px] h-[70vh] bg-none overflow-hidden">
        <div className="absolute inset-0 w-[0%] 0.5xl:w-[18%]  bg-gradient-to-r from-[#bcaaff] via-[#a0c4ff] to-[#fff] opacity-10 pointer-events-none"></div>
        {/* Pattern bên trái */}
        <div className="absolute left-[-140px] top-0 h-full w-0 sm:w-auto pointer-events-none select-none z-0 flex items-center">
          <img src="/svg/elements-X.png" alt="Pattern X" className="h-full w-full opacity-90" />
        </div>
        {/* Nội dung chính */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <h2 className="text-5xl sm:text-6xl w-auto 2xl:text-8xl xl:text-8xl font-light leading-tight text-center font-roboto mb-10 max-w-5xl">
            Khám phá các dịch vụ của Zatify ngay để nắm bắt được toàn bộ{' '}
            <span className="bg-gradient-to-r from-[#39D4DB] to-[#46b5e2] bg-clip-text text-transparent font-normal">
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
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-10" />
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
                    <img src={logo.src} alt={logo.alt} className="h-10 mx-auto" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="custom-swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative w-full py-16 bg-white">
        {/* Tiêu đề */}
        <h1 className="text-3xl md:text-5xl xl:text-7xl font-normal leading-tight mb-8 font-roboto text-center ">
          Chặng đường phát triển
        </h1>

        {/* Logo và đoạn mô tả */}
        <div className="flex flex-col items-center mb-12 px-6">
          <img
            src="/images/logoZ.jpg"
            alt="Zatify"
            className="h-20 w-20 mb-4"
          />
          <p className="text-center max-w-5xl text-gray-700 font-manrope text-base md:text-lg leading-relaxed">
            Zatify luôn nỗ lực phát triển các giải pháp công nghệ số tiên tiến, từ Zalo Notification Service, Zalo Ads, Zalo Mini App đến các nền tảng web và ứng dụng di động, nhằm mang lại trải nghiệm tối ưu và giá trị bền vững cho khách hàng và đối tác.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Đường chấm chấm ngang */}
          <div className="absolute top-14 left-0 right-0 border-t-2 border-dashed border-gray-300"></div>

          {/* Các mốc thời gian */}
          <div className="grid grid-cols-3 gap-6 relative">
            {/* 2023 */}
            <div className="flex flex-col items-center text-center">
              <div
                className="w-28 h-28 flex items-center justify-center rounded-full bg-white relative z-10"
              >
                <img src="/images/timeline/icon-2023.png" alt="icon" className="w-full h-full" />
              </div>
              <h3 className="mt-4 font-bold font-roboto text-base md:text-2xl leading-relaxed">2023</h3>
              <p className="text-gray-600 font-manrope text-sm md:text-base leading-relaxed max-w-[220px]">
                Thành lập Công ty TNHH 3NS – tiền thân của Zatify
              </p>
            </div>

            {/* 2024 */}
            <div className="flex flex-col items-center text-center">
              <div
                className="w-28 h-28 flex items-center justify-center rounded-full bg-white relative z-10"
              >
                <img src="/images/timeline/icon-2024.png" alt="icon" className="w-full h-full" />
              </div>
              <h3 className="mt-4 font-bold font-roboto text-base md:text-2xl leading-relaxed">2024</h3>
              <p className="text-gray-600 font-manrope text-sm md:text-base leading-relaxed max-w-[220px]">
                Đổi tên thành Công ty TNHH Zatify
              </p>
            </div>

            {/* 2025 */}
            <div className="flex flex-col items-center text-center">
              <div
                className="w-28 h-28 flex items-center justify-center rounded-full bg-white relative z-10"
              >
                <img src="/images/timeline/icon-2025.png" alt="icon" className="w-full h-full" />
              </div>
              <h3 className="mt-4 font-bold font-roboto text-base md:text-2xl leading-relaxed">2025</h3>
              <p className="text-gray-600 font-manrope text-sm md:text-base leading-relaxed max-w-[280px]">
                Đón nhận thêm thành viên ban quản trị – mở rộng quy mô công ty
              </p>
            </div>
          </div>
        </div>
      </section>



{/* Customer of Zatify */}
<section className="relative 0.5xl:mt-10 flex-grow max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 py-16">
  <img
    src="/svg/bg-opacity.svg"
    alt="Background opacity effect"
    className="absolute inset-0 top-6 rounded-bl-3xl rounded-br-3xl pointer-events-none opacity-100 hidden sm:block"
  />

  {/* Tiêu đề */}
  <h2
    ref={h2Ref}
    className="text-4xl sm:text-7xl max-w-fullbg-o leading-tight mb-16 font-roboto text-gray-800 flex"
    style={{ overflow: 'visible', lineHeight: '1.2', minHeight: '1em' }}
  >
    {"Khách hàng của Zatify".split('').map((char, idx) => (
      <span
        key={idx}
        className={`inline-block transition-all duration-500 ease-out
          ${animateH2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
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

  {/* Desktop: Swiper layout */}
  <div className="hidden lg:block">
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true, el: '.custom-pagination-desktop' }}
      loop={true}
      className="my-swiper-desktop"
    >
      {/* Slide 1: 12 logos */}
      <SwiperSlide>
        <div className="grid grid-cols-6 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(index => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`} 
                alt={`Khách hàng ${index}`} 
                className="h-16 w-auto max-w-full object-contain"
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
          {[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map(index => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`} 
                alt={`Khách hàng ${index}`} 
                className="h-16 w-auto max-w-full object-contain"
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
          {[25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36].map(index => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={`/images/logokhachhang/about/client-${index < 10 ? '0' + index : index}.png`} 
                alt={`Khách hàng ${index}`} 
                className="h-16 w-auto max-w-full object-contain"
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
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true, el: '.custom-pagination-mobile' }} // 👈 dùng container ngoài
      loop={true}
      className="my-swiper"
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }}
    >
      {/* Slide 1: 6 logos */}
      <SwiperSlide>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map(index => (
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
          {[7, 8, 9, 10, 11, 12].map(index => (
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
          {[13, 14, 15, 16, 17, 18].map(index => (
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
          {[19, 20, 21, 22, 23, 24].map(index => (
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
          {[25, 26, 27, 28, 29, 30].map(index => (
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
          {[31, 32, 33, 34, 35, 36].map(index => (
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


    </div>
  );
};

export default About;
