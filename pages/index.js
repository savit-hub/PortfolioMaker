import React, { useContext, useState } from "react";
import Link from "next/link";
import Login from "../components/Login";
import Layout from "@/components/Layout";
import { MyContext } from "@/context";
import Form from "@/components/Form";

const Home = () => {
  return (
    <Layout>
      <Form />
    </Layout>
  );
};

export default Home;
