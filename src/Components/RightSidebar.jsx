import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import { FaFlag } from "react-icons/fa6";
import { FaFilePen } from "react-icons/fa6";

const RightSidebar = () => {
  return (
    <div className="h-178 bg-[#F3F2F2] w-70 flex flex-col gap-5 p-4">
      <div className="flex gap-4 p-2">
        <div className="h-14 w-14 flex justify-center items-center text-xl rounded-xl text-[#0C8208] bg-[#C6EFC3] font-bold">
          UN
        </div>
        <div className="">
          <h1 className="font-bold text-lg">User Name</h1>
          <p className="text-sm cursor-pointer">Open Profile</p>
        </div>
      </div>
      <div className="flex flex-col bg-white p-2 rounded-lg">
        <p className="mb-3 text-[#0A2478] text-sm font-semibold">
          Streak : 2 day
        </p>
        <div className="flex justify-between px-2">
          <div className="flex flex-col items-center gap-1">
            <div className="h-8 w-8 rounded-sm bg-[#FFF5CC] text-[#E29537] text-xl flex justify-center items-center">
              <MdOutlineStar />
            </div>
            <p className="text-[0.6em]">Day 1</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="h-8 w-8 rounded-sm bg-[#FFF5CC] text-[#E29537] text-xl flex justify-center items-center">
              <MdOutlineStar />
            </div>
            <p className="text-[0.6em]">Day 2</p>
          </div>
          <div className="flex flex-col items-center gap-1 text-[#ABABAB]">
            <div className="h-8 w-8 rounded-sm text-xl flex justify-center items-center">
              <MdOutlineStar />
            </div>
            <p className="text-[0.6em]">Day 3</p>
          </div>
          <div className="flex flex-col items-center gap-1 text-[#ABABAB]">
            <div className="h-8 w-8 rounded-sm text-xl flex justify-center items-center">
              <MdOutlineStar />
            </div>
            <p className="text-[0.6em]">Day 4</p>
          </div>
          <div className="flex flex-col items-center gap-1 text-[#ABABAB]">
            <div className="h-8 w-8 rounded-sm text-xl flex justify-center items-center">
              <MdOutlineStar />
            </div>
            <p className="text-[0.6em]">Day 5</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white p-2 rounded-lg">
        <p className="mb-3 text-[#0A2478] text-sm font-semibold">
          Activity Score
        </p>
        <div className="flex justify-evenly">
          <div className="flex flex-col items-center">
            <div className="h-9 w-9 bg-[#EDEDED] rounded-sm flex justify-center items-center">
              <FiBookOpen />
            </div>
            <h6>128</h6>
            <p className="text-[0.7em]">Lessons</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-9 w-9 bg-[#EDEDED] rounded-sm flex justify-center items-center">
              <FaFlag />
            </div>
            <h6>272</h6>
            <p className="text-[0.7em]">Exercises</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-9 w-9 bg-[#EDEDED] rounded-sm flex justify-center items-center">
              <FaFilePen />
            </div>
            <h6>1</h6>
            <p className="text-[0.7em]">Quizzes</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white p-2 rounded-lg">
        <p className="mb-3 text-[#0A2478] text-sm font-semibold">Progress</p>
        <div className="flex flex-col gap-4">
          <div className="px-2 flex flex-col gap-1">
            <div className="flex justify-between text-sm">
              <p>UI/UX</p>
              <p className="text-[#0A2478] font-semibold">90%</p>
            </div>
            <div className="w-full h-1 rounded-full bg-[#D9D9D9]">
              <div className="w-[90%] h-full bg-[#1BA53B] rounded-full"></div>
            </div>
          </div>
          <div className="px-2 flex flex-col gap-1">
            <div className="flex justify-between text-sm">
              <p>JavaScript</p>
              <p className="text-[#0A2478] font-semibold">85%</p>
            </div>
            <div className="w-full h-1 rounded-full bg-[#D9D9D9]">
              <div className="w-[85%] h-full bg-[#1BA53B] rounded-full"></div>
            </div>
          </div>
          <div className="px-2 flex flex-col gap-1">
            <div className="flex justify-between text-sm">
              <p>HTML</p>
              <p className="text-[#0A2478] font-semibold">70%</p>
            </div>
            <div className="w-full h-1 rounded-full bg-[#D9D9D9]">
              <div className="w-[70%] h-full bg-[#1BA53B] rounded-full"></div>
            </div>
          </div>
          <div className="px-2 flex flex-col gap-1">
            <div className="flex justify-between text-sm">
              <p>CSS</p>
              <p className="text-[#0A2478] font-semibold">100%</p>
            </div>
            <div className="w-full h-1 rounded-full bg-[#D9D9D9]">
              <div className="h-full bg-[#1BA53B] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
