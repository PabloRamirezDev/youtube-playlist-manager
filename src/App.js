import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { useCookies } from "react-cookie";
import "./App.css";
import { getChannelInfo } from "./services/authentication";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    accessToken: "",
    tokenType: "",
    expiresIn: "",
    scope: "",
    channel: {},
  });
  const [cookies, setCookie, deleteCookie] = useCookies();

  const handleLogin = (user) => {
    if (
      user &&
      user.accessToken &&
      user.tokenType &&
      user.expiresIn &&
      user.scope
    ) {
      const { accessToken, tokenType, expiresIn, scope } = user;
      getChannelInfo(accessToken).then((res) => {
        const channel = res.data.items[0];
        setUser({
          accessToken,
          tokenType,
          expiresIn,
          scope,
          channel,
        });
        setIsLoggedIn(true);
        setCookie(
          "user",
          {
            accessToken,
            tokenType,
            expiresIn,
            scope,
            channel,
          },
          {
            path: "/",
            maxAge: parseInt(expiresIn),
          }
        );
      });
    }
  };

  const handleLogout = () => {
    deleteCookie("user");
    setIsLoggedIn(false);
    setUser({
      accessToken: "",
      tokenType: "",
      expiresIn: "",
      scope: "",
      channel: {},
    });
  };

  useEffect(() => {
    if (cookies.user && !isLoggedIn) {
      setUser(cookies.user);
      setIsLoggedIn(true);
    }
  }, [cookies.user, isLoggedIn]);

  return (
    <BrowserRouter>
      <Router
        isLoggedIn={isLoggedIn}
        user={user}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    </BrowserRouter>
  );
}

export default App;
