import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/home";
import { Splash } from "../screens/splash";
import { Product } from "../screens/product";
import { OrderConfirmed } from "../screens/orderConfirmed";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Screen name="splash" component={Splash} /> */}
      {/* <Screen name="home" component={Home} /> */}
      <Screen name="orderConfirmed" component={OrderConfirmed} />
      {/* <Screen name="product" component={Product} /> */}
    </Navigator>
  );
}
