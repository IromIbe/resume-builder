import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { LayoutCont } from "./layout.style";
function Layout({ children }) {
  return (
    <LayoutCont className=''>
      <Header />
      {children}
      <div className='footer'>
        {" "}
        <Footer />
      </div>
    </LayoutCont>
  );
}

export default Layout;
