import React from 'react';

import { Button } from '@mui/material';
import { Typography } from '@mui/material';

import { useSettingsState, useSettingsDispatch, SettingsActions } from '../providers/settings';

export const Component = () => {
  const settings = useSettingsState();
  const settingsDispatch = useSettingsDispatch();

  return (
    <>
      <Typography>{settings.counter}</Typography>
      <Button variant='outlined' onClick={() => settingsDispatch({ type: SettingsActions.increment })}>
        Add 1
      </Button>
    </>
  );
};
