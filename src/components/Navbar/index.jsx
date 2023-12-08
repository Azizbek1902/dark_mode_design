import { BiChevronDown } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { darkMode } from "../../redux/actions/mode";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import profile from "../../assets/People.svg";

function Navbar() {
  const mode = useSelector((state) => state.modeReducer.darkMode);
  const dispatch = useDispatch();
  const handleChangeMode = () => {
    dispatch(darkMode(!mode));
  };
  return (
    <div>
      <div
        className={`flex justify-center w-full ${
          mode ? "bg-[#161624]" : "bg-[#FFF]"
        }`}
      >
        <div className="w-[97%] py-4 items-center flex justify-between">
          <div className="flex">
            <button
              className={` rounded-s-md px-3 ${
                mode ? "text-white bg-[#222235]" : "text-gray-400 bg-[#EFF0F6]"
              }`}
            >
              <BsSearch />
            </button>
            <input
              type="text"
              placeholder="Enter keywords ...."
              className={`${
                mode
                  ? "bg-[#222235] placeholder:text-white"
                  : "bg-[#EFF0F6]"
              }  py-2 pr-10 font-medium  outline-none rounded-e-md tracking-wider`}
            />
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <h1 className="text-base font-medium text-gray-400">EN</h1>
              <BiChevronDown className="text-gray-400" size={26} />
            </div>
            <button
              className={`${
                mode ? "text-white bg-[#222235]" : "bg-[#EFF0F6] text-gray-400"
              } p-2 rounded-full`}
              onClick={() => handleChangeMode()}
            >
              <BsSunFill size={24} />
            </button>
            <button
              className={`${
                mode ? "text-white bg-[#222235]" : "bg-[#EFF0F6] text-gray-400"
              } p-2 rounded-full relative`}
            >
              <FaBell size={25} />
              <div className="bg-[#F26464] absolute top-2 right-2 border-2 border-white w-3 h-3 rounded-full"></div>
            </button>
            <button
              className={`${
                mode ? "text-white bg-[#222235]" : "bg-[#EFF0F6] text-gray-400"
              } rounded-full`}
            >
              <img src={profile} className="rounded-full" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
