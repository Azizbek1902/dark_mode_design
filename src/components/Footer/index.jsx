import React from "react";

export default ({ mode }) => {
  return (
    <div className="mt-5">
      <div
        className={
          mode ? "w-full h-[1px] bg-[#1B1B2B]" : "w-full h-[1px] bg-[#E0E1EA]"
        }
      ></div>
      <div className="flex justify-center">
        <div className="py-4 flex justify-between w-[97%]">
          <h1 className="text-sm text-gray-400 font-medium">
            2021 © Elegant Dashboard - elegant-dashboard.com
          </h1>
          <div className="flex gap-5">
            <h1 className="text-sm text-gray-400 font-medium">About</h1>
            <h1 className="text-sm text-gray-400 font-medium">Support</h1>
            <h1 className="text-sm text-gray-400 font-medium">Purchase</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
