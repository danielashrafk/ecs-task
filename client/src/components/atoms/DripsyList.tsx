import React from "react";
import { Animated, FlatListProps } from "react-native";
import { useSx } from "dripsy";
import type { SxProp } from "dripsy";

type Props = Omit<FlatListProps<any>, "contentContainerStyle" | "style"> & {
  contentContainerStyle?: SxProp;
  style?: SxProp;
};

export const DripsyList = ({
  contentContainerStyle,
  style,
  ...props
}: Props) => {
  const sx = useSx();

  return (
    <Animated.FlatList
      {...props}
      contentContainerStyle={contentContainerStyle && sx(contentContainerStyle)}
    />
  );
};
