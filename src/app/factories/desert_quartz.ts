import { FactoryComplex } from '../data/__.ts';

export const desertQuartz: FactoryComplex = {
  name: 'Desert Quartz',
  factories: [
    {
      name: 'Raw Quartz',
      map: { quartzNormalMk2: 2, }
    },
    {
      name: 'Crystal, Lda',
      map: { quartzCrystal: 4, }
    },
    {
      name: 'Sniff Silica',
      map: { silica: 6, }
    }
  ]
};
