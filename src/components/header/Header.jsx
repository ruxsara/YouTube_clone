import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import logoURL from "../../assets/logo.png";
import { BASE } from "../../utilities/constants";

const Header = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      style={{ border: "1px solid", height: "160px" }}
    >
      <Grid
        item
        xs={3}
        md={2}
        style={{ border: "1px solid" }}
        container
        direction="row"
        justifyContent="left"
        alignItems="center"
      >
        {/* //LINK */}
        <Link to={`/${BASE}`} style={{ display: "flex", alignItems: "center" }}>
          <img src={logoURL} alt="logo" height={45} />
        </Link>
      </Grid>
      <Grid
        item
        xs={6}
        md={8}
        style={{ border: "1px solid" }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/* //SEARCHBAR */}
        <SearchBar />
      </Grid>
      <Grid
        item
        xs={3}
        md={2}
        style={{ border: "1px solid" }}
        container
        direction="row"
        justifyContent="right"
        alignItems="center"
      >
        <div>RIGHT</div>
      </Grid>
    </Grid>
  );
};

export default Header;
