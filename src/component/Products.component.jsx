import { Box, Button, Card, Typography } from "@mui/material";
import React, { useState } from "react";

const ProductsComponent = ({ key, name, image, price }) => {
  const [count, setCount] = useState(1);
  const [showButtons, setShowButtons] = useState(true);
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    if (count === 1) {
      setShowButtons(true);
    }
  };
  return (
    <Card>
      <Box>
        <img src={image} alt="img" />
        <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>{name}</Typography>
            <Typography>{price}</Typography>
          </Box>
          {showButtons ? (
            <Button
              onClick={() => {
                setShowButtons(false);
              }}
            >
              Add to cart
            </Button>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Button onClick={handleDecrement}>-</Button>
              <Typography sx={{ marginTop: "10px" }}>{count}</Typography>
              <Button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default ProductsComponent;
