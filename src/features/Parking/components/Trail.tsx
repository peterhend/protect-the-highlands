import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

interface TrailProps {
  size: number;
  bottom?: boolean;
}

export const Trail: FC<TrailProps> = ({ size, bottom }) => {
  return (
    <Grid item xs={size}>
      <Stack sx={{ height: 140, justifyContent: bottom ? "end" : "start" }}>
        <Box
          sx={{
            mx: -1,
            my: 1,
            borderTop: '1px dashed gray',
            borderBottom: '1px dashed gray',
            textAlign: "center",
            height: 24,
            bgcolor: 'white'
          }}
        >
          <Typography>Fjord Trail</Typography>
        </Box>
      </Stack>
    </Grid>
  );
};
