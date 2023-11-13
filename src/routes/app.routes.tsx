import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/home";
import { Splash } from "../screens/splash";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />

      <Screen name="splash" component={Splash} />
    </Navigator>
  );
}
