import {
  reverseObjectMapping,
  reverseModifierScancodeMapping,
  generateRegionMap,
} from '../utils';
import mockRegion1 from './__mocks__/mockRegion1.json';

describe('utils', () => {
  describe('reverseObjectMapping', () => {
    test('should reverse key/value entries in object', () => {
      const obj = {
        1: 'a',
        2: 'b',
        3: 'c',
      };

      const expected = {
        a: '1',
        b: '2',
        c: '3',
      };
      expect(reverseObjectMapping(obj)).toEqual(expected);
    });
  });

  describe('reverseModifierScancodeMapping', () => {
    test('should reverse key/value entries in object, splitting them by their modifier', () => {
      const MODIFIER = '02';

      const obj = {
        '04': ['a', 'A'],
        '05': ['b', 'B'],
        '06': ['c', 'C'],
      };

      const expected = {
        a: '00,04',
        A: '02,04',
        b: '00,05',
        B: '02,05',
        c: '00,06',
        C: '02,06',
      };
      expect(reverseModifierScancodeMapping(obj, MODIFIER)).toEqual(
        expected,
      );
    });
  });

  describe('generateRegionMap', () => {
    test('should generate region map object', () => {
      expect(generateRegionMap(mockRegion1)).toMatchSnapshot();
    });

    test('should generate modified region map object', () => {
      expect(
        generateRegionMap(mockRegion1, (obj) => ({
          ...obj,
          extra: 'extra',
        })),
      ).toMatchSnapshot();
    });
  });
});
