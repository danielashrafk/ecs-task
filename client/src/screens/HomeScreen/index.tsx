import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box, Text, useDripsyTheme } from "dripsy";
import { DripsyList } from "../../components/atoms/DripsyList";
import { RootStackParams } from "../../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import DropDownPicker from "react-native-dropdown-picker";
import SelectDropdown from "react-native-select-dropdown";
import {
  MealInput,
  useAddMealAssignmentMutation,
  useGetMealLazyQuery,
  useGetMealQuery,
  useGetMealsLazyQuery,
  WeekDays,
} from "../../graphql/generated";
import { Meal } from "../../graphql/generated";
import {
  addId,
  addMeal,
  findMeals,
  getUniqueDays,
  partitionMeals,
} from "../../utils/meals";
import { Spinner } from "../../components/atoms/Spinner";
import { normalize } from "../../theme/utils";
import { DropDownList } from "../../components/atoms/DropDownList";
import { Button } from "../../components/atoms/Button";
import Toast from "react-native-toast-message";
import {
  ConfirmationModal,
  ConfirmationModalRef,
} from "../../components/molecules/ConfirmationModal";
import { useIsFocused } from "@react-navigation/native";
type Props = NativeStackScreenProps<RootStackParams, "home_screen">;

// const SingleItem = ({
//   item,
//   onPress,
// }: {
//   item: string;
//   onPress: () => void;
// }) => {
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <Box
//         sx={{
//           bg: "white",
//           borderRadius: "large",
//           marginVertical: "xl",
//           shadowOffset: { width: -2, height: 4 },
//           shadowColor: "#171717",
//           shadowOpacity: 0.2,
//           shadowRadius: 3,
//         }}
//       >
//         <Box
//           sx={{
//             flexDirection: "row",
//             margin: "xl",
//           }}
//         >
//           <Box sx={{ flex: 1 }}>
//             <Text variant="label" sx={{ alignItems: "flex-start" }}>
//               {item}
//             </Text>
//           </Box>
//           <Box>
//             {item.name === "Configure Card" && (
//               <Feather
//                 name="settings"
//                 size={24}
//                 color="black"
//                 style={{ alignItems: "flex-end" }}
//               />
//             )}
//           </Box>
//         </Box>
//       </Box>
//     </TouchableOpacity>
//   );
// };

export const HomeScreen = ({ navigation }: Props) => {
  const { theme } = useDripsyTheme();
  const [selected, setSelected] = React.useState<MealInput[]>([]);
  const [completed, setCompleted] = React.useState(false);
  const [mealData, setMealData] = useState<Array<Partial<Meal>>>([]);
  const [days, setDays] = useState([""]);
  const dataModal = useRef<ConfirmationModalRef>(null);
  const isFocused = useIsFocused();
  const [meals, { data: mealsData }] = useGetMealsLazyQuery({
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      setDays(getUniqueDays(mealsData?.getAllMeals as Array<Partial<Meal>>));
      setMealData(
        partitionMeals(mealsData?.getAllMeals as Array<Partial<Meal>>)
      );
      setCompleted(true);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [addMeals, { loading: isAddMealsLoading }] =
    useAddMealAssignmentMutation({
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

  useEffect(() => {
    (async () => {
      isFocused && (await meals());
    })();
  }, [isFocused]);
  const onSelect = (selectedItem: string, day: WeekDays, index: number) => {
    // let postData = addMeal(selectedItem, day, selected);
    const mealId = addId(mealData, day, index);
    const newData = addMeal(mealId, selected);
    setSelected(newData);
  };

  // console.log(selected);
  const onSubmit = async () => {
    const response = await addMeals({
      variables: {
        userId: "9a11cec5-2fd6-43d2-919b-fbe4f4c44184",
        meals: selected,
      },
    });
  };

  const _renderItem = (day: WeekDays) => {
    const meals = findMeals(mealData, day);
    // console.log(meals);
    return (
      <Box
        sx={{
          flex: 1,
          flexDirection: "column",
          paddingY: "5%",
          paddingX: "10%",
        }}
      >
        <Text variant="label">{day}</Text>
        <DropDownList data={meals} onSelect={onSelect} day={day} />
      </Box>
    );
  };

  return (
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
          Please choose your desired meals
        </Text>
      </Box>
      <Box variant="layout.mealList">
        {!completed || isAddMealsLoading ? (
          <Spinner color={theme.colors["primary-500"]} />
        ) : (
          <DripsyList
            data={days}
            renderItem={({ item }) => _renderItem(item)}
            contentContainerStyle={{
              padding: "xl",
            }}
          />
        )}
      </Box>
      <Box sx={{ flex: 1, paddingX: "xl" }}>
        <Button
          children="Submit"
          disabled={selected.length === 0 ? true : false}
          onPress={onSubmit}
        />
      </Box>
      <ConfirmationModal
        ref={dataModal}
        title="Meals assigned"
        message={"Meals successfully assigned."}
      />
    </Box>
  );
};
