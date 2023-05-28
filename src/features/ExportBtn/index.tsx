import { Button, IconButton, Link, Snackbar } from "@mui/material";
import { FC } from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import useStore from "app/hooks/useStore";
import { observer } from "mobx-react-lite";
import { EDowloadingState } from "shared/enums/enums";
import CloseIcon from "@mui/icons-material/Close";

export const ExportBtn: FC = observer(() => {
  const timeStamp = new Date().getTime().toString();
  const { report } = useStore();

  const handleClick = () => {
    report.getReport(timeStamp);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        color="secondary"
        startIcon={<SaveAltIcon />}
      >
        Экспортировать
      </Button>
      <Snackbar
        open={report.state === EDowloadingState.Loading}
        autoHideDuration={6000}
        message="Подготовка файла отчета"
        action={
          <Button color="error" onClick={report.cancelDownload}>
            Отменить
          </Button>
        }
      />
      <Snackbar
        open={report.state === EDowloadingState.Loaded}
        autoHideDuration={6000}
        message="Отчет готов для скачивания"
        action={
          <>
            <Button
              color="secondary"
              onClick={report.handleDownloadReportClick}
            >
              Скачать
            </Button>
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={report.handleClose}
            >
              <CloseIcon />
            </IconButton>
          </>
        }
      />
    </>
  );
});
