import React from "react";
import Header from "./components/Header";
import Footer from "./assets/Components/Footer";
import Footer2 from "./assets/Components/Footer2";

function Layout({ children }) {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="h-[70vh]">{children}</div>
      <div>
        <Footer />
        <Footer2 />
      </div>
    </div>
  );
}

export default Layout;
