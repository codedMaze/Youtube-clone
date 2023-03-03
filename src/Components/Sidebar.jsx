import React, { useContext } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constant";
import FeedContext from "../store/feed";

const Sidebar = () => {
  const feedCtx = useContext(FeedContext);
  const selectedCategory = feedCtx.selectedCategory;
  const onChange = feedCtx.changeSelectedCategory;
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((item) => (
        <button
          onClick={() => onChange(item.name)}
          key={item.name}
          className="category-btn"
          style={{
            background: item.name === selectedCategory && "#FC1503",
            color: "#fff",
          }}
        >
          <span
            style={{
              color: item.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {item.icon}
          </span>
          <span
            style={{ opacity: item.name === selectedCategory ? "1" : "0.8" }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
