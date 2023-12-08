import { BiTrendingDown } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";
import React from "react";

export default ({
  icon,
  num,
  title,
  foiz,
  color,
  bgColor,
  colorT,
  bgColorT,
  mode,
}) => {
  return (
    <div>
      <div
        className={`${
          mode ? "bg-[#222235]" : "bg-white"
        } rounded-md px-4 w-full pt-11 pb-5`}
      >
        <div className="flex items-start gap-3">
          <button
            className={`p-4 rounded-full`}
            style={{
              color: mode ? colorT : color,
              backgroundColor: mode ? bgColor : bgColorT,
            }}
          >
            {icon}
          </button>
          <div className="">
            <h1
              className={
                mode
                  ? "text-white font-medium inter text-lg"
                  : "text-black font-medium inter text-lg"
              }
            >
              {num}
            </h1>
            <h2
              className={
                mode
                  ? "text-gray-400 font-medium inter text-sm"
                  : "text-gray-400 font-medium inter text-sm"
              }
            >
              Total {title}
            </h2>
            <div className="flex gap-3">
              <h2
                className={`${
                  foiz === 0.0
                    ? "text-[#FFB648]"
                    : foiz > 0.0
                    ? "text-[#4BDE97]"
                    : "text-[#F26464]"
                } flex items-center`}
              >
                {foiz === 0.0 ? (
                  <>
                    <BiTrendingUp color="#FFB648" size={18} />
                  </>
                ) : foiz > 0.0 ? (
                  <>
                    <BiTrendingUp color="#4BDE97" size={18} />
                  </>
                ) : (
                  <>
                    <BiTrendingDown color="#F26464" size={18} />
                  </>
                )}
                {foiz} %
              </h2>

              <h2
                className={
                  mode
                    ? "text-gray-400 font-medium text-sm"
                    : "text-gray-400 font-medium text-sm"
                }
              >
                Last month
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
