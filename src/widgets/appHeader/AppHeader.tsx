import { Box, Typography, Divider } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../shared/assets/Logo.svg";
import { RoterPath } from "shared/router/enums";

export const AppHeader: FC = () => {
  return (
    <Link to={RoterPath.TABLE} title="Main">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "26px 16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "30px",
          }}
        >
          <Logo />
        </Box>
        <Typography variant="h2">Аудит назначений</Typography>
      </Box>
      <Divider />
    </Link>
  );
};
