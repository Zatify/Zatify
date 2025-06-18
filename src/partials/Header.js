import React, { useState } from 'react';


const menuItems = [
  { label: 'TRANG CHỦ', active: true },
  { label: 'VỀ ZATIFY' },
  { label: 'DỊCH VỤ' },
  { label: 'BẢNG GIÁ' },
  { label: 'TIN TỨC' },
  { label: 'LIÊN HỆ' },
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contactSidebarOpen, setContactSidebarOpen] = useState(false);

  return (
    <>
<header className="bg-white rounded-2xl px-8 py-8 flex items-center justify-between shadow-sm mx-4 absolute top-6 left-0 right-0 z-10">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <button
            className="hidden 0.5xl:inline-flex p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
        {/* Navigation - Ẩn khi nhỏ hơn 1280px */}
        <nav className="hidden 0.5xl:flex space-x-4 text-sm font-semibold text-gray-800">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              aria-current={item.active ? 'page' : undefined}
              className={`group relative px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500
    ${item.active ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}
  `}
              style={{ display: 'flex', alignItems: 'center' }}
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
                stroke={item.active ? 'white' : 'currentColor'}
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

        {/* Nút search + login - Ẩn khi nhỏ hơn 1280px */}
        <div className="hidden 0.5xl:flex items-center space-x-6">
          <button className="px-10 py-2 rounded-full border border-cyan-400 text-cyan-600 font-semibold hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-400">
            Log in
          </button>
        </div>

        {/* Nút menu hamburger */}
        <button
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-auto 0.5xl:hidden"
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
          {menuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center justify-between text-base font-semibold py-2 ${item.active
                ? 'text-cyan-500'
                : 'text-gray-900 hover:text-cyan-500'
                }`}
              style={{
                letterSpacing: '0.02em',
              }}
              onClick={() => setSidebarOpen(false)}
            >
              <span
                className={`${item.active ? 'font-bold' : ''
                  }`}
                style={{
                  fontFamily: 'inherit',
                  fontSize: '16px',
                  textTransform: item.active ? 'uppercase' : 'none',
                }}
              >
                {item.label}
              </span>
              <svg
                className={`w-3 h-3 ml-2 ${item.active ? 'text-cyan-500' : 'text-gray-400'
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
          <button className="px-20 py-4 rounded-full border border-cyan-400 text-cyan-600 font-semibold hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-400">
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
        className={`fixed rounded-3xl h-[calc(100%-32px)] w-[350px] bg-gradient-to-b from-[#1f2120] via-[#1f2120] to-[#233634] text-white z-50 shadow-2xl transition-transform duration-300 ${contactSidebarOpen ? 'translate-x-0' : '-translate-x-[366px]'
          }`}
        style={{ top: 16, left: 16, bottom: 16 }}
      >
        <div className="flex items-center justify-between px-6 pt-6">
          <div className="text-white font-bold text-lg select-none">AIERO</div>
          <button
            className="p-2"
            aria-label="Close"
            onClick={() => setContactSidebarOpen(false)}
          >
            <svg
              className="w-7 h-7 text-white"
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
        <div className="px-6 pt-6 space-y-6">
          <div>
            <div className="uppercase text-xs font-semibold tracking-widest text-gray-400 mb-2">
              LIÊN HỆ
            </div>
            <div className="text-sm font-semibold leading-relaxed">
              1015/32 đường Huỳnh Tấn Phát, phường Phú Thuận<br />
              Quận 7, TP.HCM
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold leading-relaxed">
              0389 603 339<br />
              0919 676 808
            </div>
          </div>
          <div>
            <a href="mailto:Sales@zatify.com.vn" className="underline text-sm font-semibold leading-relaxed">
              Sales@zatify.com.vn
            </a>
          </div>
          <button className="w-full mt-6 py-3 rounded-full border border-cyan-400 text-cyan-600 font-semibold hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-400">
            Liên hệ ngay
          </button>
          <div className="flex justify-center space-x-6 mt-8">
            <a href="#" aria-label="Facebook" className="text-white hover:text-cyan-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" aria-label="X" className="text-white hover:text-cyan-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-cyan-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="text-white hover:text-cyan-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-1.604-.11-8.07-.11-8.07-.11s-6.466 0-8.07.11A3.374 3.374 0 001 6.565v10.87a3.374 3.374 0 001.475 2.98c1.604.11 8.07.11 8.07.11s6.466 0 8.07-.11a3.374 3.374 0 001.475-2.98V6.565a3.374 3.374 0 00-1.475-2.98zM10 15.568v-7.136l6 3.568-6 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;