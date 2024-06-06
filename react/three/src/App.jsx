import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

// pages
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import PageNotFound from "./pages/PageNotFound";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Start from "./Start";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Start />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
