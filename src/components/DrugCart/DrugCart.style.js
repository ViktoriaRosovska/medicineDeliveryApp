import styled from "styled-components";
const DrugCartContainer = styled.div`
  width: 300px;

  border: 1px solid darkgray;
  border-radius: 15px;
  padding: 20px;
`;

const CartTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  border-radius: 15px;
  border: 1px solid darkgray;
  background-color: transparent;
  padding: 8px 15px;
  &:hover {
    background-color: #535bf2 !important;
    color: white !important;
  }
`;
export { DrugCartContainer, CartTextWrapper, Button };
