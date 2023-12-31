import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import realme from "../images/realme.jpg";

const HomeComponent = ({
  showButton,
  setShowButton,
  count,
  setCount,
  handleDecrement,
}) => {
  return (
    <div>
      <Card>
        <CardMedia component="img" image={realme} alt="logo" />
      </Card>
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
