import AverageRevenue from "@/components/AverageRevenue";
import Frame from "@/components/Frame";
import Header from "@/components/Header";
import Outsourcing from "@/components/Outsourcing";
import Testimonial from "@/components/Testimonial";
import AppLayout from "@/layout/AppLayout";
import React from "react";

export default function Company() {
  return (
    <>
      <div className="bg-[#FEEFE6]">
        <div className="max-w-[1600px] m-auto">
          <Header bgColor="#FEEFE6" />
          <div className="px-5 text-center  py-20">
            <p className=" font-semibold text-[#F9AF82] text-2xl">
              Our Mission & Succes Story
            </p>
            <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold">
              About Our Company
            </h1>
            <p className="max-w-sm m-auto mt-7">
              we can help cut down costs and improve your customer support
              channels
            </p>
          </div>
        </div>
      </div>
      <AppLayout>
        <Frame />
        <AverageRevenue />
        <Testimonial />
        <Outsourcing />
      </AppLayout>
    </>
  );
}
