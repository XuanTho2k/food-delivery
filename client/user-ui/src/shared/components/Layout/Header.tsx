import { styles } from "@/constants";
import React from "react";
import NavItems from "../NavItems";
import ProfileDropDown from "../ProfileDropDown";

const Header = () => {
  return (
    <header className="w-full bg-[#0a0713]">
      <div className="w-[90%] m-auto h-[80px] flex flex-row items-center justify-between ">
        <h1 className={`${styles.logo}`}>Chow Chow Choo</h1>
        <NavItems />
        <ProfileDropDown />
      </div>
    </header>
  );
};

export default Header;
