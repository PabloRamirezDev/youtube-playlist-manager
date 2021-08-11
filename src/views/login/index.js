import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Card, Button } from "antd";

import FlexContainer from "../../components/FlexContainer";

import { validateToken } from "../../services/authentication";

import { GoogleOutlined, LoadingOutlined } from "@ant-design/icons";
import "./styles.css";

const Login = ({ handleLogin, isLoggedIn }) => {
  const history = useHistory();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState(false);

  if (history.state) {
    console.log(history.state);
    setLoginError(history.state.loginError);
  }

  const login = () => {
    if (history.location.hash) {
      setIsLoggingIn(true);
      let hash = history.location.hash.split("").slice(1).join("").split("&");
      const response = {};
      hash.forEach((pair) => {
        let [key, value] = pair.split("=");

        // Transform key from snake_case to camelCase
        key = key.split("_");
        if (key.length > 1) {
          key = key.map((word, i) => {
            if (i > 0) {
              let letters = word.split("");
              letters[0] = letters[0].toUpperCase();
              return letters.join("");
            } else return word;
          });
        }
        key = key.join("");

        response[key] = value;
      });
      if (response.accessToken) {
        validateToken(response.accessToken)
          .then((res) => {
            handleLogin(response);
            setIsLoggingIn(false);
          })
          .catch((e) => {
            setLoginError(true);
            setIsLoggingIn(false);
          });
      }
      return true;
    } else return false;
  };

  useEffect(() => {
    if (!isLoggedIn && !loginError) login();
  });

  return isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <FlexContainer style={{ backgroundColor: "#eee" }}>
      {isLoggingIn ? (
        <LoadingOutlined style={{ fontSize: "48px", color: "#C83232" }} />
      ) : (
        <Card
          title={<h1 className="title">YouTube Playlist Manager</h1>}
          bodyStyle={{
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
          }}
        >
          <p className="description">
            Para poder usar esta app, necesitas entrar en tu cuenta de Google
            asociada a YouTube
          </p>
          {loginError && (
            <p style={{ color: "#e11" }}>
              Lo sentimos, ha ocurrido un error iniciando sesión. Por favor,
              inténtalo de nuevo.
            </p>
          )}
          <Button
            icon={<GoogleOutlined />}
            type="outlined"
            href="https://accounts.google.com/o/oauth2/auth?client_id=876981875645-45ol990idk14b9qkuinibmqnu7tt2sif.apps.googleusercontent.com&redirect_uri=http://localhost:3000/login&response_type=token&scope=https://www.googleapis.com/auth/youtube"
            size="large"
          >
            Inicia sesión con Google
          </Button>
        </Card>
      )}
    </FlexContainer>
  );
};

export default Login;
