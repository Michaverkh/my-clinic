import { Box, Pagination } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

export function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <Pagination
        variant="outlined"
        shape="rounded"
        count={Math.round(count / rowsPerPage)}
        showFirstButton
        showLastButton
        onChange={(event: any, page) => onPageChange(event, page - 1)}
      />
    </Box>
  );
}
