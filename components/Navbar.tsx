import React, { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <ul className="hidden md:flex py-6 justify-center gap-6 items-center text-base text-slate-200 font-semibold underline-offset-4">
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
      <div className="md:hidden fixed top-4 right-4 text-right">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex w-full justify-center rounded-md shadow-lg p-2 text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <AiOutlineMenu
              className="h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute flex flex-col overflow-hidden right-0 mt-2 w-48 origin-top-right divide-y divide-slate-700 rounded-md bg-slate-100 bg-opacity-10 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                <Link href="/">
                  <a className="p-2 text-slate-200 text-md font-medium bg-slate-800 hover:bg-slate-700">
                    HOME
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/#projects">
                  <a className="p-2 text-slate-200 text-md font-medium bg-slate-800 hover:bg-slate-700">
                    PROJECTS
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/repositories">
                  <a className="p-2 text-slate-200 text-md font-medium bg-slate-800 hover:bg-slate-700">
                    REPOSITORIES
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/#contact">
                  <a className="p-2 text-slate-200 text-md font-medium bg-slate-800 hover:bg-slate-700">
                    CONTACT
                  </a>
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
