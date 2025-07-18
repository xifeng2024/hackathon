// src/config/eventTypes.ts
export const EVENT_TYPES = [
  'AI',
  'Big Data', 
  'Cloud',
  'Fintech',
  'Gaming',
  'IoT',
  'Web3.0'
] as const;

export const REGIONS = [
  'Americas',
  'Asia', 
  'Europe',
  'Other'
] as const;

export const EVENT_TYPE_DISPLAY_NAMES = {
  'ai': 'AI & Machine Learning',
  'big data': 'Big Data & Analytics',
  'cloud': 'Cloud Computing',
  'fintech': 'Fintech',
  'gaming': 'Gaming & VR',
  'iot': 'IoT & Hardware',
  'web3.0': 'Web3.0 & Blockchain'
} as const;

export type EventType = typeof EVENT_TYPES[number];
export type Region = typeof REGIONS[number];