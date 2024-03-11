import React from "react";
import { PhoneIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" lg:p-4 p-2 flex justify-between items-center md:flex-row flex-col-reverse box-border mt-10 ">
      <div className="self-center">
        <div className="flex justify-start items-center gap-2">
          <div className="bg-orange-300 p-2 rounded-full mt-10">
            <PhoneIcon className="h-5" />
          </div>
          <div className="bg-[#CFD3D7] rounded-full py-1 px-8 capitalize mt-10">
            <p className="text-lg font-semibold">We&apos;re Here For You</p>
          </div>
        </div>
        <div className="mr-10 py-4">
          <h1 className=" lg:text-7xl md:text-5xl text-2xl font-extrabold capitalize  lg:max-w-2xl lg:leading-[80px]">
            Connect with Our Call Center Experts Today
          </h1>
          <p className="mt-[30px] lg:max-w-xl ">
            Experience the Difference of Exceptional Customer Service and
            Problem Resolution. Fast and Reliable Assistance from Our Skilled
            Representatives 24/7
          </p>
        </div>
        <div className="mt-5">
          <button className="inline-block rounded-full bg-neutral-800 mr-2 px-6 pb-2 pt-2.5 text- base font-medium capitalize leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center px-4">
        <div className="relative">
          <div className="bg-light-orange w-20 h-20  rounded-full absolute lg:-left-10 top-5 -left-5 opacity-100 flex justify-center items-center m-auto ">
            <div className=" flex flex-col  items-center justify-center text-center ">
              <span className="text-sm font-bold ">AED 30</span>
              <span className="flex justify-center items-center  text-xs">
                /Hourly
              </span>
            </div>
          </div>
          <div className="bg-gray-800  px-6 py-2 rounded-full absolute lg:-left-10 bottom-16 -left-5 opacity-100 flex justify-between  items-center gap-4 ">
            <div>
              <svg
                width="32"
                height="32"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.2301 12.3333H34.0001C34.8841 12.3333 35.732 12.6845 36.3571 13.3096C36.9822 13.9348 37.3334 14.7826 37.3334 15.6667V22.3333C37.3334 23.2174 36.9822 24.0652 36.3571 24.6904C35.732 25.3155 34.8841 25.6667 34.0001 25.6667H32.2301C31.8238 28.8888 30.2555 31.852 27.8197 34C25.3838 36.148 22.2478 37.3333 19.0001 37.3333V34C21.6522 34 24.1958 32.9464 26.0712 31.0711C27.9465 29.1957 29.0001 26.6522 29.0001 24V14C29.0001 11.3478 27.9465 8.80429 26.0712 6.92893C24.1958 5.05357 21.6522 4 19.0001 4C16.3479 4 13.8044 5.05357 11.929 6.92893C10.0537 8.80429 9.00008 11.3478 9.00008 14V25.6667H4.00008C3.11603 25.6667 2.26818 25.3155 1.64306 24.6904C1.01794 24.0652 0.666748 23.2174 0.666748 22.3333V15.6667C0.666748 14.7826 1.01794 13.9348 1.64306 13.3096C2.26818 12.6845 3.11603 12.3333 4.00008 12.3333H5.77008C6.1768 9.11149 7.74521 6.14878 10.181 4.00112C12.6169 1.85346 15.7527 0.668457 19.0001 0.668457C22.2475 0.668457 25.3833 1.85346 27.8191 4.00112C30.2549 6.14878 31.8234 9.11149 32.2301 12.3333ZM4.00008 15.6667V22.3333H5.66675V15.6667H4.00008ZM32.3334 15.6667V22.3333H34.0001V15.6667H32.3334ZM11.9334 25.3083L13.7001 22.4817C15.2885 23.4767 17.1257 24.003 19.0001 24C20.8745 24.003 22.7116 23.4767 24.3001 22.4817L26.0667 25.3083C23.9488 26.6352 21.4993 27.3372 19.0001 27.3333C16.5008 27.3372 14.0513 26.6352 11.9334 25.3083Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-white items-center">
              <p className="items-center text-xs">Available 24/7</p>
              <p className="text-sm font-semibold">Call Support</p>
            </div>
          </div>
          <div className="bg-gray-800 px-6  py-2 rounded-full  absolute sm:-right-16  sm:top-64 top-56 -right-5 opacity-100 flex justify-evenly  items-center text-white ">
            <p>How can I help you?</p>
          </div>
          <div className="bg-[#1E85E3] h-8 w-24 rounded-full absolute sm:right-6 sm:top-80 top-72 right-20  opacity-100 flex justify-evenly  items-center text-white">
            <p className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </p>
          </div>

          <Image
            src={"/assets/heroMask.svg"}
            alt="hero"
            height={"641"}
            width={"436"}
            style={{
              borderRadius: "20px",
              background: "rgba(249, 175, 130, 0.15)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
