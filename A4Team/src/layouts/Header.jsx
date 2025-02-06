import { AppBar, Toolbar, IconButton, Button, Typography, Box, InputBase, Badge } from "@mui/material";
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon, AccountCircle as AccountCircleIcon } from "@mui/icons-material";
const Header = () => {
  return (
    <AppBar position="sticky" sx={{ width:"100%",boxSizing: "border-box",background: "#141414", padding: "10px 0"}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FF6F00" }}>
            INSTANT GAMING
          </Typography>
        </Box>

        {/* Navbar Links */}
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button sx={{ color: "white" }}>PC</Button>
          <Button sx={{ color: "white" }}>PlayStation</Button>
          <Button sx={{ color: "white" }}>Xbox</Button>
          <Button sx={{ color: "white" }}>Nintendo</Button>
        </Box>

        {/* Search Box */}
        <Box sx={{position: "relative", display: "flex", alignItems: "center" }}>
          <InputBase
            sx={{
              color: "white",
              backgroundColor: "#2C2C2C",
              borderRadius: "20px",
              paddingLeft: "10px",
              paddingRight: "10px",
              width: "200px",
              marginLeft:"30px"
            }}
            placeholder="Search"
            startAdornment={
              <IconButton sx={{ color: "white" }}>
                <SearchIcon />
              </IconButton>
            }
          />
        </Box>

        {/* Icons and User Profile */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <IconButton sx={{ color: "white" }}>
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
