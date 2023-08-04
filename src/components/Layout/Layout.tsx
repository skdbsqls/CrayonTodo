import Header from "./Header";
import * as S from "../../styles/StLayout";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  );
};

export default Layout;
