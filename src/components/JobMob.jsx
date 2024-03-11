import React from "react";
import { v4 as uuidv } from "uuid";

const JobMob = ({ job }) => {
  return (
    <>
      {job.map((item) => (
        <div
          key={uuidv()}
          className="max-w-[300px] mt-5 mb-5  rounded-lg shadow-md hover:shadow-2xl p-4 m-auto"
        >
          <p className="font-bold text-lg text-orange-400">{item.title}</p>
          <p className=" font-extralight">{item.experience_level}</p>
          <p className=" font-extralight">{item.job_mode}</p>
          <p className="pt-5">{item.address}</p>
        </div>
      ))}
    </>
  );
};

export default JobMob;
