import React from "react";

export default ({ mode, title, desc, color, bgColor, bgTun }) => {
  return (
    <div>
      <div
        className={`flex justify-between py-3 border-b-2 ${
          mode ? "border-[#33334B]" : "border-[#EEEEEE]"
        }`}
      >
        <div className="">
          <h1
            className={
              mode
                ? "text-[#D6D7E3] font-semibold tracking-wider inter text-base"
                : "text-[#171717] font-semibold tracking-wider inter text-base"
            }
          >
            {title}
          </h1>
          <h2
            className={`${
              mode ? "text-[#70708A]" : "text-[#B9B9B9]"
            } text-sm font-normal inter `}
          >
            {desc}
          </h2>
        </div>
        <div className="d">
          <h2 className="font-medium text-gray-400 text-base pl-1">8.2k</h2>
          <h2
            className={`rounded`}
            style={{ color: color, backgroundColor: mode ? bgTun : bgColor }}
          >
            +472
          </h2>
        </div>
      </div>
    </div>
  );
};
