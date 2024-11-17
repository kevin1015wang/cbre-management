import React from "react";
import { Chart } from "react-google-charts";
import { LightTheme, BaseProvider, styled } from "baseui";
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

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const ContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  padding: "16px",
  overflow: "hidden",
});

function pieChartCard() {
  return (
    <ContentWrapper style={{ maxWidth: "1300px", margin: "0 auto"}}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
      <div>Helpful Insights</div>
    </ContentWrapper>
  );
}

const BarChart = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        label: 'Data Series 1',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [12, 19, 3, 5, 2],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

function barChartCard() {
  return (
    <ContentWrapper style={{ maxWidth: "1300px", margin: "0 auto"}}>
      <BarChart/>
      <div>Helpful Insights</div>
    </ContentWrapper>
  );
}

const options = {
  title: "Building 1 Electricity Usage",
};

const data = [
  ["Source", "Cost"],
  ["Air conditioning", 9],
  ["Refrigeration", 2],
  ["Ventilation", 2],
  ["Computers", 2],
  ["Lights", 7],
];

export default function MetricsPage() {
  return (
    <>
      <div>Metrics Page</div>
      {pieChartCard()}
      {pieChartCard()}
      {barChartCard()}
    </>
  );
}