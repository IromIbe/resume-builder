/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { HeaderCont } from "./header.style";
import {FaBars} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';
import Link from "next/dist/client/link";


function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <HeaderCont className='bg-[#f8f9fa] py-4 md:px-10 px-2 flex justify-between items-center'>


      <div className='logo'>
        <h1 className='text-3xl font-medium text-[#0267f5] '>
          Resume <span className='font-extrabold '>Builder</span>
        </h1>
        </div>

         <ul className={isMobile ? "nav-links-mobile flex flex-col justify-center items-center leading-10 text-center" : 'flex flex-1 justify-between items-center ml-4'}>
         <div className={isMobile ? "flex flex-col" : "flex justify-between items-center"}>
          <li>
            <a href=''>Resume Templates</a>
          </li>
          <li>
            <a href=''>Resume Examples</a>
          </li>
          <li>
            <a href=''>Resources</a>
          </li>
       </div>
        <div className={isMobile ? "flex flex-col" : "flex justify-between items-center"}>
          <li>
          <Link href="/create-resume">
          <a href=''>Create Resume</a>
          </Link>
          </li>
          <li>
            <button className='text-[#0267f5] hover:text-white hover:bg-[#0267f5]'>
              Sign Up
            </button>
          </li>
          <li>
            <button className='text-white bg-[#0267f5] hover:bg-[#2c5b9c] '>
              Login
            </button>
          </li>
          </div>
        </ul>

  <button className="mobile-nav" onClick={() => setIsMobile(!isMobile)}>
      {isMobile ? <ImCross/> : <FaBars/>}
      </button>
    </HeaderCont>
  );
}

export default Header;
