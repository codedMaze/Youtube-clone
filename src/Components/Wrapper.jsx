import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Navbar";

const Wrapper = () => {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Wrapper;
