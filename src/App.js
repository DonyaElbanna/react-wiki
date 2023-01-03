import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./components/Home";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToTopBtn from "./components/ToTopBtn";
import Navigation from "./components/Navigation";

const theme = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
  },
  typography: {
    fontSize: 16,
  },
});

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const { info, results } = fetchedData;
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(true);

  // Episodes State
  const [episodeData, setEpisodeData] = useState([]);
  const [episodeCharacters, setEpisodeCharacters] = useState([]);
  const [episodeId, setEpisodeId] = useState(1);

  // Locations State
  const [LocationData, setLocationData] = useState([]);
  const [residents, setResidents] = useState([]);
  const [locationId, setLocationId] = useState(1);

  // Home Fetch
  const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchInput}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async () => {
      const data = await fetch(api).then((response) => response.json());
      setFetchedData(data);
      setLoading(false);
    })();
  }, [api]);

  // Episodes Fetch
  const episodeApi = `https://rickandmortyapi.com/api/episode/${episodeId}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(episodeApi).then((res) => res.json());
      setEpisodeData(data);

      const charactersData = await Promise.all(
        data.characters.map((c) => {
          return fetch(c).then((res) => res.json());
        })
      );
      setEpisodeCharacters(charactersData);
    })();
  }, [episodeApi]);

  // console.log("first Episode fetch", episodeData);
  // console.log("second Episode fetch: ", episodeCharacters);

  // Locations Fetch
  const locationsApi = `https://rickandmortyapi.com/api/location/${locationId}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(locationsApi).then((res) => res.json());
      setLocationData(data);

      const residentsData = await Promise.all(
        data.residents.map((c) => {
          return fetch(c).then((res) => res.json());
        })
      );
      setResidents(residentsData);
      setLoading(false);
    })();
  }, [locationsApi]);

  // console.log("first fetch", data);
  // console.log("second fetch: ", residents);

  const clearSearch = () => {
    setSearchInput("");
    setPage(1);
    setStatus("");
    setSpecies("");
    setGender("");
  };

  const clearAll = () => {
    setSearchInput("");
    setStatus("");
    setSpecies("");
    setGender("");
    setPage(1);
    setEpisodeId(1);
    setLocationId(1);
  };

  return (
    <div className="App">
      
      <Router>
        <ThemeProvider theme={theme}>
          {/* <CssBaseline /> */}
          <Navigation clearAll={clearAll}/>

          <ToTopBtn />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  results={results ? results : "loading"}
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
                  info={info}
                />
              }
            />
            <Route
              path="/episode"
              element={
                <Episodes
                  results={results}
                  episodeData={episodeData}
                  episodeCharacters={episodeCharacters}
                  episodeId={episodeId}
                  setEpisodeId={setEpisodeId}
                />
              }
            />
            <Route
              path="/location"
              element={
                <Locations
                  LocationData={LocationData}
                  residents={residents}
                  locationId={locationId}
                  setLocationId={setLocationId}
                  loading={loading}
                />
              }
            />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
