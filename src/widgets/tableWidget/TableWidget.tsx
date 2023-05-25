import { FC } from "react";
import { Box } from "@mui/material";
import { ReceptionFiltersForm } from "widgets/receptionFiltersForm";
import { headCells, rows } from "./data";
import { EnhancedTable } from "features";

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
      <EnhancedTable rows={rows} headCells={headCells} />
    </Box>
  );
};
