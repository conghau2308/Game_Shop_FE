import { Box, Rating, Stack, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { CloudDownloadOutlined, ForumOutlined, GppGoodOutlined, StarBorder } from "@mui/icons-material";

function Information() {
    return (
        <Box sx={{
            bgcolor: "#191919",
            color: "white",
            width: "100vw",
            justifyContent: "center",
            display: "flex",
            height: {xs: "10vh", sm: "15vh", md: "20vh"}
        }}>
            <Box sx={{
                bgcolor: "#191919",
                display: "flex",
                justifyContent: "space-between",
                width: "90vw",
                alignItems: "center",
                height: {xs: "10vh", sm: "15vh", md: "20vh"}
            }}>
                <Box sx={{
                    display: {xs: "none", sm: "none", md: "flex"},
                    borderRight: "1px solid #999",
                    width: "20vw"
                }}>
                    <CloudDownloadOutlined sx={{
                        color: "#ff5400",
                        fontSize: "50px",
                        paddingRight: "10px"
                    }} />
                    <Box>
                        <Typography sx={{
                            fontSize: "20px"
                        }}>
                            Super fast
                        </Typography>

                        <Typography sx={{
                            fontSize: "15px",
                            color: "#999"
                        }}>
                            Instant digital download
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    display: {xs: "none", sm: "flex", md: "flex"},
                    borderRight: "1px solid #999",
                    width: {sm: "30vw", md: "20vw"}
                }}>
                    <GppGoodOutlined sx={{
                        color: "#ff5400",
                        fontSize: "50px",
                        paddingRight: "10px"
                    }} />
                    <Box>
                        <Typography sx={{
                            fontSize: "20px"
                        }}>
                            Reliable & safe
                        </Typography>

                        <Typography sx={{
                            fontSize: "15px",
                            color: "#999"
                        }}>
                            Over 10,000 games
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    display: "flex",
                    borderRight: "1px solid #999",
                    width: {xs: "47vw", sm: "30vw", md: "20vw"}
                }}>
                    <ForumOutlined sx={{
                        color: "#ff5400",
                        fontSize: {xs: "30px", sm: "50px"},
                        paddingRight: "10px"
                    }} />

                    <Box>
                        <Typography sx={{
                            fontSize: {xs: "15px", sm: "20px"}
                        }}>
                            Customer support
                        </Typography>

                        <Typography sx={{
                            fontSize: {xs: "10px", sm: "15px"},
                            color: "#999"
                        }}>
                            Human support 24/7
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: "flex-end"
                    }}>
                        <StarIcon sx={{
                            color: "green",
                            fontSize: {xs: "25px", sm: "35px"}
                        }} />
                        <Typography sx={{
                            fontSize: {xs: "15px", sm: "20px"}
                        }}>
                            Trustpilot
                        </Typography>
                    </Box>

                    <Stack sx={{
                        color: "green",
                        border: "1px solid white",
                        width: {xs: "125px", sm: "150px"}
                    }}
                        spacing={1}
                    >
                        <Rating
                            defaultValue={4.7}
                            precision={0.5}
                            readOnly
                            sx={{
                                color: "green"
                            }}
                            emptyIcon={<StarIcon sx={{color: "white", fontSize: {xs: "25px", sm: "30px"}}} />}
                            icon={<StarIcon sx={{fontSize: {xs: "25px", sm: "30px"}}} />}
                        />
                    </Stack>

                    <Box sx={{
                        display: "flex",
                    }}>
                        <Typography sx={{fontSize: "10px"}}> TrustScore </Typography>
                        <Typography sx={{ fontWeight: "bold", padding: "0px 4px 0px 4px", fontSize: "10px" }}> 4.7745,912 </Typography>
                        <Typography sx={{fontSize: "10px"}}> reviews </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Information;
