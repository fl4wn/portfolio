import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 select-none">
      <ul className="py-8 flex justify-center gap-6 items-center text-base text-slate-200 font-semibold underline-offset-4">
        <li className="hover:underline hover:-translate-y-1 transition-transform duration-700 ease-in-out will-change-transform">
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li className="hover:underline hover:-translate-y-1 transition-transform duration-700 ease-in-out will-change-transform">
          <Link href="/#projects">
            <a>PROJECTS</a>
          </Link>
        </li>
        <li className="hover:underline hover:-translate-y-1 transition-transform duration-700 ease-in-out will-change-transform">
          <Link href="/repositories">
            <a>REPOSITORIES</a>
          </Link>
        </li>
        <li className="hover:underline hover:-translate-y-1 transition-transform duration-700 ease-in-out will-change-transform">
          <Link href="/#contact">
            <a>CONTACT</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
