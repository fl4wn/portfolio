import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center gap-8 items-center text-base font-semibold py-12">
        <li>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/repositories">
            <a>REPOSITORIES</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>CONTACT ME</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
