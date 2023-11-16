import { Button, ButtonText, Container, Picture, Text, Title } from "./styles";

import ScooterSvg from "../../assets/orderConfirmed/scooter.svg";
import MovimentSvg from "../../assets/orderConfirmed/moviment.svg";
import PersonSvg from "../../assets/orderConfirmed/person.svg";

export function OrderConfirmed() {
  return (
    <Container>
      <Picture>
        <MovimentSvg style={{ position: "absolute", marginTop: 35 }} />
        <ScooterSvg style={{ position: "relative", marginTop: 45 }} />
        <PersonSvg style={{ position: "absolute" }} />
      </Picture>
      <Title>Uhu! Pedido Confirmado</Title>
      <Text>Agora é só aguardar, que logo o café chegará até você</Text>
      <Button>
        <ButtonText>IR PARA A HOME</ButtonText>
      </Button>
    </Container>
  );
}
