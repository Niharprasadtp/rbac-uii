import React from 'react'

// ** MUI Imports
import { Card, CardHeader, CardContent, Typography, Grid, Box, Avatar,useTheme } from '@mui/material'
import { TrendingUp, Person, Inventory, AttachMoney } from '@mui/icons-material'

// ** Data for Stats
const data = [
  {
    title: '230k',
    subtitle: 'Sales',
    color: 'primary.light',
    icon: <TrendingUp fontSize="large" />
  },
  {
    title: '8.549k',
    subtitle: 'Customers',
    color: 'info.light',
    icon: <Person fontSize="large" />
  },
  {
    title: '1.423k',
    subtitle: 'Products',
    color: 'error.light',
    icon: <Inventory fontSize="large" />
  },
  {
    title: '$9745',
    subtitle: 'Revenue',
    color: 'success.light',
    icon: <AttachMoney fontSize="large" />
  }
]

const StatsCard = ({ cols = { xs: 12, sm: 6, md: 3 } }) => {
  const theme = useTheme(); // Access the current theme
  const cardStyle = {
    backgroundColor: theme.palette.background.default, 
    color: theme.palette.text.primary, 
  };
  const renderData = () =>
    data.map((item, index) => (
      <Grid item key={index} {...cols}>
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          sx={{
            textAlign: { xs: 'center', sm: 'left' },
            justifyContent: { xs: 'center', sm: 'flex-start' }
          }}
        >
          <Avatar
            sx={{
              bgcolor: item.color,
              color: 'white',
              marginRight: { xs: 0, sm: 2 },
              marginBottom: { xs: 1, sm: 0 },
              width: { xs: 40, sm: 56 },
              height: { xs: 40, sm: 56 }
            }}
          >
            {item.icon}
          </Avatar>
          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
            >
              {item.subtitle}
            </Typography>
          </Box>
        </Box>
      </Grid>
    ))

  return (
    <Card style={{
      ...cardStyle,
      display: "flex",
      flexDirection: "column",
      flexGrow: 1, // Ensures the cards grow equally
      
    }}>
      <CardHeader
        title={<Typography variant="h6">Statistics</Typography>}
        subheader={<Typography variant="body2">Updated 1 month ago</Typography>}
      />
      <CardContent>
        <Grid container spacing={4}>
          {renderData()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default StatsCard
