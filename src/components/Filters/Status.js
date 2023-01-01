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
    "&:hover": {
      color: "white",
    },
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

const Status = ({ stat, setStatus, setPage, page }) => {
  const status = ["Alive", "Dead", "Unknown"];

  const handleSetStatus = (event, value) => {
    setStatus(event.target.defaultValue);
    setPage(1);
  };

  return (
    <RadioGroup value={stat} onChange={handleSetStatus}>
      <div class="filter-btns">
        {status.map((item, index) => (
          // <Button onClick={handleSetStatus}>
          <MyFormControlLabel
            key={index}
            value={item}
            control={<Radio />}
            // onChange={handleChange}
            label={item}
          />
          // {item}
          // </Button>
        ))}
      </div>
    </RadioGroup>
  );
};

export default Status;
