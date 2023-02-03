import { MyContext } from "@/context";
import Link from "next/link";
import React, { useContext } from "react";
import NavbarMenuDropdown from "./NavbarMenuDropdown";

function NavBarMenu() {
  const { auth } = useContext(MyContext);
  return <>{auth.authUser && <NavbarMenuDropdown></NavbarMenuDropdown>}</>;
}

export default NavBarMenu;
