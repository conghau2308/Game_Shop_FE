import { FlagOutlined, MoreVert } from "@mui/icons-material";
import { Avatar, Card, CardHeader, IconButton, Box, Rating, Typography, CardContent, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import StarIcon from '@mui/icons-material/Star';

function Comment() {
    const [menuClick, setMenuClick] = useState(null);
    const [cmt, setCmt] = useState([]);

    const handleClick = (event) => {
        setMenuClick(event.currentTarget);
    };

    const handleClose = () => {
        setMenuClick(null);
    };

    useEffect(() => {
        const fakedata = [
            {
                avatar: "https://gaming-cdn.com/images/avatars/26903707-1739149903.jpg",
                rate: 3.7,
                namegame: "Kingdom Hearts Integrum Masterpiece",
                cmt: "Worked instantly. Downloading it now Quick, as always ! Quick, as always !",
                time: "7 hours ago"
            },
            {
                avatar: "https://gaming-cdn.com/images/avatars/26903707-1739149903.jpg",
                rate: 4,
                namegame: "Kingdom Hearts Integrum Masterpiece",
                cmt: "Worked instantly. Downloading it now",
                time: "7 hours ago"
            },
            {
                avatar: "https://gaming-cdn.com/images/avatars/26903707-1739149903.jpg",
                rate: 5,
                namegame: "Kingdom Hearts Integrum Masterpiece",
                cmt: "Worked instantly. Downloading it now",
                time: "7 hours ago"
            },
            {
                avatar: "https://gaming-cdn.com/images/avatars/26903707-1739149903.jpg",
                rate: 5,
                namegame: "Kingdom Hearts Integrum Masterpiece",
                cmt: "Worked instantly. Downloading it now",
                time: "7 hours ago"
            },
            {
                avatar: "https://gaming-cdn.com/images/avatars/26903707-1739149903.jpg",
                rate: 5,
                namegame: "Kingdom Hearts Integrum Masterpiece",
                cmt: "Worked instantly. Downloading it now",
                time: "7 hours ago"
            },
            // {
            //     avatar: "https://gaming-cdn.com/images/avatars/26903707-1739149903.jpg",
            //     rate: 5,
            //     namegame: "Kingdom Hearts Integrum Masterpiece",
            //     cmt: "Worked instantly. Downloading it now",
            //     time: "7 hours ago"
            // },
            // {
            //     avatar: "https://gaming-cdn.com/images/avatars/26903707-1739149903.jpg",
            //     rate: 5,
            //     namegame: "Kingdom Hearts Integrum Masterpiece",
            //     cmt: "Worked instantly. Downloading it now",
            //     time: "7 hours ago"
            // },
            // {
            //     avatar: "https://gaming-cdn.com/images/avatars/26903707-1739149903.jpg",
            //     rate: 5,
            //     namegame: "Kingdom Hearts Integrum Masterpiece",
            //     cmt: "Worked instantly. Downloading it now",
            //     time: "7 hours ago"
            // }
        ]
        setCmt(fakedata);
    }, [])

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: { xs: "auto", sm: "100vw", md: "100vw" },
            bgcolor: "#323232",
            overflowX: "auto",
        }}>
            {cmt.map((comm, index) => (
                <Box sx={{
                    display: "flex",
                    width: { xs: "45vw", sm: "135px", md: "260px" },
                    padding: { xs: "0 10px 0 10px" }
                }}>
                    <Card sx={{
                        bgcolor: "#3d3d3d",
                        borderRadius: "10px",
                    }}>
                        <CardHeader
                            avatar={
                                <Avatar src={comm.avatar}>
                                </Avatar>
                            }
                            action={
                                <IconButton onClick={handleClick} sx={{
                                    "&:hover ": {
                                        color: "white"
                                    },
                                    color: {xs: "white", sm: "white", md: "black"}
                                }}>
                                    <MoreVert />
                                </IconButton>
                            }
                            subheader={
                                <Box sx={{
                                    width: { xs: "60px", sm: "30px", md: "130px" },
                                }}>
                                    <Rating defaultValue={comm.rate} readOnly
                                        icon={<StarIcon sx={{ fontSize: { xs: "10px", sm: "8px", md: "20px" } }} />}
                                        emptyIcon={<StarIcon sx={{ fontSize: { xs: "10px", sm: "8px", md: "20px" }, color: "white" }} />}
                                    />

                                    <Typography sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        color: "white",
                                        fontSize: { xs: "15px", sm: "13px", md: "20px" }
                                    }}>
                                        {comm.namegame}
                                    </Typography>
                                </Box>
                            }
                        />

                        <CardContent>
                            <Typography sx={{
                                color: "#999",
                                fontSize: { xs: "15px", sm: "13px", md: "15px" },
                                display: "-webkit-box",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 2,
                                lineHeight: "1.5rem",
                                height: "3rem",
                            }}>
                                {comm.cmt}
                            </Typography>

                            <Typography sx={{
                                color: "white",
                                fontSize: { xs: "10px", sm: "10px", md: "12px" },
                                paddingTop: "10px"
                            }}>
                                {comm.time}
                            </Typography>
                        </CardContent>

                        <Menu
                            anchorEl={menuClick}
                            open={Boolean(menuClick)}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <FlagOutlined /> Report
                            </MenuItem>
                        </Menu>
                    </Card>
                </Box>
            ))}

        </Box>
    )
}

export default Comment;