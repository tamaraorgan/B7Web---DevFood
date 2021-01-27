import styled from "styled-components";

export const Container = styled.div`
  width: 740px;
  padding: 10px;
`;

export const ProductAreaInfo = styled.div`
  display: flex;

  img {
    width: 40%;
    height: auto;
    border-radius: 5px;
  }
  .product-info {
    flex: 1;
    display: flex;
    flex-direction: column;

    .product-desc {
      flex: 1;
      margin-left: 2%;
      h2 {
        margin-bottom: 1%;
      }
      span {
        font-size: 13px;
      }
    }

    .product-quant {
      flex: 1;
      margin: 0 2%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 3%;
      .product-quant-item {
        display: flex;
        align-items: center;
        
        svg {
          margin: 0 5px;
          background-color: #EBF582;
          padding: 3px;
          border-radius: 5px;
          cursor: pointer;
          :hover {
            background-color: #EBF582c8;
          }
        }

        div {
          font-family: sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20px;
          height: 20px;          
        }
      }
    }
  }
`;
export const ProductAreaButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2%;

  button {
    border: 0;
    background-color: #EBF582;
    padding: 2% 5%;
    border-radius: 5px;
    margin: 1%;
    font-weight: 500;
    cursor: pointer;
    :hover {
      background-color: #EBF582c8;
    }
  }
  .add {
      width: 250px;
    }
`;
