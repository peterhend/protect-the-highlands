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

import { Controls } from "./Controls";

import {
  useSettingsState,
  useSettingsDispatch,
  SettingsActions,
} from "../../providers/settings";

export const Dashboard: FC = () => {
  const state = useSettingsState();
  const dispatch = useSettingsDispatch();

  const handleChange = (value: string) => {
    dispatch({
      type: SettingsActions.setTimeframe,
      payload: value as "current" | "planned",
    });
  };
  return (
    <Grid container>
      <Grid item xs={3}>
        <RadioGroup
          row
          value={state.timeframe}
          onChange={(e) => handleChange(e.currentTarget.value)}
        >
          <FormControlLabel
            value='current'
            control={<Radio />}
            label='Show current parking'
          />
          <FormControlLabel
            value='planned'
            control={<Radio />}
            label='Show planned parking'
          />
        </RadioGroup>
      </Grid>
      <Grid item xs={3}>
        <Controls />
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={3}>
        <Stack
          sx={{ border: "1px solid lightgray", p: 1, borderRadius: 1, mt: 1 }}
        >
          <Typography>Total spaces: {state.totalSpaces}</Typography>
          <Typography>Spaces available: {state.totalAvailable}</Typography>
          <Typography>Spaces needed: {state.spacesNeeded}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};
