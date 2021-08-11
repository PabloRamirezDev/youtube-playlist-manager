import React from "react";
import { Link } from "react-router-dom";

const PlaylistList = ({ playlists, title }) => {
  return (
    <div>
      {title !== undefined ? title : null}
      {playlists && playlists.length > 0 ? (
        <ul>
          {playlists.map((playlist, i) => (
            <li key={i}>
              <img
                src={playlist.snippet.thumbnails.default.url}
                width={playlist.snippet.thumbnails.default.width}
                height={playlist.snippet.thumbnails.default.height}
                alt={playlist.snippet.title}
              />
              {playlist.snippet.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>
          No tienes Playlists en tu cuenta de Youtube.{" "}
          <Link to="/playlists/add">¡Crea una!</Link>
        </p>
      )}
    </div>
  );
};

export default PlaylistList;
