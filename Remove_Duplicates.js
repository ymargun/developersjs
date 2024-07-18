console.log("1 && 2 = "+(1 && 2));
const maxNumber = arr => Math.max(...arr);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));