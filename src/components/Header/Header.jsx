import { NavLink } from "react-router-dom";
import { HeaderLink, Navigation } from "./Header.styled";

export const Header = () => {
  return (
    <header>
      <Navigation>
        <HeaderLink to="/shop">Shop</HeaderLink>
        <span>|</span>
        <HeaderLink to="/cart">Shopping Cart</HeaderLink>
      </Navigation>
    </header>
  );
};
