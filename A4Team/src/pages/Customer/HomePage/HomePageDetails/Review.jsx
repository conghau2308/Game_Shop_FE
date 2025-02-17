import { FlagOutlined, MoreVert, ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { CardMedia, Box, CardHeader, Avatar, Card, Typography, CardContent, Menu, MenuItem, IconButton } from "@mui/material";
import { useEffect, useState } from "react";

function Review() {
    const [reviews, setReviews] = useState([]);
    const [menuClick, setMenuClick] = useState(null);

    useEffect(() => {
        const fakedata = [
            {
                image: "https://gaming-cdn.com/images/products/6512/616x353/metro-exodus-gold-edition-gold-edition-pc-game-steam-cover.jpg?v=1651160153",
                avatar: "https://gaming-cdn.com/images/avatars/26638165-1737153089.jpg",
                status: "like",
                review: "Most reviews on this game are about Instant Gamings fast and reliable code giving, but not the game itself. The Game is a disappointment to the entire Civ franchise and Sid Meiers himself. I played the game, only to realize that"
            },
            {
                image: "https://gaming-cdn.com/images/products/6512/616x353/metro-exodus-gold-edition-gold-edition-pc-game-steam-cover.jpg?v=1651160153",
                avatar: "https://gaming-cdn.com/images/avatars/26638165-1737153089.jpg",
                status: "dislike",
                review: "Most reviews on this game are about Instant Gamings fast and reliable code giving, but not the game itself. The Game is a disappointment to the entire Civ franchise and Sid Meiers himself. I played the game, only to realize that"
            },
            {
                image: "https://gaming-cdn.com/images/products/6512/616x353/metro-exodus-gold-edition-gold-edition-pc-game-steam-cover.jpg?v=1651160153",
                avatar: "https://gaming-cdn.com/images/avatars/26638165-1737153089.jpg",
                status: "like",
                review: "Most reviews on this game are about Instant Gamings fast and reliable code giving, but not the game itself. The Game is a disappointment to the entire Civ franchise and Sid Meiers himself. I played the game, only to realize that"
            },
            {
                image: "https://gaming-cdn.com/images/products/6512/616x353/metro-exodus-gold-edition-gold-edition-pc-game-steam-cover.jpg?v=1651160153",
                avatar: "https://gaming-cdn.com/images/avatars/26638165-1737153089.jpg",
                status: "like",
                review: "Most reviews on this game are about Instant Gamings fast and reliable code giving, but not the game itself. The Game is a disappointment to the entire Civ franchise and Sid Meiers himself. I played the game, only to realize that"
            }
        ];
        setReviews(fakedata);
    }, []);

    const handleClick = (event) => {
        setMenuClick(event.currentTarget);
    };

    const handleClose = () => {
        setMenuClick(null);
    };

    return (
        <Box sx={{
            display: "flex",
            width: { xs: "auto", sm: "100vw", md: "100vw" },
            justifyContent: "space-evenly",
            bgcolor: "#323232",
            overflowX: "auto",
            scrollbarWidth: "none"
        }}>
            {reviews.map((rev, index) => (
                <Box sx={{
                    padding: { xs: "0 10px 0 10px" }
                }}>
                    <Card key={index} sx={{
                        width: { xs: "60vw", sm: "20vw", md: "22vw" },
                        bgcolor: "#3d3d3d",
                        borderRadius: 2,
                        boxShadow: 3,
                        borderRadius: "10px",
                        position: "relative",
                    }}>
                        <CardMedia
                            component="img"
                            image={rev.image}
                            alt="Game image"
                            sx={{ height: { xs: "150px", sm: "150px", md: "200px" }, objectFit: "cover" }}
                        />

                        <CardHeader
                            avatar={<Avatar src={rev.avatar} alt="User Avatar" sx={{
                                width: { sm: 30, md: 60 },
                                height: { sm: 30, md: 60 }
                            }} />}
                            subheader={rev.status === "like" ? <ThumbUpOutlined sx={{ color: "#6dd432", fontSize: { sm: "20px", md: "30px" } }} /> : <ThumbDownOutlined sx={{ color: "#ff0a4e", fontSize: { sm: "20px", md: "30px" } }} />}
                            sx={{
                                display: "flex",
                                justifySelf: "center",
                            }}
                            action={
                                <IconButton
                                    onClick={handleClick}
                                    sx={{
                                        "&:hover": { color: "white" },
                                        color: { xs: "white", sm: "white", md: "black" },
                                        position: "absolute",
                                        right: { sm: 5, md: 10 },
                                    }}
                                    aria-label="more options"
                                >
                                    <MoreVert sx={{ fontSize: { sm: "15px" } }} />
                                </IconButton>
                            }
                        />

                        <CardContent>
                            <Typography sx={{
                                color: "#999",
                                fontSize: { xs: "15px", sm: "12px", md: "13px" },
                                display: "-webkit-box",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: { xs: 4, sm: 3, md: 4 },
                                lineHeight: "1.5rem",
                                height: { xs: "6rem", sm: "4.5rem", md: "6rem" },
                            }}>
                                {rev.review}
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
    );
}

export default Review;
