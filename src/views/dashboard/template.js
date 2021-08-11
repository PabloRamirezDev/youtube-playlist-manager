import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Breadcrumb, Layout, Menu, Avatar, Tooltip } from "antd";

import {
  PlaySquareOutlined,
  HomeOutlined,
  LogoutOutlined,
  PlusOutlined,
  BarsOutlined,
  EditOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const Template = ({ children, title, breadcrumb, user }) => {
  const history = useHistory();
  
  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          backgroundColor: "rgba(200,50,50,1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 3px 5px rgba(0,0,0,0.3)",
        }}
      >
        <div>
          <Link to="/">
            <h1
              style={{
                fontWeight: 800,
                color: "#400",
                fontSize: 24,
                lineHeight: 24,
                margin: 0,
                letterSpacing: -0.5,
              }}
            >
              Youtube Playlist Manager
            </h1>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Menu
            style={{ backgroundColor: "transparent", border: "none" }}
            selectable={false}
          >
            <Menu.Item icon={<LogoutOutlined />} key="/logout">
              <Link to="/logout">Logout</Link>
            </Menu.Item>
          </Menu>
          <Tooltip title={user.channel.snippet.title} placement="bottomRight">
            <Avatar
              src={user.channel.snippet.thumbnails.default.url}
              alt={user.channel.snippet.title}
              style={{ cursor: "pointer" }}
              size="large"
            />
          </Tooltip>
        </div>
      </Header>
      <Layout>
        <Sider
          width={180}
          style={{
            backgroundColor: "rgba(200,50,50,0.7)",
            boxShadow: "3px 0 5px rgba(0,0,0,0.3)",
          }}
        >
          <Menu
            style={{
              backgroundColor: "transparent",
              border: "none",
              marginTop: "20px",
            }}
            selectable={false}
          >
            <Menu.Item icon={<HomeOutlined />} key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.SubMenu
              icon={<PlaySquareOutlined />}
              title="Playlists"
              onTitleClick={() => history.push("/playlists")}
              key="playlists"
            >
              <Menu.Item icon={<BarsOutlined />} key="/playlists">
                <Link to="/playlists">Mis Playlists</Link>
              </Menu.Item>
              <Menu.Item icon={<PlusOutlined />} key="/playlists/add">
                <Link to="/playlists/add">Crear Playlist</Link>
              </Menu.Item>
              <Menu.Item icon={<EditOutlined />} key="/playlists/manage">
                <Link to="/playlists/manage">Gestionar Playlists</Link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: "40px 60px" }}>
            {breadcrumb && breadcrumb.length > 0 && (
              <Breadcrumb>
                {breadcrumb.map((el, i) => (
                  <Breadcrumb.Item
                    onClick={() => history.push(el.route)}
                    href="#"
                    key={i}
                  >
                    {el.name}
                  </Breadcrumb.Item>
                ))}
              </Breadcrumb>
            )}
            <h1 style={{ fontSize: 22, fontWeight: 700 }}>{title}</h1>
            <hr />
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Template;
