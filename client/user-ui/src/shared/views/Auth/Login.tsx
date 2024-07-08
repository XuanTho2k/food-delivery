import { styles } from "@/constants";
import React, { useState } from "react";
import {
  AiFillWallet,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const Login = ({
  setActivateState,
  setOpen,
}: {
  setActivateState: (e: string) => void;
  setOpen: (e: boolean) => void;
}) => {
  const [show, setShow] = useState(false);

  // const [Login,{loading}] = useMutation

  const formSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(
        8,
        "Password must be at least 8 characters long!"
      ),
  });
  type LoginSchema = z.infer<typeof formSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (data: LoginSchema) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    // console.log(loginData);
  };
  return (
    <div>
      <h1 className={`${styles.title}`}>
        {" "}
        Login with Chow Chow Choo
      </h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor=""> Enter your Email</label>
        <input
          type="email"
          {...register("email")}
          placeholder="loginmail@gmail.com"
          className={`${styles.input}`}
        />
        {errors.email && (
          <span className="text-red-500 block mt-1">
            {`${errors.email.message}`}
          </span>
        )}
        <div className="w-full mt-5 relative mb-1">
          <label
            htmlFor="password"
            className={`${styles.label}`}
          >
            Enter your password
          </label>
          <input
            {...register("password")}
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
        {errors.password && (
          <span className="text-red-500 mt-1 block">
            {`${errors.password.message}`}
          </span>
        )}
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
            disabled={isSubmitting}
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
