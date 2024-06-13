const scriptRootPath = path.join(repositoryRootPath, 'script');
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};