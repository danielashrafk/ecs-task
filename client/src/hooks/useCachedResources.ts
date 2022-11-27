import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          "font-thin": require("../assets/fonts/Biotif-Book.ttf"),
          "font-extralight": require("../assets/fonts/Biotif-Book.ttf"),
          "font-light": require("../assets/fonts/Biotif-Light.ttf"),
          "font-regular": require("../assets/fonts/Biotif-Regular.ttf"),
          "font-medium": require("../assets/fonts/Biotif-Medium.ttf"),
          "font-semibold": require("../assets/fonts/Biotif-SemiBold.ttf"),
          "font-bold": require("../assets/fonts/Biotif-Bold.ttf"),
          "font-extrabold": require("../assets/fonts/Biotif-ExtraBold.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
