import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowLongRightIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className=" bg-[#F9AF82] m-4   max-w-app w-full rounded-lg overflow-hidden relative -mb-20">
          <div className=" md:block hidden">
            <div className="z-0 absolute bottom-0 ">
              <Image
                src={"/assets/Vector11.png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-20 "
              />
            </div>
            <div className="z-0 absolute bottom-0">
              <Image
                src={"/assets/Vector12.png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-20 "
              />
            </div>
            <div className="z-0 absolute bottom-0">
              <Image
                src={"/assets/Vector13.png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-25 "
              />
            </div>
            <div className="z-0 absolute bottom-0">
              <Image
                src={"/assets/Vector14.png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-20 "
              />
            </div>
            <div className="z-0 absolute bottom-0">
              <Image
                src={"/assets/Vector15.png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-20 "
              />
            </div>
            <div className="z-0 absolute bottom-0">
              <Image
                src={"/assets/Vector16.png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-20"
              />
            </div>
            <div className="z-0 absolute bottom-0">
              <Image
                src={"/assets/Vector17.png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-20 "
              />
            </div>
            <div className="z-0 absolute bottom-0">
              <Image
                src={"/assets/Vector18.png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-20 "
              />
            </div>
          </div>
          <div className="flex items-center md:justify-around  justify-center   flex-col md:flex-row relative">
            <div className="lg:p-12 sm:p-6 p-4">
              <h3 className="md:text-2xl  text-center sm:text-start   text-lg font-bold capitalize">
              +971 4 399 2295
              </h3>
              <div className="pt-3 flex  flex-col md:flex-row  items-center gap-4">
                <Link
                  href={"tel:+971 50 808 9924"}
                  className="inline-block rounded-full bg-neutral-800 mr-2 px-6 pb-2 pt-2.5 text- base font-medium capitalize leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                >
                  Contact us
                </Link>
                <span className="text-base">4.85/5 From 400+ Reviews</span>
              </div>
            </div>
            <div className="lg:p-12 p-2  flex flex-col  gap-2">
              <div className="flex gap-3 my-2 ">
                <ArrowLongRightIcon className="h-6" />
                <p className="md:text-xl text-base font-semibold">
                  Exclusive Features
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircleIcon className="h-6" />
                <p className="md:text-lg text-base">Hire Live Agents</p>
              </div>
              <div className="flex gap-3">
                <CheckCircleIcon className="h-6" />
                <p className="md:text-lg text-base">Hire Voice Agents</p>
              </div>
              <div className="flex gap-3">
                <CheckCircleIcon className="h-6" />
                <p className="md:text-lg text-base">Hire Virtual Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#242423] p-4 md:p-0">
        <div className=" text-white max-w-app m-auto cursor-pointer">
          <div className="pt-32">
            <div className="grid  grid-cols-12 gap-4  place-items-start mb-6">
              <div className="pt-4 col-span-12 sm:col-span-6 md:col-span-3">
                <Image
                  src={"/assets/Isolation_Mode.png"}
                  alt="logo"
                  width={70}
                  height={70}
                  className="mb-4"
                />
                <p>Never worry about customer service.</p>
                <p>contact@anttechnology.ae</p>
              </div>
              <div className="pt-4 col-span-6 md:col-span-3">
                <h4 className="font-semibold mb-4">Service</h4>
                <p>Live Chats Agent</p>
                <p>Transcription</p>
                <p>Lead Generation</p>
                <p>Virtual Assistant</p>
              </div>

              <div className="pt-4 col-span-6 md:col-span-3">
                <h4 className="font-semibold mb-4">About</h4>
                <p>Our Client</p>
                <p>Pricing</p>
                <Link key={"privacy"} href={"/privacy"}>
                  Privacy Policy
                </Link>
                <p>Mission & Vision</p>
              </div>
              <div className="pt-4 col-span-6 md:col-span-3">
                <h4 className="font-semibold mb-4 self-auto">Our Office</h4>
                <p>Al Tawhidi Building - 1 ,</p>
                <p>Mankhool 5th floor - Bur Dubai</p>
                <p>Dubai - United Arab Emirates</p>
              </div>
            </div>
            <hr />
            <div className="grid sm:grid-flow-col  justify-between  mt-2 pb-4 pt-4 gap-4">
              <div className=" flex flex-col md:flex-row gap-3 items-start md:items-center">
                <p>&copy; 2023 ANT Information Technology. </p>
                <p> Call Center Support</p>
              </div>
              <div className=" flex flex-col md:flex-row gap-3 items-start md:items-center">
                <p>Terms & Conditions</p>
                <p>Legal Notice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
