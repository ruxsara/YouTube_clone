import React from "react";
import { Box, CircularProgress, Stack } from "@mui/material";

const Pagination = () => (

  <Box minHeight="150px">
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="60px"
    >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Pagination;
