import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import { LoadingOutlined } from "@ant-design/icons";

const Logout = ({ handleLogout, isLoggedIn }) => {
  useEffect(() => {
    if (isLoggedIn) {
      handleLogout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  return isLoggedIn ? <LoadingOutlined /> : <Redirect to="/login" />;
};

export default Logout;
