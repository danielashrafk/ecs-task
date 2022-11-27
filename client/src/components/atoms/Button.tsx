import { DripsyVariant, styled, SxProp, Text, useDripsyTheme } from "dripsy";
import { MotiPressable, MotiPressableProps } from "moti/interactions";
import React from "react";
import { ReactNode, useCallback, useMemo } from "react";

export const StyledMotiPressable = styled(MotiPressable)();

interface ButtonProps extends MotiPressableProps {
  children: string | ReactNode;
  loading?: boolean;
  sx?: SxProp;
  variant?: DripsyVariant<"buttons">;
}

export const Button = ({
  children,
  variant = "primary",
  disabled = false,
  sx,
  ...props
}: ButtonProps) => {
  const { theme } = useDripsyTheme();
  const { hoveredbg, color, label, ...defaultSX } = theme.buttons?.[variant];

  const animate = useCallback(
    ({ hovered, pressed }: any) => {
      "worklet";

      return {
        backgroundColor:
          hovered || pressed
            ? theme.colors?.[hoveredbg]
            : theme.colors[defaultSX.backgroundColor] ?? "transparent",
      };
    },
    [defaultSX.backgroundColor, hoveredbg]
  );

  const renderChildren = useMemo(
    () =>
      typeof children === "string" ? (
        <Text sx={{ color }} variant={label}>
          {children}
        </Text>
      ) : (
        children
      ),
    [children, color, label]
  );

  return (
    <StyledMotiPressable
      animate={animate}
      transition={{ type: "timing", duration: 50 }}
      disabled={disabled}
      sx={{
        opacity: disabled ? "inactive" : "default",
        ...defaultSX,
        ...sx,
      }}
      {...props}
    >
      {renderChildren}
    </StyledMotiPressable>
  );
};
