import React from "react";
import Header from "../Components/Header";
import HeroIMG from "../assets/HeroIMG.png";
import OurCourses from "../Components/OurCourses";
import WhyUs from "../Components/WhyUs";
import ProfileHighlights from "../Components/ProfileHighlights";
import LadderHome from "../Components/LadderHome";

const Home = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="flex justify-evenly items-center h-150 w-full bg-[#D1E4CF]">
        <div className="w-100">
          <p className="font-bold text-sm ml-1">Restricted by opportunities?</p>
          <h1 className="text-[#184F5B] font-bold leading-12 text-[2.5em] mb-4 mt-1">
            Update Get the tech career you deserve. Faster.
          </h1>
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-bold">128% average hike</span> via our
              placement cell
            </p>
            <p>
              <span className="font-bold">1.5 Lac+ learners</span> cracked top
              tech companies
            </p>
            <p>
              <span className="font-bold">1,400+ alumni in MAANG</span> & 103
              unicorn startups
            </p>
          </div>
        </div>
        <div>
          <img src={HeroIMG} alt="" />
        </div>
      </div>

      <OurCourses />

      <WhyUs/>

      <ProfileHighlights/>

      <LadderHome/>

    </div>
  );
};

export default Home;
