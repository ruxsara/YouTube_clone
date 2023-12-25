import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';
import { BASE } from "./utilities/constants"; 
import Header from "./components/header/Header";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "white" }}>
      <Header/>
      <Navbar />
      <Routes>
        <Route exact path={`/${BASE}`} element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
