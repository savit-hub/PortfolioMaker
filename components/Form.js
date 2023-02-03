import { MyContext } from "@/context";
import React, { useContext } from "react";
import Content from "./Content";
import FormDecider from "./FormDecider";
import Login from "./Login";

const Form = () => {
  const { auth } = useContext(MyContext);
  return <>{!auth.authUser ? <FormDecider /> : <Content />}</>;
};

export default Form;
