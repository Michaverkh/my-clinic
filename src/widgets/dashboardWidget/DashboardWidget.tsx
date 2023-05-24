import React, { FC } from "react";
import { Box } from "@mui/material";

export const DashboardWidget: FC = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "320px auto",
        columnGap: "48px",
      }}
    >
      <span>Фильтры для дашборда</span>
    </Box>
  );
};
