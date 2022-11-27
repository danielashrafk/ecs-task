import React, { useCallback, useRef, useState } from "react";
import { Box, Text, useDripsyTheme } from "dripsy";
import { DripsyList } from "../../components/atoms/DripsyList";
import { RootStackParams } from "../../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Form, FormItem, Picker } from "react-native-form-component";
import { KeyboardDismisser } from "../../components/atoms/KeyboardDismisser";
import { DropDownList } from "../../components/atoms/DropDownList";
import Toast from "react-native-toast-message";
import { useAddMealMutation, WeekDays } from "../../graphql/generated";
import {
  ConfirmationModalRef,
  ConfirmationModal,
} from "../../components/molecules/ConfirmationModal";
import { Spinner } from "../../components/atoms/Spinner";
import { KeyboardAvoidingView } from "react-native";

type Props = NativeStackScreenProps<RootStackParams, "add_meals_screen">;

export const AddMealsScreen = ({ navigation }: Props) => {
  const { theme } = useDripsyTheme();
  const mealInput = useRef();
  const dayInput = useRef();
  const [meal, setMeal] = useState("");
  const [day, setDay] = useState("");
  const [number, setNumber] = useState(1);
  const dataModal = useRef<ConfirmationModalRef>(null);
  const [addMeal, { loading }] = useAddMealMutation({
    onCompleted: () => {
      dataModal.current?.show();
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        position: "top",
        autoHide: true,
        visibilityTime: 4000,
        text1: "Bad Request",
        text2: "Invalid input",
      });
    },
  });

  const onSelect = (item: any) => {
    setNumber(item.value);
    setDay(item.label);
  };

  const onSubmit = () => {
    if (meal === "")
      Toast.show({
        type: "error",
        position: "top",
        autoHide: true,
        visibilityTime: 4000,
        text1: "Invalid Input",
        text2: "Please type in a meal",
      });
    else {
      const response = addMeal({
        variables: {
          day:
            day === ""
              ? ("Sunday" as unknown as WeekDays)
              : (day as unknown as WeekDays),
          meal: meal,
        },
      });
    }
  };

  return (
    <KeyboardDismisser>
      <Box
        sx={{
          flex: 1,
          flexDirection: "column",
          paddingY: "20%",
          paddingX: "10%",
        }}
      >
        <Box>
          <Text variant="h3" sx={{ textAlign: "center" }}>
            Please add a meal
          </Text>
        </Box>
        <Box variant="layout.mealList">
          {loading ? (
            <Spinner color={theme.colors["primary-500"]} />
          ) : (
            <Box
              sx={{
                padding: "xxl",
                width: "100%",
              }}
            >
              <Form
                onButtonPress={onSubmit}
                buttonStyle={{
                  backgroundColor: "#0068FF",
                  borderRadius: "10",
                  height: 50,
                  width: "90%",
                  alignSelf: "center",
                }}
                buttonTextStyle={{ fontWeight: "normal" }}
              >
                <FormItem
                  label="Meal"
                  value={meal}
                  onChangeText={(meal) => setMeal(meal)}
                  ref={mealInput}
                  labelStyle={{ paddingBottom: "4%" }}
                />
                <Picker
                  items={[
                    { label: "Sunday", value: 1 },
                    { label: "Monday", value: 2 },
                    { label: "Tuesday", value: 3 },
                    { label: "Wednesday", value: 4 },
                    { label: "Thursday", value: 5 },
                  ]}
                  label="Day"
                  selectedValue={number}
                  onSelection={onSelect}
                  labelStyle={{ paddingBottom: "4%" }}
                />
              </Form>
            </Box>
          )}
        </Box>
      </Box>

      <ConfirmationModal
        ref={dataModal}
        title="Meal Added"
        message={"Meal successfully added."}
      />
    </KeyboardDismisser>
  );
};
