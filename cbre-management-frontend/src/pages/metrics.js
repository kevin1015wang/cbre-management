import { Card } from "baseui/card";
import React from "react";
import { Chart } from "react-google-charts";

function pieChartCard() {
  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
}

export default function MetricsPage() {
  return (
    <>
      <div>Metrics Page</div>
      {pieChartCard()}
    </>
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

const config = {
  type: 'doughnut',
  data: data,
};