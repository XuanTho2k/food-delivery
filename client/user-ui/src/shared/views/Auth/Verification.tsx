import { styles } from "@/constants";
import { ACTIVATE_USER } from "@/graphql/actions/user.actions";
import { useMutation } from "@apollo/client";
import { input } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";

type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
};
const Verification = ({
  setActivateState,
}: {
  setActivateState: (e: string) => void;
}) => {
  const [ActivateUser, { loading }] =
    useMutation(ACTIVATE_USER);

  const [invalidError, setInvalidError] = useState(false);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [verifyNumber, setVerifyNumber] =
    useState<VerifyNumber>({
      0: "",
      1: "",
      2: "",
      3: "",
    });
  return (
    <div>
      <h1 className={`${styles.title}`}>
        Verify Your Account
      </h1>
      <br />
      <div className="w-full flex items-center justify-center mt-2">
        <div className="w-[80px] h-p=[80px] rounded-full bg-[#497df2] flex items-center justify-center ">
          <VscWorkspaceTrusted size={40} />
        </div>
      </div>
      <br />
      <br />
      <div className="m-auto flex items-center justify-around">
        {Object.keys(verifyNumber).map((key, idx) => (
          <input
            key={key}
            type="number"
            ref={inputRefs[idx]}
            className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-white justify-center text-[18px] font-Poppins outline-none text-center ${
              invalidError
                ? "shake border-red-500"
                : "border-white"
            } `}
            maxLength={1}
            placeholder=""
            value={verifyNumber[key as keyof VerifyNumber]}
          />
        ))}
      </div>
      <br />
      <br />
      <div className="w-full flex justify-center">
        <button
          className={`${styles.button}`}
          disabled={loading}
        >
          Verify OTP
        </button>
      </div>
      <br />
      <h5 className="text-center pt-4 font-Poppins text-[14px] text-white">
        Go back to sign in?
        <span
          className="text-[#2190ff] pl-1 cursor-pointer"
          onClick={() => setActivateState("Login")}
        >
          Sign in
        </span>
      </h5>
    </div>
  );
};

export default Verification;
