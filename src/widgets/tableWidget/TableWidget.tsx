import { FC, useEffect, useMemo } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { ReceptionFiltersForm } from "widgets/receptionFiltersForm";
import { createData, headCells } from "./data";
import { EnhancedTable } from "features";
import useStore from "app/hooks/useStore";
import { Observer, observer } from "mobx-react-lite";

export const TableWidget: FC = observer(() => {
  const { receptions } = useStore();
  useEffect(() => {
    receptions.getList();
  }, []);

  const rows = useMemo(
    () =>
      receptions.items.map((item) =>
        createData(
          item.reception.date,
          item.doctor.specialization,
          item.doctor.name,
          item.appointment.count,
          item.appointment.count,
          item.appointment.research
        )
      ),
    [receptions.loading]
  );

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
        <ReceptionFiltersForm />
      </Box>
      {receptions.loading ? (
        <CircularProgress />
      ) : (
        <EnhancedTable rows={rows} headCells={headCells} />
      )}
    </Box>
  );
});
