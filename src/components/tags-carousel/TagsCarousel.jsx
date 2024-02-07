import { Chip, Tab } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import * as React from "react";
import { useNavigate } from "react-router-dom";


function TagsCarousel() {
  const navigate = useNavigate();

  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    const tag = event.target.innerText;
    setValue(tag);
    navigate({
      search: `?tag_value=${tag}`,
    });
  };

  const tags = [
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
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        {tags.map((tag, index) => (
          <Tab
            className={tag === value ? `tag  selectedTag` : "tag"}
            key={index}
            label={tag}
            onClick={handleChange}
          />
        ))}
      </Tabs>
    </Box>
  );
}
export default TagsCarousel;
