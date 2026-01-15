import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import RightSidebar from '../Components/RightSidebar'
import MainCourseCard from '../Components/MainCourseCard'
import UIUXLogo from "../assets/UIUXLogo.png";

const Bookmarks = () => {
    const MainCourseCardData = {
        img: UIUXLogo,
        title: "UI/UX",
        lessons: 30,
        quiz: 50,
        assignments: 4,
        percent: 65
      };
  return (
    <div className="bg-white">
      <Header user={true} />
      <div className="flex justify-between">
        <Sidebar />
        <div className="flex flex-col gap-6 py-10">
          <div>
            <h1 className="text-2xl font-semibold mb-4">Saved Courses</h1>
            <div className="flex gap-17 flex-wrap w-230">
              <MainCourseCard data={MainCourseCardData}/>
              <MainCourseCard data={MainCourseCardData}/>
              <MainCourseCard data={MainCourseCardData}/>
              <MainCourseCard data={MainCourseCardData}/>
              <MainCourseCard data={MainCourseCardData}/>
            </div>
          </div>
        </div>
        <RightSidebar />
      </div>
    </div>
  )
}

export default Bookmarks
