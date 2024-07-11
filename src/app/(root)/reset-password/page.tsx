import Header from "@/shared/components/Layout/Header";
import ResetPassword from "@/shared/views/Auth/ResetPassword";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="bg-black">
      <Header />
      <Suspense>
        <ResetPassword />
      </Suspense>
    </div>
  );
};

export default page;
