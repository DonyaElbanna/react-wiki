import * as React from "react";
// import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#80ff00",
    },
  },
});

const NavLink = styled(Tab)({
  color: "#fff",
  textTransform: "none",
  fontSize: 19,
  "&:hover": {
    color: "#80ff00",
  },
});

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ borderBottom: 3, borderColor: "divider" }}>
        <div className="nav-links">
          <div style={{ fontSize: "22px" }}>
            Rick & Morty <span style={{ color: "#80ff00" }}>Wiki</span>
          </div>
          <Tabs value={value} onChange={handleChange}>
            <NavLink label="Characters" {...a11yProps(0)} />
            <NavLink label="Episodes" {...a11yProps(1)} />
            <NavLink label="Locations" {...a11yProps(2)} />
          </Tabs>
        </div>
      </Box>
    </ThemeProvider>
  );
}
