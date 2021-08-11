import React from "react";
import Template from "../../template";

const ManagePlaylists = ({ user }) => {
  return (
    <Template
      title="Gestionar Playlists"
      breadcrumb={[
        { name: "Playlists", route: "/playlists" },
        { name: "Gestionar Playlists", route: "/playlists/manage" },
      ]}
      user={user}
    >
      Hola
    </Template>
  );
};

export default ManagePlaylists;
