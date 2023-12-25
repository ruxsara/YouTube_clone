import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
 
 
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
 
    </Stack >
  );
};

export default Navbar;
