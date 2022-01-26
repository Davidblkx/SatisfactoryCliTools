import { FactoryComplex } from '../data/__.ts';

export const desertMountainCoal: FactoryComplex = {
  name: 'Desert Mountain Coal',
  factories: [
    {
      name: 'Coal ore',
      map: { coalNormalMk2: 3, }
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
