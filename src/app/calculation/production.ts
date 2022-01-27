import {
  Factory,
  FactoryComplex,
  machineMap,
  RecipeKey,
  recipesMap,
  ResourceAmount,
  ResourceKey,
} from '../data/__.ts';

export type FactoryProduction = Factory & { prod: ResourceAmount; power: number };
export interface FactoryComplexProduction {
  factories: FactoryProduction[];
  prod: ResourceAmount;
  power: number;
  name: string;
}

function addInput(map: ResourceAmount, key: ResourceKey, amount?: number) {
  map[key] = (map[key] ?? 0) - (amount ?? 0); // input is negative because it's a resource to be consumed
}

function addOutput(map: ResourceAmount, key: ResourceKey, amount?: number) {
  map[key] = (map[key] ?? 0) + (amount ?? 0); // output is positive because it's a resource to be produced
}

function mergeMaps(map1: ResourceAmount, map2: ResourceAmount): ResourceAmount {
  const objRes = { ...map1 };
  const keyList = Object.keys(map2) as ResourceKey[];
  for (const key of keyList) {
    objRes[key] = (objRes[key] ?? 0) + (map2[key] ?? 0);
  }
  return objRes;
}

export function calculateProduction(factory: Factory): FactoryProduction {
  const result: FactoryProduction = { ...factory, power: 0, prod: {} };

  const recipes = Object.keys(factory.map) as RecipeKey[];
  for (const key of recipes) {
    const amount = factory.map[key] ?? 0;
    const recipe = recipesMap[key];
    const machine = machineMap[recipe.machineId];
    result.power -= amount * machine.power;

    for (const [resKey, resAmount] of recipe.input)
      addInput(result.prod, resKey, resAmount * amount);

    for (const [resKey, resAmount] of recipe.output) {
      if (resKey === 'power')
        result.power += resAmount * amount;
      else
        addOutput(result.prod, resKey, resAmount * amount);
    }
  }

  return result;
}


export function calculateComplexProduction(factory: FactoryComplex): FactoryComplexProduction {
  const result: FactoryComplexProduction = {
    factories: [],
    prod: {},
    power: 0,
    name: factory.name,
  }

  const factories = factory.factories;
  for (const factory of factories) {
    const factoryRes = calculateProduction(factory);
    result.factories.push(factoryRes);
    result.prod = mergeMaps(result.prod, factoryRes.prod);
    result.power += factoryRes.power;
  }

  return result;
}
