const resultingPromises = urls.map((url) => makHttpRequest(url));
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];