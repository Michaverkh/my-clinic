import React, { FC } from "react";
import { Box } from "@mui/material";
import { ViewDataPage } from "pages/viewDataPage";

export const ContentPage: FC = () => {
  return (
    <Box
      sx={{
        padding: "48px 144px",
        height: "100%",
      }}
    >
      <ViewDataPage />
    </Box>
  );
};
