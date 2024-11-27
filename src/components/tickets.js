// ** React Imports
import { useState } from "react";

// ** Third Party Components
import Chart from "react-apexcharts";

// ** Reactstrap Imports
import { CardText } from "reactstrap";

// ** MUI Imports
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Menu,
  MenuItem,
  Button,
  useTheme,
} from "@mui/material";

const SupportTracker = (props) => {
  // ** State
  const [selectedRange, setSelectedRange] = useState("Last 7 days");
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const theme = useTheme(); // Access the current theme
  const cardStyle = {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  };

  // ** Dummy Data
  const data = {
    title: "Support Tracker",
    totalTicket: 345,
    newTicket: 45,
    openTicket: 23,
    responseTime: 2,
    last_days: ["Last 7 days", "Last 14 days", "Last 30 days"],
  };

  // Chart Options
  const options = {
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 20,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: "65%",
          },
          track: {
            background: "#fff",
            strokeWidth: "100%",
          },
          dataLabels: {
            name: {
              offsetY: -5,
              fontFamily: "Montserrat",
              fontSize: "1rem",
            },
            value: {
              offsetY: 15,
              fontFamily: "Montserrat",
              fontSize: "1.714rem",
            },
          },
        },
      },
      colors: ["#DC143C"],
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#1E90FF"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        dashArray: 8,
      },
      labels: ["Completed Tickets"],
    },
    series = [83];

  // Handle Dropdown
  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (range) => {
    setSelectedRange(range);
    setMenuAnchorEl(null);
  };

  return (
    <Card
      style={{
        ...cardStyle,
        display: "flex",
        flexDirection: "column",
        flexGrow: 1, // Ensures the cards grow equally
        marginTop: 20,
      }}
    >
      <CardHeader
        title={<Typography variant="h6">{data.title}</Typography>}
        action={
          <>
            <Button onClick={handleMenuOpen} size="small" variant="outlined">
              {selectedRange}
            </Button>
            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={() => setMenuAnchorEl(null)}
            >
              {data.last_days.map((item) => (
                <MenuItem key={item} onClick={() => handleMenuClose(item)}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </>
        }
      />
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {" "}
          <div sm="2" className="d-flex flex-column flex-wrap text-center">
            <Typography variant="h4" className="fw-bolder mt-2 mb-0">
              {data.totalTicket}
            </Typography>
            <CardText>Tickets</CardText>
          </div>
          <div
            sm="10"
            className="d-flex justify-content-center"
            style={{ marginTop: 0, paddingTop: 0 }}
          >
            <Chart
              options={options}
              series={series}
              type="radialBar"
              height={270}
              id="support-tracker-card"
            />
          </div>
        </div>
        {/* Ensure Horizontal Layout */}
        <div
          style={{
            display: "flex", // Use flexbox for horizontal alignment
            justifyContent: "space-between", // Space evenly between items
            marginTop: "1rem", // Add spacing from the chart above
          }}
        >
          <div
            style={{
              textAlign: "center", // Center text within each column
              flex: 1, // Make each column take equal space
            }}
          >
            <CardText className="mb-50">New Tickets</CardText>
            <Typography variant="h5">{data.newTicket}</Typography>
          </div>
          <div
            style={{
              textAlign: "center",
              flex: 1,
            }}
          >
            <CardText className="mb-50">Open Tickets</CardText>
            <Typography variant="h5">{data.openTicket}</Typography>
          </div>
          <div
            style={{
              textAlign: "center",
              flex: 1,
            }}
          >
            <CardText className="mb-50">Response Time</CardText>
            <Typography variant="h5">{data.responseTime}d</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupportTracker;
