import { Button, CircularProgress, Typography } from "@mui/material";
import { FC, useRef } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import useStore from "app/hooks/useStore";
import { observer } from "mobx-react-lite";

export const ImportBtn: FC = observer(() => {
  const { dataSet } = useStore();
  const fileInput = useRef<HTMLInputElement>(null);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList;

    const formData = new FormData();
    formData.append("file", files[0]);

    dataSet.sendFile(formData);
  };

  return (
    <>
      {dataSet.loading ? (
        <>
          <CircularProgress
            sx={{
              marginRight: "16px",
            }}
          />
          <Typography>
            Подождите, загрузка может занять некоторое время
          </Typography>
        </>
      ) : (
        <>
          <Button
            color="secondary"
            startIcon={<UploadFileIcon />}
            onClick={() => {
              fileInput.current && fileInput.current.click();
            }}
          >
            Импортировать данные
          </Button>
          <input
            ref={fileInput}
            type="file"
            id="file-input"
            style={{ display: "none" }}
            onChange={handleUpload}
          />
        </>
      )}
    </>
  );
});
