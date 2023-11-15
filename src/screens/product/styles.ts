import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Content = styled.View`
  background-color: #272221;
  width: 100%;
  height: 74%;

  align-items: center;
  padding-top: 76px;
`;

export const Details = styled.View`
  width: 311px;
`;
export const DetailsRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Type = styled.View``;

export const Tag = styled.View`
  width: 70px;
  height: 25px;
  padding: 6px 10px;
  background-color: #403937;
  border-radius: 20px;
`;

export const TagText = styled.Text`
  color: #ffffff;
  font-size: 10px;
  font-weight: bold;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;

export const PriceMoney = styled.Text`
  color: #dbac2c;
  font-size: 12px;
  font-weight: 400;
`;
export const Price = styled.Text`
  color: #dbac2c;
  font-size: 24px;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #d7d5d5;
  margin-top: 20px;
`;
export const CoffeImage = styled.View`
  align-items: center;
  position: absolute;
  margin-top: 210px;
  height: 190px;
`;
export const ChooseSize = styled.View`
  height: 222px;
  width: 100%;
  /* background-color: #fafafa; */
  /* align-items: center; */
  padding: 20px 32px;
`;

export const DescriptionSize = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #8d8686;
  text-align: left;
`;

export const Options = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-top: 10px;
`;
export const SizeBox = styled.View`
  width: 98px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  /* background-color: #ededed; */
  background-color: #ffffff;
  border: 1px solid #8047f8;
`;

export const TextSize = styled.Text`
  font-size: 14px;
  /* font-weight: 400; */
  font-weight: 700;
  /* color: #574f4d; */
  color: #8047f8;
`;

export const SelectQuatity = styled.View`
  background-color: #ededed;
  width: 311px;
  height: 62px;
  border-radius: 6px;
  margin-top: 20px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Counter = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const CounterButton = styled.Text`
  font-size: 22px;
  font-weight: 400;
  color: #8047f8;
`;
export const CounterActual = styled.Text`
  color: #272221;
  width: 20px;
  text-align: center;
`;
export const RemoveAndAddButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
`;

export const AddButton = styled.TouchableOpacity`
  width: 179px;
  height: 46px;
  background-color: #4b2995;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const AddButtonText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
`;
