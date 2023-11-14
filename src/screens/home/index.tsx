import { Container, Content, Title, Wrapper } from "./styles";
import CupStart from "../../assets/splash/cupStart.svg";
import Animated, { ZoomIn } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { NavBar } from "../../components/navBar";
import { InputComponent } from "../../components/input";
import { CoffeeCard } from "../../components/coffeeCard";

export function Home() {
  return (
    <Animated.View>
      <StatusBar style="light" />
      <Container>
        <Content>
          <NavBar />
          <InputComponent />
        </Content>
        <Wrapper>
          <CoffeeCard />
        </Wrapper>
      </Container>
    </Animated.View>
  );
}
