import React, { useContext, Suspense } from "react";
import { Redirect, Router } from "@reach/router";

import { Details } from "./pages/Details";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
// import Favs from "./pages/Favs";
import User from "./pages/user";
import NotRegisterUser from "./pages/NotRegisterUser";
import { Navbar } from "./components/NavBar";
import NotFound from "./pages/NotFound";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Context } from "./Context";

const Favs = React.lazy(() => import("./pages/Favs"));

const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Details path="/detail/:detailId" />
        {!isAuth && <NotRegisterUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <Navbar />
    </Suspense>
  );
};

export default App;
