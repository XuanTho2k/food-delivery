import { styles } from "@/constants";
import { FORGOT_PW } from "@/graphql/actions/user.actions";
import Loading from "@/shared/components/common/LoadingPage/Loading";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const ForgotPassword = ({
  setActivateState,
}: {
  setActivateState: (e: string) => void;
}) => {
  const [forgotPassword, { loading }] =
    useMutation(FORGOT_PW);

  const formSchema = z.object({
    email: z.string().email(),
  });

  type ForgotPwSchema = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ForgotPwSchema>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (data: ForgotPwSchema) => {
    try {
      const response = await forgotPassword({
        variables: {
          email: data.email,
        },
      });
      toast.success(
        "Please check your email to reset your password!"
      );
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return loading ? (
    <Loading />
  ) : (
    <div>
      <h1 className={`${styles.title}`}>
        Forgot your password?
      </h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="" className={`${styles.label}`}>
          Enter your Email
        </label>
        <input
          {...register("email")}
          className={`${styles.input}`}
          type="email"
          placeholder="loginemail@gmail.com"
        />
        {errors.email && (
          <span className="text-red-500 mt-1 block">
            {errors.email.message}
          </span>
        )}
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
