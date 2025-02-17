import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

const UserProfile = () => {
  const [email, setEmail] = useState("hoon702");
  const [password, setPassword] = useState("hoon702");
  const [image, setImage] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [isOldPasswordCorrect, setIsOldPasswordCorrect] = useState(false);

  // Handle opening and closing the dialog
  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);

  //Handel Image Profile
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("File selected:", file); // Kiểm tra file đã chọn
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log("Image URL:", reader.result); // Kiểm tra URL ảnh sau khi đọ
        setImage(reader.result); // Lưu URL của ảnh vào state
      };
      reader.readAsDataURL(file); // Đọc file ảnh dưới dạng base64
    }
  };

  // Handle password change
  const handleOlePassword = (e) => {
    setOldPassword(e.target.value);
    setIsOldPasswordCorrect(e.target.value === password);
  };
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswordMatch(e.target.value, newPassword);
  };

  const checkPasswordMatch = (newPass, confirmPass) => {
    if (newPass && confirmPass) {
      setPasswordMatch(newPass === confirmPass);
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* User Profile Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          
          backgroundColor:"#fff",
          justifyContent: "center",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h5"
          sx={{ textAlign: "center", marginBottom: "20px" }}
        >
          My Profile
        </Typography>

        {/* Profile Image */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <IconButton sx={{ color: "#6A4CAF" }} component="label">
            {image ? (
              <img
                src={image}
                alt="Profile"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <AccountCircleIcon sx={{ fontSize: "100px" }} />
            )}
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange} // Sự kiện gọi hàm handleImageChange
            />
          </IconButton>
          <Typography variant="body2" sx={{ color: "#6A4CAF" }}>
            Upload
          </Typography>
        </Box>

        {/* Email */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: "30px" }}
          disabled
        />

        {/* Password */}
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          sx={{ marginBottom: "30px" }}
          onChange={(e) => setPassword(e.target.value)}
          disabled
        />

        {/* Button to open password change dialog */}
        <Button variant="contained" color="primary" onClick={handleDialogOpen}>
          Change Password
        </Button>
      </Box>
      <Box
        sx={{
          display:"flex",
          flex:1,
          backgroundImage:
            "url('https://www.instant-gaming.com/themes/igv2/modules/register/images/wallpaper.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      {/* Dialog for changing password */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          {/* Old Password */}
          <TextField
            label="Old Password"
            variant="outlined"
            fullWidth
            type="password"
            value={oldPassword}
            onChange={handleOlePassword}
            sx={{ marginTop: "10px", marginBottom: "20px" }}
          />

          {/* New Password */}
          {
            <>
              <TextField
                label="New Password"
                variant="outlined"
                fullWidth
                type="password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                sx={{
                  marginBottom: "20px",
                }}
                disabled={!isOldPasswordCorrect}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {newPassword && (
                        <IconButton>
                          <AccountCircleIcon style={{ fontSize: 24 }} />
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                }}
                disable={!isOldPasswordCorrect}
              />

              {/* Confirm Password */}
              <TextField
                label="Confirm Password"
                variant="outlined"
                fullWidth
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                disabled={!isOldPasswordCorrect} // Disabled nếu mật khẩu cũ không đúng
                sx={{
                  marginBottom: "20px",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {confirmPassword && (
                        <IconButton>
                          {passwordMatch ? (
                            <CheckCircleIcon style={{ color: "green" }} />
                          ) : (
                            <ErrorIcon style={{ color: "red" }} />
                          )}
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </>
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => {}} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserProfile;
