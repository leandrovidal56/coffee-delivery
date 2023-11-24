import { Button, ButtonText, Container, Picture, Text, Title } from "./styles";

import ScooterSvg from "../../assets/orderConfirmed/scooter.svg";
import MovimentSvg from "../../assets/orderConfirmed/moviment.svg";
import PersonSvg from "../../assets/orderConfirmed/person.svg";
import Animated, {
  Easing,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  RollInLeft,
  RollOutLeft,
  SlideInLeft,
  ZoomIn,
} from "react-native-reanimated";

export function OrderConfirmed() {
  return (
    <Container>
      <Picture>
        <Animated.View
          entering={FadeInLeft.duration(1000).delay(1000)}
          exiting={FadeInRight.duration(2000).delay(1000)}
        >
          <ScooterSvg
            style={{ position: "absolute", marginTop: 45, marginLeft: -45 }}
          />
          <PersonSvg style={{ position: "relative" }} />
          <MovimentSvg
            style={{
              position: "absolute",
              marginTop: 35,
              marginLeft: -110,
            }}
          />
        </Animated.View>
      </Picture>
      <Animated.View entering={FadeInDown.duration(1000).delay(2000)}>
        <Title>Uhu! Pedido Confirmado</Title>
      </Animated.View>
      <Animated.View entering={FadeInDown.duration(1000).delay(3000)}>
        <Text>Agora é só aguardar, que logo o café chegará até você</Text>
      </Animated.View>
      <Animated.View entering={FadeInDown.duration(1000).delay(4000)}>
        <Button>
          <ButtonText>IR PARA A HOME</ButtonText>
        </Button>
      </Animated.View>
    </Container>
  );
}
