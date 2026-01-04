import React from 'react'
import ExProfile from '../assets/ExProfile.jpg'
import awscolor from '../assets/aws-color.svg'

const ProfileHighlights = () => {
  return (
    <div className='h-130 flex flex-col items-center justify-center gap-10'>
      <div className='font-bold text-2xl'>Our Students at top tech companies</div>
      <div className='h-80 w-300 max-w-screen flex items-center gap-10 overflow-scroll no-scrollbar px-5'>
        <div className='h-70 w-50 shadow-2xl rounded-2xl flex flex-col items-center justify-evenly p-5 shrink-0'>
            <div className='h-30 w-30 rounded-full overflow-hidden'>
                <img src={ExProfile} alt="" />
            </div>
            <img className='w-20' src={awscolor} alt="" />
            <p>Service to product</p>
        </div>
        <div className='h-70 w-50 shadow-2xl rounded-2xl flex flex-col items-center justify-evenly p-5 shrink-0'>
            <div className='h-30 w-30 rounded-full overflow-hidden'>
                <img src={ExProfile} alt="" />
            </div>
            <img className='w-20' src={awscolor} alt="" />
            <p>Service to product</p>
        </div>
        <div className='h-70 w-50 shadow-2xl rounded-2xl flex flex-col items-center justify-evenly p-5 shrink-0'>
            <div className='h-30 w-30 rounded-full overflow-hidden'>
                <img src={ExProfile} alt="" />
            </div>
            <img className='w-20' src={awscolor} alt="" />
            <p>Service to product</p>
        </div>
        <div className='h-70 w-50 shadow-2xl rounded-2xl flex flex-col items-center justify-evenly p-5 shrink-0'>
            <div className='h-30 w-30 rounded-full overflow-hidden'>
                <img src={ExProfile} alt="" />
            </div>
            <img className='w-20' src={awscolor} alt="" />
            <p>Service to product</p>
        </div>
        <div className='h-70 w-50 shadow-2xl rounded-2xl flex flex-col items-center justify-evenly p-5 shrink-0'>
            <div className='h-30 w-30 rounded-full overflow-hidden'>
                <img src={ExProfile} alt="" />
            </div>
            <img className='w-20' src={awscolor} alt="" />
            <p>Service to product</p>
        </div>
        <div className='h-70 w-50 shadow-2xl rounded-2xl flex flex-col items-center justify-evenly p-5 shrink-0'>
            <div className='h-30 w-30 rounded-full overflow-hidden'>
                <img src={ExProfile} alt="" />
            </div>
            <img className='w-20' src={awscolor} alt="" />
            <p>Service to product</p>
        </div>
        <div className='h-70 w-50 shadow-2xl rounded-2xl flex flex-col items-center justify-evenly p-5 shrink-0'>
            <div className='h-30 w-30 rounded-full overflow-hidden'>
                <img src={ExProfile} alt="" />
            </div>
            <img className='w-20' src={awscolor} alt="" />
            <p>Service to product</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileHighlights
