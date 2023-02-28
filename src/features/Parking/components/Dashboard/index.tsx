import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { VisitorInfo } from "./VisitorInfo";
import { Options } from "./Options";

import { useSettingsState } from "../../providers/settings";

export const Dashboard: FC = () => {
  const state = useSettingsState();

  const { totalSpaces, spacesNeeded } = state;

  return (
    <Grid container spacing={1} sx={{ mt: 1 }}>
      <Grid item xs={3}>
        <Options />
      </Grid>
      <Grid item xs={3}>
        <VisitorInfo />
      </Grid>
      <Grid item xs={3}>
        <Stack
          sx={{ border: "1px solid lightgray", p: 1, borderRadius: 1, mt: 1 }}
        >
          <Typography>Total spaces: {totalSpaces}</Typography>
          <Typography>Spaces needed: {spacesNeeded}</Typography>
          <Typography>
            Spaces open: {totalSpaces - spacesNeeded}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack
          sx={{ border: "1px solid lightgray", p: 1, borderRadius: 1, mt: 1 }}
        >
          <Typography sx={{fontWeight: 600}}>Reference data (HHFT numbers)</Typography>
          <Typography>Peak daily visitors: 3,099</Typography>
          <Typography>Percentage by car: 66%</Typography>
          <Typography>Vehicle occupancy: 2.5</Typography>
          <Typography>
            Space turnover per day: 2.1 (doubtful)
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};
