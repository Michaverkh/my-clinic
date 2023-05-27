import { Button, Typography } from "@mui/material";
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
        <Button color="secondary" startIcon={<UploadFileIcon />}>
          <Typography>Загрузка...</Typography>
        </Button>
      ) : dataSet.isSuccess ? (
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
      ) : (
        <Typography variant="h6">
          При загрузке данных произошла ошибка.
        </Typography>
      )}
    </>
  );
});
