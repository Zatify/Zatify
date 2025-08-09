import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMenu } from '../contexts/MenuContext';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setActiveIndex } = useMenu();
  const isContactPage = location.pathname === '/contact';

  return (
    <footer className="bg-[#18191b] text-white rounded-3xl m-4 h-auto overflow-hidden relative">
      {/* Background SVG - đặt absolute cho toàn bộ footer */}
      {!isContactPage && (
        <img src="/svg/bg-opacity.svg" alt="bg" className="absolute top-[60%] inset-0 w-full h-full object-cover pointer-events-none select-none" style={{ zIndex: 0 }} />
      )}
      {/* Top Section */}
      {!isContactPage && (
        <div className="flex flex-col items-center md:flex-row justify-between gap-20 2xl:gap-28 px-4 py-14 2xl:px-0 max-w-7xl h-auto 0.5xl:h-[100vh] 2xl:h-[110vh] mx-auto relative z-10">
          {/* Left: Contact Info */}
          <div className="min-w-[320px] max-w-[650px] 2xl:max-w-[700px]">
            <h2 className="text-4xl md:text-6xl 2xl:text-7xl leading-tight mb-4 font-roboto">
              Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của bạn!
            </h2>
            <div className="grid grid-cols-2 gap-y-6 gap-x-10 text-sm max-w-lg mt-16">
              <div>
                <h3 className="font-manrope font-semibold text-[17px] 2xl:text-[21px] mb-2">Hotline</h3>
                <div className="text-[15px] 2xl:text-[18px] leading-normal mt-6 font-manrope mb-4">
                  <p>0389 603 339</p>
                  <p>0919 676 808</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold font-manrope mb-2 text-[17px] 2xl:text-[21px]">Địa chỉ</h3>
                <div className="text-[15px] 2xl:text-[18px] leading-normal mt-6 font-manrope mb-4">
                  <p>1015/32 đường Huỳnh Tấn Phát, phường Phú Thuận Quận 7, TP.HCM</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold font-manrope mb-2 text-[17px] 2xl:text-[21px]">Email</h3>
                <div className="text-[15px] 2xl:text-[18px] mt-6 font-manrope mb-4">
                  <a href="mailto:aiero@mail.co" className="underline hover:text-cyan-400 transition">Sales@zatify.com.vn</a>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className=" flex h-[600px] 2xl:h-[700px] justify-center 2xl:min-w-[600px]">
            <div className="bg-white rounded-2xl p-8 md:p-10 w-full max-w-lg 2xl:max-w-xl shadow-lg">
              <h3 className="text-3xl md:text-4xl 2xl:text-5xl  leading-tight mb-4 font-roboto text-gray-900">Get in Touch</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Họ tên"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 2xl:px-6 lg:py-4 2xl:text-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 2xl:px-6 lg:py-4 2xl:text-lg"
                />
                <input
                  type="text"
                  placeholder="Tiêu đề"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 2xl:px-6 lg:py-4 2xl:text-lg"
                />
                <textarea
                  placeholder="Nội dung"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 2xl:px-6 lg:py-4 2xl:text-lg"
                />
                <div className="gradient-border rounded-md inline-block p-[1px]">
                  <button className="justify-center text-sm text-black bg-white rounded-[0.65rem] px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition flex items-center gap-1 w-[160px] h-[50px]">
                    Gửi mail ngay
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
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Middle Section: Slogan */}
      <div className="max-w-7xl border-b border-gray-300 h-[20vh] md:h-[30vh] mx-4 0.5xl:mx-auto flex flex-col 0.5xl:flex-row items-start 0.5xl:items-center justify-around 0.5xl:justify-between relative z-10">
        <div className="text-4xl pb-2 md:text-7xl mb-2 bg-gradient-to-r from-cyan-300  to-blue-500 text-transparent bg-clip-text select-none font-roboto">
          Zatify - ZNS thần tốc nâng tầm doanh nghiệp!
        </div>
      </div>
      {/* Bottom Section */}
      <div className="rounded-t-3xl h-auto 0.5xl:h-[50vh] overflow-hidden max-w-7xl mx-auto px-10 py-10 flex flex-col md:flex-row md:justify-between gap-10 relative z-10 items-start">
        {/* Left: Logo, social, since, copyright */}
        <div className="flex-1 min-w-[260px] relative z-10 flex flex-col items-start justify-start">
          <div className="font-bold text-2xl tracking-wide mb-2 mt-2">ZATIFY</div>
          {/* Social icons nếu cần */}
          <div
            className="text-[15vw] sm:text-[15vw] md:text-[8vw] lg:text-[9vw] 0.5xl:text-[7vw] font-bold text-transparent bg-clip-text mb-6 select-none leading-none whitespace-nowrap"
            style={{ WebkitTextStroke: '2px #5f5fff', color: 'transparent' }}
          >
            since 2023
          </div>
          <p className="text-xs text-gray-300 mb-4"><span className="text-cyan-200">©<a href="#" className="underline">Zatify</a> 2023.</span> All rights reserved.</p>
        </div>
        {/* Right: Menus and links */}
        <div className="flex-1 flex flex-col pl-10 items-start justify-start sm:flex-row sm:items-start sm:justify-end gap-20 text-sm relative z-10 mt-8 md:mt-0 self-start">
          <div>
            <h4 className="font-semibold text-base md:text-lg 2xl:text-xl mb-3">Công ty</h4>
            <ul className="space-y-2 text-base md:text-lg 2xl:text-xl">
              <li>
                <button
                  className="hover:underline bg-transparent border-none p-0 m-0 text-left cursor-pointer"
                  onClick={() => {
                    setActiveIndex(1);
                    navigate('/about');
                  }}
                >
                  Về Zatify
                </button>
              </li>
              <li>
                <button
                  className="hover:underline bg-transparent border-none p-0 m-0 text-left cursor-pointer"
                  onClick={() => {
                    setActiveIndex(1);
                    navigate('/project-grid');
                  }}
                >
                  Dự án
                </button>
              </li>
              <li>
                <button
                  className="hover:underline bg-transparent border-none p-0 m-0 text-left cursor-pointer"
                  onClick={() => {
                    setActiveIndex(4);
                    navigate('/blog-grid');
                  }}
                >
                  Tin tức
                </button>
              </li>
              <li>
                <button
                  className="hover:underline bg-transparent border-none p-0 m-0 text-left cursor-pointer"
                  onClick={() => {
                    setActiveIndex(4);
                    navigate('/faq');
                  }}
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  className="hover:underline bg-transparent border-none p-0 m-0 text-left cursor-pointer"
                  onClick={() => {
                    setActiveIndex(5);
                    navigate('/contact');
                  }}
                >
                  Liên hệ
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-base md:text-lg 2xl:text-xl mb-3">Dịch vụ</h4>
            <ul className="space-y-2 text-base md:text-lg 2xl:text-xl">
              <li>
                <button
                  className="hover:underline bg-transparent border-none p-0 m-0 text-left cursor-pointer"
                  onClick={() => {
                    setActiveIndex(2);
                    navigate('/zalo-notification-service');
                  }}
                >
                  ZNS
                </button>
              </li>
              <li>
                <button
                  className="hover:underline bg-transparent border-none p-0 m-0 text-left cursor-pointer"
                  onClick={() => {
                    setActiveIndex(2);
                    navigate('/zalo-ads');
                  }}
                >
                  Zalo Ads
                </button>
              </li>
              <li>
                <button
                  className="hover:underline bg-transparent border-none p-0 m-0 text-left cursor-pointer"
                  onClick={() => {
                    setActiveIndex(2);
                    navigate('/zalo-mini-app');
                  }}
                >
                  Mini app
                </button>
              </li>
              <li>
                <button
                  className="hover:underline bg-transparent border-none p-0 m-0 text-left cursor-pointer"
                  onClick={() => {
                    setActiveIndex(3);
                    navigate('/pricing');
                  }}
                >
                  Bảng giá
                </button>
              </li>
              <li><a href="#" className="hover:underline">Cẩm nang</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
