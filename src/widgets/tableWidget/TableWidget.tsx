import React, { FC } from "react";
import { Box } from "@mui/material";
import { ReceptionFiltersForm } from "widgets/receptionFiltersForm";

export const TableWidget: FC = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "320px auto",
        columnGap: "48px",
      }}
    >
      <ReceptionFiltersForm />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "300px",
          height: "100%",
          borderRadius: "20px",
          backgroundColor: "#82B1FF",
        }}
      >
        <span>Место для вашей таблицы</span>
      </Box>
    </Box>
  );
};
