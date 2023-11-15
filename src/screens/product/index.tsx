import { NavBar } from "../../components/navBar";
import {
  AddButton,
  AddButtonText,
  ChooseSize,
  CoffeImage,
  Container,
  Content,
  Counter,
  CounterActual,
  CounterButton,
  Description,
  DescriptionSize,
  Details,
  DetailsRow,
  Options,
  Price,
  PriceMoney,
  RemoveAndAddButton,
  SelectQuatity,
  SizeBox,
  Tag,
  TagText,
  TextSize,
  Title,
  Type,
} from "./styles";

import CoffeeSvg from "../../assets/product/coffee.svg";
import SmokeSvg from "../../assets/product/smoke.svg";

export function Product() {
  return (
    <Container>
      <Content>
        <Details>
          <DetailsRow>
            <Type>
              <Tag>
                <TagText>ESPECIAL</TagText>
              </Tag>
              <Title>Irlandês</Title>
            </Type>
            <Price>
              <PriceMoney>R$ </PriceMoney>
              24,99
            </Price>
          </DetailsRow>
          <Description>
            Bebida a base de café, uísque irlandês, açúcar e chantily
          </Description>
        </Details>

        <CoffeImage>
          <SmokeSvg
            style={{
              position: "absolute",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          />
          <CoffeeSvg
            style={{
              position: "relative",
              zIndex: 1,
              marginTop: 80,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red ",
            }}
          />
        </CoffeImage>
      </Content>
      <ChooseSize>
        <DescriptionSize>Selecione o tamanho:</DescriptionSize>
        <Options>
          <SizeBox>
            <TextSize>114ml</TextSize>
          </SizeBox>
          <SizeBox>
            <TextSize>140ml</TextSize>
          </SizeBox>
          <SizeBox>
            <TextSize>227ml</TextSize>
          </SizeBox>
        </Options>
        <SelectQuatity>
          <Counter>
            <RemoveAndAddButton>
              <CounterButton>-</CounterButton>
            </RemoveAndAddButton>
            <CounterActual>1</CounterActual>
            <RemoveAndAddButton>
              <CounterButton>+</CounterButton>
            </RemoveAndAddButton>
          </Counter>
          <AddButton>
            <AddButtonText>ADICIONAR</AddButtonText>
          </AddButton>
        </SelectQuatity>
      </ChooseSize>
    </Container>
  );
}
