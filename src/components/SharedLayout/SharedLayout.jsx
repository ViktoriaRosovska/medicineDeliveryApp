import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root {
    padding: 0;
  }
`;
const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;
