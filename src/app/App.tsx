import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { MainPage } from "pages/main";
import { LoginPage } from "pages/login";
import { RoterPath } from "shared/router/enums";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <Link to={RoterPath.MAIN}>Главная</Link>
        <Link to={RoterPath.LOGIN}>Войти</Link>
      </ul>
      <Routes>
        <Route path={RoterPath.MAIN} element={<MainPage />} />
        <Route path={RoterPath.LOGIN} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
