import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { LuCrown } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import LadderHomeCardImg1 from "../assets/LadderHomeCardImg1.webp";
import LadderHomeCardImg2 from "../assets/LadderHomeCardImg2.webp";
import LadderHomeCardImg3 from "../assets/LadderHomeCardImg3.webp";

const LadderHome = () => {
  return (
    <div className="">

      {/* Section 1 */}
      <div className="relative bg-[#141414] flex justify-center gap-10">
        <div className="z-10 absolute top-22 left-72 h-8 w-8 bg-white rounded-sm flex justify-center items-center">
          <div className="relative">
            <FaHeart size={22} />
            <FaCheck
              className="absolute top-1/4 left-1/3 text-[#ffc147]"
              size={10}
            />
          </div>
        </div>
        <div className="relative h-130 border-r border-dashed border-[#ffc147]">
          <div className="absolute top-0 h-50 border-l-2 border-[#ffc147]"></div>
        </div>
        <div className="text-[#2c2c2c] flex flex-col justify-evenly py-15">
          <p className="relative text-white">
            Always available when you get stuck
          </p>
          <h2 className="text-[#ffc147] text-5xl font-bold">
            Resolve doubts any time through chat,
            <br />
            voice notes or calling.
          </h2>
          <h4 className="text-4xl font-bold">
            500+ dedicated Teaching Assistants to <br /> resolve your doubts
            quickly.
          </h4>
          <h4 className="text-4xl font-bold">
            5/5 rating for 90% doubt resolutions.
          </h4>
        </div>
      </div>

      {/* Section 2 */}
      <div className="relative flex justify-center gap-10">
        <div className="z-10 absolute top-21 left-71 h-9 w-9 bg-[#ffede8] rounded-sm flex justify-center items-center">
            <div className="absolute">
                <FaUserGroup className="text-[#f66c3b]" size={20}/>
            </div>
        </div>
        <div className="relative h-150 border-r border-dashed border-[#ffc147]"></div>
        <div className="flex flex-col justify-evenly py-10">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-lg">1:1 Mentorship sessions</p>
            <p className="text-gray-600">Personalised guidance to prepare you for your interview needs</p>
          </div>
          <div className="flex gap-4">
            <div className="h-75 w-70 shadow-2xl rounded-lg">
              <div>
                <img src={LadderHomeCardImg1} alt="" />
              </div>
              <div className="p-5 flex flex-col gap-4">
                <h4 className="font-semibold text-lg">Mock Interviews</h4>
                <p className="text-sm text-gray-600">
                  Nail coding assessments and technical challenges
                </p>
                <p className="text-sm text-gray-600">
                  Gain insights into problem-solving and algorithmic thinking
                </p>
              </div>
            </div>
            <div className="h-75 w-70 shadow-2xl rounded-lg">
              <div>
                <img src={LadderHomeCardImg2} alt="" />
              </div>
              <div className="p-5 flex flex-col gap-4">
                <h4 className="font-semibold text-lg">Profile review</h4>
                <p className="text-sm text-gray-600">
                  Get your profile & resume reviewed by industry leaders
                </p>
                <p className="text-sm text-gray-600">
                  Focus on different aspects of your job search
                </p>
              </div>
            </div>
            <div className="h-75 w-70 shadow-2xl rounded-lg">
              <div className="h-29">
                <img src={LadderHomeCardImg3} alt="" />
              </div>
              <div className="p-5 flex flex-col gap-4">
                <h4 className="font-semibold text-lg">Project guidance</h4>
                <p className="text-sm text-gray-600">
                  Career counselling with industry experts
                </p>
                <p className="text-sm text-gray-600">
                  Get assistance on how to build real time projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative flex justify-center gap-10">
        <div className="z-10 absolute top-21 left-72 h-9 w-9 bg-[#ffede8] rounded-sm flex justify-center items-center">
            <div className="absolute">
                <FaStar className="" size={20}/>
            </div>
        </div>
        <div className="relative h-140 border-r border-dashed border-[#ffc147]"></div>
        <div className="w-218 flex flex-col justify-evenly py-15">
            <p className="font-semibold text-lg">Your one stop destination to code, create & connect</p>
            <div className="border-2 border-gray-300 rounded-2xl h-80 w-150 p-3">
                <div className="bg-[#ffe7e0] h-full w-full rounded-2xl px-6 py-10 flex flex-col justify-between">
                    <div className="h-10 w-10 rounded-xl bg-white text-[#f66c3b] flex justify-center items-center"><LuCrown size={22}/></div>
                    <div className="font-semibold text-2xl">Unlock learning, career opportunities & success from X to 10X</div>
                    <div className="flex gap-5">
                        <div className="px-3 py-2 bg-white rounded-lg text-[#ffa58b] text-sm font-semibold">Industry Expert Session</div>
                        <div className="px-3 py-2 bg-white rounded-lg text-[#ffa58b] text-sm font-semibold">CXO Cafe</div>
                        <div className="px-3 py-2 bg-white rounded-lg text-[#ffa58b] text-sm font-semibold">Tech Conference</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LadderHome;
