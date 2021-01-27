import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default ({ children, ...rest }) => {
  const history = useHistory();
  const token = useSelector((state) => state.user.token);

  if (!token || token === "") {
    history.push("/login");
    return null;
  } /** verificação para que se não tiver logado será redirecionado para a pagina de login */

  return <Route {...rest}>{children}</Route>;
};
/** trata-se de um clone do router do App, ele replica o que está sendo feito lá  */
