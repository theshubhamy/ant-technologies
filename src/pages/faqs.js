import Header from "@/components/Header";
import React, { useState } from "react";
import { faqData } from "@/_mock/faqData";
import { v4 as uuidv } from "uuid";
import AppLayout from "@/layout/AppLayout";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Faqs = () => {
  return (
    <>
      <div className="bg-[#FEEFE6]">
        <div className="max-w-app m-auto">
          <Header bgColor="#FEEFE6" />
          <div className="px-5 text-center py-20">
            <p className=" font-semibold text-[#F9AF82] text-2xl">
              Frequently Asked Question
            </p>
            <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold">
              Still need help?
            </h1>
            <p className="lg:max-w-xl m-auto mt-3">
              Can&apos;t find answer? call us at{" "}
              <span className="font-bold">+971 4 399 2295</span> or email us{" "}
              <span className="font-bold">contact@anttechnology.ae</span>
            </p>
          </div>
        </div>
      </div>
      <AppLayout>
        <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4 flex flex-col gap-4">
          {/* <!-- Question 1 --> */}
          {faqData?.map((list) => (
            <Disclosure key={uuidv()}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#FEEFE6] px-4 py-4 text-left font-medium   ">
                    <p className="flex justify-center gap-4 items-baseline md:items-center font-medium text-base leading-6 md:leading-4 text-gray-800 ">
                      <span className=" text-lg font-semibold text-gray-800">
                        Q.{" "}
                      </span>{" "}
                      <span className="font-semibold text-base ">
                        {list.question}
                      </span>
                    </p>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-6 w-6 text-black`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 py-2  ">
                    <p className="text-base text-gray-900 font-medium">
                      {list.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </AppLayout>
    </>
  );
};

export default Faqs;
