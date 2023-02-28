import React, { useEffect } from 'react';

import { SettingsProvider, useSettingsDispatch, SettingsActions } from './providers/settings';
import { Component } from './components/component';

export const Template = () => {
  return (
    <SettingsProvider>
      <TemplateComponent />
    </SettingsProvider>
  );
};

const TemplateComponent = () => {
  const settingsDispatch = useSettingsDispatch();

  useEffect(() => {
    settingsDispatch({ type: SettingsActions.initialize, payload: 1 });
  }, [settingsDispatch]);

  return <Component />;
};
