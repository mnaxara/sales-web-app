import { Outlet } from "react-router";
import { Link, useLocation } from "react-router-dom";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Footer, Button } from "./styles";
import { FavoritesContext } from "../../../contexts/FavoritesContext";

export default function MainTemplate() {
  const { pathname } = useLocation();
  const { favorites } = FavoritesContext.useContext();

  const menu = [
    { to: "/", label: "Nos Produits" },
    { to: "/counters", label: "Counters" },
    { to: "/projects", label: "Projets" },
    { to: "/favorites", label: "Favoris" },
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
                <Badge badgeContent={favorites.length} color="error">
                  <Avatar alt="Favorites" src="/">
                    F
                  </Avatar>
                </Badge>
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
