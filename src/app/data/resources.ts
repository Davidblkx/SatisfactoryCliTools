export type ResourceState = 'solid' | 'gas' | 'liquid' | 'power';

export interface Resource {
  name: string;
  state: ResourceState;
}

function newRes(name: string, state: ResourceState): Resource {
  return { name, state };
}

export const ResourceMap = {
  power: newRes('Power', 'power'),
  water: newRes('Water', 'liquid'),
  coal: newRes('Coal', 'solid'),
  iron_ore: newRes('Iron Ore', 'solid'),
  iron_ingot: newRes('Iron Ingot', 'solid'),
  iron_rod: newRes('Iron Rod', 'solid'),
  screws: newRes('Screws', 'solid'),
  rotor: newRes('Rotor', 'solid'),
  iron_plate: newRes('Iron Plate', 'solid'),
  reinforced_plate: newRes('Reinforced Plate', 'solid'),
  rawQuartz: newRes('Raw Quartz', 'solid'),
  quartzCrystal: newRes('Quartz Crystal', 'solid'),
  silica: newRes('Silica', 'solid'),
  modularFrame: newRes('Modular Frame', 'solid'),
}

export type ResourceKey = keyof typeof ResourceMap;

export type ResourceAmount = { [key in ResourceKey]?: number };
