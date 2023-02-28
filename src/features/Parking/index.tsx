import React, { FC, useEffect } from "react";

import { ParkingGrid } from "./ParkingGrid";
import { Dashboard } from "./components/Dashboard";
import { SettingsProvider, useSettingsDispatch, SettingsActions } from "./providers/settings";

export const Parking: FC = () => {
  return (
    <SettingsProvider>
      <ParkingGridComponent />
    </SettingsProvider>
  );
};

const ParkingGridComponent: FC = () => {
  const dispatch = useSettingsDispatch()
  useEffect(() => {
    dispatch({type: SettingsActions.initialize, payload: {
      totalVisitors: 3100,
      percentByCar: 66,
      vehicleOccupancy: 2.5,
      turnoverRate: 2.1,
    }})
  }, [])

  return (
    <>
      <ParkingGrid />
      <Dashboard />
    </>
  );
};
