import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen relative z-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
