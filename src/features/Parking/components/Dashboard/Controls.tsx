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

export const Controls: FC = () => {
  const state = useSettingsState();
  const dispatch = useSettingsDispatch();

  const [settings, setSettings] = useState({
    totalVisitors: 500,
    percentByCar: 50,
    vehicleOccupancy: 2.5,
    turnoverRate: 1.5,
  });

  useEffect(() => {
    const spacesNeeded =
      (settings.totalVisitors * settings.percentByCar) /
      100 /
      settings.vehicleOccupancy /
      settings.turnoverRate;

    dispatch({
      type: SettingsActions.setSpacesNeeded,
      payload: Math.round(spacesNeeded),
    });
  }, [settings]);

  const handleTotalVisitorsChanged = (
    _event: Event,
    value: number | number[]
  ) => {
    setSettings({
      ...settings,
      totalVisitors: value as number,
    });
  };

  const handlePercentByCarChanged = (
    _event: Event,
    value: number | number[]
  ) => {
    setSettings({
      ...settings,
      percentByCar: value as number,
    });
  };

  const handleVehicleOccupancyChanged = (
    _event: Event,
    value: number | number[]
  ) => {
    setSettings({
      ...settings,
      vehicleOccupancy: value as number,
    });
  };

  const handleTurnoverRateChanged = (
    _event: Event,
    value: number | number[]
  ) => {
    setSettings({
      ...settings,
      turnoverRate: value as number,
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
          value={settings.totalVisitors}
          aria-label='Small'
          valueLabelDisplay='auto'
          onChange={handleTotalVisitorsChanged}
        />
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ ml: 1 }}>{settings.totalVisitors}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>% by car:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Slider
          size='small'
          min={0}
          max={100}
          defaultValue={50}
          aria-label='Small'
          valueLabelDisplay='auto'
          onChange={handlePercentByCarChanged}
        />
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ ml: 1 }}>{settings.percentByCar}%</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>Vehicle occupancy:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Slider
          size='small'
          min={1}
          max={4}
          defaultValue={2.5}
          step={0.1}
          aria-label='Small'
          valueLabelDisplay='auto'
          onChange={handleVehicleOccupancyChanged}
        />
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ ml: 1 }}>{settings.vehicleOccupancy}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>Turnover rate:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Slider
          size='small'
          min={1}
          max={2}
          defaultValue={1.5}
          step={0.1}
          aria-label='Small'
          valueLabelDisplay='auto'
          onChange={handleTurnoverRateChanged}
        />
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ ml: 1 }}>{settings.turnoverRate}</Typography>
      </Grid>
    </Grid>
  );
};
