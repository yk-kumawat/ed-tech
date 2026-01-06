import React from "react";
import Header from "../Components/Header";
import HeroIMG from "../assets/HeroIMG.png";
import OurCourses from "../Components/OurCourses";
import WhyUs from "../Components/WhyUs";
import ProfileHighlights from "../Components/ProfileHighlights";
import LadderHome from "../Components/LadderHome";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="h-screen overflow-y-auto no-scrollbar">
      <Header user={false}/>

      {/* Hero Section */}
      <div className="md:flex-row flex flex-col justify-evenly items-center h-150 w-full bg-[#D1E4CF]">
        <div className="w-100 max-w-screen xs:p-0 p-5">
          <p className="font-bold text-sm ml-1">Restricted by opportunities?</p>
          <h1 className="text-[#184F5B] font-bold lg:leading-12 leading-10 lg:text-[2.5em] text-[1.8em] mb-4 mt-1">
            Get the tech career you deserve. Faster.
          </h1>
          <div className="flex flex-col gap-2 lg:text-[1em] text-sm">
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
          <img className="lg:h-100 md:h-70 h-60" src={HeroIMG} alt="" />
        </div>
      </div>

      <OurCourses />

      <WhyUs/>

      <ProfileHighlights/>

      <LadderHome/>

      <Footer/>

    </div>
  );
};

export default Home;
