import React from "react";
import { v4 as uuidv } from "uuid";

const Category = (props) => {
  return (
    <div>
      <div className=" flex flex-row gap-4 justify-end items-center px-5">
        {props.category?.map((item) => (
          <div key={uuidv()}>
            <button className="inline-block rounded-full border-2 border-light-orange px-6 pb-[6px] pt-2 text-xs font-medium  hover:bg-light-orange active:bg-light-orange focus:outline-none  focus:bg-light-orange">
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
