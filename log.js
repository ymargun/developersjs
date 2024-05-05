const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());