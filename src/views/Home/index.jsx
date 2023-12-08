import { AiOutlineFile } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FiFeather } from "react-icons/fi";
import { BiBarChart } from "react-icons/bi";
import React from "react";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import SideBar from "../../components/SideBar";
import Card from "../../components/container/Card";
import Chart from "../../components/container/Chart";
import Footer from "../../components/Footer";
import Categories from "../../components/container/Categories";
import Table from "../../components/container/Table";
import CustomChart from "../../components/container/CustomChart";

function Home() {
  const mode = useSelector((state) => state.modeReducer.darkMode);
  const data = [
    {
      id: 1,
      num: "1478 286",
      title: "visits",
      foiz: 4.07,
      icon: <BiBarChart size={29} />,
      color: "#2F49D1",
      colorT: "#2F49D1",
      bgColor: "#242645",
      bgColorT: "#EBEDFB",
    },
    {
      id: 2,
      num: "478 520",
      title: "articles",
      foiz: 0.24,
      icon: <AiOutlineFile size={29} />,
      color: "#FFB648",
      colorT: "#FFB648",
      bgColor: "#383137",
      bgColorT: "#FFF8ED",
    },
    {
      id: 3,
      num: "154 872",
      title: "subscribtions",
      foiz: -1.07,
      icon: <HiOutlineMail size={29} />,
      color: "#5F2EEA",
      colorT: "#5F2EEA",
      bgColor: "#282447",
      bgColorT: "#EFEBFD",
    },
    {
      id: 4,
      num: "167",
      title: "authors",
      foiz: 0.0,
      icon: <FiFeather size={29} />,
      color: "#4BDE97",
      colorT: "#4BDE97",
      bgColorT: "#EDFCF5",
      bgColor: "#26353F",
    },
  ];
  return (
    <div>
      <div className="flex justify-center w-full h-full">
        <div className="w-[18%]">
          <div
            className={`w-full h-full ${
              mode ? "bg-[#161623]" : "bg-[#0061F7]"
            }`}
          >
            <SideBar />
          </div>
        </div>
        <div className="w-[82%]">
          <div
            className={` ${
              mode ? "bg-[#11111D]" : "bg-[#F0F2FA]"
            } w-full h-full relative`}
          >
            <Navbar />
            <div className="flex justify-center">
              <div className="pt-4 w-[97%]">
                <h1
                  className={`${
                    mode ? "text-[#D6D7E3]" : "text-[#171717]"
                  } text-xl font-bold tracking-wider`}
                >
                  Dashboard
                </h1>
                <div className="pt-4 grid grid-cols-4 gap-5">
                  {data.map((item) => {
                    return (
                      <div key={item.id}>
                        <Card
                          icon={item.icon}
                          title={item.title}
                          num={item.num}
                          color={item.color}
                          colorT={item.colorT}
                          bgColor={item.bgColor}
                          foiz={item.foiz}
                          bgColorT={item.bgColorT}
                          mode={mode}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex w-full mt-5 gap-2 ">
                  <div className="w-[75%] ">
                    <div
                      className={`${
                        mode ? "bg-[#222235]" : "bg-white"
                      } rounded-md p-5`}
                    >
                      <div className="flex mb-5 justify-between">
                        <div className="">
                          <h1
                            className={
                              mode
                                ? "text-white font-semibold"
                                : "text-black font-semibold"
                            }
                          >
                            Visitors statictics
                          </h1>
                          <h2 className="text-gray-400 font-medium">
                            Nov - July
                          </h2>
                        </div>
                        <div className="flex gap-10">
                          <div className="">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-[#5D46C2]"></div>
                              <h1 className="text-gray-400 font-medium">
                                Last 6 months
                              </h1>
                            </div>
                            <h2
                              className={
                                mode
                                  ? "text-white pl-5 pt-1 font-medium"
                                  : "text-black pl-5 pt-1 font-medium"
                              }
                            >
                              475 273
                            </h2>
                          </div>
                          <div className="">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-[#4BDE97]"></div>
                              <h1 className="text-gray-400 font-medium">
                                Previous
                              </h1>
                            </div>
                            <h2
                              className={
                                mode
                                  ? "text-white pl-5 pt-1 font-medium"
                                  : "text-black pl-5 pt-1 font-medium"
                              }
                            >
                              782 396
                            </h2>
                          </div>
                        </div>
                      </div>
                      <Chart />
                    </div>
                    <Table mode={mode} />
                  </div>
                  <div className="w-[25%] pl-4">
                    <div className="bg-[#2F49D1] relative w-full rounded-md h-64 overflow-hidden pt-28">
                      <div className="flex justify-between absolute top-4 px-4 w-full items-center">
                        <div className="">
                          <h1 className="text-white font-bold tracking-wider text-xl">
                            New Customers
                          </h1>
                          <h2 className="text-base text-white opacity-70 inter font-normal">
                            28 Daily Avg.
                          </h2>
                        </div>
                        <h1 className="text-xl font-bold text-white inter">
                          +958
                        </h1>
                      </div>
                      <div className="w-[400px] -mt-8 h-[30vh] -ml-[60px]">
                        <CustomChart />
                      </div>
                    </div>
                    <div className="mt-5">
                      <Categories mode={mode} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full">
              <Footer mode={mode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
