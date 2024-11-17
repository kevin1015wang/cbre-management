import React from "react";
import './App.css';
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import NavBar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import PropertiesOverview from "./pages/properties-overview";
import MetricsPage from "./pages/metrics";

const engine = new Styletron();

const ContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  padding: "16px",
  overflow: "hidden",
});

export default function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<PropertiesOverview />} />
            <Route path="/metrics" element={<MetricsPage />} />
          </Routes>
        </Router>
      </BaseProvider>
    </StyletronProvider>
  );
}
