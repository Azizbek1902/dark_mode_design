import React from "react";
import CategoryItem from "../CategoryItem";

export default ({ mode }) => {
  const data = [
    {
      id: 1,
      title: "Lifestyle",
      desc: "Dailiy lifestyle articles",
      color: "#5F2EEA",
      bgTun: "#2B2449",
      bgColor: "#F2EBFF",
    },
    {
      id: 2,
      title: "Tutorials",
      desc: "Coding tutorials",
      color: "#0061F7",
      bgTun: "#282C49",
      bgColor: "#EFF3FF",
    },
    {
      id: 3,
      title: "Technology",
      desc: "Dailiy lifestyle articles",
      color: "#F26464",
      bgTun: "#372839",
      bgColor: "#FEEFEF",
    },
    {
      id: 4,
      title: "UX design",
      desc: "UX design tips",
      color: "#4BDE97",
      bgTun: "#26353F",
      bgColor: "#EDFCF5",
    },
    {
      id: 5,
      title: "Interaction tips",
      desc: "Interaction articles",
      color: "#FFB648",
      bgTun: "#383035",
      bgColor: "#FEF6EA",
    },
    {
      id: 6,
      title: "App development",
      desc: "Mobile development articles",
      color: "#FFB648",
      bgTun: "#383035",
      bgColor: "#FEF6EA",
    },
    {
      id: 8,
      title: "Nature",
      desc: "Wildlife animal articles",
      color: "#2F49D1",
      bgTun: "#242645",
      bgColor: "#EBEDFB",
    },
  ];
  return (
    <div>
      <div className={`rounded-md mb-16 p-5 ${mode ? "bg-[#222235]" : "bg-white"}`}>
        <h1
          className={`text-lg font-bold tracking-wider ${
            mode ? "text-white" : "text-black"
          }`}
        >
          Top categories
        </h1>
        <h2 className="text-sm font-medium text-gray-400">
          28 Categories, 1400 Posts
        </h2>
        {data.map((item) => (
          <div key={item.id}>
            <CategoryItem
              mode={mode}
              title={item.title}
              desc={item.desc}
              color={item.color}
              bgColor={item.bgColor}
              bgTun={item.bgTun}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
