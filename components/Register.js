import Layout from "@/components/Layout";
import { MyContext } from "@/context";
import { auth } from "@/config/app";
import React, { useContext, useState } from "react";
const newUSerinitialdata = {
  name: "",
  email: "",
  password: "",
  DateOfbirth: "",
};

function Register() {
  const { SetCurrentActivePage, user, setUser } = useContext(MyContext);
  const [newUSer, setnewUSer] = useState(newUSerinitialdata);
  const submitHandler = async (event) => {
    event.preventDefault();
    const result = await auth.createUserWithEmailAndPassword(
      newUSer.email,
      newUSer.password
    );
    setnewUSer(newUSerinitialdata);
  };

  const changeHandler = (e) => {
    setnewUSer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="col-span-6">
      <div className="text-center">
        <img className="mx-auto w-48" src="/images/logo.jpg" alt="logo" />
        <h1 className="text-xl center font-semibold mt-1 mb-12 pb-1">
          We are PortFolioMakers
        </h1>
      </div>
      <div className=" h-screen  items-center  w-full center block p-6 rounded-lg  bg-white">
        <form className="w-full" onSubmit={submitHandler}>
          <p className="mb-4 font-bold">Please Register with us</p>

          <div className="form-group mb-6">
            <label
              htmlFor=" Name"
              className="form-label inline-block mb-2 text-gray-700"
            >
              <p className="font-medium text-slate-700 ">Name</p>
            </label>
            <input
              onChange={changeHandler}
              type="text"
              className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="name"
              name="name"
              aria-describedby="lastname"
              placeholder="name"
            />
          </div>

          <div className="form-group mb-6">
            <label
              htmlFor="email"
              className="form-label inline-block mb-2 text-gray-700"
            >
              <p className="font-medium text-slate-700">Email address</p>
            </label>
            <input
              onChange={changeHandler}
              type="email"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="email"
              name="email"
              placeholder="Email address"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="password"
              className="form-label inline-block mb-2 text-gray-700"
            >
              <p className="font-medium text-slate-700 ">Password</p>
            </label>
            <input
              onChange={changeHandler}
              type="password"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="dateofbirth"
              className="form-label inline-block mb-2 text-gray-700"
            >
              <p className="font-medium text-slate-700">Date Of Birth</p>
            </label>
            <input
              onChange={changeHandler}
              type="date"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="dateofbirth"
              name="dateofbirth"
              placeholder="DOB"
            />
          </div>

          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Sign up
          </button>
          <p className="text-center">
            Login with other Account ?{" "}
            <button
              onClick={() => {
                SetCurrentActivePage("login");
              }}
              className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
            >
              <span>Login now </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
