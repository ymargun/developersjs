const isEmptyObject = obj => Object.keys(obj).length === 0;
const isEmptyArray = arr => !arr.length;
const currentDate = () => new Date().toLocaleDateString('en-US');