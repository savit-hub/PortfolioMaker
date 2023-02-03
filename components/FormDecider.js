import Changepassword from "@/components/Changepassword";
import { MyContext } from "@/context";
import React, { useContext, useState } from "react";

import Login from "./Login";
import Register from "./Register";
const TotalPages = ["login", "register", "changepassword"];

function FormDecider() {
  const { CurrentActivePage } = useContext(MyContext);

  return (
    <div className="grid grid-cols-12 h-[calc(100vh_-_100px)]">
      <div className="col-span-6 overflow-hidden">
        <img
          className="object-cover object-center h-full w-full"
          src="/assets/mainimage.jpg"
        />
      </div>
      <div className="col-span-6 w-full overflow-y-auto">
        {CurrentActivePage === TotalPages[0] && <Login />}
        {CurrentActivePage === TotalPages[1] && <Register />}
        {CurrentActivePage === TotalPages[2] && <Changepassword />}
      </div>
    </div>
  );
}

export default FormDecider;
