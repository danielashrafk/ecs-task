import { Button } from "../atoms/Button";
import { Box, Text } from "dripsy";
import AnimatedLottieView from "lottie-react-native";
import { forwardRef, useImperativeHandle, useState } from "react";
import Modal from "react-native-modal";
import React from "react";

interface ConfirmationModalProps {
  onSubmit?: () => void;
  title?: string;
  message?: string;
  successAnimation?: AnimatedLottieView["props"]["source"];
  invalidAnimation?: AnimatedLottieView["props"]["source"];
  buttonText?: string;
  data?: string;
}

export interface ConfirmationModalRef {
  show: () => void;
  hide: () => void;
}

export const ConfirmationModal = forwardRef<
  ConfirmationModalRef,
  ConfirmationModalProps
>(
  (
    {
      onSubmit,
      title = "Confirmation",
      message = "No message to show.",
      successAnimation = require("../../assets/lottie/success.json"),
      invalidAnimation = require("../../assets/lottie/invalid.json"),
      buttonText = "Done",
      data,
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);

    useImperativeHandle(
      ref,
      () => ({
        show: () => setVisible(true),
        hide: () => setVisible(false),
      }),
      []
    );

    const _onSubmit = () => {
      setVisible(false);
      onSubmit?.();
    };

    return (
      <Modal
        isVisible={visible}
        useNativeDriverForBackdrop
        useNativeDriver
        animationIn="bounceInUp"
        animationInTiming={300}
        animationOutTiming={300}
      >
        <Box
          sx={{
            bg: "white",
            borderRadius: "large",
            padding: "xl",
            paddingY: "xxl",
          }}
        >
          <Text sx={{ textAlign: "center", marginBottom: "zero" }} variant="h4">
            {title}
          </Text>
          <AnimatedLottieView
            source={successAnimation}
            style={{
              width: "100%",
              aspectRatio: 22 / 9,
            }}
            speed={1.5}
            autoPlay
            loop={false}
          />

          <Box sx={{ marginBottom: "l" }}>
            <Text sx={{ textAlign: "center" }}>{message}</Text>
          </Box>

          <Box sx={{ marginBottom: "l" }}>
            <Text sx={{ textAlign: "center" }}>{data}</Text>
          </Box>

          <Button sx={{ marginBottom: "zero" }} onPress={_onSubmit}>
            {buttonText}
          </Button>
        </Box>
      </Modal>
    );
  }
);
