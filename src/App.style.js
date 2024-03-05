import styled from "styled-components";

const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`;
const PageWrapper = styled.div`
  border: 1px solid darkgray;
  border-radius: 15px;
  padding: 20px;
`;
const FlexContainer = styled(Container)`
  display: flex;
  gap: 20px;
`;
const CartHeader = styled.h3`
  margin-bottom: 20px;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  &:hover {
    color: #646cff;
  }
`;
export { Container, PageWrapper, FlexContainer, CartHeader, CloseButton };
