import React from "react";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ru from "date-fns/locale/ru";
import { Box } from "@mui/material";
import { MainPage } from "pages/main";
import "./App.css";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <BrowserRouter>
        <Box sx={{ height: "100vh" }} className="App">
          <MainPage />
        </Box>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
