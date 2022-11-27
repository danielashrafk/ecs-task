import { Box, DripsyVariant, useDripsyTheme, Text } from "dripsy";
import React, { useEffect } from "react";
import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import {
  useGetUserLazyQuery,
  useGetUsersLazyQuery,
  UserRole,
} from "../graphql/generated";
import { userIdState, userRole } from "../store/atom";
import { useSetRecoilState } from "recoil";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ParamListBase } from "@react-navigation/native";
import {
  NativeStackHeaderProps,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";
import { Feather } from "@expo/vector-icons";
interface HeaderProps extends NativeStackHeaderProps {
  variant?: DripsyVariant<"bars">;
  children?: ReactNode;
}

export const Header = ({
  variant = "navBar",
  children = "ECS",
  ...props
}: HeaderProps) => {
  const { theme } = useDripsyTheme();
  const { color = "white", label, ...defaultSX } = theme.bars?.[variant];
  const setUserRole = useSetRecoilState(userRole);
  const userId = useRecoilValue(userIdState);
  const [getUser, { data: userData }] = useGetUserLazyQuery({
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      setUserRole(userData?.getUser?.role as UserRole);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    (async () => {
      await getUser({
        variables: {
          id: userId,
        },
      });
    })();
  }, []);

  return (
    <>
      <Box sx={defaultSX}>
        {props.navigation.canGoBack() && (
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={props.navigation.goBack}
              style={{ marginTop: "-60%" }}
            >
              <Feather name="chevron-left" size={24} color="white" />
            </TouchableOpacity>
          </Box>
        )}
        <Box sx={{ flex: 1, justifyContent: "center", paddingLeft: "5%" }}>
          <Text variant={label} sx={{ color }}>
            {children}
          </Text>
        </Box>
        {useRecoilValue(userRole) === UserRole.Admin &&
          !props.navigation.canGoBack() && (
            <Box
              sx={{
                flex: 1,
                alignItems: "flex-end",
                paddingX: "xl",
                alignContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("add_meals_screen");
                }}
                style={{ marginTop: "-2%" }}
              >
                <MaterialIcons
                  name="add-shopping-cart"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </Box>
          )}
      </Box>
    </>
  );
};
