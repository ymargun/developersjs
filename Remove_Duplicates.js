const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
var DELIM_SIZE = 4;
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));