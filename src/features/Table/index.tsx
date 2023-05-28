import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ExportBtn, ImportBtn } from "features";
import { Data, HeadCell, Order } from "./interfaces";
import { TableHeader } from "./Header";
import { FC } from "react";
import { TablePaginationActions } from "./Pagination";
import { observer } from "mobx-react-lite";
import useStore from "app/hooks/useStore";
import { useNavigate } from "react-router-dom";
import { RoterPath } from "shared/router/enums";
import uuid from "react-uuid";

interface IProps {
  headCells: readonly HeadCell[];
  rows: Data[];
}

export const EnhancedTable: FC<IProps> = observer(({ headCells, rows }) => {
  const { receptions } = useStore();
  const navigate = useNavigate();

  /**
   * Нажали на сортировку
   * @param event
   * @param property
   * @returns
   */
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    if (property !== "date") {
      return;
    }

    const isAsc = receptions.sortDirection === "asc";

    receptions.setOrder(isAsc ? "desc" : "asc");
    receptions.getList();
  };

  /**
   * нажали на строку
   * @param event
   * @param name
   */
  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    console.log(id);
    navigate(RoterPath.DETAILED_INFO, { state: { id } });
  };

  /**
   * Смена страницы
   * @param event
   * @param newPage
   */
  const handleChangePage = (event: unknown, newPage: number) => {
    receptions.setPage(newPage);
    receptions.getList();
  };

  /**
   * Смена кол-ва строк на странице
   * @param event
   */
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    receptions.setLimit(parseInt(event.target.value, 10));
    receptions.setPage(0);
    receptions.getList();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, boxShadow: "unset" }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <TableHeader
              headCells={headCells}
              order={receptions.sortDirection as Order}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    tabIndex={-1}
                    key={uuid()}
                    sx={{ cursor: "pointer" }}
                  >
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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ExportBtn />
            <ImportBtn />
          </Box>
          <TablePagination
            ActionsComponent={TablePaginationActions}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={receptions.pagination.totalSize}
            rowsPerPage={receptions.pagination.limit}
            page={receptions.page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Paper>
    </Box>
  );
});
