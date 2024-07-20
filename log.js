const merge = (a, b) => [...a, ...b];
const timeFromDate = date => date.toTimeString().slice(0, 8);
const flattenedArray = arr => [].concat(...arr);