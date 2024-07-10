"use client";
import Header from "@/shared/components/Layout/Header";
import ResetPassword from "@/shared/views/Auth/ResetPassword";
import {
  useParams,
  useSearchParams,
} from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const Page = ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined;
  };
}) => {
  const activationToken = useSearchParams().get("verify");
  return (
    <div className="bg-black">
      <Header />
      <ResetPassword activationToken={activationToken} />
    </div>
  );
};

export default Page;
