import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import Cookies from "js-cookie";
const httpLink = createHttpLink({
  uri: "https://odyssey-lift-off-part5-server-production.up.railway.app/", // change this to YOUR server URI
});

const authMiddleWare = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      accesstoken: Cookies.get("access_token"),
      refreshtoken: Cookies.get("refresh_token"),
    },
  });
  return forward(operation);
});
export const graphqlClient = new ApolloClient({
  link: authMiddleWare.concat(httpLink),
  cache: new InMemoryCache(),
});
