import { Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./style.css";
import underContructionImg from "../../Images/under-construction1.jpg";

const UnderConstructionPage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div className="">
      <Grid container className="underConstrucyionSection" spacing={2}>
        <div className="leftSideBox">
          <img
            src={underContructionImg}
            style={{ width: "700px", height: "400px" }}
            alt="not found"
          />
        </div>

        <div className="rightSideBox">
          <h1>Page Under Construction </h1>
          <h2>Please Visit Again &nbsp;:)</h2>
        </div>
      </Grid>
    </div>
  );
};

export default UnderConstructionPage;
