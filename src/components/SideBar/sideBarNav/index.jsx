import React from "react";

export default ({ mode }) => {
  return (
    <div className="p-4">
      <div
        className={`flex justify-between pb-5 border-b-2 ${
          mode ? "border-[#2D2D39]" : "border-[#1970F8]"
        } ] items-center`}
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="50"
            viewBox="0 0 49 50"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.4523 3.23651C27.0957 -0.120174 21.6534 -0.120181 18.2967 3.23651L2.51752 19.0157C-0.839168 22.3724 -0.839175 27.8146 2.51751 31.1713L18.2967 46.9505C21.6534 50.3072 27.0957 50.3072 30.4523 46.9505L46.2315 31.1713C49.5882 27.8147 49.5882 22.3724 46.2315 19.0157L30.4523 3.23651ZM24.3745 36.6972C30.7831 36.6972 35.9782 31.5021 35.9782 25.0935C35.9782 18.685 30.7831 13.4898 24.3745 13.4898C17.966 13.4898 12.7708 18.685 12.7708 25.0935C12.7708 31.5021 17.966 36.6972 24.3745 36.6972Z"
              fill="white"
            />
            <circle
              cx="24.4967"
              cy="25.2156"
              r="7.7358"
              stroke="white"
              stroke-opacity="0.5"
              stroke-width="2.5786"
            />
            <circle
              cx="24.4967"
              cy="25.2157"
              r="3.8679"
              fill="white"
              fill-opacity="0.8"
            />
          </svg>
          <div className="d">
            <h1 className="text-xl font-bold text-white tracking-wider">
              Elegant
            </h1>
            <h2 className="text-white font-medium text-sm">Dashboard</h2>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_0_1382)">
            <path
              d="M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z"
              fill="white"
              fill-opacity="0.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_1382">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};
