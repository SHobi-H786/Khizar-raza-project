// components/Header.js
"use client"
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-100">
      <div className="bg-[#272343] text-white text-sm py-2 flex justify-center items-center px-4">
        <span>Free Shipping On All Orders Over $50</span>
        <div className="flex items-center space-x-4">
          <Link href="/#">Eng</Link>
          <Link href="/faqs">Faqs</Link>
          <Link href="/#">Need Help</Link>
        </div>
      </div>
      <div className="flex justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-2">
          <Image src="/Logo Icon.png" alt="Comforty Logo" width={40} height={40} />
          <span className="text-teal-500 text-2xl font-bold"></span>
        </div>
        <div><nav className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/#">Shop</Link>
          <Link href="/products">Product</Link>
          <Link href="/cart-page">Pages</Link>
          <Link href="/about">About</Link>
        </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative text-[#00944a]">
            <Link href="/cart">cart
            </Link>
            <div>
          
        </div>
            <span className="absolute top-0 right-0 bg-teal-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">2</span>
          </div>
          <Link href="/contacts">Contact: (808) 555-0111</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;