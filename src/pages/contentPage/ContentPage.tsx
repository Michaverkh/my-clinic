import React, { FC, useState } from "react";
import { Box } from "@mui/material";
import { ViewDataPage } from "pages/viewDataPage";
import { UploadPage } from "pages/upLoadPage";

export const ContentPage: FC = () => {
  // локальный стейт - тестовый. В дальнейшем состояние брать из mobX
  const [isDataSetUploaded, setIsDataSetUploaded] = useState<boolean>(false);
  return (
    <Box
      sx={{
        padding: "48px 144px",
      }}
    >
      {isDataSetUploaded ? <ViewDataPage /> : <UploadPage />}
    </Box>
  );
};
