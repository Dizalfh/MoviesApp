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
    <div className="bg-black flex items-center justify-between gap-8 p-4">
      <div className="flex items-center gap-8">
        <img src={Disney} className="w-[80px] md:w-[100px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
      </div>
      <img
        src="https://i.pinimg.com/474x/db/3a/62/db3a623acc8396fb285ec899ad01cd10.jpg"
        className="w-[40px] rounded-full "
      />
    </div>
  );
}

export default Header;
