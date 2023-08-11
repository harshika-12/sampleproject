import { Box, Button, Typography } from "@mui/material";
import React from "react";

const HomeComponent = ({
  showButton,
  setShowButton,
  count,
  setCount,
  handleDecrement,
}) => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            marginTop: "16px",
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>Realme</Typography>
            <Typography>15000rs</Typography>
          </Box>
          {showButton ? (
            <Button onClick={() => setShowButton(false)}>Add to cart</Button>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </Button>{" "}
              <Typography sx={{ marginTop: "12px" }}>{count}</Typography>
              <Button onClick={handleDecrement}>-</Button>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default HomeComponent;
