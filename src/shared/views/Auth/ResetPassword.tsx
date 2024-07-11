"use client";
import { styles } from "@/constants";
import React, { Suspense, useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@apollo/client";
import { RESET_PW } from "@/graphql/actions/user.actions";
import toast from "react-hot-toast";
import Loading from "@/shared/components/common/LoadingPage/Loading";
import { useSearchParams } from "next/navigation";

const ResetPassword = () => {
  const activationToken = useSearchParams().get("verify");
  const [showPw, setShowPw] = useState({
    pw1: false,
    pw2: false,
  });

  const [ResetPassword, { loading }] = useMutation(RESET_PW);

  const formSchema = z
    .object({
      password: z
        .string()
        .min(8, "Password must be at least 8 characters long!"),
      confirmPassword: z.string(),
    })
    .refine(
      (values) => {
        return values.password === values.confirmPassword;
      },
      {
        message: "Passwords must match!",
        path: ["confirmPassword"],
      }
    );
  type ResetPwSchema = z.infer<typeof formSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ResetPwSchema>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (data: ResetPwSchema) => {
    try {
      const response = await ResetPassword({
        variables: {
          password: data.password,
          activationToken: activationToken,
        },
      });
      toast.success("Reset password successful!");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  if (loading) return <Loading />;
  return (
    <div className="w-full flex justify-center items-center h-screen bg-slate-900 ">
      <div className="md:w-[500px]">
        <h1 className={`${styles.title}`}> Reset your Password</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full mt-5 relative mb-1">
            <label htmlFor="password" className={`${styles.label}`}>
              Enter your password
            </label>
            <input
              {...register("password")}
              type={!showPw.pw1 ? "password" : "text"}
              placeholder="password!@%"
              className={`${styles.input}`}
            />
            {!showPw.pw1 ? (
              <AiOutlineEyeInvisible
                className="absolute bottom-3 right-2 z-1 cursor-pointer"
                size={20}
                onClick={() =>
                  setShowPw({
                    ...showPw,
                    pw1: true,
                  })
                }
              />
            ) : (
              <AiOutlineEye
                className="absolute bottom-3 right-2 z-1 cursor-pointer"
                size={20}
                onClick={() =>
                  setShowPw({
                    ...showPw,
                    pw1: false,
                  })
                }
              />
            )}
            {errors.password && (
              <span className="text-red-500 block mt-1">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="w-full mt-5 relative mb-1">
            <label htmlFor="confirmPassword" className={`${styles.label}`}>
              Enter your Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              type={!showPw.pw2 ? "confirmPassword" : "text"}
              placeholder="confirmPassword!@%"
              className={`${styles.input}`}
            />
            {!showPw.pw2 ? (
              <AiOutlineEyeInvisible
                className="absolute bottom-3 right-2 z-1 cursor-pointer"
                size={20}
                onClick={() =>
                  setShowPw({
                    ...showPw,
                    pw2: true,
                  })
                }
              />
            ) : (
              <AiOutlineEye
                className="absolute bottom-3 right-2 z-1 cursor-pointer"
                size={20}
                onClick={() =>
                  setShowPw({
                    ...showPw,
                    pw2: false,
                  })
                }
              />
            )}
            {errors.confirmPassword && (
              <span className="text-red-500 block mt-1">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="w-full mt-5">
            <span
              className={`${styles.label} text-[#2190ff] block text-right cursor-pointer`}
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
            <FcGoogle size={30} className="cursor-pointer mr-2" />
          </div>
          <h5 className="text-center pt-4 font-Poppins text-[14px]">
            Not have any account?
            <span className="text-[#2190ff] pl-1 cursor-pointer">
              {" "}
              Sign up{" "}
            </span>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
