import Header from "@/components/Header";
import Help from "@/components/Help";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import React from "react";
import Contact from "@/components/Contact";
import AppLayout from "@/layout/AppLayout";

const Services = () => {
  return (
    <div>
      <div className="bg-[#FEEFE6]">
        <div className="max-w-app m-auto">
          <Header bgColor="#FEEFE6" />
          <div className="px-5 text-center mt-10 mb-12 py-20">
            <p className=" font-semibold text-[#F9AF82] text-2xl">Chat Agent</p>
            <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold">
              Chat Agent Service
            </h1>
            <p className="lg:max-w-sm m-auto mt-3 max-w-sm text-gray-600">
              we can help cut down costs and improve your customer support
              channels
            </p>
          </div>
        </div>
      </div>
      <AppLayout>
        <div className="flex items-center gap-4  mt-24 mb-24  justify-evenly flex-wrap ">
          <div className="sm:order-last lg:order-first border-l-2 border-b-2 rounded-3xl p-3 m-2 border-light-orange">
            <Image
              src={"/assets/businesspeople-meeting-office-working 1 (1).png"}
              alt="Group of people"
              width={650}
              height={400}
              className=" lg:w-[400px] lg:h-[440px] md:w-[400px] md:h-[440px] sm:h-[440px] sm:w-[400px]  rounded-3xl border-blue-500 "
            />
          </div>
          <div className="sm:order-first lg:order-last md:order-first px-5">
            <p className=" font-semibold text-[#F9AF82] text-l mb-5">
              Why we ?
            </p>
            <h1 className="text-5xl mb-5 font-bold">Why Choose Us?</h1>
            <h4 className="text-2xl font-bold max-w-xl mb-8">
              We will Fatten Up Your Piggy Bank
            </h4>
            <p className="max-w-2xl leading-7">
              Outsourcing customer support does not have to be scary. We make it
              easy! Antsquad&prime;s professionally trained live chat agents
              will save you tons of cash.We&prime;re up to 50x cheaper than
              hiring a full-time employee! The average salary of one full-time
              customer support agent &#40;8 hours a day, 5 days a week&#41; is
              AED 1,500 to AED 2,500. You can have Antsquad staff your live chat
              support 24/7/365 for as little as AED 5,000/month to AED
              8,000/month! That means you could save up to $38,000 a year per
              agent and get full coverage!
            </p>
          </div>
        </div>
        <Testimonial />
        <Help />
        <Contact />
      </AppLayout>
    </div>
  );
};

export default Services;
