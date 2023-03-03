import { useEffect, useState, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import FeedContext from "../store/feed";

const Feed = () => {
  // const [selectedCategory, setSelectedCategory] = useState("New");
  const feedCtx = useContext(FeedContext);
  const [videos, setVideos] = useState([]);
  const selectedCategory = feedCtx.selectedCategory;

  // const onChangeHandler = (quary) => {
  //   setSelectedCategory(quary);
  // };

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
      (response) => {
        setVideos(response.items);
      }
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          // onChange={onChangeHandler}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 CodedMaze
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#fff" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
