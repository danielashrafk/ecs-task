import { Box, Image, useDripsyTheme } from "dripsy";
import React from "react";

export const Logo = () => {
  const { theme } = useDripsyTheme();
  const { resizeMode, width, height, aspectRatio, ...defaultSX } =
    theme.icons?.["logo"];
  const directory = "../../assets/images/icon.png";
  return (
    <Box sx={defaultSX}>
      <Image
        resizeMode={resizeMode}
        source={require(directory)}
        sx={{ width, height, aspectRatio }}
      />
    </Box>
  );
};
