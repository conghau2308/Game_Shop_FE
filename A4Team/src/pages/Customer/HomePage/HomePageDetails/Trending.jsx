import { Discount } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, Typography, Box, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";

function Trending() {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const fakedata = [
            {
                name: "Microsoft Flight Simulator 2024 (PC / Xbox Ser)",
                description: "Fly with Purpose Launch your aviation Career wherever you choose in the world. Gain experience, build your reputation, and complete certifications to gain access to authentic aviation",
                discount: "-39%",
                price: "18.99$",
                image: "https://gaming-cdn.com/images/products/17684/616x353/microsoft-flight-simulator-2024-pc-xbox-series-x-s-pc-xbox-series-x-s-game-microsoft-store-cover.jpg?v=1737544631"
            },
            {
                name: "Microsoft Flight Simulator 2024 (PC / Xbox Ser)",
                description: "Fly with Purpose Launch your aviation Career wherever you choose in the world. Gain experience, build your reputation, and complete certifications to gain access to authentic aviation",
                discount: "-39%",
                price: "18.99$",
                image: "https://gaming-cdn.com/images/products/17684/616x353/microsoft-flight-simulator-2024-pc-xbox-series-x-s-pc-xbox-series-x-s-game-microsoft-store-cover.jpg?v=1737544631"
            },
            {
                name: "Microsoft Flight Simulator 2024 (PC / Xbox Ser)",
                description: "Fly with Purpose Launch your aviation Career wherever you choose in the world. Gain experience, build your reputation, and complete certifications to gain access to authentic aviation",
                discount: "-39%",
                price: "18.99$",
                image: "https://gaming-cdn.com/images/products/17684/616x353/microsoft-flight-simulator-2024-pc-xbox-series-x-s-pc-xbox-series-x-s-game-microsoft-store-cover.jpg?v=1737544631"
            },
            {
                name: "Microsoft Flight Simulator 2024 (PC / Xbox Ser)",
                description: "Fly with Purpose Launch your aviation Career wherever you choose in the world. Gain experience, build your reputation, and complete certifications to gain access to authentic aviation",
                discount: "-39%",
                price: "18.99$",
                image: "https://gaming-cdn.com/images/products/17684/616x353/microsoft-flight-simulator-2024-pc-xbox-series-x-s-pc-xbox-series-x-s-game-microsoft-store-cover.jpg?v=1737544631"
            },
            {
                name: "Microsoft Flight Simulator 2024 (PC / Xbox Ser)",
                description: "Fly with Purpose Launch your aviation Career wherever you choose in the world. Gain experience, build your reputation, and complete certifications to gain access to authentic aviation",
                discount: "-39%",
                price: "18.99$",
                image: "https://gaming-cdn.com/images/products/17684/616x353/microsoft-flight-simulator-2024-pc-xbox-series-x-s-pc-xbox-series-x-s-game-microsoft-store-cover.jpg?v=1737544631"
            },
            {
                name: "Microsoft Flight Simulator 2024 (PC / Xbox Ser)",
                description: "Fly with Purpose Launch your aviation Career wherever you choose in the world. Gain experience, build your reputation, and complete certifications to gain access to authentic aviation",
                discount: "-39%",
                price: "18.99$",
                image: "https://gaming-cdn.com/images/products/17684/616x353/microsoft-flight-simulator-2024-pc-xbox-series-x-s-pc-xbox-series-x-s-game-microsoft-store-cover.jpg?v=1737544631"
            },
            {
                name: "Microsoft Flight Simulator 2024 (PC / Xbox Ser)",
                description: "Fly with Purpose Launch your aviation Career wherever you choose in the world. Gain experience, build your reputation, and complete certifications to gain access to authentic aviation",
                discount: "-39%",
                price: "18.99$",
                image: "https://gaming-cdn.com/images/products/17684/616x353/microsoft-flight-simulator-2024-pc-xbox-series-x-s-pc-xbox-series-x-s-game-microsoft-store-cover.jpg?v=1737544631"
            },
            {
                name: "Microsoft Flight Simulator 2024 (PC / Xbox Ser)",
                description: "Fly with Purpose Launch your aviation Career wherever you choose in the world. Gain experience, build your reputation, and complete certifications to gain access to authentic aviation",
                discount: "-39%",
                price: "18.99$",
                image: "https://gaming-cdn.com/images/products/17684/616x353/microsoft-flight-simulator-2024-pc-xbox-series-x-s-pc-xbox-series-x-s-game-microsoft-store-cover.jpg?v=1737544631"
            }
        ];
        setTrending(fakedata);
    }, []);

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            flexDirection: "column",
        }}>
            <Box id="wrap" sx={{
                width: "90%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "90%"
                }}>
                    <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: "bold", color: "black" }}>Trending</Typography>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexWrap: { xs: "nowrap", sm: "wrap" },
                    justifyContent: "center",
                    gap: 2,
                    flexDirection: { xs: "row" },
                    padding: {xs: "0px 30px 0px 30px"},
                }}>
                    {trending.map((item, index) => (
                        <Box key={index} sx={{
                            width: {xs: "90vw", sm: "25vw"}
                            }}>
                            <Card sx={{
                                bgcolor: "#3d3d3d",
                                borderRadius: "10px",
                                height: {xs: "45vh", sm: "150px", md: "55vh"},
                            }}>
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }}
                                />
                                <CardContent>
                                    <Typography sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        color: "white",
                                        fontSize: "16px"
                                    }}>
                                        {item.name}
                                    </Typography>

                                    <Typography sx={{
                                        display: "-webkit-box",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: 2,
                                        lineHeight: "1.5rem",
                                        height: "3rem",
                                        fontSize: "13px",
                                        color: "#999",
                                    }}>{item.description}</Typography>

                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}>
                                        <Box sx={{
                                            bgcolor: "red",
                                            height: "25px",
                                            width: "60px",
                                            justifyContent: "center",
                                            display: "flex",
                                            alignContent: "center",
                                            borderRadius: "10px 40px 10px 10px",
                                            clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%, 0 100%)"
                                        }}>
                                            <Typography color="white" sx={{ fontWeight: "bold" }}>
                                                {item.discount}
                                            </Typography>
                                        </Box>

                                        <Typography sx={{ color: "white", fontSize: "20px" }}>
                                            {item.price}
                                        </Typography>
                                    </Box>
                                </CardContent>

                                <CardActions sx={{
                                    display: "flex",
                                    justifyContent: "flex-end"
                                }}>
                                    <Button variant="contained" color="primary">BUY</Button>
                                </CardActions>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Trending;