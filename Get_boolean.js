const scriptRootPath = path.join(repositoryRootPath, 'script');
const timeFromDate = date => date.toTimeString().slice(0, 8);
const toggleBool = () => (bool = !bool);