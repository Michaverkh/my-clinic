import React, { FC, useState } from "react";
import { Box } from "@mui/material";
import { ViewDataPage } from "pages/viewDataPage";
import { UploadPage } from "pages/upLoadPage";

export const ContentPage: FC = () => {
  // локальный стейт - тестовый. В дальнейшем состояние брать из mobX
  const [isDataSetUploaded, setIsDataSetUploaded] = useState<boolean>(true);
  return (
    <Box
      sx={{
        padding: "48px 144px",
        height: "100%",
      }}
    >
      {isDataSetUploaded ? <ViewDataPage /> : <UploadPage />}
    </Box>
  );
};
