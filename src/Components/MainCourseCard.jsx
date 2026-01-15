import React from "react";
import { FaRegBookmark } from "react-icons/fa";

const MainCourseCard = ({ data }) => {
  return (
    <div className="w-65">
      <div className="border-2 rounded-lg border-[#BBBBBB] h-40 w-65 flex justify-center items-center">
        <img className="h-16" src={data?.img} alt="" />
      </div>
      <div className="relative flex flex-col gap-3 mt-2">
        <div className="absolute right-1 bottom-9 cursor-pointer"><FaRegBookmark size={18}/></div>
        <p className="absolute right-0 bottom-2 text-sm text-[#0a2478] font-semibold">{data?.percent}%</p>
        <p className="text-[#0a2478] text-lg font-semibold leading-0">
          {data?.title} - <span className="text-sm text-[#606060]">Lessons {data?.lessons}</span>
        </p>
        <p className="text-sm text-[#606060] font-semibold leading-0">Quiz - {data?.quiz} & Assignments - {data?.assignments}</p>
        <div className="h-2 w-65 bg-[#D9D9D9] rounded-full mt-2">
            <div className="h-2 bg-[#6085F6] rounded-full" style={{ width: `${data?.percent}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default MainCourseCard;
