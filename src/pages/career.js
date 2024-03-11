import Header from "@/components/Header";
import Job from "@/components/Job";
import React, { useState } from "react";
import { jobPostings } from "@/_mock/jobPostings";
import AppLayout from "@/layout/AppLayout";
import JobMob from "@/components/JobMob";
import { FunnelIcon } from "@heroicons/react/24/solid";
import JobFilter from "@/components/JobFilter";
const Career = () => {
  const [searchFilters, setSearchFilters] = useState(false);
  const [filteredJob, setfilteredJob] = useState(jobPostings);
  const handleFilter = (filters) => {
    const { category, jobMode, exp, keyword } = filters;
    // Filter the jobs based on the selected criteria
    const filtered = jobPostings.filter((job) => {
      const matchesCategory = category === "" || job.category === category;
      const matchesJobMode = jobMode === "" || job.job_mode === jobMode;
      const matchesExp = exp === "" || job.experience_level === location;
      const matchesKeyword =
        keyword === "" ||
        job.title.includes(keyword) ||
        job.address.includes(keyword);

      return matchesCategory && matchesJobMode && matchesExp && matchesKeyword;
    });

    setfilteredJob(filtered);
  };
  const handleReset = () => {
    setfilteredJob(jobPostings);
  };

  return (
    <>
      <div className="bg-[#FEEFE6]">
        <Header bgColor="#FEEFE6" />
        <div className="max-w-app m-auto">
          <div className="px-5 text-center py-20">
            <p className=" font-semibold text-[#F9AF82] text-2xl">Open Jobs</p>
            <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold">
              Available Jobs Opening
            </h1>
            <p className="lg:max-w-xl m-auto mt-3">
              Opening Job Roles from our company
            </p>
          </div>
        </div>
      </div>
      <AppLayout>
        <div className=" flex justify-center flex-col items-center mx-4 md:mx-0 bg-gray-100 rounded-md shadow my-10">
          <div
            onClick={() => setSearchFilters(!searchFilters)}
            className=" flex my-5 justify-center items-center gap-2 cursor-pointer"
          >
            <p className="text-orange-400 font-bold text-2xl uppercase">
              {" "}
              Job Filter
            </p>
            <FunnelIcon className="h-6 text-gray-700" />
          </div>
          {searchFilters && (
            <JobFilter onFilter={handleFilter} onReset={handleReset} />
          )}
        </div>
        {filteredJob.length === 0 ? (
          <p className="text-red-500 font-bold my-10 text-center text-2xl md:text-4xl ">
            No jobs found.
          </p>
        ) : (
          <>
            <div className=" sm:block hidden">
              <Job job={filteredJob} />
            </div>
            <div className=" sm:hidden block">
              <JobMob job={filteredJob} />
            </div>
          </>
        )}
      </AppLayout>
    </>
  );
};

export default Career;
