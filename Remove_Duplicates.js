const getRandomBoolean = () => Math.random() >= 0.5;
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const value = ( 5 < 7 ) ? "True" : "False" ;