import { styles } from "@/constants";
import React from "react";

const ForgotPassword = ({
  setActivateState,
}: {
  setActivateState: (e: string) => void;
}) => {
  return (
    <div>
      <h1 className={`${styles.title}`}>
        Forgot your password?
      </h1>
      <form action="">
        <label htmlFor="" className={`${styles.label}`}>
          Enter your Email
        </label>
        <input
          className={`${styles.input}`}
          type="email"
          placeholder="loginemail@gmail.com"
        />
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          className={`${styles.button} mt-3`}
        />
        <br />
        <h5 className="text-center pt-4 font-Poppins text-[14px]">
          {" "}
          Or Go Back to
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setActivateState("Login")}
          >
            Login
          </span>
        </h5>
      </form>
    </div>
  );
};

export default ForgotPassword;
