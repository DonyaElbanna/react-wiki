import * as React from "react";
// import PropTypes from 'prop-types';
import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import Slide from "@mui/material/Slide";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
// import Link from "@mui/material/Link";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";

function HideOnScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    // target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e2e2e",
      contrastText: "#EEE",
    },
    secondary: {
      main: "#EEE",
    },
    // background: {
    //   default: "#222222",
    //   contrastText: "#EEE",
    // },
    // accent: {
    //   main: "#8fd746",
    // },
  },
  typography: {
    //   fontFamily: ["Poppins"],
    fontSize: 18,
  },
});

const NavLink = styled(Tab)({
  color: "#80ff00",
  textTransform: "none",
  fontSize: 20,
  //   backgroundColor: "transparent",
  margin: "0 10px",
  "&:hover": {
    color: "white",
  },
  "&:focus": {
    color: "white",
  },
  "&:active": {
    color: "white",
  },
  "&:visited": {
    color: "white",
  },
});

export default function HideAppBar(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <HideOnScroll {...props}>
        <AppBar>
          {/* <Toolbar class="nav-links"> */}
          {/* <NavLink href="#">Characters</NavLink>
            <NavLink href="#">Episodes</NavLink>
            <NavLink href="#">Locations</NavLink> */}
          {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
          <div class="nav-links">
            <Tab label="logo"/>
            <Tabs
              value={value}
              onChange={handleChange}
            >
              <NavLink
                // color="secondary.main"
                label="Characters"
                {...a11yProps(0)}
              />
              <NavLink
                // color="secondary.main"
                label="Episodes"
                {...a11yProps(1)}
              />
              <NavLink
                // color="secondary.main"
                label="Locations"
                {...a11yProps(2)}
              />
            </Tabs>
          </div>
          {/* </Box> */}
          {/* <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel> */}
          {/* </Toolbar> */}
        </AppBar>
      </HideOnScroll>
    </ThemeProvider>
  );
}
