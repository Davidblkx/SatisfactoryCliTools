import {
  calculateComplexProduction,
  FactoryComplexProduction,
} from '../../app/calculation/__.ts';
import { worldFactories } from '../../app/factories/__.ts';
import { color } from '../color.ts';

export function calculateWorld(): FactoryComplexProduction[] {
  const res: FactoryComplexProduction[] = [];

  for (const factory of worldFactories) {
    console.clear();
    console.log(color('cyan', 'Loading factory: ') + color('yellow', factory.name));
    res.push(calculateComplexProduction(factory));
  }

  return res;
}
