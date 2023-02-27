import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TrafficIcon from "@mui/icons-material/Traffic";

interface TransitProps {
  label: string;
  size: number;
  lights?: 'start' | 'end';
}

export const Transit: FC<TransitProps> = ({ label, size, lights }) => {
  return (
    <Grid
      item
      xs={size}
      sx={{
        textAlign: "center",
        bgcolor: label === "Metro North" ? "gray" : "#333",
      }}
    >
      <Stack direction='row' sx={{ alignItems: "center" }}>
      {lights === 'start' &&<TrafficIcon fontSize='small' sx={{ color: "white" }} />}
        <Typography sx={{ color: "white", flexGrow: 1, textAlign: "center" }}>
          {label}
        </Typography>
        {lights === 'end' &&<TrafficIcon fontSize='small' sx={{ color: "white" }} />}
      </Stack>
    </Grid>
  );
};
