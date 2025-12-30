import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const LadderHome = () => {
  return (
    <div className=''>
        {/* Section 1 */}
      <div className='relative bg-[#141414] flex justify-center gap-10'>
        <div className='z-10 absolute top-22 left-72 h-8 w-8 bg-white rounded-sm flex justify-center items-center'>
            <div className='relative'>
                <FaHeart size={22}/>
                <FaCheck className='absolute top-1/4 left-1/3 text-[#ffc147]' size={10}/>
            </div>
        </div>
        <div className='relative h-130 border-r border-dashed border-[#ffc147]'>
            <div className='absolute top-0 h-50 border-l-2 border-[#ffc147]'></div>
        </div>
        <div className='text-[#2c2c2c] flex flex-col justify-evenly py-15'>
            <p className='relative text-white'>Always available when you get stuck</p>
            <h2 className='text-[#ffc147] text-5xl font-bold'>Resolve doubts any time through chat,<br />voice notes or calling.</h2>
            <h4 className='text-4xl font-bold'>500+ dedicated Teaching Assistants to <br /> resolve your doubts quickly.</h4>
            <h4 className='text-4xl font-bold'>5/5 rating for 90% doubt resolutions.</h4>
        </div>
      </div>
        {/* Section 2 */}
      <div className='flex justify-center gap-10'>
        <div className='relative h-130 border-r border-dashed border-[#ffc147]'>
            <div className='absolute top-0 h-50 border-l-2 border-[#ffc147]'></div>
        </div>
        <div>
            <p>1:1 Mentorship sessions</p>
            <p>Personalised guidance to prepare you for your interview needs</p>
        </div>
      </div>
    </div>
  )
}

export default LadderHome
