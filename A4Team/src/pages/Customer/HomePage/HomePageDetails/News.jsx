import { CardContent, CardMedia, Typography, Box, Card } from "@mui/material";
import { useEffect, useState } from "react";

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fakedata = [
            {
                image: "https://gaming-cdn.com/images/news/articles/10623/cover/1000x563/steam-will-ban-games-that-force-players-to-watch-ads-cover67a9de21b3622.jpg",
                time: "2 hours ago",
                title: "Steam will ban games that force players to watch ads",
                content: "Valve recently updated its Steam policy on advertising content in video games. Certain practices are allowed, while others are prohibited. If you want to see your game on its platform, you'll need to respect these conditions. According to Valve, there's no problem with real-world product placements, paid ads outside Steam and cross-promotions (such as bundles or promotional events)"
            },
            {
                image: "https://gaming-cdn.com/images/news/articles/10625/cover/1000x563/the-golden-sun-soundtrack-is-now-available-on-nintendo-music-cover67a9fc827ab16.jpg",
                time: "20 minute ago",
                title: "The Golden Sun soundtrack is now available on Nintendo music",
                content: "Valve recently updated its Steam policy on advertising content in video games. Certain practices are allowed, while others are prohibited. If you want to see your game on its platform, you'll need to respect these conditions. According to Valve, there's no problem with real-world product placements, paid ads outside Steam and cross-promotions (such as bundles or promotional events)"
            },
            {
                image: "https://gaming-cdn.com/images/news/articles/10624/cover/1000x563/this-week-s-releases-from-february-10-to-16-2025-cover67a9ec7a18da5.jpg",
                time: "2 hours ago",
                title: "This week's releases: from February 10 to 16, 2025",
                content: "It's another busy week, with the arrival of Civilization VII and the return of Lara Croft. Other extremely promising games have also found their way into our weekly releases. Mayhemers February 10, 2025 on PC (early access) We start with a good dose of mayhem in this title playable by up to eight players"
            }
        ];
        setNews(fakedata);
    })

    return (
        <Box sx={{
            width: "100vw",
            justifyItems: "center",
            bgcolor: "#323232",
        }}>
            <Box sx={{
                width: { md: "80vw", xs: "90vw" }
            }}>
                <Typography sx={{
                    color: "white",
                    fontSize: {xs: "20px", md: "30px"},
                    paddingBottom: {xs: "2px", sm: "9px", md: "10px"}
                }}>
                    News not to be missed
                </Typography>

                {news.map((blog, index) => (
                    <Box sx={{
                        padding: {md: "20px 0px 20px 0px", xs: "2px 0px 2px 0px"}
                    }}>
                        <Card sx={{
                            display: "flex",
                            alignItems: "center",
                            bgcolor: "#323232",
                            boxShadow: "none"
                        }}>
                            <CardMedia
                                component="img"
                                image={blog.image}
                                sx={{
                                    height: { md: "130px", sm: "90px" },
                                    width: { md: "20vw", xs: "40vw", sm: "20vw" },
                                    objectFit: "cover",
                                    borderRadius: "10px"
                                }}
                            />

                            <CardContent sx={{
                                color: "#999"
                            }}>
                                <Typography sx={{
                                    fontSize: {xs: "12px", sm: "13px"}
                                }}>
                                    {blog.time}
                                </Typography>

                                <Typography sx={{
                                    color: "white",
                                    fontSize: {xs: "13px", sm: "15px", md: "17px"}
                                }}>
                                    {blog.title}
                                </Typography>

                                <Typography sx={{
                                    fontSize: { xs: "15px", sm: "13px", md: "15px" },
                                    display: {xs: "none", md: "-webkit-box", sm: "-webkit-box"},
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    lineHeight: "1.5rem",
                                    height: "3rem",
                                }}>
                                    {blog.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default News;