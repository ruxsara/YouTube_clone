import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ChannelDetail,
  Feed,
  Header,
  SearchFeed,
  VideoDetail,
} from "./components";
import { BASE } from "./utilities/constants";
import Box from "@mui/material/Box";

const App = () => (
  <BrowserRouter>
    <Box sx={{ ml: 2 }}>
      <Header />
      <Routes>
        <Route exact path={`/${BASE}`} element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
