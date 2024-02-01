import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logoURL from "../../assets/logo.png";
import { SearchBar, TagsCarousel } from "../../components";
import { BASE } from "../../utilities/constants";
import DialogSign from "../dialog/Dialog";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Grid
      container
      className="headerContainer"
      sx={{ justifyContent: "space-betweend" }}
    >
      <Grid item display="flex" alignItems="center">
        <span>
          <MenuIcon />
        </span>
        <span item xs={4} sm={2} justifyContent="left" alignItems="center">
          {/* //LINK */}
          <Link
            to={`/${BASE}`}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img id="logo" src={logoURL} alt="logo" />
          </Link>
        </span>
      </Grid>

      <Grid
        item
        xs={4}
        sm={5}
        container
        justifyContent="center"
        alignItems="center"
      >
        {/* //SEARCHBAR */}
        <SearchBar />
      </Grid>
      <Grid
        item
        xs={4}
        sm={2}
        container
        justifyContent="right"
        alignItems="center"
      >
        {/* //SEARCHBAR */}

        <Grid item sx={{ mr: "20px" }}>
          <Link>
            <MoreVertIcon />
          </Link>
        </Grid>

        <Grid item sx={{ mr: "20px" }}>
          <Link>
            <DialogSign />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
