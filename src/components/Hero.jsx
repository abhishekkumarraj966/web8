import React from "react";
import AppLayout from "./AppLayout";
import man from "./assites/logO.jpeg";

import what from "./assites/whatsapp.png";
import fac from "./assites/facebook.png";
import you from "./assites/YouTube.png";
import inst from "./assites/instagram.png";
import amo from "./assites/Amazon.png";
import big from "./assites/bigbasket.png";
import im from "./assites/Ebay.png";
import link from "./assites/linkedin.png";
import flip from "./assites/flipkart.png";
import Xi from "./assites/x.png";
import sw from "./assites/Swiggy (1).png";
import zo from "./assites/zomato.png";
import me from "./assites/indiamart.png";
import ju from "./assites/Justdial.png";
const Hero = () => {
  return (
    <AppLayout>
      <div className="mx-auto">
        <div className="mx-[33%] sm:mx-[37%] lg:mx-[42%] ">
          <img
            src={man}
            className="rounded-full h-[120px] w-[120px] sm:h-48 sm:w-48 object-cover mt-[1%]"
            alt="Description of image"
          />
        </div>
        <div className="">
            <h1 className=" my-4 text-center text-[20px] font-bold text-white">Big Sell</h1>
            <h2 className="text-center text-[18px] font-normal text-white pb-2">World’s Top <span className="text-[#AA6141]"> Mobile Store</span></h2>
        <h2 className="text-center text-[16px] font-normal text-white pb-10 mx-2 sm:mx-[15%]">“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “</h2>
       <h2 className="text-center text-[30px] font-extrabold text-[#AA6141] ">Search</h2>
        </div>
      <h2 className="text-center text-[25px]  text-white">You can also search us on</h2>
      </div>
        <div className=" ml-2 mt-2 md:hidden block   pb-10 sm:mx-[15%]">
          <div className="flex gap-2 pb-1 mx-[5%] sm:mx-2 sm:gap-4">
            <img
              src={what}
              alt="facebook logo"
              className="h-[40px] w-[38px]  "
            />
            <img src={fac} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img src={you} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img
              src={inst}
              alt="facebook logo"
              className="h-[40px] w-[38px] "
            />
            <img src={amo} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img src={big} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img src={Xi} alt="facebook logo" className="h-[40px] w-[38px]  " />
          </div>

          <div className="flex gap-2 pt-2 mx-[5%] sm:mx-2 sm:gap-4">
            <img src={im} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img
              src={link}
              alt="facebook logo"
              className="h-[40px] w-[38px] "
            />
            <img
              src={flip}
              alt="facebook logo"
              className="h-[40px] w-[38px] "
            />
            <img src={sw} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img src={zo} alt="facebook logo" className="h-[40px] w-[60px] " />
            <img src={me} alt="facebook logo" className="h-[40px] w-[60px] " />
            <img src={ju} alt="facebook logo" className="h-[40px] w-[60px] " />
          </div>
        </div>

        <div className="items-center    my-6  hidden md:block md:mx-[3%] lg:mx-[15%] ">
          <ul className="flex gap-[10px] lg:gap-[8px] px-2">
            <img src={what} className="h-[48px] " alt="whataap" />
            <img src={fac} alt="facbook" className="h-[43px]  mt-1" />
            <img src={inst} alt="instagram" className="h-[48px] mt-1" />
            <img src={you} alt="youtube" className="h-[48px]  mt-1" />
            <img src={flip} alt="youtube" className="h-[55px]" />
            <img src={big} alt="youtube" className="h-[50px]  mt-1" />
            <img src={im} alt="youtube" className="h-[48px]  mt-1 " />
            <img src={amo} alt="youtube" className="h-[38px]  mt-2" />
            <img src={Xi} alt="youtube" className="h-[48px]  mt-1 " />
            <img src={link} alt="youtube" className="h-[50px]  mt-1" />
            <img src={sw} alt="youtube" className="h-[48px] " />
            <img src={zo} alt="youtube" className="h-[55px] " />
            <img src={me} alt="youtube" className="h-[48px] " />
            <img src={ju} alt="youtube" className="h-[60px] " />
          </ul>
        </div>
    </AppLayout>
  );
};

export default Hero;
