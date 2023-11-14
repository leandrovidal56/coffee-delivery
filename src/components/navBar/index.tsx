import { CartView, Container, Location, LocationRow } from "./styles";
import LocationSvg from "../../assets/home/location.svg";
import CartSvg from "../../assets/home/cart.svg";

export function NavBar() {
  return (
    <Container>
      <LocationRow>
        <LocationSvg />
        <Location>São Paulo, SP</Location>
      </LocationRow>
      <CartView>
        <CartSvg />
      </CartView>
    </Container>
  );
}
