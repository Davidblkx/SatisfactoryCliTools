import { FactoryComplex } from '../data/__.ts';

export const advanceIron: FactoryComplex = {
  name: 'Advance Iron',
  factories: [
    {
      name: 'Ore',
      map: { ironOrePureMk2: 1 },
    },
    {
      name: 'Iron Ingot 1',
      map: { ironIngot: 4 },
    },
    {
      name: 'Iron Ingot 2',
      map: { ironIngot: 4 },
    },
    {
      name: 'Screws 1',
      map: {
        ironRod: 4,
        screws: 6,
      },
    },
    {
      name: 'Rotor',
      map: {
        ironRod: 4,
        rotor: 2,
      },
    }
  ]
};
