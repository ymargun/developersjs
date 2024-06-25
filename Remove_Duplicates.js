const stringReverse = str => str.split("").reverse().join("");
const isWeekday = (date) => date.getDay() % 6 !== 0;
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);