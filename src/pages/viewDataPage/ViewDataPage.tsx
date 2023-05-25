import React, { FC, useEffect, useState } from "react";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { RoterPath } from "shared/router/enums";
import { TableWidget } from "widgets/tableWidget";
import { DashboardWidget } from "widgets/dashboardWidget";

/**
 * To do:
 * Список приемов вынести в отдельный компонент
 */

export const ViewDataPage: FC = () => {
  const navigate = useNavigate();
  const [header, setHeader] = useState<string>("Список приемов");

  useEffect(() => {
    navigate(RoterPath.TABLE);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "48px",
        }}
      >
        <Typography variant="h1">{header}</Typography>
        <ToggleButtonGroup exclusive>
          <Link to={RoterPath.TABLE} title="Table">
            <ToggleButton
              value="table"
              onClick={() => setHeader("Список приемов")}
            >
              <MenuIcon color="primary" />
            </ToggleButton>
          </Link>
          <Link to={RoterPath.DASHBOARD} title="DashBoard">
            <ToggleButton
              value="dashboard"
              onClick={() => setHeader("Статистика")}
            >
              <AlignVerticalBottomIcon color="primary" />
            </ToggleButton>
          </Link>
        </ToggleButtonGroup>
      </Box>
      <Box>
        <Routes>
          <Route index path={RoterPath.TABLE} element={<TableWidget />} />
          <Route path={RoterPath.DASHBOARD} element={<DashboardWidget />} />
        </Routes>
      </Box>
    </>
  );
};
