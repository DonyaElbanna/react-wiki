import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 7.5 + ITEM_PADDING_TOP,
      //   width: 150,
    },
  },
};

const StyledFormControl = styled((props) => <FormControl {...props} />)(
  ({ theme, checked }) => ({
    ".MuiOutlinedInput": {
      border: "1px solid #fff",
      fontSize: 17,
      padding: "3px 10px",
      borderRadius: "5px",
      "&:hover": {
        borderColor: "white",
      },
    },
    ".MuiFormControl-root": checked && {
      color: "white",
      backgroundColor: "#8fd7466e",
      fontSize: 17,
      padding: "3px 10px",
      border: "1px solid #80ff00",
      borderRadius: "5px",
    },
  })
);

const theme = createTheme({
  palette: {
    primary: {
      main: "#8fd746",
      contrastText: "#ffffff",
    },
    background: {
      default: "#222222",
      // contrastText: "#EEE",
    },
  },
  typography: {
    fontSize: 16,
  },
});

export default function BasicSelect({
  episodesN,
  name,
  setEpisodeId,
  episodeId,
}) {
  const handleChange = (event) => {
    setEpisodeId(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minWidth: 120 }}>
        <StyledFormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            style={{ color: "white", borderColor: "white" }}
          >
            Pick an Episode
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={episodeId}
            label="Pick an Episode"
            onChange={handleChange}
            MenuProps={MenuProps}
            style={{ color: "white" }}
          >
            {[...Array(episodesN).keys()].map((n, index) => {
              return (
                <MenuItem value={n + 1} key={index}>
                  {name} - {n + 1}
                </MenuItem>
              );
            })}
          </Select>
        </StyledFormControl>
      </Box>
    </ThemeProvider>
  );
}
