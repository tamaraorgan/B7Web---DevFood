import styled from "styled-components";

export const Container = styled.div`
  height: 90px;
  background-color: rgb(255, 215, 0);
  border-radius: 10px;
  padding: 1% 2%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 75px;
`;

export const SearchInput = styled.input`
  border: none;
  border-radius: 25px;
  width: ${(props) => (props.active ? 300 : 0)}px;
  height: 50px;
  outline: 0;
  transition: all ease .2s;

  background-image: url("/assets/seach.svg");
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: 10px center;
  padding-left: 3%;
  background-color: #ebf582;
  cursor: pointer;

  :focus {
    cursor: text;
  } 

  ::placeholder {
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
  }

  @media screen and (max-width: 1220px) {
    height: 40px;
    width: ${(props) => (props.active ? 300 : 40)}px;
    background-size: 25px;
    padding-left: 5%;
  }
  
`;
