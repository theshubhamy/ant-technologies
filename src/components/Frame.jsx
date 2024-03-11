import Image from "next/image";
import React from "react";

const Frame = () => {
  return (
    <div>
      <div className="mt-9 px-2">
        <Image
          src={"/assets/group-coworkers-office-talking 1.png"}
          alt="Group of people"
          width={1426}
          height={534}
          className="m-auto rounded-[2rem]"
        />
      </div>
      <div className="flex items-center gap-4 flex-col md:flex-row mt-24 mb-24  justify-between ">
        <div className="px-5">
          <h1 className="text-5xl mb-5 font-bold">Our History</h1>
          <h4 className="text-2xl max-w-xl mb-8">
            Hired Support has been around since 2010 and is a pioneer in the
            outsourcing industry.{" "}
          </h4>
          <p className="max-w-2xl">
            We have worked with companies from around the world in various types
            of businesses including major SaaS companies to brick and mortar.
            Whether your business is digital or business is done in person, we
            can help cut down costs and improve your customer support channels
          </p>
        </div>
        <div className=" flex justify-center border-l-2 border-b-2 rounded-3xl p-2 border-light-orange m-2">
          <Image
            src={"/assets/businesspeople-meeting-office-working 1.png"}
            alt="Group of people"
            width={650}
            height={400}
            className=" lg:w-[400px] lg:h-[440px] md:w-[400px] md:h-[440px] sm:w-[400px] sm:h-[440px]  rounded-3xl "
          />
        </div>
      </div>
      <div className="flex items-center gap-4  mt-24 mb-24  justify-between flex-col md:flex-row ">
        <div className="sm:order-last lg:order-last md:order-last order-last border-l-2 border-b-2 rounded-3xl p-2 border-light-orange m-2">
          <Image
            src={"/assets/group-coworkers-putting-their-hands-together 1.png"}
            alt="Group of people"
            width={650}
            height={400}
            className=" lg:w-[400px] lg:h-[440px] md:w-[400px] md:h-[440px] sm:w-[400px] sm:h-[440px] rounded-3xl "
          />
        </div>
        <div className="sm:order-first lg:order-last md:order-first px-5">
          <h1 className="text-5xl mb-5 font-bold">Our Goal</h1>
          <h4 className="text-2xl max-w-xl mb-8">
            Hired Support has a simple goal: To be the leading support as a
            service provider for companies.{" "}
          </h4>
          <p className="max-w-2xl">
            We pride ourselves a lot in the service quality we provide. We
            strive to work with almost every single industry both online and
            offline. Thanks to our strong team of experts, businesses around the
            world have 24/7 coverage on their vital day to day operations. We
            are here to make sure work gets done &ndash; 24 hours a day, 7 days
            a week.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frame;
