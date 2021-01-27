import styled from "styled-components";

export const Container = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${props => props.active == props.id ? '#EBF582' : '#FFD700'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5%;
  border-radius: 10px;
  cursor: pointer;
  transition: all ease 0.3s;
  
`;
export const CategoryImage = styled.img`
  width: 40px;
  height: 40px;
`;