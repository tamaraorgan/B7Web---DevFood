import styled from "styled-components";

export const LinkArea = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15%;

  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.active ? "#ebf582" : "")};
  border-radius: 10px;
`;
export const LinkIcon = styled.img`
  width: 30px;
  height: 30px;
`;
