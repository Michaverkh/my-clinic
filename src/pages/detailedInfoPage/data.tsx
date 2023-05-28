import { Typography } from "@mui/material";
import { Status } from "features";
import { ReactNode } from "react";

interface Data {
  id: number;
  name: string;
  isNecessary: ReactNode;
  status: ReactNode;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export const createData = (
  id: number,
  name: string,
  isNecessary: boolean,
  status: string
): Data => ({
  id,
  name,
  isNecessary: <Typography>{isNecessary ? "Да" : "Нет"}</Typography>,
  status: <Status status={[status]} />,
});

export const headerCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Наименование исследования",
  },
  {
    id: "isNecessary",
    numeric: false,
    disablePadding: true,
    label: "Необходимость исследования",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: true,
    label: "Статус исследования",
  },
];
