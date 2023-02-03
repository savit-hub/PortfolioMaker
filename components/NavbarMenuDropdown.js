import { MyContext } from "@/context";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Layout from "./Layout";

const NavbarMenuDropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const { setisUserLoggedIn, auth, SetCurrentActivePage } =
    useContext(MyContext);

  const signOuthAndler = async (event) => {
    event.preventDefault();
    const CurrentUSer = auth.authUser;
    console.log("currentuser", CurrentUSer);
    const result = await auth.signOut();
    setisUserLoggedIn(false);
    SetCurrentActivePage("login");
  };
  React.useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="menu-button"
          onClick={() => setOpen((prev) => !prev)}
        >
          your Profile email
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <Link
              href=""
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Edit profile
            </Link>
            <Link
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Support
            </Link>
            <Link
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              License
            </Link>
            <button
              onClick={signOuthAndler}
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMenuDropdown;
