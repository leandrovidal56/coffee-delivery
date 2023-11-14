import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  padding: 0px 32px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  width: 311px;
`;

export const InputBox = styled.View`
  background-color: #403937;
  height: 42px;
  width: 311px;
  padding: 12px;
  margin-top: 15px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;
export const InputText = styled.TextInput.attrs({
  placeholderTextColor: "#8d8686",
})`
  margin-left: 8px;
  color: #8d8686;
`;

export const CoffeeImage = styled.View`
  align-items: flex-end;
`;
