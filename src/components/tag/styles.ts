import styled from "styled-components/native";

export const Container = styled.View`
  width: 375px;
  height: 90px;
  padding: 32px 16px;
`;
export const Title = styled.Text`
  color: #574f4d;
  font-size: 16px;
  font-weight: bold;
`;
export const Type = styled.View`
  width: 95px;
  height: 25px;
  border-radius: 12.5px;
  border: 1px solid #8047f8;
  justify-content: center;
  align-items: center;
  /* background-color: #8047f8; */
  /* // todo select option */
`;

export const Text = styled.Text`
  font-size: 10px;
  color: #4b2995;
  /* color: #ffffff; */
  font-weight: bold;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-top: 12px;
  gap: 8px;
`;
