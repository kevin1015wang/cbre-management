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

const LeftColumn = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  overflowY: "auto",
});

const RightColumn = styled("div", {
  flex: 1,
  backgroundColor: "#f0f0f0",
  borderRadius: "8px",
  padding: "16px",
  height: "500px",
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
