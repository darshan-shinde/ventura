import React from "react";
import Navbar from "./Navbar";
import IpoTable from "./Table";
import IpoDetailPage from "./IpoDetails";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: `'Sora', sans-serif`,
  },
});

export default function ContainerBox() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<IpoTable />} />
            <Route path="/ipo-details" element={<IpoDetailPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}
