import { Box, DripsyVariant, Text, useDripsyTheme } from "dripsy";
import React from "react";

interface BadgeProps {
  variant?: DripsyVariant<"badges">;
  children: string;
}

export const Badge = ({ variant = "default", children }: BadgeProps) => {
  const { theme } = useDripsyTheme();
  const { color = "white", label, ...defaultSX } = theme.badges?.[variant];

  return (
    <Box sx={defaultSX}>
      <Text variant={label} sx={{ color }}>
        {children}
      </Text>
    </Box>
  );
};
