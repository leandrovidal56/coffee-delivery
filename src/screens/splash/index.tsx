import { Container, Content } from "./styles";
import { useNavigation } from "@react-navigation/native";
import CupStart from "../../assets/splash/cupStart.svg";
import CupEnd from "../../assets/splash/cupEnd.svg";
import Svg, { Circle, Rect } from "react-native-svg";
import { View } from "react-native";
import Animated, {
  BounceIn,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  FadeOut,
  FadeOutLeft,
  RotateInUpLeft,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";
import { useState } from "react";

export function Splash() {
  const { navigate } = useNavigation();
  const [show, setShow] = useState(true);

  function handleNavigationHome() {
    navigate("home");
  }

  setTimeout(() => handleNavigationHome(), 6000);
  return (
    <Container>
      <Content>
        <Animated.View
          entering={ZoomIn.duration(1000).delay(1000)}
          exiting={ZoomOut.duration(1000).delay(2101)}
        >
          <CupStart />
        </Animated.View>
        <Animated.View
          entering={FadeInRight.duration(1000).delay(2200)}
          exiting={FadeInLeft.duration(1000).delay(2201)}
        >
          <CupEnd />
        </Animated.View>
      </Content>
    </Container>
  );
}
