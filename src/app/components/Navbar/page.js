import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#6220fb] shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src="/logo.svg"
          alt="QR Menu Logo"
          className="h-8 w-8"
        />
        <Link
          href="/"
          className="text-xl font-semibold text-white hidden md:block"
        >
          QR Menu
        </Link>
      </div>

      <div className="flex items-center space-x-8">
        <Link
          href="/help"
          className="text-white text-xs md:text-lg hover:text-white transition"
        >
          Help
        </Link>
        <Link
          href="/about"
          className="text-white text-xs md:text-lg font-semibold transition"
        >
          Powered by Raybit Technologies
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
