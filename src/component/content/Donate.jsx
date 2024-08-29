import React from "react";
import QRscan from '../../assets/upiQR.png'

const Donate = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen mt-36 lg:justify-center mx-11">
      {/* 1st Item (Hidden on smaller screens) */}
      <div className="hidden shadow-2xl lg:block lg:w-[10%]"></div>

      {/* 2nd Item (Moves to the bottom on smaller screens) */}
      <div className="shadow-2xl bg-green-400 lg:w-[30%] order-2 lg:order-none">
      Banking details 
Account holder name 
OXYVAN PARYAWARAN SANRAKSHAN SAMITI
Bank Name SBI
A/C No. 00000043097813492
IFC Code: SBIN0001308
Branch: Main Branch New Market Bhopal. m.p
      </div>

      {/* 3rd Item (Moves to the top on smaller screens) */}
      <div className=" shadow-2xl lg:w-[40%] order-1 lg:order-none">
      <img className="" src={QRscan} alt="" />
      </div>
    </div>
  );
};

export default Donate;
