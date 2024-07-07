import { styles } from "@/constants";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Signup = ({
  setActivateState,
}: {
  setActivateState: (e: string) => void;
}) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1 className={`${styles.title}`}>
        SignUp with Chow Chow Choo
      </h1>
      <form action="">
        <div className="w-full relative mb-3">
          <label htmlFor="" className={`${styles.label}`}>
            Enter your Name
          </label>
          <input
            type="text"
            placeholder="johndoe**"
            className={`${styles.input}`}
          />
        </div>
        <label htmlFor="" className={`${styles.label}`}>
          Enter your Email
        </label>
        <input
          type="email"
          placeholder="loginmail@gmail.com"
          className={`${styles.input}`}
        />
        <div className="w-full relative mt-3">
          <label htmlFor="" className={`${styles.label}`}>
            Enter your Phone Number
          </label>
          <input
            type="number"
            placeholder="+8801*******"
            className={`${styles.input}`}
          />
        </div>
        <div className="w-full mt-5 relative mb-1">
          <label
            htmlFor="password"
            className={`${styles.label}`}
          >
            Enter your password
          </label>
          <input
            type={!show ? "password" : "text"}
            placeholder="password!@%"
            className={`${styles.input}`}
            name=""
            id=""
          />
          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
        </div>
        <div className="w-full mt-5">
          <input
            type="submit"
            value="Sign Up"
            className={`${styles.button} mt-3`}
          />
        </div>
        <br />
        <h5 className="text-center pt-4 font-Poppins text-[16px] text-white">
          Or join with
        </h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle
            size={30}
            className="cursor-pointer mr-2"
          />
          <AiFillGithub
            size={30}
            className="cursor-pointer ml-2"
          />
        </div>
        <h5 className="text-center pt-4 font-Poppins text-[14px]">
          Already have an account
          <span
            className="text-[#2190ff] pl-1 cursor-pointer "
            onClick={() => setActivateState("Login")}
          >
            Login
          </span>
        </h5>
      </form>
    </div>
  );
};

export default Signup;
