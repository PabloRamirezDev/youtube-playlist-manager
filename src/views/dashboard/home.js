import React from "react";

import Template from "./template";

const Home = ({ user }) => {
  return (
    <Template
      title="Home"
      breadcrumb={[{ name: "Home", route: "/" }]}
      user={user}
    ></Template>
  );
};

export default Home;
