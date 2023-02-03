import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import React, { createContext, useState } from "react";

export const MyContext = createContext({});

const InnitialUSerData = {
  id: 0,
  firstname: "",
  lastname: "",
  phonenumber: 0,
  address: "",
  password: "",
  confirmpassword: "",
  "date of birth": new Date(),
  email: "",
};

function ContextProvider({ children }) {
  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);
  const [CurrentActivePage, SetCurrentActivePage] = useState("login");
  const [user, setUser] = useState(InnitialUSerData);
  const auth = useFirebaseAuth();

  return (
    <MyContext.Provider
      value={{
        isUserLoggedIn,
        setisUserLoggedIn,
        CurrentActivePage,
        SetCurrentActivePage,
        setUser,
        user,
        auth,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;
