import React, { FC } from "react";
import { Box } from "@mui/material";
import { AppHeader } from "widgets/appHeader";
import { Routes, Route } from "react-router";
import { ContentPage } from "pages/contentPage";

export const MainPage: FC = () => {
  return (
    <>
      <AppHeader />
      <Box>
        <Routes>
          <Route path="/ds" element={<ContentPage />} />
        </Routes>
      </Box>
    </>
  );
};
