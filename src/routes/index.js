import React from "react";
import { Switch, Route } from "react-router-dom";

import AuthRoute from "./components/AuthRoute";

import LoginView from "../views/login";
import LogoutView from "../views/logout";

import HomeView from "../views/dashboard/home";
import PlaylistsView from "../views/dashboard/playlists";
import AddPlaylistView from "../views/dashboard/playlists/add";
import ManagePlaylistsView from "../views/dashboard/playlists/manage";

const Router = ({ isLoggedIn, user, handleLogin, handleLogout }) => {
  return (
    <Switch>

      {/* Authentication routes */}

      <Route path="/login">
        <LoginView handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
      </Route>

      <Route path="/logout">
        <AuthRoute isLoggedIn={isLoggedIn} />
        <LogoutView handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
      </Route>

      {/* Dashboard routes */}

      <Route path="/playlists/add">
        <AuthRoute isLoggedIn={isLoggedIn} />
        <AddPlaylistView user={user} />
      </Route>

      <Route path="/playlists/manage">
        <AuthRoute isLoggedIn={isLoggedIn} />
        <ManagePlaylistsView user={user} />
      </Route>

      <Route path="/playlists">
        <AuthRoute isLoggedIn={isLoggedIn} />
        <PlaylistsView user={user} />
      </Route>

      <Route path="/">
        <AuthRoute isLoggedIn={isLoggedIn} />
        <HomeView user={user} isLoggedIn={isLoggedIn} />
      </Route>

    </Switch>
  );
};

export default Router;
