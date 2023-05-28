import { Typography, Box } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface IProps {
  label?: string;
  value?: string;
  children?: ReactNode;
}

export const DetailedInfoItem: FC<IProps> = ({
  label = "",
  value = "",
  children,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Typography variant="h4">{label}</Typography>
        </Box>
        <Box>
          {value && <Typography>{value}</Typography>}
          {children}
        </Box>
      </Box>
    </>
  );
};
