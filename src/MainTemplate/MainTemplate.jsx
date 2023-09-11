import { Outlet } from "react-router";
import { Link, useLocation } from "react-router-dom";

import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Footer, Button } from "./styles";

export default function MainTemplate() {
  const { pathname } = useLocation();
  const menu = [
    { to: "/", label: "Home" },
    { to: "/counters", label: "Counters" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "darkslateblue" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: "flex",
                color: "#FFF",
                textDecoration: "none",
              }}
            >
              Sales
            </Typography>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {menu.map(({ to, label }) => (
                <Button
                  key={label}
                  component={Link}
                  variant="text"
                  to={to}
                  current={pathname === to}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {label}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                component={Link}
                to="/"
                onClick={() => {}}
                sx={{ p: 0 }}
              >
                <Avatar alt="Favorites" src="/">
                  F
                </Avatar>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Outlet />
      </main>
      <Footer>
        <Typography>@ 2023 - Formation</Typography>
      </Footer>
    </>
  );
}
