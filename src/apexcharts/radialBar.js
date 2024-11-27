import React, { useEffect, useState } from 'react'

// ** MUI Imports
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  MenuItem,
  Select,
  Box,
  Avatar,
  useTheme
} from '@mui/material'
import { Circle } from '@mui/icons-material'
import Chart from 'react-apexcharts'

// ** Mock Data Import
import { mockDataTeam } from '../data/mockData'

const RadialBar = () => {

  const theme = useTheme(); // Access the current theme
  const cardStyle = {
    backgroundColor: theme.palette.background.default, 
    color: theme.palette.text.primary, 
  };
  // ** State
  const [chartData, setChartData] = useState({
    admin: 0,
    manager: 0,
    user: 0,
  })
  const [timeRange, setTimeRange] = useState('Last 7 days')

  useEffect(() => {
    // Count roles from the mockDataTeam dataset
    const roleCounts = mockDataTeam.reduce(
      (acc, curr) => {
        acc[curr.access] += 1
        return acc
      },
      { admin: 0, manager: 0, user: 0 }
    )
    setChartData(roleCounts)
  }, [])

  // Chart Options and Series
  const options = {
    labels: ['Admin', 'Manager', 'User'],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '30%',
        },
        track: {
          margin: 10,
        },
        dataLabels: {
          name: {
            fontSize: '16px',
          },
          value: {
            fontSize: '14px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: () =>
              chartData.admin + chartData.manager + chartData.user,
          },
        },
      },
    },
    colors: ['#4CAF50', '#FFC107', '#F44336'], // Admin, Manager, User colors
  }
  const series = [chartData.admin, chartData.manager, chartData.user]

  return (
    <Card style={{
      ...cardStyle,
      display: "flex",
      flexDirection: "column",
      flexGrow: 1, // Ensures the cards grow equally
    }}>
      <CardHeader
        title={<Typography variant="h6">Team Roles Distribution</Typography>}
        action={
          <Select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            variant="outlined"
            size="small"
          >
            <MenuItem value="Last 7 days">Last 7 days</MenuItem>
            <MenuItem value="Last 30 days">Last 30 days</MenuItem>
            <MenuItem value="Last Year">Last Year</MenuItem>
          </Select>
        }
      />
      <CardContent>
        <Chart options={options} series={series} type="radialBar" height={390} />
        <Box mt={3}>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Box display="flex" alignItems="center">
              <Avatar sx={{ bgcolor: '#4CAF50', width: 24, height: 24, mr: 1 }}>
                <Circle fontSize="small" />
              </Avatar>
              <Typography variant="body1">Admin</Typography>
            </Box>
            <Typography variant="body1">{chartData.admin}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Box display="flex" alignItems="center">
              <Avatar sx={{ bgcolor: '#FFC107', width: 24, height: 24, mr: 1 }}>
                <Circle fontSize="small" />
              </Avatar>
              <Typography variant="body1">Manager</Typography>
            </Box>
            <Typography variant="body1">{chartData.manager}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Avatar sx={{ bgcolor: '#F44336', width: 24, height: 24, mr: 1 }}>
                <Circle fontSize="small" />
              </Avatar>
              <Typography variant="body1">User</Typography>
            </Box>
            <Typography variant="body1">{chartData.user}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default RadialBar
