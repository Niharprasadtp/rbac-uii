// ** Third Party Components
import React from 'react';
import Chart from 'react-apexcharts';
import { Card, CardContent, CardHeader, Typography, useTheme } from '@mui/material';

// Chart colors
const areaColors = {
  series3: '#a4f8cd',
  series2: '#60f2ca',
  series1: '#2bdac7',
};

const ApexAreaCharts = ({ direction }) => {
  const theme = useTheme(); // Access the current theme

  // ** Chart Options
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      curve: 'straight',
    },
    legend: {
      position: 'top',
      horizontalAlign: 'start',
      labels: {
        colors: theme.palette.text.primary, // Use theme text color for legend
      },
    },
    grid: {
      borderColor: theme.palette.divider, // Use theme divider color for grid lines
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: [areaColors.series3, areaColors.series2, areaColors.series1],
    xaxis: {
      categories: [
        '7/12',
        '8/12',
        '9/12',
        '10/12',
        '11/12',
        '12/12',
        '13/12',
        '14/12',
        '15/12',
        '16/12',
        '17/12',
        '18/12',
        '19/12',
        '20/12',
      ],
      labels: {
        style: {
          colors: theme.palette.text.secondary, // Use theme secondary text color for x-axis labels
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.text.secondary, // Use theme secondary text color for y-axis labels
        },
      },
      opposite: direction === 'rtl',
    },
    fill: {
      opacity: 1,
      type: 'solid',
    },
    tooltip: {
      shared: false,
      theme: theme.palette.mode, // Automatically adapt to light or dark mode
    },
  };

  // ** Chart Series
  const series = [
    {
      name: 'Visits',
      data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
    },
    {
      name: 'Clicks',
      data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
    },
    {
      name: 'Sales',
      data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220],
    },
  ];

  return (
    <Card
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        marginTop: 20,
      }}
      elevation={3}
      sx={{ borderRadius: 2 }}
    >
      <CardHeader
        title={
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Analytics
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary">
            Commercial networks
          </Typography>
        }
        sx={{
          paddingBottom: 0,
        }}
      />
      <CardContent>
        <Chart options={options} series={series} type="area" height={400} />
      </CardContent>
    </Card>
  );
};

export default ApexAreaCharts;
