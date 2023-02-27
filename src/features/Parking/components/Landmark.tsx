import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";

interface LandmarkProps {
  name: string;
  background?: string;
  roadLeft?: boolean
  roadRight?: boolean
}

export const Landmark: FC<LandmarkProps> = ({ name, background, roadLeft, roadRight }) => {
  return (
    <Grid item xs={1}>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          bgcolor: "transparent",
          height: 140,
          ml: roadLeft? 0 : 1,
          mr: roadRight? 0 : 1,
          borderLeft: roadLeft ? "8px solid #333" : null,
          borderRight: roadRight? "8px solid #333" : null,
        }}
      >
        <CardHeader
          title={
            <Typography sx={{ color: background ? "white" : null }}>
              {name}
            </Typography>
          }
          sx={{ mt: 2 }}
        />
      </Box>
    </Grid>
  );
};
