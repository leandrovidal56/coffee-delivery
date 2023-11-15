import { Container, Row, Type, Text, Title } from "./styles";

export function Tag() {
  return (
    <Container>
      <Title>Nossos cafés</Title>
      <Row>
        <Type>
          <Text>TRADICIONAIS</Text>
        </Type>
        <Type>
          <Text>DOCES</Text>
        </Type>
        <Type>
          <Text>ESPECIAIS</Text>
        </Type>
      </Row>
    </Container>
  );
}
