import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BiMinus, BiPlus } from "react-icons/bi";

import { Container, ProductAreaInfo, ProductAreaButton } from "./style";

export default ({ data, setStatus }) => {
  const dispath = useDispatch();
  const [qt, setQt] = useState(1);
  const handleCancelButton = () => {
    setStatus(false);
  };
  const handleMinus = () => {
    if (qt > 1) {
      setQt(qt - 1);
    }
  };
  const handlePlus = () => {
    setQt(qt + 1);
  };

  const handleAddToCart = () => {
    dispath({
      type: "ADD_PRODUCT",
      payload: {
        data,
        qt,
      },
    });
    setStatus(false);
  };

  useEffect(() => {
    setQt(1);
  }, [data]);

  return (
    <Container>
      <ProductAreaInfo>
        <img src={data.image} />
        <div className="product-info">
          <div className="product-desc">
            <h2>{data.name}</h2>
            <p>R${data.price},00 </p>
            <span>
              <b>Descrição: </b>
              {data.ingredients}
            </span>
          </div>
          <div className="product-quant">
            <div className="product-quant-item">
              <BiMinus onClick={handleMinus} />
              <div>{qt}</div>
              <BiPlus onClick={handlePlus} />
            </div>
            <div className="product-quant-valor"></div>
            <span>R$ {(data.price * qt).toFixed(2)}</span>
          </div>
        </div>
      </ProductAreaInfo>
      <ProductAreaButton>
        <button onClick={handleCancelButton}>Cancelar</button>
        <button className="add" onClick={handleAddToCart}>
          Adicionar
        </button>
      </ProductAreaButton>
    </Container>
  );
};
