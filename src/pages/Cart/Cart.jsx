import { ShoppingCartForm } from "../../components/ShoppingCartForm/ShoppingCartForm";
import { FlexContainer } from "../../App.style";
import { favoriteSelector } from "../../redux/favorites/favoriteSelectors";
import { useSelector } from "react-redux";

export default function Cart() {
  const favorites = useSelector(favoriteSelector);
  return (
    <>
      <FlexContainer>
        <ShoppingCartForm favorites={favorites} />
      </FlexContainer>
    </>
  );
}
