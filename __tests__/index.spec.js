import keymap, { generateKeymap } from '../index';
import mockGlobal from './__mocks__/mockGlobal.json';
import mockRegion1 from './__mocks__/mockRegion1.json';
import mockRegion2 from './__mocks__/mockRegion2.json';

describe('keymap', () => {
  test('should output the custom keymap', () => {
    expect(
      generateKeymap(mockGlobal, [mockRegion1, mockRegion2]),
    ).toMatchSnapshot();
  });

  test('should output the entire keymap', () => {
    expect(keymap).toMatchSnapshot();
  });
});
