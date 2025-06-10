import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto py-4 rounded-lg bg-blue-100 text-xs text-gray-500">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          Copyright © {currentYear} Ksuite,Goverment of Kerala • I Design & Developed by Information Kerala Mission
        </div>
        
        <div className="flex space-x-3 mt-2 md:mt-0 ">
          <a href="#" className="hover:text-gray-700 transition-colors">Terms and Conditions</a>
          <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;