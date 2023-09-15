import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrolup = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  return (
    <div>
    <Grid container xs={12} md={6}>
      {backToTop && (
        <Button
          sx={{
            zIndex: 99,
            overflow:'hidden',
            position: "fixed",
            bottom: "50px",
            right: "0",
            height: "50px",
            width: "50px",
            borderRadius: "100%",
            fontSize: 20,
            fontWeight: "bold",
            bgcolor: "#abc502",
            opacity: 0.5,
            color: "#fff",
            ":hover": { bgcolor: "#abc502", opacity:1},
          }}
          onClick={scrolup}
        >
          <KeyboardDoubleArrowUp fontSize="large" />
        </Button>
      )}
    </Grid>
    </div>
  );
};

export default ScrollToTop;
