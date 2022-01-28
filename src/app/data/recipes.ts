import { MachineKey } from './machines.ts';
import { ResourceKey } from './resources.ts';

export type RecipeResource  = [ResourceKey, number];

export interface Recipe {
  name: string;
  input: RecipeResource[];
  output: RecipeResource[];
  machineId: MachineKey;
}

function newRecipe(name: string, machineId: MachineKey, input: RecipeResource[], output: RecipeResource[]): Recipe {
  return { name, input, output, machineId };
}

export const recipesMap = {
  coalNormalMk2: newRecipe('Coal Mk2', 'miner_mk2', [], [['coal', 120]]),
  coalPureMk2: newRecipe('Coal Pure Mk2', 'miner_mk2', [], [['coal', 240]]),
  water: newRecipe('Water', 'water_extractor', [], [['water', 120]]),
  coalPower: newRecipe('Coal', 'coal_generator', [['water', 45], ['coal', 15]], [['power', 75]]),
  ironOrePureMk2: newRecipe('Iron Ore Pure Mk2', 'miner_mk2', [], [['iron_ore', 240]]),
  ironIngot: newRecipe('Iron Ingot', 'smelter', [['iron_ore', 30]], [['iron_ingot', 30]]),
  ironRod: newRecipe('Iron Rod', 'constructor', [['iron_ingot', 15]], [['iron_rod', 15]]),
  screws: newRecipe('Screws', 'constructor', [['iron_rod', 10]], [['screws', 40]]),
  rotor: newRecipe('Rotor', 'assembler', [['iron_rod', 20], ['screws', 100]], [['rotor', 4]]),
  ironPlate: newRecipe('Iron Plate', 'constructor', [['iron_ingot', 30]], [['iron_plate', 20]]),
  reinforcedPlate: newRecipe('Reinforced Plate', 'assembler', [['iron_plate', 30], ['screws', 60]], [['reinforced_plate', 5]]),
  quartzNormalMk2: newRecipe('Quartz Mk2', 'miner_mk2', [], [['rawQuartz', 120]]),
  quartzCrystal: newRecipe('Quartz Crystal', 'constructor', [['rawQuartz', 37.5]], [['quartzCrystal', 22.5]]),
  silica: newRecipe('Silica', 'constructor', [['rawQuartz', 22.5]], [['silica', 37.5]]),
  modularFrame: newRecipe('Modular Frame', 'assembler', [['reinforced_plate', 3], ['iron_rod', 12]], [['modularFrame', 2]]),
}

export type RecipeKey = keyof typeof recipesMap;
