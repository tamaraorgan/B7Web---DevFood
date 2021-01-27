import styled from "styled-components";

export const CartArea = styled.div`
  background-color: rgb(255, 215, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  position: fixed;
  bottom: 0;
  right: 3%;
`;
export const CartHeader = styled.div`
  height: 50px;
  width: 300px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
    margin: 0 5%;
  }
  p {
    flex: 1;
  }

  svg {
    font-size: 25px;
    padding: 2%;
  }
`;
export const CartBody = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  transition: all ease 0.5s;
  align-items: center;
  justify-content: center;
  padding: 4%;
  flex-direction: column;
`;

export const CardItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 4%;
    
  img {
    width: 65px;
    height: auto;
    margin-right: 2%;
    border-radius: 5px;
  }
  .cartbody-info {
    flex: 1;

    h5 {
      margin: 0;
    }
    span {
      margin-top: 3px;
      font-size: 13px;
    }
  }
  .cartbody-qt {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;

    .qt {
      margin: 3px;
      font-size: 13px;
    }
  }
`;
