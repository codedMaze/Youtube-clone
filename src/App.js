import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  VideoDetail,
  ChannelDetail,
  Feed,
  SearchFeed,
} from "./Components/index";
import Wrapper from "./Components/Wrapper";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Wrapper />,
      children: [
        { index: true, element: <Feed /> },
        { path: "video/:id", element: <VideoDetail /> },
        { path: "channel/:id", element: <ChannelDetail /> },
        { path: "search/:searchTerm", element: <SearchFeed /> },
      ],
    },
  ]);

  return (
    // <BrowserRouter>
    //   <Box sx={{ backgroundColor: "#000" }}>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Feed />} />
    //       <Route path="/video/:id" element={<VideoDetail />} />
    //       <Route path="/channel/:id" element={<ChannelDetail />} />
    //       <Route path="/search/:searchTerm" element={<SearchFeed />} />
    //     </Routes>
    //   </Box>
    // </BrowserRouter>
    <RouterProvider router={route} />
  );
};

export default App;
