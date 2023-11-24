import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/home";
import { Splash } from "../screens/splash";
import { Product } from "../screens/product";
import { OrderConfirmed } from "../screens/orderConfirmed";
import { Cart } from "../screens/cart";

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
      {/* <Screen name="product" component={Product} /> */}
      <Screen name="cart" component={Cart} />
      {/* <Screen name="orderConfirmed" component={OrderConfirmed} /> */}
    </Navigator>
  );
}
