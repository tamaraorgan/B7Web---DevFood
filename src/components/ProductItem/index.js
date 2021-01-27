import React from "react";
import { Container, ProductImage, ProductInfo, ProductButtom } from "./style";

export default ({ data, onClick }) => {
  const handleClick = () => {
    onClick(data);
  }

  return (
    <Container onClick={handleClick}>
      <ProductImage>
        <img src={data.image} alt="" />
      </ProductImage>
      <ProductInfo>
        <h2> {data.name} </h2>
        <span> R$ {data.price} </span>
        <p> <b>Descrição:</b> {data.ingredients} </p>
      </ProductInfo>
      <ProductButtom>
        <img src="/assets/button.svg" alt="" />
      </ProductButtom>
    </Container>
  );
};
