const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const repositoryRootPath = path.resolve(__dirname, '..');
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());