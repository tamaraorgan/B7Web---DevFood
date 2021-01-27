import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiMinus, BiPlus, BiChevronDown } from "react-icons/bi";
import { CartArea, CartHeader, CartBody, CardItem } from "./style";

export default () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const handleProductChance = (key, type) => {
    dispatch({
      type: "CHANGE_PRODUCT",
      payload: {
        key,
        type,
      },
    });
  };

  return (
    <CartArea>
      <CartHeader onClick={handleCartClick}>
        <img src="/assets/cart.svg" />
        <p>Meu Carrinho ({products.length})</p>
        {showCart && <BiChevronDown />}
      </CartHeader>
      <CartBody show={showCart}>
        {products.map((item, index) => (
          <CardItem key={index}>
            <img src={item.image} alt="" />
            <div className="cartbody-info">
              <h5>{item.name}</h5>
              <span>R${item.price.toFixed(2)}</span>
            </div>
            <div className="cartbody-qt">
              <BiMinus onClick={() => handleProductChance(index, "-")} />
              <div className="qt">{item.qt}</div>
              <BiPlus onClick={() => handleProductChance(index, "+")} />
            </div>
          </CardItem>
        ))}
      </CartBody>
    </CartArea>
  );
};
