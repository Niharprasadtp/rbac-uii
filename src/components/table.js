import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material';

function createData(name, role, department, status, lastLogin) {
  return { name, role, department, status, lastLogin };
}

const rows = [
  createData('John Doe', 'Admin', 'IT', 'Active', '2024-11-25 10:45'),
  createData('Jane Smith', 'Manager', 'Sales', 'Inactive', '2024-11-20 16:30'),
  createData('Sam Wilson', 'User', 'Marketing', 'Active', '2024-11-26 09:00'),
  createData('Chris Evans', 'Manager', 'Finance', 'Active', '2024-11-22 12:30'),
  createData('Natasha Romanoff', 'Admin', 'HR', 'Inactive', '2024-11-18 08:00'),
  createData('Sam Wilson', 'User', 'Marketing', 'Active', '2024-11-26 09:00'),
  createData('Chris Evans', 'Manager', 'Finance', 'Active', '2024-11-22 12:30'),
  createData('Natasha Romanoff', 'Admin', 'HR', 'Inactive', '2024-11-18 08:00'),
  createData('Jane Smith', 'Manager', 'Sales', 'Inactive', '2024-11-20 16:30'),

];

export default function ThemedTable() {
  const theme = useTheme();

  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: 2,
        backgroundColor: theme.palette.background.paper, // Table container background
        color: theme.palette.text.primary, // Text color
        boxShadow: theme.shadows[3], // Shadow based on theme
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="theme-styled table">
        {/* Table Header */}
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: theme.palette.background.default, // Header background color
            }}
          >
            <TableCell
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 'bold',
              }}
            >
              Name
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 'bold',
              }}
            >
              Role
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 'bold',
              }}
            >
              Department
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 'bold',
              }}
            >
              Status
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 'bold',
              }}
            >
              Last Login
            </TableCell>
          </TableRow>
        </TableHead>
        {/* Table Body */}
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={`${row.name}-${index}`} // Generate a unique key
              sx={{
                // Conditional styling based on theme mode
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? index % 2 === 0
                      ? theme.palette.action.hover
                      : theme.palette.background.default
                    : index % 2 === 0
                    ? theme.palette.action.hover
                    : theme.palette.background.paper,
                '&:hover': {
                  backgroundColor: theme.palette.action.selected,
                },
              }}
            >
              {/* Name Column */}
              <TableCell
                component="th"
                scope="row"
                sx={{
                  color: theme.palette.text.primary,
                }}
              >
                {row.name}
              </TableCell>
              {/* Role Column */}
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.text.primary,
                }}
              >
                {row.role}
              </TableCell>
              {/* Department Column */}
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.text.primary,
                }}
              >
                {row.department}
              </TableCell>
              {/* Status Column */}
              <TableCell
                align="right"
                sx={{
                  color:
                    row.status === 'Active'
                      ? theme.palette.success.main
                      : theme.palette.error.main,
                  fontWeight: 'bold',
                }}
              >
                {row.status}
              </TableCell>
              {/* Last Login Column */}
              <TableCell
                align="right"
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                {row.lastLogin}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
