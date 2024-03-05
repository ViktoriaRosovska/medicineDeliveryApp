import PropTypes from "prop-types";

import { CartHeader, CloseButton } from "../../App.style";

import { ShoppingDrugCartWrapper } from "./ShoppingDrugCart.style";
import { useDispatch } from "react-redux";
import { changeCount, deleteFavoriteDrug } from "../../redux/favorites/favoriteSlice";

export const ShoppingDrugCart = ({ item }) => {
  const dispatch = useDispatch();
  const product = item.product;
  return (
    <ShoppingDrugCartWrapper>
      <img
        src={`https://v.sund.uk/drugs/${product._id}.jpg`}
        width="200px"
        height="150px"
        alt={product.name + " " + product._id}
      />
      <div>
        <CartHeader>{product.name}</CartHeader>
        <p>
          Price:<span>{product.price}</span>
        </p>
        <CloseButton type="button" onClick={() => dispatch(deleteFavoriteDrug(product._id))}>
          X
        </CloseButton>
        {/* <label htmlFor="drugCount">Count:</label> */}
        <input
          type="number"
          min="1"
          id="drugCount"
          value={item.count}
          onChange={(e) => dispatch(changeCount({ _id: product._id, count: e.target.value }))}
        />
      </div>
    </ShoppingDrugCartWrapper>
  );
};
ShoppingDrugCart.propTypes = {
  item: PropTypes.object,
};
