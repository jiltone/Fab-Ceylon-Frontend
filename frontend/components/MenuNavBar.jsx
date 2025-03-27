import React, { useState } from 'react';
import Link from 'next/link';

export const MenuNavBar = () => {
  const [beveragesOpen, setBeveragesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleBeverages = () => {
    setBeveragesOpen(!beveragesOpen);
  };

  const closeBeverages = () => {
    setBeveragesOpen(false);
  };

  const menuItems = [
    { name: "Salads & Soups", href: "/fabceylon-kurunegala/order/salads-soups" },
    { name: "Appetizers", href: "/fabceylon-kurunegala/order/appetizers" },
    { name: "Pasta & Spaghetti", href: "/fabceylon-kurunegala/order/pasta-spaghetti" },
    { name: "Noodles", href: "/fabceylon-kurunegala/order/noodles" },
    { name: "Kottu", href: "/fabceylon-kurunegala/order/kottu" },
    { name: "Fried Rice", href: "/fabceylon-kurunegala/order/fried-rice" },
    { name: "Biriyani", href: "/fabceylon-kurunegala/order/biriyani" },
    { name: "Signature Meals", href: "/fabceylon-kurunegala/order/signature-meals" },
    { name: "Burgers", href: "/fabceylon-kurunegala/order/burgers" },
    { name: "Sandwiches & Submarines", href: "/fabceylon-kurunegala/order/sandwiches-submarines" },
    { name: "Desserts", href: "/fabceylon-kurunegala/order/desserts" },
  ];

  return (
    <div className="w-full shadow-md sticky top-0 z-40">
      {/* Desktop Menu */}
      <div className="hidden lg:block w-full ">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex items-center justify-center h-16  ">
            <div className="flex items-center space-x-1 md:space-x-2 lg:space-x-4 overflow-x-auto scrollbar-hide">
              {menuItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href}
                  className="px-2 py-1 text-center min-w-max"
                >
                  <span className="menu-item-desktop">
                    {item.name}
                  </span>
                </Link>
              ))}

              {/* Beverages Dropdown */}
              <div className="relative">
                <div 
                  className="menu-item-desktop px-2 py-1 text-center cursor-pointer min-w-max"
                  onClick={toggleBeverages}
                  onMouseEnter={() => setBeveragesOpen(true)}
                >
                  Beverages
                </div>
                {beveragesOpen && (
                  <div
                    className="absolute right-0 top-full min-w-[180px]  shadow-lg p-4 rounded-lg z-50 border border-gray-200"
                    onMouseLeave={closeBeverages}
                  >
                    <div className="flex flex-col gap-3">
                      {[
                        { name: "Iced Tea & Coffee", href: "/fabceylon-kurunegala/order/iced-coffee-iced-tea" },
                        { name: "Hot Beverages", href: "/fabceylon-kurunegala/order/hot-beverages" },
                        { name: "Bubble Tea", href: "/fabceylon-kurunegala/order/bubble-tea" },
                        { name: "Mojito", href: "/fabceylon-kurunegala/order/mojito" },
                        { name: "Milk Shakes", href: "/fabceylon-kurunegala/order/milk-shakes" }
                      ].map((drink, i) => (
                        <Link 
                          key={i}
                          href={drink.href}
                          className="hover:text-[#d4430f]"
                        >
                          <span className="text-[#eb650f] text-sm font-bold hover:text-[#d4430f] cursor-pointer transition-colors">
                            {drink.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden ">
        <div className="flex justify-between items-center h-16 px-4">
          <button 
            className="text-[#eb650f] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="pb-4 px-4  shadow-inner">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href}
                  className="py-3 px-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-[#eb650f] text-base font-semibold hover:text-[#d4430f] transition-colors">
                    {item.name}
                  </span>
                </Link>
              ))}
              
              {/* Beverages in Mobile */}
              <div className="py-3 px-2 border-b border-gray-100">
                <div 
                  className="text-[#eb650f] text-base font-semibold cursor-pointer flex justify-between items-center"
                  onClick={toggleBeverages}
                >
                  Beverages
                  <svg 
                    className={`w-5 h-5 transform transition-transform ${beveragesOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {beveragesOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-3">
                    {[
                      { name: "Iced Tea & Coffee", href: "/fabceylon-kurunegala/order/iced-coffee-iced-tea" },
                      { name: "Hot Beverages", href: "/fabceylon-kurunegala/order/hot-beverages" },
                      { name: "Bubble Tea", href: "/fabceylon-kurunegala/order/bubble-tea" },
                      { name: "Mojito", href: "/fabceylon-kurunegala/order/mojito" },
                      { name: "Milk Shakes", href: "/fabceylon-kurunegala/order/milk-shakes" }
                    ].map((drink, i) => (
                      <Link 
                        key={i}
                        href={drink.href}
                        className="py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="text-[#eb650f] text-sm font-bold hover:text-[#d4430f] cursor-pointer transition-colors">
                          {drink.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .menu-item-desktop {
          color: #eb650f;
          font-size: 1rem;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          display: inline-block;
          position: relative;
          padding: 0.5rem 0;
        }

        .menu-item-desktop:hover {
          color: #d4430f;
          transform: scale(1.05);
        }

        .menu-item-desktop::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #d4430f;
          transition: width 0.3s ease;
        }

        .menu-item-desktop:hover::after {
          width: 100%;
        }
      `}</style>
    </div>
  );
};