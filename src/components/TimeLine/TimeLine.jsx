import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineDot,
  TimelineSeparator,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
// import {Event} from "@m"
import { Typography } from "@mui/material";

const TimeLine = ({ timelines = [] }) => {
  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item, i) => (
          <TimelineItem key={i}>
            <TimelineOppositeContent
              align="right"
              variant="body2"
              sx={{ m: "auto 0" }}
              color="text.secondary"
            >
              2/22/2232
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>{/* <Event /> */}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">Title</Typography>
              <Typography>Description</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
