import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useLocation, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { cartContext } from "../../contexts/cartContext";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { getCart, count } = React.useContext(cartContext);

  React.useEffect(() => {
    getCart();
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            SHOP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(
                    location.pathname === "/products"
                      ? `/products${window.location.search}`
                      : "/products"
                  );
                }}>
                <Typography textAlign="center">Produts</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/add-product");
                }}>
                <Typography textAlign="center">Add Product</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            SHOP
          </Typography>
          <Box
            style={{ justifyContent: "space-evenly" }}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate(
                  location.pathname === "/products"
                    ? `/products${window.location.search}`
                    : "/products"
                );
              }}
              sx={{ my: 2, color: "white", display: "block" }}>
              Products
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/add-products");
              }}
              sx={{ my: 2, color: "white", display: "block" }}>
              Add Product
            </Button>
          </Box>
          <Box>
            <IconButton onClick={() => navigate("/cart")} color="inherit">
              <Badge badgeContent={count} color="error">
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://steamuserimages-a.akamaihd.net/ugc/936063271543105270/6435B1CF01B822D3E97300E3594ACEBD87791D43/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
