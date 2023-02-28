import React, { FC } from "react";

import { ParkingGrid } from "./ParkingGrid";
import { Dashboard } from "./components/Dashboard";
import { SettingsProvider } from "./providers/settings";

export const Parking: FC = () => {
  return (
    <SettingsProvider>
      <ParkingGrid />
      <Dashboard />
    </SettingsProvider>
  );
};
