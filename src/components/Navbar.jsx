import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logoURL from '../assets/logo.png'
import { BASE } from "./contains";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "white",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to={`/${BASE}`} style={{ display: 'flex', alignItems: 'center' }} >
        <img src={logoURL} alt="logo" height={45} />

      </Link>

      <SearchBar />
    </Stack >
  );
};

export default Navbar;
