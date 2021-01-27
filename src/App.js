import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
/*import { useSelector } from "react-redux";*/
import ReactTooltip from "react-tooltip";

import PrivateRoute from "./components/PrivateRoute";

import HomeScreen from "./pages/HomeScreen";
import Tela2Screen from "./pages/Tela2Screen";
import MenuItem from "./components/MenuItem";
import Cart from "./components/Cart";

import { Container, Menu, PageBody } from "./AppStyled";

export default () => {
  /*const name = useSelector((state) => state.user.name);*/

  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem title="Loja" icon="/assets/store.svg" link="/" />
          <MenuItem title="Pedidos" icon="/assets/order.svg" link="/orders" />
          <MenuItem
            title="Meu Perfil"
            icon="/assets/profile.svg"
            link="/profile"
          />
        </Menu>
        <PageBody>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <PrivateRoute path="/orders">
              /** substitui pela rota criada, as rotas que serão privadas */
              <h1>Pedidos</h1>
            </PrivateRoute>
            <PrivateRoute path="/profile">
              /** substitui pela rota criada, as rotas que serão privadas */
              <h1>Perfil</h1>
            </PrivateRoute>
            <Route path="/tela2/:nome">
              <Tela2Screen />
            </Route>
          </Switch>
        </PageBody>
        <Cart />
        <ReactTooltip id="tip-top" place="top" effect="solid" />
        <ReactTooltip id="tip-right" place="right" effect="solid" />
      </Container>
    </BrowserRouter>
  );
};
