import { MyContext } from "@/context";
import React, { useContext, useState } from "react";

const initialformData = {
  username: "",
  password: "",
};

function Login() {
  const { SetCurrentActivePage, setisUserLoggedIn, auth } =
    useContext(MyContext);
  const [initalState, setInitialState] = useState(initialformData);

  const loginHandler = async (event) => {
    event.preventDefault();
    console.log("initalstae", initalState);
    try {
      const result = await auth.signInWithEmailAndPassword(
        initalState.username,
        initalState.password
      );

      if (result) setisUserLoggedIn(true);
    } catch (error) {
      console.error(error);
      setisUserLoggedIn(false);
    }

    setInitialState(initialformData);
  };

  const changeHandler = (e) => {
    setInitialState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="col-span-6">
      <div className="text-center">
        <img className="mx-auto w-48" src="/assets/logo.jpg" alt="logo" />
        <h1 className="text-xl center font-semibold mt-1 mb-12 pb-1">
          We are PortFolioMakers
        </h1>
      </div>
      <div className="  h-screen  items-center  w-full center block p-6 rounded-lg  bg-white ">
        <form className="w-full" onSubmit={loginHandler}>
          <p className="mb-4 font-bold">Please login to your account</p>
          <div className="form-group mb-6">
            <label
              htmlFor="emailAddress"
              className="form-label inline-block mb-2 text-gray-700"
            >
              <p className="font-medium text-slate-700">Email address</p>
            </label>
            <input
              onChange={changeHandler}
              value={initalState.username}
              type="email"
              name="username"
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
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="Password"
              className="form-label inline-block mb-2 text-gray-700"
            >
              <p className="font-medium text-slate-700">Email address</p>
            </label>
            <input
              onChange={changeHandler}
              value={initalState.password}
              type="password"
              name="password"
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
              id="Password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck2"
              >
                Remember me
              </label>
            </div>
            <button
              onClick={() => {
                SetCurrentActivePage("changepassword");
              }}
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Forgot password?
            </button>
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
            Sign in
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Not a member?{" "}
            <button
              onClick={() => {
                SetCurrentActivePage("register");
              }}
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Register with Us
            </button>
          </p>
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">OR</p>
          </div>

          {
            <button
              onClick={() => {
                auth.signInWithGoogle();
              }}
              className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
              style={{ backgroundColor: "#3b5998" }}
            >
              Continue with google
            </button>
            /*<Link
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                style="background-color: #55acee"
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-3.5 h-3.5 mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </svg>
                Continue with Twitter
              </Link> */
          }
        </form>
      </div>
    </div>
  );
}

export default Login;
