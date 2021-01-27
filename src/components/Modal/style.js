import styled from "styled-components";

export const Container = styled.div`
  display: ${props => props.status ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ebf582c8;
  z-index: 1;

  justify-content: center;
  align-items: center;
`;

export const ModalArea = styled.div`
  background-color: #ffd700;
  border-radius: 15px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
  max-height: 90vh;
  max-width: 80vw;
  overflow: auto;
  padding: 1%;
`;
