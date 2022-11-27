import React from "react";
import { WeekDays } from "../../../graphql/generated";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

interface DropDownListProps {
  data: string[];
  onSelect: (selectedItem: string, day: WeekDays, index: number) => void;
  day: WeekDays;
}

export const DropDownList = ({ data, onSelect, day }: DropDownListProps) => (
  <SelectDropdown
    data={data}
    onSelect={(selectedItem: string, index) =>
      onSelect(selectedItem, day, index)
    }
    defaultButtonText={"Select meal"}
    buttonTextAfterSelection={(selectedItem: string) => {
      return selectedItem;
    }}
    rowTextForSelection={(item: string) => {
      return item;
    }}
    buttonStyle={styles.dropdown1BtnStyle}
    buttonTextStyle={styles.dropdown1BtnTxtStyle}
    renderDropdownIcon={(isOpened) => {
      return (
        <FontAwesome
          name={isOpened ? "chevron-up" : "chevron-down"}
          color={"#444"}
          size={12}
        />
      );
    }}
    dropdownIconPosition={"right"}
    dropdownStyle={styles.dropdown1DropdownStyle}
    rowStyle={styles.dropdown1RowStyle}
    rowTextStyle={styles.dropdown1RowTxtStyle}
  />
);
