import React from 'react'
import { TiTick } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaAngleDoubleUp } from "react-icons/fa";

const WhyUs = () => {
  return (
    <div
        className="h-194 bg-[#15181a] flex flex-col justify-evenly"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >
        <div className="flex justify-center cursor-default">
          <svg
            viewBox="0 0 400 100"
            className="w-full max-w-2xl font-black uppercase opacity-65 mb-10"
          >
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" /> {/* Yellow */}
                <stop offset="100%" stopColor="#34d399" /> {/* Emerald */}
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="none"
              stroke="url(#grad)"
              strokeWidth="0.15"
              className="text-6xl"
            >
              WHY US
            </text>
          </svg>
        </div>
        <div className="relative rounded-sm p-10 h-130 lg:w-220 md:w-[80%] w-[95%] bg-linear-to-b from-transparent via-transparent to-blue-950/40 self-center flex flex-col items-center">
          <div className="absolute bottom-30 border border-amber-200/30 rounded-2xl h-110 lg:w-200 md:w-[85%] w-[95%] md:text-[1em] text-sm">
            <div className="flex justify-end items-center text-white h-15 sm:px-10 xs:px-7">
              <p className="sm:px-5 px-2 sm:w-37 w-20">Free Resources</p>
              <p className="sm:px-5 px-2 sm:w-35 w-20">Other courses</p>
            </div>
            <div className="flex justify-between items-center text-white bg-[#141414] h-15 sm:px-10 px-7">
              <p className="">Structured + Problem solving based</p>
              <div className="flex sm:gap-30 gap-20 items-center sm:mr-14 xs:mr-8">
                <p className="h-4 w-4 lg:flex hidden justify-center items-center bg-amber-300 rounded-full">
                  <TiTick className="text-[#15181a]" size={14} />
                </p>
                <p>
                  <ImCross size={14} />
                </p>
                <p>
                  <FaCheck size={14} />
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center text-white h-15 sm:px-10 px-7">
              <p className="">Fastest 1:1 doubt support</p>
              <div className="flex sm:gap-30 gap-20 items-center sm:mr-14 xs:mr-8">
                <p className="h-4 w-4 lg:flex hidden justify-center items-center bg-amber-300 rounded-full">
                  <TiTick className="text-[#15181a]" size={14} />
                </p>
                <p>
                  <ImCross size={14} />
                </p>
                <p>
                  <ImCross size={14} />
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center text-white bg-[#141414] h-15 sm:px-10 px-7">
              <p className="">Integrated prep platform</p>
              <div className="flex sm:gap-30 gap-20 items-center sm:mr-14 xs:mr-8">
                <p className="h-4 w-4 lg:flex hidden justify-center items-center bg-amber-300 rounded-full">
                  <TiTick className="text-[#15181a]" size={14} />
                </p>
                <p>
                  <ImCross size={14} />
                </p>
                <p>
                  <ImCross size={14} />
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center text-white h-15 sm:px-10 px-7">
              <p className="">Profiles highlighted on Naukri</p>
              <div className="flex sm:gap-30 gap-20 items-center sm:mr-14 xs:mr-8">
                <p className="h-4 w-4 lg:flex hidden justify-center items-center bg-amber-300 rounded-full">
                  <TiTick className="text-[#15181a]" size={14} />
                </p>
                <p>
                  <ImCross size={14} />
                </p>
                <p>
                  <ImCross size={14} />
                </p>
              </div>
            </div>

            <div className="flex flex-col py-3 gap-2">
              <div className="self-end flex xs:mr-10 mr-5 items-center gap-1">
                <p className="text-[0.8em] bg-linear-to-r from-[#f108e8] to-[#f58501] bg-clip-text text-transparent">
                  Your dream role, faster and with confidence!
                </p>
                <AiFillThunderbolt className="text-[#f58501]" />
              </div>
              <div className="h-1 xs:mx-10 mx-6 rounded-full bg-linear-to-r from-[#f108e8] to-[#f58501]"></div>
            </div>

            <div className="flex flex-col py-3 gap-2">
              <div className="flex xs:mx-10 mx-6 items-center justify-between text-[0.8em] text-gray-200">
                <p className="font-bold">Others</p>
                <p>Average role, under-confident</p>
              </div>
              <div className="h-1 xs:mx-10 mx-6 rounded-full bg-gray-800">
                <div className="h-1 w-[75%] rounded-full bg-gray-400"></div>
              </div>
            </div>
          </div>

          <button className="absolute bottom-9 bg-[#f66c3b] h-13 w-50 rounded-lg text-white font-bold flex justify-center items-center gap-2 hover:bg-[#ff5719]">
            <span>Explore offerings</span>
            <FaAngleDoubleUp />
          </button>
        </div>
      </div>
  )
}

export default WhyUs
