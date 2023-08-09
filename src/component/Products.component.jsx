import { Box, Card, Typography } from "@mui/material";
import React from "react";

const ProductsComponent = ({ key, name, image, price }) => {
  return (
    <Card>
      <Box>
        <img src={image} alt="img" />
        <Typography>{name}</Typography>
        <Typography>{price}</Typography>
      </Box>
    </Card>
  );
};

export default ProductsComponent;
