import React from "react";
import { Typography } from "@material-ui/core";

const PfAlgorithms = (props) => {
  const PlaygroundUrl = process.env.PLAYGROUND_URL;
  console.log(process.env.PLAYGROUND_URL);
  return (
    <>
      <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
        Pathfinding Algorithms
      </Typography>
      <iframe
        title="3dPlayground"
        src="http://localhost:3001/"
        width="100%"
        height="100%"
      />
    </>
  );
};

export default PfAlgorithms;
