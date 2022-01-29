import { ResourceState } from './resources.ts';

export interface Machine {
  name: string;
  power: number;
  input: ResourceState[];
  output: ResourceState[];
}

function newMach(name: string, power: number, input: ResourceState[], output: ResourceState[]): Machine {
  return { name, power, input, output };
}

export const machineMap = {
  water_extractor: newMach('Water Extractor', 20, [], ['liquid']),
  miner_mk2: newMach('Miner Mk2', 12, [], ['solid']),
  coal_generator: newMach('Coal Generator', 0, ['liquid', 'solid'], ['power']),
  smelter: newMach('Smelter', 4, ['solid'], ['solid']),
  constructor: newMach('Constructor', 4, ['solid'], ['solid']),
  assembler: newMach('Assembler', 15, ['solid', 'solid'], ['solid']),
  manufacterer: newMach('Manufacterer', 55, ['solid', 'solid', 'solid', 'solid'], ['solid']),
  foundry: newMach('Foundry', 16, ['solid', 'solid'], ['solid']),
}

export type MachineKey = keyof typeof machineMap;
