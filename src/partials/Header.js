import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenu } from '../contexts/MenuContext';

const menuItems = [
  { label: 'TRANG CHỦ', path: '/' },
  {
    label: 'VỀ ZATIFY',
    dropdown: [
      { label: 'About', path: '/about' },
      { label: 'Project Grid', path: '/project-grid' }
    ]
  },
  {
    label: 'DỊCH VỤ',
    dropdown: [
      { label: 'Tổng quan', path: '/service' },
      { label: 'Service Single', path: '/service-single' }
    ]
  },
  { label: 'BẢNG GIÁ', path: '/pricing' },
  { label: 'TIN TỨC', path: '/blog-grid' },
  { label: 'LIÊN HỆ', path: '/contact' },
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contactSidebarOpen, setContactSidebarOpen] = useState(false);
  const [openDropdownIdx, setOpenDropdownIdx] = useState(null); // Đổi từ dropdownOpen sang openDropdownIdx
  const dropdownTimeoutRef = React.useRef(null);
  const { activeIndex, setActiveIndex } = useMenu();
  const navigate = useNavigate();

  // Hàm mở dropdown cho từng item
  const handleDropdownEnter = (idx) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdownIdx(idx);
  };

  // Hàm bắt đầu timeout đóng dropdown
  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdownIdx(null);
    }, 800);
  };

  React.useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <header className="bg-white rounded-2xl px-8 py-8 flex items-center justify-between shadow-sm mx-4 absolute top-6 left-0 right-0 z-10">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <button
            className="hidden 0.5xl:inline-flex p-2 rounded-md hover:bg-gray-100 "
            onClick={() => setContactSidebarOpen(true)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
          <div className="font-extrabold text-xl text-gray-900 select-none">
            ZATIFY
          </div>
        </div>

        {/* Navigation - Ẩn khi nhỏ hơn 1280px */}
        <nav className="hidden 0.5xl:flex space-x-4 text-sm font-semibold text-gray-800">
          {menuItems.map((item, idx) => (
            item.dropdown ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleDropdownEnter(idx)}
                onMouseLeave={handleDropdownLeave}
                tabIndex={-1}
              >
                <span
                  className={`group px-3 py-2 rounded-md flex items-center cursor-pointer select-none
                    ${activeIndex === idx ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}
                  `}
                  style={{ height: 40, display: 'flex', alignItems: 'center' }}
                  tabIndex={-1}
                  // Không cho focus/click
                  onClick={e => e.preventDefault()}
                  onMouseDown={e => e.preventDefault()}
                >
                  <span
                    className="relative inline-block overflow-hidden align-middle"
                    style={{ height: 24, width: 'max-content', minWidth: 80, position: 'relative' }}
                  >
                    <span
                      className="block absolute left-0 top-0 w-full transition-transform duration-300 group-hover:-translate-y-6"
                      style={{ lineHeight: '24px', height: 24 }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="block absolute left-0 top-0 w-full transition-transform duration-300 translate-y-6 group-hover:translate-y-0"
                      aria-hidden="true"
                      style={{ lineHeight: '24px', height: 24 }}
                    >
                      {item.label}
                    </span>
                  </span>
                  <svg
                    className="inline-block w-3 h-3 ml-1 -mt-0.5"
                    fill="none"
                    stroke={activeIndex === idx ? 'white' : 'currentColor'}
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
                {/* Dropdown menu */}
                {openDropdownIdx === idx && (
                  <div
                    className="absolute left-0 top-full mt-2 w-48 bg-gray-900 rounded-lg z-20 py-2"
                    onMouseEnter={() => handleDropdownEnter(idx)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.dropdown.map((sub, subIdx) => (
                      <a
                        key={sub.label}
                        href="#"
                        className="block px-4 py-2 text-white hover:text-cyan-400"
                        onClick={e => {
                          e.preventDefault();
                          setActiveIndex(idx);
                          setOpenDropdownIdx(null);
                          navigate(sub.path);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href="#"
                aria-current={activeIndex === idx ? 'page' : undefined}
                className={`group relative px-3 py-2 rounded-md 
                ${activeIndex === idx ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}
              `}
                style={{ display: 'flex', alignItems: 'center' }}
                onClick={e => {
                  e.preventDefault();
                  setActiveIndex(idx);
                  navigate(item.path);
                }}
              >
                <span
                  className="relative inline-block overflow-hidden align-middle"
                  style={{ height: 24, width: 'max-content', minWidth: 80, position: 'relative' }}
                >
                  <span
                    className="block absolute left-0 top-0 w-full transition-transform duration-300 group-hover:-translate-y-6"
                    style={{ lineHeight: '24px', height: 24 }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="block absolute left-0 top-0 w-full transition-transform duration-300 translate-y-6 group-hover:translate-y-0"
                    aria-hidden="true"
                    style={{ lineHeight: '24px', height: 24 }}
                  >
                    {item.label}
                  </span>
                </span>
                <svg
                  className="inline-block w-3 h-3 ml-1 -mt-0.5"
                  fill="none"
                  stroke={activeIndex === idx ? 'white' : 'currentColor'}
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
            )
          ))}
        </nav>

        {/* Nút search + login - Ẩn khi nhỏ hơn 1280px */}
        <div className="hidden 0.5xl:flex items-center space-x-6">
          <button className="px-10 py-2 rounded-full border border-cyan-400 text-cyan-600 font-semibold hover:bg-cyan-50 ">
            Log in
          </button>
        </div>

        {/* Nút menu hamburger */}
        <button
          className="p-2 rounded-md hover:bg-gray-100  ml-auto 0.5xl:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <svg
            className="w-7 h-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </header>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] bg-white z-50 shadow-2xl transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}
      >
        <div className="flex items-center justify-end px-8 pt-8">
          <button className="mr-4" aria-label="Search">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button
            className="p-2"
            aria-label="Close"
            onClick={() => setSidebarOpen(false)}
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col px-12 pt-8 space-y-2">
          {menuItems.map((item, idx) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center justify-between text-base font-semibold py-2 ${activeIndex === idx
                ? 'text-cyan-500'
                : 'text-gray-900 hover:text-cyan-500'
                }`}
              style={{
                letterSpacing: '0.02em',
              }}
              onClick={e => {
                e.preventDefault();
                setActiveIndex(idx);
                setSidebarOpen(false);
                navigate(item.path);
              }}
            >
              <span
                className={`${activeIndex === idx ? 'font-bold' : ''
                  }`}
                style={{
                  fontFamily: 'inherit',
                  fontSize: '16px',
                  textTransform: activeIndex === idx ? 'uppercase' : 'none',
                }}
              >
                {item.label}
              </span>
              <svg
                className={`w-3 h-3 ml-2 ${activeIndex === idx ? 'text-cyan-500' : 'text-gray-400'
                  }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
          ))}
        </nav>
        <div className="px-12 pt-8">
          <button className="px-20 py-4 rounded-full border border-cyan-400 text-cyan-600 font-semibold hover:bg-cyan-50 ">
            Log in
          </button>
        </div>
      </div>

      {/* Contact Sidebar Overlay */}
      {contactSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setContactSidebarOpen(false)}
        ></div>
      )}

      {/* Contact Sidebar */}
      <div
        className={`fixed rounded-3xl h-[calc(100%-32px)] w-[390px] bg-gradient-to-b from-[#1f2120] via-[#1f2120] to-[#233634] text-white z-50 shadow-2xl transition-transform duration-300 ${contactSidebarOpen ? 'translate-x-0' : '-translate-x-[480px]'
          }`}
        style={{ top: 16, left: 16, bottom: 16 }}
      >
        {/* Thanh Close dọc */}
        <button
          className="flex flex-col items-center justify-center h-full w-16 rounded-3xl shadow-lg  group transition-all duration-200 absolute -right-[70px] top-0"
          aria-label="Close"
          onClick={() => setContactSidebarOpen(false)}
          style={{
            border: 'none',
            minWidth: 0,
            padding: 0,
            backgroundImage: 'url("svg/thanhdoc/sidebarcontact.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: 'rotate(180deg)',
          }}
        >
          {/* SVG chữ X */}
          <svg
            className="w-5 h-5 text-white mb-1 group-hover:text-cyan-400 transition"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.7))' }}
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          <span
            className="text-xs text-white group-hover:text-cyan-400 tracking-widest font-semibold"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.1em',
              marginTop: '2px',
              textShadow: '0 1px 4px rgba(0,0,0,0.7)',
            }}
          >
            Close
          </span>
        </button>
        <div className="flex flex-col h-full justify-between px-8 pt-8 pb-6">
          {/* Logo và thông tin liên hệ */}

          <div className="text-white text-3xl font-black tracking-widest select-none mt-10 ml-10 font-roboto">
            ZATIFY
          </div>
          <div className='flex flex-col h-[40%] w-[90%] pl-10 mb-20'>
            <div className="uppercase text-xs font-semibold tracking-widest text-gray-400 mb-2 font-manrope">
              LIÊN HỆ
            </div>
            <div className="text-md font-semibold leading-relaxed mb-4 font-manrope">
              1015/32 đường Huỳnh Tấn Phát, phường Phú Thuận
              Quận 7, TP.HCM
            </div>
            <div className="text-md font-semibold leading-relaxed mb-4 font-manrope">
              0389 603 339<br />
              0919 676 808
            </div>
            <a href="mailto:Sales@zatify.com.vn" className="underline text-md font-semibold leading-relaxed font-manrope">
              Sales@zatify.com.vn
            </a>
            <div className="flex justify-center mt-24 font-manrope">
              <button className="w-48 py-3 rounded-full text-md border border-cyan-400 text-cyan-600 font-semibold hover:bg-cyan-50 ">
                Liên hệ ngay
              </button>
            </div>
          </div>
          {/* Sidepanel */}
          <div className="flex justify-center space-x-6 w-full h-[20%]">
            <img src="/svg/sidepanel-bg.png" alt="sidepanel" className="w-auto h-auto relative z-50 top-6 opacity-80" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;