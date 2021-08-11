import React from "react";
import Template from "../../template";

const AddPlaylist = ({ user }) => {
  return (
    <Template
      title="Crear Playlist"
      breadcrumb={[
        { name: "Playlists", route: "/playlists" },
        { name: "Crear Playlist", route: "/playlists/add" },
      ]}
      user={user}
    >
      <p>Completa el siguiente formulario para crear una playlist:</p>
    </Template>
  );
};

export default AddPlaylist;
