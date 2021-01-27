import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffd700;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const ProductImage = styled.div`
  margin-right: 2%;
  > img {
    width: auto;
    height: 90px;
  }
`;
export const ProductInfo = styled.div`
  width: 65%;
  height: 100%;
  display: block;

  text-overflow: "...";
  h2 {
    font-size: 18px;
    margin: 8px 0;
  }
  p {
    white-space: nowrap;
    width: 280px;
    font-size: 12px;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (max-width: 1640px) {
    p {
      width: 250px;
    }
  }

  @media screen and (max-width: 1220px) {
    p {
      width: 230px;
    }
  } 
`;
export const ProductButtom = styled.div`
  > img {
    width: 12px;
    height: 12px;
  }
`;
