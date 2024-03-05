import PropTypes from "prop-types";
import { useFormik } from "formik";
import {
  CartWrapper,
  FormContainer,
  FormInput,
  FormLabel,
  ShoppingCartFormWrapper,
  TotalResult,
  UserFormWrapper,
} from "./ShoppingCartForm.style";
import { ShoppingDrugCart } from "../../components/ShoppingDrugCart/ShoppingDrugCart";

export const ShoppingCartForm = ({ favorites }) => {
  const savedUserCart = JSON.parse(localStorage.getItem("productCart"));
  // console.log(savedUserCart);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      productCart: "",
    },
    // validationSchema: Yup.object().shape({
    //   drink: Yup.string().max(40).required("This field is required"),

    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("address", values.address);
      formData.append("productCart", JSON.stringify(favorites));
      console.log(Object.fromEntries(formData));
      localStorage.setItem("productCart", JSON.stringify(Object.fromEntries(formData)));
    },
  });
  let sum = 0;
  if (favorites)
    for (const item of favorites) {
      sum += item.count * item.product.price;
    }

  if (!favorites) return;
  return (
    <FormContainer name="shoppingCartForm" onSubmit={formik.handleSubmit}>
      <ShoppingCartFormWrapper>
        <UserFormWrapper>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <FormInput
            type="text"
            placeholder="Your name"
            id="name"
            required
            name="name"
            onChange={formik.handleChange}
            value={savedUserCart?.name ? savedUserCart.name : formik.values.name}
          />

          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput
            type="email"
            placeholder="Your email"
            id="email"
            name="email"
            required
            onChange={formik.handleChange}
            value={savedUserCart?.email ? savedUserCart.email : formik.values.email}
          />

          <FormLabel htmlFor="phone">Phone:</FormLabel>
          <FormInput
            type="text"
            placeholder="Your phone"
            name="phone"
            id="phone"
            mask="+38(999)999-99-99"
            // pattern="^\+38(\s+)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$"
            required
            onChange={formik.handleChange}
            value={savedUserCart?.phone ? savedUserCart.phone : formik.values.phone}
          />
          <FormLabel htmlFor="address">Address:</FormLabel>
          <FormInput
            type="text"
            placeholder="Your address"
            id="address"
            name="address"
            required
            onChange={formik.handleChange}
            value={savedUserCart?.address ? savedUserCart.address : formik.values.address}
          />
        </UserFormWrapper>
        <CartWrapper>
          {Boolean(favorites) &&
            favorites.map((item) => {
              return <ShoppingDrugCart key={item.product._id} item={item} />;
            })}
          {Boolean(favorites.length) == false && <p>Thete no items in the cart</p>}
        </CartWrapper>
      </ShoppingCartFormWrapper>
      <TotalResult>
        <p>Total price: {sum.toFixed(2)}</p>
        <button type="submit">Submit</button>
      </TotalResult>
    </FormContainer>
  );
};
ShoppingCartForm.propTypes = {
  favorites: PropTypes.array,
};
