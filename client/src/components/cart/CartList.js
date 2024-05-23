import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const CartList = () => {
  const navigate = useNavigate();
  const { carts, changeCount } = useCart();

  return (
    <div>
      <h2>장바구니</h2>
      <div>
        {carts.length === 0 ? (
          <h3>장바구니에 담긴 상품이 없습니다.</h3>
        ) : (
          carts.map(item => (
            <ul key={item.id}>
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>{item.explanation}</li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
};

export default CartList;
