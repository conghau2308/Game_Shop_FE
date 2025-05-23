import { Box, Button, CircularProgress, Container, IconButton, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { handleFormSubmitService } from "../../../api/auth/loginService";
import { useAuthStore } from "../../../hooks/User";
import { getProfile } from "../../../api/profile";
import { useStoreAlert } from "../../../hooks/alert";

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setToken } = useAuthStore();
    const {callAlert, callErrorAlert, callWarningAlert} = useStoreAlert();
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async () => {
        if(email === "" || password === "") {
            callWarningAlert("Please fill out both email and password to login.");
            return;
        }
        setLoading(true);
        try {
            const data = await handleFormSubmitService({ email, password });
            // console.log("Form gửi đi: ", { email, password })
            console.log("data: ", data.message)
            if (data.message === "Invalid password") {
                callErrorAlert("Invalid password. Please try again.");
                return;
            }

            if (data.message === "Invalid email or password") {
                callErrorAlert("Invalid email or password. Please try again.");
                return;
            }
            if (data.message === "Login successfully" && data.data.token) {
                await callApiProfile(data.data.token);
                callAlert("Login successfully.")
            }
            else {
                callErrorAlert("Something went wrong. Please try again.");
            }
        }
        catch (error) {
            console.log("Error: ", error)
        }
        finally {
            setLoading(false)
        }
    };

    const callApiProfile = async (token) => {
        try {
            const data = await getProfile(token, setToken);
            if (data) {
                navigate("/homepage");
            }
            else {
                console.log("Failed ", data)
            }
        }
        catch (error) {
            console.log("Error: ", error)
        }
    };

    return (
        <Box id="wrap" sx={{
            display: "flex",
            justifyItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            maxHeight: "100vh",
            alignItems: "center",
            width: "100vw",
            margin: "-8px"
        }}>
            <Box id="login" sx={{
                // maxWidth: {xs: "100%", sm: "50vw"},
                width: { xs: "100vw", sm: "50vw" },
                backgroundColor: "#323232",
                color: "white",
                maxHeight: "100vh"
            }}>

                <Box id="wrap-login" sx={{
                    marginLeft: "40px",
                    marginRight: "40px",
                    minHeight: "100vh",
                    maxWidth: { xs: "65vw", sm: "30vw" },
                    width: "100%",
                    margin: "0 auto"
                }}>
                    <Box>
                        <Box sx={{
                            height: "30vh",
                            textAlign: "top",
                            position: "relative",
                            right: "7vw"
                        }}
                            onClick={() => navigate("/homepage")}
                        >
                            <img
                                style={{ width: "100%", maxWidth: "150px", marginTop: "30px", cursor: "pointer" }}
                                src="https://www.instant-gaming.com/themes/igv2/images/logos/logo-horizontal.svg" />
                        </Box>
                        <IconButton sx={{
                            color: "white",
                            position: "absolute",
                            right: 10,
                            top: 10,
                            zIndex: 1
                        }}
                            onClick={() => navigate("/homepage")}
                        >
                            <CloseIcon sx={{ fontSize: {xs: "25px", sm: "35px"} }} />
                        </IconButton>
                    </Box>

                    <Container sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly"
                    }}>
                        <Typography sx={{ fontSize: { xs: "15px", sm: "20px" } }}> Log in </Typography>
                        <Button sx={{
                            padding: 0,
                            borderRadius: "10px",
                            width: "80px",
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: "white",
                        }}>

                            <img
                                style={{ width: "25px", padding: "10px" }}
                                src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-gl.svg" />

                        </Button>
                    </Container>

                    <Typography
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            my: 3,
                            "&::before": {
                                content: '""',
                                flexGrow: 1,
                                borderBottom: "1px solid hsla(0, 0%, 100%, .2)",
                                marginRight: 1
                            },
                            "&::after": {
                                content: '""',
                                flexGrow: 1,
                                borderBottom: "1px solid hsla(0, 0%, 100%, .2)",
                                marginLeft: 1
                            }
                        }}
                    >
                        or
                    </Typography>


                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputLabelProps={{
                                sx: {
                                    color: "white",
                                    "&.Mui-focused": {
                                        color: "white",
                                    }
                                }
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "white"
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#ff5400"
                                    },
                                    "&:Mui-focused fieldset": {
                                        borderColor: "#ff5400"
                                    }
                                },
                                "& .MuiInputBase-input": {
                                    color: "white"
                                }
                            }}
                        />

                        <TextField
                            id="outlined-basic"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputLabelProps={{
                                sx: {
                                    color: "white",
                                    "&.Mui-focused": {
                                        color: "white",
                                    }
                                }
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "white"
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#ff5400"
                                    },
                                    "&:Mui-focused fieldset": {
                                        borderColor: "#ff5400"
                                    }
                                },
                                "& .MuiInputBase-input": {
                                    color: "white"
                                }
                            }}
                        />
                    </Box>

                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "20px 0 20px 0"
                    }}>
                        <Button sx={{
                            background: "linear-gradient(10deg, #ff8000, transparent) #ff4020",
                            width: "100%",
                            borderRadius: "5px",
                            fontWeight: "600",
                            height: "40px",
                            color: "white",
                            "&hover": {
                                background: "linear-gradient(190deg, #ff2020, #ff8000)"
                            }
                        }}
                            onClick={handleFormSubmit}
                            disabled={loading}
                        >
                            {loading ? (
                                <CircularProgress color="#fff" size={25} />
                            ) : (
                                <Typography sx={{
                                    fontFamily: 'barlow-regular'
                                }}>
                                    Log in
                                </Typography>
                            )}
                        </Button>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <Typography
                            onClick={() => navigate("/create-an-account")}
                            component={"a"}
                            sx={{
                                cursor: "pointer",
                                fontSize: "15px",
                                color: "white",
                                "&:hover": {
                                    color: "#ff5400"
                                }
                            }}
                        >
                            No account yet?
                        </Typography>

                        <Typography
                            // onClick={() => navigate("/lost-password")}
                            component={"a"}
                            sx={{
                                cursor: "pointer",
                                fontSize: "15px",
                                color: "white",
                                "&:hover": {
                                    color: "#ff5400"
                                }
                            }}
                        >
                            Lost password?
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                display: { xs: "none", sm: "block" },
                width: "50%",
                minHeight: "100vh",
                backgroundImage: "url('https://www.instant-gaming.com/themes/igv2/modules/register/images/wallpaper.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative"
            }}>
            </Box>
        </Box>
    )
}

export default LoginPage;