import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "styles/global";

import Movies from "../pages/Movies";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <main>
          <Routes>
            <Route exact path="/" element={<Movies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
