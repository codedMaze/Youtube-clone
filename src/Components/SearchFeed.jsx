import { useEffect, useState, useContext } from "react";
import { Box, Typography } from "@mui/material";

import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  // const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  // const onChangeHandler = (quary) => {
  //   setSelectedCategory(quary);
  // };

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((response) => {
      setVideos(response.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span>
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
