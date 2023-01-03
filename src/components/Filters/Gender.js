import React from "react";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import PropTypes from "prop-types";
import FormLabel from "@mui/material/FormLabel";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiTypography-root": {
    border: "1px solid #80ff00",
    fontSize: "1.2rem",
    padding: "3px 10px",
    borderRadius: "5px",
    "&:hover": {
      color: "white",
    },
  },
  ".MuiFormControlLabel-label": checked && {
    color: "white",
    backgroundColor: "#8fd7466e",
    fontSize: "1.2rem",
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

const Gender = ({ gen, setGender, setPage, page }) => {
  const gender = ["Male", "Female", "Genderless", "Unknown"];

  const handleSetGender = (event, value) => {
    setGender(event.target.defaultValue);
    setPage(1);
  };

  return (
    <div>
      <FormLabel style={{ display: "none" }}>Gender</FormLabel>{" "}
      <RadioGroup value={gen} onChange={handleSetGender}>
        <div className="filter-btns">
          {gender.map((item, index) => (
            <MyFormControlLabel
              key={index}
              value={item}
              control={<Radio />}
              label={item}
            />
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default Gender;
