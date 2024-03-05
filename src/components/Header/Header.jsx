import { Container } from "../../App.style";
import { HeaderLink, Navigation } from "./Header.styled";

export const Header = () => {
  return (
    <header>
      <Container>
        <Navigation>
          <HeaderLink to="/">Shop</HeaderLink>
          <span>|</span>
          <HeaderLink to="/cart">Shopping Cart</HeaderLink>
        </Navigation>
      </Container>
    </header>
  );
};
