import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { DashbordFiltersForm } from "widgets/dashbordFiltersForm";
import { DashBoard } from "widgets/dashboard/Dashboard";

export const DashboardWidget: FC = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "320px auto",
        columnGap: "48px",
      }}
    >
      <Box>
        <Typography variant="h3" mb="16px">
          Фильтры
        </Typography>
        <DashbordFiltersForm />
      </Box>
      <Box
        sx={{
          height: "500px",
        }}
      >
        <DashBoard
          axisBottomText="Специализация"
          axisLeftText="Колличество назначений"
        />
      </Box>
    </Box>
  );
};
