import { Chip, Tab } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import * as React from "react";

function TagsCarousel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const categories = [
    "All",
    "Music",
    "Mixes",
    "Playlists",
    "Deep House",
    "Soundtracks",
    "Indie music",
    "Turkish pop music",
    "Live",
    "Beats",
    "Chill-out music",
    "Piano",
    "Guitar",
    "Recently uploaded",
    "Watched",
    "New to you",
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: "100%", sm: "100%" },
        bgcolor: "background.paper",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        {categories.map((category, index) => (
          <Tab  
            className="linkd"
            key={index}
            label={category}
            onClick={handleChange}
          />
        ))}
      </Tabs>
    </Box>
  );
}
export default TagsCarousel;
