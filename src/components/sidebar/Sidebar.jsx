import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../../utilities/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      
      overflowY: "auto",
      height: '100%',
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#dad1d1",
          color: "black",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "black" : "#3b3a30",
            marginRight: "10px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
