import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components";
import logoURL from "../../assets/logo.png";
import { BASE } from "../../utilities/constants";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <Grid container row className="headerContainer" >
      <Grid
        item
        xs={4}
        sm={2}
        container
        justifyContent="left"
        alignItems="center"
      >
        {/* //LINK */}
        <Link to={`/${BASE}`} style={{ display: "flex", alignItems: "center" }}>
          <img id="logo" src={logoURL} alt="logo" />
        </Link>
      </Grid>
      <Grid
        item
        xs={4}
        sm={8}
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

        <Grid sx={{ mr: "20px" }}  >
          <Link>
            <NotificationsNoneIcon />
          </Link>
        </Grid>


        <Grid sx={{ mr: "20px" }} >
          <Link>
            <AccountCircleIcon style={{ fontSize: "35px" }} />
          </Link>
        </Grid>


      </Grid>
    </Grid>
  );
};

export default Header;
