import { Box, Button, CircularProgress, Typography } from "@mui/material";
import CartHeader from "../../../../components/Customer/CartPage/CartHeader";
import { ThumbUpOutlined } from "@mui/icons-material";
import CartFooter from "../../../../components/Customer/CartPage/CartFooter";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createPaymentService, createPurchaseHistoryService } from "../../../../api/purchaseService";
import useStoreCart from "../../../../hooks/cart";
import { useAuthStore } from "../../../../hooks/User";


function GameActivationPage() {
    const navigate = useNavigate();
    const { cart, totalFinalPrice, removeCartBuy } = useStoreCart();
    const [loading, setLoading] = useState(false);
    const { profile } = useAuthStore();

    let num = cart.buy.length;

    const [length, setLength] = useState(num);

    useEffect(() => {
        const fetchPurchase = async () => {
            if (cart.buy.length === 0) {
                console.log("Your order is processed!");
                return;
            }
            for (const order of cart.buy) {
                const formData = {
                    purchaseRequest: {
                        userId: profile.data.id,
                        gameId: order.gameId,
                        paymentType: 'Credit Card',
                        totalPrice: totalFinalPrice,
                        status: 1
                    },
                    purchaseHistoryRequest: {
                        downloadUrl: "http://example.com/download",
                        rewardPoint: 0
                    }
                }

                try {
                    const res = await createPaymentService(formData);

                    if (res.statusCode === 200) {
                        console.log("create purchase success!");
                        removeCartBuy(order.id);
                    }
                    else {
                        console.log("Fail to create purchase")
                    }
                }
                catch (error) {
                    console.log("Error: ", error)
                }
            }
        };

        fetchPurchase();
    }, []);

    return (
        <Box sx={{
            bgcolor: "#272727",
            margin: '-8px',
            minHeight: "100vh",
            position: 'relative'
        }}>
            <CartHeader activate={2} />

            <Box sx={{
                paddingTop: { xs: 20, sm: 15 },
                paddingLeft: { xs: 2, sm: 10, md: 20, lg: 30 },
                paddingRight: { xs: 2, sm: 10, md: 20, lg: 30 }
            }}>
                <Box sx={{
                    justifyItems: 'center',
                    color: '#fff',
                    paddingBottom: 5
                }}>
                    <ThumbUpOutlined sx={{
                        fontSize: { xs: 40, sm: 45 }
                    }} />

                    <Typography sx={{
                        fontFamily: 'barlow-regular',
                        fontSize: { xs: 25, sm: 30 }
                    }}>
                        Thank you for your purchase
                    </Typography>
                </Box>

                <Box sx={{
                    bgcolor: "#323232",
                    padding: 5,
                    color: '#999',
                    borderRadius: '10px',
                    paddingLeft: { xs: 2, sm: 5, md: 10, lg: 15 },
                    paddingRight: { xs: 2, sm: 5, md: 10, lg: 15 },
                    justifyItems: 'center'
                }}>
                    {loading ? (
                        <Box sx={{
                            justifyItems: 'center',
                        }}>
                            <Typography sx={{
                                textAlign: 'center',
                                marginBottom: 4,
                                fontSize: { xs: 13, sm: 17 }
                            }}>
                                Your order is being processed.
                            </Typography>

                            <CircularProgress color="success" />
                        </Box>
                    ) : (
                        <Typography sx={{
                            textAlign: 'center',
                            marginBottom: 4,
                            fontSize: { xs: 13, sm: 17 }
                        }}>
                            The game activation code has been sent in your order section. Please go to 'My Orders' to retrieve the code and proceed with activating the game.
                        </Typography>
                    )}

                    {!loading && (
                        <Box sx={{
                            width: '50%'
                        }}>
                            <Button sx={{
                                textTransform: 'none',
                                padding: { xs: 1, sm: 2 },
                                width: '100%',
                                background: "linear-gradient(10deg, #ff8000, transparent) #ff4020",
                            }}
                                onClick={() => navigate("/user/my-orders")}
                            >
                                <Typography sx={{
                                    color: '#fff',
                                    fontFamily: 'barlow-regular',
                                    fontSize: 18
                                }}>
                                    Go to my order
                                </Typography>
                            </Button>
                        </Box>
                    )}
                </Box>
            </Box>

            <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%'
            }}>
                <CartFooter />
            </Box>
        </Box>
    )
}

export default GameActivationPage;