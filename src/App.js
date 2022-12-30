import "./App.css";
// import CardItem from "./components/CardItem";
import Filter from "./components/Filter";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CardItem from "./components/CardItem";
import Search from "./components/Search";
import PaginationBar from "./components/PaginationBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
      contrastText: "#EEE",
    },
    // accent: {
    //   main: "#8fd746",
    // },
  },
  typography: {
    // fontFamily: ["Roboto"],
    fontSize: 18,
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
  // const [clicked, setClicked] = useState(false);

  // const showDetails = () => {
  //   setClicked(true);
  // };

  let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchInput}`;

  useEffect(() => {
    (async () => {
      const data = await fetch(api).then((response) => response.json());
      setFetchedData(data);
    })();
  }, [api]);
  // console.log(info);
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#ffff00",
  //       contrastText: "#EEE",
  //     },
  //     secondary: {
  //       main: "#EEE",
  //     },
  //     background: {
  //       default: "#222222",
  //       contrastText: "#EEE",
  //     },
  //     accent: {
  //       main: "#8fd746",
  //     },
  //   },
  //   typography: {
  //     fontFamily: ["Poppins"],
  //     fontSize: 18,
  //   },
  // });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>Characters</h1>
        <Search setSearchInput={setSearchInput} />
        <Grid container spacing={1}>
          <Grid xs={12} sm={4} md={3}>
            <Filter />
          </Grid>
          <CardItem results={results} />
        </Grid>
        <PaginationBar info={info ? info : ""} setPage={setPage} />
      </ThemeProvider>
    </div>
  );
}

export default App;
