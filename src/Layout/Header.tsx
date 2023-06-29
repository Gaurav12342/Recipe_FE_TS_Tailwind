import { FC, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Button,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { routesConstant } from "router/constant";

const Header: FC = () => {
  const navigate = useNavigate();
  const isToken = localStorage.getItem("user-data");
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user-data");
    navigate(routesConstant?.recipeHome?.path);
    setAnchorEl(null);
  };

  const handleSignIn = () => {
    navigate(routesConstant?.signIn?.path);
  };

  const handleNavigateToProfile = () => {
    navigate(routesConstant.profile.path);
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            display: "flex",
            justifyContent: "end",
            flexDirection: "row",
          }}
        >
          <Toolbar>
            {isToken ? (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleNavigateToProfile}>Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <div>
                <Button type="submit" onClick={handleSignIn} color="inherit">
                  Sign In
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
