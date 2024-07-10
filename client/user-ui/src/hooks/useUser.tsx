import { GET_USER } from "@/graphql/actions/user.actions";
import { useQuery } from "@apollo/client";
import React from "react";

const useUser = () => {
  const { loading, data } = useQuery(GET_USER);
  return { loading, user: data?.getLoggedInUser.user };
};

export default useUser;
