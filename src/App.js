import "./App.css";
import { useEffect, useState } from "react";
// import Search from "./components/Search";
// import PaginationBar from "./components/PaginationBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Episodes from "./components/Episodes";
// import Locations from "./components/Locations";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#8fd746",
    //   contrastText: "#ffffff",
    // },
    // secondary: {
    //   main: "#EEE",
    // },
    background: {
      default: "#222222",
      // contrastText: "#EEE",
    },
    // accent: {
    //   main: "#8fd746",
    // },
  },
  typography: {
    // fontFamily: ["Roboto"],
    fontSize: 16,
  },
});

// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import { withTheme } from "@mui/material";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
// import { lightGreen } from "@mui/material/colors";
// import Button from "@mui/material/Button";
// import Pagination from "@mui/material/Pagination";
// import Badge from "@mui/material/Badge";
// import Stack from "@mui/material/Stack";
// import CssBaseline from "@mui/material/CssBaseline";
// import Input from "@mui/material/Input";

// import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const { info, results } = fetchedData;
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");

  const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchInput}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async () => {
      const data = await fetch(api).then((response) => response.json());
      setFetchedData(data);
    })();
  }, [api]);


// EPISODES




  // const clearFilters = () => {
  //   setPage(1);
  //   setStatus("");
  //   setSpecies("");
  //   setGender("");
  //   setExpanded("status");
  // };

  const clearSearch = (e) => {
    setSearchInput("");
    setPage(1);
    setStatus("");
    setSpecies("");
    setGender("");
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar
          results={results}
          page={page}
          setPage={setPage}
          stat={status}
          setStatus={setStatus}
          spec={species}
          setSpecies={setSpecies}
          gen={gender}
          setGender={setGender}
          clearSearch={clearSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          info={info ? info : ""}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
