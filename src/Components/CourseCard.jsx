import React from "react";
import CardIMG from "../assets/CardIMG.png";
import ExImg from "../assets/ExImg.webp";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { RiGeminiFill } from "react-icons/ri";
import { FaMeta } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

const CourseCard = ({ data }) => {
  return (
    <div className="h-110 shrink-0 w-75 border border-[#C4C4C4] rounded-2xl overflow-hidden">
      <div className="relative h-40 overflow-hidden">
        <img className="w-full" src={data?.img} alt="" />
        <div className="absolute h-9 w-9 bg-white bottom-2 left-2 rounded-lg flex justify-center items-center">
          <div className="h-6 w-6 rounded-sm flex justify-center items-center">
            <img src={ExImg} alt="" />
          </div>
        </div>
      </div>
      <div className="px-4 h-70 flex flex-col justify-evenly">
        <h3 className="font-bold text-[1.4em]">{data?.title}</h3>
        <p className="text-[#646464] font-bold text-[0.9em]">
          {data?.subTitle}
        </p>
        {data?.certification == true && (
          <div className="py-1 px-4 h-6 w-40 bg-amber-100 rounded-full border border-amber-400 text-[0.7em] text-amber-950 flex justify-evenly items-center cursor-default">
            <AiFillSafetyCertificate />
            Certification with IIT
          </div>
        )}
        <div className="border-t border-[#C4C4C4] pt-4 h-10 w-full flex justify-between">
          <div className="h-full flex items-center text-xl gap-3">
            <RiGeminiFill />
            <FaMeta />
            <span className="text-sm">+1 more</span>
          </div>
          <div className="flex text-sm items-center">
            <IoMdTime size={18} />
            <span className="ml-2">{data?.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
