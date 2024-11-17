import { Card } from "baseui/card";
import { Chart } from "react-google-charts";

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

export default function pieChartCard() {
    return (
        <Card
         overrides={{ Root: { style: { width: "450px"} } }}
        >      
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
      </Card>
    );
  }