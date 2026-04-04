// import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const HomeWrapper = () => {
  return (
    <div className="bg-black  text-white ">
      <Header />
      <main className="pt-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeWrapper;
