import React from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
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

const Search = ({ setSearchInput }) => {
  //   const searchBtn = (e) => {
  //     e.preventDefault();
  //   };

  return (
    <div className="search">
      <ThemeProvider  theme={theme}>
        <Input
          type="text"
          placeholder="Seach For Characters..."
          onChange={(e) => setSearchInput(e.target.value)}
          style={{backgroundColor: 'gray'}}
          color="accent"
        ></Input>
        <Button variant="contained" color="accent">
          Search
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default Search;
