import {
  calcFactoryComplexPower,
  calcFactoryComplexProduction,
} from '../../app/calculation/__.ts';
import {
  FactoryComplex,
  ResourceAmount,
  ResourceKey,
  ResourceMap,
} from '../../app/data/__.ts';
import { worldFactories } from '../../app/factories/__.ts';
import { color } from '../color.ts';

export interface CalculationResult {
  resources: ResourceAmount;
  power: number;
}

function calculateComplexStatus(): CalculationResult {
  const complexList: FactoryComplex[] = worldFactories;
  const res: CalculationResult = {
    resources: {},
    power: 0,
  };

  for (const complex of complexList) {
    const complexRes = calcFactoryComplexProduction(complex);
    const resources = Object.keys(complexRes) as ResourceKey[];
    for (const key of resources)
      res.resources[key] = (res.resources[key] ?? 0) + (complexRes[key] ?? 0);

    res.power += calcFactoryComplexPower(complex);
  }

  res.power += res.resources.power ?? 0;
  delete res.resources.power;

  return res;
}

export function printStatus(): number {
  console.clear();
  const res = calculateComplexStatus();
  const resourcesKeys = Object.keys(res.resources) as ResourceKey[];

  console.log(color('blue', 'Resources:'));
  for (const key of resourcesKeys) {
    const amount = res.resources[key] ?? 0;
    const txtAmount = amount >= 0 ? color('green', `${amount}`) : color('red', `${amount}`);

    const name = ResourceMap[key].name;
    console.log(`  ${color('yellow', name)}: ${txtAmount}`);
  }

  const txtPower = res.power >= 0 ? color('green', `${res.power}`) : color('red', `${res.power}`);
  console.log(color('blue', 'Power: ') + txtPower);

  return 0;
}
