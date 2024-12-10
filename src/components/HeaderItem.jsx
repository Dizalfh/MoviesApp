import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white flex items-center gap-2 font-semibold cursor-pointer text-[15px]">
      <Icon />
      <h2>{name}</h2>
    </div>
  );
}

export default HeaderItem;
