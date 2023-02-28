import { ParkingArea } from "./providers/settings"

export const parkingData: ParkingArea[] = [
  {
    id: 'NEW',
    name: 'New Lot',
    spaces: {
      current: 0,
      planned: 100,
    }
  },
  {
    id: 'BNR-NB',
    name: 'Breakneck Northbound',
    spaces: {
      current: 100,
      planned: 77,
    }
  },
  {
    id: 'WBN',
    name: 'Washburn',
    spaces: {
      current: 48,
      planned: 48,
    }
  },
  {
    id: 'BCN-MN',
    name: 'Beacon MNR',
    spaces: {
      current: 0,
      planned: 0,
    }
  },
  {
    id: 'NCH',
    name: 'Notch',
    spaces: {
      current: 0,
      planned: 80,
    }
  },
  {
    id: 'DMN',
    name: 'Dutchess Manor',
    spaces: {
      current: 0,
      planned: 180,
    }
  },
  {
    id: 'BNR-SB',
    name: 'Breakneck Southbound',
    spaces: {
      current: 58,
      planned: 35,
    }
  },
  {
    id: '9D-SB',
    name: '9D Southbound',
    spaces: {
      current: 27,
      planned: 0,
    }
  },
  {
    id: 'CS-MN',
    name: 'Cold Spring MNR',
    spaces: {
      current: 0,
      planned: 0,
    }
  },
  {
    id: 'BCBL',
    name: 'Boscobel',
    spaces: {
      current: 0,
      planned: 100,
    }
  }
]