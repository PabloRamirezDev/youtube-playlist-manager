import React, { useState, useEffect } from "react";

import Template from "../template";

import { LoadingOutlined } from "@ant-design/icons";

import { listPlaylists } from "../../../services/playlists";

import PlaylistList from "./components/PlaylistList";
import PlaylistListError from "./components/PlaylistListError";

import "./styles.css";

const Playlists = ({ user }) => {
  const [playlists, setPlaylists] = useState([]);
  const [loadingPlaylists, setLoadingPlaylists] = useState(false);
  const [listPlaylistsError, setListPlaylistsError] = useState(null);

  useEffect(() => {
    setLoadingPlaylists(true);
    setListPlaylistsError(null);
    listPlaylists(user.accessToken)
      .then((res) => {
        setPlaylists(res.data.items);
        setLoadingPlaylists(false);
      })
      .catch((e) => {
        setListPlaylistsError(e);
        setLoadingPlaylists(false);
      });
    return () => {
      setLoadingPlaylists(false);
      setListPlaylistsError(null);
      setPlaylists([]);
    };
  }, [user]);

  return (
    <Template
      title="Playlists"
      breadcrumb={[{ name: "Playlists", route: "/playlists" }]}
      user={user}
    >
      <div className="playlist-container">
        {loadingPlaylists ? (
          <LoadingOutlined style={{ fontSize: "48px", color: "#C83232" }} />
        ) : playlists && listPlaylistsError === null ? (
          <PlaylistList playlists={playlists} title={<h2>Mis Playlists</h2>} />
        ) : listPlaylistsError !== null ? (
          <PlaylistListError error={listPlaylistsError} />
        ) : null}
      </div>
    </Template>
  );
};

export default Playlists;
