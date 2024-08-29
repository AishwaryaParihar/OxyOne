import React from "react";

const Donate = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen mt-36 lg:justify-center mx-11">
      {/* 1st Item (Hidden on smaller screens) */}
      <div className="hidden shadow-2xl lg:block h-1/2  lg:w-[10%]"></div>

      {/* 2nd Item (Moves to the bottom on smaller screens) */}
      <div className="h-1/2 shadow-2xl bg-green-400 lg:w-[30%] order-2 lg:order-none"></div>

      {/* 3rd Item (Moves to the top on smaller screens) */}
      <div className="h-1/2 shadow-2xl lg:w-[40%] order-1 lg:order-none"></div>
    </div>
  );
};

export default Donate;
