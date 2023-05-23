import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Box } from "@mui/material";
import { MainPage } from "pages/main";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ height: "100vh" }} className="App">
        <MainPage />
      </Box>
    </BrowserRouter>
  );
}

export default App;
