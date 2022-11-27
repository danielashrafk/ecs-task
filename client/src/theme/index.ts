import { makeTheme } from "@dripsy/core";
import { normalize } from "./utils";
import tinycolor from "tinycolor2";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

type ColorScales =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

type ColorScale<Color extends string> = `${Color}-${ColorScales}`;

function scaleColor<T extends string>(
  colorName: T,
  value: string
): { [key in ColorScale<T>]: string } {
  const scales: any = {};

  [50, 100, 200, 300, 400].forEach((scale, index) => {
    scales[`${colorName}-${scale}`] = tinycolor(value)
      .lighten(6 * (5 - index))
      .toString();
  });

  scales[`${colorName}-500`] = value;

  Array(4)
    .fill(value)
    .forEach((value, index) => {
      scales[`${colorName}-${(index + 1) * 100 + 500}`] = tinycolor(value)
        .darken(6 * (index + 1))
        .toString();
    });

  return scales;
}

const primaryColor = {
  "primary-50": "#CCE1FF",
  "primary-100": "#AACDFF",
  "primary-200": "#80B3FF",
  "primary-300": "#559AFF",
  "primary-400": "#2B81FF",
  "primary-500": "#0068FF",
  "primary-600": "#0057D4",
  "primary-700": "#0045AA",
  "primary-800": "#003480",
  "primary-900": "#002355",
};

const grayTones = {
  "gray-50": "#F7F7F7",
  "gray-100": "#F2F2F2",
  "gray-200": "#ECECEC",
  "gray-300": "#E6E6E6",
  "gray-400": "#DFDFDF",
  "gray-500": "#D9D9D9",
  "gray-600": "#B5B5B5",
  "gray-700": "#919191",
  "gray-800": "#6D6D6D",
  "gray-900": "#484848",
};

const successTones = {
  "success-50": "#DCF3DC",
  "success-100": "#C5EBC5",
  "success-200": "#A8E0A8",
  "success-300": "#8BD68B",
  "success-400": "#6ECC6E",
  "success-500": "#51C251",
  "success-600": "#43A243",
  "success-700": "#368136",
  "success-800": "#286128",
  "success-900": "#1B411B",
};

const warningTones = {
  "warning-50": "#FFF0CE",
  "warning-100": "#FFE7AD",
  "warning-200": "#FFDA84",
  "warning-300": "#FFCE5C",
  "warning-400": "#FFC233",
  "warning-500": "#FFB60A",
  "warning-600": "#D49808",
  "warning-700": "#AA7907",
  "warning-800": "#805B05",
  "warning-900": "#553D03",
};

