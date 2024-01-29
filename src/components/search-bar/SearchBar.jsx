import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Fab, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from '@mui/icons-material/Mic';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
   < Grid container>
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      style={{
        border: "1px solid #e3e3e3",
        display: "flex",
        justifyContent:"space-between"
      }}

      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 2 },
        width: "60%",
        height:40,
      }}
    >
      <input 
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <IconButton
        type="submit"
        sx={{ p: "10px", backgroundColor:'#f2f2f2', width:64,borderRadius:'0 20px 20px 0' }}
        aria-label="search"
      >
        <SearchIcon color="black" />
      </IconButton>
     
    </Paper>
     <Fab sx={{height:40,width:40,backgroundColor:'#f2f2f2',boxShadow:'none'}}>
     <MicIcon fontSize="medium" />
     </Fab>
     </Grid>
  );

  

};

export default SearchBar;
