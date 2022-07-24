import { Typography } from "@mui/material";
import React from "react";
import "./YoutubeCard.css";

const YoutubeCard = ({
  url = "https://www.youtube.com/watch?v=So9Yetia5Z0&list=RD-e8XcVyuwks&index=2",
  title = "Title Here",
  image,
  position,
}) => {
  return (
    <div>
      <div className="youtubeCard">
        <a href={url} target="blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h5">{position}</Typography>
        </a>
      </div>
    </div>
  );
};

export default YoutubeCard;
