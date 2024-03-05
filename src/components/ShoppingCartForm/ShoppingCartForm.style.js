import { PageWrapper } from "../../App.style";
import ReactInputMask from "react-input-mask";
import styled from "styled-components";

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px 20px;
`;
const FormInput = styled(ReactInputMask)`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border: 1px solid darkgray;
  border-radius: 10px;
  padding: 5px 10px;
`;
const FormLabel = styled.label`
  margin-bottom: 10px;
`;
const UserFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 80px 30px 20px;
  border: 1px solid darkgray;
  border-radius: 15px;
  width: 500px;
`;
const ShoppingCartFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 400px;
  margin-bottom: 40px;
`;
const CartWrapper = styled(PageWrapper)`
  padding-right: 80px;
  padding-left: 40px;
  overflow-y: scroll;
  min-width: 602px;
  min-height: 400p;
`;
const TotalResult = styled.div`
  margin-right: 0;
  margin-left: auto;
  display: flex;
  gap: 40px;
`;
export { FormContainer, FormInput, FormLabel, UserFormWrapper, ShoppingCartFormWrapper, CartWrapper, TotalResult };
