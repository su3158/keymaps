/* eslint-disable camelcase */
import {
  reverseObjectMapping,
  reverseModifierScancodeMapping,
  generateRegionMap,
} from './utils';

import global from './global.json';
import en_us from './region_en-us.json';
import fr from './region_fr.json';

export function generateKeymap(global, regions) {
  const MODIFIER_SHIFT = '02';

  const scancodes = {
    global,
    regions: regions.reduce(
      (prev, curr) => ({
        ...prev,
        ...generateRegionMap(curr),
      }),
      {},
    ),
  };

  const humanReadable = {
    global: Object.entries(global).reduce(
      (prev, [key, value]) => ({
        ...prev,
        [key]:
          key === 'language' ? value : reverseObjectMapping(value),
      }),
      {},
    ),
    regions: regions.reduce(
      (prev, curr) => ({
        ...prev,
        ...generateRegionMap(curr, (prop) =>
          reverseModifierScancodeMapping(prop, MODIFIER_SHIFT),
        ),
      }),
      {},
    ),
  };

  return {
    scancodes,
    humanReadable,
  };
}

export default generateKeymap(global, [en_us, fr]);
