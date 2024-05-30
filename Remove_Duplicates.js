const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const timeFromDate = date => date.toTimeString().slice(0, 8);