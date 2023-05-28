import React, { FC, useEffect, useMemo } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useStore from "app/hooks/useStore";
import { observer } from "mobx-react-lite";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { RoterPath } from "shared/router/enums";
import { DetailedInfoItem } from "widgets/detailedInfoItem";
import { Status } from "features";
import { createData, headerCells } from "./data";

export const DetailedInfoPage: FC = observer(() => {
  const location = useLocation();
  const { detailed } = useStore();
  const navigate = useNavigate();
  const { item, isSuccess, loading } = detailed;
  const { doctor, reception, research } = item;

  const rows = useMemo(
    () =>
      research.map((researchItem) =>
        createData(
          researchItem.id,
          researchItem.name,
          researchItem.isNecessary,
          researchItem.status
        )
      ),
    [loading]
  );

  useEffect(() => {
    detailed.getInfo(location.state.id);
  }, [item]);

  const renderContent = () => {
    if (loading) {
      return <CircularProgress />;
    }
    if (!isSuccess) {
      return (
        <Typography variant="h5">
          При загрузке данных произошла ошибка.
        </Typography>
      );
    }
    return (
      <Box
        sx={{
          padding: "16px",
          "box-shadow":
            "0px 2px 1px -1px #00000033, 0px 1px 1px 0px #00000024, 0px 1px 3px 0px #0000001F",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginBottom: "16px",
          }}
        >
          Доктор
        </Typography>
        <DetailedInfoItem label="ФИО" value={doctor.name} />
        <DetailedInfoItem label="Специализация" value={doctor.specialization} />
        <Divider
          sx={{
            marginBottom: "16px",
          }}
        />
        <Typography
          variant="h3"
          sx={{
            marginBottom: "16px",
          }}
        >
          Прием
        </Typography>
        <DetailedInfoItem label="Диагноз" value={reception.diagnosis} />
        <DetailedInfoItem label="Дата" value={reception.date} />
        <DetailedInfoItem label="Статус">
          <Status status={[reception.status]} />
        </DetailedInfoItem>
        <Divider
          sx={{
            marginBottom: "16px",
          }}
        />
        <Typography
          variant="h3"
          sx={{
            marginBottom: "16px",
          }}
        >
          Исследования
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {headerCells.map((header) => (
                  <TableCell component="th" scope="row" key={header.id}>
                    {header.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow key={row.id}>
                    {Object.values(row).map((val, index) => {
                      if (index !== 0) {
                        return <TableCell>{val}</TableCell>;
                      }
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            padding: "48px 144px",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <Button
              color="secondary"
              startIcon={<ArrowBackIosIcon />}
              onClick={() => {
                navigate(RoterPath.CONTENT);
              }}
            >
              Вернуться к списку
            </Button>
            <Box>
              <Typography variant="h5">Идентификатор приема</Typography>
              <Typography>{location.state.id}</Typography>
            </Box>
          </Box>
          {renderContent()}
        </Box>
      </Box>
    </>
  );
});
