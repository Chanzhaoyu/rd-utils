// Description: Pick properties from an object
function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: Array<K | string>
): Pick<T, K> {
  const clone = {} as Pick<T, K>;
  keys.forEach((key) => {
    const k = key as K;
    if ((key as K) in obj) {
      clone[k] = obj[k];
    }
  });
  return clone;
}

const o = { a: 1, b: 2, c: 3 };

console.log(pick(o, ['a']))
