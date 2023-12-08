import { BsThreeDots } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import person from "../../../assets/image.png";
import person1 from "../../../assets/table/01.png";
import person2 from "../../../assets/table/02.png";
import person3 from "../../../assets/table/03.png";
import person4 from "../../../assets/table/04.png";
import shaxs from "../../../assets/table/avatars.png";
import shaxs1 from "../../../assets/table/05.png";
import shaxs2 from "../../../assets/table/06.png";
import shaxs3 from "../../../assets/table/07.png";
import shaxs4 from "../../../assets/table/08.png";

export default ({ mode }) => {
  const [data, setData] = useState([]);
  const dataArray = [
    {
      id: 1,
      img: person,
      title: " The Fun Side of Hitting Reset",
      person: shaxs,
      name: "Madina Ikramova",
      status: false,
      date: "12.32.3211",
      cheched: false,
    },
    {
      id: 2,
      img: person1,
      title: " The Fun Side of Hitting Reset",
      person: shaxs1,
      name: "Madina Ikramova",
      status: false,
      date: "12.32.3211",
      cheched: false,
    },
    {
      id: 3,
      img: person2,
      title: " The Fun Side of Hitting Reset",
      person: shaxs2,
      name: "Madina Ikramova",
      status: true,
      date: "12.32.3211",
      cheched: false,
    },
    {
      id: 4,
      img: person3,
      title: " The Fun Side of Hitting Reset",
      person: shaxs3,
      name: "Madina Ikramova",
      status: true,
      date: "12.32.3211",
      cheched: false,
    },
    {
      id: 5,
      img: person4,
      title: " The Fun Side of Hitting Reset",
      person: shaxs4,
      name: "Madina Ikramova",
      status: true,
      date: "12.32.3211",
      cheched: false,
    },
  ];
  useEffect(() => {
    setData(dataArray);
  }, []);
  const handleChange = (e, ind) => {
    let newData = data.filter((item, index) => index == ind);
    let newObj = newData[0];
    newObj.cheched = newObj.cheched ? false : true;
    data.splice(ind, 1, newObj);
    setData([...data]);
  };
  const handleChange2 = () => {
    const newData = [];
    for (let i = 0; i < data.length; i++) {
      data[i].cheched = data[i].cheched ? false : true;
      newData.push(data[i]);
    }
    setData([...newData]);
  };
  return (
    <div className="mt-5">
      <div>
        <div
          className={`flex ${
            mode ? " border-b-2 pb-3 border-[#2D2D45] bg-[#222235]" : ""
          } pb-5 py-5 items-center justify-between`}
        >
          <div className="flex gap-4 pl-4">
            <input type="checkbox" onChange={() => handleChange2()} />
            <h1 className={`${mode ? "text-white" : "text-black"}`}>
              Thumbnail
            </h1>
            <h1 className={`${mode ? "text-white" : "text-black"}`}>Title</h1>
          </div>
          <div className="gap-36 flex pr-4">
            <h1 className={`${mode ? "text-white" : "text-black"}`}>Author</h1>
            <div className="flex gap-10">
              <h1 className={`${mode ? "text-white" : "text-black"}`}>
                Status
              </h1>
              <h1 className={`${mode ? "text-white" : "text-black"}`}>Date</h1>
              <h1 className={`${mode ? "text-white" : "text-black"}`}>
                Action
              </h1>
            </div>
          </div>
        </div>
        {data.map((item, index) => {
          return (
            <div
              className={`flex py-4  pb-3 items-center justify-between ${
                mode
                  ? item.cheched
                    ? "bg-[#3C3C52]"
                    : "bg-[#222235]"
                  : item.cheched
                  ? "bg-[#F2F6FF]"
                  : "bg-white"
              }`}
              key={item.id}
            >
              <div className="flex items-center gap-4 pl-4">
                <input
                  type="checkbox"
                  checked={item.cheched}
                  onChange={(e) => handleChange(e, index)}
                />
                <h1 className={`${mode ? "text-white" : "text-black"}`}>
                  <img src={item.img} alt="" className="rounded" />
                </h1>
                <h1 className={`${mode ? "text-white" : "text-black"}`}>
                  {item.title}
                </h1>
              </div>
              <div className="gap-7 items-center flex pr-4">
                <div
                  className={`${mode ? "text-white" : "text-black"} flex gap-2`}
                >
                  <img src={item.person} className="rounded-full" alt="" />
                  <h1
                    className={`${
                      mode ? "text-white pt-[2px]" : "text-black pt-[2px]"
                    }`}
                  >
                    {item.name}
                  </h1>
                </div>
                <div className="flex justify-end gap-4">
                  <h1 className={`${mode ? "text-white" : "text-black"}`}>
                    <button
                      className={`${
                        mode
                          ? item.cheched
                            ? "bg-[#3F4363] text-[#5887FF]"
                            : "bg-[#282C49] text-[#5887FF]"
                          : item.status
                          ? "bg-[#E3EBFF] text-[#5887FF]"
                          : "bg-[#FFF7EB] text-[#FFB648]"
                      } rounded-full  w-24`}
                    >
                      {item.status ? "Active" : "Pending"}
                    </button>
                  </h1>
                  <h1 className={`${mode ? "text-white" : "text-black"}`}>
                    {item.date}
                  </h1>
                  <h1
                    className={`${
                      mode ? "pt-1 text-white" : "pt-1 text-black"
                    }`}
                  >
                    <BsThreeDots />
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
