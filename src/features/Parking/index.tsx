import React, { FC } from "react";
import Grid from "@mui/material/Grid";

import { ParkingArea } from "./components/ParkingArea";
import { Gap } from "./components/Gap";
import { Landmark } from "./components/Landmark";
import { Trail } from "./components/Trail";
import { Transit } from "./components/Transit";

import StonyPoint from "./images/stony-point.jpg";
import ColdSpring1 from "./images/cold-spring-1.jpg";
import ColdSpring2 from "./images/cold-spring-2.jpg";
import ColdSpring3 from "./images/cold-spring-3.jpg";
import ColdSpring4 from "./images/cold-spring-4.jpg";
import Breakneck1 from "./images/breakneck-1.jpg";
import Breakneck2 from "./images/breakneck-2.jpg";
import Breakneck3 from "./images/breakneck-3.jpg";
import Dockside from "./images/dockside.jpg";
import CornishEstate from "./images/cornish-estate.jpg";
import BullHill from "./images/bull-hill.jpg";
import Beacon1 from "./images/beacon-1.jpg";

export const Parking: FC = () => {
  return (
    <>
      <Grid container columnSpacing={0} sx={{ bgcolor: "#006600", py: 1 }}>
        <Landmark name='Downtown Beacon' background={Beacon1} roadLeft />
        <Gap />
        <ParkingArea name='New Lot?' />
        <Gap />
        <ParkingArea name='North of Tunnel' />
        <Landmark name='Breakneck Ridge' background={Breakneck3} />
        <Landmark name='Cornish Estate' background={CornishEstate} />
        <ParkingArea name='Washburn' />
        <Landmark name='Bull Hill' background={BullHill} />
        <Landmark name='Cold Spring' background={ColdSpring3} roadRight />
        <Landmark name='Cold Spring' background={ColdSpring4} roadLeft />
      </Grid>
      <Grid container>
        <Transit size={5} label='Route 9D' />
        <Transit size={1} label='tunnel' />
        <Transit size={4} label='Route 9D' lights='end' />
        <Transit size={2} label='Route 9D' lights='start' />
      </Grid>
      <Grid container columnSpacing={0} sx={{ bgcolor: "#ecf9f2", py: 1 }}>
        <ParkingArea name='Beacon MNR' roadLeft />
        <ParkingArea name='Notch' />
        <ParkingArea name='Dutchess Manor' />
        <Trail size={1} bottom={true} />
        <ParkingArea name='North of Tunnel' />
        <Landmark name='Breakneck Ridge' background={Breakneck2} />
        <ParkingArea name='South of Tunnel' />
        <Gap />
        <Gap />
        <Landmark
          name='Downtown Cold Spring'
          background={ColdSpring2}
          roadRight
        />
        <Landmark
          name='Downtown Cold Spring'
          background={ColdSpring1}
          roadLeft
        />
        <ParkingArea name='Boscobel' />
      </Grid>
      <Grid container>
        <Transit size={5} label='Metro North' />
        <Transit size={1} label='tunnel' />
        <Transit size={6} label='Metro North' />
      </Grid>

      <Grid container columnSpacing={0} sx={{ bgcolor: "#e6f2ff", py: 1 }}>
        <Gap />
        <Gap />
        <Gap />
        <Gap />
        <Gap />
        <Landmark name='Breakneck Ridge' background={Breakneck1} />
        <Trail size={1} />
        <Landmark name='Little Stony Point' background={StonyPoint} />
        <Trail size={1} />
        <Landmark name='Dockside' background={Dockside} roadRight />
        <ParkingArea name='Cold Spring MNR' roadLeft />
        <Gap />
      </Grid>
    </>
  );
};
