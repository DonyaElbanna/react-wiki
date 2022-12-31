import React from "react";
import Input from "@mui/material/Input";
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
      main: "#80ff00",
    },
  },
  typography: {
    fontSize: 20,
  },
});

const Search = ({ searchInput, setSearchInput }) => {
  return (
    <div className="search">
      <ThemeProvider theme={theme}>
        <Input
          type="text"
          placeholder="Seach For Characters..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          style={{
            paddingLeft: "25px",
            color: "white",
          }}
          color="accent"
        ></Input>
      </ThemeProvider>
    </div>
  );
};

export default Search;
