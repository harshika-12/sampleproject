import React, { useState } from "react";
import ProductsComponent from "./Products.component";
import {
  AppBar,
  Avatar,
  Box,
  Card,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Products from "./products";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";

const ProductsListsComponent = () => {
  return (
    <Box>
      <Box>
        <AppBar sx={{ position: "fixed" }}>
          <Toolbar>
            <img
              src="./image/shopping.jpg"
              alt="img"
              style={{ height: "30px" }}
            />
            <Typography variant="h6" sx={{ padding: "12px", flexGrow: 1 }}>
              shop easy
            </Typography>
            <Box sx={{ gap: "12px", display: "flex", flexDirection: "row" }}>
              <Avatar src="./image/image4.jpg" />
              <IconButton>
                <ShoppingCartCheckoutOutlined />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Card
        sx={{
          height: "97vh",
          width: "210vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          {Products.map((mobile, index) => (
            <ProductsComponent
              key={mobile.id}
              index={index}
              image={mobile.image}
              name={mobile.name}
              price={mobile.price}
            />
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default ProductsListsComponent;
