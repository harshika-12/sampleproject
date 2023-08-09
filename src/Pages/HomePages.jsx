import { Card } from "@mui/material";
import React from "react";
import ProductsListsComponent from "../component/ProductsLists.component";

const HomePage = () => {
  return (
    <div>
      <Card
        sx={{
          height: "97vh",
          width: "210vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProductsListsComponent />
      </Card>
    </div>
  );
};

export default HomePage;
