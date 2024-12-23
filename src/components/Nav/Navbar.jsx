import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Circle,
  EllipsisVerticalIcon,
  LogIn,
  PlusCircleIcon,
  Square,
  Triangle,
} from "lucide-react";
import atg from "../../assets/whole.png";
import SignUp from "../SignUp";
import SignIn from "../SignIn";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(4),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    borderRadius: "20px",
    color: "black",
    border: "2px solid #7A7A7A",

    [theme.breakpoints.up("md")]: {
      width: "43ch",
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [show, setShow] = React.useState(0);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  const Dots = () => {
    return (
      <>
        <MenuItem >
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge color="error">
              <LogIn />
            </Badge>
          </IconButton>
          <SignIn/>
        </MenuItem>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge color="error">
              <PlusCircleIcon />
            </Badge>
          </IconButton>
          <SignUp/>
        </MenuItem>
       
      </>
    );
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Dots />
    </Menu>
  );

  return (
    <div >
      <div className="nav2 fixed top-0 z-20">
        <div
          style={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            
          }}
        >
          <div style={{ paddingRight: "20px" , width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "end",
            alignItems: "center", gap:"10px"}}>
            <Square /> <Circle />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                onClick={() => setShow((prv) => !prv)}
                style={{ cursor: "pointer" }}
              >
                <EllipsisVerticalIcon/>
              </div>
            </div>
            <div>
              {show ? (
                <div
                  style={{
                    backgroundColor: "white",
                    border: "2px solid darkgrey",
                    borderRadius: "20px",
                  }}
                  className="absolute top-16 right-3 z-50"
                >
                  <Dots />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="nav1">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" sx={{ backgroundColor:"white" , color:"black"}}>
            <Toolbar
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <img src={atg} />
              </Typography>
              <Search style={{marginLeft:"15%"}}>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "#7A7A7A" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  sx={{ color: "#7A7A7A" }}
                  placeholder="Search for your favourite group"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <div>
                  <div
                   className="flex h-[50px] items-center gap-3"
                  >
                    <p className="flex items-center mt-2 block 1150:hidden">
                      Create Account .{" "}
                      <span style={{ color: "blue" }}>It's Free</span>
                    </p>

                    <div
                      onClick={() => setShow((prv) => !prv)}
                      style={{ cursor: "pointer" }}
                      
                    >
                      <EllipsisVerticalIcon/>
                    </div>
                  </div>
                  <div>
                    {show ? (
                      <div
                        style={{
                          position: "absolute",
                          top: "50px",
                          backgroundColor: "white",
                          border: "2px solid darkgrey",
                          borderRadius: "20px",
                          zIndex:"5 "
                        }}
                        className="right-5"
                      >
                        <Dots />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </Box>
      </div>
    </div>
  );
}
