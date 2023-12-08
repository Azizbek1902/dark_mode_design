import { BiChevronDown } from "react-icons/bi";
import React from "react";

export default ({ title, icon, select, active, notitle, num, mode }) => {
  return (
    <div>
      <div className="w-full pl-4">
        <div
          className={`flex ${active ? "justify-between items-center pr-[2px]" : "gap-4"}`}
        >
          {notitle ? (
            <>
              <h1 className="pb-7 text-[15px] text-white opacity-[0.6] font-normal tracking-wider">
                SYSTEM
              </h1>
            </>
          ) : (
            <div
              className={`flex gap-2 ${
                select || num ? "justify-between items-center w-full pr-4" : ""
              }`}
            >
              <div className="flex pb-7 gap-4">
                <img src={icon} alt="" />
                <h1
                  className={`text-white font-semibold ${
                    active ? "" : "opacity-[0.6]"
                  }`}
                >
                  {title}
                </h1>
              </div>
              {select ? (
                <>
                  <div
                    className={`${
                      mode ? "bg-[#454550]" : "bg-[#3381F9]"
                    } text-white mb-5 font-semibold text-sm text-center p-[1px] rounded-full`}
                  >
                    <BiChevronDown
                      size={23}
                      color={mode ? "#8B8B92" : "#80B0FB"}
                    />
                  </div>
                </>
              ) : num ? (
                <>
                  <div className="bg-[#F26464] mb-5 text-white font-semibold text-sm text-center px-[8px] py-[1px] rounded-full">
                    7
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          )}
          {active ? <div className="bg-white w-1 rounded h-8"></div> : <></>}
        </div>
      </div>
    </div>
  );
};
