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
import Checkbox from "@mui/material/Checkbox";

import {
  useSettingsState,
  useSettingsDispatch,
  SettingsActions,
} from "../../providers/settings";

export const Options: FC = () => {
  const state = useSettingsState();
  const dispatch = useSettingsDispatch();

  const handleTimeframeChanged = (value: string) => {
    dispatch({
      type: SettingsActions.setOptions,
      payload: {
        ...state.options,
        timeframe: value as "current" | "planned",
      },
    });
  };

  const handleBoscobelChanged = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newExclude = state.options.exclude.includes('BCBL') ? state.options.exclude.filter(id => id !== 'BCBL') : [...state.options.exclude, 'BCBL']
    dispatch({
      type: SettingsActions.setOptions,
      payload: {
        ...state.options,
        exclude: newExclude
      },
    });
  };

  const handleColdSpringMNRChanged = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newExclude = state.options.exclude.includes('CS-MNR') ? state.options.exclude.filter(id => id !== 'CS-MNR') : [...state.options.exclude, 'CS-MNR']
    dispatch({
      type: SettingsActions.setOptions,
      payload: {
        ...state.options,
        exclude: newExclude
      },
    });
  };

  return (
    <Stack
      sx={{
        border: "1px solid lightgray",
        p: 1,
        borderRadius: 1,
        mt: 1,
        "& .MuiCheckbox-root": { p: 0.5, ml: 0.5 },
      }}
    >
      <RadioGroup
        value={state.options.timeframe}
        onChange={(e) => handleTimeframeChanged(e.currentTarget.value)}
        sx={{ "& .MuiRadio-root": { padding: 1 } }}
      >
        <FormControlLabel
          value='current'
          control={<Radio size='small' />}
          label='Display current parking'
        />
        <FormControlLabel
          value='planned'
          control={<Radio size='small' />}
          label='Display planned parking'
        />
      </RadioGroup>
      <FormControlLabel
        control={
          <Checkbox
            size='small'
            checked={!state.options.exclude.includes('CS-MNR')}
            onChange={handleColdSpringMNRChanged}
          />
        }
        label='Include Cold Spring MNR'
      />
      <FormControlLabel
        control={
          <Checkbox
            size='small'
            disabled={state.options.timeframe === "current"}
            checked={!state.options.exclude.includes('BCBL')}
            onChange={handleBoscobelChanged}
          />
        }
        label='Include Boscobel'
      />
    </Stack>
  );
};
