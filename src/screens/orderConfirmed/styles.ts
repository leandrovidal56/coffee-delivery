import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Picture = styled.View`
  width: 270px;
  height: 161px;
  /* align-items: center; */
  flex-direction: row;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #c47f17;
  margin-top: 20px;
`;
export const Text = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #403937;
  width: 60%;
  text-align: center;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 247px;
  height: 46px;
  background-color: #4b2995;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
`;
