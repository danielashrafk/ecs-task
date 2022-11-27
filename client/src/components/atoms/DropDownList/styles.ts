import { Dimensions, PixelRatio, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");
export default StyleSheet.create({
  dropdown1BtnStyle: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: "#0000",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left", fontSize: 15 },
  dropdown1DropdownStyle: {
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
  },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left", fontSize: 15 },
  divider: { width: 12 },
});
