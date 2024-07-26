const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
var arr2 = arr1.reverse();