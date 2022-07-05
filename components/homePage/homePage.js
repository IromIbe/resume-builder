/* eslint-disable @next/next/no-img-element */
import React from "react";
import { HomeCont } from "./homepage.style";
import Link from "next/dist/client/link";


function HomePage() {
  return (
    <HomeCont className=''>
      <div className='first-cont  bg-[#f2f5fa]   py-7 md:py-5 lg:py-0'>
        <div className=' item flex justify-evenly items-center mx-1'>
          <div className='image'>
            <img src="/Resume.svg" alt="" style={{minWidth: "280px"}}/>
          </div>
          <div className='more-info justify-self-start'>
            <h1 className='text-5xl font-bold leading-14 mb-6'>
              Try Our Professional <br /> Resume Builder Now!
            </h1>
            <p className='mb-6 max-w-sm tracking-sm leading-7 text-base text-gray-700'>
              Save time with our easy 3-step resume builder. No more writer’s
              block or formatting difficulties in Word. Rapidly make a perfect
              resume employers love.
            </p>
<Link href="/create-resume">
<button
              button
              className='text-white mb-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l from-blue-500 to-cyan-500 py-2 px-3 rounded-md text-base'
            >
              Create My Resume
            </button>
</Link>

          </div>
        </div>
      </div>
      <div className='second-cont bg-white flex flex-col py-8 text-center'>
      <p className="text-4xl font-semibold text-gray-800 mb-10 ">Where are they getting hired?</p>
      <div className="companies flex justify-around items-center flex-wrap  mb-12">
      <img src="/two.svg" alt="" />
<img src="/one.svg" alt="" />
<img src="/three.svg" alt="" />
<img src="/four.svg" alt="" />
<img src="/five.svg" alt="" />
      </div>
      <div>
<button className="text-white mb-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l from-blue-500 to-cyan-500  py-2 px-3 rounded-md text-base">Upgrade your resume</button>

      </div>
      </div>
    </HomeCont>
  );
}

export default HomePage;
