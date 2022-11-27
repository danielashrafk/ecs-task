import { Box } from "dripsy";
import AnimatedLottieView from "lottie-react-native";
import React from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
  animation?: AnimatedLottieView["props"]["source"];
}

export const Spinner = ({
  size = 20,
  color = "white",
  animation = require("../../assets/lottie/spinner.json"),
}: SpinnerProps) => (
  <AnimatedLottieView
    source={animation}
    style={{
      width: "100%",
      aspectRatio: 22 / 9,
    }}
    speed={1}
    autoPlay
    loop={true}
  />
);
