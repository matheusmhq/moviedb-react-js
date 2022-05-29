import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "styles/global";

import Navbar from "components/Navbar";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <main>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
