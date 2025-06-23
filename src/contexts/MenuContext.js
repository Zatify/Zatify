import React, { createContext, useContext, useState, useEffect } from 'react';

const menuItems = [
  { label: 'TRANG CHỦ', path: '/' },
  { label: 'VỀ ZATIFY', path: '/about' },
  { label: 'DỊCH VỤ', path: '/service' },
  { label: 'BẢNG GIÁ', path: '/bang-gia' },
  { label: 'TIN TỨC', path: '/tin-tuc' },
  { label: 'LIÊN HỆ', path: '/lien-he' },
];

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  // Xác định index dựa trên pathname hiện tại
  const getIndexFromPath = (pathname) => {
    const idx = menuItems.findIndex(item => item.path === pathname);
    return idx === -1 ? 0 : idx;
  };

  const [activeIndex, setActiveIndex] = useState(() => getIndexFromPath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => {
      setActiveIndex(getIndexFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <MenuContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
