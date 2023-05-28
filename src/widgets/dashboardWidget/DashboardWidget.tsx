import React, { FC, useEffect, useMemo } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import useStore from "app/hooks/useStore";
import { observer } from "mobx-react-lite";
import { DashbordFiltersForm } from "widgets/dashbordFiltersForm";
import { DashBoard } from "widgets/dashboard/Dashboard";
import { IDashBoardRenderData } from "entities/dashboard/interafces";
import { EReceptionRu } from "shared/enums/enums";

export const DashboardWidget: FC = observer(() => {
  const { dashboardItems } = useStore();

  useEffect(() => {
    dashboardItems.getList({ section: "specialization" });
  }, []);

  interface IDashboardRenderData {
    values: IDashBoardRenderData[];
    keys: string[];
  }

  const dashboardData = useMemo(() => {
    const mappedDashboardData: IDashboardRenderData = {
      values: [],
      keys: [],
    };
    dashboardItems.items.forEach((item) => {
      const result: IDashBoardRenderData = {
        name: item.name,
        [EReceptionRu.standart]: item.standart,
        [EReceptionRu.poorQuality]: item.poorQuality,
        [EReceptionRu.suboptimal]: item.suboptimal,
        [EReceptionRu.unverifiable]: item.unverifiable,
      };

      mappedDashboardData.values.push(result);
    });
    return mappedDashboardData;
  }, [dashboardItems.loading]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "320px 900px",
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "520px",
        }}
      >
        {dashboardItems.loading ? (
          <CircularProgress />
        ) : dashboardData.values.length !== 0 ? (
          <Box
            sx={{
              height: "100%",
              width: "100%",
            }}
          >
            <DashBoard
              dashBoardRenderData={dashboardData.values}
              axisBottomText="Специализация / Дата"
              axisLeftText="Колличество назначений"
            />
          </Box>
        ) : (
          <Typography variant="h6">
            При загрузке данных произошла ошибка. Попробуйте позднее
          </Typography>
        )}
      </Box>
    </Box>
  );
});
