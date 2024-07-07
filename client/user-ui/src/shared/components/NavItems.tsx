import { navItems } from "@/constants";
import Link from "next/link";
import React from "react";

const NavItems = ({
  activeItem = 0,
}: {
  activeItem?: number;
}) => {
  return (
    <div className="md:block hidden ">
      {navItems.map((item, idx) => (
        <Link
          key={idx}
          href={item.url}
          className={`px-5 text-[18px] font-Poppins font-[500] ${
            activeItem === idx && "text-[#37b668]"
          }`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
