import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          MyWebsite
        </div>
        
        {/* Navigation Section */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-gray-300 transition duration-300">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300 transition duration-300">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300 transition duration-300">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300 transition duration-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
