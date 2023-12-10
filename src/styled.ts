import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppHeader = styled.div`
  background-color: #007946;
  height: 100px;
  padding: 20px;
  color: white;
`;

export const AppResult = styled.div`
  color: black;
`;

export const FieldSeparator = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

const S = {
  AppContainer,
  AppHeader,
  AppResult,
  FieldSeparator,
}

export default S;
