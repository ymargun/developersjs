const intermediateAppPath = path.join(buildOutputPath, 'app');
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const scriptRootPath = path.join(repositoryRootPath, 'script');
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);