import {
  Factory,
  FactoryComplex,
  RecipeKey,
  recipesMap,
  ResourceAmount,
  ResourceKey,
} from '../data/__.ts';

function addInput(map: ResourceAmount, key: ResourceKey, amount?: number) {
  map[key] = (map[key] ?? 0) - (amount ?? 0); // input is negative because it's a resource to be consumed
}

function addOutput(map: ResourceAmount, key: ResourceKey, amount?: number) {
  map[key] = (map[key] ?? 0) + (amount ?? 0); // output is positive because it's a resource to be produced
}

export function calcFactoryProduction(factory: Factory): ResourceAmount {
  const res: ResourceAmount = {};

  const recipes = Object.keys(factory.map) as RecipeKey[];
  for (const key of recipes) {
    const amount = factory.map[key] ?? 0;
    const recipe = recipesMap[key];

    for (const [resKey, resAmount] of recipe.input)
      addInput(res, resKey, resAmount * amount);

    for (const [resKey, resAmount] of recipe.output)
      addOutput(res, resKey, resAmount * amount);
  }

  return res;
}

export function calcFactoryComplexProduction(factory: FactoryComplex): ResourceAmount {
  const res: ResourceAmount = {};

  const factories = factory.factories;
  for (const factory of factories) {
    const factoryRes = calcFactoryProduction(factory);
    const resources = Object.keys(factoryRes) as ResourceKey[];
    for (const key of resources)
      addOutput(res, key, factoryRes[key]);
  }

  return res;
}
