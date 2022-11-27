import {
  DefaultTheme,
  NavigationContainer,
  ParamListBase,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import * as React from "react";
import { RootStackParams } from "../../types";
import { AddMealsScreen } from "../screens/AddMealsScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { Header } from "./shared";

export const RootStack = createNativeStackNavigator<RootStackParams>();
export default function Navigation() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: "white",
        },
      }}
    >
      <RootStack.Navigator
        screenOptions={{
          header: (props) => <Header {...props} />,
        }}
        initialRouteName="home_screen"
      >
        <RootStack.Screen name="home_screen" component={HomeScreen} />
        <RootStack.Screen name="add_meals_screen" component={AddMealsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
