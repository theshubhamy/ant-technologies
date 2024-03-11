import React from "react";
import { v4 as uuidv } from "uuid";
const Job = ({ job }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-8   py-10 ">
      <div className="basis-1/2 flex-auto">
        <div className=" flex flex-col gap-4 my-4 ">
          {job.map((item) => (
            <div
              key={uuidv()}
              className="flex justify-between items-center shadow p-4 rounded-md  cursor-pointer"
            >
              <div className=" basis-1/2">
                <p className="text-orange-500 font-blod text-lg ">
                  {item.title}
                </p>
                <span>{item.employment}</span>
              </div>
              <div className="basis-1/4 ">{item.experience_level}</div>
              <div className="basis-1/4 ">{item.job_mode}</div>
              <div className="basis-1/4 ">{item.address}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
