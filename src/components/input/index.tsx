import { CoffeeImage, Container, InputBox, InputText, Title } from "./styles";
import FindSvg from "../../assets/home/find.svg";
import Coffee from "../../assets/home/coffee.svg";

export function InputComponent() {
  return (
    <Container>
      <Title>Encontre o café perfeito para qualquer hora do dia</Title>
      <InputBox>
        <FindSvg />
        <InputText placeholder="Pesquise aqui" />
      </InputBox>
      <CoffeeImage>
        <Coffee />
      </CoffeeImage>
    </Container>
  );
}
