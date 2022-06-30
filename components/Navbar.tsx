import React, { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <ul className="hidden md:flex py-6 justify-center gap-6 items-center text-base text-slate-200 font-semibold underline-offset-4">
        <li>
          <Link href="/">
            <div className="cursor-pointer group">
              <span className="text-slate-400 group-hover:text-slate-200 transition duration-500">
                HOME
              </span>
              <div className="border-t w-2/3 origin-left scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/#projects">
            <div className="cursor-pointer group">
              <span className="text-slate-400 group-hover:text-slate-200 transition duration-500">
                PROJECTS
              </span>
              <div className="border-t w-2/3 origin-left scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/repositories">
            <div className="cursor-pointer group">
              <span className="text-slate-400 group-hover:text-slate-200 transition duration-500">
                REPOSITORIES
              </span>
              <div className="border-t w-2/3 origin-left scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <div className="cursor-pointer group">
              <span className="text-slate-400 group-hover:text-slate-200 transition duration-500">
                CONTACT
              </span>
              <div className="border-t w-2/3 origin-left scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>
          </Link>
        </li>
      </ul>
      <div className="md:hidden fixed top-4 right-4 text-right">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex w-full justify-center rounded-md shadow-lg p-2 text-sm font-medium text-white border-t border-slate-700 bg-slate-800 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition">
            <AiOutlineMenu
              className="h-5 w-5 text-violet-200"
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
            <Menu.Items className="absolute flex flex-col overflow-hidden right-0 mt-2 w-48 origin-top-right divide-y divide-slate-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                <Link href="/">
                  <a className="p-2 text-slate-200 text-md font-medium bg-slate-800 hover:bg-slate-700 transition">
                    HOME
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/#projects">
                  <a className="p-2 text-slate-200 text-md font-medium bg-slate-800 hover:bg-slate-700 transition">
                    PROJECTS
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/repositories">
                  <a className="p-2 text-slate-200 text-md font-medium bg-slate-800 hover:bg-slate-700 transition">
                    REPOSITORIES
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/#contact">
                  <a className="p-2 text-slate-200 text-md font-medium bg-slate-800 hover:bg-slate-700 transition">
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
