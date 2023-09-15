import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Paper,
  Typography,
  TextField,
  FormLabel,
  TextareaAutosize,
  Button,
  Link,
} from "@mui/material";
import {
  Call,
  CallOutlined,
  DraftsOutlined,
  LocationOnOutlined,
  TravelExploreOutlined,
} from "@mui/icons-material";
import "./contact.css";
import axios from "axios";

const Contact = () => {
  const [message, setMessage] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    message: "",
  });

  const reset = () => {
    setMessage(message);
  };

  const [contact, setContact] = useState("");

  const handleEmail = async () => {
    axios
      .post("http://localhost:4000/api/sendmail/mail", message.email)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = async () => {
    axios
      .post("http://localhost:4000/api/contacts/", message)
      .then((res) => {
        console.log(res.data);
        setMessage(res.data);
        handleEmail()
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Container>
        <Grid container xs={12} mt={5}>
          <Grid container xs={12} md={4}>
            <Grid item direction="column">
              <Grid item mt={4}>
                <Paper
                  sx={{
                    bgcolor: "#f1f1f1",
                    height: 130,
                    width: 350,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  elevation={0}
                >
                  <Grid container direction="row" gap={5} margin={3}>
                    <Grid item>
                      <Box
                        className="icon"
                        height={75}
                        width={75}
                        borderRadius="50%"
                        sx={{ bgcolor: "#abc502", color: "#fff" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <CallOutlined sx={{ fontSize: "45px" }} />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      direction="column"
                      display="flex"
                      alignItem="center"
                      justifyContent="center"
                      gap={2}
                    >
                      <Typography variant="body2" fontWeight="bold">
                        Phone
                      </Typography>
                      <Typography variant="body2">+123.456.7890</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item mt={4}>
                <Paper
                  sx={{
                    bgcolor: "#f1f1f1",
                    height: 130,
                    width: 350,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  elevation={0}
                >
                  <Grid container direction="row" gap={5} margin={3}>
                    <Grid item>
                      <Box
                        className="icon"
                        height={75}
                        width={75}
                        borderRadius="50%"
                        sx={{ bgcolor: "#abc502", color: "#fff" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <DraftsOutlined sx={{ fontSize: "45px" }} />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      direction="column"
                      display="flex"
                      alignItem="center"
                      justifyContent="center"
                      gap={2}
                    >
                      <Typography variant="body2" fontWeight="bold">
                        Email
                      </Typography>
                      <Typography variant="body2">
                        <Link sx={{ textDecoration: "none", color: "#000" }}>
                          ceo@jkindustrys.net
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item mt={4}>
                <Paper
                  sx={{
                    bgcolor: "#f1f1f1",
                    height: 130,
                    width: 350,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  elevation={0}
                >
                  <Grid container direction="row" gap={5} margin={3}>
                    <Grid item>
                      <Box
                        className="icon"
                        height={75}
                        width={75}
                        borderRadius="50%"
                        sx={{ bgcolor: "#abc502", color: "#fff" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <TravelExploreOutlined sx={{ fontSize: "45px" }} />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      direction="column"
                      display="flex"
                      alignItem="center"
                      justifyContent="center"
                      gap={2}
                    >
                      <Typography variant="body2" fontWeight="bold">
                        Address
                      </Typography>
                      <Typography variant="body2">
                        66 Kottai Street INDIA
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item mt={4}>
                <Paper
                  sx={{
                    bgcolor: "#f1f1f1",
                    height: 130,
                    width: 350,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  elevation={0}
                >
                  <Grid container direction="row" gap={5} margin={3}>
                    <Grid item>
                      <Box
                        className="icon"
                        height={75}
                        width={75}
                        borderRadius="50%"
                        sx={{ bgcolor: "#abc502", color: "#fff" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <LocationOnOutlined sx={{ fontSize: "45px" }} />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      direction="column"
                      display="flex"
                      alignItem="center"
                      justifyContent="center"
                      gap={2}
                    >
                      <Typography variant="body2" fontWeight="bold">
                        Madurai
                      </Typography>
                      <Typography variant="body2">
                        11-n Kottai Street,TPK
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={12} md={8}>
            <Grid container xs={12}>
              <Grid container xs={12} direction="column">
                <Typography variant="h4" fontWeight="bold">
                  Interested in discussing?
                </Typography>
                <Typography variant="h6">
                  Active & Ready to use Contact Form!
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                spacing={{ xs: 2, md: 6 }}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="medium"
                    fullWidth
                    placeholder="Enter Name"
                    autoComplete="off"
                    margin="normal"
                    required
                    onChange={(e) =>
                      setMessage({ ...message, firstname: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="medium"
                    fullWidth
                    placeholder="Enter Lastname"
                    autoComplete="off"
                    margin="normal"
                    required
                    onChange={(e) =>
                      setMessage({ ...message, lastname: e.target.value })
                    }
                  />
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                spacing={{ xs: 2, md: 6 }}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="medium"
                    fullWidth
                    placeholder="Enter Email"
                    autoComplete="off"
                    margin="normal"
                    required
                    onChange={(e) =>
                      setMessage({ ...message, email: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="medium"
                    fullWidth
                    placeholder="Enter Phone"
                    autoComplete="off"
                    margin="normal"
                    required
                    type="text"
                    onChange={(e) =>
                      setMessage({ ...message, mobile: e.target.value })
                    }
                  />
                </Grid>
              </Grid>
              <Grid container xs={12} mt={3}>
                <TextareaAutosize
                  style={{ width: 760, height: 300 }}
                  placeholder="Enter Message"
                  padding={10}
                  type="text"
                  onChange={(e) =>
                    setMessage({ ...message, message: e.target.value })
                  }
                />
                ;
              </Grid>
              <Grid container direction="row" mt={2} gap={1}>
                <Button
                  size="large"
                  sx={{
                    bgcolor: "#abc502",
                    color: "#fff",
                    ":hover": { bgcolor: "#502413" },
                  }}
                  variant="contained"
                  onClick={handleSubmit}
                >
                  SEND YOUR MESSAGE
                </Button>
                <Button
                  size="large"
                  sx={{
                    bgcolor: "#b3ff66",
                    color: "#000",
                    ":hover": { bgcolor: "#502413", color: "#fff" },
                  }}
                  variant="contained"
                  onClick={reset}
                >
                  RESET
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
