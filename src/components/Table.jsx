import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const IpoTable = () => {
  const [ipoData, setIpoData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/ipoData.json")
      .then((response) => response.json())
      .then((data) => setIpoData(data))
      .catch((error) => console.error("Error fetching IPO data:", error));
  }, []);

  const handleRowClick = (ipo) => {
    navigate(`/ipo-details`, { state: { ipo } });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          width: "70%",
          border: "1px solid #ebeaee",
          borderRadius: "10px",
          boxShadow: "none",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#ebeaee" }}>
              <TableCell>
                <Typography sx={{ fontWeight: 400, color: "#656e78" }}>
                  Company / Issue date
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: 400, color: "#656e78" }}>
                  Issue size
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ fontWeight: 400, color: "#656e78" }}>
                  Price range
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ fontWeight: 400, color: "#656e78" }}>
                  Min invest / qty
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ipoData.map((ipo, index) => (
              <TableRow hover key={index}>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => handleRowClick(ipo)}
                  >
                    <img
                      src={ipo.logo}
                      alt={ipo.company}
                      style={{
                        width: "55px",
                        height: "55px",
                        marginRight: "10px",
                        borderRadius: "50%",
                        border: "1px solid lightgray",
                      }}
                    />
                    <div>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "15px",
                          color: "#1a1442",
                        }}
                      >
                        {ipo.company}
                      </Typography>
                      <Typography sx={{ color: "#656e78", fontSize: "15px" }}>
                        {ipo.date}
                      </Typography>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      color: "#16133c",
                    }}
                  >
                    {ipo.issueSize}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      color: "#16133c",
                    }}
                  >
                    {ipo.priceRange}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      color: "#16133c",
                      textAlign: "center",
                    }}
                  >
                    {ipo.minInvestment}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#656e78",
                      fontSize: "15px",
                      textAlign: "center",
                    }}
                  >
                    {ipo.minQuantity}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default IpoTable;
