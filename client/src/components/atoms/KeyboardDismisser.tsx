import React from "react";
import { Keyboard, Pressable, StyleSheet } from "react-native";

export const KeyboardDismisser = ({ children }: any) => {
  return (
    <Pressable
      style={{ flex: 1 }}
      onPress={Keyboard.dismiss}
      android_disableSound
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
