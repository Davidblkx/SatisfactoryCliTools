import { readKeypress } from 'keypress';

import { FactoryComplexProduction } from '../../app/calculation/__.ts';
import {
  ResourceKey,
  ResourceMap,
} from '../../app/data/__.ts';
import {
  back,
  color,
} from '../color.ts';
import { calculateWorld } from './calculate.ts';

function printComplex(factory: FactoryComplexProduction): void {
  const txtPower = factory.power >= 0 ? color('green', `+${factory.power}`) : color('red', factory.power.toString());
  console.log(back('magenta', ` ${factory.name} `) + color('cyan', ' [') + txtPower + color('cyan', ']'));
  for (const f of factory.factories) {
    console.log(color('cyan', `----${f.name} `));
    for (const [key, value] of Object.entries(f.prod)) {
      const txtValue = value >= 0 ? color('green', `+${value}`) : color('red', value.toString());
      const name = ResourceMap[key as ResourceKey].name;
      console.log(color('yellow', `  ${name}: `) + txtValue);
    }
  }
  console.log(color('blue', '----') + back('blue', ' Total '));
  for (const [key, value] of Object.entries(factory.prod)) {
    if (value === 0) continue;
    const txtValue = value >= 0 ? color('green', `+${value}`) : color('red', value.toString());
    const name = ResourceMap[key as ResourceKey].name;
    console.log(color('yellow', `  ${name}: `) + txtValue);
  }

  console.log('\n\r');
}

function printKeys(index: number, max: number): void {
  if (index > 0) {
    console.log('Press ' + color('yellow', 'j') + ' to go back');
  }

  if (index < max - 1) {
    console.log('Press ' + color('yellow', 'k') + ' to go forward');
  }
}

function findIndex(name: string, list: FactoryComplexProduction[]): number {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === name) {
      return i;
    }
  }
  return 0;
}

export async function printStatus(name?: string, itt?: boolean): Promise<number> {
  const res = calculateWorld();

  console.clear();
  let index = findIndex(name ?? '', res);
  printComplex(res[index]);

  if (!itt) { return 0 }

  printKeys(index, res.length);
  const keys = ['j', 'k'];

  for await (const keypress of readKeypress()) {
    if (keypress.ctrlKey && keypress.key === 'c') {
        Deno.exit(0);
    }

    if (keys.includes(keypress.key || '')) {

      switch (keypress.key) {
        case 'j':
          index--;
          break;
        case 'k':
          index++;
          break;
      }

      if (index < 0) index = 0;
      if (index > res.length - 1) index = res.length - 1;

      console.clear();
      printComplex(res[index]);
      printKeys(index, res.length);
    }
  }

  return 0;
}
