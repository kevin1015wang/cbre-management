import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { LightTheme, BaseProvider, styled } from "baseui";
import { Card } from "baseui/card";
import { Bar } from 'react-chartjs-2';
import { Select, SIZE } from "baseui/select";
import { createClient } from '@supabase/supabase-js';
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

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);

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
  gap: "16px",
  padding: "16px",
});

const Row = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  overflowY: "auto",
});

export default function MetricsPage() {
  const [value, setValue] = React.useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data: locationsData, error: locationsError } = await supabase
        .from('Locations')
        .select('*');
      if (locationsError) {
        console.error('Error fetching locations:', locationsError);
      } else {
        setLocations(locationsData);
      }
    }
    fetchData();
  }, []);

  return (
    <ContentWrapper style={{ maxWidth: "1300px", margin: "0 auto" }}>
      <Row>
        <div style={{ width: "400px" }}>
          <Select
            options={
              locations.map(location => ({
                id: location.name,
                color: location.name
              }))
            }
            labelKey="id"
            size={SIZE.mini}
            valueKey="color"
            placeholder="Select property"
            onChange={({ value }) => setValue(value)}
            overrides={{
              ControlContainer: {
                style: () => ({
                  width: "400px",
                }),
              },
            }}
            value={value}
          />
        </div>
      </Row>
      <div style={{ height: "16px" }} />
      <Row>
        {PieChartCard()}
        {PieChartCard()}
        {BarChartCard()}
      </Row>
      <Row>
        {WideBarChartCard()}
        {WideBarChartCard()}
      </Row>
    </ContentWrapper>
  );
}