import React from "react";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import PropTypes from "prop-types";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiTypography-root": {
    border: "1px solid #80ff00",
    fontSize: 17,
    padding: "3px 10px",
    borderRadius: "5px",
  },
  ".MuiFormControlLabel-label": checked && {
    color: "white",
    backgroundColor: "#8fd7466e",
    fontSize: 17,
    padding: "3px 10px",
    border: "1px solid #80ff00",
    borderRadius: "5px",
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();
  let checked = false;
  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }
  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  value: PropTypes.any,
};

const Species = ({ spec, setSpecies, setPage, page }) => {
  const species = [
    "Human",
    "Alien",
    "Robot",
    "Humanoid",
    "Mythological",
    "Poopybutthole",
    "Animal",
    "Disease",
    "Cronenberg",
    "Unknown",
  ];

  const handleSetSpecies = (event, value) => {
    setSpecies(event.target.defaultValue);
    setPage(1);
  };

  return (
    <RadioGroup
      value={spec}
      onChange={handleSetSpecies}
    >
      <div class="filter-btns">
        {species.map((item, index) => (
          <MyFormControlLabel
            key={index}
            value={item}
            control={<Radio />}
            label={item}
          />
        ))}
      </div>
    </RadioGroup>
  );
};

export default Species;
