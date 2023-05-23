import { Button, Box } from "@mui/material";
import React, { FC } from "react";

export const UploadPage: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button
        variant="contained"
        onClick={() => console.log("upload data")}
        size="large"
      >
        Загрузить данные
      </Button>
    </Box>
  );
};
