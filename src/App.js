import { Box, Card } from "@mui/material";
import React, { useState } from "react";
import HomeComponent from "./component/Home.component";
const App = () => {
  const [showButton, setShowButton] = useState(true);
  const [count, setCount] = useState(1);
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    if (count === 1) {
      setShowButton(true);
    }
  };
  return (
    <Card
      sx={{
        height: "90vh",
        width: "200vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HomeComponent
        showButton={showButton}
        setShowButton={setShowButton}
        count={count}
        setCount={setCount}
        handleDecrement={handleDecrement}
      />
    </Card>
  );
};

export default App;
