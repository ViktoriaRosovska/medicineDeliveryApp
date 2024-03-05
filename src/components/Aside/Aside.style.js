import { NavLink } from "react-router-dom";
import styled from "styled-components";

const AsideContainer = styled.div`
  width: 25%;
  border: 1px solid darkgray;
  border-radius: 15px;
  padding: 20px 40px;

  min-width: 150px;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
`;
const AsideHeader = styled.h2`
  margin-bottom: 20px;
`;
const AsideListItem = styled.li`
  border: 1px solid darkgray;
  border-radius: 15px;
  height: 66px;
  margin-bottom: 30px;
  min-width: 100px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AsideNavLink = styled(NavLink)``;
export { AsideContainer, AsideListItem, AsideHeader, AsideNavLink };
