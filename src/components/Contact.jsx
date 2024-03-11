import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center   md:flex-row flex-col mt-24 gap-4 mb-24 px-4  justify-between ">
      <div className=" ">
        <div className="px-5">
          <p className=" font-semibold text-[#F9AF82] text-2xl">Contact Us</p>
          <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold">
            Reach out to us for your agency
          </h1>
        </div>
        <div className=" mt-5 mx-2  ">
          <Image
            src={"/assets/walling-UP7JSnodG2M-unsplash 1.png"}
            alt="Group of people"
            width={480}
            height={160}
            className="  border-l-2  border-b-2 rounded-3xl p-4 border-light-orange"
          />
        </div>
      </div>
      <div className=" w-full md:w-1/2">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid  grid-cols-12 gap-x-8 gap-6 ">
            <div className="col-span-12">
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-12">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-12">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  placeholder="I want to connect ..."
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="my-5 ">
            <button
              type="submit"
              className=" rounded-full bg-neutral-800 px-6 py-2  text-base capitalize leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 font-semibold"
            >
              Send Your Mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
