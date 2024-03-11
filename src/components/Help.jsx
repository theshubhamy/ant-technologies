import Image from "next/image";
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const Help = () => {
  return (
    <div className="flex items-center gap-4 md:flex-row flex-col my-24   justify-between">
      <div className="px-5 md:w-1/2 w-full">
        <div className="px-5">
          <p className=" font-semibold text-[#F9AF82] text-2xl">
            Here to help you
          </p>
          <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold">
            Get started today with 14 day free trial
          </h1>
        </div>
        <div className="mt-10 px-5">
          <div className="flex justify-start items-center gap-4 border-b-2 py-4">
            <p>
              {" "}
              <CheckCircleIcon className="h-6 text-orange-300" />
            </p>
            <p className="text-base">
              24/7/365 Live Chat Service for your website (Includes Two-Way
              Texting, Google Business Messeges and Facebook Messenger)
            </p>
          </div>
          <div className="flex gap-4 border-b-2 py-4">
            <p>
              {" "}
              <CheckCircleIcon className="h-6 text-orange-300" />
            </p>

            <p className="text-base">
              ADA, HIPAA and PCI compliant live chat software included free.
            </p>
          </div>
          <div className="flex gap-4 border-b-2 py-4">
            <p>
              {" "}
              <CheckCircleIcon className="h-6 text-orange-300" />
            </p>
            <p className="text-base">
              24x7 US Based, highly trained Live Chat Agents.
            </p>
          </div>
          <div className="flex gap-4 border-b-2 py-4">
            <p>
              {" "}
              <CheckCircleIcon className="h-6 text-orange-300" />
            </p>
            <p className="text-base">Agents go through vigorous training.</p>
          </div>
          <div className="flex gap-4 border-b-2 py-4">
            <p>
              {" "}
              <CheckCircleIcon className="h-6 text-orange-300" />
            </p>
            <p className="text-base">
              Instant lead and chat transcript forwarding.
            </p>
          </div>
        </div>
      </div>
      <div className="border-l-2 border-b-2 rounded-3xl p-4 border-light-orange m-2">
        <Image
          src={
            "/assets/ai-chatbot-smart-digital-customer-service-application-concept 1.png"
          }
          alt="Group of people"
          width={650}
          height={400}
          className=" w-[400px] h-[440px] rounded-3xl border-blue-500"
        />
      </div>
    </div>
  );
};

export default Help;
