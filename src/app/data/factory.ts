import { RecipeKey } from './recipes.ts';

export type PlantMap = { [key in RecipeKey]?: number };

export interface Factory {
  name: string;
  map: PlantMap;
}

export interface FactoryComplex {
  name: string;
  factories: Factory[];
}
