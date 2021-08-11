import { Redirect, useHistory } from "react-router-dom";

const AuthRoute = ({ isLoggedIn }) => {
  const history = useHistory();

  return (
    <>
      {!isLoggedIn && history.location.pathname !== "/login" && (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default AuthRoute;
