import React from "react";
import { PieChart } from "react-google-charts";


export default function MetricsPage() {
  return (
    <div>Metrics Page</div>
  );
}

<PieChart
  series={[
    {
      data: [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ],
    },
  ]}
  width={400}
  height={200}
/>