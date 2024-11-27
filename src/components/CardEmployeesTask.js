import React from 'react';
import Chart from 'react-apexcharts';
import { Card, CardHeader, CardContent, Box, Typography, IconButton, Stack,useTheme } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CardEmployeesTasks = ({ colors, trackBgColor }) => {
  const theme = useTheme(); // Access the current theme
  const cardStyle = {
    backgroundColor: theme.palette.background.default, 
    color: theme.palette.text.primary, 
  };

  const employeesTasks = [
    {
      title: 'Ryan Harrington',
      subtitle: 'Admin',
      time: '9hr 20m',
      chart: {
        type: 'radialBar',
        series: [45],
        options: {
          grid: { show: false, padding: { left: -15, right: -15, top: -12, bottom: -15 } },
          colors: [colors.blueAccent[100]],
          plotOptions: {
            radialBar: {
              hollow: { size: '22%' },
              track: { background: trackBgColor },
              dataLabels: {
                showOn: 'always',
                name: { show: false },
                value: { show: false },
              },
            },
          },
          stroke: { lineCap: 'round' },
        },
      },
    },
    {
      title: 'Louisa Norton',
      subtitle: 'User',
      time: '4hr 17m',
      chart: {
        type: 'radialBar',
        series: [65],
        options: {
          grid: { show: false, padding: { left: -15, right: -15, top: -12, bottom: -15 } },
          colors: [colors.blueAccent[100]],
          plotOptions: {
            radialBar: {
              hollow: { size: '22%' },
              track: { background: trackBgColor },
              dataLabels: {
                showOn: 'always',
                name: { show: false },
                value: { show: false },
              },
            },
          },
          stroke: { lineCap: 'round' },
        },
      },
    },
    {
      title: 'Jayden Duncan',
      subtitle: 'Manager',
      time: '12hr 8m',
      chart: {
        type: 'radialBar',
        series: [60],
        options: {
          grid: { show: false, padding: { left: -15, right: -15, top: -12, bottom: -15 } },
          colors: [colors.blueAccent[100]],
          plotOptions: {
            radialBar: {
              hollow: { size: '22%' },
              track: { background: trackBgColor },
              dataLabels: {
                showOn: 'always',
                name: { show: false },
                value: { show: false },
              },
            },
          },
          stroke: { lineCap: 'round' },
        },
      },
    },
  ];

  const renderTasks = () => {
    return employeesTasks.map((task) => (
      <Stack
        key={task.title}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ py: 1, px: 2 }}
      >
        <Box>
          <Typography variant="body1" fontWeight={500}>
            {task.title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {task.subtitle}
          </Typography>
        </Box>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="body2" color="text.primary">
            {task.time}
          </Typography>
          <Chart
            options={task.chart.options}
            series={task.chart.series}
            type={task.chart.type}
            height={30}
            width={30}
          />
        </Stack>
      </Stack>
    ));
  };

  return (
    <Card style={{
      ...cardStyle,
      display: "flex",
      flexDirection: "column",
      flexGrow: 1, // Ensures the cards grow equally
      marginTop:20
    }} elevation={3} sx={{ borderRadius: 2 }}>
      <CardHeader
        title="Employee Task"
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>{renderTasks()}</CardContent>
    </Card>
  );
};

export default CardEmployeesTasks;
