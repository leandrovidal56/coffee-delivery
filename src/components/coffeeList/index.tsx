import {
  CoffeePicture,
  Container,
  DescriptionCoffee,
  DescriptionCoffeeText,
  NameCoffeeText,
  PriceCoffeeText,
  TypeCoffee,
} from "./styles";
import CoffeeListSvg from "../../assets/home/coffeeList.svg";
export function CoffeeList() {
  return (
    <Container>
      <CoffeePicture>
        <CoffeeListSvg />
      </CoffeePicture>
      <DescriptionCoffee>
        <NameCoffeeText>Expresso Tradicional</NameCoffeeText>
        <DescriptionCoffeeText>
          O tradicional café feito com água quente e grãos moídos
        </DescriptionCoffeeText>
        <PriceCoffeeText>R$ 9,90</PriceCoffeeText>
      </DescriptionCoffee>
    </Container>
  );
}
