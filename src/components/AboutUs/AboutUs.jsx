import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUsers } from "../../action-creators/userAction";
import ScrollToTop from "../scrollToTop/scrollToTop";
import "./About.css";

const About = ({ props }) => {
  const { about } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log("userData", about);
  }, [about]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(getUsers());
  }, []);

  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{(about && about?.quote) || ""}</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt="Yash"
            className="aboutAvatar"
          />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {(about && about.name) || ""}
          </Typography>

          <Typography>{(about && about.subtitle) || ""}</Typography>

          {/* <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            {about.subtitle}
          </Typography> */}
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "1px",
              textAlign: "right",
            }}
          >
            {(about && about.description) || ""}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
