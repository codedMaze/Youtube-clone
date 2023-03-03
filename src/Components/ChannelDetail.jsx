import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [video, setVideo] = useState([]);

  console.log(video);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((response) =>
      setChannelDetail(response?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&id&order=date`).then(
      (response) => setVideo(response?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }}>
          <Videos videos={video} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
