import { FactoryComplex } from '../data/__.ts';

export const desertCoalPower: FactoryComplex = {
  name: 'Desert Coal Power',
  factories: [
    {
      name: 'Coal ore',
      map: { coalPureMk2: 2, }
    },
    {
      name: 'Coal power plant',
      map: { coalPower: 24, }
    },
    {
      name: 'Water plant',
      map: { water: 10, }
    }
  ],
};
