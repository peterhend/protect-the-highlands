import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

interface TrailProps {
  size: number;
  bottom?: boolean;
  half?: boolean;
}

const styles = {
  full: {
    mx: -1,
    my: 1,
    borderTop: "1px solid lightgray",
    borderBottom: "1px solid lightgray",
    textAlign: "center",
    height: 24,
    bgcolor: "white",
  },
  half: {
    mr: 1,
    ml: 10,
    my: 0,
    borderTop: "1px solid lightgray",
    borderBottom: "1px solid lightgray",
    borderLeft: "1px solid lightgray",
    textAlign: "center",
    height: 32,
    bgcolor: "white",
  },
};

export const Trail: FC<TrailProps> = ({ size, bottom, half }) => {
  return (
    <Grid item xs={size}>
      <Stack sx={{ height: 140, justifyContent: bottom ? "end" : "start" }}>
        <Box sx={half ? styles.half : styles.full}>
          <Typography>{half ? "" : "Fjord Trail"}</Typography>
        </Box>
      </Stack>
    </Grid>
  );
};
