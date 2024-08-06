const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const electronDownloadPath = path.join(repositoryRootPath, 'electron');