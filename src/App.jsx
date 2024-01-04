import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { ChannelDetail, VideoDetail, SearchFeed, Feed, Header, Pagination } from './components';
import { BASE } from "./utilities/constants"; 
 
const App = () => (
  <BrowserRouter>

    <Box>
      
      <Header/>
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
