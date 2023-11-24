import {
  Container,
  CoffeeCard,
  ProductInfo,
  NameProduct,
  Description,
  ProductDetails,
  PriceProduct,
  Action,
  ProductSummary,
  AddAndRemoveAction,
  Quantity,
  ActionRemove,
  SelectQuantity,
  Trash,
  Card,
  ResumeOrder,
  ValueOrder,
  TextValue,
  RequestButton,
  ButtonText,
  CardList,
  NavBar,
  NavText,
  NavReturn,
} from "./styles";
import CoffeeSvg from "../../assets/cart/coffee.svg";
import TrashSvg from "../../assets/cart/trash.svg";
import PlusSvg from "../../assets/cart/plus.svg";
import RemoveSvg from "../../assets/cart/remove.svg";
import ReturnSvg from "../../assets/cart/return.svg";
import ActionRemoveSvg from "../../assets/cart/actionRemove.svg";
import { AddButton } from "../product/styles";

export function Cart() {
  return (
    <Container>
      <NavBar>
        <NavReturn>
          <ReturnSvg />
        </NavReturn>
        <NavText>Carrinho</NavText>
      </NavBar>
      <CardList>
        <Card>
          <CoffeeCard>
            <CoffeeSvg />
            <ProductInfo>
              <ProductDetails>
                <ProductSummary>
                  <NameProduct>Irlândes</NameProduct>
                  <Description>227ml</Description>
                </ProductSummary>
                <PriceProduct>R$9,90</PriceProduct>
              </ProductDetails>
              <SelectQuantity>
                <Action>
                  <AddAndRemoveAction>
                    <RemoveSvg />
                  </AddAndRemoveAction>
                  <Quantity>2</Quantity>
                  <AddAndRemoveAction>
                    <PlusSvg />
                  </AddAndRemoveAction>
                </Action>
                <Trash>
                  <TrashSvg />
                </Trash>
              </SelectQuantity>
            </ProductInfo>
          </CoffeeCard>
        </Card>
        <Card>
          <ActionRemove>
            <ActionRemoveSvg />
          </ActionRemove>
          <CoffeeCard>
            <CoffeeSvg />
            <ProductInfo>
              <ProductDetails>
                <ProductSummary>
                  <NameProduct>Irlândes</NameProduct>
                  <Description>227ml</Description>
                </ProductSummary>
                <PriceProduct>R$9,90</PriceProduct>
              </ProductDetails>
              <SelectQuantity>
                <Action>
                  <AddAndRemoveAction>
                    <RemoveSvg />
                  </AddAndRemoveAction>
                  <Quantity>2</Quantity>
                  <AddAndRemoveAction>
                    <PlusSvg />
                  </AddAndRemoveAction>
                </Action>
                <Trash>
                  <TrashSvg />
                </Trash>
              </SelectQuantity>
            </ProductInfo>
          </CoffeeCard>
        </Card>
      </CardList>
      <ResumeOrder>
        <ValueOrder>
          <NameProduct>Valor total</NameProduct>
          <TextValue>R$ 9,90</TextValue>
        </ValueOrder>
        <RequestButton>
          <ButtonText>CONFIRMAR PEDIDO</ButtonText>
        </RequestButton>
      </ResumeOrder>
    </Container>
  );
}
