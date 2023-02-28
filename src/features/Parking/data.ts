import { ParkingArea } from "./providers/settings"

export const parkingData: ParkingArea[] = [
  {
    id: 'NEW',
    name: 'New Lot',
    cost: '$10-20',
    spaces: {
      current: 0,
      planned: 100,
    }
  },
  {
    id: 'BNR-NB',
    name: 'Breakneck Northbound',
    cost: '$10-20',
    spaces: {
      current: 100,
      planned: 77,
    }
  },
  {
    id: 'WBN',
    name: 'Washburn',
    cost: '$10-20',
    spaces: {
      current: 48,
      planned: 48,
    }
  },
  {
    id: 'BCN-MNR',
    name: 'Beacon MNR',
    cost: 'Free',
    spaces: {
      current: 0,
      planned: 0,
    }
  },
  {
    id: 'NCH',
    name: 'Notch',
    cost: '$10-20',
    spaces: {
      current: 0,
      planned: 80,
    }
  },
  {
    id: 'DMN',
    name: 'Dutchess Manor',
    cost: '$10-20',
    spaces: {
      current: 0,
      planned: 180,
    }
  },
  {
    id: 'BNR-SB',
    name: 'Breakneck Southbound',
    cost: '$10-20',
    spaces: {
      current: 58,
      planned: 35,
    }
  },
  {
    id: '9D-SB',
    name: '9D Southbound',
    cost: '$10-20',
    spaces: {
      current: 27,
      planned: 0,
    }
  },
  {
    id: 'CS-MNR',
    name: 'Cold Spring MNR',
    cost: 'Free',
    spaces: {
      current: 233,
      planned: 233,
    }
  },
  {
    id: 'BCBL',
    name: 'Boscobel',
    cost: '$10-20',
    spaces: {
      current: 0,
      planned: 100,
    }
  }
]