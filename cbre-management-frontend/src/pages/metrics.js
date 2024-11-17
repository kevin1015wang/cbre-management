import React from "react";
import { Chart } from "react-google-charts";
import { LightTheme, BaseProvider, styled } from "baseui";
import { Card } from "baseui/card";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import PieChartCard from "../components/pieChartCard";
import BarChartCard from "../components/barChartCard";
import WideBarChartCard from "../components/wideBarChartCard";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const Row = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  overflowY: "auto",
});

export default function MetricsPage() {
  return (
    <>
      <div>Metrics Page</div>
      <Row>
        {PieChartCard()}
        {PieChartCard()}
        {BarChartCard()}
      </Row>  
      <Row>
        {WideBarChartCard()}
        {WideBarChartCard()}
      </Row>    
    </>
  );
}