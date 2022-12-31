import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const MyButton = styled(Button)({
  color: "#80ff00",
  textTransform: "none",
  fontSize: 17,
  padding: "3px 10px",
  border: "1px solid",
  backgroundColor: "transparent",
  borderColor: "#80ff00",
  "&:hover": {
    backgroundColor: "transparent",
    borderColor: "#4f9508",
    color: "#65b911",
  },
  "&:active": {
    color: "white",
    backgroundColor: "#8fd7466e",
    borderColor: "#8fd746",
  },
  "&:focus": {
    color: "white",
    backgroundColor: "#8fd7466e",
    borderColor: "#8fd746",
  },
});

const Status = ({ setStatus, setPage, page }) => {
  const status = ["Alive", "Dead", "Unknown"];

  const handleSetStatus = (e) => {
    setStatus(e.target.innerText);
    setPage(1);
  };

  return (
    <div class="filter-btns">
      {status.map((item, index) => (
        <MyButton key={index} onClick={handleSetStatus}>
          {item}
        </MyButton>
      ))}
    </div>
  );
};

export default Status;
