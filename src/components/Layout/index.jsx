import React from "react";
import Wrapper from "../common/Wrapper";

const Layout = (props) => {
  const { mode, children } = props || {};

  return <Wrapper mode={mode}>{children}</Wrapper>;
};

export default Layout;
