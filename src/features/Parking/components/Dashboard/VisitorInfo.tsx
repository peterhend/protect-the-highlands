import React, { FC, useEffect, useState } from "react";
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

import {
  useSettingsState,
  useSettingsDispatch,
  SettingsActions,
} from "../../providers/settings";

export const VisitorInfo: FC = () => {
  const state = useSettingsState();
  const dispatch = useSettingsDispatch();

  const handleTotalVisitorsChanged = (
    _event: Event,
    value: number | number[]
  ) => {
    dispatch({
      type: SettingsActions.setVisitorInfo,
      payload: { ...state.visitorInfo, totalVisitors: value as number },
    });
  };

  const handlePercentByCarChanged = (
    _event: Event,
    value: number | number[]
  ) => {
    dispatch({
      type: SettingsActions.setVisitorInfo,
      payload: { ...state.visitorInfo, percentByCar: value as number },
    });
  };

  const handleVehicleOccupancyChanged = (
    _event: Event,
    value: number | number[]
  ) => {
    dispatch({
      type: SettingsActions.setVisitorInfo,
      payload: { ...state.visitorInfo, vehicleOccupancy: value as number },
    });
  };

  const handleTurnoverRateChanged = (
    _event: Event,
    value: number | number[]
  ) => {
    dispatch({
      type: SettingsActions.setVisitorInfo,
      payload: { ...state.visitorInfo, turnoverRate: value as number },
    });
  };

  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        border: "1px solid lightgray",
        p: 1,
        mt: 1,
        borderRadius: 1,
      }}
    >
      <Grid item xs={4}>
        <Typography>Total visitors:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Slider
          size='small'
          min={0}
          max={10000}
          step={100}
          value={state.visitorInfo.totalVisitors}
          aria-label='Small'
          valueLabelDisplay='auto'
          onChange={handleTotalVisitorsChanged}
        />
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ ml: 1 }}>{state.visitorInfo.totalVisitors}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>% by car:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Slider
          size='small'
          min={0}
          max={100}
          value={state.visitorInfo.percentByCar}
          aria-label='Small'
          valueLabelDisplay='auto'
          onChange={handlePercentByCarChanged}
        />
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ ml: 1 }}>{state.visitorInfo.percentByCar}%</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>Vehicle occupancy:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Slider
          size='small'
          min={1}
          max={4}
          value={state.visitorInfo.vehicleOccupancy}
          step={0.1}
          aria-label='Small'
          valueLabelDisplay='auto'
          onChange={handleVehicleOccupancyChanged}
        />
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ ml: 1 }}>{state.visitorInfo.vehicleOccupancy}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>Turnover rate:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Slider
          size='small'
          min={1}
          max={2.1}
          value={state.visitorInfo.turnoverRate}
          step={0.1}
          aria-label='Small'
          valueLabelDisplay='auto'
          onChange={handleTurnoverRateChanged}
        />
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ ml: 1 }}>{state.visitorInfo.turnoverRate}</Typography>
      </Grid>
    </Grid>
  );
};
