import {
  CoffeePicture,
  Container,
  DescriptionCoffeeText,
  NameCoffeeText,
  PriceCoffeeText,
  TypeCoffee,
  TypeCoffeeText,
} from "./styles";
import CoffeeCardSvg from "../../assets/home/coffeeCard.svg";
export function CoffeeCard() {
  return (
    <Container>
      <CoffeePicture>
        <CoffeeCardSvg />
      </CoffeePicture>
      <TypeCoffee>
        <TypeCoffeeText>TRADICIONAL</TypeCoffeeText>
      </TypeCoffee>
      <NameCoffeeText>Latte</NameCoffeeText>
      <DescriptionCoffeeText>
        Café expresso com o dobro de leite e espuma cremosa
      </DescriptionCoffeeText>
      <PriceCoffeeText>R$ 9,90</PriceCoffeeText>
    </Container>
  );
}
