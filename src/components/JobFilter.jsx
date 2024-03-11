import React, { useState } from "react";
import {
  jobMode,
  experienceLevel,
  jobType,
  category,
} from "@/_mock/jobPostings";
const JobFilter = ({ onFilter, onReset }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedJobMode, setSelectedJobMode] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedExpLevel, setSelectedExpLevel] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleFilter = () => {
    const filters = {
      category: selectedCategory,
      jobMode: selectedJobMode,
      exp: selectedExpLevel,
      keyword: searchKeyword,
    };

    onFilter(filters);
  };

  const handleResetFilter = () => {
    setSelectedCategory("");
    setSelectedJobMode("");
    setSelectedJobType("");
    setSelectedExpLevel("");
    setSearchKeyword("");
    onReset();
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="grid grid-cols-10 mb-4 gap-4">
        <div className="col-span-10 md:col-span-2">
          <label className="mr-2">Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border w-full border-gray-300 rounded-md"
          >
            <option value="">All</option>
            {category.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-10 md:col-span-2">
          <label className="mr-2">Job Mode:</label>
          <select
            value={selectedJobMode}
            onChange={(e) => setSelectedJobMode(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">All</option>
            {jobMode.map((jobMode) => (
              <option key={jobMode} value={jobMode}>
                {jobMode}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-10 md:col-span-2">
          <label className="mr-2">Job Type:</label>
          <select
            value={selectedJobType}
            onChange={(e) => setSelectedJobType(e.target.value)}
            className="p-2 border w-full border-gray-300 rounded-md"
          >
            <option value="">All</option>
            {jobType.map((jobType) => (
              <option key={jobType} value={jobType}>
                {jobType}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-10 md:col-span-2">
          <label className="mr-2">Experience Level:</label>
          <select
            value={selectedExpLevel}
            onChange={(e) => setSelectedExpLevel(e.target.value)}
            className="p-2 border w-full border-gray-300 rounded-md"
          >
            <option value="">All</option>
            {experienceLevel.map((exp) => (
              <option key={exp} value={exp}>
                {exp}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-10 md:col-span-2">
          <label className="mr-2">Search Keyword:</label>
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="Search..."
            className="p-2 border w-full border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-center items-center w-full col-span-10  gap-4">
          <button
            onClick={handleResetFilter}
            className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-md"
          >
            Clear Filter
          </button>
          <button
            onClick={handleFilter}
            className="bg-gray-500 hover:bg-gray-900 text-white px-6 py-2 rounded-md"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
