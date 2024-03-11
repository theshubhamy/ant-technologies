import Header from "@/components/Header";
import Privacy from "@/components/Privacy";
import AppLayout from "@/layout/AppLayout";
import React from "react";

const privacy = () => {
  return (
    <>
      <div className="bg-[#FEEFE6]">
        <div className="max-w-[1600px] m-auto">
          <Header bgColor="#FEEFE6" />
          <div className="px-5 text-center py-20">
            <p className=" font-semibold text-[#F9AF82] text-2xl">
              Privacy Policy
            </p>
            <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold">
              Privacy Policy for ANT Information Technology
            </h1>
          </div>
        </div>
      </div>
      <AppLayout>
        <Privacy />
      </AppLayout>
    </>
  );
};

export default privacy;
