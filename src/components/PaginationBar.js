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
      // contrastText: "#EEE",
    },
    accent: {
      main: "#8fd746",
    },
  },
  typography: {
    // fontFamily: ["Poppins"],
    fontSize: 20,
  },
});

const PaginationBar = ({ info, setPage }) => {
  const pageBtn = (e) => {
    setPage(e.target.innerText);
  };

  return (
    <div class="pagination">
      <ThemeProvider theme={theme}>
        <Stack alignItems="center">
          <Pagination
            count={info.pages}
            variant="outlined"
            shape="rounded"
            onClick={pageBtn}
            color="accent"
            sx={{ button: { color: "primary.main" } }}
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default PaginationBar;
