import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { TypedTypePolicies } from "../graphql/generated";
import { API_URL } from "@env";
import { onError } from "@apollo/client/link/error";
import Toast from "react-native-toast-message";

const httpLink = createHttpLink({
  uri: "http://192.168.1.10:3000/graphql",
});

const errorLink = onError(({ networkError }) => {
  if (networkError)
    Toast.show({
      type: "error",
      position: "top",
      autoHide: true,
      visibilityTime: 4000,
      text1: "Network Error",
      text2: "Couldn't reach the server",
    });
});

const typePolicies: TypedTypePolicies = {
  // Query: {
  //   fields: {
  //     getUser: {
  //       read(_, { args, toReference }) {
  //         return {
  //           data: toReference({
  //             id: args?.id,
  //           }),
  //         };
  //       },
  //     },
  //     getAllUsers: {
  //       keyArgs: ["filters"],
  //       merge(
  //         existing = { data: [], meta: {} },
  //         incoming = { data: [], meta: {} }
  //       ) {
  //         const newData = incoming.data;
  //         return {
  //           data: [...existing?.data, ...newData],
  //           meta: incoming.meta,
  //         };
  //       },
  //     },
  //   },
  // },
  // User: {
  //   keyFields: ["id"],
  // },
};

export const client = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies,
    resultCaching: true,
    canonizeResults: true,
  }),
  connectToDevTools: true,
});
