import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./Home";
import Episodes from "./Episodes";
import Locations from "./Locations";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#80ff00",
    },
  },
});

const NavItem = styled(Tab)({
  color: "#fff",
  textTransform: "none",
  fontSize: 21,
  "&:hover": {
    color: "#80ff00",
  },
});

export default function NavLinks({
  results,
  page,
  setPage,
  stat,
  setStatus,
  spec,
  setSpecies,
  gen,
  setGender,
  clearSearch,
  searchInput,
  setSearchInput,
  info,
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ borderBottom: 3, borderColor: "divider" }}>
          <div className="nav-links">
            <div style={{ fontSize: "22px" }}>
              Rick & Morty <span style={{ color: "#80ff00" }}>Wiki</span>
            </div>
            <Tabs
              value={value}
              onChange={handleChange}
              // sx={{ display: { xs: "none", md: "block" } }}
            >
              <NavItem label="Characters" />
              <NavItem label="Episodes" />
              <NavItem label="Locations" />
            </Tabs>
          </div>
        </Box>
      </ThemeProvider>
      <TabPanel value={value} index={0}>
        <Home
          results={results}
          page={page}
          setPage={setPage}
          stat={stat}
          setStatus={setStatus}
          spec={spec}
          setSpecies={setSpecies}
          gen={gen}
          setGender={setGender}
          clearSearch={clearSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          info={info}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Episodes results={results}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Locations />
      </TabPanel>
    </div>
  );
}
