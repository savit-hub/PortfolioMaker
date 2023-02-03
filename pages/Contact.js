import Layout from "@/components/Layout";
import React from "react";

function Contact() {
  return (
    <Layout>
      <div className="col-span-6 shadow-md rounded-lg w-1/2 m-auto my-8">
        <div className="text-center">
          <img className="mx-auto w-48" src="/images/logo.jpg" alt="logo" />
          <h1 className="text-xl center font-semibold mt-1 mb-12 pb-1">
            We are PortFolioMakers
          </h1>
        </div>
        <div className="items-center  w-full center block p-6 rounded-lg  bg-white">
          <form className="w-full">
            <p className="mb-4 font-bold">Please Write A feedback for us</p>
            <div className="form-group mb-6">
              <input
                type="text"
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
                id="exampleInput7"
                placeholder="Name"
              />
            </div>
            <div className="form-group mb-6">
              <input
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
                id="exampleInput8"
                placeholder="Email address"
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                className="
        form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="emailaddress"
                rows="3"
                placeholder="Message"
              ></textarea>
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
              Send
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
