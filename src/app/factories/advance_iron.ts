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
      name: 'Screws 4 you',
      map: {
        ironRod: 4,
        screws: 5,
      },
    },
    {
      name: 'Rotor',
      map: {
        ironRod: 4,
        rotor: 2,
      },
    },
    {
      name: 'Strong Plates',
      map: {
        ironPlate: 3,
        ironRod: 2,
        screws: 3,
        reinforcedPlate: 2,
      }
    },
    {
      name: 'Frames Mods',
      map: { modularFrame: 2 }
    }
  ]
};
