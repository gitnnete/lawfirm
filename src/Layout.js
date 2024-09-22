import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from "./Components/Constants/Navbar";
import Footer from "./Components/Constants/Footer";

const Layout = () => {
  return (
    <>
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Layout;
