import { FactoryComplex } from '../data/__.ts';
import { advanceIron } from './advance_iron.ts';
import { desertCoalPower } from './desert_coal_power.ts';
import { desertMountainCoal } from './desert_mountain_coal.ts';
import { desertQuartz } from './desert_quartz.ts';
import { electronicsBasic } from './eletronics_basic.ts';
import { heavyMod } from './heavy_mod.ts';

export const worldFactories: FactoryComplex[] = [
  advanceIron,
  desertMountainCoal,
  desertCoalPower,
  desertQuartz,
  electronicsBasic,
  heavyMod,
];
