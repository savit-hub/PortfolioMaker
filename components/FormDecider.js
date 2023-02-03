import Changepassword from "@/components/Changepassword";
import { MyContext } from "@/context";
import React, { useContext, useState } from "react";

import Login from "./Login";
import Register from "./Register";
const TotalPages = ["login", "register", "changepassword"];

function FormDecider() {
  const { CurrentActivePage } = useContext(MyContext);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6">
        <img className="h-screen w-screen" src="/assets/mainimage.jpg" />
      </div>
      {CurrentActivePage === TotalPages[0] && <Login />}
      {CurrentActivePage === TotalPages[1] && <Register />}
      {CurrentActivePage === TotalPages[2] && <Changepassword />}
    </div>
  );
}

export default FormDecider;
