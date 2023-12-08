import React from "react";
import { useSelector } from "react-redux";
import SideBarNav from "./sideBarNav";
import Profile from "./Profile";
import home from "../../assets/New folder/Home.png";
import post from "../../assets/New folder/posts.svg";
import cate from "../../assets/New folder/Category.svg";
import media from "../../assets/New folder/media.svg";
import pages from "../../assets/New folder/pages.svg";
import com from "../../assets/New folder/comments.svg";
import app from "../../assets/New folder/app.svg";
import ext from "../../assets/New folder/ex.svg";
import user from "../../assets/New folder/3 User.svg";
import sett from "../../assets/New folder/Setting.svg";
import NavItem from "./NavItem";

function SideBar() {
  const sideBarData = [
    {
      id: 1,
      img: home,
      title: "Dashboard",
      select: false,
      num: 0,
      active: true,
    },
    {
      id: 2,
      img: post,
      title: "Posts",
      select: false,
      num: 0,
    },
    {
      id: 3,
      img: cate,
      title: "Categories",
      select: true,
      num: 0,
    },
    {
      id: 4,
      img: media,
      title: "Media",
      select: false,
      num: 0,
    },
    {
      id: 5,
      img: pages,
      title: "Pages",
      select: false,
      num: 0,
    },
    {
      id: 6,
      img: com,
      title: "Comments",
      select: false,
      num: 7,
    },
    {
      id: 8,
      select: false,
      notitle: true,
      num: 0,
    },
    {
      id: 9,
      img: app,
      title: "Appearance",
      select: false,
      num: 0,
    },
    {
      id: 10,
      img: ext,
      title: "Extention",
      select: false,
      num: 0,
    },
    {
      id: 10,
      img: user,
      title: "Users",
      select: false,
      num: 0,
    },
    {
      id: 15,
      img: sett,
      title: "Settings",
      select: false,
      num: 0,
    },
  ];
  const mode = useSelector((state) => state.modeReducer.darkMode);
  return (
    <div className="w-full h-full relative">
      <SideBarNav mode={mode} />
      {sideBarData.map((item) => {
        return (
          <div key={item.id}>
            <NavItem
              mode={mode}
              title={item.title}
              icon={item.img}
              select={item.select}
              notitle={item.notitle}
              num={item.num}
              active={item.active}
            />
          </div>
        );
      })}
      <div className="absolute bottom-5 left-0 right-0">
        <Profile mode={mode} />
      </div>
    </div>
  );
}

export default SideBar;
