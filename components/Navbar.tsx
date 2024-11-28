import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MobileNav from './MobileNav';


const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
    <Link href="/" className="flex items-center gap-1">
      <Image
        src="/icons/logo_bl.png"
        width={42}
        height={42}
        alt="Judiciary of Tanzania Logo"
        className="max-sm:size-10"
      />
      <p className="text-[26px] font-extrabold text-white max-sm:hidden">
        Video-Talk
      </p>
    </Link>
    <div className="flex-between gap-5">
       { /* user management */}


       <MobileNav />
      </div>
  </nav>
  );
};

export default Navbar
