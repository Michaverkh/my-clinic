import React, { FC, useEffect } from "react";
import { Box } from "@mui/material";
import { AppHeader } from "widgets/appHeader";
import { Routes, Route } from "react-router";
// import { useNavigate } from "react-router-dom";
import { ContentPage } from "pages/contentPage";
import { RoterPath } from "shared/router/enums";
import { DetailedInfoPage } from "pages/detailedInfoPage";

export const MainPage: FC = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate(RoterPath.DEFAULT_PAGE);
  // }, []);

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
