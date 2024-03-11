import Image from "next/image";
import React from "react";

const AverageRevenue = () => {
  return (
    <div className="m-4 sm:m-0">
      <div className=" bg-[#F9AF82] w-full   py-8 md:py-16  overflow-hidden relative rounded-lg">
        <div className="md:flex hidden p-0 ">
          <div className="z-0 absolute bottom-0  min-w-full p-0">
            <Image
              src={"/assets/Vector4.png"}
              alt="line image"
              width="1784"
              height="692"
              className="opacity-25 "
            />
          </div>
          <div className="z-0 absolute bottom-0">
            <Image
              src={"/assets/Vector5.png"}
              alt="line image"
              width="1784"
              height="692"
              className=" opacity-25 "
            />
          </div>
          <div className="z-0 absolute bottom-0">
            <Image
              src={"/assets/Vector6.png"}
              alt="line image"
              width="1784"
              height="692"
              className=" opacity-25 "
            />
          </div>
          <div className="z-0 absolute bottom-0">
            <Image
              src={"/assets/Vector7.png"}
              alt="line image"
              width="1784"
              height="692"
              className=" opacity-25 "
            />
          </div>
          <div className="z-0 absolute bottom-0">
            <Image
              src={"/assets/Vector8.png"}
              alt="line image"
              width="1784"
              height="692"
              className=" opacity-25 "
            />
          </div>
          <div className="z-0 absolute bottom-0">
            <Image
              src={"/assets/Vector9.png"}
              alt="line image"
              width="1784"
              height="692"
              className="opacity-25 "
            />
          </div>
        </div>
        <div className="relative flex flex-col justify-center gap-8  items-center">
          <h3 className=" font-bold  text-center md:text-4xl text-2xl  ">
            Over 90+ businesses and startups trust us
          </h3>
          <div className="flex  flex-col md:flex-row  gap-3 md:gap-8  justify-start md:justify-center  items-start md:items-center ">
            <p className=" flex gap-2  justify-center  items-center">
              <span className="md:text-4xl text-xl font-bold">40%</span>
              <span className=" text-lg font-medium">
                {" "}
                Average Revenue Boost
              </span>
            </p>
            <p className=" flex gap-2 justify-center items-center">
              <span className="md:text-4xl text-xl font-bold">125+</span>
              <span className=" text-lg font-medium">Global Clients</span>
            </p>
            <p className=" flex gap-2 justify-center items-center">
              <span className="md:text-4xl text-xl font-bold">7k</span>
              <span className=" text-lg font-medium">
                Customer Interactions per day
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageRevenue;
