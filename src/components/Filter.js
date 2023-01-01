import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Status from "./Filters/Status";
import Species from "./Filters/Species";
import Gender from "./Filters/Gender";
import { useState } from "react";

const FilterButton = styled(Button)({
  color: "#80ff00",
  textTransform: "none",
  fontSize: 17,
  padding: "3px 10px",
  backgroundColor: "transparent",
  marginTop: "5px",
  "&:hover": {
    backgroundColor: "#16161675",
    color: "white",
  },
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
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
  spec,
  setSpecies,
  gen,
  setGender,
  clearSearch,
}) => {
  const [expanded, setExpanded] = useState("status");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const clearFilters = () => {
    setPage(1);
    setStatus("");
    setSpecies("");
    setGender("");
    setExpanded("status");
  };

  return (
    <div className="filter">
      <div className="filter-header">
        <FilterButton variant="text" onClick={clearSearch}>
          Clear Search
        </FilterButton>
        <FilterButton variant="text" onClick={clearFilters}>
          Clear Filters
        </FilterButton>
      </div>
      <Accordion
        defaultExpanded={true}
        expanded={expanded === "status"}
        onChange={handleChange("status")}
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
            <Status
              stat={stat}
              setStatus={setStatus}
              setPage={setPage}
              page={page}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "species"}
        onChange={handleChange("species")}
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
            <Species
              spec={spec}
              setSpecies={setSpecies}
              setPage={setPage}
              page={page}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "gender"}
        onChange={handleChange("gender")}
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
            <Gender
              gen={gen}
              setGender={setGender}
              page={page}
              setPage={setPage}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Filter;
