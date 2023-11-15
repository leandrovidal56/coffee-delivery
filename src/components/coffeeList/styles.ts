import styled from "styled-components/native";

export const Container = styled.View`
  width: 311px;
  height: 120px;
  background-color: #f3f2f2;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  margin-top: -80px;
  align-items: center;
  flex-direction: row;
`;
export const CoffeePicture = styled.View`
  margin-top: -60px;
  margin-left: 5px;
`;

export const DescriptionCoffee = styled.View`
  align-items: flex-start;
  width: 210px;
  margin-left: 15px;
`;

export const TypeCoffee = styled.View`
  background-color: #ebe5f9;
  width: 81px;
  height: 21px;
  border-radius: 10px;
  padding: 4px 8px;
  margin-top: 8px;
`;

export const NameCoffeeText = styled.Text`
  color: #8d8686;
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
`;

export const DescriptionCoffeeText = styled.Text`
  color: #8d8686;
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
`;
export const PriceCoffeeText = styled.Text`
  color: #c47f17;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;
