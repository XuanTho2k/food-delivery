"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { CgProfile } from "react-icons/cg";
import React, { useState } from "react";
import AuthScreen from "../screens/AuthScreen";

const ProfileDropDown = () => {
  const [open, setOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  //   const {user,loading} = useUser()
  // const {data} = useSession();
  return (
    <div className="flex items-center gap-4 ">
      {signedIn ? (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform"
              src={""}
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            className="text-black"
          >
            <DropdownItem
              key={"profile"}
              className="h-14 gap-2"
            >
              <p className="font-semibold">
                {" "}
                Signed in as{" "}
              </p>
              <p className="font-semibold"> email or </p>
            </DropdownItem>
            <DropdownItem key={"settings"}>
              My Profile
            </DropdownItem>
            <DropdownItem key={"all_orders"}>
              All Orders
            </DropdownItem>
            <DropdownItem key={"team_settings"}>
              Apply for seller account
            </DropdownItem>
            <DropdownItem key={"logout"} color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <CgProfile
          className="text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      )}
      {open && <AuthScreen setOpen={setOpen} />}
    </div>
  );
};

export default ProfileDropDown;
