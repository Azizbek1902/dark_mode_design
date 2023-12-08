import React from "react";
import profile from "../../../assets/Faces.svg";

export default ({ mode }) => {
  return (
    <div>
      <div className="px-4">
        <div
          className={`${
            mode ? "bg-[#2D2D39]" : "bg-[#1970F8]"
          } flex gap-2 p-2 items-center w-full rounded-md`}
        >
          <img src={profile} alt="" className="rounded-full h-16" />
          <div className="w-full">
            <h1 className="text-white text-[18px] pb-0 font-bold">Nafisa Sh.</h1>
            <h2
              className={`${
                mode ? "text-[#96969C]" : "text-[#8CB8FC]"
              } text-sm pt-0 font-medium`}
            >
              Support manager
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
