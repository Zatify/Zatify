import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center py-4 mt-8">
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Zatify. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
