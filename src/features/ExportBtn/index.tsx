import { Button, Link } from "@mui/material";
import { FC } from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { EEndpoints } from "shared/api/enums";

export const ExportBtn: FC = () => {
  const timeStamp = new Date().getTime();
  return (
    <Link
      href={EEndpoints.GET_REPORT_EXPORT_FILE}
      target="_blank"
      rel="noreferrer"
      underline="none"
      download={`${timeStamp}.xlsx`}
    >
      <Button color="secondary" startIcon={<SaveAltIcon />}>
        Экспортировать
      </Button>
    </Link>
  );
};