export const dripsyTheme = makeTheme({
  colors: {
    ...scaleColor("red", "#EF4444"),
    ...scaleColor("blue", "#15C8FF"),
    ...scaleColor("green", "#10B981"),
    ...scaleColor("yellow", "#F59E0B"),
    ...scaleColor("pink", "#EC4899"),
    ...scaleColor("slate", "#fff"),
    ...primaryColor,
    ...grayTones,
    ...successTones,
    ...warningTones,
    white: "#FFFFFF",
    darkBlue: "#002684",
    gray: "#F8F8F8",
    lightGray: "#EEEEEE",
    transparent: "transparent",
  },

  customFonts: {
    "font-regular": {
      default: "font-regular",
      thin: "font-thin", // 100
      extralight: "font-extralight", // 200
      light: "font-light", //300
      normal: "font-regular", //400
      medium: "font-medium", //500
      semibold: "font-semibold", //600
      bold: "font-bold", //700
      extrabold: "font-extrabold", //800
    },
  },

  fonts: {
    root: "font-regular",
  },

  text: {
    body: {
      color: "gray-900",
      marginBottom: "zero",
      fontFamily: "root",
      fontWeight: "normal",
      lineHeight: normalize(18),
      fontSize: normalize(14),
    },
    body2: {
      color: "gray-900",
      marginBottom: "zero",
      fontFamily: "root",
      fontWeight: "normal",
      lineHeight: normalize(14),
      fontSize: normalize(12),
    },
    caption: {
      color: "gray-600",
      marginBottom: "zero",
      fontFamily: "root",
      fontWeight: "normal",
      lineHeight: normalize(18),
      fontSize: normalize(14),
    },
    h1: {
      fontWeight: "medium",
      color: "darkBlue",
      fontSize: normalize(28),
      marginBottom: "l",
      lineHeight: normalize(28),
    },
    h2: {
      fontWeight: "bold",
      color: "darkBlue",
      fontSize: normalize(24),
      lineHeight: normalize(30),
      marginBottom: "m",
    },
    h3: {
      fontWeight: "semibold",
      color: "gray-900",
      fontSize: normalize(20),
      lineHeight: normalize(20),
      marginBottom: "m",
    },
    h4: {
      fontWeight: "semibold",
      color: "black",
      fontSize: normalize(18),
      lineHeight: normalize(22),
      marginBottom: "m",
    },
    h5: {
      fontWeight: "semibold",
      color: "darkBlue",
      fontSize: normalize(16),
      lineHeight: normalize(16),
      marginBottom: "m",
    },
    h6: {
      fontWeight: "semibold",
      color: "darkBlue",
      fontSize: normalize(14),
      lineHeight: normalize(14),
      marginBottom: "m",
    },
    headline: {
      fontWeight: "semibold",
      color: "white",
      fontSize: normalize(17),
      lineHeight: normalize(17),
      marginBottom: "m",
    },
    c1: {
      fontWeight: "normal",
      color: "gray-600",
      fontSize: normalize(13),
      lineHeight: normalize(16),
      textAlign: "center",
    },
    callout: {
      color: "white",
      fontFamily: "root",
      fontWeight: "bold",
      fontSize: normalize(15),
      lineHeight: normalize(18),
    },
    error: {
      color: "red-500",
      fontSize: normalize(11),
      lineHeight: normalize(11),
      fontFamily: "root",
      fontWeight: "medium",
      marginY: "xs",
    },
    label: {
      fontFamily: "font-regular",
      marginBottom: "xs",
      fontSize: normalize(12),
      color: "gray-700",
      fontWeight: "medium",
    },
    label2: {
      fontFamily: "font-regular",
      fontSize: normalize(13),
      color: "gray-500",
      fontWeight: "medium",
      marginBottom: "xxs",
    },
    s1: {
      color: "white",
      fontFamily: "root",
      fontWeight: "medium",
      fontSize: normalize(14),
      lineHeight: normalize(16),
    },
    s2: {
      color: "white",
      fontFamily: "root",
      fontWeight: "semibold",
      fontSize: normalize(11),
      lineHeight: normalize(14),
    },
    s3: {
      color: "black",
      fontFamily: "root",
      fontWeight: "medium",
      fontSize: normalize(11),
      lineHeight: normalize(15),
    },
  },

  images: {
    avatar: {
      width: 50,
      height: 50,
      bg: "gray-50",
      borderRadius: 50,
    },
    "avatar-md": {
      width: 70,
      height: 70,
      bg: "gray-50",
      borderRadius: 70,
      alignSelf: "center",
    },
    "avatar-lg": {
      width: 150,
      height: 150,
      bg: "gray-50",
      borderRadius: 150,
      alignSelf: "center",
    },
  },

  borderWidths: {
    default: 2,
    thin: 1,
  },

  borders: {
    selected: {
      borderColor: "primary-500",
      borderRadius: "default",
      borderWidth: "default",
    },
  },

  opacities: {
    default: 1,
    inactive: 0.5,
  },

  space: {
    zero: 0,
    xxs: 2,
    xs: 5,
    s: 7,
    m: 10,
    l: 15,
    xl: 20,
    xxl: 40,
  },

  radii: {
    default: 8,
    medium: 10,
    large: 12,
    xl: 15,
  },

  types: {
    onlyAllowThemeValues: "never",
  },

  sizes: {
    container: "100%",
  },

  layout: {
    container: {
      padding: "l",
    },
    mealList: {
      backgroundColor: "gray-200",
      marginVertical: "5%",
      borderRadius: "large",
      justifyContent: "center",
      alignItems: "center",
      flex: 10,
    },
  },

  buttons: {
    primary: {
      backgroundColor: "primary-500",
      borderRadius: "large",
      paddingX: "m",
      height: 50,
      justifyContent: "center",
      flexDirection: "row",
      marginY: "l",
      alignItems: "center",

      hoveredbg: "primary-700",
      color: "white",
      label: "callout",
    },
    ghost: {
      backgroundColor: "slate-500",
      color: "gray-900",
      borderRadius: "large",
      paddingX: "m",

      height: 50,
      justifyContent: "center",
      flexDirection: "row",
      marginY: "m",
      alignItems: "center",

      hoveredbg: "slate-700",
      label: "callout",
    },
    small: {
      backgroundColor: "primary-500",
      borderRadius: "default",
      paddingX: "m",
      height: 50,
      justifyContent: "center",
      flexDirection: "row",
      marginY: "m",
      alignItems: "center",

      hoveredbg: "primary-700",
      color: "white",
      label: "s1",
    },
    clear: {
      backgroundColor: "gray-100",
      color: "gray-900",

      height: 50,
      justifyContent: "center",
      flexDirection: "row",
      marginY: "m",
      alignItems: "center",

      hoveredbg: "gray-200",
      label: "callout",
      borderRadius: "default",
    },

    danger: {
      backgroundColor: "transparent",
      color: "red-500",

      height: 50,
      justifyContent: "center",
      flexDirection: "row",
      marginY: "m",
      alignItems: "center",

      borderWidth: "default",
      borderColor: "red-500",
      borderRadius: "default",

      hoveredbg: "red-50",
      label: "callout",
    },
    "ghost-100": {
      backgroundColor: "gray-50",
      opacity: 0.8,
      color: "black",
      borderRadius: "large",
      paddingX: "m",

      height: 50,
      justifyContent: "center",
      flexDirection: "row",
      marginY: "m",
      alignItems: "center",

      hoveredbg: "gray-300",
      label: "callout",
    },
  },

  badges: {
    default: {
      backgroundColor: "primary-500",
      paddingY: "xs",
      paddingX: "m",
      label: "s2",
      color: "white",
      borderRadius: "large",
      alignSelf: "baseline",
    },
    danger: {
      backgroundColor: "red-500",
      paddingY: "xs",
      paddingX: "m",
      label: "s2",
      color: "white",
      borderRadius: "large",
      alignSelf: "baseline",
    },
    success: {
      backgroundColor: "success-400",
      paddingY: "xs",
      paddingX: "m",
      label: "s2",
      color: "success-900",
      borderRadius: "large",
      alignSelf: "baseline",
    },
    warning: {
      backgroundColor: "warning-400",
      paddingY: "xs",
      paddingX: "m",
      label: "s2",
      color: "warning-900",
      borderRadius: "large",
      alignSelf: "baseline",
    },
  },

  bars: {
    navBar: {
      backgroundColor: "primary-500",
      paddingY: "xs",
      paddingX: "m",
      label: "headline",
      color: "white",
      borderRadius: "small",
      alignSelf: "baseline",
      width: "100%",
      height: "auto",
      paddingTop: "8%",
      // paddingLeft: "10%",
      flexDirection: "row",
    },
  },

  icons: {
    logo: {
      resizeMode: "cover",
      paddingY: "xs",
      paddingX: "m",
      width: width / 20,
      height: height / 20,
      aspectRatio: 1,
    },
  },
});

type MyTheme = typeof dripsyTheme;

declare module "dripsy" {
  interface DripsyCustomTheme extends MyTheme {}
}
