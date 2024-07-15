const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const stringReverse = str => str.split("").reverse().join("");
const result = await makeHttpRequest(url);