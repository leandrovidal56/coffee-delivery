import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

export const NavBar = styled.View`
  width: 100%;
  height: 76px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #ededed;
  margin-top: 24px;
`;

export const NavReturn = styled.View`
  left: 32px;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const NavText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #403937;
`;

export const CardList = styled.View`
  height: 65%;
`;
export const Card = styled.View`
  height: 117px;

  flex-direction: row;
`;
export const CoffeeCard = styled.View`
  padding: 16px 32px;
  background-color: #fafafa;
  flex-direction: row;
`;

export const ProductInfo = styled.View`
  width: 260px;
  margin-left: 15px;
`;

export const ProductDetails = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const ProductSummary = styled.View``;

export const NameProduct = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #272221;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #8d8686;
`;

export const PriceProduct = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #272221;
`;
export const SelectQuantity = styled.View`
  width: 144px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const Action = styled.View`
  flex-direction: row;
  border: 1px solid #ededed;
  width: 100px;
  height: 36px;
  justify-content: space-between;

  border-radius: 6px;
  align-items: center;
`;

export const AddAndRemoveAction = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
`;

export const Quantity = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #272221;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const Trash = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background-color: #e6e5e5;

  align-items: center;
  justify-content: center;
`;

export const ActionRemove = styled.View`
  background-color: #f2dfd8;
  width: 95px;
  height: 117px;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

export const ResumeOrder = styled.View`
  background-color: #ffffff;
  padding: 28px 40px 32px 32px;
  align-items: center;
`;

export const ValueOrder = styled.View`
  width: 311px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextValue = styled.Text`
  color: #403937;
  font-size: 20px;
  font-weight: bold;
`;

export const RequestButton = styled.TouchableOpacity`
  width: 311px;
  height: 46px;
  justify-content: center;
  align-items: center;
  background-color: #c47f17;
  border-radius: 6px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
`;
