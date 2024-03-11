import React, { useState } from "react";
import { mockData, category } from "@/_mock/mockData";
import { v4 as uuidv } from "uuid";
import Card from "./Card";
import Header from "@/components/Header";
import AppLayout from "@/layout/AppLayout";
const Blog = () => {
  const [filteredBlog, setFilteredBlog] = useState(mockData);
  const handleFilter = (e) => {
    const mock =
      e.target.value !== "All"
        ? mockData.filter((item) => item.category === e.target.value)
        : mockData;
    setFilteredBlog(mock);
  };
  return (
    <div>
      <div className="bg-[#FEEFE6]">
        <div className="max-w-app m-auto">
          <Header bgColor="#FEEFE6" />
          <div className="px-5 text-center py-20 mb-12">
            <p className=" font-bold text-[#F9AF82] text-4xl uppercase">Blog</p>
            <h1 className=" mt-5  md:text-4xl text-xl font-bold">
              Latest Articles
            </h1>
            <p className="lg:max-w-xl m-auto mt-3">
              We love to hear from you. Let us help you.
            </p>
          </div>
        </div>
      </div>
      <AppLayout>
        <div className="flex overflow-x-auto gap-4 bg-orange-50  md:justify-center items-center mx-4 p-5 rounded-md">
          {category?.map((item) => (
            <button
              key={uuidv()}
              value={item}
              onClick={(e) => handleFilter(e)}
              className="rounded-full flex-shrink-0 border-2 border-light-orange px-6  py-2 text-base font-medium  hover:bg-light-orange whitespace-nowrap active:bg-light-orange focus:outline-none  bg-white focus:bg-light-orange"
            >
              {item}
            </button>
          ))}
        </div>
        {filteredBlog.length === 0 ? (
          <p className="text-red-500 font-bold my-10 text-center text-2xl md:text-4xl ">
            No Blogs found.
          </p>
        ) : (
          <Card products={filteredBlog} />
        )}
      </AppLayout>
    </div>
  );
};

export default Blog;
