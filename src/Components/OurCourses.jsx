import React, { useState } from "react";
import CourseCard from "./CourseCard";
import CardIMG from "../assets/CardIMG.png";

const OurCourses = () => {
  const cardData = {
    title: "PG Certification in Data Analytics with GenAI",
    subTitle: "IIT Mandi - TIH (Technology & Innovation Hub)",
    certification: true,
    duration: "6 months",
    img: CardIMG,
  };

  const [active, setActive] = useState("All");

  const navStyle = (name) =>
    `px-5 py-1 border rounded-full cursor-pointer hover:bg-gray-100
     ${active === name ? "text-black border-black" : " border-[#C4C4C4]"}`;

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <h1 className="text-[#C4C4C4] font-bold sm:text-[3em] text-[2.2em] my-5">
        OUR COURSES
      </h1>
      <div className="lg:w-260 w-[90%] flex flex-col gap-6">
        <h2 className="font-semibold text-xl lg:block hidden">For working professionals</h2>

        {/* Nab Bar */}
        <div className="md:flex-row flex flex-col lg:justify-start justify-center gap-5 text-[#C4C4C4] items-center">
          <div className="flex gap-5">
            <div onClick={() => setActive("All")} className={navStyle("All")}>
              All
            </div>
            <div
              onClick={() => setActive("Software Development")}
              className={navStyle("Software Development")}
            >
              Software Development
            </div>
          </div>
          <div className="flex gap-5">
            <div
              onClick={() => setActive("Generative AI")}
              className={navStyle("Generative AI")}
            >
              Generative AI
            </div>
            <div
              onClick={() => setActive("Data Analytics")}
              className={navStyle("Data Analytics")}
            >
              Data Analytics
            </div>
          </div>
        </div>

        <div className="border-t border-[#C4C4C4]"></div>

        {/* Cards Section */}
        <div className="relative w-full max-w-screen">
          {active === "All" && (
            <div className="absolute top-0 left-0 w-260 max-w-screen flex gap-5 overflow-x-scroll no-scrollbar">
              <CourseCard data={cardData} />
              <CourseCard data={cardData} />
              <CourseCard data={cardData} />
              <CourseCard data={cardData} />
            </div>
          )}
          {active === "Data Analytics" && (
            <div className="absolute top-0 left-0 w-260 max-w-screen flex gap-5 overflow-x-scroll no-scrollbar">
              <CourseCard data={cardData} />
              <CourseCard data={cardData} />
              <CourseCard data={cardData} />
            </div>
          )}
          {active === "Generative AI" && (
            <div className="absolute top-0 left-0 w-260 max-w-screen flex gap-5 overflow-x-scroll no-scrollbar">
              <CourseCard data={cardData} />
              <CourseCard data={cardData} />
            </div>
          )}
          {active === "Software Development" && (
            <div className="absolute top-0 left-0 w-260 max-w-screen flex gap-5 overflow-x-scroll no-scrollbar">
              <CourseCard data={cardData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
