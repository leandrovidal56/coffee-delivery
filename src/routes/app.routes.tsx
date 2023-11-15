import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/home";
import { Splash } from "../screens/splash";
import { Product } from "../screens/product";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Screen name="splash" component={Splash} /> */}
      <Screen name="home" component={Home} />
      {/* <Screen name="product" component={Product} /> */}
    </Navigator>
  );
}
