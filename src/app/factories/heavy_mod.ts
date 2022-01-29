import { FactoryComplex } from '../data/__.ts';

export const heavyMod: FactoryComplex = {
  name: 'Heavy Mod',
  factories: [
    {
      name: 'HeavyMods, Lda',
      map: { heavyModularFrame: 1 },
    },
    {
      name: 'Steelworks, Lda',
      map: {
        steelPipe: 3,
        steelBeam: 2,
        concrete: 4,
        encasedIndustrialPipe: 1,
        encasedIndustrialBeam: 1,
        steelIngot: 5,
      },
    },
    {
      name: 'Iron Bros',
      map: {
        modularFrame: 5,
        screws: 10,
        reinforcedPlate: 3,
        ironPlate: 5,
        ironRod: 11,
        ironIngot: 11,
      }
    }
  ]
};
