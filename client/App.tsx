import React from "react";
import useCachedResources from "./src/hooks/useCachedResources";
import { DripsyProvider } from "dripsy";
import { dripsyTheme } from "./src/theme";
import Navigation from "./src/navigation";
import { client } from "./src/services/apollo";
import { ApolloProvider } from "@apollo/client";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/components/atoms/Toast";
import { RecoilRoot } from "recoil";
import { userIdState } from "./src/store/atom";

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) return null;
  else {
    return (
      <RecoilRoot>
        <DripsyProvider theme={dripsyTheme}>
          <ApolloProvider client={client}>
            <Navigation />
            <Toast config={toastConfig} />
          </ApolloProvider>
        </DripsyProvider>
      </RecoilRoot>
    );
  }
}
