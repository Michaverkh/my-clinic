import { Button } from "@mui/material";
import { FC } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export const ImportBtn: FC = () => {
  return (
    <Button color="secondary" startIcon={<UploadFileIcon />}>
      Импортировать
    </Button>
  );
};
