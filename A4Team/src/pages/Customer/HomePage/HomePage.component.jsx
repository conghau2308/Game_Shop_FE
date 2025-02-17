import { Box } from "@mui/material";
import Trending from "./HomePageDetails/Trending";
import Information from "./HomePageDetails/Information";
import Content from "./HomePageDetails/Content";
import Review from "./HomePageDetails/Review";
import Comment from "./HomePageDetails/Comment";
import News from "./HomePageDetails/News";

function HomePage() {
    return (
        <Box sx={{
            bgcolor: "#323232",
            display: "flex",
            flexDirection: "column"
        }}>
            {/* <Trending /> */}

            <Information />

            <Content />

            <Comment />

            <Review />

            <News />
        </Box>
    )
}

export default HomePage;