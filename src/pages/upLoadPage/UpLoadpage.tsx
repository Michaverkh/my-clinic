import { Button, Box } from "@mui/material";
import React, { FC } from "react";

export const UploadPage: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        // height: "100vh",
      }}
    >
      <Button
        variant="contained"
        onClick={() => console.log("upload data")}
        color="secondary"
        size="large"
        sx={{
          marginTop: "100px",
          height: "50px",
        }}
      >
        Загрузить данные
      </Button>
    </Box>
  );
};
