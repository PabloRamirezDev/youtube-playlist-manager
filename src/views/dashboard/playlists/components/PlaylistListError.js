import React from "react";

const PlaylistListError = ({ error }) => {
  let displayError;

  if (error.message === "Network Error") {
    displayError = "Error de red";
  } else {
    displayError = error.message;
    console.log(error.toJSON());
  }

  return (
    <div>
      <p style={{ textAlign: "center", lineHeight: "30px" }}>
        Ocurrió un error cargando tus playlists:
        <br />
        {displayError}
      </p>
    </div>
  );
};

export default PlaylistListError;
