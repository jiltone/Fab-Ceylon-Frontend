import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import cart_icon from "../components/Assets/cart_icon.png";
import user_icon from "../components/Assets/user_icon.png";
import Fabceylon_logo from '../components/Assets/fab_grand.png';

export const GrandMainMenuNavBar = () => {
  const [activeItem, setActiveItem] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'HOME', link: '/' },
    { label: 'MENU', link: '/fabceylon-grand/menu/salads-soups' },
    { label: 'PLACE ORDER', link: '/fabceylon-grand/order/salads-soups' },
    { label: 'RESERVATIONS', link: '/fabceylon-grand/reservations' },
    { label: 'REGISTER', link: '/signup' },
  ];

  return (
    <nav className="w-full  shadow-md sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className="flex flex-row items-center justify-between  h-20 md:h-24 lg:h-28">
          {/* Logo Section */}
          <div className="flex items-center ">
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 relative">
              <Image
                src={Fabceylon_logo}
                alt="Fab Ceylon Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-[#eb650f] text-2xl md:text-3xl lg:text-4xl font-extrabold font-serif ml-2 md:ml-4">
              FAB CEYLON Grand
            </div>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onClick={() => setActiveItem(item.label)}
              >
                <Link
                  href={item.link}
                  className={`text-lg xl:text-xl font-medium font-['Poppins'] ${
                    activeItem === item.label ? 'text-[#caa767]' : 'text-[#caa767] hover:text-[#eb650f]'
                  } transition-colors duration-300`}
                >
                  {item.label}
                </Link>
                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#caa767] transition-all duration-300 ${
                    activeItem === item.label ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </div>
            ))}
          </div>

          {/* User Icon - Desktop */}
          <div className="hidden lg:flex items-center ml-6">
            <div className="w-10 h-10 relative cursor-pointer">
              <Image
                src={user_icon}
                alt="User Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-[#caa767] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
          <div className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={`text-[#caa767] text-lg font-medium font-['Poppins'] py-2 px-2 ${
                  activeItem === item.label ? 'bg-[#eb650f]/10' : 'hover:bg-[#eb650f]/10'
                } rounded-md transition-colors`}
                onClick={() => {
                  setActiveItem(item.label);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center pt-2">
              <div className="w-8 h-8 relative mr-3">
                <Image
                  src={user_icon}
                  alt="User Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[#caa767] font-medium">My Account</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};