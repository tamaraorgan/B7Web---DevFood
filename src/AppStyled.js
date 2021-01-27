import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: honeydew;
`;
export const Menu = styled.div`
  width: 80px;
  height: 100%;
  background-color:  rgb(255, 215, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PageBody = styled.div`
  background-color: honeydew;
  display: flex;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;
