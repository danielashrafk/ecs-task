import React from "react";
import { ErrorToast, InfoToast, ToastConfig } from "react-native-toast-message";
import Constants from "expo-constants";
import { dripsyTheme } from "../../theme";

const STATUSBAR_HEIGHT = Constants.statusBarHeight;

export const toastConfig: ToastConfig = {
  error: (props) => (
    <ErrorToast
      {...props}
      touchableContainerProps={{
        style: {
          backgroundColor: "#DF2727",
          width: "100%",
          padding: 20,
          top: -STATUSBAR_HEIGHT * 2,
          paddingTop: STATUSBAR_HEIGHT + 10,
        },
      }}
      text1Style={{
        fontFamily: "font-medium",
        color: "white",
        fontSize: 10,
        marginBottom: 5,
      }}
      text2Style={{
        fontFamily: "font-regular",
        color: "white",
        fontSize: 15,
      }}
    />
  ),

  informative: (props) => (
    <InfoToast
      {...props}
      touchableContainerProps={{
        style: {
          backgroundColor: dripsyTheme.colors["primary-500"],
          width: "100%",
          padding: 20,
        },
      }}
      text1Style={{
        fontFamily: "font-medium",
        color: "white",
        fontSize: 10,
        marginBottom: 5,
      }}
      text2Style={{
        fontFamily: "font-medium",
        color: "white",
        fontSize: 15,
      }}
    />
  ),
};
