import { Button } from "@mui/material";
import { FC } from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

export const ExportBtn: FC = () => {
  return (
    <Button color="secondary" startIcon={<SaveAltIcon />}>
      Экспортировать
    </Button>
  );
};
