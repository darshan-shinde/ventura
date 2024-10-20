import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  IconButton,
  Container,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const IpoDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ipo } = location.state;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "40px",
        width: "90%",
      }}
    >
      <Paper
        style={{
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "none",
          padding: "10px",
        }}
      >
        <Box
          style={{
            border: "1px solid #ebeaee",
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            justifyContent: "center",
            marginRight: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={handleBackClick}
            style={{ color: "#656e78", paddingLeft: "17px" }}
          >
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
        </Box>

        <img
          src={ipo.logo}
          alt={ipo.company}
          style={{
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            marginRight: "10px",
            border: "1px solid lightgray",
          }}
        />
        <div>
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", color: "#16133c" }}
            align="start"
          >
            {ipo.tickerName}
          </Typography>
          <Typography variant="body2" style={{ color: "#666" }} align="start">
            {ipo.company}
          </Typography>
        </div>

        <IconButton
          onClick={() => console.log("Download clicked")}
          style={{ marginLeft: "auto", color: "#656e78" }}
        >
          <img
            src={
              "	https://d10b7kv2y188ox.cloudfront.net/react/document-download.svg"
            }
            alt={"download button"}
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </IconButton>
      </Paper>
      <Box
        style={{
          padding: "20px",
          marginBottom: "20px",
          border: "1px solid #ebeaee",
          borderRadius: "15px",
        }}
      >
        <Typography
          variant="h6"
          align="start"
          style={{
            color: "#16133c",
          }}
        >
          IPO details
        </Typography>
        <Grid
          container
          style={{ padding: "10px" }}
          border={"1px solid #ebeaee"}
          borderRadius={"15px"}
          marginTop={2}
        >
          {[
            { label: "Issue size", value: ipo.issueSize },
            { label: "Price range", value: ipo.priceRange },
            { label: "Minimum amount", value: ipo.minInvestment },
            { label: "Lot size", value: ipo.lotSize },
            { label: "Issue dates", value: ipo.issueDates },
            { label: "Listed on", value: ipo.listedOn },
            { label: "Listed Price", value: "-" },
            { label: "Listing gains", value: "-" },
          ].map((item, index) => (
            <Grid item xs={6} sm={3} marginTop={2} key={index}>
              <Typography
                align="start"
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#656e78",
                }}
              >
                {item.label}
              </Typography>
              <Typography
                align="start"
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#16133c",
                  marginTop: "5px",
                }}
              >
                {item.value}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        style={{
          padding: "20px",
          marginBottom: "20px",
          border: "1px solid #ebeaee",
          borderRadius: "15px",
        }}
      >
        <Typography
          variant="h6"
          align="start"
          marginBottom={"15px"}
          style={{
            color: "#16133c",
          }}
        >
          IPO timeline
        </Typography>

        <Stepper
          activeStep={ipo.activeStep}
          alternativeLabel={!isMobile}
          orientation={isMobile ? "vertical" : "horizontal"}
          sx={{
            "& .MuiStepIcon-root.Mui-completed": {
              color: "green",
            },
            "& .MuiStepIcon-root.Mui-active": {
              color: "green",
            },
            "& .MuiStepIcon-root": {
              color: "grey",
            },
            "& .MuiStepConnector-line": {
              borderWidth: "2px",
            },
          }}
        >
          {ipo.timeline.map((event, index) => (
            <Step
              key={index}
              StepIconComponent={(props) =>
                props.completed ? <CheckCircleIcon /> : props.icon
              }
            >
              <StepLabel>
                <div style={{ textAlign: "center" }}>
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#16133c",
                      textWrap: "wrap",
                    }}
                  >
                    {!isMobile
                      ? event.label.split(" ").map((word, idx) => (
                          <span key={idx}>
                            {idx === 1 ? <br /> : null} {word}{" "}
                          </span>
                        ))
                      : event.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#656e78",
                    }}
                  >
                    {event.date}
                  </Typography>
                </div>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box
        style={{
          padding: "20px",
          border: "1px solid #ebeaee",
          borderRadius: "15px",
        }}
      >
        <Typography
          variant="h6"
          align="start"
          style={{
            color: "#16133c",
          }}
        >
          About the company
        </Typography>
        <Typography
          variant="body1"
          style={{
            marginTop: "10px",
            fontSize: "13px",
            fontWeight: 400,
            color: "#656e78",
          }}
          align="start"
        >
          {ipo.companyAbout}
        </Typography>
      </Box>
    </Container>
  );
};

export default IpoDetailPage;
