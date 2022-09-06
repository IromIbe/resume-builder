import React from "react";
import { FooterCont } from "./footer.style";

const footerLinks = [
  [
    "Resume builder",
    "Resume templates",
    "Resume formatting",
    "Resources",
    "Resume writing guide",
  ],
  [
    "Professional resume",
    "Entry level resume",
    "intermediate resume",
    "student resume",
    "resume for job",
  ],
  ["Contact us", "Privacy policy", "Terms of use", "Careers"],
  ["Media kit", "Blog", "Careers", "Contact us", "About us"],
];

function Footer() {
  return (
    <FooterCont className='bg-[#3c4d58] py-12 px-12'>
      <div className='items mb-12'>
        {footerLinks.map((links, index) => (
          <div className='item' key={index}>
            {links.map((link, index) => (
              <div className='link' key={index}>
                <p className='text-white leading-8 hover:text-[#0267f5] cursor-pointer'>
                  {link}

                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <hr />
    </FooterCont>
  );
}

export default Footer;
