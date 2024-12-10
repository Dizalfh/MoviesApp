import React from "react";
import {
  HiTv,
  HiPlayCircle,
  HiStar,
  HiHome,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Disney from "../assets/images/disney-logo-1.png";
import HeaderItem from "./HeaderItem";

function Header() {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex bg-black items-center justify-between p-4">
      <div className="flex gap-6 items-center">
        <img src={Disney} className="w-[80px] md:w-[100px] object-cover" />
        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
      </div>
      <img
        src="https://i.pinimg.com/236x/2a/9b/d7/2a9bd72cb276c78aa3a82ddaf8ce57bf.jpg"
        className="w-[40px] rounded-full"
      ></img>
    </div>
  );
}

export default Header;
