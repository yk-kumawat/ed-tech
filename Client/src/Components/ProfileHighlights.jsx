import React from 'react'
import ExProfile from '../assets/ExProfile.jpg'
import awscolor from '../assets/aws-color.svg'

const ProfileHighlights = () => {
  return (
    <div className='sm:h-130 h-100 flex flex-col items-center justify-center gap-10'>
      <div className='font-bold sm:text-2xl xs:text-xl text-lg'>Our Students at top tech companies</div>
      <div className='sm:h-80 h-60 w-300 max-w-screen flex items-center sm:gap-10 gap-7 overflow-scroll no-scrollbar px-5'>
        <div className='sm:h-70 h-55 sm:w-50 w-40 shadow-2xl rounded-2xl flex flex-col items-center justify-evenly p-5 shrink-0'>
            <div className='sm:h-30 h-20 sm:w-30 w-20 rounded-full overflow-hidden'>
                <img src={ExProfile} alt="" />
            </div>
            <img className='SM:w-20 w-12' src={awscolor} alt="" />
            <p className='sm:text-lg text-sm'>Service to product</p>
        </div>
        <div className='sm:h-70 h-55 sm:w-50 w-40 shadow-2xl rounded-2xl flex flex-col items-center justify-evenly p-5 shrink-0'>
            <div className='sm:h-30 h-20 sm:w-30 w-20 rounded-full overflow-hidden'>
                <img src={ExProfile} alt="" />
            </div>
            <img className='SM:w-20 w-12' src={awscolor} alt="" />
            <p className='sm:text-lg text-sm'>Service to product</p>
        </div>
        <div className='sm:h-70 h-55 sm:w-50 w-40 shadow-2xl rounded-2xl flex flex-col items-center justify-evenly p-5 shrink-0'>
            <div className='sm:h-30 h-20 sm:w-30 w-20 rounded-full overflow-hidden'>
                <img src={ExProfile} alt="" />
            </div>
            <img className='SM:w-20 w-12' src={awscolor} alt="" />
            <p className='sm:text-lg text-sm'>Service to product</p>
        </div>
        <div className='sm:h-70 h-55 sm:w-50 w-40 shadow-2xl rounded-2xl flex flex-col items-center justify-evenly p-5 shrink-0'>
            <div className='sm:h-30 h-20 sm:w-30 w-20 rounded-full overflow-hidden'>
                <img src={ExProfile} alt="" />
            </div>
            <img className='SM:w-20 w-12' src={awscolor} alt="" />
            <p className='sm:text-lg text-sm'>Service to product</p>
        </div>
        <div className='sm:h-70 h-55 sm:w-50 w-40 shadow-2xl rounded-2xl flex flex-col items-center justify-evenly p-5 shrink-0'>
            <div className='sm:h-30 h-20 sm:w-30 w-20 rounded-full overflow-hidden'>
                <img src={ExProfile} alt="" />
            </div>
            <img className='SM:w-20 w-12' src={awscolor} alt="" />
            <p className='sm:text-lg text-sm'>Service to product</p>
        </div>
        <div className='sm:h-70 h-55 sm:w-50 w-40 shadow-2xl rounded-2xl flex flex-col items-center justify-evenly p-5 shrink-0'>
            <div className='sm:h-30 h-20 sm:w-30 w-20 rounded-full overflow-hidden'>
                <img src={ExProfile} alt="" />
            </div>
            <img className='SM:w-20 w-12' src={awscolor} alt="" />
            <p className='sm:text-lg text-sm'>Service to product</p>
        </div>
        <div className='sm:h-70 h-55 sm:w-50 w-40 shadow-2xl rounded-2xl flex flex-col items-center justify-evenly p-5 shrink-0'>
            <div className='sm:h-30 h-20 sm:w-30 w-20 rounded-full overflow-hidden'>
                <img src={ExProfile} alt="" />
            </div>
            <img className='SM:w-20 w-12' src={awscolor} alt="" />
            <p className='sm:text-lg text-sm'>Service to product</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileHighlights
