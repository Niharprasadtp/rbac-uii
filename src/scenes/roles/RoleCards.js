import React, { Fragment, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Modal,
  Box,
  useTheme,
} from "@mui/material";
import Snackbar from '@mui/material/Snackbar';

import Alert from '@mui/material/Alert';
const data = [
  {
    totalUsers: 4,
    title: "Administrator",
  },
  {
    totalUsers: 7,
    title: "Manager",
  },
  {
    totalUsers: 5,
    title: "Users",
  },
  {
    totalUsers: 3,
    title: "Support",
  },
  {
    totalUsers: 2,
    title: "Restricted User",
  },
];

const rolesArr = [
  "User Management",
  "Content Management",
  "Disputes Management",
  "Database Management",
  "Financial Management",
  "Reporting",
  "API Control",
  "Repository Management",
  "Payroll",
];

const RoleCards = () => {
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState("Add New");
  const [roleName, setRoleName] = useState("");
  const [rolePermissions, setRolePermissions] = useState({});
  const theme = useTheme(); // Access the current theme
  const [showAlert, setShowAlert] = useState(false);
console.log(roleName,"asdjhavsjvh");

  const handleOpenModal = (type,title) => {
    console.log(title,"asdjasvjdvhv");
    setRoleName(title)
    setModalType(type);
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
    setRoleName("");
    setRolePermissions({});
  };

  const handleRolePermissionChange = (role, permission) => {
    setRolePermissions((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [permission]: !prev[role]?.[permission],
      },
    }));
  };

  const handleSubmit = () => {
    if (roleName.trim()) {
      // Handle role submission logic here
      setShowAlert(true);
      console.log("Role Submitted:", { roleName, rolePermissions });
      handleCloseModal(); // Ensure this closes the modal as intended
    }
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowAlert(false);
  };

  const cardStyle = {
    backgroundColor: theme.palette.background.default, 
    color: theme.palette.text.primary, 
  };

  return (
    <Fragment >
      <Grid container spacing={3} >
        {data.map((item, index) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={index}
            style={{ display: "flex" }}
          >
            <Card
              style={{
                ...cardStyle,
                display: "flex",
                flexDirection: "column",
                flexGrow: 1, // Ensures the cards grow equally
              }}
            >
              <CardContent style={{ flexGrow: 1 }}>
                <Typography variant="subtitle1">{`Total ${item.totalUsers} users`}</Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mt={2}
                >
                  <Typography
                    variant="h5"
                    style={{ fontWeight: "bold" }}
                  >{`${item.title} `}</Typography>{" "}
                  <Button
                    size="small"
                    onClick={() => handleOpenModal("Edit",item.title)}
                    sx={{
                      backgroundColor: "#5E58F6",
                      color: "#fff",
                      boxShadow: "0px 0px 8px 2px #5E58F6",
                      "&:hover": {
                        backgroundColor: "darkviolet",
                        boxShadow: "0px 0px 12px 4px #5E58F6",
                      },
                    }}
                  >
                    Edit Role
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} md={6} lg={4} style={{ display: "flex" }}>
          <Card
            style={{
              ...cardStyle,
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            <CardContent style={{ flexGrow: 1 }}>
              <Box textAlign="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleOpenModal("Add New")}
                >
                  Add New Role
                </Button>
                <Typography variant="body2" mt={1}>
                  Add a new role, if it does not exist
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Modal
        open={show}
        onClose={handleCloseModal}
        aria-labelledby="role-modal-title"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            width: "50%",
          }}
        >
          <Typography id="role-modal-title" variant="h6" component="h2" mb={2}>
            {modalType} Role
          </Typography>
          <TextField
            label="Role Name"
            fullWidth
            variant="outlined"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            margin="normal"
          />
          <Typography variant="subtitle1" mt={2}>
            Role Permissions
          </Typography>
          <Table>
            <TableBody>
              {rolesArr.map((role, index) => (
                <TableRow key={index}>
                  <TableCell>{role}</TableCell>
                  <TableCell>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={rolePermissions[role]?.read || false}
                          onChange={() =>
                            handleRolePermissionChange(role, "read")
                          }
                        />
                      }
                      label="Read"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={rolePermissions[role]?.write || false}
                          onChange={() =>
                            handleRolePermissionChange(role, "write")
                          }
                        />
                      }
                      label="Write"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={rolePermissions[role]?.create || false}
                          onChange={() =>
                            handleRolePermissionChange(role, "create")
                          }
                        />
                      }
                      label="Create"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box mt={3} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ mr: 2 }}
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCloseModal}
            >
              Discard
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* {showAlert && ( <Stack sx={{ width: '100%' }} spacing={2}> <Alert variant="filled" severity="success"> Role Submitted: {roleName} </Alert> </Stack> )} */}

      <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
           Role Submitted: {roleName} !
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default RoleCards;
