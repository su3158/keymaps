export function reverseObjectMapping(obj) {
  return Object.entries(obj).reduce(
    (prev, [key, value]) => ({
      ...prev,
      [value]: key,
    }),
    {},
  );
}

export function reverseModifierScancodeMapping(obj, modifier) {
  return Object.entries(obj).reduce(
    (prev, [key, [unmodified, modified]]) => ({
      ...prev,
      [unmodified]: `00,${key}`,
      [modified]: `${modifier},${key}`,
    }),
    {},
  );
}

export function generateRegionMap({ language, keys }, cb) {
  return {
    [language]: {
      language,
      keys: typeof cb === 'function' ? cb(keys) : keys,
    },
  };
}
