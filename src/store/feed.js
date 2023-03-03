import { createContext } from "react";

const FeedContext = createContext({
  selectedCategory: "New",
  changeSelectedCategory: (value) => {},
});

export default FeedContext;
