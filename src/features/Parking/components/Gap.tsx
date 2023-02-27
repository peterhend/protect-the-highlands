import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

interface GapProps {
  text?: string;
}

export const Gap: FC<GapProps> = ({ text = "" }) => {
  return (
    <Grid item xs={1}>
      <Box
        sx={{
          bgcolor: "transparent",
          height: 140,
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
        }}
      ></Box>
    </Grid>
  );
};
