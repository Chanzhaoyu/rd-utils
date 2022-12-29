// Description: Omit properties from an object
export default function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: Array<K | string>
): Omit<T, K> {
  const clone = {
    ...obj,
  };
  keys.forEach((key) => {
    if ((key as K) in clone) {
      delete clone[key as K];
    }
  });
  return clone;
}

const o = { a: 1, b: 2, c: 3 };

console.log(omit(o, ['a']))