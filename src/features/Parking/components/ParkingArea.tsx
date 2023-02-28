import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

import { useSettingsState } from "../providers/settings";

interface ParkingAreaProps {
  id: string;
  roadLeft?: boolean;
  roadRight?: boolean;
}

export const ParkingArea: FC<ParkingAreaProps> = ({
  id,
  roadLeft,
  roadRight,
}) => {
  const state = useSettingsState();
  const details = state.parkingAreas.find((area) => area.id === id);

  if (!details) {
    return (
      <Grid item xs={1}>
        <Box sx={{ height: 140 }}></Box>
      </Grid>
    );
  }

  const totalSpaces = details.spaces[state.options.timeframe];

  return (
    <Grid item xs={1}>
      <Box
        sx={{
          height: 140,
          ml: roadLeft ? 0 : 1,
          mr: roadRight ? 0 : 1,
          borderLeft: roadLeft ? "8px solid #333" : null,
          borderRight: roadRight ? "8px solid #333" : null,
        }}
      >
        <Card
          sx={{
            height: 140,
            bgcolor: totalSpaces > 0 ? "white" : "#ffe6e6",
          }}
        >
          <CardHeader
            title={<Typography sx={{textTransform: 'uppercase'}}>{details?.cost}</Typography>}
            subheader={
              <Typography sx={{ fontSize: 12 }}>{details?.name}</Typography>
            }
            action={
              <LocalParkingIcon
                sx={{
                  bgcolor: "blue",
                  color: "white",
                  borderRadius: 1,
                }}
              />
            }
            sx={{
              height: "50%",
              p: 0.5,
              alignItems: "start",
              "& .MuiCardHeader-action": { m: 0 },
            }}
          />
          <CardContent sx={{ p: "4px !important" }}>
            <Stack
              sx={{
                border: "1px solid blue",
                p: 0.5,
                borderRadius: 1,
              }}
            >
              <Typography sx={{ fontSize: 12 }}>
                Spaces: {details.spaces[state.options.timeframe]}
              </Typography>
              <Typography sx={{ fontSize: 12 }}>
                Available: {details.spaces.available}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};
