import { styles } from "@/constants";
import React, { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
const Login = ({
  setActivateState,
  setOpen,
}: {
  setActivateState: (e: string) => void;
  setOpen: (e: boolean) => void;
}) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1 className={`${styles.title}`}>
        {" "}
        Login with Chow Chow Choo
      </h1>
      <form action="">
        <label htmlFor=""> Enter your Email</label>
        <input
          type="text"
          placeholder="loginmail@gmail.com"
          className={`${styles.input}`}
          name=""
          id=""
        />
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
          <span
            className={`${styles.label} text-[#2190ff] block text-right cursor-pointer`}
            onClick={() =>
              setActivateState("Forgot-Password")
            }
          >
            Forgot your password?
          </span>
          <input
            type="submit"
            value="Login"
            className={`${styles.button} mt-3`}
          />
        </div>
        <br />
        <h5 className="text-center pt-4 font-Poppins text-[16px] text-white ">
          Or join with
        </h5>
        <div
          className="flex items-center justify-center my-3"
          onClick={() => {}}
        >
          <FcGoogle
            size={30}
            className="cursor-pointer mr-2"
          />
        </div>
        <h5 className="text-center pt-4 font-Poppins text-[14px]">
          Not have any account?
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setActivateState("Signup")}
          >
            {" "}
            Sign up{" "}
          </span>
        </h5>
      </form>
    </div>
  );
};

export default Login;
