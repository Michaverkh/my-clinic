import React, { FC } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

export const DetailedInfoPage: FC = () => {
  const location = useLocation();
  return (
    <>
      <Box>DetailedInfoPage: {location.state.id}</Box>
    </>
  );
};
