import React, { useEffect, useState } from 'react';

const menuItems = [
    { label: 'TRANG CHỦ', active: true },
    { label: 'VỀ ZATIFY' },
    { label: 'DỊCH VỤ' },
    { label: 'BẢNG GIÁ' },
    { label: 'TIN TỨC' },
    { label: 'LIÊN HỆ' },
];

const StickyHeader = () => {
    const [show, setShow] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShow(window.scrollY > 120); // chỉnh lại nếu cần
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <header
                className={`bg-white rounded-b-2xl px-8 py-8 flex items-center justify-between shadow-sm mx-4 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}
            >
                {/* Logo */}
                <div className="flex items-center space-x-6">
                    <button className="hidden 1.5xl:inline-flex p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
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
                        AIE2RO
                    </div>
                </div>

                {/* Navigation */}
                <nav className="hidden 1.5xl:flex space-x-10 text-sm font-semibold text-gray-800">
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

                {/* Nút search + login */}
                <div className="hidden 1.5xl:flex items-center space-x-6">
                    <button className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <svg
                            className="w-5 h-5 text-gray-700"
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
                    <button className="px-10 py-2 rounded-full border border-cyan-400 text-cyan-600 font-semibold hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                        Log in
                    </button>
                </div>

                {/* Nút menu hamburger */}
                <button
                    className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-auto 1.5xl:hidden"
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
                className={`fixed top-0 right-0 h-full w-[350px] bg-white z-50 shadow transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
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
        </>
    );
};

export default StickyHeader;