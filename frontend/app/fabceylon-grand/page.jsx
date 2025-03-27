'use client';
import React from 'react';
import MenuBack_image from '../../components/Assets/MenuBack_image.jpg';
import Bugger from '../../components/Assets/Bugger.png';
import Image from 'next/image';
import star_icon from '../../components/Assets/star_icon.png';
import delete_icon from '../../components/Assets/delete.png';
import { MenuNavBar } from '../../components/MenuNavBar';
import { GrandMainMenuNavBar } from '../../components/Fab-Grand-MainMenu';

export default function KandyMenu() {
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleAddToCart = (food) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find((item) => item.id === food.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...food, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setCartItems(cart);
  };

  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleDeleteFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image
          src={MenuBack_image}
          fill
          priority
          quality={100}
          alt="Restaurant Background"
          className="object-cover opacity-80"
        />
        
        <div className="relative z-10">
           <GrandMainMenuNavBar />
          <MenuNavBar />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white font-poppins">
            CHOOSE <br className="md:hidden" />
            <span className="text-white">&</span> <br className="md:hidden" />
            <span className="text-white">ENJOY...</span>
          </h1>
        </div>
      </div>

      {/* Menu Section */}
      <div className="w-full bg-black py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#eb650f] font-poppins">
              Burgers
            </h1>
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-medium font-poppins mt-3 sm:mt-4">
              It's a good time for the great taste of burgers
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Menu Items */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                <div
                  key={index}
                  className="w-full bg-[#110c0c] rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-[#eb650f]/20 transition-all duration-300 p-4 sm:p-5"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white overflow-hidden mb-4">
                      <Image
                        src={Bugger}
                        alt="Chicken Burger"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center mb-3">
                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-1">
                        Chicken Burger
                      </h3>
                      <div className="flex justify-center items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Image
                            key={star}
                            src={star_icon}
                            alt="Star"
                            width={16}
                            height={16}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-[#eb650f] text-lg sm:text-xl font-bold mb-4">
                      LKR 750
                    </div>
                    <button
                      onClick={() =>
                        handleAddToCart({
                          id: index,
                          name: 'Chicken Burger',
                          price: 750,
                        })
                      }
                      className="w-full py-2 bg-[#eb650f] rounded-lg flex justify-center items-center hover:bg-[#d45500] transition-colors"
                    >
                      <span className="text-black font-bold">ADD TO CART</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Shopping Cart - Sticky on desktop */}
            <div className="lg:sticky lg:top-4 lg:h-fit w-full lg:w-80 xl:w-96">
              <div className="bg-[#110d0d] rounded-xl border-2 border-white/10 p-4 sm:p-5">
                <h2 className="text-[#eb650f] text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
                  Your Cart
                </h2>
                
                <div className="max-h-64 sm:max-h-80 overflow-y-auto mb-4 sm:mb-5">
                  {cartItems.length > 0 ? (
                    <div className="space-y-3">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center py-2 border-b border-gray-700"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium truncate">
                              {item.name}
                            </p>
                            <p className="text-[#eb650f] text-sm">
                              Rs. {item.price} each
                            </p>
                          </div>
                          <div className="flex items-center space-x-2 ml-3">
                            <button
                              onClick={() => handleDecreaseQuantity(item.id)}
                              className="w-6 h-6 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="text-white w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleIncreaseQuantity(item.id)}
                              className="w-6 h-6 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                            <button
                              onClick={() => handleDeleteFromCart(item.id)}
                              className="text-red-500 hover:text-red-400 ml-2"
                              aria-label="Remove item"
                            >
                              <Image
                                src={delete_icon}
                                alt="Delete"
                                width={18}
                                height={18}
                              />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-white/70 text-center py-6">
                      Your cart is empty
                    </div>
                  )}
                </div>

                {cartItems.length > 0 && (
                  <>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                      <span className="text-white font-bold">Total:</span>
                      <span className="text-white font-bold">
                        Rs. {cartItems.reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )}
                      </span>
                    </div>
                    <button className="w-full mt-4 py-3 bg-[#eb650f] rounded-lg font-bold hover:bg-[#d45500] transition-colors">
                      PROCEED TO CHECKOUT
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}