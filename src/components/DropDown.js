import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";

const ITEM_HEIGHT = 62;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 6,
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
    },
  },
  typography: {
    fontSize: 16,
  },
});

export default function BasicSelect({
  number,
  name,
  id,
  setId,
  label
}) {
  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minWidth: 120 }}>
        <StyledFormControl fullWidth>
          <InputLabel
            style={{ color: "white", borderColor: "white" }}
          >
            {label}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={id}
            label={label}
            onChange={handleChange}
            MenuProps={MenuProps}
            style={{ color: "white" }}
          >
            {[...Array(number).keys()].map((n, index) => {
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
