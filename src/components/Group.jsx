import Image from "next/image";
import React from "react";

const Group = () => {
  return (
    <div className="mt-16 lg:p-4 p-2">
      <div>
        <p className="text-center font-semibold text-[#F9AF82] text-2xl">
          Customer Service Agency
        </p>
        <h1 className="text-center mt-5 lg:text-5xl md:text-3xl text-xl font-bold">
          Outsourcing your customer support has <br /> never been this easy
        </h1>
      </div>
      <div className="flex lg:justify-between justify-center flex-wrap mt-20">
        <div className="max-w-[300px]  rounded-lg ">
          <div className="rounded-t-lg w-full h-[204px] bg-[#FEEFE6] grid content-center	justify-center">
            <Image
              src={"/assets/sms icon.png"}
              alt="sms"
              width={300}
              height={300}
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-bold text-gray-900">
                Chat Agents
              </h5>
            </a>
            <p className="mb-3 font-normal text-center text-gray-700 ">
              Hire 24x7 in-house custom trained live chat agent operators for
              your business or startup.
            </p>
          </div>
        </div>
        <div className="max-w-[300px] rounded-lg">
          <div className="rounded-t-lg w-full h-[204px] bg-[#E2FBF4]  grid content-center	justify-center">
            <Image
              src={"/assets/headphone icon.png"}
              alt="sms"
              width={300}
              height={300}
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-bold text-gray-900">
                Call Agents
              </h5>
            </a>
            <p className="mb-3 font-normal text-center text-gray-700">
              Hire 24x7 in-house custom trained live chat agent operators for
              your business or startup.
            </p>
          </div>
        </div>
        <div className="max-w-[300px] rounded-lg">
          <div className="rounded-t-lg w-full h-[204px] bg-[#E6F8FE]  grid content-center	justify-center">
            <Image
              src={"/assets/Message icon.png"}
              alt="sms"
              width={300}
              height={300}
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-bold  text-gray-900">
                Email Agent
              </h5>
            </a>
            <p className="mb-3 font-normal text-center text-gray-700">
              Our virtual assistants can even do back office work, data entry,
              and everything in between.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly flex-wrap">
        <div className="max-w-[300px] rounded-lg">
          <div className="rounded-t-lg w-full h-[204px] bg-[#E6EBFE] grid content-center	justify-center">
            <Image
              src={"/assets/ticket icon.png"}
              alt="sms"
              width={300}
              height={300}
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-bold text-gray-900">
                Ticket Agent
              </h5>
            </a>
            <p className="mb-3 font-normal text-center text-gray-700 ">
              Hire 24x7 in-house custom trained live chat agent operators for
              your business or startup.
            </p>
          </div>
        </div>
        <div className="max-w-[300px] rounded-lg">
          <div className="rounded-t-lg w-full h-[204px] bg-[#F2E6FE]  grid content-center	justify-center">
            <Image
              src={"/assets/study icon.png"}
              alt="sms"
              width={300}
              height={300}
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-bold text-gray-900">
                Call Survey
              </h5>
            </a>
            <p className="mb-3 font-normal text-center text-gray-700">
              Hire inbound and outbound voice agents and let us be your
              dedicated call center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Group;
