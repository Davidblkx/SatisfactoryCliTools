import {
  Factory,
  FactoryComplex,
  machineMap,
  RecipeKey,
  recipesMap,
} from '../data/__.ts';

export function calcFactoryPower(factory: Factory): number {
  let power = 0;

  const recipeKeys = Object.keys(factory.map) as RecipeKey[];
  for (const key of recipeKeys) {
    const machineCount = factory.map[key] ?? 0;
    const machineId = recipesMap[key].machineId;
    power -= machineCount * machineMap[machineId].power;
  }

  return power;
}

export function calcFactoryComplexPower(complex: FactoryComplex): number {
  let power = 0;

  for (const f of complex.factories) {
    power += calcFactoryPower(f);
  }

  return power;
}
