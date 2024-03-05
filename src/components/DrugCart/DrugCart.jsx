import PropTypes from "prop-types";
import { Button, CartTextWrapper, DrugCartContainer } from "./DrugCart.style";
// import drug from "../../assets/images/drug.jpg";
import { CartHeader } from "../../App.style";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteDrug, deleteFavoriteDrug } from "../../redux/favorites/favoriteSlice.js";
import { favoriteSelector } from "../../redux/favorites/favoriteSelectors";
import { useState } from "react";
export const DrugCart = ({ item }) => {
  const [onButtonClick, setOnButtonClick] = useState(false);
  const dispatch = useDispatch();
  const favorites = new Set(useSelector(favoriteSelector));
  const isFavorite = item && favorites.has(item._id);
  const handleButtonClick = () => {
    if (!isFavorite) {
      dispatch(addFavoriteDrug(item));
    } else {
      dispatch(deleteFavoriteDrug(item));
    }
    setOnButtonClick(!onButtonClick);
  };
  return (
    <DrugCartContainer>
      <img
        src={`https://v.sund.uk/drugs/${item._id}.jpg`}
        width="200px"
        height="150px"
        alt={item.name + " " + item._id}
      />
      <CartHeader>{item.name}</CartHeader>
      <CartTextWrapper>
        <span>{item.price}</span>
        <Button
          type="button"
          style={{
            backgroundColor: !onButtonClick ? "transparent" : "#646cff",
            color: !onButtonClick ? "inherit" : "white",
          }}
          onClick={(item) => handleButtonClick(item)}
        >
          {!onButtonClick ? "add the Card" : "in Card"}
        </Button>
      </CartTextWrapper>
    </DrugCartContainer>
  );
};
DrugCart.propTypes = {
  item: PropTypes.object,
};
