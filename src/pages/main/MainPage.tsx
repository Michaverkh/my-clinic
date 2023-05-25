import React, { FC } from "react";
import { Box } from "@mui/material";
import { AppHeader } from "widgets/appHeader";
import { Routes, Route } from "react-router";
import { ContentPage } from "pages/contentPage";
import { RoterPath } from "shared/router/enums";
import { DetailedInfoPage } from "pages/detailedInfoPage";

export const MainPage: FC = () => {
  return (
    <>
      <AppHeader />
      <Box>
        <Routes>
          <Route path={RoterPath.CONTENT} element={<ContentPage />} />
          <Route
            path={RoterPath.DETAILED_INFO}
            element={<DetailedInfoPage />}
          />
        </Routes>
      </Box>
    </>
  );
};
