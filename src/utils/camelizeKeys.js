import _ from 'lodash';

export const camelizeKeys = (obj) => {
  if (typeof obj === 'string') return _.camelCase(obj);
  return walk(obj);
};

const walk = (obj) => {
  if (!obj || typeof obj !== 'object') return obj;
  if (isDate(obj) || isRegex(obj)) return obj;
  if (isArray(obj)) return map(obj, walk);
  return reduce(
    objectKeys(obj),
    function (acc, key) {
      const camel = _.camelCase(key);
      acc[camel] = walk(obj[key]);
      return acc;
    },
    {}
  );
};

const isArray =
  Array.isArray ||
  function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

const isDate = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Date]';
};

const isRegex = (obj) => {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
};

const has = Object.prototype.hasOwnProperty;
const objectKeys =
  Object.keys ||
  function (obj) {
    const keys = [];
    for (let key in obj) {
      if (has.call(obj, key)) keys.push(key);
    }
    return keys;
  };

function map(xs, f) {
  if (xs.map) return xs.map(f);
  const res = [];
  for (let i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

function reduce(xs, f, acc) {
  if (xs.reduce) return xs.reduce(f, acc);
  for (let i = 0; i < xs.length; i++) {
    acc = f(acc, xs[i], i);
  }
  return acc;
}
