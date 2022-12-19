import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { ShoppingIcon, ItemCount, CartIconContainer } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
