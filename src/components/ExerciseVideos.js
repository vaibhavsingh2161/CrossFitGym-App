import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos?.length) return <Loader />; // Safety check for null or undefined

  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "20px" } }} // Adjusted gap for xs
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 3)?.map((item) => (
          <a
            key={item?.video?.videoId} // Use unique videoId as key
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item?.video?.thumbnails?.[0]?.url || "default-thumbnail.jpg"} // Fallback thumbnail
              alt={item?.video?.title || "Exercise video"} // Fallback alt text
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                fontWeight={600}
                color="#000"
              >
                {item?.video?.title || "Untitled Video"} 
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item?.video?.channelName || "Unknown Channel"} 
                channel name
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
