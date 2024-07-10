"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { CgProfile } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import AuthScreen from "../screens/AuthScreen";
import useUser from "@/hooks/useUser";
import { useQuery } from "@apollo/client";
import { LOGOUT_USER } from "@/graphql/actions/user.actions";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import LoadingAvatar from "./common/LoadingAvatar/LoadingAvatar";

const ProfileDropDown = () => {
  const [open, setOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const { user, loading } = useUser();

  console.log(user);
  // const [logOutUser, { loading: load }] =
  //   useQuery(LOGOUT_USER);

  const logoutHandler = async () => {
    // try {
    //   const response = await logOutUser({});
    //   toast.success("Log out successful!");
    // } catch (error: any) {
    //   toast.error(error.message);
    // }

    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    toast.success("Log out successful!");
    window.location.reload();
  };

  useEffect(() => {
    // if(data?.user){
    //   setSignedIn(true)

    // }
    if (!loading) {
      setSignedIn(!!user);
    }
  }, [loading, user]);
  return loading ? (
    <LoadingAvatar />
  ) : (
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
              <p className="font-semibold">
                {" "}
                {user.email}{" "}
              </p>
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
            <DropdownItem
              key={"logout"}
              color="danger"
              onClick={logoutHandler}
            >
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
