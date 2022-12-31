import React from "react";
import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Status from "./Filters/Status";
import Species from "./Filters/Species";
import Gender from "./Filters/Gender";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#EEE",
//     },
//     background: {
//       default: "#222222",
//     },
//     accent: {
//       main: "#8fd746",
//     },
//   },
//   typography: {
//     fontSize: 20,
//   },
// });

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  // "&:before": {
  //   display: "none",
  // },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette === "#ff0000",
  // : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0)",
}));

const Filter = ({
  results,
  stat,
  setStatus,
  setPage,
  page,
  setSpecies,
  setGender,
  clearFilters,
}) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="filter">
      {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      <div className="filter-header">
        <div>Filters</div>
        <Button href="#text-buttons" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          backgroundColor: "#16161675",
        }}
        style={{ color: "#8fd746" }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          sx={{
            backgroundColor: "#3e3e3ec2",
          }}
          style={{ color: "white" }}
        >
          <Typography>Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Status setStatus={setStatus} setPage={setPage} page={page} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          backgroundColor: "#16161675",
        }}
        style={{ color: "#8fd746" }}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          sx={{
            backgroundColor: "#3e3e3ec2",
          }}
          style={{ color: "white" }}
        >
          <Typography>Species</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Species setSpecies={setSpecies} setPage={setPage} page={page} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          backgroundColor: "#16161675",
        }}
        style={{ color: "#8fd746" }}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          sx={{
            backgroundColor: "#3e3e3ec2",
          }}
          style={{ color: "white" }}
        >
          <Typography>Gender</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Gender setGender={setGender} page={page} setPage={setPage} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default Filter;
