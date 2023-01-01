import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EEE",
    },
    background: {
      default: "#222222",
    },
    accent: {
      main: "#8fd746",
    },
  },
  typography: {
    fontSize: 20,
  },
});

const PaginationBar = ({ info, page, setPage }) => {
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="pagination">
      <ThemeProvider theme={theme}>
        <Stack alignItems="center">
          <Pagination
            count={info.pages}
            variant="outlined"
            shape="rounded"
            color="accent"
            page={page}
            onChange={handlePageChange}
            sx={{ button: { color: "primary.main" } }}
            boundaryCount={2}
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default PaginationBar;
