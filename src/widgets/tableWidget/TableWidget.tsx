import { FC, useEffect, useMemo } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { ReceptionFiltersForm } from "widgets/receptionFiltersForm";
import { createData, headCells } from "./data";
import { EnhancedTable, ImportBtn } from "features";
import useStore from "app/hooks/useStore";
import { observer } from "mobx-react-lite";

export const TableWidget: FC = observer(() => {
  const { receptions } = useStore();
  const { dataSet } = useStore();

  useEffect(() => {
    receptions.getList();
  }, [dataSet.isSuccess]);

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

  const renderContent = () => {
    if (receptions.loading) {
      return <CircularProgress />;
    }

    if (!rows || rows.length === 0) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px",
            width: "100%",
            height: "100%",
            backgroundColor: (theme) => theme.palette.primary.light,
          }}
        >
          <ImportBtn />
        </Box>
      );
    }

    return <EnhancedTable rows={rows} headCells={headCells} />;
  };

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderContent()}
      </Box>
    </Box>
  );
});
