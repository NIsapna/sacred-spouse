import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

export const Hero = () => {
  return (
    <>
      <section className="relative matrimonial_Image" id="HERO">
        <Navbar />
        <div className="custom_container">
          <div className="relative z-10 flex flex-col top-[0px] h-full md:px-4  items-center py-[20px]">
            <div className="text-left">
              <p className='whitespace-nowrap text-left font-[genkaimincho] font-normal text-[#7a1a4a] lg:leading-[normal] text-[20px] sm:text-[25px] md:text-[25px] 2xl:text-[35px]'>
                Presents
              </p>
              <div className="text-left relative">
                <h1 id="MATRIMONIAL_SERVICE" className="text-left font-[genkaimincho] font-normal text-black text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] md:leading-[normal]">
                  SACREDSPOUSE
                </h1>
                <svg className="Line_1" viewBox="0 0 680 2.5">
                  <path id="Line_1" d="M 0 2.5 L 680 0" >
                  </path>
                </svg>
              </div>
              <h2 id="SACREDSPOUSE" className="whitespace-nowrap text-center font-[genkaimincho] font-normal text-[#841c32] lg:leading-[normal] 2xl:leading-[62px]  text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px]">
                MATRIMONIAL SERVICE
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
