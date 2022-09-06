/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { HeaderCont } from "./header.style";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Link from "next/dist/client/link";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [resume, setResume] = useState({})



 useEffect(() => {
    // Perform localStorage action
     const item = localStorage.getItem('allData')
     setResume( item)
  }, [])

  return (
    <HeaderCont className='bg-[#f8f9fa] py-4 md:px-10 px-2 flex justify-between items-center'>
      <div className='logo'>
        <Link href='/'>
          <h1 className='text-3xl font-medium text-[#0267f5] cursor-pointer'>
            Resume <span className='font-extrabold '>Builder</span>
          </h1>
        </Link>
      </div>

      <ul
        className={
          isMobile
            ? "nav-links-mobile flex flex-col justify-center items-center leading-10 text-center"
            : "flex flex-1 justify-between items-center ml-4"
        }
      >
        <div
          className={
            isMobile ? "flex flex-col" : "flex justify-between items-center"
          }
        >
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
        <div
          className={
            isMobile ? "flex flex-col" : "flex justify-between items-center"
          }
        >
          <li>
            {resume ? (
              <Link href='/view-resume'>
                <a href='' className='text-[#0267f5]'>
                  view Resume
                </a>
              </Link>
            ) : (
              <Link href='/create-resume'>
                <a href=''>Create Resume</a>
              </Link>
            )}
          </li>
          <li>
            <button className='text-[#0267f5] font-semibold py-2 hover:text-white hover:bg-gradient-to-l from-blue-500 to-cyan-500  w-20'>
              Sign Up
            </button>
          </li>
          <li>
            <button className='text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l from-blue-500 to-cyan-500 py-2 px-3 rounded-md w-20'>
              Login
            </button>
          </li>
        </div>
      </ul>

      <button className='mobile-nav' onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <ImCross /> : <FaBars />}
      </button>
    </HeaderCont>
  );
}

export default Header;
