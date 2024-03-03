import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-content: center;
  padding: 40px 60px;
`;
const HeaderLink = styled(NavLink)`
  border: 1px solid red;
`;
export { Navigation, HeaderLink };
