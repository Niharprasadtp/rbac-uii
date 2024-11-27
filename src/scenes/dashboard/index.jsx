// ** React Imports
import React from "react";
import { Box } from "@mui/material";

// ** Material-UI Imports
import Grid from "@mui/material/Grid";
import { useTheme, styled } from "@mui/material/styles";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
// ** Custom Components
import CardEmployeesTasks from "../../components/CardEmployeesTask";
import StatsCard from "../../components/Timeline";
import RadialBar from "../../apexcharts/radialBar";
import SupportTracker from "../../components/tickets";
import StatsVertical from "../../components/StatsVertical";
import ApexAreaCharts from "../../apexcharts/areaChart";
// ** Tokens (Theme)
import { tokens } from "../../theme";
import BasicTable from "../../components/table";

// Styled Grid Item for consistent height
const GridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%", 
}));

const Dashboard = () => {
  // ** Theme Context
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // ** Vars
  const trackBgColor = "#e9ecef";

  return (
    <Box m="40px 20px 20px 20px">
      <Grid container spacing={3}>
        <GridItem item xs={12} lg={8}>
          <StatsCard />

          <GridItem item xs={12} lg={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <CardEmployeesTasks
                  colors={colors}
                  trackBgColor={trackBgColor}
                />
                <Grid item xs={12} md={12}>
                <Grid item xs={12} md={12}>
                <StatsVertical
                    icon={<AdminPanelSettingsIcon size={21} />}
                    color="#00BFFF"
                    stats="97.8k"
                    statTitle="Orders"
                  />
                  </Grid>
                  
                  {/* <Grid item xs={12} md={6}>
                <StatsVertical
                    icon={<AdminPanelSettingsIcon size={21} />}
                    color="#00BFFF"
                    stats="97.8k"
                    statTitle="Orders"
                  />
                  </Grid> */}
                </Grid>
                
              </Grid>

              <Grid item xs={12} md={6}>
                <SupportTracker />
              </Grid>
            </Grid>
          </GridItem>
        </GridItem>

        {/* Third Row: SupportTracker in remaining 4-column space */}
        <GridItem item xs={12} lg={4}>
          <RadialBar />
        </GridItem>
        <GridItem item xs={12} lg={6}>
          <ApexAreaCharts />
        </GridItem>
        <GridItem item xs={12} lg={6}>
          <BasicTable />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
