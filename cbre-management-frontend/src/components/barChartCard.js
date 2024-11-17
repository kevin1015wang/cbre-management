import { Bar } from "react-chartjs-2";
import { Card } from "baseui/card";

const BarChart = () => {
    const data = {
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
      datasets: [
        {
          label: 'Data Series 1',
          backgroundColor: 'rgba(0, 63, 45, 0.6)',
          borderColor: 'rgba(0, 63, 45, 1)',
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
      <Card
        overrides={{ Root: { style: { width: "450px"}}}}
      >
        <BarChart/>
      </Card>
    );
  }

export default barChartCard;