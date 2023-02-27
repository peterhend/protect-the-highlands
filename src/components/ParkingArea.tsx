import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

interface ParkingAreaProps {
  name: string;
  roadLeft?: boolean
  roadRight?: boolean
}

export const ParkingArea: FC<ParkingAreaProps> = ({ name, roadLeft, roadRight }) => {
  return (
    <Grid item xs={1}>
      <Box
        sx={{
          bgcolor: "white",
          height: 140,
          ml: roadLeft? 0 : 1,
          mr: roadRight? 0 : 1,
          borderLeft: roadLeft ? "8px solid #333" : null,
          borderRight: roadRight? "8px solid #333" : null,
        }}
      >
        <CardHeader title={name} />
        <CardContent>
          <Avatar sx={{ bgcolor: "black" }}>P</Avatar>
        </CardContent>
      </Box>
    </Grid>
  );
};
