import React from "react";
import ProductsComponent from "./Products.component";
import { Box } from "@mui/material";
import Products from "./products";

const ProductsListsComponent = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      {Products.map((mobile) => (
        <ProductsComponent
          key={mobile.id}
          image={mobile.image}
          name={mobile.name}
          price={mobile.price}
        />
      ))}
    </Box>
  );
};

export default ProductsListsComponent;
