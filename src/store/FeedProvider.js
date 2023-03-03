import React, { useState } from "react";
import FeedContext from "./feed";

const FeedProvider = (props) => {
  const [feed, setFeed] = useState("New");

  const changeCategory = (value) => {
    setFeed(value);
  };

  const feedContext = {
    selectedCategory: feed,
    changeSelectedCategory: changeCategory,
  };
  return (
    <FeedContext.Provider value={feedContext}>
      {props.children}
    </FeedContext.Provider>
  );
};

export default FeedProvider;
