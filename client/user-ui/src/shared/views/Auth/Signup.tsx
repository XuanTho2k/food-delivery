import { styles } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { error } from "console";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiFillGithub,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";

const Signup = ({
  setActivateState,
}: {
  setActivateState: (e: string) => void;
}) => {
  const formSchema = z.object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters long!"),
    email: z.string().email(),
    phone_number: z.coerce.number().min(10),
    password: z
      .string()
      .min(
        8,
        "Password must be at least 8 characters long!"
      ),
  });

  type SignupSchema = z.infer<typeof formSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: SignupSchema) => {
    const signupData = {
      name: data.name,
      email: data.email,
      phone_number: data.phone_number,
      password: data.password,
    };
    console.log(signupData);
  };
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1 className={`${styles.title}`}>
        SignUp with Chow Chow Choo
      </h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full relative mb-3">
          <label htmlFor="" className={`${styles.label}`}>
            Enter your Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="johndoe**"
            className={`${styles.input}`}
          />
          {errors.name && (
            <span className="text-red-500 mt-1 block">
              {errors.name.message}
            </span>
          )}
        </div>
        <label htmlFor="" className={`${styles.label}`}>
          Enter your Email
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="loginmail@gmail.com"
          className={`${styles.input}`}
        />
        {errors.email && (
          <span className="text-red-500 mt-1 block">
            {errors.email.message}
          </span>
        )}
        <div className="w-full relative mt-3">
          <label htmlFor="" className={`${styles.label}`}>
            Enter your Phone Number
          </label>
          <input
            {...register("phone_number")}
            type="number"
            placeholder="+8801*******"
            className={`${styles.input}`}
          />
          {errors.phone_number && (
            <span className="text-red-500 block mt-1">
              {errors.phone_number.message}
            </span>
          )}
        </div>
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
          {errors.password && (
            <span className="text-red-500 block mt-1">
              {errors.password.message}
            </span>
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
