import { MyContext } from "@/context";
import Link from "next/link";
import React, { useContext } from "react";

function Footer() {
  const { SetCurrentActivePage, setisUserLoggedIn } = useContext(MyContext);
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900 w-full ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
          <img
            src="/assets/logo.jpg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            PortfolioMaker
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>

          <li>
            <Link href="/Contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 3{" "}
        <Link href="/" className="hover:underline">
          Portfolio™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
