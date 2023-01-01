import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";

function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    threshold: 1300,
  });

  const handleClick = (event) => {
    const anchor = document.querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 10, left: 25 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <span id="back-to-top-anchor"></span>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon style={{ fontSize: "50px" }} />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
